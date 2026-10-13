
## Multimodal interaction model

The catalog now exposes one unified search composer. A request may contain text, an inspiration image, a voice recording, or all three. The UI sends a provider-neutral `SearchQuery` payload; the active adapter decides whether it calls the thesis API, a native keyword engine, Meilisearch, Algolia, or another plugin.

This is intentionally a **search composer**, not a general chat thread. Search is the clearer ecommerce interaction for measurable ranking and conversion experiments. A conversational assistant can be added later as a separate discovery layer without changing the provider contract.

## AR status model

Products distinguish `available`, `demo`, and `unavailable` AR assets. The current fixture contains demo geometry only for selected products; it is labeled as demo and must not be interpreted as product-specific AR. Product-specific AR becomes available after adding verified ABO GLB/USDZ URLs to the media manifest.

## Similar-product fallback

The search layer returns an empty exact-match set for truly unknown queries. The catalog UI then deliberately renders a nearby-product fallback instead of an empty page, preserving the behavior described in the thesis. This separation keeps ranking evaluation honest: exact results and fallback recommendations can be measured as different events.
