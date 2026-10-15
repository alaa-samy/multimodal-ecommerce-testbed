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
  name: "Amazon Berkeley Objects furniture catalog",
  source: "Amazon Berkeley Objects",
  version: "abo-furniture-fixture-v0.3-ar-ready",
  license: "CC BY 4.0",
  note: "Only eligible furniture records with material, dimensions, and verified official ABO GLB models are shown. Prices are clearly marked research-fixture estimates because ABO listings metadata does not include prices.",
  recordCount: 14,
};

export const PRODUCTS: Product[] = [
  {
    "id": "B07TMH6289",
    "title": "AmazonBasics LeatherSoft Kids/Youth Recliner with Armrest Storage, 5+ Age Group, Light Blue",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics LeatherSoft Kids/Youth Recliner with Armrest Storage, 5+ Age Group, Light Blue. Light Blue leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 320,
    "color": "Light Blue",
    "material": "Leather",
    "style": "Everyday",
    "dimensions": "27.6 inches W × 26.8 inches D × 27.6 inches H",
    "image": "https://m.media-amazon.com/images/I/71T+bO0FkKL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71T+bO0FkKL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/918T-x94B3L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71G+u16bPnL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "chair",
      "chairs",
      "everyday",
      "leather",
      "light blue"
    ],
    "rating": 4.8,
    "reviews": 98,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07TMH6289.glb",
    "arStatus": "available",
    "featured": true
  },
  {
    "id": "B075X4QMW7",
    "title": "Amazon Brand – Rivet Eva Mid-Century Modern Tufted Velvet Down-Filled Sectional Sofa Couch, 87\"W, Navy",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Eva Mid-Century Modern Tufted Velvet Down-Filled Sectional Sofa Couch, 87\"W, Navy. Navy velvet, hardwood frame, metal legs sofas from the Amazon Berkeley Objects catalog.",
    "price": 610,
    "color": "Navy",
    "material": "Velvet, Hardwood frame, Metal legs",
    "style": "Everyday",
    "dimensions": "87 inches W × 35.25 inches D × 30.25 inches H",
    "image": "https://m.media-amazon.com/images/I/81KZp1brWYL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81KZp1brWYL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/818WXL2uM1L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1P3tPyy2nL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "navy",
      "rivet",
      "sofa",
      "sofas",
      "velvet, hardwood frame, metal legs"
    ],
    "rating": 4.7,
    "reviews": 141,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B075X4QMW7.glb",
    "arStatus": "available",
    "featured": true
  },
  {
    "id": "B07VSV4783",
    "title": "Amazon Brand - Movian Ribe - Divano a 3 posti, 92 x 200 x 85 cm (Lu x La x A), verde scuro",
    "brand": "Movian",
    "category": "Sofas",
    "description": "Amazon Brand - Movian Ribe - Divano a 3 posti, 92 x 200 x 85 cm (Lu x La x A), verde scuro. Verde Scuro tela sofas from the Amazon Berkeley Objects catalog.",
    "price": 560,
    "color": "Verde Scuro",
    "material": "Tela",
    "style": "Divano a 3 posti",
    "dimensions": "200 centimeters W × 92 centimeters D × 85 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81yiaE45j+L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81yiaE45j+L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81qEAy76QOL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/712WRLI-kwL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "divano a 3 posti",
      "movian",
      "sofa",
      "sofas",
      "tela",
      "verde scuro"
    ],
    "rating": 4.1,
    "reviews": 396,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07VSV4783.glb",
    "arStatus": "available"
  },
  {
    "id": "B07NR2M291",
    "title": "AmazonBasics Fauteuil de bureau et de gaming, style course, gris",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics Fauteuil de bureau et de gaming, style course, gris. Gris / Noir en tissu chairs from the Amazon Berkeley Objects catalog.",
    "price": 380,
    "color": "Gris / Noir",
    "material": "En tissu",
    "style": "Tissu",
    "dimensions": "28.74 inches W × 21.65 inches D × 49.61 inches H",
    "image": "https://m.media-amazon.com/images/I/71S9P-fW9eL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71S9P-fW9eL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61hatiSugZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81p7yAXvysL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "chair",
      "chairs",
      "en tissu",
      "gris / noir",
      "tissu"
    ],
    "rating": 4.8,
    "reviews": 92,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/1/B07NR2M291.glb",
    "arStatus": "available"
  },
  {
    "id": "B07HPQ7HB5",
    "title": "Amazon Brand - Alkove Elvas Hand-Crafted Leather Sofa, 2 Seater Maxi, 102 x 193 x 93cm, Taupe",
    "brand": "Alkove",
    "category": "Sofas",
    "description": "Amazon Brand - Alkove Elvas Hand-Crafted Leather Sofa, 2 Seater Maxi, 102 x 193 x 93cm, Taupe. Ecru leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 1480,
    "color": "Ecru",
    "material": "Leather",
    "style": "Modern",
    "dimensions": "193 centimeters W × 102 centimeters D × 93 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71Sx3NvHueL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71Sx3NvHueL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71peO3IhHHL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71Ku1JqRkKL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "ecru",
      "leather",
      "modern",
      "sofa",
      "sofas"
    ],
    "rating": 4.8,
    "reviews": 89,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B07HPQ7HB5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07CB54MM3",
    "title": "Amazon Brand – Stone & Beam Bradbury Chesterfield Tufted Sofa Couch, 92.9\"W, Warm Grey",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Bradbury Chesterfield Tufted Sofa Couch, 92.9\"W, Warm Grey. Warm Grey stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 660,
    "color": "Warm Grey",
    "material": "stone",
    "style": "Transitional",
    "dimensions": "38.5 inches W × 84.5 inches D × 35.5 inches H",
    "image": "https://m.media-amazon.com/images/I/81+NZPMuEeL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81+NZPMuEeL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/819WNU2+bcL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81DkjqR1RiL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "sofa",
      "sofas",
      "stone",
      "stone & beam",
      "transitional",
      "warm grey"
    ],
    "rating": 4.4,
    "reviews": 261,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07CB54MM3.glb",
    "arStatus": "available"
  },
  {
    "id": "B075YZ16V7",
    "title": "Amazon Brand – Rivet Mid-Century Stark 6-Drawer Dresser, 61\"W, Warm Espresso",
    "brand": "Rivet",
    "category": "Storage",
    "description": "Amazon Brand – Rivet Mid-Century Stark 6-Drawer Dresser, 61\"W, Warm Espresso. Brown metal storage from the Amazon Berkeley Objects catalog.",
    "price": 650,
    "color": "Brown",
    "material": "metal",
    "style": "Dresser",
    "dimensions": "61 inches W × 18 inches D × 32 inches H",
    "image": "https://m.media-amazon.com/images/I/911EiPQpzgL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/911EiPQpzgL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1vowJYU+8L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1jekIpwIGL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "dresser",
      "metal",
      "rivet",
      "storage"
    ],
    "rating": 4.2,
    "reviews": 341,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B075YZ16V7.glb",
    "arStatus": "available"
  },
  {
    "id": "B07MF1SRH5",
    "title": "Amazon Brand – Ravenna Home Damask-Pattern Ceramic Garden Stool or Side Table, 16\"H, Off-White",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Damask-Pattern Ceramic Garden Stool or Side Table, 16\"H, Off-White. Off White ceramic tables from the Amazon Berkeley Objects catalog.",
    "price": 430,
    "color": "Off White",
    "material": "ceramic",
    "style": "Damask Pattern",
    "dimensions": "13 inches W × 13 inches D × 15.75 inches H",
    "image": "https://m.media-amazon.com/images/I/71dC4k21CnL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71dC4k21CnL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Fesvm0HwL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91dxo4m6XxL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "ceramic",
      "damask pattern",
      "off white",
      "ravenna home",
      "table",
      "tables"
    ],
    "rating": 4.2,
    "reviews": 335,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B07MF1SRH5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07M6PKCM3",
    "title": "Amazon Brand – Ravenna Home Damask-Pattern Ceramic Garden Stool or Side Table, 16\"H, Grey",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Damask-Pattern Ceramic Garden Stool or Side Table, 16\"H, Grey. Grey ceramic tables from the Amazon Berkeley Objects catalog.",
    "price": 320,
    "color": "Grey",
    "material": "ceramic",
    "style": "Damask Pattern",
    "dimensions": "13 inches W × 13 inches D × 15.75 inches H",
    "image": "https://m.media-amazon.com/images/I/81fn9NzBp5L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81fn9NzBp5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91aDl46SObL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1X+hAiwF9L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "ceramic",
      "damask pattern",
      "grey",
      "ravenna home",
      "table",
      "tables"
    ],
    "rating": 4.2,
    "reviews": 329,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07M6PKCM3.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DB8XGY2",
    "title": "Amazon Brand – Ravenna Home Raymond Casual Nailhead Trim Sofa, 76\"W, Beige",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Amazon Brand – Ravenna Home Raymond Casual Nailhead Trim Sofa, 76\"W, Beige. Beige metal sofas from the Amazon Berkeley Objects catalog.",
    "price": 1360,
    "color": "Beige",
    "material": "Metal",
    "style": "Transitional",
    "dimensions": "76 inches W × 32 inches D × 35.75 inches H",
    "image": "https://m.media-amazon.com/images/I/81IgxszK9CL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81IgxszK9CL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91H1KFTsVnL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/912bDzTfz9L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "beige",
      "metal",
      "ravenna home",
      "sofa",
      "sofas",
      "transitional"
    ],
    "rating": 4.3,
    "reviews": 283,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B07DB8XGY2.glb",
    "arStatus": "available"
  },
  {
    "id": "B07QBMQ729",
    "title": "Amazon Brand – Ravenna Home Maplewood Reclining Sofa, 92\"W, Leather, Dark Roast",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Amazon Brand – Ravenna Home Maplewood Reclining Sofa, 92\"W, Leather, Dark Roast. Dark Roast hardwood sofas from the Amazon Berkeley Objects catalog.",
    "price": 1290,
    "color": "Dark Roast",
    "material": "Hardwood",
    "style": "Everyday",
    "dimensions": "92 inches W × 39 inches D × 41 inches H",
    "image": "https://m.media-amazon.com/images/I/81bG8cn+sJL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81bG8cn+sJL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81I1L4rFnHL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/810tSnecPtL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "dark roast",
      "everyday",
      "hardwood",
      "ravenna home",
      "sofa",
      "sofas"
    ],
    "rating": 4.3,
    "reviews": 280,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07QBMQ729.glb",
    "arStatus": "available"
  },
  {
    "id": "B00EUL2B16",
    "title": "Ashley Furniture Signature Design - Leahlyn Dining Upholstered Side Chair - Pierced Splat Back - Set of 2 - Medium Brown",
    "brand": "Signature Design by Ashley",
    "category": "Chairs",
    "description": "Ashley Furniture Signature Design - Leahlyn Dining Upholstered Side Chair - Pierced Splat Back - Set of 2 - Medium Brown. Pierced Splat Back made of veneers wood and engineered wood chairs from the Amazon Berkeley Objects catalog.",
    "price": 240,
    "color": "Pierced Splat Back",
    "material": "Made of veneers wood and engineered wood",
    "style": "Contemporary",
    "dimensions": "18 inches W × 22.5 inches D × 38 inches H",
    "image": "https://m.media-amazon.com/images/I/71bNxYbyIhL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71bNxYbyIhL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91+uylAJuEL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81dU2sSc5+L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "contemporary",
      "made of veneers wood and engineered wood",
      "pierced splat back",
      "signature design by ashley"
    ],
    "rating": 4.1,
    "reviews": 366,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B00EUL2B16.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4NVYM9",
    "title": "Amazon Brand – Rivet Edgewest Low Back Modern Loveseat, 65\"W, Rouge Red",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Edgewest Low Back Modern Loveseat, 65\"W, Rouge Red. Rouge Red metal sofas from the Amazon Berkeley Objects catalog.",
    "price": 1000,
    "color": "Rouge Red",
    "material": "Metal",
    "style": "Industrial",
    "dimensions": "65 inches W × 33 inches D × 32 inches H",
    "image": "https://m.media-amazon.com/images/I/81NOlr5HUTL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81NOlr5HUTL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/917AxVjpyzL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81Y1UnFZTLL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "industrial",
      "metal",
      "rivet",
      "rouge red",
      "sofa",
      "sofas"
    ],
    "rating": 4.7,
    "reviews": 105,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07B4NVYM9.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DBDQLF2",
    "title": "Amazon Brand – Ravenna Home Kaiden Patterned Nailhead Accent Chair, 33\"W, Blue Moroccan",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Kaiden Patterned Nailhead Accent Chair, 33\"W, Blue Moroccan. Blue Morrocan polyester chairs from the Amazon Berkeley Objects catalog.",
    "price": 590,
    "color": "Blue Morrocan",
    "material": "Polyester",
    "style": "Everyday",
    "dimensions": "33 inches W × 30 inches D × 30 inches H",
    "image": "https://m.media-amazon.com/images/I/51B0TKuBbQL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/51B0TKuBbQL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91fwZ1uVuSL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81zDbDG7QRL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "blue morrocan",
      "chair",
      "chairs",
      "everyday",
      "polyester",
      "ravenna home"
    ],
    "rating": 4.8,
    "reviews": 59,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B07DBDQLF2.glb",
    "arStatus": "available"
  }
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
