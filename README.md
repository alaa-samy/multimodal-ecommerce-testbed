# Common Room — Multimodal Commerce Lab

A controlled ecommerce testbed for the thesis project **Unified Multimodal Product Discovery**.

## What this repository is for

This repository is intentionally separate from the thesis search service. It owns the commerce experience:

- ABO furniture catalog fixture
- Product discovery UI
- Product detail pages
- Cart and test checkout
- AR-ready product surfaces
- Search-provider switching
- Fair comparison conditions

The thesis repository owns the search algorithms and model/index evaluation. This testbed is designed to call that service through a stable provider contract later.

## Current status

- Warm editorial ecommerce UI is implemented.
- A 48-record metadata-only ABO furniture fixture is included at `data/abo-furniture-manifest.json`.
- The full ABO image and 3D archives are intentionally not downloaded or committed.
- The UI has provider switching for `unified_multimodal`, `native`, `meilisearch`, and `algolia`.
- Product IDs, catalog version, price fixture, cart, checkout, and experiment controls are stable across providers.
- Selected product records have an AR-ready `modelUrl` field; replace fixture GLBs with ABO GLBs during the media-ingestion phase.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local preview URL printed by the dev server.

Validate before sharing:

```bash
pnpm check
pnpm build
pnpm test
```

## ABO fixture workflow

The repository stores only small metadata and a reproducible extractor. It does not store the full ABO dataset.

1. Download the compact `abo-listings.tar` archive from the official ABO source outside this repository.
2. Run:

```bash
python scripts/prepare_abo_fixture.py /path/to/abo-listings.tar data/abo-furniture-manifest.json --limit 48
```

3. The script extracts explicit furniture product types and writes only normalized metadata.
4. The image and 3D archive can be connected later through a private/object-storage ingestion job.

ABO attribution must remain visible in the product and research documentation. The dataset is CC BY 4.0; consult the official source for the complete license and archive links.

## Provider contract

The storefront should remain provider-agnostic. A provider must accept a normalized query and return stable product IDs with rank, score, and latency.

```text
POST /search
{
  query,
  image,
  audio,
  top_k,
  catalog_version
}

→
{
  provider,
  query_id,
  results: [{ product_id, rank, score, latency_ms }]
}
```

The current UI uses a deterministic local fixture search so the storefront can be reviewed without an external service. The production integration should replace that local adapter with an HTTP/tRPC provider adapter pointing to the thesis repository’s FastAPI service.

## Suggested next integration

```env
SEARCH_PROVIDER=unified_multimodal
UNIFIED_SEARCH_URL=https://your-thesis-search-service/search
CATALOG_VERSION=abo-furniture-fixture-v0.1
```

Keep the product database in this ecommerce repository. The search service should return product IDs; it should not own prices, checkout state, or customer data.

## Fair experiment rules

For comparative testing, freeze:

- catalog version
- product IDs
- prices
- product images
- product pages
- UI layout
- cart and checkout
- event schema

Change only the search provider. Record the active provider in every experiment event.

## Visual and asset note

The storefront uses a warm editorial visual system and staged interior/product imagery for the UI fixture. The ABO metadata IDs and schema are ready for the next media-ingestion phase; do not interpret the current visual fixture images as the complete ABO image archive.

## License and attribution

- Application code: MIT unless otherwise specified.
- ABO metadata: CC BY 4.0; retain attribution and follow the official dataset terms.
- Third-party visual assets: preserve their source/usage terms when replacing the staged fixture imagery.
