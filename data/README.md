# ABO fixture data

`abo-furniture-manifest.json` contains 120 real furniture metadata records extracted from the official Amazon Berkeley Objects listings archive.

- Source: Amazon Berkeley Objects
- License: CC BY 4.0
- Fixture version: `abo-furniture-fixture-v0.2-120`
- Records: 120
- Full media archives: intentionally not downloaded or committed

Regenerate it with:

```bash
python scripts/prepare_abo_fixture.py /path/to/abo-listings.tar data/abo-furniture-manifest.json --limit 120
python scripts/build_catalog_from_abo.py data/abo-furniture-manifest.json shared/catalog.ts --limit 120
```

The storefront uses the normalized product schema in `shared/catalog.ts`. The source manifest contains 120 records, but the storefront deliberately exposes only the strict eligible subset: common furniture types with non-empty material, complete width/length/height dimensions, and a verified official ABO GLB. In the current source slice this produces 14 products. Product image URLs are constructed from ABO image IDs and remain remote. Products that fail any requirement are excluded rather than shown with incomplete metadata or unrelated placeholder geometry.
