# Academic software shortlist for the multimodal ecommerce testbed

## Best choices for this project

The most practical comparison is not to install five large research systems into the browser. Keep the storefront and event tracking constant, then expose each retrieval method behind the existing provider contract. Build each provider as an offline indexer plus a small `/search` adapter.

### 1. Multimodal Semantic Retrieval for Product Search — first choice for the thesis

- **Paper:** [Multimodal semantic retrieval for product search](https://arxiv.org/abs/2501.07365), 2025.
- **Code:** [mayurbhangale/multimodal-retrieval](https://github.com/mayurbhangale/multimodal-retrieval).
- **What it provides:** a research prototype based on three- and four-tower retrieval. Product text and product images are encoded separately, fused, and ranked in a shared embedding space. The paper evaluates text-only and multimodal variants with FAISS.
- **How to integrate:** use its model/fusion idea in a batch indexer, store one vector per ABO product, and expose a provider adapter that accepts text and image queries. Keep the current FastAPI search contract and return product IDs plus score and latency.
- **Important limitation:** the repository describes itself as an **unofficial implementation** and is small. It is suitable for a thesis baseline or ablation, not as a production-ready service. The repository page does not clearly provide a license, so check permission before redistributing its code.
- **Fit:** highest research relevance because it is explicitly about multimodal ecommerce product retrieval.

### 2. OpenCLIP / SigLIP2 — strongest practical embedding baseline

- **Software:** [mlfoundations/open_clip](https://github.com/mlfoundations/open_clip).
- **Related papers:** [Reproducible scaling laws for contrastive language-image learning](https://arxiv.org/abs/2212.07143), and [SigLIP 2](https://arxiv.org/abs/2502.14786).
- **What it provides:** a maintained open implementation with many image-text checkpoints, including SigLIP and SigLIP2 variants. It exposes simple `encode_image` and `encode_text` APIs and supports normalized dot-product retrieval.
- **How to integrate:** create `openclip_provider` beside the current SigLIP adapter. Re-embed the full ABO catalog with one selected checkpoint, write dimension/model metadata, and compare it against the current provider on the same query set.
- **Important limitation:** the model checkpoint, training data, and usage terms must be checked separately. Do not compare different dimensions or mix an index made with one checkpoint and queries made with another.
- **Fit:** the best near-term replacement or competitor for the current CLIP/SigLIP path because it changes the embedding model without changing the ecommerce UI.

### 3. ColBERTv2 — fair text-search competitor

- **Paper:** [ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction](https://arxiv.org/abs/2112.01488), NAACL 2022.
- **Code:** [stanford-futuredata/colbert](https://github.com/stanford-futuredata/colbert).
- **What it provides:** token-level late-interaction retrieval rather than a single vector per product. The repository includes indexing, searching, evaluation, CPU environment instructions, and an MIT license.
- **How to integrate:** create a text-only provider that indexes each product title, description, attributes, and tags. It is a stronger semantic text baseline than raw keyword matching and gives the thesis a meaningful non-multimodal competitor.
- **Important limitation:** the official README says GPU is required for practical indexing and training, although CPU environments are supported. It does not consume image or voice inputs directly.
- **Fit:** excellent for testing whether the proposed multimodal method beats a strong text-only neural retriever, not just a weak keyword baseline.

### 4. FashionCLIP — useful only as a domain-transfer experiment

- **Paper:** [Contrastive language and vision learning of general fashion concepts](https://www.nature.com/articles/s41598-022-23052-9), 2022.
- **Code and model:** [patrickjohncyh/fashion-clip](https://github.com/patrickjohncyh/fashion-clip) and [FashionCLIP on Hugging Face](https://huggingface.co/patrickjohncyh/fashion-clip).
- **What it provides:** a CLIP-like model fine-tuned on fashion image-text pairs, with a Python API for text and image embeddings and approximate nearest-neighbor retrieval. The repository is MIT licensed.
- **How to integrate:** use it as an out-of-domain transfer baseline on furniture images. Re-embed the same ABO product images and compare text-to-image and image-to-image retrieval against OpenCLIP/SigLIP.
- **Important limitation:** it is trained for fashion, not furniture. A result showing weaker furniture retrieval is scientifically useful, but it should not be presented as a direct competitor optimized for home products.
- **Fit:** good optional ablation for measuring domain mismatch; do not make it the main production provider.

### 5. MMRec — recommendation experiment, not a search endpoint

- **Paper:** [MMRec: Simplifying Multimodal Recommendation](https://arxiv.org/abs/2302.03497), 2023.
- **Code:** [enoche/MMRec](https://github.com/enoche/MMRec).
- **What it provides:** an open-source research toolbox with preprocessing, multimodal recommendation models, training, and Recall/NDCG/MAP evaluation. It supports text, image, audio, and video and includes many recommender models.
- **How to integrate:** use it offline for a second experiment after search. Feed it anonymized interaction events from the storefront—views, clicks, add-to-cart, and purchases—and expose its top recommendations on the product page or fallback section.
- **Important limitation:** its input is user-item interaction data and its repository is GPL-3.0. It is not a drop-in replacement for the current `/search` endpoint, and GPL obligations must be reviewed before combining or redistributing code.
- **Fit:** valuable for the recommendation/conversion part of the thesis, but not necessary for the first search-provider comparison.

### 6. SQID — evaluation data and labels, not a search engine

- **Paper:** [Shopping Queries Image Dataset (SQID)](https://arxiv.org/abs/2405.15190), 2024.
- **Code/data:** [Crossing-Minds/shopping-queries-image-dataset](https://github.com/Crossing-Minds/shopping-queries-image-dataset).
- **What it provides:** an image-enriched Amazon Shopping Queries dataset with query judgments, product IDs, image URLs, CLIP image features, and CLIP query/product text features. The repository reports 164,900 test products plus supplementary products.
- **How to integrate:** use it to create an offline ranking benchmark and relevance test set. It can measure Recall@K, MRR, NDCG, and exact/substitute/irrelevant behavior before asking participants to use the storefront.
- **Important limitation:** it is not a live catalog or provider. Image URLs may be unavailable or change, and Amazon data usage must follow the dataset and source terms.
- **Fit:** the best way to make the software test quantitative and reproducible, especially when the ABO fixture is small.

## Recommended order

1. **OpenCLIP/SigLIP2 provider:** re-index the ABO fixture and compare it with the current model.
2. **ColBERTv2 provider:** add a strong text-only neural baseline.
3. **Multimodal Semantic Retrieval provider:** implement the paper's product-text/product-image fusion as the main research model.
4. **SQID evaluation pipeline:** use fixed relevance judgments and report ranking metrics for all providers.
5. **MMRec later:** use click/add-to-cart data for the recommendation and conversion phase.
6. **FashionCLIP only as an optional domain-transfer ablation.**

## Fair experiment design

Every provider should receive the same product IDs, product metadata, image set, query set, top-k value, and filtering rules. Build indexes offline, record the model name and embedding dimension, then expose the same response shape:

```json
{
  "provider": "openclip_siglip2",
  "query_id": "q-001",
  "results": [
    {"product_id": "ABO-FURN-0174", "rank": 1, "score": 0.83}
  ],
  "latency_ms": 42,
  "fallback_used": false
}
```

Do not compare a true multimodal system only against raw keyword search. At minimum, compare against one strong text-only neural provider such as ColBERTv2 and one open image-text model such as OpenCLIP/SigLIP2. Report both offline ranking metrics and storefront behavior metrics such as search-to-product-click, add-to-cart rate, checkout start rate, and purchase completion.

## References

[1]: https://arxiv.org/abs/2501.07365 "Multimodal semantic retrieval for product search"
[2]: https://github.com/mayurbhangale/multimodal-retrieval "Code for Multimodal Semantic Retrieval for Product Search"
[3]: https://github.com/mlfoundations/open_clip "OpenCLIP official repository"
[4]: https://arxiv.org/abs/2502.14786 "SigLIP 2"
[5]: https://arxiv.org/abs/2112.01488 "ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction"
[6]: https://github.com/stanford-futuredata/colbert "ColBERT official repository"
[7]: https://www.nature.com/articles/s41598-022-23052-9 "Contrastive language and vision learning of general fashion concepts"
[8]: https://github.com/patrickjohncyh/fashion-clip "FashionCLIP repository"
[9]: https://arxiv.org/abs/2302.03497 "MMRec: Simplifying Multimodal Recommendation"
[10]: https://github.com/enoche/MMRec "MMRec repository"
[11]: https://arxiv.org/abs/2405.15190 "Shopping Queries Image Dataset"
[12]: https://github.com/Crossing-Minds/shopping-queries-image-dataset "SQID repository"
