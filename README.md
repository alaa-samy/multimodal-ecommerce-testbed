
## Multimodal interaction model

The catalog now exposes one unified search composer. A request may contain text, an inspiration image, a voice recording, or all three. The UI sends a provider-neutral `SearchQuery` payload; the active adapter decides whether it calls the thesis API, a native keyword engine, Meilisearch, Algolia, or another plugin.

This is intentionally a **search composer**, not a general chat thread. Search is the clearer ecommerce interaction for measurable ranking and conversion experiments. A conversational assistant can be added later as a separate discovery layer without changing the provider contract.

## AR status model

The storefront catalog is intentionally strict: it only includes common furniture products with non-empty material, complete dimensions, and a verified product-specific ABO GLB. Every visible product therefore has `arStatus: "available"`; incomplete or non-AR records are excluded before rendering. Android/Chrome devices can launch the GLB through Scene Viewer/WebXR where supported, while desktop browsers provide the 3D preview.

## Similar-product fallback

The search layer returns an empty exact-match set for truly unknown queries. The catalog UI then deliberately renders a nearby-product fallback instead of an empty page, preserving the behavior described in the thesis. This separation keeps ranking evaluation honest: exact results and fallback recommendations can be measured as different events.
