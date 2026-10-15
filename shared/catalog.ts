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
  version: "abo-furniture-fixture-v0.4-ar-ready-color-500",
  license: "CC BY 4.0",
  note: "Only eligible furniture records with material, dimensions, and verified official ABO GLB models are shown. Prices are clearly marked research-fixture estimates because ABO listings metadata does not include prices.",
  recordCount: 75,
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
  },
  {
    "id": "B082VL7BQ1",
    "title": "Amazon Brand – Stone & Beam Westview Extra-Deep Down-Filled Leather Accent Chair, 43.3\"W, Dark Grey",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Westview Extra-Deep Down-Filled Leather Accent Chair, 43.3\"W, Dark Grey. Dark Grey leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 400,
    "color": "Dark Grey",
    "material": "Leather",
    "style": "Everyday",
    "dimensions": "42.126 inches W × 43.3071 inches D × 31.5 inches H",
    "image": "https://m.media-amazon.com/images/I/71kyPI0gr4L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71kyPI0gr4L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71F56pBFtrL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81ERuwe+ffL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "dark grey",
      "everyday",
      "leather",
      "stone & beam"
    ],
    "rating": 4.6,
    "reviews": 145,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/1/B082VL7BQ1.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DBHCKJ5",
    "title": "Amazon Brand – Ravenna Home Ryleigh Rounded Mid-Century Barrel Accent Chair, 27.5\"W, Charcoal Grey",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Ryleigh Rounded Mid-Century Barrel Accent Chair, 27.5\"W, Charcoal Grey. Charcoal Grey polyester chairs from the Amazon Berkeley Objects catalog.",
    "price": 100,
    "color": "Charcoal Grey",
    "material": "Polyester",
    "style": "Transitional",
    "dimensions": "27.5 inches W × 28 inches D × 32.5 inches H",
    "image": "https://m.media-amazon.com/images/I/A1hNm4T+muL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1hNm4T+muL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1WEEtxKDeL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1vGIbbyS9L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "charcoal grey",
      "polyester",
      "ravenna home",
      "transitional"
    ],
    "rating": 4.5,
    "reviews": 188,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B07DBHCKJ5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07BWM2CR9",
    "title": "Amazon Brand – Rivet Edgewest Low Back Modern Right L-Sectional, 116\"W, Charcoal Grey",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Edgewest Low Back Modern Right L-Sectional, 116\"W, Charcoal Grey. Charcoal Grey polyester sofas from the Amazon Berkeley Objects catalog.",
    "price": 1320,
    "color": "Charcoal Grey",
    "material": "Polyester",
    "style": "Industrial",
    "dimensions": "36 inches W × 88 inches D × 28 inches H",
    "image": "https://m.media-amazon.com/images/I/81iJ5CJbuJL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81iJ5CJbuJL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91VvEZkdEeL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81FHT605TGL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "charcoal grey",
      "industrial",
      "polyester",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.4,
    "reviews": 231,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07BWM2CR9.glb",
    "arStatus": "available"
  },
  {
    "id": "B07HPQFNC9",
    "title": "Amazon Brand - Alkove Kutina Hand-Crafted Leather Sofa, 3 Seater, 94 x 203 x 87cm, Taupe",
    "brand": "Alkove",
    "category": "Sofas",
    "description": "Amazon Brand - Alkove Kutina Hand-Crafted Leather Sofa, 3 Seater, 94 x 203 x 87cm, Taupe. Ecru leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 830,
    "color": "Ecru",
    "material": "Leather",
    "style": "Modern",
    "dimensions": "203 centimeters W × 94 centimeters D × 87 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71n3oBVdrmL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71n3oBVdrmL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81Mv1vXtgZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71dEWRzGVuL._SL1000_.jpg"
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
    "rating": 4.6,
    "reviews": 142,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07HPQFNC9.glb",
    "arStatus": "available"
  },
  {
    "id": "B07TGC3432",
    "title": "Een merk van Amazon - Movian Arendsee - set van 2 eetkamerstoelen, 55 x 55 x 85 cm (L x B x H)",
    "brand": "Movian",
    "category": "Chairs",
    "description": "Een merk van Amazon - Movian Arendsee - set van 2 eetkamerstoelen, 55 x 55 x 85 cm (L x B x H). Hnědá kunstleder chairs from the Amazon Berkeley Objects catalog.",
    "price": 240,
    "color": "Hnědá",
    "material": "Kunstleder",
    "style": "Set met 2 eetkamerstoelen.",
    "dimensions": "48.5 centimeters W × 55 centimeters D × 85 centimeters H",
    "image": "https://m.media-amazon.com/images/I/710VuWDJo7L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/710VuWDJo7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41t2Np5LApL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41Qi5Z1Fd-L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "hnědá",
      "kunstleder",
      "movian",
      "set met 2 eetkamerstoelen."
    ],
    "rating": 4.1,
    "reviews": 357,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B07TGC3432.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4NW6J9",
    "title": "Amazon Brand – Stone & Beam Andover Modern Right Chaise Sofa Sectional, 126\"W, Charcoal",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Andover Modern Right Chaise Sofa Sectional, 126\"W, Charcoal. Charcoal stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 450,
    "color": "Charcoal",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "31 inches W × 88 inches D × 41 inches H",
    "image": "https://m.media-amazon.com/images/I/81LrWQh4zhL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81LrWQh4zhL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91iiqWd2gtL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1sh9Ig5SQL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "charcoal",
      "everyday",
      "sofa",
      "sofas",
      "stone",
      "stone & beam"
    ],
    "rating": 4.5,
    "reviews": 182,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07B4NW6J9.glb",
    "arStatus": "available"
  },
  {
    "id": "B07R4T5PN8",
    "title": "Marque Amazon - Movian Keitele- Canapé 3 places, 193 x 79 x 79 cm, Gris foncé",
    "brand": "Movian",
    "category": "Sofas",
    "description": "Marque Amazon - Movian Keitele- Canapé 3 places, 193 x 79 x 79 cm, Gris foncé. Gris Foncé tissu sofas from the Amazon Berkeley Objects catalog.",
    "price": 850,
    "color": "Gris Foncé",
    "material": "Tissu",
    "style": "Moderne",
    "dimensions": "79 centimeters W × 193 centimeters D × 79 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81s9mVh+FUL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81s9mVh+FUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81Ueow2nheL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81EA50s8MiL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "gris foncé",
      "moderne",
      "movian",
      "sofa",
      "sofas",
      "tissu"
    ],
    "rating": 4.1,
    "reviews": 354,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07R4T5PN8.glb",
    "arStatus": "available"
  },
  {
    "id": "B085FHBF21",
    "title": "Amazon Brand – Ravenna Home Contemporary Swivel Glider Recliner Chair, 33.9\"W, Smoke Grey",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Contemporary Swivel Glider Recliner Chair, 33.9\"W, Smoke Grey. Grey textile chairs from the Amazon Berkeley Objects catalog.",
    "price": 560,
    "color": "Grey",
    "material": "Textile",
    "style": "Modern",
    "dimensions": "37.8 inches W × 33.86 inches D × 37.8 inches H",
    "image": "https://m.media-amazon.com/images/I/91NLGqXfI5L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91NLGqXfI5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91o+iXJ2RNL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Q4veB8+BL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "grey",
      "modern",
      "ravenna home",
      "textile"
    ],
    "rating": 4.5,
    "reviews": 179,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/1/B085FHBF21.glb",
    "arStatus": "available"
  },
  {
    "id": "B07H8PQFS4",
    "title": "Movian Moselle Vitrinekast met deurtje",
    "brand": "Movian",
    "category": "Storage",
    "description": "Movian Moselle Vitrinekast met deurtje. Sonoma Eiche/Alpinweiãÿ holz storage from the Amazon Berkeley Objects catalog.",
    "price": 840,
    "color": "Sonoma Eiche/Alpinweiãÿ",
    "material": "Holz",
    "style": "2-door wardrobe",
    "dimensions": "90 centimeters W × 90 centimeters D × 196 centimeters H",
    "image": "https://m.media-amazon.com/images/I/61ax7UQ1wjL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61ax7UQ1wjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61TlK5Kz6PL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71b028sUavL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "2-door wardrobe",
      "cabinet",
      "holz",
      "movian",
      "sonoma eiche/alpinweiãÿ",
      "storage"
    ],
    "rating": 4.8,
    "reviews": 47,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/4/B07H8PQFS4.glb",
    "arStatus": "available"
  },
  {
    "id": "B07JW72ZQ8",
    "title": "Amazon Brand – Rivet Thomas Modern Leather Sofa Couch, 81.5\"W, Caramel",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Thomas Modern Leather Sofa Couch, 81.5\"W, Caramel. Caramel leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 1450,
    "color": "Caramel",
    "material": "Leather",
    "style": "Modern",
    "dimensions": "40.9 inches W × 81.5 inches D × 26.8 inches H",
    "image": "https://m.media-amazon.com/images/I/81BIYLN5i3L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81BIYLN5i3L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71AfNJCLQXL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/915FYejhyoL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "caramel",
      "leather",
      "modern",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.5,
    "reviews": 176,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07JW72ZQ8.glb",
    "arStatus": "available"
  },
  {
    "id": "B075QFCHM9",
    "title": "Rivet York Modern Extended Platform Queen Bed, 90.2\"L, Grey",
    "brand": "Rivet",
    "category": "Beds",
    "description": "Rivet York Modern Extended Platform Queen Bed, 90.2\"L, Grey. Orly Silver polyester beds from the Amazon Berkeley Objects catalog.",
    "price": 830,
    "color": "Orly Silver",
    "material": "polyester",
    "style": "Everyday",
    "dimensions": "90.17 inches W × 72 inches D × 42.33 inches H",
    "image": "https://m.media-amazon.com/images/I/81+pGfGwy+L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81+pGfGwy+L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81XWQfjY1HL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B12tsbkjToS._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "everyday",
      "orly silver",
      "polyester",
      "rivet"
    ],
    "rating": 4.9,
    "reviews": 391,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B075QFCHM9.glb",
    "arStatus": "available"
  },
  {
    "id": "B07VDD5HT4",
    "title": "Marque Amazon - Movian Ljungan Meuble TV à 2 portes et 1 tiroir de rangement, 165 x 40 x 50 cm, Finition effet noyer",
    "brand": "Movian",
    "category": "Storage",
    "description": "Marque Amazon - Movian Ljungan Meuble TV à 2 portes et 1 tiroir de rangement, 165 x 40 x 50 cm, Finition effet noyer. Noyer panneau de particules de bois et poignées et pieds en métal noirs au style industriel storage from the Amazon Berkeley Objects catalog.",
    "price": 990,
    "color": "Noyer",
    "material": "panneau de particules de bois et poignées et pieds en métal noirs au style industriel",
    "style": "Meuble TV",
    "dimensions": "40 centimeters W × 165 centimeters D × 50 centimeters H",
    "image": "https://m.media-amazon.com/images/I/51eKq-C7HpL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/51eKq-C7HpL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51MWJxlXgkL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/913gydmtJIL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cabinet",
      "meuble tv",
      "movian",
      "noyer",
      "panneau de particules de bois et poignées et pieds en métal noirs au style industriel",
      "storage"
    ],
    "rating": 4.8,
    "reviews": 44,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/4/B07VDD5HT4.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4MHTM6",
    "title": "Amazon Brand – Stone & Beam Brandeberry Farmhouse Charles of London Sofa, 82\"W, Stone",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Brandeberry Farmhouse Charles of London Sofa, 82\"W, Stone. Stone stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 1430,
    "color": "Stone",
    "material": "stone",
    "style": "Transitional",
    "dimensions": "82 inches W × 43 inches D × 39 inches H",
    "image": "https://m.media-amazon.com/images/I/91J8sWZrJtL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91J8sWZrJtL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81KkVvNT5QL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Ylujz1oPL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "sofa",
      "sofas",
      "stone",
      "stone & beam",
      "transitional"
    ],
    "rating": 4.3,
    "reviews": 259,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07B4MHTM6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07K7K9224",
    "title": "Marca Amazon - Alkove - Hayes - Mesa de centro cuadrada de madera maciza con balda (roble salvaje)",
    "brand": "Alkove",
    "category": "Tables",
    "description": "Marca Amazon - Alkove - Hayes - Mesa de centro cuadrada de madera maciza con balda (roble salvaje). Roble Salvaje madera tables from the Amazon Berkeley Objects catalog.",
    "price": 180,
    "color": "Roble Salvaje",
    "material": "Madera",
    "style": "Moderno",
    "dimensions": "90 centimeters W × 90 centimeters D × 45 centimeters H",
    "image": "https://m.media-amazon.com/images/I/516OHgI0KpL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/516OHgI0KpL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71XlLROxCLL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51YdtnLMU6L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "madera",
      "moderno",
      "roble salvaje",
      "table",
      "tables"
    ],
    "rating": 4.2,
    "reviews": 302,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/4/B07K7K9224.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DBB1NJ1",
    "title": "Amazon Brand – Ravenna Home Parker Storage End Table, 23.6\"W, Glass &amp; Gold",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Parker Storage End Table, 23.6\"W, Glass &amp; Gold. Glass marbled grain laminate on plywood; tempered glass; gold-painted metal frame tables from the Amazon Berkeley Objects catalog.",
    "price": 210,
    "color": "Glass",
    "material": "Marbled Grain Laminate On Plywood; Tempered Glass; Gold-Painted Metal Frame",
    "style": "Everyday",
    "dimensions": "23.6 inches W × 23.6 inches D × 15.7 inches H",
    "image": "https://m.media-amazon.com/images/I/71YSr95xL7L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71YSr95xL7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71xo0oCH6HL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1hgiEBHfYL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "glass",
      "marbled grain laminate on plywood; tempered glass; gold-painted metal frame",
      "ravenna home",
      "table",
      "tables"
    ],
    "rating": 4.1,
    "reviews": 345,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/1/B07DBB1NJ1.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B7BX336",
    "title": "Amazon Brand – Rivet Boundary Mid-Century Modern Dining Kitchen Wood Bench, 18 Inch Height, Brown",
    "brand": "Rivet",
    "category": "Tables",
    "description": "Amazon Brand – Rivet Boundary Mid-Century Modern Dining Kitchen Wood Bench, 18 Inch Height, Brown. Brown wood tables from the Amazon Berkeley Objects catalog.",
    "price": 700,
    "color": "Brown",
    "material": "wood",
    "style": "Everyday",
    "dimensions": "31.5 inches W × 63 inches D × 30 inches H",
    "image": "https://m.media-amazon.com/images/I/817GwX7vbLL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/817GwX7vbLL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91A66x5JEfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91ylHoVQ+hL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "everyday",
      "rivet",
      "table",
      "tables",
      "wood"
    ],
    "rating": 4.3,
    "reviews": 256,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07B7BX336.glb",
    "arStatus": "available"
  },
  {
    "id": "B072M1WJC7",
    "title": "Amazon Brand – Rivet North End Modern Wood Accent Loveseat Sofa Couch, 58.7\"W, Grey Weave",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet North End Modern Wood Accent Loveseat Sofa Couch, 58.7\"W, Grey Weave. Grey Weave hardwood; polyester sofas from the Amazon Berkeley Objects catalog.",
    "price": 850,
    "color": "Grey Weave",
    "material": "Hardwood; Polyester",
    "style": "Transitional",
    "dimensions": "37.8 inches W × 58.7 inches D × 34.6 inches H",
    "image": "https://m.media-amazon.com/images/I/A1RXUpCGCXL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1RXUpCGCXL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91YGaEWJSGL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A173nKGBVIL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "grey weave",
      "hardwood; polyester",
      "rivet",
      "sofa",
      "sofas",
      "transitional"
    ],
    "rating": 4.8,
    "reviews": 38,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B072M1WJC7.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4MF6S6",
    "title": "Amazon Brand – Stone & Beam Andover Modern Loveseat Sofa, 67\"W, Grey",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Andover Modern Loveseat Sofa, 67\"W, Grey. Grey wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 1130,
    "color": "Grey",
    "material": "Wood",
    "style": "Everyday",
    "dimensions": "67 inches W × 38 inches D × 35 inches H",
    "image": "https://m.media-amazon.com/images/I/A1D1yyrJeSL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1D1yyrJeSL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91M8WWfvJmL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1z09jmLlJL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "grey",
      "sofa",
      "sofas",
      "stone & beam",
      "wood"
    ],
    "rating": 4.2,
    "reviews": 293,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07B4MF6S6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07HZ4ZQS7",
    "title": "Amazon Brand – Stone & Beam Bagley Sectional Component, Left-Facing Corner Sofa, Fabric, 90\"W, Stone",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Bagley Sectional Component, Left-Facing Corner Sofa, Fabric, 90\"W, Stone. Stone nylon sofas from the Amazon Berkeley Objects catalog.",
    "price": 480,
    "color": "Stone",
    "material": "Nylon",
    "style": "Transitional",
    "dimensions": "36 inches W × 42 inches D × 92 inches H",
    "image": "https://m.media-amazon.com/images/I/61w1r6duO9L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61w1r6duO9L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81cYWH5lXtL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B1VXWHOLZSS._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "nylon",
      "sofa",
      "sofas",
      "stone",
      "stone & beam",
      "transitional"
    ],
    "rating": 4.9,
    "reviews": 373,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B07HZ4ZQS7.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B7DL3H8",
    "title": "Amazon Brand – Rivet Contemporary Office Desk Chair, 33\"-36\", Grey/Chrome",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Contemporary Office Desk Chair, 33\"-36\", Grey/Chrome. Grey/Chrome metal chairs from the Amazon Berkeley Objects catalog.",
    "price": 440,
    "color": "Grey/Chrome",
    "material": "Metal",
    "style": "Everyday",
    "dimensions": "22 inches W × 23 inches D × 24 inches H",
    "image": "https://m.media-amazon.com/images/I/91xnIEnMWyL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91xnIEnMWyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91kpaDmgN7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81wKDOf6qLL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "grey/chrome",
      "metal",
      "rivet"
    ],
    "rating": 4.4,
    "reviews": 195,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07B7DL3H8.glb",
    "arStatus": "available"
  },
  {
    "id": "B0725Z2499",
    "title": "Amazon Brand – Stone & Beam Parson King Wood Bed with Headboard, 80.5\"W, Natural",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Amazon Brand – Stone & Beam Parson King Wood Bed with Headboard, 80.5\"W, Natural. Brown stone beds from the Amazon Berkeley Objects catalog.",
    "price": 350,
    "color": "Brown",
    "material": "stone",
    "style": "King Bed",
    "dimensions": "86 inches W × 80.5 inches D × 56 inches H",
    "image": "https://m.media-amazon.com/images/I/91QIA-U2AfL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91QIA-U2AfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1GEDFFP4wL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91EqAH-pTuL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "brown",
      "king bed",
      "stone",
      "stone & beam"
    ],
    "rating": 4.8,
    "reviews": 20,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B0725Z2499.glb",
    "arStatus": "available"
  },
  {
    "id": "B075X4JJL7",
    "title": "Amazon Brand – Stone & Beam Elmore Pillow-Top Armless Chair, 24\"W, Iron",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Elmore Pillow-Top Armless Chair, 24\"W, Iron. Iron stone chairs from the Amazon Berkeley Objects catalog.",
    "price": 340,
    "color": "Iron",
    "material": "stone",
    "style": "Transitional",
    "dimensions": "24 inches W × 33 inches D × 35 inches H",
    "image": "https://m.media-amazon.com/images/I/91hjuLlyBUL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91hjuLlyBUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91I1sOUv1nL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/914F5SRyOfL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "iron",
      "stone",
      "stone & beam",
      "transitional"
    ],
    "rating": 4.5,
    "reviews": 149,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B075X4JJL7.glb",
    "arStatus": "available"
  },
  {
    "id": "B07SQ9P548",
    "title": "Amazon Brand - Solimo Veronica Engineered Wood Coffee Table (Espresso Finish)",
    "brand": "Amazon Brand - Solimo",
    "category": "Tables",
    "description": "Amazon Brand - Solimo Veronica Engineered Wood Coffee Table (Espresso Finish). Espresso engineered wood tables from the Amazon Berkeley Objects catalog.",
    "price": 380,
    "color": "Espresso",
    "material": "Engineered Wood",
    "style": "Contemporary",
    "dimensions": "590 millimeters W × 1050 millimeters D × 460 millimeters H",
    "image": "https://m.media-amazon.com/images/I/81abgA0eiOL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81abgA0eiOL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61W7oL3m6HL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/615ORLk7e6L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon brand - solimo",
      "contemporary",
      "engineered wood",
      "espresso",
      "table",
      "tables"
    ],
    "rating": 4.3,
    "reviews": 235,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07SQ9P548.glb",
    "arStatus": "available"
  },
  {
    "id": "B072PZ4LQ2",
    "title": "Amazon Brand – Rivet Emerly Modern Living Room Chair, 41\"W, Ecru",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Emerly Modern Living Room Chair, 41\"W, Ecru. Ecru velvet, hardwood frame, metal legs chairs from the Amazon Berkeley Objects catalog.",
    "price": 400,
    "color": "Ecru",
    "material": "Velvet, Hardwood frame, Metal legs",
    "style": "Everyday",
    "dimensions": "35 inches W × 41 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/819T0UMf4XL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/819T0UMf4XL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81XQja5GUWL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81pnBZuHkxL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "ecru",
      "everyday",
      "rivet",
      "velvet, hardwood frame, metal legs"
    ],
    "rating": 4.9,
    "reviews": 364,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B072PZ4LQ2.glb",
    "arStatus": "available"
  },
  {
    "id": "B082QDKRC5",
    "title": "Amazon Brand – Rivet Bayard Contemporary Leather Couch with Curved Back and Armrests, 76\"W, Cognac",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Bayard Contemporary Leather Couch with Curved Back and Armrests, 76\"W, Cognac. Cognac leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 940,
    "color": "Cognac",
    "material": "Leather",
    "style": "Sofa",
    "dimensions": "34.25 inches W × 75.98 inches D × 32.68 inches H",
    "image": "https://m.media-amazon.com/images/I/71S4wHLPOwL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71S4wHLPOwL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91YaQCA4sqL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71A5j6fKGzL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cognac",
      "leather",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.7,
    "reviews": 60,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B082QDKRC5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07Q3WM678",
    "title": "Amazonbasics Swivel Compact Adjustable Foam Floor Chair, Blue/White/Grey",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "Amazonbasics Swivel Compact Adjustable Foam Floor Chair, Blue/White/Grey. Blue metal chairs from the Amazon Berkeley Objects catalog.",
    "price": 400,
    "color": "Blue",
    "material": "Metal",
    "style": "Compact chair",
    "dimensions": "16.5 inches W × 26 inches D × 20.5 inches H",
    "image": "https://m.media-amazon.com/images/I/A1y6wgeCPTL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1y6wgeCPTL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1o+6aYJECL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91B1UBUp9XL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "blue",
      "chair",
      "chairs",
      "compact chair",
      "metal"
    ],
    "rating": 4.5,
    "reviews": 146,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07Q3WM678.glb",
    "arStatus": "available"
  },
  {
    "id": "B082VSXML3",
    "title": "Amazon Brand - Ravenna Home Archer Outdoor Patio Steel Dining Table with Panel Top, 66.14\"W, Gray",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand - Ravenna Home Archer Outdoor Patio Steel Dining Table with Panel Top, 66.14\"W, Gray. Grey steel tables from the Amazon Berkeley Objects catalog.",
    "price": 890,
    "color": "Grey",
    "material": "Steel",
    "style": "Dining Table",
    "dimensions": "36 inches W × 66.14 inches D × 28.94 inches H",
    "image": "https://m.media-amazon.com/images/I/616rLGcketL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/616rLGcketL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71eyLZCzLxL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61DzrseC8bL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "dining table",
      "grey",
      "ravenna home",
      "steel",
      "table",
      "tables"
    ],
    "rating": 4.8,
    "reviews": 14,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B082VSXML3.glb",
    "arStatus": "available"
  },
  {
    "id": "B07GFG6JN7",
    "title": "Amazon Brand - Movian Aggol Lift-Top Coffee Table with 1-Shelf, 50 x 100 x 44cm, Black/Dark Grey",
    "brand": "Movian",
    "category": "Tables",
    "description": "Amazon Brand - Movian Aggol Lift-Top Coffee Table with 1-Shelf, 50 x 100 x 44cm, Black/Dark Grey. Black/Grey wood tables from the Amazon Berkeley Objects catalog.",
    "price": 660,
    "color": "Black/Grey",
    "material": "Wood",
    "style": "Lift-Top Coffee Table With Lower Shelf",
    "dimensions": "100 centimeters W × 50 centimeters D × 44 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71EMU+cVSvL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71EMU+cVSvL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81xkTTL2K7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81tzQlKeR3L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "black/grey",
      "lift-top coffee table with lower shelf",
      "movian",
      "table",
      "tables",
      "wood"
    ],
    "rating": 4.6,
    "reviews": 97,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B07GFG6JN7.glb",
    "arStatus": "available"
  },
  {
    "id": "B07SSJDRL4",
    "title": "Amazon Brand - Solimo Brooke Three Seater Fabric Sofa",
    "brand": "Amazon Brand - Solimo",
    "category": "Sofas",
    "description": "Amazon Brand - Solimo Brooke Three Seater Fabric Sofa. Buff Beige fabric sofas from the Amazon Berkeley Objects catalog.",
    "price": 960,
    "color": "Buff Beige",
    "material": "Fabric",
    "style": "Contemporary",
    "dimensions": "930 millimeters W × 1855 millimeters D × 800 millimeters H",
    "image": "https://m.media-amazon.com/images/I/81EXCYCbs2L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81EXCYCbs2L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61mBf3eKuuL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81VBRHC2fsL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon brand - solimo",
      "buff beige",
      "contemporary",
      "fabric",
      "sofa",
      "sofas"
    ],
    "rating": 4.5,
    "reviews": 140,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/4/B07SSJDRL4.glb",
    "arStatus": "available"
  },
  {
    "id": "B07BTRTC76",
    "title": "Amazon Brand – Rivet Ian Modern Wood Dining Kitchen Chairs, 33 Inch Height, Set of 2, Grey",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Ian Modern Wood Dining Kitchen Chairs, 33 Inch Height, Set of 2, Grey. Gray wood chairs from the Amazon Berkeley Objects catalog.",
    "price": 290,
    "color": "Gray",
    "material": "Wood",
    "style": "Everyday",
    "dimensions": "24 inches W × 21.5 inches D × 36 inches H",
    "image": "https://m.media-amazon.com/images/I/91x2WVLeIhL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91x2WVLeIhL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1C9aP-jYFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1Yg8Cs5yHL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "gray",
      "rivet",
      "wood"
    ],
    "rating": 4.6,
    "reviews": 94,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07BTRTC76.glb",
    "arStatus": "available"
  },
  {
    "id": "B075X2WN27",
    "title": "Amazon Brand – Rivet Aiden Tufted Mid-Century Modern Leather Accent Chair, 35.4\"W, Cognac",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Aiden Tufted Mid-Century Modern Leather Accent Chair, 35.4\"W, Cognac. Cognac leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 220,
    "color": "Cognac",
    "material": "Leather",
    "style": "Mid-Century modern",
    "dimensions": "35.4 inches W × 36.2 inches D × 30.3 inches H",
    "image": "https://m.media-amazon.com/images/I/91DhlhgLNcL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91DhlhgLNcL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B15pHkvfoKS._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1Vbzx6TXtL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "cognac",
      "leather",
      "mid-century modern",
      "rivet"
    ],
    "rating": 4.5,
    "reviews": 137,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B075X2WN27.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DBHC337",
    "title": "Amazon Brand – Ravenna Home Classic Rolled Arm Nailedhead Faux Leather Accent Chair, 35\"W, Brown",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Classic Rolled Arm Nailedhead Faux Leather Accent Chair, 35\"W, Brown. Brown faux leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 300,
    "color": "Brown",
    "material": "Faux Leather",
    "style": "Rustic",
    "dimensions": "35 inches W × 32.5 inches D × 34.5 inches H",
    "image": "https://m.media-amazon.com/images/I/91TYp+aDEpL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91TYp+aDEpL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Er7+lFzBL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1ebdU-AW1L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "chair",
      "chairs",
      "faux leather",
      "ravenna home",
      "rustic"
    ],
    "rating": 4.3,
    "reviews": 223,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B07DBHC337.glb",
    "arStatus": "available"
  },
  {
    "id": "B07HZ1LZS1",
    "title": "Amazon Brand – Rivet Emerly Modern Sectional Sofa, 96\"W, Emerald",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Emerly Modern Sectional Sofa, 96\"W, Emerald. Emerald velvet, hardwood frame, metal legs sofas from the Amazon Berkeley Objects catalog.",
    "price": 730,
    "color": "Emerald",
    "material": "Velvet, Hardwood frame, Metal legs",
    "style": "Everyday",
    "dimensions": "34 inches W × 66 inches D × 40 inches H",
    "image": "https://m.media-amazon.com/images/I/719tNgOUipL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/719tNgOUipL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71E33SGTQbL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1z4wQ5DJ7L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "emerald",
      "everyday",
      "rivet",
      "sofa",
      "sofas",
      "velvet, hardwood frame, metal legs"
    ],
    "rating": 4.1,
    "reviews": 309,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/1/B07HZ1LZS1.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B7BJK89",
    "title": "Amazon Brand – Rivet Boundary Modern Reclaimed Fir Wood Dining Kitchen Table, 66\"L, Honey Brown",
    "brand": "Rivet",
    "category": "Tables",
    "description": "Amazon Brand – Rivet Boundary Modern Reclaimed Fir Wood Dining Kitchen Table, 66\"L, Honey Brown. Brown wood tables from the Amazon Berkeley Objects catalog.",
    "price": 290,
    "color": "Brown",
    "material": "Wood",
    "style": "Everyday",
    "dimensions": "37.4 inches W × 60 inches D × 30.7 inches H",
    "image": "https://m.media-amazon.com/images/I/81kGdCge1mL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81kGdCge1mL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/912j+Md7qVL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/911R-c9acFL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "everyday",
      "rivet",
      "table",
      "tables",
      "wood"
    ],
    "rating": 4.2,
    "reviews": 260,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07B7BJK89.glb",
    "arStatus": "available"
  },
  {
    "id": "B07H8SZNZ3",
    "title": "Amazon-merk - Movian Cuban salontafel, Wellington eiken look",
    "brand": "Movian",
    "category": "Tables",
    "description": "Amazon-merk - Movian Cuban salontafel, Wellington eiken look. Wellington eiken holz tables from the Amazon Berkeley Objects catalog.",
    "price": 250,
    "color": "Wellington eiken",
    "material": "Holz",
    "style": "Salontafel",
    "dimensions": "70 centimeters W × 135 centimeters D × 45 centimeters H",
    "image": "https://m.media-amazon.com/images/I/616REEFUY8L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/616REEFUY8L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61W0sajT2uL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51epMBR83jL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "holz",
      "movian",
      "salontafel",
      "table",
      "tables",
      "wellington eiken"
    ],
    "rating": 4.6,
    "reviews": 85,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07H8SZNZ3.glb",
    "arStatus": "available"
  },
  {
    "id": "B073G8VWJ6",
    "title": "Amazon Brand – Stone & Beam Benton Square Ottoman, 35\"W, Damask Navy",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Benton Square Ottoman, 35\"W, Damask Navy. Navy stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 830,
    "color": "Navy",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "35 inches W × 35 inches D × 16 inches H",
    "image": "https://m.media-amazon.com/images/I/91GXhRh6QML._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91GXhRh6QML._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/919-ED78PHL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1swKWuVEhL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "navy",
      "ottoman",
      "sofas",
      "stone",
      "stone & beam"
    ],
    "rating": 4.6,
    "reviews": 82,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B073G8VWJ6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07QFRSC43",
    "title": "Amazon Brand – Rivet Modern High-Back Barstool, Set of 2, 43.5\"H, Blue",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Modern High-Back Barstool, Set of 2, 43.5\"H, Blue. Blue metal chairs from the Amazon Berkeley Objects catalog.",
    "price": 640,
    "color": "Blue",
    "material": "Metal",
    "style": "Everyday",
    "dimensions": "20.75 inches W × 19.25 inches D × 42.5 inches H",
    "image": "https://m.media-amazon.com/images/I/71cT9bUBhQL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71cT9bUBhQL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71SQzsstaZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/714n9Ea4FBL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "blue",
      "chair",
      "chairs",
      "everyday",
      "metal",
      "rivet"
    ],
    "rating": 4.2,
    "reviews": 254,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07QFRSC43.glb",
    "arStatus": "available"
  },
  {
    "id": "B01MG6BPC6",
    "title": "Vida Designs Corona Chest Of Drawers, 4 Drawer, Rustic, Solid Pine Wood.",
    "brand": "Vida Designs",
    "category": "Storage",
    "description": "Vida Designs Corona Chest Of Drawers, 4 Drawer, Rustic, Solid Pine Wood.. Pine pine storage from the Amazon Berkeley Objects catalog.",
    "price": 600,
    "color": "Pine",
    "material": "Pine",
    "style": "Antique",
    "dimensions": "41 centimeters W × 80 centimeters D × 73 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81LwOrt6g6L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81LwOrt6g6L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81lF33Bqr9L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/819AwyL7F5L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "antique",
      "dresser",
      "pine",
      "storage",
      "vida designs"
    ],
    "rating": 4.5,
    "reviews": 122,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B01MG6BPC6.glb",
    "arStatus": "available"
  },
  {
    "id": "B082VML3Q3",
    "title": "Amazon Brand – Rivet Frederick Mid-Century Modern Tufted Leather Living Room Chair, 38\"W, Taupe",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Frederick Mid-Century Modern Tufted Leather Living Room Chair, 38\"W, Taupe. Taupe Leather leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 550,
    "color": "Taupe Leather",
    "material": "Leather",
    "style": "Mid-Century Modern",
    "dimensions": "34.65 inches W × 38.19 inches D × 31.5 inches H",
    "image": "https://m.media-amazon.com/images/I/71QoiVNhHTL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71QoiVNhHTL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81GsfK4PvEL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71a2GeNB5HL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "leather",
      "mid-century modern",
      "rivet",
      "taupe leather"
    ],
    "rating": 4.6,
    "reviews": 76,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B082VML3Q3.glb",
    "arStatus": "available"
  },
  {
    "id": "B073G947W3",
    "title": "Amazon Brand – Stone & Beam Modern Sweeping Arm Accent Chair, 28\"W, Merlot",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Modern Sweeping Arm Accent Chair, 28\"W, Merlot. Merlot stone chairs from the Amazon Berkeley Objects catalog.",
    "price": 270,
    "color": "Merlot",
    "material": "Stone",
    "style": "Everyday",
    "dimensions": "28 inches W × 29 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/91loqpgh4lL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91loqpgh4lL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B1hnoCKhiVS._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1XHAdtWyML._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "merlot",
      "stone",
      "stone & beam"
    ],
    "rating": 4.5,
    "reviews": 119,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B073G947W3.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DMFNXY6",
    "title": "2L Lifestyle Carleton Side Table with Drawer Black Finish, Small",
    "brand": "2L Lifestyle",
    "category": "Tables",
    "description": "2L Lifestyle Carleton Side Table with Drawer Black Finish, Small. Black madera tables from the Amazon Berkeley Objects catalog.",
    "price": 320,
    "color": "Black",
    "material": "Madera",
    "style": "Everyday",
    "dimensions": "18 inches W × 16 inches D × 24 inches H",
    "image": "https://m.media-amazon.com/images/I/81Z+N0vB6lL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81Z+N0vB6lL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71PCdNsoSiL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71fn2iGWk-L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "2l lifestyle",
      "black",
      "everyday",
      "madera",
      "table",
      "tables"
    ],
    "rating": 4.4,
    "reviews": 162,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07DMFNXY6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4YNHS7",
    "title": "Amazon Brand – Stone & Beam Tisbury Nailhead Trim Queen Bed, 66\"W, Spinnsol Iron",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Amazon Brand – Stone & Beam Tisbury Nailhead Trim Queen Bed, 66\"W, Spinnsol Iron. Spinnsol Iron iron beds from the Amazon Berkeley Objects catalog.",
    "price": 370,
    "color": "Spinnsol Iron",
    "material": "Iron",
    "style": "beds",
    "dimensions": "92 inches W × 66 inches D × 56 inches H",
    "image": "https://m.media-amazon.com/images/I/71iSXS41tjL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71iSXS41tjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71P7IT-JN2L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91-WeawtjGL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "iron",
      "spinnsol iron",
      "stone & beam"
    ],
    "rating": 4.1,
    "reviews": 291,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B07B4YNHS7.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B7B6PL8",
    "title": "Stone & Beam Hughes Casual Wood Kitchen Dining Chair, Set of 2, Beige",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Stone & Beam Hughes Casual Wood Kitchen Dining Chair, Set of 2, Beige. Beige stone chairs from the Amazon Berkeley Objects catalog.",
    "price": 390,
    "color": "Beige",
    "material": "Stone",
    "style": "Everyday",
    "dimensions": "19 inches W × 24 inches D × 39 inches H",
    "image": "https://m.media-amazon.com/images/I/91hF3y50Y3L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91hF3y50Y3L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1HrLphfSjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91HBCRajRaL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "beige",
      "chair",
      "chairs",
      "everyday",
      "stone",
      "stone & beam"
    ],
    "rating": 4.2,
    "reviews": 245,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07B7B6PL8.glb",
    "arStatus": "available"
  },
  {
    "id": "B07TGC2DT5",
    "title": "Amazon Brand - Movian Sils - Silla de comedor, 46,5 x 63 x 80 cm, gris",
    "brand": "Movian",
    "category": "Chairs",
    "description": "Amazon Brand - Movian Sils - Silla de comedor, 46,5 x 63 x 80 cm, gris. Gris tela chairs from the Amazon Berkeley Objects catalog.",
    "price": 160,
    "color": "Gris",
    "material": "Tela",
    "style": "Silla de comedor",
    "dimensions": "63 centimeters W × 46.5 centimeters D × 80 centimeters H",
    "image": "https://m.media-amazon.com/images/I/91s3lHw2ABL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91s3lHw2ABL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71PYD-xKXUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41TtEvj0JNL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "gris",
      "movian",
      "silla de comedor",
      "tela"
    ],
    "rating": 4.5,
    "reviews": 113,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B07TGC2DT5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07JCDQWM6",
    "title": "Amazon Brand – Rivet Thomas Modern Leather Sofa Couch, 81.5\"W, Chestnut",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Thomas Modern Leather Sofa Couch, 81.5\"W, Chestnut. Chestnut leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 480,
    "color": "Chestnut",
    "material": "Leather",
    "style": "Modern",
    "dimensions": "40.9 inches W × 81.5 inches D × 26.8 inches H",
    "image": "https://m.media-amazon.com/images/I/71e51Rb1h4L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71e51Rb1h4L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91qIZlZvbRL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81mHh0uPy7L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chestnut",
      "leather",
      "modern",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.3,
    "reviews": 199,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07JCDQWM6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4MHTP5",
    "title": "Amazon Brand – Stone & Beam Brandeberry Farmhouse Charles of London Loveseat, 58\"W, Charcoal",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Brandeberry Farmhouse Charles of London Loveseat, 58\"W, Charcoal. Charcoal stone chairs from the Amazon Berkeley Objects catalog.",
    "price": 430,
    "color": "Charcoal",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "31 inches W × 78 inches D × 41 inches H",
    "image": "https://m.media-amazon.com/images/I/91+2vhkpRfL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91+2vhkpRfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91xMYkquBZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91xuEH8bGIL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "charcoal",
      "everyday",
      "stone",
      "stone & beam"
    ],
    "rating": 4.7,
    "reviews": 18,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B07B4MHTP5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07BW8P2F7",
    "title": "Amazon Brand – Rivet Edgewest Low Back Modern Loveseat, 65\"W, Beige",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Edgewest Low Back Modern Loveseat, 65\"W, Beige. Beige polyester sofas from the Amazon Berkeley Objects catalog.",
    "price": 1130,
    "color": "Beige",
    "material": "Polyester",
    "style": "Industrial",
    "dimensions": "65 inches W × 33 inches D × 32 inches H",
    "image": "https://m.media-amazon.com/images/I/9152Wbx6eGL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/9152Wbx6eGL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81muzpodbiL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1L5x7Es6gL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "beige",
      "industrial",
      "polyester",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.3,
    "reviews": 190,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/7/B07BW8P2F7.glb",
    "arStatus": "available"
  },
  {
    "id": "B00XBC3BF0",
    "title": "AmazonBasics High-Back, Leather Executive, Swivel, Adjustable Office Desk Chair with Casters, Black",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics High-Back, Leather Executive, Swivel, Adjustable Office Desk Chair with Casters, Black. Black leather and pvc chairs from the Amazon Berkeley Objects catalog.",
    "price": 200,
    "color": "Black",
    "material": "leather and PVC",
    "style": "Chair",
    "dimensions": "26.1 inches W × 29.1 inches D × 45.5 inches H",
    "image": "https://m.media-amazon.com/images/I/41ZExXTss7L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/41ZExXTss7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71U5KMfuDqL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/415t6bkC+OL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "black",
      "chair",
      "chairs",
      "leather and pvc"
    ],
    "rating": 4.2,
    "reviews": 227,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/0/B00XBC3BF0.glb",
    "arStatus": "available"
  },
  {
    "id": "B07GDZ8HN6",
    "title": "Amazon Brand - Rivet 1-Drawer End/Side Table, 43 x 43 x 52cm, MDF with Walnut Veneer/Black Metal Frame",
    "brand": "Rivet",
    "category": "Tables",
    "description": "Amazon Brand - Rivet 1-Drawer End/Side Table, 43 x 43 x 52cm, MDF with Walnut Veneer/Black Metal Frame. Walnut Veneer mdf with walnut veneer, powder coated metal tables from the Amazon Berkeley Objects catalog.",
    "price": 890,
    "color": "Walnut Veneer",
    "material": "MDF with walnut veneer, powder coated metal",
    "style": "Modern",
    "dimensions": "43 centimeters W × 43 centimeters D × 51.5 centimeters H",
    "image": "https://m.media-amazon.com/images/I/51dqedi3xjL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/51dqedi3xjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71ZlHNUBRvL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61ukvGXzP2L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "mdf with walnut veneer, powder coated metal",
      "modern",
      "rivet",
      "table",
      "tables",
      "walnut veneer"
    ],
    "rating": 4.1,
    "reviews": 270,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07GDZ8HN6.glb",
    "arStatus": "available"
  },
  {
    "id": "B075X43FD2",
    "title": "Amazon Brand – Rivet Lawson Modern Angled Sofa, 78\"W, Dove",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Lawson Modern Angled Sofa, 78\"W, Dove. Dove cuero sofas from the Amazon Berkeley Objects catalog.",
    "price": 600,
    "color": "Dove",
    "material": "Cuero",
    "style": "Industrial",
    "dimensions": "78 inches W × 34 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/81gQz8sTXbL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81gQz8sTXbL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1x2wJNJP1L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81LebFLArRL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cuero",
      "dove",
      "industrial",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.3,
    "reviews": 181,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B075X43FD2.glb",
    "arStatus": "available"
  },
  {
    "id": "B084MMLP68",
    "title": "Amazon Brand – Ravenna Home Classic Console Table, 42\"W, White",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Classic Console Table, 42\"W, White. White wood tables from the Amazon Berkeley Objects catalog.",
    "price": 820,
    "color": "White",
    "material": "Wood",
    "style": "Console Table",
    "dimensions": "15 inches W × 42 inches D × 29.5 inches H",
    "image": "https://m.media-amazon.com/images/I/61D27HvKf4L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61D27HvKf4L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/617y6obHq5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61-kBtDNevL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "console table",
      "ravenna home",
      "table",
      "tables",
      "white",
      "wood"
    ],
    "rating": 4.3,
    "reviews": 178,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B084MMLP68.glb",
    "arStatus": "available"
  },
  {
    "id": "B0746KJVP2",
    "title": "Amazon Brand – Rivet Charlotte Mid-Century Modern Upholstered Gold Accent Chair, 29\"W, Natural",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Charlotte Mid-Century Modern Upholstered Gold Accent Chair, 29\"W, Natural. Natural brass chairs from the Amazon Berkeley Objects catalog.",
    "price": 470,
    "color": "Natural",
    "material": "Brass",
    "style": "Glam",
    "dimensions": "35 inches W × 29 inches D × 38 inches H",
    "image": "https://m.media-amazon.com/images/I/81Cam9nlaBL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81Cam9nlaBL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Y3T9k2MYL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1W6FiJ-M5L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brass",
      "chair",
      "chairs",
      "glam",
      "natural",
      "rivet"
    ],
    "rating": 4.5,
    "reviews": 89,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B0746KJVP2.glb",
    "arStatus": "available"
  },
  {
    "id": "B07Y5VWF19",
    "title": "AmazonCommercial 32 inch Height Adjustable Round Table, 32inch, White Granite",
    "brand": "AmazonCommercial",
    "category": "Tables",
    "description": "AmazonCommercial 32 inch Height Adjustable Round Table, 32inch, White Granite. White Granite plastic tables from the Amazon Berkeley Objects catalog.",
    "price": 360,
    "color": "White Granite",
    "material": "plastic",
    "style": "Round Table",
    "dimensions": "32 inches W × 32 inches D × 28 inches H",
    "image": "https://m.media-amazon.com/images/I/71Kxhhba6gL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71Kxhhba6gL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71BRIf3CXjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91RGdHTgUOL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazoncommercial",
      "plastic",
      "round table",
      "table",
      "tables",
      "white granite"
    ],
    "rating": 4.3,
    "reviews": 175,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/9/B07Y5VWF19.glb",
    "arStatus": "available"
  },
  {
    "id": "B07B4FZHH6",
    "title": "Amazon Brand – Stone & Beam Edmunds Traditional Leather Recliner, 30\"W, Charcoal",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Edmunds Traditional Leather Recliner, 30\"W, Charcoal. Charcoal Leather leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 500,
    "color": "Charcoal Leather",
    "material": "Leather",
    "style": "Modern",
    "dimensions": "20 inches W × 23 inches D × 23 inches H",
    "image": "https://m.media-amazon.com/images/I/9194V0ANFfL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/9194V0ANFfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/918EYzlBDdL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Su4zTT0wL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "charcoal leather",
      "leather",
      "modern",
      "stone & beam"
    ],
    "rating": 4.5,
    "reviews": 83,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07B4FZHH6.glb",
    "arStatus": "available"
  },
  {
    "id": "B072635HS4",
    "title": "Amazon Brand – Rivet Emerly Modern Sectional Sofa, 96\"W, Pewter",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Emerly Modern Sectional Sofa, 96\"W, Pewter. Pewter velvet, hardwood frame, metal legs sofas from the Amazon Berkeley Objects catalog.",
    "price": 730,
    "color": "Pewter",
    "material": "Velvet, Hardwood frame, Metal legs",
    "style": "Everyday",
    "dimensions": "35 inches W × 96 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/71ltfR74YWL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71ltfR74YWL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1JzUti5pFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1UtK3jtMUL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "pewter",
      "rivet",
      "sofa",
      "sofas",
      "velvet, hardwood frame, metal legs"
    ],
    "rating": 4.3,
    "reviews": 166,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/4/B072635HS4.glb",
    "arStatus": "available"
  },
  {
    "id": "B07HZ1L353",
    "title": "Amazon Brand – Stone & Beam Bagley Sectional Component, Armless Sofa, Fabric, 78\"W, Dove",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Bagley Sectional Component, Armless Sofa, Fabric, 78\"W, Dove. Dove wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 320,
    "color": "Dove",
    "material": "Wood",
    "style": "Transitional",
    "dimensions": "36 inches W × 42 inches D × 80 inches H",
    "image": "https://m.media-amazon.com/images/I/61te1EbX1NL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61te1EbX1NL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1LVE1Sy7IL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81HYkBH0iLL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "dove",
      "sofa",
      "sofas",
      "stone & beam",
      "transitional",
      "wood"
    ],
    "rating": 4.6,
    "reviews": 34,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07HZ1L353.glb",
    "arStatus": "available"
  },
  {
    "id": "B07H8SKPW6",
    "title": "Marca Amazon - Movian Saale - Cama doble de 195 x 97 x 208 cm (king size, roble Wellington)",
    "brand": "Movian",
    "category": "Storage",
    "description": "Marca Amazon - Movian Saale - Cama doble de 195 x 97 x 208 cm (king size, roble Wellington). Roble Wellington madera storage from the Amazon Berkeley Objects catalog.",
    "price": 190,
    "color": "Roble Wellington",
    "material": "Madera",
    "style": "Cama King Size",
    "dimensions": "208 centimeters W × 195 centimeters D × 97 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81K1tlh6oXL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81K1tlh6oXL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81RNlrNCrvL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/710Rn7K5fdL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cabinet",
      "cama king size",
      "madera",
      "movian",
      "roble wellington",
      "storage"
    ],
    "rating": 4.5,
    "reviews": 77,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07H8SKPW6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07DBGPHG5",
    "title": "Amazon Brand – Ravenna Home Radford Modern Curved Accent Chair, 28.15\"W, Grey",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Radford Modern Curved Accent Chair, 28.15\"W, Grey. Grey polyester chairs from the Amazon Berkeley Objects catalog.",
    "price": 110,
    "color": "Grey",
    "material": "Polyester",
    "style": "Transitional",
    "dimensions": "28.15 inches W × 34 inches D × 39.8 inches H",
    "image": "https://m.media-amazon.com/images/I/A1n9ZOzRyQL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1n9ZOzRyQL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Cv9UUBPfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71klHyTygzL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "grey",
      "polyester",
      "ravenna home",
      "transitional"
    ],
    "rating": 4.3,
    "reviews": 163,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/5/B07DBGPHG5.glb",
    "arStatus": "available"
  },
  {
    "id": "B07HYYGLZ8",
    "title": "Amazon Brand – Stone & Beam Clayton Reclining Contemporary Fabric Living-Room Chair, 30\"W, Dove",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Clayton Reclining Contemporary Fabric Living-Room Chair, 30\"W, Dove. Dove textile chairs from the Amazon Berkeley Objects catalog.",
    "price": 340,
    "color": "Dove",
    "material": "Textile",
    "style": "Everyday",
    "dimensions": "41 inches W × 41 inches D × 32 inches H",
    "image": "https://m.media-amazon.com/images/I/91CGtZaKDIL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91CGtZaKDIL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91EBxuOqLsL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1LVE1Sy7IL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "dove",
      "everyday",
      "stone & beam",
      "textile"
    ],
    "rating": 4.3,
    "reviews": 160,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/8/B07HYYGLZ8.glb",
    "arStatus": "available"
  },
  {
    "id": "B07BWKFNF6",
    "title": "Amazon Brand – Rivet Revolve Modern Upholstered Armchair with Tapered Legs, 33\"W, Linen",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Revolve Modern Upholstered Armchair with Tapered Legs, 33\"W, Linen. Linen polyester fabric, sturdy hardwood frame and solid beech wood legs chairs from the Amazon Berkeley Objects catalog.",
    "price": 210,
    "color": "Linen",
    "material": "Polyester fabric, sturdy hardwood frame and solid beech wood legs",
    "style": "Transitional",
    "dimensions": "34.6 inches W × 32.7 inches D × 35.4 inches H",
    "image": "https://m.media-amazon.com/images/I/61l-34IooXL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61l-34IooXL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71Of7nXFbXL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81ECn4z8bKL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "linen",
      "polyester fabric, sturdy hardwood frame and solid beech wood legs",
      "rivet",
      "transitional"
    ],
    "rating": 4.1,
    "reviews": 246,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07BWKFNF6.glb",
    "arStatus": "available"
  },
  {
    "id": "B07J2YB486",
    "title": "Amazon Brand – Rivet Willard Contemporary Accent Lounge Chair, 26\"W, Navy",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Willard Contemporary Accent Lounge Chair, 26\"W, Navy. Navy metal chairs from the Amazon Berkeley Objects catalog.",
    "price": 240,
    "color": "Navy",
    "material": "Metal",
    "style": "Transitional",
    "dimensions": "34 inches W × 28 inches D × 30 inches H",
    "image": "https://m.media-amazon.com/images/I/91OmrG5noqL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91OmrG5noqL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91YkcF4+1HL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B1Uye-fo-fS._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "metal",
      "navy",
      "rivet",
      "transitional"
    ],
    "rating": 4.2,
    "reviews": 200,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/6/B07J2YB486.glb",
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
