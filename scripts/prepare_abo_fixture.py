#!/usr/bin/env python3
"""Extract a small, reproducible furniture metadata fixture from ABO listings.

The full ABO image and 3D archives are intentionally not downloaded by this project.
Usage:
  python scripts/prepare_abo_fixture.py /path/to/abo-listings.tar data/abo-furniture-manifest.json --limit 120
"""
from __future__ import annotations

import argparse
import gzip
import json
import tarfile
from pathlib import Path

FURNITURE_TERMS = (
    "furniture", "sofa", "couch", "chair", "table", "desk", "bed", "mattress",
    "cabinet", "shelf", "shelving", "dresser", "ottoman", "bench", "stool",
    "bookcase", "nightstand", "wardrobe", "seating", "living room", "dining",
)
FURNITURE_TYPES = {"SOFA", "CHAIR", "TABLE", "DESK", "BED", "MATTRESS", "CABINET", "BOOKCASE", "DRESSER", "OTTOMAN", "BENCH", "STOOL", "FURNITURE"}


def localized_value(values: list[dict] | None) -> str | None:
    if not values:
        return None
    for item in values:
        if item.get("language_tag") == "en_US" and item.get("value"):
            return item["value"]
    return next((item.get("value") for item in values if item.get("value")), None)


def is_furniture(record: dict) -> bool:
    product_type = (record.get("product_type", [{}])[0].get("value", "") if record.get("product_type") else "").upper()
    return product_type in FURNITURE_TYPES


def compact(record: dict) -> dict:
    return {
        "item_id": record.get("item_id"),
        "item_name": localized_value(record.get("item_name")),
        "brand": localized_value(record.get("brand")),
        "product_type": localized_value(record.get("product_type")),
        "style": localized_value(record.get("style")),
        "color": localized_value(record.get("color")),
        "material": localized_value(record.get("material")),
        "main_image_id": record.get("main_image_id"),
        "other_image_ids": record.get("other_image_id", []),
        "marketplace": record.get("marketplace"),
        "domain_name": record.get("domain_name"),
        "node": [node.get("node_name") for node in record.get("node", []) if node.get("node_name")],
        "item_dimensions": record.get("item_dimensions"),
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("archive", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--limit", type=int, default=120)
    args = parser.parse_args()

    found: list[dict] = []
    with tarfile.open(args.archive, "r") as archive:
        members = [member for member in archive.getmembers() if member.name.startswith("listings/metadata/") and member.name.endswith(".json.gz")]
        for member in sorted(members, key=lambda item: item.name):
            fileobj = archive.extractfile(member)
            if fileobj is None:
                continue
            with gzip.GzipFile(fileobj=fileobj) as stream:
                for raw in stream:
                    raw = raw.strip()
                    if not raw:
                        continue
                    record = json.loads(raw)
                    if record.get("item_id") and is_furniture(record):
                        found.append(compact(record))
                        if len(found) >= args.limit:
                            break
            if len(found) >= args.limit:
                break

    args.output.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "source": "Amazon Berkeley Objects",
        "license": "CC BY 4.0",
        "fixture_version": "abo-furniture-fixture-v0.2-120",
        "archive_used": "abo-listings.tar",
        "downloaded_media": False,
        "note": "Metadata-only fixture. Full ABO image and 3D archives are intentionally not included.",
        "products": found,
    }
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(found)} furniture records to {args.output}")


if __name__ == "__main__":
    main()
