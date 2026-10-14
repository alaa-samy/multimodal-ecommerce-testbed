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

The storefront uses the normalized product schema in `shared/catalog.ts`. Product image URLs are constructed from ABO image IDs and remain remote. The catalog generator verifies official ABO GLB URLs without downloading model files; products with a verified GLB expose a product-specific 3D viewer and AR action on supported devices. Products without a verified GLB are labeled unavailable rather than showing unrelated placeholder geometry.
