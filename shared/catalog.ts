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
  version: "abo-furniture-fixture-v0.2-120",
  license: "CC BY 4.0",
  note: "120 real ABO furniture metadata records with remote catalog images and verified remote GLB mappings where available. Prices are clearly marked research-fixture estimates because ABO listings metadata does not include prices.",
  recordCount: 120,
};

export const PRODUCTS: Product[] = [
  {
    "id": "B07CTPR73M",
    "title": "Stone & Beam Stone Brown Swatch, 25020039-01",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Stone & Beam Stone Brown Swatch, 25020039-01. Stone Brown not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 680,
    "color": "Stone Brown",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/61Rp4qOih9L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61Rp4qOih9L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "not specified",
      "sofa",
      "sofas",
      "stone & beam",
      "stone brown"
    ],
    "rating": 4.1,
    "reviews": 12,
    "arStatus": "unavailable",
    "featured": true
  },
  {
    "id": "B072ZLCB3M",
    "title": "Amazon Brand – Rivet Bristol Natural Edge Black Metal Side Table, Walnut",
    "brand": "Rivet",
    "category": "Tables",
    "description": "Amazon Brand – Rivet Bristol Natural Edge Black Metal Side Table, Walnut. Brown metal tables from the Amazon Berkeley Objects catalog.",
    "price": 550,
    "color": "Brown",
    "material": "Metal",
    "style": "Organic modern",
    "dimensions": "18.2 inches W × 18.9 inches D × 18.9 inches H",
    "image": "https://m.media-amazon.com/images/I/81Xh+yZvD1L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81Xh+yZvD1L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1OdfC9iHhL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91A-nCul3fL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "metal",
      "organic modern",
      "rivet",
      "table",
      "tables"
    ],
    "rating": 4.9,
    "reviews": 55,
    "arStatus": "unavailable",
    "featured": true
  },
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
    "id": "B07F2X8K62",
    "title": "Amazon Brand – Ravenna Home Radford Modern Curved Arm Accent Chair, 28.15\"W",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Radford Modern Curved Arm Accent Chair, 28.15\"W. Not specified not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 470,
    "color": "Not specified",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/A1n9ZOzRyQL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1n9ZOzRyQL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91xjC+-Jb1L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1Eol8cImJL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "not specified",
      "ravenna home"
    ],
    "rating": 4.6,
    "reviews": 184,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/2/B07F2X8K62.glb",
    "arStatus": "available",
    "featured": true
  },
  {
    "id": "B075NR8HWJ",
    "title": "scandinavian Design homesick stoel, stof, Style Steel Grey, 100 x 93 x 86 cm",
    "brand": "Movian",
    "category": "Chairs",
    "description": "scandinavian Design homesick stoel, stof, Style Steel Grey, 100 x 93 x 86 cm. Grau polyester chairs from the Amazon Berkeley Objects catalog.",
    "price": 100,
    "color": "Grau",
    "material": "Polyester",
    "style": "Chair",
    "dimensions": "93 centimeters W × 100 centimeters D × 86 centimeters H",
    "image": "https://m.media-amazon.com/images/I/61WTOkHRcZL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61WTOkHRcZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61OzFbSIJTL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61VbU4DvxqL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "grau",
      "movian",
      "polyester"
    ],
    "rating": 4.5,
    "reviews": 227,
    "arStatus": "unavailable",
    "featured": true
  },
  {
    "id": "B07B4SCB6T",
    "title": "Stone & Beam Tisbury Nailhead Trim Queen Bed, 66\"W, Spinnsol Cocoa",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Stone & Beam Tisbury Nailhead Trim Queen Bed, 66\"W, Spinnsol Cocoa. Spinnsol Cocoa stone beds from the Amazon Berkeley Objects catalog.",
    "price": 450,
    "color": "Spinnsol Cocoa",
    "material": "stone",
    "style": "beds",
    "dimensions": "92 inches W × 66 inches D × 56 inches H",
    "image": "https://m.media-amazon.com/images/I/81cVhl8HXmL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81cVhl8HXmL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81aLkCO2DiL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91JtPJ1RluL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "spinnsol cocoa",
      "stone",
      "stone & beam"
    ],
    "rating": 4.4,
    "reviews": 270,
    "arStatus": "unavailable"
  },
  {
    "id": "B07CVFV3J6",
    "title": "Stone & Beam Javier Burnished Bronze Bed",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Stone & Beam Javier Burnished Bronze Bed. Not specified not specified beds from the Amazon Berkeley Objects catalog.",
    "price": 710,
    "color": "Not specified",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/81vZtM-Bb0L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81vZtM-Bb0L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B1xCzMfUaKS._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/912NgJuEZpL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "everyday",
      "not specified",
      "stone & beam"
    ],
    "rating": 4.3,
    "reviews": 313,
    "arStatus": "unavailable"
  },
  {
    "id": "B075WYYHXT",
    "title": "Rivet Navy Swatch, 25010043 Azul Mochila",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Rivet Navy Swatch, 25010043 Azul Mochila. Marino not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 1330,
    "color": "Marino",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/B1R42llOS3S._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/B1R42llOS3S._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bench",
      "everyday",
      "marino",
      "not specified",
      "rivet",
      "sofas"
    ],
    "rating": 4.2,
    "reviews": 356,
    "arStatus": "unavailable"
  },
  {
    "id": "B075X61WKJ",
    "title": "Amazon Brand – Stone & Beam Norah Leather and Wood Round Ottoman, 39.5\", Saddle Brown",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Norah Leather and Wood Round Ottoman, 39.5\", Saddle Brown. Chaps Saddle stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 1540,
    "color": "Chaps Saddle",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "39.5 inches W × 39.5 inches D × 17.25 inches H",
    "image": "https://m.media-amazon.com/images/I/91X+8Y0xhyL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91X+8Y0xhyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1MCesN-faL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91mdgsctO3L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chaps saddle",
      "everyday",
      "ottoman",
      "sofas",
      "stone",
      "stone & beam"
    ],
    "rating": 4.1,
    "reviews": 399,
    "arStatus": "unavailable"
  },
  {
    "id": "B07DBFT2YG",
    "title": "Amazon Brand – Ravenna Home Angela Modern Turned Leg Wood Shelf Storage Coffee Table, 44\"W, Grey",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Angela Modern Turned Leg Wood Shelf Storage Coffee Table, 44\"W, Grey. Grey wood tables from the Amazon Berkeley Objects catalog.",
    "price": 290,
    "color": "Grey",
    "material": "wood",
    "style": "Bold eclectic",
    "dimensions": "44 inches W × 22 inches D × 20 inches H",
    "image": "https://m.media-amazon.com/images/I/61LgxujFuOL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61LgxujFuOL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Zyr3pygsL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61Xi0VZQb2L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bold eclectic",
      "grey",
      "ravenna home",
      "table",
      "tables",
      "wood"
    ],
    "rating": 4.9,
    "reviews": 52,
    "arStatus": "unavailable"
  },
  {
    "id": "B075WX8GBL",
    "title": "25010030 Nietenmuster Hellblau",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "25010030 Nietenmuster Hellblau. Hellblau not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 530,
    "color": "Hellblau",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/B1Pgqf7gJuS._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/B1Pgqf7gJuS._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "hellblau",
      "not specified",
      "rivet"
    ],
    "rating": 4.8,
    "reviews": 95,
    "arStatus": "unavailable"
  },
  {
    "id": "B07G2H3L4L",
    "title": "ROSSINI CANOVA 3 SEATER MAXI",
    "brand": "ROSSINI",
    "category": "Sofas",
    "description": "ROSSINI CANOVA 3 SEATER MAXI. Grey not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 1260,
    "color": "Grey",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "233 centimeters W × 102 centimeters D × 93 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71uyDy+jQcL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71uyDy+jQcL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/715PtmkrxHL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51VeIZYHRJL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "grey",
      "not specified",
      "rossini",
      "sofa",
      "sofas"
    ],
    "rating": 4.7,
    "reviews": 138,
    "arStatus": "unavailable"
  },
  {
    "id": "B083H3WMT3",
    "title": "AmazonBasics Classic Faux Leather Extra Padded Recliner Chair - Brown (Renewed)",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics Classic Faux Leather Extra Padded Recliner Chair - Brown (Renewed). Brown polyurethane chairs from the Amazon Berkeley Objects catalog.",
    "price": 390,
    "color": "Brown",
    "material": "Polyurethane",
    "style": "Everyday",
    "dimensions": "37.4 inches W × 32.7 inches D × 38.6 inches H",
    "image": "https://m.media-amazon.com/images/I/91udGka1EiL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91udGka1EiL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81Pqa+usLyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91l+Tk4UHnL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "brown",
      "chair",
      "chairs",
      "everyday",
      "polyurethane"
    ],
    "rating": 4.6,
    "reviews": 181,
    "arStatus": "unavailable"
  },
  {
    "id": "B07CSYLG4J",
    "title": "Stone & Beam - Reloj de Pulsera, Color marrón, Piedra y Haz",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Stone & Beam - Reloj de Pulsera, Color marrón, Piedra y Haz. Marrón not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 80,
    "color": "Marrón",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/71Z0NoClYmL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71Z0NoClYmL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "marrón",
      "not specified",
      "stone & beam"
    ],
    "rating": 4.5,
    "reviews": 224,
    "arStatus": "unavailable"
  },
  {
    "id": "B07KR9WBN7",
    "title": "Cream Swatch, Ravenna Home",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Cream Swatch, Ravenna Home. Cream not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 440,
    "color": "Cream",
    "material": "Not specified",
    "style": "Woven Fabric",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/916B5JgdShL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/916B5JgdShL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "cream",
      "not specified",
      "ravenna home",
      "woven fabric"
    ],
    "rating": 4.4,
    "reviews": 267,
    "arStatus": "unavailable"
  },
  {
    "id": "B08CD2924F",
    "title": "Amazon Brand – Rivet Madison Modern Fabric Round Lift-Top Storage Tray Ottoman Pouf, 19.7\"W, Marshmallow (Renewed)",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Madison Modern Fabric Round Lift-Top Storage Tray Ottoman Pouf, 19.7\"W, Marshmallow (Renewed). Marshmallow not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 780,
    "color": "Marshmallow",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "19.68 inches W × 19.68 inches D × 16.1 inches H",
    "image": "https://m.media-amazon.com/images/I/919BpwSoX+L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/919BpwSoX+L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91nK0td-nfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91zfgRNrAdL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "marshmallow",
      "not specified",
      "ottoman",
      "rivet",
      "sofas"
    ],
    "rating": 4.3,
    "reviews": 310,
    "arStatus": "unavailable"
  },
  {
    "id": "B07B3XXD3P",
    "title": "Vida Designs Corona Wardrobe, 3 Door, Solid Pine Wood, Solid Pine Wood, Distressed Waxed Pine Bedroom Wooden Storage Mexican Furniture",
    "brand": "Vida Designs",
    "category": "Storage",
    "description": "Vida Designs Corona Wardrobe, 3 Door, Solid Pine Wood, Solid Pine Wood, Distressed Waxed Pine Bedroom Wooden Storage Mexican Furniture. Black wood storage from the Amazon Berkeley Objects catalog.",
    "price": 980,
    "color": "Black",
    "material": "Wood",
    "style": "3 Door Wardrobe",
    "dimensions": "150 centimeters W × 50 centimeters D × 178 centimeters H",
    "image": "https://m.media-amazon.com/images/I/814WJICrXwL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/814WJICrXwL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81-xvMdJoNL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/811DmFwz9kL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "3 door wardrobe",
      "black",
      "cabinet",
      "storage",
      "vida designs",
      "wood"
    ],
    "rating": 4.2,
    "reviews": 353,
    "arStatus": "unavailable"
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
    "id": "B07DBHCKHY",
    "title": "Amazon Brand – Ravenna Home Tufted Armless English Roll Traditional Accent Chair, 26.8\"W, Merlot Red",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Tufted Armless English Roll Traditional Accent Chair, 26.8\"W, Merlot Red. Merlot wood chairs from the Amazon Berkeley Objects catalog.",
    "price": 300,
    "color": "Merlot",
    "material": "Wood",
    "style": "Glam",
    "dimensions": "26.8 inches W × 25.2 inches D × 30.7 inches H",
    "image": "https://m.media-amazon.com/images/I/81l+UPz-wZL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81l+UPz-wZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71jbNwghycL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91OUxxKcckL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "glam",
      "merlot",
      "ravenna home",
      "wood"
    ],
    "rating": 4.9,
    "reviews": 49,
    "arStatus": "unavailable"
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
    "id": "B07L3JS4ZX",
    "title": "(Renewed) Amazon Brand - Solimo Floating Wall Shelf, Set of 4 (Matte Finish, Walnut)",
    "brand": "Amazon Brand - Solimo",
    "category": "Storage",
    "description": "(Renewed) Amazon Brand - Solimo Floating Wall Shelf, Set of 4 (Matte Finish, Walnut). Walnut mdf storage from the Amazon Berkeley Objects catalog.",
    "price": 270,
    "color": "Walnut",
    "material": "MDF",
    "style": "Contemporary",
    "dimensions": "127 millimeters W × 510 millimeters D × 18 millimeters H",
    "image": "https://m.media-amazon.com/images/I/81nh4nPkPKL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81nh4nPkPKL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71p9iKy7UyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71WowbywbpL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon brand - solimo",
      "contemporary",
      "furniture",
      "mdf",
      "storage",
      "walnut"
    ],
    "rating": 4.7,
    "reviews": 135,
    "arStatus": "unavailable"
  },
  {
    "id": "B082VLYQWX",
    "title": "Amazon Brand – Stone & Beam Westview Extra-Deep Down-Filled Leather Sofa Couch, 89\"W, Dark Grey",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Westview Extra-Deep Down-Filled Leather Sofa Couch, 89\"W, Dark Grey. Dark Grey leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 990,
    "color": "Dark Grey",
    "material": "Leather",
    "style": "Everyday",
    "dimensions": "42.126 inches W × 88.98 inches D × 31.5 inches H",
    "image": "https://m.media-amazon.com/images/I/71+YMq06qWL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71+YMq06qWL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91zCzzwdH4L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81pjXEyFRLL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "dark grey",
      "everyday",
      "leather",
      "sofa",
      "sofas",
      "stone & beam"
    ],
    "rating": 4.6,
    "reviews": 178,
    "arStatus": "unavailable"
  },
  {
    "id": "B07SMJY29H",
    "title": "Marchio Amazon - Alkove Hayes - Tavolo da pranzo fisso classico, 130 x 90 x 77 cm, quercia silvestre",
    "brand": "Alkove",
    "category": "Tables",
    "description": "Marchio Amazon - Alkove Hayes - Tavolo da pranzo fisso classico, 130 x 90 x 77 cm, quercia silvestre. Quercia Selvatica quercia tables from the Amazon Berkeley Objects catalog.",
    "price": 420,
    "color": "Quercia Selvatica",
    "material": "Quercia",
    "style": "Moderno",
    "dimensions": "90 centimeters W × 130 centimeters D × 77 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71rYJhm4VeL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71rYJhm4VeL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/31-awanPuYL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/714gCiBtsWL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "moderno",
      "quercia",
      "quercia selvatica",
      "table",
      "tables"
    ],
    "rating": 4.5,
    "reviews": 221,
    "arStatus": "unavailable"
  },
  {
    "id": "B07P5LLX43",
    "title": "Amazon Brand – Stone & Beam Lauren Down Filled Oversized Ottoman with Hardwood Frame, 46.5\"W, Chocolate",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Lauren Down Filled Oversized Ottoman with Hardwood Frame, 46.5\"W, Chocolate. Chocolate not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 960,
    "color": "Chocolate",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "47.24 inches W × 4.72 inches D × 18.9 inches H",
    "image": "https://m.media-amazon.com/images/I/81vMWyVcKsL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81vMWyVcKsL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/917+VEfTYHL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71cmPSfkYoL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chocolate",
      "everyday",
      "not specified",
      "ottoman",
      "sofas",
      "stone & beam"
    ],
    "rating": 4.4,
    "reviews": 264,
    "modelUrl": "https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/3/B07P5LLX43.glb",
    "arStatus": "available"
  },
  {
    "id": "B0792PHPPH",
    "title": "Amazon Brand – Stone & Beam Janelle Button Tufted Round Leather Wheeled Ottoman, 37\"W",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Janelle Button Tufted Round Leather Wheeled Ottoman, 37\"W. Not specified stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 730,
    "color": "Not specified",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/91FFA4oDOrL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91FFA4oDOrL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91w65yOHBCL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1EopVOGB1L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "not specified",
      "ottoman",
      "sofas",
      "stone",
      "stone & beam"
    ],
    "rating": 4.3,
    "reviews": 307,
    "arStatus": "unavailable"
  },
  {
    "id": "B07SHYWXZ8",
    "title": "Alkov modulär Stol (70 x 93) Turkos",
    "brand": "Alkove",
    "category": "Sofas",
    "description": "Alkov modulär Stol (70 x 93) Turkos. Turkos tyg sofas from the Amazon Berkeley Objects catalog.",
    "price": 1460,
    "color": "Turkos",
    "material": "tyg",
    "style": "Stol (70 x 93)",
    "dimensions": "93 centimeters W × 70 centimeters D × 33 centimeters H",
    "image": "https://m.media-amazon.com/images/I/61SNAhNVpEL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61SNAhNVpEL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71Itno08KUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61kyuDrhWXL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "sofa",
      "sofas",
      "stol (70 x 93)",
      "turkos",
      "tyg"
    ],
    "rating": 4.2,
    "reviews": 350,
    "arStatus": "unavailable"
  },
  {
    "id": "B082X3MMFS",
    "title": "AmazonCommercial Silla ejecutiva ergonómica de Piel con Respaldo Alto con Brazos abatibles y Apoyo Lumbar (renovado)",
    "brand": "AmazonCommercial",
    "category": "Chairs",
    "description": "AmazonCommercial Silla ejecutiva ergonómica de Piel con Respaldo Alto con Brazos abatibles y Apoyo Lumbar (renovado). Negro cuero falso chairs from the Amazon Berkeley Objects catalog.",
    "price": 90,
    "color": "Negro",
    "material": "Cuero falso",
    "style": "Ejecutivo",
    "dimensions": "28.5 inches W × 31 inches D × 44.75 inches H",
    "image": "https://m.media-amazon.com/images/I/81uyGneBqbL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81uyGneBqbL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51yBN4fdw8L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61rR4wuRKyL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazoncommercial",
      "chair",
      "chairs",
      "cuero falso",
      "ejecutivo",
      "negro"
    ],
    "rating": 4.1,
    "reviews": 393,
    "arStatus": "unavailable"
  },
  {
    "id": "B07P6JV16D",
    "title": "Amazon Brand – Rivet Emerly Modern Sofa, 83.5\"W, Steel Grey",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Emerly Modern Sofa, 83.5\"W, Steel Grey. Steel wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 1550,
    "color": "Steel",
    "material": "Wood",
    "style": "Everyday",
    "dimensions": "35 inches W × 83.5 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/812+VPBi1lL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/812+VPBi1lL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1FOTTeKAtL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91GGFynw-jL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "rivet",
      "sofa",
      "sofas",
      "steel",
      "wood"
    ],
    "rating": 4.9,
    "reviews": 46,
    "arStatus": "unavailable"
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
    "id": "B07KR89SZ1",
    "title": "Arrow Swatch, Ravenna Home",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Arrow Swatch, Ravenna Home. Arrow not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 310,
    "color": "Arrow",
    "material": "Not specified",
    "style": "Arrow",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/A10K7AtMNjL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A10K7AtMNjL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "arrow",
      "chair",
      "chairs",
      "not specified",
      "ravenna home"
    ],
    "rating": 4.7,
    "reviews": 132,
    "arStatus": "unavailable"
  },
  {
    "id": "B071PDYKYB",
    "title": "Amazon Brand – Stone & Beam Lummi Modern Armless Living Room Accent Chair, 21.6\" W, Shell",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Lummi Modern Armless Living Room Accent Chair, 21.6\" W, Shell. Shell polyester fabric; wood frame chairs from the Amazon Berkeley Objects catalog.",
    "price": 360,
    "color": "Shell",
    "material": "Polyester fabric; Wood frame",
    "style": "Transitional",
    "dimensions": "29.9 inches W × 21.7 inches D × 32.7 inches H",
    "image": "https://m.media-amazon.com/images/I/91czg5Nkc5L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91czg5Nkc5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B1Pk6iJWjwS._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1haEnwAI0L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "polyester fabric; wood frame",
      "shell",
      "stone & beam",
      "transitional"
    ],
    "rating": 4.6,
    "reviews": 175,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QC85X9C",
    "title": "Amazon Brand – Ravenna Home Springdale Modern Bookcase with Decorative Open Sides, 30\"W, White",
    "brand": "Ravenna Home",
    "category": "Storage",
    "description": "Amazon Brand – Ravenna Home Springdale Modern Bookcase with Decorative Open Sides, 30\"W, White. White engineered wood storage from the Amazon Berkeley Objects catalog.",
    "price": 610,
    "color": "White",
    "material": "Engineered Wood",
    "style": "Bookcase",
    "dimensions": "13.46 inches W × 30 inches D × 72 inches H",
    "image": "https://m.media-amazon.com/images/I/71o4-1o39HL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71o4-1o39HL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/21GPmhzt0hL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/913oT8UMBiL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bookcase",
      "desk",
      "engineered wood",
      "ravenna home",
      "storage",
      "white"
    ],
    "rating": 4.5,
    "reviews": 218,
    "arStatus": "unavailable"
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
    "id": "B07B4W5V3C",
    "title": "Amazon Brand – Stone & Beam Tisbury Nailhead Trim Queen Bed, 66\"W, Curious Pearl",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Amazon Brand – Stone & Beam Tisbury Nailhead Trim Queen Bed, 66\"W, Curious Pearl. Curious Pearl stone beds from the Amazon Berkeley Objects catalog.",
    "price": 1030,
    "color": "Curious Pearl",
    "material": "stone",
    "style": "beds",
    "dimensions": "92 inches W × 66 inches D × 56 inches H",
    "image": "https://m.media-amazon.com/images/I/91qktrcsWgL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91qktrcsWgL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1EuNs9SJ5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91ENnjGFVjL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "curious pearl",
      "stone",
      "stone & beam"
    ],
    "rating": 4.3,
    "reviews": 304,
    "arStatus": "unavailable"
  },
  {
    "id": "B00GBUJF3G",
    "title": "Strathwood All-Weather Wicker Deep Seating Outdoor Recliner",
    "brand": "Strathwood by Amazon.com",
    "category": "Chairs",
    "description": "Strathwood All-Weather Wicker Deep Seating Outdoor Recliner. Not specified steel +glass chairs from the Amazon Berkeley Objects catalog.",
    "price": 490,
    "color": "Not specified",
    "material": "Steel +Glass",
    "style": "Everyday",
    "dimensions": "26.378 inches W × 36.2205 inches D × 38.5827 inches H",
    "image": "https://m.media-amazon.com/images/I/81Hnb-ty7sL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81Hnb-ty7sL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/811MbP8rIVL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/814PKSAFaSL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "not specified",
      "steel +glass",
      "strathwood by amazon.com"
    ],
    "rating": 4.2,
    "reviews": 347,
    "arStatus": "unavailable"
  },
  {
    "id": "B07RHBHNC7",
    "title": "Amazon Brand - Solimo Mars എഞ്ചിനീയേർഡ് വുഡ് ബെഡ്സൈഡ് ടേബിൾ ഡ്രോയറോടു കൂടിയത് (വെഞ്ച് ഫിനിഷ്)",
    "brand": "Amazon Brand - Solimo",
    "category": "Tables",
    "description": "Amazon Brand - Solimo Mars എഞ്ചിനീയേർഡ് വുഡ് ബെഡ്സൈഡ് ടേബിൾ ഡ്രോയറോടു കൂടിയത് (വെഞ്ച് ഫിനിഷ്). തവിട്ട് engineered wood tables from the Amazon Berkeley Objects catalog.",
    "price": 480,
    "color": "തവിട്ട്",
    "material": "Engineered Wood",
    "style": "സമകാലികം",
    "dimensions": "360 millimeters W × 430 millimeters D × 465 millimeters H",
    "image": "https://m.media-amazon.com/images/I/81ucGjQVj-L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81ucGjQVj-L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71hYD4HL2SL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61fVo3b-k0L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon brand - solimo",
      "engineered wood",
      "table",
      "tables",
      "തവിട്ട്",
      "സമകാലികം"
    ],
    "rating": 4.1,
    "reviews": 390,
    "arStatus": "unavailable"
  },
  {
    "id": "B07TJVTZRF",
    "title": "Amazon Brand - Movian Arendsee - Sedia da scrivania, 55 x 55 x 93 cm, bianco",
    "brand": "Movian",
    "category": "Chairs",
    "description": "Amazon Brand - Movian Arendsee - Sedia da scrivania, 55 x 55 x 93 cm, bianco. Bianco plastica chairs from the Amazon Berkeley Objects catalog.",
    "price": 550,
    "color": "Bianco",
    "material": "Plastica",
    "style": "Sedia da scrivania",
    "dimensions": "48.5 centimeters W × 56 centimeters D × 93 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71542tkbxTL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71542tkbxTL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41eAUDSITjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/517FGXjrzRL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bianco",
      "chair",
      "chairs",
      "movian",
      "plastica",
      "sedia da scrivania"
    ],
    "rating": 4.9,
    "reviews": 43,
    "arStatus": "unavailable"
  },
  {
    "id": "B082Q9C9YJ",
    "title": "Amazon Brand – Stone & Beam Troy Upholstered Sofa Couch, 80\"W, Ash Gray",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Troy Upholstered Sofa Couch, 80\"W, Ash Gray. Ash Gray not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 1580,
    "color": "Ash Gray",
    "material": "Not specified",
    "style": "Sofa",
    "dimensions": "80 inches W × 36 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/81x8HCKePmL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81x8HCKePmL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91zWqo6woKL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81eUF8xqIxL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "ash gray",
      "not specified",
      "sofa",
      "sofas",
      "stone & beam"
    ],
    "rating": 4.8,
    "reviews": 86,
    "arStatus": "unavailable"
  },
  {
    "id": "B07HSKY87X",
    "title": "Amazon Brand – Rivet Modern End Table, 19.3 Inch Width, Natural and Gold",
    "brand": "Rivet",
    "category": "Tables",
    "description": "Amazon Brand – Rivet Modern End Table, 19.3 Inch Width, Natural and Gold. Not specified metal tables from the Amazon Berkeley Objects catalog.",
    "price": 440,
    "color": "Not specified",
    "material": "Metal",
    "style": "0",
    "dimensions": "20.7 inches W × 22.9 inches D × 27.8 inches H",
    "image": "https://m.media-amazon.com/images/I/71cdMQWJEvL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71cdMQWJEvL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/714bjr8KlFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71ZtlDcLwzL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "0",
      "metal",
      "not specified",
      "rivet",
      "table",
      "tables"
    ],
    "rating": 4.7,
    "reviews": 129,
    "arStatus": "unavailable"
  },
  {
    "id": "B07JGPK68C",
    "title": "Marchio Amazon - Movian, credenza a 2 sportelli e 2 cassetti modello Lek, 100 x 119 x 40 cm, colore bianco",
    "brand": "Movian",
    "category": "Storage",
    "description": "Marchio Amazon - Movian, credenza a 2 sportelli e 2 cassetti modello Lek, 100 x 119 x 40 cm, colore bianco. Bianco not specified storage from the Amazon Berkeley Objects catalog.",
    "price": 640,
    "color": "Bianco",
    "material": "Not specified",
    "style": "credenza a 2 sportelli e 2 cassetti",
    "dimensions": "40 centimeters W × 100 centimeters D × 119 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81Ru-n7yoRL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81Ru-n7yoRL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51DMXqQ34GL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/614dBfBHbJL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bianco",
      "cabinet",
      "credenza a 2 sportelli e 2 cassetti",
      "movian",
      "not specified",
      "storage"
    ],
    "rating": 4.6,
    "reviews": 172,
    "arStatus": "unavailable"
  },
  {
    "id": "B07SJ75Y1M",
    "title": "Amazon Brand - Alkove Hayes Classic Fixed Solid Wood Dining Table, Seats 4-6, 130 x 90 x 75cm, Wild Oak",
    "brand": "Alkove",
    "category": "Tables",
    "description": "Amazon Brand - Alkove Hayes Classic Fixed Solid Wood Dining Table, Seats 4-6, 130 x 90 x 75cm, Wild Oak. Wild Oak oak tables from the Amazon Berkeley Objects catalog.",
    "price": 460,
    "color": "Wild Oak",
    "material": "Oak",
    "style": "Modern",
    "dimensions": "90 centimeters W × 130 centimeters D × 75 centimeters H",
    "image": "https://m.media-amazon.com/images/I/616xYvB4nFL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/616xYvB4nFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41VCyzGmKsL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71pw2BFQLhL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "modern",
      "oak",
      "table",
      "tables",
      "wild oak"
    ],
    "rating": 4.5,
    "reviews": 215,
    "arStatus": "unavailable"
  },
  {
    "id": "B075NP5K3L",
    "title": "Amazon merk - Movian Blankan - 3-zitsbank, 228 x 87 x 78 cm, lichtgrijs",
    "brand": "Movian",
    "category": "Sofas",
    "description": "Amazon merk - Movian Blankan - 3-zitsbank, 228 x 87 x 78 cm, lichtgrijs. lichtgrijs polyester sofas from the Amazon Berkeley Objects catalog.",
    "price": 1540,
    "color": "lichtgrijs",
    "material": "Polyester",
    "style": "3-zitsbank.",
    "dimensions": "87 centimeters W × 228 centimeters D × 78 centimeters H",
    "image": "https://m.media-amazon.com/images/I/51wViyaw-BL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/51wViyaw-BL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61Lw8V0INiL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61Kr8N7cEZL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "3-zitsbank.",
      "lichtgrijs",
      "movian",
      "polyester",
      "sofa",
      "sofas"
    ],
    "rating": 4.4,
    "reviews": 258,
    "arStatus": "unavailable"
  },
  {
    "id": "B082JH6LSF",
    "title": "Amazon Brand – Stone & Beam Mid-Century 2-Drawer File Cabinet, 21.7\"W, Pine Finish",
    "brand": "Stone & Beam",
    "category": "Storage",
    "description": "Amazon Brand – Stone & Beam Mid-Century 2-Drawer File Cabinet, 21.7\"W, Pine Finish. Brown pine storage from the Amazon Berkeley Objects catalog.",
    "price": 780,
    "color": "Brown",
    "material": "Pine",
    "style": "Firm",
    "dimensions": "15.4 inches W × 21.7 inches D × 23.6 inches H",
    "image": "https://m.media-amazon.com/images/I/71S7YSK7N+L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71S7YSK7N+L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81UHzzgAzFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71CuUtfOPSL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "cabinet",
      "firm",
      "pine",
      "stone & beam",
      "storage"
    ],
    "rating": 4.3,
    "reviews": 301,
    "arStatus": "unavailable"
  },
  {
    "id": "B001BQ1Q9G",
    "title": "Pinzon Kinzie Leather Dining Chair, Cream",
    "brand": "Pinzon by Amazon",
    "category": "Chairs",
    "description": "Pinzon Kinzie Leather Dining Chair, Cream. Cream leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 640,
    "color": "Cream",
    "material": "Leather",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/61JeKISYELS._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61JeKISYELS._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "cream",
      "everyday",
      "leather",
      "pinzon by amazon"
    ],
    "rating": 4.2,
    "reviews": 344,
    "arStatus": "unavailable"
  },
  {
    "id": "B0728NWFGY",
    "title": "Amazon Brand – Rivet Madison Modern Round Lift-Top Storage Tray Ottoman Pouf, 19.7\"W, Caviar",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Madison Modern Round Lift-Top Storage Tray Ottoman Pouf, 19.7\"W, Caviar. Caviar wood frame sofas from the Amazon Berkeley Objects catalog.",
    "price": 490,
    "color": "Caviar",
    "material": "Wood frame",
    "style": "Everyday",
    "dimensions": "19.7 inches W × 19.7 inches D × 16.5 inches H",
    "image": "https://m.media-amazon.com/images/I/B13nlR1frXS._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/B13nlR1frXS._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/B1cW8g7CeSS._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1nQAhhi6eL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "caviar",
      "everyday",
      "ottoman",
      "rivet",
      "sofas",
      "wood frame"
    ],
    "rating": 4.1,
    "reviews": 387,
    "arStatus": "unavailable"
  },
  {
    "id": "B07K4QZTNH",
    "title": "Banco de parque",
    "brand": "Amazon Basics",
    "category": "Sofas",
    "description": "Banco de parque. Not specified steel sofas from the Amazon Berkeley Objects catalog.",
    "price": 1270,
    "color": "Not specified",
    "material": "Steel",
    "style": "PARK BENCH",
    "dimensions": "31.5 inches W × 49.6 inches D × 22.8 inches H",
    "image": "https://m.media-amazon.com/images/I/71PLLdkPZzL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71PLLdkPZzL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81ZzuYPu4lL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1scTlAOBmL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon basics",
      "bench",
      "not specified",
      "park bench",
      "sofas",
      "steel"
    ],
    "rating": 4.9,
    "reviews": 40,
    "arStatus": "unavailable"
  },
  {
    "id": "B07MM5H3HX",
    "title": "Ravenna Home Classic Plank-Top Console Table with Large Drawer, 42\"W, Black Wood",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Ravenna Home Classic Plank-Top Console Table with Large Drawer, 42\"W, Black Wood. Not specified not specified tables from the Amazon Berkeley Objects catalog.",
    "price": 510,
    "color": "Not specified",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "42 inches W × 16 inches D × 30 inches H",
    "image": "https://m.media-amazon.com/images/I/715LMwwxF7L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/715LMwwxF7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91qvy9m8BLL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71UkKKqWSdL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "not specified",
      "ravenna home",
      "table",
      "tables"
    ],
    "rating": 4.8,
    "reviews": 83,
    "arStatus": "unavailable"
  },
  {
    "id": "B07HYY8ZGY",
    "title": "Amazon Brand – Stone & Beam Westcott Contemporary 93\" Sofa, Fabric, 93\"W, Haze",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Westcott Contemporary 93\" Sofa, Fabric, 93\"W, Haze. Haze wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 540,
    "color": "Haze",
    "material": "Wood",
    "style": "Transitional",
    "dimensions": "33 inches W × 38 inches D × 95 inches H",
    "image": "https://m.media-amazon.com/images/I/910vvDJfNcL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/910vvDJfNcL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91NIJVXu7zL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1F-pL+2zDL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "haze",
      "sofa",
      "sofas",
      "stone & beam",
      "transitional",
      "wood"
    ],
    "rating": 4.7,
    "reviews": 126,
    "arStatus": "unavailable"
  },
  {
    "id": "B084T9X9NN",
    "title": "Amazon Brand – Ravenna Home Modern Farmhouse Coffee Table, 40\"W, Antique Gray Pine",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Modern Farmhouse Coffee Table, 40\"W, Antique Gray Pine. Antique Gray wood tables from the Amazon Berkeley Objects catalog.",
    "price": 790,
    "color": "Antique Gray",
    "material": "Wood",
    "style": "Coffee Table",
    "dimensions": "22 inches W × 40 inches D × 18 inches H",
    "image": "https://m.media-amazon.com/images/I/71btre9TsiL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71btre9TsiL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71XS-b8WJqL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/718VDWHs9WL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "antique gray",
      "coffee table",
      "ravenna home",
      "table",
      "tables",
      "wood"
    ],
    "rating": 4.6,
    "reviews": 169,
    "arStatus": "unavailable"
  },
  {
    "id": "B07K35ZXB6",
    "title": "Yellow Swatch, Stone & Beam",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Yellow Swatch, Stone & Beam. Yellow not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 250,
    "color": "Yellow",
    "material": "Not specified",
    "style": "Linen",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/61Yug8fG7UL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61Yug8fG7UL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "linen",
      "not specified",
      "stone & beam",
      "yellow"
    ],
    "rating": 4.5,
    "reviews": 212,
    "arStatus": "unavailable"
  },
  {
    "id": "B002KMI990",
    "title": "Strathwood Garden Furniture - Padre All-Weather Wicker  / Poly Rattan 48-Inch / 122 cm Round Dining Table",
    "brand": "Strathwood",
    "category": "Tables",
    "description": "Strathwood Garden Furniture - Padre All-Weather Wicker  / Poly Rattan 48-Inch / 122 cm Round Dining Table. Not specified not specified tables from the Amazon Berkeley Objects catalog.",
    "price": 210,
    "color": "Not specified",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "0 centimeters W × 0 centimeters D × 0 centimeters H",
    "image": "https://m.media-amazon.com/images/I/91ibnoXe1BL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91ibnoXe1BL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91ZTbQE1GOL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71xMJzQ1lpL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "not specified",
      "strathwood",
      "table",
      "tables"
    ],
    "rating": 4.4,
    "reviews": 255,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QFRSLZB",
    "title": "Amazon Brand – Rivet Contemporary Channel-Back Dining Chair, 35\"H, Ivory, Set of 2",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Contemporary Channel-Back Dining Chair, 35\"H, Ivory, Set of 2. Ivory textile chairs from the Amazon Berkeley Objects catalog.",
    "price": 90,
    "color": "Ivory",
    "material": "Textile",
    "style": "Everyday",
    "dimensions": "24.02 inches W × 18.9 inches D × 35.43 inches H",
    "image": "https://m.media-amazon.com/images/I/81t7ILRrXDL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81t7ILRrXDL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A15d9SYHqOL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81+XGMbnT9L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "ivory",
      "rivet",
      "textile"
    ],
    "rating": 4.3,
    "reviews": 298,
    "arStatus": "unavailable"
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
    "id": "B000S1DKLW",
    "title": "Strathwood Grosse Pointe Leather Loveseat, Mahogany",
    "brand": "Strathwood by Amazon.com",
    "category": "Sofas",
    "description": "Strathwood Grosse Pointe Leather Loveseat, Mahogany. Mahogony hardwood sofas from the Amazon Berkeley Objects catalog.",
    "price": 1580,
    "color": "Mahogony",
    "material": "Hardwood",
    "style": "Everyday",
    "dimensions": "35 inches W × 65 inches D × 37 inches H",
    "image": "https://m.media-amazon.com/images/I/415HbBHa0eL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/415HbBHa0eL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "hardwood",
      "mahogony",
      "sofa",
      "sofas",
      "strathwood by amazon.com"
    ],
    "rating": 4.1,
    "reviews": 384,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QJXW4VD",
    "title": "Amazon Brand – Rivet Damien Mid-Century Modern Channel-Backed Sofa, 87\"W, Leather, Cognac",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Damien Mid-Century Modern Channel-Backed Sofa, 87\"W, Leather, Cognac. Cognac leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 1360,
    "color": "Cognac",
    "material": "Leather",
    "style": "Everyday",
    "dimensions": "37.8 inches W × 87.01 inches D × 32.28 inches H",
    "image": "https://m.media-amazon.com/images/I/71KlKJdLfUL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71KlKJdLfUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71a7jX1uaCL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71KTIluJHPL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cognac",
      "everyday",
      "leather",
      "ottoman",
      "rivet",
      "sofas"
    ],
    "rating": 4.9,
    "reviews": 37,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QTD9VPM",
    "title": "Amazon Brand - Movian Arendsee Set of 2 Dining Chairs, 55 x 48.5 x 85 cm, Light grey",
    "brand": "Movian",
    "category": "Chairs",
    "description": "Amazon Brand - Movian Arendsee Set of 2 Dining Chairs, 55 x 48.5 x 85 cm, Light grey. Light Grey fabric chairs from the Amazon Berkeley Objects catalog.",
    "price": 380,
    "color": "Light Grey",
    "material": "fabric",
    "style": "Set of 2 Bar Stools",
    "dimensions": "48.5 centimeters W × 55 centimeters D × 85 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81EXO8kXnhL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81EXO8kXnhL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81YMNwTswwL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/711Ihs4jdwL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "fabric",
      "light grey",
      "movian",
      "set of 2 bar stools"
    ],
    "rating": 4.8,
    "reviews": 80,
    "arStatus": "unavailable"
  },
  {
    "id": "B07BWK7JWZ",
    "title": "Amazon Brand – Rivet Edgewest Modern Right-Facing L-Shape Sectional, Leather, 116\"W, Saddle",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Edgewest Modern Right-Facing L-Shape Sectional, Leather, 116\"W, Saddle. Saddle leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 770,
    "color": "Saddle",
    "material": "Leather",
    "style": "Industrial",
    "dimensions": "36 inches W × 88 inches D × 28 inches H",
    "image": "https://m.media-amazon.com/images/I/81fH8Fo1T1L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81fH8Fo1T1L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/812p8vNG8xL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71k5sqDk3+L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "industrial",
      "leather",
      "rivet",
      "saddle",
      "sofa",
      "sofas"
    ],
    "rating": 4.7,
    "reviews": 123,
    "arStatus": "unavailable"
  },
  {
    "id": "B07TJSVJ4B",
    "title": "AmazonBasics Fauteuil pivotant à Dossier Haut avec PU nervuré Puresoft Noir",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics Fauteuil pivotant à Dossier Haut avec PU nervuré Puresoft Noir. Noir not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 690,
    "color": "Noir",
    "material": "Not specified",
    "style": "Executive",
    "dimensions": "26.25 inches W × 26.75 inches D × 45.25 inches H",
    "image": "https://m.media-amazon.com/images/I/71YCInWiz8L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71YCInWiz8L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71d5YEyu-ML._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71-QPa4voAL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "chair",
      "chairs",
      "executive",
      "noir",
      "not specified"
    ],
    "rating": 4.6,
    "reviews": 166,
    "arStatus": "unavailable"
  },
  {
    "id": "B07JY3NNPK",
    "title": "Amazon Brand – Stone & Beam Pinebrook Traditional Recliner, Fabric, 39\"W, Stone",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Pinebrook Traditional Recliner, Fabric, 39\"W, Stone. Stone textile chairs from the Amazon Berkeley Objects catalog.",
    "price": 500,
    "color": "Stone",
    "material": "Textile",
    "style": "Everyday",
    "dimensions": "39 inches W × 36 inches D × 41 inches H",
    "image": "https://m.media-amazon.com/images/I/910WIIzuQJL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/910WIIzuQJL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91hhVvyG5+L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91gCruuGc2L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "stone",
      "stone & beam",
      "textile"
    ],
    "rating": 4.5,
    "reviews": 209,
    "arStatus": "unavailable"
  },
  {
    "id": "B082BL4G1J",
    "title": "Amazon Brand – Rivet Bertha Mid-Century Velvet-Upholstered Swivel Office Chair, 25.25\"W, Olive Green with Gold Finish",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Bertha Mid-Century Velvet-Upholstered Swivel Office Chair, 25.25\"W, Olive Green with Gold Finish. Olive Green velvet chairs from the Amazon Berkeley Objects catalog.",
    "price": 450,
    "color": "Olive Green",
    "material": "Velvet",
    "style": "Everyday",
    "dimensions": "25.25 inches W × 25 inches D × 35.75 inches H",
    "image": "https://m.media-amazon.com/images/I/71VHQwEYbIL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71VHQwEYbIL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71uSNSvFdnL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/919XBP7-MoL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "olive green",
      "rivet",
      "velvet"
    ],
    "rating": 4.4,
    "reviews": 252,
    "arStatus": "unavailable"
  },
  {
    "id": "B07SS974PZ",
    "title": "AmazonBasics - Pouf ottomano con rivestimento in maglia e interno in schiuma, Blu",
    "brand": "AmazonBasics",
    "category": "Sofas",
    "description": "AmazonBasics - Pouf ottomano con rivestimento in maglia e interno in schiuma, Blu. Blu Navy schiuma sofas from the Amazon Berkeley Objects catalog.",
    "price": 1120,
    "color": "Blu Navy",
    "material": "Schiuma",
    "style": "Everyday",
    "dimensions": "16.14 inches W × 16.14 inches D × 10.63 inches H",
    "image": "https://m.media-amazon.com/images/I/91Zhv2c37FL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91Zhv2c37FL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/31QqMPdFcbL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71yF2jDYOQL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "blu navy",
      "everyday",
      "ottoman",
      "schiuma",
      "sofas"
    ],
    "rating": 4.3,
    "reviews": 295,
    "arStatus": "unavailable"
  },
  {
    "id": "B07KR9GKL1",
    "title": "Ivory Swatch, Ravenna Home",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Ivory Swatch, Ravenna Home. Ivory not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 390,
    "color": "Ivory",
    "material": "Not specified",
    "style": "Ivory Cotton",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/81xvPQfhMUL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81xvPQfhMUL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "ivory",
      "ivory cotton",
      "not specified",
      "ravenna home"
    ],
    "rating": 4.2,
    "reviews": 338,
    "arStatus": "unavailable"
  },
  {
    "id": "B07K6S2G6J",
    "title": "Amazon-merk - Movian Mjøsa - compact bureau met 1 lade, 79 x 44 x 76 cm, hoogglans wit",
    "brand": "Movian",
    "category": "Storage",
    "description": "Amazon-merk - Movian Mjøsa - compact bureau met 1 lade, 79 x 44 x 76 cm, hoogglans wit. Hoogglans wit holzwerkstoff storage from the Amazon Berkeley Objects catalog.",
    "price": 370,
    "color": "Hoogglans wit",
    "material": "Holzwerkstoff",
    "style": "modern",
    "dimensions": "44 centimeters W × 79 centimeters D × 76 centimeters H",
    "image": "https://m.media-amazon.com/images/I/610yeWPoveL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/610yeWPoveL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51UTAUh9FPL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61Hq839OWSL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "desk",
      "holzwerkstoff",
      "hoogglans wit",
      "modern",
      "movian",
      "storage"
    ],
    "rating": 4.1,
    "reviews": 381,
    "arStatus": "unavailable"
  },
  {
    "id": "B07H8TNM7H",
    "title": "Marca Amazon - Movian Lahn - Armario de 2 puertas correderas con espejo y luces LED, 250 x 218 x 65 cm (blanco alpino/blanco brillante)",
    "brand": "Movian",
    "category": "Storage",
    "description": "Marca Amazon - Movian Lahn - Armario de 2 puertas correderas con espejo y luces LED, 250 x 218 x 65 cm (blanco alpino/blanco brillante). Blanco Alpino/Blanco Brillante not specified storage from the Amazon Berkeley Objects catalog.",
    "price": 480,
    "color": "Blanco Alpino/Blanco Brillante",
    "material": "Not specified",
    "style": "Armario con LED 250cm",
    "dimensions": "65 centimeters W × 250 centimeters D × 218 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71l3pPC6PdL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71l3pPC6PdL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81EtCXG-lAL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61Os3I0hOgL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "armario con led 250cm",
      "blanco alpino/blanco brillante",
      "dresser",
      "movian",
      "not specified",
      "storage"
    ],
    "rating": 4.9,
    "reviews": 34,
    "arStatus": "unavailable"
  },
  {
    "id": "B07WL2VHTG",
    "title": "Marque Amazon - Rivet Table d'appoint ronde, 50 x 50 cm, Finition orme",
    "brand": "Rivet",
    "category": "Tables",
    "description": "Marque Amazon - Rivet Table d'appoint ronde, 50 x 50 cm, Finition orme. Brown partie supérieure en orme massif et base en métal à revêtement par poudre noir tables from the Amazon Berkeley Objects catalog.",
    "price": 240,
    "color": "Brown",
    "material": "partie supérieure en orme massif et base en métal à revêtement par poudre noir",
    "style": "table d'appoint",
    "dimensions": "50 centimeters W × 50 centimeters D × 50 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81EId7Pb0tL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81EId7Pb0tL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/810rOMIHOuL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91uKiGpuP8L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "brown",
      "partie supérieure en orme massif et base en métal à revêtement par poudre noir",
      "rivet",
      "table",
      "table d'appoint",
      "tables"
    ],
    "rating": 4.8,
    "reviews": 77,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QD6V1VT",
    "title": "Amazon Brand – Rivet Classic Desk, 39.4\"W, Dark Espresso",
    "brand": "Rivet",
    "category": "Storage",
    "description": "Amazon Brand – Rivet Classic Desk, 39.4\"W, Dark Espresso. Dark Espresso engineered wood storage from the Amazon Berkeley Objects catalog.",
    "price": 620,
    "color": "Dark Espresso",
    "material": "Engineered Wood",
    "style": "Everyday",
    "dimensions": "21.6 inches W × 39.4 inches D × 30 inches H",
    "image": "https://m.media-amazon.com/images/I/71arjf0rbxL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71arjf0rbxL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91hM+Dv6iyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61U1YlYU-qL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "dark espresso",
      "desk",
      "engineered wood",
      "everyday",
      "rivet",
      "storage"
    ],
    "rating": 4.7,
    "reviews": 120,
    "arStatus": "unavailable"
  },
  {
    "id": "B07H8PS46Q",
    "title": "Film Elsa Utdragbart matbord 160–200 cm 160-200 cm Canyon-ek",
    "brand": "Movian",
    "category": "Tables",
    "description": "Film Elsa Utdragbart matbord 160–200 cm 160-200 cm Canyon-ek. Canyon-ek not specified tables from the Amazon Berkeley Objects catalog.",
    "price": 170,
    "color": "Canyon-ek",
    "material": "Not specified",
    "style": "Utdragbart matbord 160–200 cm",
    "dimensions": "90 centimeters W × 200 centimeters D × 79 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71nVCGHsxwL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71nVCGHsxwL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/719aGmXWb5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61yN4DAq1xL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "canyon-ek",
      "movian",
      "not specified",
      "table",
      "tables",
      "utdragbart matbord 160–200 cm"
    ],
    "rating": 4.6,
    "reviews": 163,
    "arStatus": "unavailable"
  },
  {
    "id": "B07SLF6QNG",
    "title": "Marchio Amazon - Alkove Hayes - Panca angolare, finta pelle, 185,4 x 155,4 x 55,5 cm, faggio",
    "brand": "Alkove",
    "category": "Sofas",
    "description": "Marchio Amazon - Alkove Hayes - Panca angolare, finta pelle, 185,4 x 155,4 x 55,5 cm, faggio. Faggio faggio e finta pelle sofas from the Amazon Berkeley Objects catalog.",
    "price": 420,
    "color": "Faggio",
    "material": "Faggio e finta pelle",
    "style": "Modern",
    "dimensions": "155.4 centimeters W × 185.4 centimeters D × 55.5 centimeters H",
    "image": "https://m.media-amazon.com/images/I/61VizJARD5L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61VizJARD5L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51bP1uSyVlL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61NPnHOmraL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "bench",
      "faggio",
      "faggio e finta pelle",
      "modern",
      "sofas"
    ],
    "rating": 4.5,
    "reviews": 206,
    "arStatus": "unavailable"
  },
  {
    "id": "B075Z8769G",
    "title": "Amazon Brand – Rivet Mid-Century Swope Curved Arm Swivel Office Chair, 26\"W, Felt Grey",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Amazon Brand – Rivet Mid-Century Swope Curved Arm Swivel Office Chair, 26\"W, Felt Grey. Grey polyester; metal base chairs from the Amazon Berkeley Objects catalog.",
    "price": 420,
    "color": "Grey",
    "material": "polyester; Metal base",
    "style": "Everyday",
    "dimensions": "26 inches W × 24.8 inches D × 33.9 inches H",
    "image": "https://m.media-amazon.com/images/I/918OhgZ71BL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/918OhgZ71BL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1Tug5oM2QL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91dN99DTihL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "grey",
      "polyester; metal base",
      "rivet"
    ],
    "rating": 4.4,
    "reviews": 249,
    "arStatus": "unavailable"
  },
  {
    "id": "B015IPNVFW",
    "title": "Solutions 14840 203 Revolving Door Wardrobe with 6 Doors, Arctic White/Front Varnished White with Three Schubkästen",
    "brand": "Solutions",
    "category": "Storage",
    "description": "Solutions 14840 203 Revolving Door Wardrobe with 6 Doors, Arctic White/Front Varnished White with Three Schubkästen. White not specified storage from the Amazon Berkeley Objects catalog.",
    "price": 820,
    "color": "White",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "300 centimeters W × 58 centimeters D × 236 centimeters H",
    "image": "https://m.media-amazon.com/images/I/619T404X2WL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/619T404X2WL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81wchzUy22L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81Cv1+bo9lL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cabinet",
      "everyday",
      "not specified",
      "solutions",
      "storage",
      "white"
    ],
    "rating": 4.3,
    "reviews": 292,
    "arStatus": "unavailable"
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
    "id": "B07B4ZFD1C",
    "title": "Amazon Brand – Stone & Beam Prudence Tufted King Bed, 84\"W, Curious Charcoal",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Amazon Brand – Stone & Beam Prudence Tufted King Bed, 84\"W, Curious Charcoal. Curious Charcoal stone beds from the Amazon Berkeley Objects catalog.",
    "price": 540,
    "color": "Curious Charcoal",
    "material": "stone",
    "style": "beds",
    "dimensions": "92 inches W × 84 inches D × 56 inches H",
    "image": "https://m.media-amazon.com/images/I/91SZBS938jL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91SZBS938jL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91eHAp+uXjL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1NRVDY2D6L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "curious charcoal",
      "stone",
      "stone & beam"
    ],
    "rating": 4.1,
    "reviews": 378,
    "arStatus": "unavailable"
  },
  {
    "id": "B07MBFDHRY",
    "title": "Amazon Brand – Ravenna Home Clover-Pattern Ceramic Garden Stool or Side Table, 16\"H, Grey",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Clover-Pattern Ceramic Garden Stool or Side Table, 16\"H, Grey. Grey ceramic tables from the Amazon Berkeley Objects catalog.",
    "price": 390,
    "color": "Grey",
    "material": "ceramic",
    "style": "Clover Pattern",
    "dimensions": "13 inches W × 13 inches D × 16 inches H",
    "image": "https://m.media-amazon.com/images/I/81PPnRUQvwL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81PPnRUQvwL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1fHDcWb1RL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81PWdCWzXxL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "ceramic",
      "clover pattern",
      "grey",
      "ravenna home",
      "table",
      "tables"
    ],
    "rating": 4.9,
    "reviews": 31,
    "arStatus": "unavailable"
  },
  {
    "id": "B07B4MF6YH",
    "title": "Amazon Brand – Stone & Beam Andover Modern Rectangle Ottoman, 32\"W, Tan",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Andover Modern Rectangle Ottoman, 32\"W, Tan. Tan not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 910,
    "color": "Tan",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "24 inches W × 35 inches D × 28 inches H",
    "image": "https://m.media-amazon.com/images/I/914TrKIu0lL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/914TrKIu0lL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1JOvS2iPqL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91cuZmtZ-zL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "not specified",
      "ottoman",
      "sofas",
      "stone & beam",
      "tan"
    ],
    "rating": 4.8,
    "reviews": 74,
    "arStatus": "unavailable"
  },
  {
    "id": "B07SJ7S29M",
    "title": "Marque Amazon - Alkove Hayes - Lot de 2 chaises de salle à manger, 47 x 45,4 x 92 cm, C-ur de hêtre",
    "brand": "Alkove",
    "category": "Chairs",
    "description": "Marque Amazon - Alkove Hayes - Lot de 2 chaises de salle à manger, 47 x 45,4 x 92 cm, C-ur de hêtre. Cœur de Hêtre cœur de hêtre et cuir synthétique chairs from the Amazon Berkeley Objects catalog.",
    "price": 460,
    "color": "Cœur de Hêtre",
    "material": "Cœur de hêtre et cuir synthétique",
    "style": "Moderne",
    "dimensions": "45.4 centimeters W × 47 centimeters D × 92 centimeters H",
    "image": "https://m.media-amazon.com/images/I/71qG11mnkNL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71qG11mnkNL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/21iy6kOWiFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61IYrOUrFIL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "chair",
      "chairs",
      "cœur de hêtre",
      "cœur de hêtre et cuir synthétique",
      "moderne"
    ],
    "rating": 4.7,
    "reviews": 117,
    "arStatus": "unavailable"
  },
  {
    "id": "B07P5LN16X",
    "title": "Amazon Brand – Rivet Sloane Modern Leather Loveseat with Tufted Back, 64.2\"W, Caramel",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Sloane Modern Leather Loveseat with Tufted Back, 64.2\"W, Caramel. Caramel wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 1330,
    "color": "Caramel",
    "material": "Wood",
    "style": "Mid-Century modern",
    "dimensions": "35.8 inches W × 64.2 inches D × 33.1 inches H",
    "image": "https://m.media-amazon.com/images/I/71SiSSChdOL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71SiSSChdOL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81QIUxF-Z-L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81ql7S5j6kL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "caramel",
      "mid-century modern",
      "rivet",
      "sofa",
      "sofas",
      "wood"
    ],
    "rating": 4.6,
    "reviews": 160,
    "arStatus": "unavailable"
  },
  {
    "id": "B0888M8SYP",
    "title": "Amazon Basics - Silla de Oficina Estilo Carrera/Juego",
    "brand": "Amazon Basics",
    "category": "Chairs",
    "description": "Amazon Basics - Silla de Oficina Estilo Carrera/Juego. Rojo not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 200,
    "color": "Rojo",
    "material": "Not specified",
    "style": "classical",
    "dimensions": "22.6 inches W × 25.2 inches D × 44.1 inches H",
    "image": "https://m.media-amazon.com/images/I/81GTKUiuS7L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81GTKUiuS7L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91JCBEDSnoL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81+XGn31daL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon basics",
      "chair",
      "chairs",
      "classical",
      "not specified",
      "rojo"
    ],
    "rating": 4.5,
    "reviews": 203,
    "arStatus": "unavailable"
  },
  {
    "id": "B0728NW87S",
    "title": "Urban Living AMZ420099BLANCO Linon Living Room Chair",
    "brand": "Urban Living",
    "category": "Chairs",
    "description": "Urban Living AMZ420099BLANCO Linon Living Room Chair. Gray not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 460,
    "color": "Gray",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "28.5 inches W × 28.5 inches D × 23.5 inches H",
    "image": "https://m.media-amazon.com/images/I/61kVdTXTJ4L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61kVdTXTJ4L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "gray",
      "not specified",
      "urban living"
    ],
    "rating": 4.4,
    "reviews": 246,
    "arStatus": "unavailable"
  },
  {
    "id": "B07B4M364Y",
    "title": "Amazon Brand – Stone & Beam Appleton Farmhouse Recliner, 35\"W, Khaki",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Appleton Farmhouse Recliner, 35\"W, Khaki. Khaki stone chairs from the Amazon Berkeley Objects catalog.",
    "price": 290,
    "color": "Khaki",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "44 inches W × 38 inches D × 43 inches H",
    "image": "https://m.media-amazon.com/images/I/91DL2D1gd1L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91DL2D1gd1L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81lDkoiiYaL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91gtyMvRCVL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "khaki",
      "stone",
      "stone & beam"
    ],
    "rating": 4.3,
    "reviews": 289,
    "arStatus": "unavailable"
  },
  {
    "id": "B000HBVO5W",
    "title": "Strathwood Naples Sling Arm Chair, Set of 2",
    "brand": "Strathwood by Amazon.com",
    "category": "Chairs",
    "description": "Strathwood Naples Sling Arm Chair, Set of 2. Not specified aluminum chairs from the Amazon Berkeley Objects catalog.",
    "price": 510,
    "color": "Not specified",
    "material": "aluminum",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/516VDAEVA4L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/516VDAEVA4L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51W4JH9VFPL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/415YB88V1JL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "aluminum",
      "chair",
      "chairs",
      "everyday",
      "not specified",
      "strathwood by amazon.com"
    ],
    "rating": 4.2,
    "reviews": 332,
    "arStatus": "unavailable"
  },
  {
    "id": "B07WJ58GDB",
    "title": "Amazon Brand - Solimo Diner Fabric 3 seater Sofa (Brown)",
    "brand": "Amazon Brand - Solimo",
    "category": "Sofas",
    "description": "Amazon Brand - Solimo Diner Fabric 3 seater Sofa (Brown). BROWN wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 470,
    "color": "BROWN",
    "material": "Wood",
    "style": "Contemporary",
    "dimensions": "820 millimeters W × 1830 millimeters D × 710 millimeters H",
    "image": "https://m.media-amazon.com/images/I/71we592nuAL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71we592nuAL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/919yozgczmL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71z5OYa939L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazon brand - solimo",
      "brown",
      "contemporary",
      "sofa",
      "sofas",
      "wood"
    ],
    "rating": 4.1,
    "reviews": 375,
    "arStatus": "unavailable"
  },
  {
    "id": "B07RR3K7KG",
    "title": "AmazonBasics - Mobile, 120 x 40 x 85,5 cm, colore marrone",
    "brand": "AmazonBasics",
    "category": "Storage",
    "description": "AmazonBasics - Mobile, 120 x 40 x 85,5 cm, colore marrone. Marron legno storage from the Amazon Berkeley Objects catalog.",
    "price": 230,
    "color": "Marron",
    "material": "Legno",
    "style": "Buffet",
    "dimensions": "120 centimeters W × 40 centimeters D × 85.5 centimeters H",
    "image": "https://m.media-amazon.com/images/I/819BU-1hZQL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/819BU-1hZQL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91dCzE1+xtL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71As0WUZ8ML._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "buffet",
      "cabinet",
      "legno",
      "marron",
      "storage"
    ],
    "rating": 4.9,
    "reviews": 28,
    "arStatus": "unavailable"
  },
  {
    "id": "B07HNJFGH4",
    "title": "UMI. Essentials Portable Camping Chair Compact Ultralight Folding Chair with Carry Bag for Hiking, Beach,Fishing,Outdoor Heavy Duty 265 lb Capacity Red",
    "brand": "UMI",
    "category": "Chairs",
    "description": "UMI. Essentials Portable Camping Chair Compact Ultralight Folding Chair with Carry Bag for Hiking, Beach,Fishing,Outdoor Heavy Duty 265 lb Capacity Red. Red mesh chairs from the Amazon Berkeley Objects catalog.",
    "price": 520,
    "color": "Red",
    "material": "Mesh",
    "style": "Everyday",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/71vms9Y4tAL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71vms9Y4tAL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71k831aqYAL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61jZ5OFHkpL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "mesh",
      "red",
      "umi"
    ],
    "rating": 4.8,
    "reviews": 71,
    "arStatus": "unavailable"
  },
  {
    "id": "B075X33RZL",
    "title": "Amazon Brand – Stone & Beam Larkin Living Room Accent Swivel Chair, 30\"W, Melrose Blue",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Larkin Living Room Accent Swivel Chair, 30\"W, Melrose Blue. Melrose Blue stone chairs from the Amazon Berkeley Objects catalog.",
    "price": 460,
    "color": "Melrose Blue",
    "material": "stone",
    "style": "Transitional",
    "dimensions": "30 inches W × 35 inches D × 33 inches H",
    "image": "https://m.media-amazon.com/images/I/A19dc-hOcyL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A19dc-hOcyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91KljSMXAyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1XUFPnRVbL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "melrose blue",
      "stone",
      "stone & beam",
      "transitional"
    ],
    "rating": 4.7,
    "reviews": 114,
    "arStatus": "unavailable"
  },
  {
    "id": "B07VC3QP7G",
    "title": "AmazonBasics Extra Comfort Executive stoel met hoge rugleuning met opklapbare armen en Lumbar-ondersteuning Uitvoerend High Back BRON",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics Extra Comfort Executive stoel met hoge rugleuning met opklapbare armen en Lumbar-ondersteuning Uitvoerend High Back BRON. BRON zilver chairs from the Amazon Berkeley Objects catalog.",
    "price": 160,
    "color": "BRON",
    "material": "zilver",
    "style": "Uitvoerend",
    "dimensions": "28.5 inches W × 31 inches D × 44.75 inches H",
    "image": "https://m.media-amazon.com/images/I/71iT5oRfvCL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71iT5oRfvCL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71dUYHvqExL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71HJhg4AE6L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "bron",
      "chair",
      "chairs",
      "uitvoerend",
      "zilver"
    ],
    "rating": 4.6,
    "reviews": 157,
    "arStatus": "unavailable"
  },
  {
    "id": "B082VMDZKZ",
    "title": "Amazon Brand – Rivet Alonzo Contemporary Leather Loveseat Sofa, 64\"W, Grey",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Alonzo Contemporary Leather Loveseat Sofa, 64\"W, Grey. Grey Leather leather sofas from the Amazon Berkeley Objects catalog.",
    "price": 780,
    "color": "Grey Leather",
    "material": "Leather",
    "style": "Mid-Century Modern",
    "dimensions": "37.8 inches W × 63.78 inches D × 35.43 inches H",
    "image": "https://m.media-amazon.com/images/I/71iQTt0ov6L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71iQTt0ov6L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71iVXfOSSxL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71GfKAH8uJL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "grey leather",
      "leather",
      "mid-century modern",
      "rivet",
      "sofa",
      "sofas"
    ],
    "rating": 4.5,
    "reviews": 200,
    "arStatus": "unavailable"
  },
  {
    "id": "B07KR86C57",
    "title": "Lace Swatch, Ravenna Home",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Lace Swatch, Ravenna Home. Lace not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 870,
    "color": "Lace",
    "material": "Not specified",
    "style": "Baldwin",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/A1xwlwy-dTL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1xwlwy-dTL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "baldwin",
      "lace",
      "not specified",
      "ravenna home",
      "sofa",
      "sofas"
    ],
    "rating": 4.4,
    "reviews": 243,
    "arStatus": "unavailable"
  },
  {
    "id": "B07P5LMN2C",
    "title": "Amazon Brand – Rivet Sloane Mid-Century Modern Loveseat with Tufted Back, 64.2\"W, Yellow",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Sloane Mid-Century Modern Loveseat with Tufted Back, 64.2\"W, Yellow. Yellow wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 1450,
    "color": "Yellow",
    "material": "Wood",
    "style": "Mid-Century modern",
    "dimensions": "35.8 inches W × 64.2 inches D × 33.1 inches H",
    "image": "https://m.media-amazon.com/images/I/7168HPhsezL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/7168HPhsezL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81OrBMtT31L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/911Yrb-gzeL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "mid-century modern",
      "rivet",
      "sofa",
      "sofas",
      "wood",
      "yellow"
    ],
    "rating": 4.3,
    "reviews": 286,
    "arStatus": "unavailable"
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
    "id": "B07KRBDWCQ",
    "title": "Gunmetal Swatch, Ravenna Home",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Gunmetal Swatch, Ravenna Home. Gunmetal not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 930,
    "color": "Gunmetal",
    "material": "Not specified",
    "style": "Raconteur",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/B1sR9OJJvhS._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/B1sR9OJJvhS._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "gunmetal",
      "not specified",
      "raconteur",
      "ravenna home",
      "sofa",
      "sofas"
    ],
    "rating": 4.1,
    "reviews": 372,
    "arStatus": "unavailable"
  },
  {
    "id": "B086GM9TTD",
    "title": "AmazonBasics Mid-Back Mesh Chair, with Contoured Mesh Seat for Extra Breathability - Black (Renewed)",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics Mid-Back Mesh Chair, with Contoured Mesh Seat for Extra Breathability - Black (Renewed). Black plastic chairs from the Amazon Berkeley Objects catalog.",
    "price": 610,
    "color": "Black",
    "material": "Plastic",
    "style": "black",
    "dimensions": "22.24 inches W × 22.24 inches D × 38.78 inches H",
    "image": "https://m.media-amazon.com/images/I/91BIrlya6PL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91BIrlya6PL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91xFuT4qKCL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81rKqg-wg-L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "black",
      "chair",
      "chairs",
      "plastic"
    ],
    "rating": 4.9,
    "reviews": 25,
    "arStatus": "unavailable"
  },
  {
    "id": "B07B4SCPMY",
    "title": "Amazon Brand – Stone & Beam Prudence Tufted King Bed, 84\"W, Curious Indigo",
    "brand": "Stone & Beam",
    "category": "Beds",
    "description": "Amazon Brand – Stone & Beam Prudence Tufted King Bed, 84\"W, Curious Indigo. Curious Indigo stone beds from the Amazon Berkeley Objects catalog.",
    "price": 1240,
    "color": "Curious Indigo",
    "material": "stone",
    "style": "beds",
    "dimensions": "92 inches W × 84 inches D × 56 inches H",
    "image": "https://m.media-amazon.com/images/I/91WdMgozzbL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/91WdMgozzbL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1I9WflVU2L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91dzujuC20L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bed",
      "beds",
      "curious indigo",
      "stone",
      "stone & beam"
    ],
    "rating": 4.8,
    "reviews": 68,
    "arStatus": "unavailable"
  },
  {
    "id": "B07HSMYNYF",
    "title": "Stone & Beam Rylee Modern Coffee Table 19.69\"H, Mixed Gray",
    "brand": "Stone & Beam",
    "category": "Tables",
    "description": "Stone & Beam Rylee Modern Coffee Table 19.69\"H, Mixed Gray. Not specified not specified tables from the Amazon Berkeley Objects catalog.",
    "price": 580,
    "color": "Not specified",
    "material": "Not specified",
    "style": "Coffee Table",
    "dimensions": "18.47 inches W × 18.47 inches D × 23.59 inches H",
    "image": "https://m.media-amazon.com/images/I/81Pzw26WchL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81Pzw26WchL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91HksHsWv6L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81NExEJc93L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "coffee table",
      "not specified",
      "stone & beam",
      "table",
      "tables"
    ],
    "rating": 4.7,
    "reviews": 111,
    "arStatus": "unavailable"
  },
  {
    "id": "B07M6PKCQQ",
    "title": "Amazon Brand – Ravenna Home Classic Solid Pine Storage Bench, 45\"W, White Wash Finish",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Amazon Brand – Ravenna Home Classic Solid Pine Storage Bench, 45\"W, White Wash Finish. White pine sofas from the Amazon Berkeley Objects catalog.",
    "price": 1360,
    "color": "White",
    "material": "Pine",
    "style": "Everyday",
    "dimensions": "15.75 inches W × 46.46 inches D × 19.69 inches H",
    "image": "https://m.media-amazon.com/images/I/51BrIIm8edL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/51BrIIm8edL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91zlM0-uvBL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51Yi2xqRY4L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "bench",
      "everyday",
      "pine",
      "ravenna home",
      "sofas",
      "white"
    ],
    "rating": 4.6,
    "reviews": 154,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QGWQM5D",
    "title": "Rivet Mid-Century Luxe Velvet Dining Chair, 34.1\"H, Set of 2, Dark Green",
    "brand": "Rivet",
    "category": "Chairs",
    "description": "Rivet Mid-Century Luxe Velvet Dining Chair, 34.1\"H, Set of 2, Dark Green. Dark Green not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 320,
    "color": "Dark Green",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "34.1 inches W × 19.5 inches D × 23.4 inches H",
    "image": "https://m.media-amazon.com/images/I/71eKeT5QZfL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71eKeT5QZfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71n3Lr-iduL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91cJzEk+abL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "dark green",
      "everyday",
      "not specified",
      "rivet"
    ],
    "rating": 4.5,
    "reviews": 197,
    "arStatus": "unavailable"
  },
  {
    "id": "B07B4MSYPS",
    "title": "Amazon Brand – Stone & Beam Andover Modern Right L-Sectional Sofa, 124\"W, Tan",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Andover Modern Right L-Sectional Sofa, 124\"W, Tan. Tan stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 1370,
    "color": "Tan",
    "material": "stone",
    "style": "Everyday",
    "dimensions": "31 inches W × 88 inches D × 41 inches H",
    "image": "https://m.media-amazon.com/images/I/81DtqF96WfL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81DtqF96WfL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/814AwmQXNNL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91cuZmtZ-zL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "sofa",
      "sofas",
      "stone",
      "stone & beam",
      "tan"
    ],
    "rating": 4.4,
    "reviews": 240,
    "arStatus": "unavailable"
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
    "id": "B00GBUN94W",
    "title": "Strathwood Griffen All-Weather Garden Furniture - Wicker / Poly Rattan Folding Tray Table, Natural",
    "brand": "Strathwood",
    "category": "Tables",
    "description": "Strathwood Griffen All-Weather Garden Furniture - Wicker / Poly Rattan Folding Tray Table, Natural. Natural not specified tables from the Amazon Berkeley Objects catalog.",
    "price": 370,
    "color": "Natural",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "23.622 inches W × 23.622 inches D × 27.9527 inches H",
    "image": "https://m.media-amazon.com/images/I/81eFo4woodL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81eFo4woodL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91amGqm87aL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "natural",
      "not specified",
      "strathwood",
      "table",
      "tables"
    ],
    "rating": 4.2,
    "reviews": 326,
    "arStatus": "unavailable"
  },
  {
    "id": "B07DBDX5VT",
    "title": "Amazon Brand – Ravenna Home Amber Rustic Farmhouse Shelf Coffee Table, 44\"W, Natural and White",
    "brand": "Ravenna Home",
    "category": "Tables",
    "description": "Amazon Brand – Ravenna Home Amber Rustic Farmhouse Shelf Coffee Table, 44\"W, Natural and White. Rustic White pine tables from the Amazon Berkeley Objects catalog.",
    "price": 120,
    "color": "Rustic White",
    "material": "Pine",
    "style": "Modern farm_House",
    "dimensions": "44 inches W × 22 inches D × 18 inches H",
    "image": "https://m.media-amazon.com/images/I/71BBree9KZL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71BBree9KZL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/717Cr0jP+oL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91+JctJ2txL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "modern farm_house",
      "pine",
      "ravenna home",
      "rustic white",
      "table",
      "tables"
    ],
    "rating": 4.1,
    "reviews": 369,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QFB1L2P",
    "title": "Amazon Brand – Stone & Beam Sumner Modern Filing Cabinet, 21.5\"W, White",
    "brand": "Stone & Beam",
    "category": "Storage",
    "description": "Amazon Brand – Stone & Beam Sumner Modern Filing Cabinet, 21.5\"W, White. White pine storage from the Amazon Berkeley Objects catalog.",
    "price": 850,
    "color": "White",
    "material": "Pine",
    "style": "File Cabinet",
    "dimensions": "20 inches W × 21.5 inches D × 30.5 inches H",
    "image": "https://m.media-amazon.com/images/I/71jRYEH0M-L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71jRYEH0M-L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71fJl0SlBML._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/21FirdaOctL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cabinet",
      "file cabinet",
      "pine",
      "stone & beam",
      "storage",
      "white"
    ],
    "rating": 4.9,
    "reviews": 22,
    "arStatus": "unavailable"
  },
  {
    "id": "B07PBZ9CLJ",
    "title": "Amazon Brand – Rivet Sloane Mid-Century Modern Armchair with Tapered Legs, 32.7\"W, Yellow",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Sloane Mid-Century Modern Armchair with Tapered Legs, 32.7\"W, Yellow. Yellow wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 880,
    "color": "Yellow",
    "material": "Wood",
    "style": "Mid-Century modern",
    "dimensions": "35.8 inches W × 32.7 inches D × 33.1 inches H",
    "image": "https://m.media-amazon.com/images/I/915RXmyNwML._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/915RXmyNwML._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91UaJV5fVNL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91n0b5JbP8L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "mid-century modern",
      "ottoman",
      "rivet",
      "sofas",
      "wood",
      "yellow"
    ],
    "rating": 4.8,
    "reviews": 65,
    "arStatus": "unavailable"
  },
  {
    "id": "B07K7LZVPT",
    "title": "Alcove - Hayes Helena - Set van 2 massief houten fauteuils met gestoffeerde zitting, gelakt beuken",
    "brand": "Alkove",
    "category": "Chairs",
    "description": "Alcove - Hayes Helena - Set van 2 massief houten fauteuils met gestoffeerde zitting, gelakt beuken. Natuurlijk buche chairs from the Amazon Berkeley Objects catalog.",
    "price": 230,
    "color": "Natuurlijk",
    "material": "Buche",
    "style": "Y",
    "dimensions": "47.4 centimeters W × 46 centimeters D × 102.7 centimeters H",
    "image": "https://m.media-amazon.com/images/I/51nDXbP4EcL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/51nDXbP4EcL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81DERuFRIFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71NVA0r6U7L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "alkove",
      "buche",
      "chair",
      "chairs",
      "natuurlijk",
      "y"
    ],
    "rating": 4.7,
    "reviews": 108,
    "arStatus": "unavailable"
  },
  {
    "id": "B07M7NRPZR",
    "title": "Amazon Brand – Ravenna Home Chic Vegan Leather Storage Ottoman, 50\"W, Black",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Amazon Brand – Ravenna Home Chic Vegan Leather Storage Ottoman, 50\"W, Black. Black not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 1470,
    "color": "Black",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "50.4 inches W × 20.3 inches D × 22 inches H",
    "image": "https://m.media-amazon.com/images/I/71iAwmD05PL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71iAwmD05PL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91+NLlxGiUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1IVmSYC+RL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "black",
      "everyday",
      "not specified",
      "ottoman",
      "ravenna home",
      "sofas"
    ],
    "rating": 4.6,
    "reviews": 151,
    "arStatus": "unavailable"
  },
  {
    "id": "B07K29PDYS",
    "title": "Forest Swatch, Rivet",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Forest Swatch, Rivet. Forest not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 910,
    "color": "Forest",
    "material": "Not specified",
    "style": "Velvet",
    "dimensions": "Dimensions not listed",
    "image": "https://m.media-amazon.com/images/I/A1KMUUxQnIL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1KMUUxQnIL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "forest",
      "not specified",
      "rivet",
      "sofa",
      "sofas",
      "velvet"
    ],
    "rating": 4.5,
    "reviews": 194,
    "arStatus": "unavailable"
  },
  {
    "id": "B07DBDZ3WW",
    "title": "Amazon Brand – Ravenna Home Contemporary Faux Leather Nailhead Wingback Accent Chair, 28.5\"W, Black",
    "brand": "Ravenna Home",
    "category": "Chairs",
    "description": "Amazon Brand – Ravenna Home Contemporary Faux Leather Nailhead Wingback Accent Chair, 28.5\"W, Black. Black faux leather chairs from the Amazon Berkeley Objects catalog.",
    "price": 260,
    "color": "Black",
    "material": "Faux Leather",
    "style": "Everyday",
    "dimensions": "28.5 inches W × 32 inches D × 45.2 inches H",
    "image": "https://m.media-amazon.com/images/I/31hiDBPYwuL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/31hiDBPYwuL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71omrMZhFeL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71iLuqKHRhL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "black",
      "chair",
      "chairs",
      "everyday",
      "faux leather",
      "ravenna home"
    ],
    "rating": 4.4,
    "reviews": 237,
    "arStatus": "unavailable"
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
    "id": "B07GFS1R7X",
    "title": "Amazon Brand - Movian Inari 3-door Shoe Cabinet/Cupboard/Organizer, 25 x 75 x 128 cm, Light Brown Oak-Effect",
    "brand": "Movian",
    "category": "Storage",
    "description": "Amazon Brand - Movian Inari 3-door Shoe Cabinet/Cupboard/Organizer, 25 x 75 x 128 cm, Light Brown Oak-Effect. Oak wood storage from the Amazon Berkeley Objects catalog.",
    "price": 820,
    "color": "Oak",
    "material": "Wood",
    "style": "Shoe Cabinet",
    "dimensions": "75 centimeters W × 25 centimeters D × 128 centimeters H",
    "image": "https://m.media-amazon.com/images/I/81KzRRKccWL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81KzRRKccWL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61boNfOMr9L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61VaDcoF3WL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cabinet",
      "movian",
      "oak",
      "shoe cabinet",
      "storage",
      "wood"
    ],
    "rating": 4.2,
    "reviews": 323,
    "arStatus": "unavailable"
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
    "id": "B01KTVT57I",
    "title": "AmazonBasics Extra Comfort 7-Zone Mattress with Memory Foam Layer, Medium (H3) - King",
    "brand": "AmazonBasics",
    "category": "Storage",
    "description": "AmazonBasics Extra Comfort 7-Zone Mattress with Memory Foam Layer, Medium (H3) - King. White memory foam storage from the Amazon Berkeley Objects catalog.",
    "price": 930,
    "color": "White",
    "material": "Memory Foam",
    "style": "Everyday",
    "dimensions": "78.74 inches W × 59.06 inches D × 7.87 inches H",
    "image": "https://m.media-amazon.com/images/I/71r8vpGDNYL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71r8vpGDNYL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/819R2Mn9MyL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71BNJGBzXSL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "everyday",
      "furniture",
      "memory foam",
      "storage",
      "white"
    ],
    "rating": 4.9,
    "reviews": 19,
    "arStatus": "unavailable"
  },
  {
    "id": "B00GBVDLMQ",
    "title": "Strathwood Whidbey Cast-Aluminum Dining Arm Chair, Set of 2",
    "brand": "Strathwood by Amazon.com",
    "category": "Chairs",
    "description": "Strathwood Whidbey Cast-Aluminum Dining Arm Chair, Set of 2. Not specified aluminum chairs from the Amazon Berkeley Objects catalog.",
    "price": 270,
    "color": "Not specified",
    "material": "Aluminum",
    "style": "Everyday",
    "dimensions": "25.19 inches W × 25.98 inches D × 36.22 inches H",
    "image": "https://m.media-amazon.com/images/I/816pHl2pXRL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/816pHl2pXRL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81KJVzQ-vkL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81M8CZfpBSL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "aluminum",
      "chair",
      "chairs",
      "everyday",
      "not specified",
      "strathwood by amazon.com"
    ],
    "rating": 4.8,
    "reviews": 62,
    "arStatus": "unavailable"
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
    "id": "B07BWLJRCD",
    "title": "Amazon Brand – Stone & Beam Dalton Sofa Couch with Chaise, Sand",
    "brand": "Stone & Beam",
    "category": "Sofas",
    "description": "Amazon Brand – Stone & Beam Dalton Sofa Couch with Chaise, Sand. Sand stone sofas from the Amazon Berkeley Objects catalog.",
    "price": 1320,
    "color": "Sand",
    "material": "stone",
    "style": "Transitional",
    "dimensions": "41 inches W × 90 inches D × 30 inches H",
    "image": "https://m.media-amazon.com/images/I/81JzGgIplVL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81JzGgIplVL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91K2taJtWHL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81dqBGAVlSL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "sand",
      "sofa",
      "sofas",
      "stone",
      "stone & beam",
      "transitional"
    ],
    "rating": 4.6,
    "reviews": 148,
    "arStatus": "unavailable"
  },
  {
    "id": "B073G7DN31",
    "title": "PB5605VLVBR",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "PB5605VLVBR. Merlot Velvet not specified chairs from the Amazon Berkeley Objects catalog.",
    "price": 90,
    "color": "Merlot Velvet",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "29 inches W × 29 inches D × 34 inches H",
    "image": "https://m.media-amazon.com/images/I/61kVdTXTJ4L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61kVdTXTJ4L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "everyday",
      "merlot velvet",
      "not specified",
      "stone & beam"
    ],
    "rating": 4.5,
    "reviews": 191,
    "arStatus": "unavailable"
  },
  {
    "id": "B075X4YDJT",
    "title": "Amazon Brand – Rivet Modern Upholstered Cube Ottoman Pouf, 20\"W, Gold Leaf",
    "brand": "Rivet",
    "category": "Sofas",
    "description": "Amazon Brand – Rivet Modern Upholstered Cube Ottoman Pouf, 20\"W, Gold Leaf. Gold Leaf not specified sofas from the Amazon Berkeley Objects catalog.",
    "price": 1340,
    "color": "Gold Leaf",
    "material": "Not specified",
    "style": "Everyday",
    "dimensions": "20 inches W × 20 inches D × 17 inches H",
    "image": "https://m.media-amazon.com/images/I/A1AV8kc3XSL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/A1AV8kc3XSL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A16G6znCbtL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A14xcKy0snL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "everyday",
      "gold leaf",
      "not specified",
      "ottoman",
      "rivet",
      "sofas"
    ],
    "rating": 4.4,
    "reviews": 234,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QL9RTFQ",
    "title": "AmazonBasics Low-Back Task Chair with Swivel Casters - Black (Renewed)",
    "brand": "AmazonBasics",
    "category": "Chairs",
    "description": "AmazonBasics Low-Back Task Chair with Swivel Casters - Black (Renewed). Black textile chairs from the Amazon Berkeley Objects catalog.",
    "price": 360,
    "color": "Black",
    "material": "Textile",
    "style": "Low-Back Task Chair",
    "dimensions": "19.25 inches W × 24 inches D × 38.25 inches H",
    "image": "https://m.media-amazon.com/images/I/71ruCaorN+L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/71ruCaorN+L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81SxR72rgUL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81BfzSh151L._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "amazonbasics",
      "black",
      "chair",
      "chairs",
      "low-back task chair",
      "textile"
    ],
    "rating": 4.3,
    "reviews": 277,
    "arStatus": "unavailable"
  },
  {
    "id": "B085FH4N3Y",
    "title": "Amazon Brand – Ravenna Home Classic Swivel Recliner with Storage Ottoman, 35\"W, Cream",
    "brand": "Ravenna Home",
    "category": "Sofas",
    "description": "Amazon Brand – Ravenna Home Classic Swivel Recliner with Storage Ottoman, 35\"W, Cream. Cream wood sofas from the Amazon Berkeley Objects catalog.",
    "price": 800,
    "color": "Cream",
    "material": "Wood",
    "style": "Transitional",
    "dimensions": "34.65 inches W × 35.04 inches D × 37.8 inches H",
    "image": "https://m.media-amazon.com/images/I/81VUico3KzL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/81VUico3KzL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91BEOLELpvL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91gTg7SLQzL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "cream",
      "ottoman",
      "ravenna home",
      "sofas",
      "transitional",
      "wood"
    ],
    "rating": 4.2,
    "reviews": 320,
    "arStatus": "unavailable"
  },
  {
    "id": "B07HZ7PG4D",
    "title": "Amazon Brand – Stone & Beam Bagley Sectional Component, Left-Facing Loveseat, Fabric, 52\"W, Dove",
    "brand": "Stone & Beam",
    "category": "Chairs",
    "description": "Amazon Brand – Stone & Beam Bagley Sectional Component, Left-Facing Loveseat, Fabric, 52\"W, Dove. Dove polyester chairs from the Amazon Berkeley Objects catalog.",
    "price": 350,
    "color": "Dove",
    "material": "Polyester",
    "style": "Left Facing Loveseat",
    "dimensions": "36 inches W × 42 inches D × 54 inches H",
    "image": "https://m.media-amazon.com/images/I/61vY9vC-MBL._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61vY9vC-MBL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91aWevuPe-L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/A1LVE1Sy7IL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "chair",
      "chairs",
      "dove",
      "left facing loveseat",
      "polyester",
      "stone & beam"
    ],
    "rating": 4.1,
    "reviews": 363,
    "arStatus": "unavailable"
  },
  {
    "id": "B07QTK9CXH",
    "title": "Movian Turia - Mesa de centro,110 x 70 x 73 cm (largo x ancho x alto), blanco y efecto hormigón",
    "brand": "Movian",
    "category": "Tables",
    "description": "Movian Turia - Mesa de centro,110 x 70 x 73 cm (largo x ancho x alto), blanco y efecto hormigón. Blanco Y Efecto Hormigón madera tables from the Amazon Berkeley Objects catalog.",
    "price": 160,
    "color": "Blanco Y Efecto Hormigón",
    "material": "Madera",
    "style": "Mesa de centro",
    "dimensions": "110 centimeters W × 70 centimeters D × 73 centimeters H",
    "image": "https://m.media-amazon.com/images/I/61F6hzu8o0L._SL1000_.jpg",
    "gallery": [
      "https://m.media-amazon.com/images/I/61F6hzu8o0L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/612Rm27NnhL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71Sus4sEeTL._SL1000_.jpg"
    ],
    "source": "Amazon Berkeley Objects",
    "datasetVersion": "abo-furniture-fixture-v0.2-120",
    "tags": [
      "blanco y efecto hormigón",
      "madera",
      "mesa de centro",
      "movian",
      "table",
      "tables"
    ],
    "rating": 4.9,
    "reviews": 16,
    "arStatus": "unavailable"
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
