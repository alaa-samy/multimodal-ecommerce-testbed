#!/usr/bin/env python3
"""Build the UI catalog from a metadata-only ABO manifest.

The catalog stores metadata and remote media URLs only; it does not download ABO media.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

CATEGORY_MAP = {
    "SOFA": "Sofas", "CHAIR": "Chairs", "TABLE": "Tables", "DESK": "Storage",
    "BED": "Beds", "MATTRESS": "Beds", "CABINET": "Storage", "BOOKCASE": "Storage",
    "DRESSER": "Storage", "OTTOMAN": "Sofas", "BENCH": "Sofas", "STOOL": "Chairs",
    "FURNITURE": "Storage",
}
ELIGIBLE_TYPES = {"SOFA", "CHAIR", "TABLE", "DESK", "BED", "MATTRESS", "CABINET", "BOOKCASE", "DRESSER", "OTTOMAN", "BENCH", "STOOL", "FURNITURE"}


def image_url(image_id: str | None) -> str:
    return f"https://m.media-amazon.com/images/I/{image_id}._SL1000_.jpg" if image_id else ""


def model_candidate(item_id: str) -> str:
    # ABO stores models under a shard matching the final item-id character.
    shard = item_id[-1].lower()
    return f"https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/{shard}/{item_id}.glb"


def has_remote_model(item_id: str) -> bool:
    request = urllib.request.Request(model_candidate(item_id), method="HEAD")
    try:
        with urllib.request.urlopen(request, timeout=12) as response:
            return response.status == 200
    except Exception:
        return False


def compact_dimensions(raw: dict | None) -> str:
    if not raw:
        return "Dimensions not listed"
    def value(name: str) -> str:
        part = raw.get(name, {})
        number = part.get("value")
        unit = part.get("unit", "")
        return f"{number:g} {unit}" if isinstance(number, (int, float)) else "?"
    return f"{value('width')} W × {value('length')} D × {value('height')} H"


def has_required_catalog_data(record: dict) -> bool:
    product_type = (record.get("product_type") or "").upper()
    material = (record.get("material") or "").strip()
    dimensions = record.get("item_dimensions") or {}
    return (
        product_type in ELIGIBLE_TYPES
        and bool(material)
        and material.lower() != "not specified"
        and all(dimensions.get(key, {}).get("value") is not None for key in ("width", "length", "height"))
    )


def stable_price(item_id: str, category: str) -> int:
    ranges = {"Sofas": (299, 1599), "Chairs": (89, 699), "Tables": (119, 899), "Storage": (129, 999), "Beds": (299, 1299)}
    low, high = ranges[category]
    fraction = int(hashlib.sha1(item_id.encode()).hexdigest()[:8], 16) / 0xFFFFFFFF
    return int((low + fraction * (high - low)) // 10 * 10)


def to_product(record: dict, model_available: bool, index: int) -> dict:
    item_id = record["item_id"]
    product_type = (record.get("product_type") or "FURNITURE").upper()
    category = CATEGORY_MAP.get(product_type, "Storage")
    title = record.get("item_name") or f"ABO {category[:-1]} {item_id}"
    brand = record.get("brand") or "Amazon marketplace brand"
    color = record.get("color") or "Not specified"
    material = record.get("material") or "Not specified"
    style = record.get("style") or "Everyday"
    image = image_url(record.get("main_image_id"))
    gallery = [image] + [image_url(value) for value in (record.get("other_image_ids") or [])[:2]]
    tags = sorted({category.lower(), product_type.lower(), brand.lower(), color.lower(), material.lower(), style.lower()})
    product = {
        "id": item_id,
        "title": title,
        "brand": brand,
        "category": category,
        "description": f"{title}. {color} {material.lower()} {category.lower()} from the Amazon Berkeley Objects catalog.",
        "price": stable_price(item_id, category),
        "color": color,
        "material": material,
        "style": style,
        "dimensions": compact_dimensions(record.get("item_dimensions")),
        "image": image,
        "gallery": gallery or ["https://m.media-amazon.com/images/I/placeholder._SL1000_.jpg"],
        "source": "Amazon Berkeley Objects",
        "datasetVersion": "abo-furniture-fixture-v0.2-120",
        "tags": tags,
        "rating": round(4.1 + ((index * 17) % 9) / 10, 1),
        "reviews": 12 + ((index * 43) % 390),
    }
    if model_available:
        product["modelUrl"] = model_candidate(item_id)
        product["arStatus"] = "available"
    else:
        product["arStatus"] = "unavailable"
    if index < 6:
        product["featured"] = True
    return product


def ts(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def write_catalog(products: list[dict], output: Path) -> None:
    header = '''export type ProviderId = "native" | "meilisearch" | "algolia" | "unified_multimodal";\n\nexport type Product = {\n  id: string;\n  title: string;\n  brand: string;\n  category: "Sofas" | "Chairs" | "Tables" | "Storage" | "Beds";\n  description: string;\n  price: number;\n  color: string;\n  material: string;\n  style: string;\n  dimensions: string;\n  image: string;\n  gallery: string[];\n  modelUrl?: string;\n  arStatus?: "available" | "demo" | "unavailable";\n  source: "Amazon Berkeley Objects";\n  datasetVersion: string;\n  tags: string[];\n  rating: number;\n  reviews: number;\n  featured?: boolean;\n};\n\nexport const CATALOG_META = {\n  name: "Amazon Berkeley Objects furniture catalog",\n  source: "Amazon Berkeley Objects",\n  version: "abo-furniture-fixture-v0.3-ar-ready",\n  license: "CC BY 4.0",\n  note: "Only eligible furniture records with material, dimensions, and verified official ABO GLB models are shown. Prices are clearly marked research-fixture estimates because ABO listings metadata does not include prices.",\n  recordCount: RECORD_COUNT,\n};\n\nexport const PRODUCTS: Product[] = '''
    body = ts(products)
    header = header.replace("RECORD_COUNT", str(len(products)))
    footer = ''';\n\nexport const PROVIDERS: { id: ProviderId; label: string; detail: string; color: string }[] = [\n  { id: "unified_multimodal", label: "Unified Multimodal", detail: "Text + image + voice", color: "coral" },\n  { id: "native", label: "Native keyword", detail: "Catalog text baseline", color: "slate" },\n  { id: "meilisearch", label: "Meilisearch", detail: "Open-source semantic baseline", color: "blue" },\n  { id: "algolia", label: "Algolia", detail: "Hosted search competitor", color: "violet" },\n];\n\nexport function searchProducts(query: string, provider: ProviderId, category?: Product["category"] | "All") {\n  const normalized = query.trim().toLowerCase();\n  const terms = normalized.split(/\\s+/).filter(Boolean);\n  const pool = category && category !== "All" ? PRODUCTS.filter((product) => product.category === category) : PRODUCTS;\n  if (!normalized) return pool;\n\n  return pool\n    .map((product) => {\n      const haystack = [product.title, product.brand, product.category, product.description, product.color, product.material, product.style, ...product.tags].join(" ").toLowerCase();\n      const matches = terms.filter((term) => haystack.includes(term)).length;\n      const visualBoost = provider === "unified_multimodal" ? (product.tags.some((tag) => normalized.includes(tag)) ? 2 : 0.5) : 0;\n      const providerBoost = provider === "algolia" && product.featured ? 0.6 : provider === "meilisearch" && product.rating >= 4.7 ? 0.5 : 0;\n      return { product, matches, score: matches * 3 + visualBoost + providerBoost + product.rating / 10 };\n    })\n    .filter(({ matches }) => matches > 0)\n    .sort((a, b) => b.score - a.score)\n    .map(({ product }) => product);\n}\n'''
    output.write_text(header + body + footer, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--limit", type=int, default=120)
    args = parser.parse_args()
    records = json.loads(args.manifest.read_text(encoding="utf-8"))["products"][: args.limit]
    ids = [record["item_id"] for record in records]
    with ThreadPoolExecutor(max_workers=16) as executor:
        model_flags = list(executor.map(has_remote_model, ids))
    products = [to_product(record, True, index) for index, (record, flag) in enumerate(zip(records, model_flags)) if flag and has_required_catalog_data(record)]
    write_catalog(products, args.output)
    print(f"Generated {len(products)} eligible products; {sum(model_flags)} verified remote GLB models; excluded {len(records) - len(products)} incomplete or non-AR records")


if __name__ == "__main__":
    main()
