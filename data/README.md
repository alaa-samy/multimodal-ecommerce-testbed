# ABO fixture data

`abo-furniture-manifest.json` is a small metadata-only fixture extracted from the official Amazon Berkeley Objects listings archive.

- Source: Amazon Berkeley Objects
- License: CC BY 4.0
- Fixture version: `abo-furniture-fixture-v0.1`
- Records: 48
- Full media archives: intentionally not included

Regenerate it with:

```bash
python scripts/prepare_abo_fixture.py /path/to/abo-listings.tar data/abo-furniture-manifest.json --limit 48
```

The storefront currently uses the normalized product schema in `shared/catalog.ts`. The manifest preserves real ABO IDs and metadata for the next import phase. Add a media ingestion manifest mapping `main_image_id` and `other_image_ids` to object-storage URLs before participant testing.
