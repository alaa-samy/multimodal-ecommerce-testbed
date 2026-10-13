export type ProviderId = "native" | "meilisearch" | "algolia" | "unified_multimodal";

export type Product = {
  id: string;
  title: string;
  brand: string;
  category: "Sofas" | "Chairs" | "Tables" | "Storage" | "Beds";
  description: string;
  price: number;
  color: string;
  material: string;
  style: string;
  dimensions: string;
  image: string;
  gallery: string[];
  modelUrl?: string;
  arStatus?: "available" | "demo" | "unavailable";
  source: "Amazon Berkeley Objects";
  datasetVersion: string;
  tags: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
};

export const CATALOG_META = {
  name: "ABO furniture fixture",
  source: "Amazon Berkeley Objects",
  version: "abo-furniture-fixture-v0.1",
  license: "CC BY 4.0",
  note: "Small, UI-ready fixture for provider and conversion experiments. Replace with the prepared ABO subset before participant testing.",
};

const modelViewerChair = "https://modelviewer.dev/shared-assets/models/Chair.glb";

export const PRODUCTS: Product[] = [
  {
    id: "ABO-B075X4QMX3",
    title: "Westport Nailhead Upholstered Sofa",
    brand: "Stone & Beam",
    category: "Sofas",
    description: "A long, relaxed sofa with reversible cushions, linen upholstery, and a warm wood base.",
    price: 1299,
    color: "Oatmeal",
    material: "Linen",
    style: "Modern classic",
    dimensions: "87\" W × 37.75\" D × 33\" H",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=88",
    ],
    modelUrl: modelViewerChair,
    arStatus: "demo",
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["sofa", "linen", "neutral", "living room", "family room"],
    rating: 4.8,
    reviews: 142,
    featured: true,
  },
  {
    id: "ABO-FURN-0174",
    title: "Marlow Bouclé Lounge Chair",
    brand: "Rivet",
    category: "Chairs",
    description: "A sculptural accent chair with soft bouclé texture and a deep, sink-in seat.",
    price: 468,
    color: "Ivory",
    material: "Bouclé",
    style: "Soft modern",
    dimensions: "31.5\" W × 30\" D × 29\" H",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=88"],
    modelUrl: modelViewerChair,
    arStatus: "demo",
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["chair", "boucle", "accent", "ivory", "reading nook"],
    rating: 4.7,
    reviews: 88,
    featured: true,
  },
  {
    id: "ABO-FURN-0231",
    title: "Raya Walnut Media Console",
    brand: "Rivet",
    category: "Storage",
    description: "Clean-lined storage with tambour doors, open shelving, and a rich walnut finish.",
    price: 789,
    color: "Walnut",
    material: "Wood",
    style: "Mid-century",
    dimensions: "70\" W × 18\" D × 26\" H",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["storage", "console", "walnut", "media", "wood"],
    rating: 4.6,
    reviews: 67,
    featured: true,
  },
  {
    id: "ABO-FURN-0412",
    title: "Aster Oval Coffee Table",
    brand: "Zinus",
    category: "Tables",
    description: "An airy oval coffee table that pairs a honed top with a gently curved base.",
    price: 329,
    color: "Cream",
    material: "Engineered stone",
    style: "Contemporary",
    dimensions: "48\" W × 28\" D × 15\" H",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=1000&q=88"],
    arStatus: "unavailable",
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["coffee table", "oval", "cream", "contemporary", "living room"],
    rating: 4.5,
    reviews: 54,
  },
  {
    id: "ABO-FURN-0528",
    title: "Cove Cane Dining Chair",
    brand: "Christopher Knight Home",
    category: "Chairs",
    description: "A warm oak dining chair with a woven cane back and gently tapered legs.",
    price: 219,
    color: "Natural",
    material: "Oak + cane",
    style: "Coastal modern",
    dimensions: "19\" W × 21\" D × 31\" H",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["chair", "dining", "cane", "oak", "natural"],
    rating: 4.8,
    reviews: 103,
  },
  {
    id: "ABO-FURN-0617",
    title: "Soren Low Profile Bed",
    brand: "Zinus",
    category: "Beds",
    description: "A calm, low-profile bed with softly upholstered rails and a simple architectural silhouette.",
    price: 649,
    color: "Sand",
    material: "Performance fabric",
    style: "Scandinavian",
    dimensions: "83\" W × 88\" D × 39\" H",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["bed", "sand", "scandinavian", "bedroom", "upholstered"],
    rating: 4.6,
    reviews: 71,
  },
  {
    id: "ABO-FURN-0720",
    title: "Noma Textured Accent Sofa",
    brand: "Stone & Beam",
    category: "Sofas",
    description: "A compact sofa with textured upholstery, rounded arms, and a little more personality.",
    price: 979,
    color: "Terracotta",
    material: "Polyester weave",
    style: "Contemporary",
    dimensions: "78\" W × 35\" D × 31\" H",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=88"],
    modelUrl: modelViewerChair,
    arStatus: "demo",
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["sofa", "terracotta", "textured", "color", "small space"],
    rating: 4.7,
    reviews: 94,
  },
  {
    id: "ABO-FURN-0891",
    title: "Etta Round Side Table",
    brand: "Walker Edison",
    category: "Tables",
    description: "A small round side table with a brushed metal base and a warm stone-look top.",
    price: 149,
    color: "Black",
    material: "Metal + laminate",
    style: "Minimal",
    dimensions: "18\" W × 18\" D × 22\" H",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["table", "side table", "black", "minimal", "small"],
    rating: 4.4,
    reviews: 36,
  },
  {
    id: "ABO-FURN-0918",
    title: "Lina Low-Back Counter Stool",
    brand: "Amazon Brand",
    category: "Chairs",
    description: "A supportive counter stool with a low back and a clean, softly rounded profile.",
    price: 176,
    color: "Black",
    material: "Faux leather",
    style: "Modern",
    dimensions: "18.5\" W × 20\" D × 36\" H",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["stool", "counter", "black", "faux leather", "kitchen"],
    rating: 4.5,
    reviews: 62,
  },
  {
    id: "ABO-FURN-1034",
    title: "Mira Arched Bookshelf",
    brand: "Nathan James",
    category: "Storage",
    description: "An open bookshelf with softened arches that turns everyday storage into a focal point.",
    price: 399,
    color: "Oak",
    material: "Wood veneer",
    style: "Japandi",
    dimensions: "31\" W × 14\" D × 71\" H",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["bookshelf", "storage", "oak", "japandi", "arch"],
    rating: 4.8,
    reviews: 119,
  },
  {
    id: "ABO-FURN-1186",
    title: "Lumen Glass Dining Table",
    brand: "Rivet",
    category: "Tables",
    description: "A crisp glass dining table with a sculptural pedestal for intimate dinners and bright rooms.",
    price: 729,
    color: "Clear",
    material: "Glass + metal",
    style: "Modern",
    dimensions: "54\" W × 54\" D × 30\" H",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["dining table", "glass", "modern", "clear", "pedestal"],
    rating: 4.6,
    reviews: 41,
  },
  {
    id: "ABO-FURN-1240",
    title: "Haven Bouclé Bench",
    brand: "Christopher Knight Home",
    category: "Sofas",
    description: "A low bench in soft bouclé that works at the foot of the bed or as extra living-room seating.",
    price: 289,
    color: "Cream",
    material: "Bouclé + wood",
    style: "Soft modern",
    dimensions: "48\" W × 18\" D × 18\" H",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=88",
    gallery: ["https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=88"],
    source: "Amazon Berkeley Objects",
    datasetVersion: CATALOG_META.version,
    tags: ["bench", "boucle", "cream", "bedroom", "seating"],
    rating: 4.7,
    reviews: 57,
  },
];

export const PROVIDERS: { id: ProviderId; label: string; detail: string; color: string }[] = [
  { id: "unified_multimodal", label: "Unified Multimodal", detail: "Text + image + voice", color: "coral" },
  { id: "native", label: "Native keyword", detail: "Catalog text baseline", color: "slate" },
  { id: "meilisearch", label: "Meilisearch", detail: "Open-source semantic baseline", color: "blue" },
  { id: "algolia", label: "Algolia", detail: "Hosted search competitor", color: "violet" },
];

export function searchProducts(query: string, provider: ProviderId, category?: Product["category"] | "All") {
  const normalized = query.trim().toLowerCase();
  const terms = normalized.split(/\s+/).filter(Boolean);
  const pool = category && category !== "All" ? PRODUCTS.filter((product) => product.category === category) : PRODUCTS;
  if (!normalized) return pool;

  return pool
    .map((product) => {
      const haystack = [product.title, product.brand, product.category, product.description, product.color, product.material, product.style, ...product.tags].join(" ").toLowerCase();
      const matches = terms.filter((term) => haystack.includes(term)).length;
      const visualBoost = provider === "unified_multimodal" ? (product.tags.some((tag) => normalized.includes(tag)) ? 2 : 0.5) : 0;
      const providerBoost = provider === "algolia" && product.featured ? 0.6 : provider === "meilisearch" && product.rating >= 4.7 ? 0.5 : 0;
      return { product, matches, score: matches * 3 + visualBoost + providerBoost + product.rating / 10 };
    })
    .filter(({ matches }) => matches > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ product }) => product);
}
