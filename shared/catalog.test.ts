import { describe, expect, it } from "vitest";
import { CATALOG_META, PRODUCTS, searchProducts } from "./catalog";

describe("ABO catalog fixture", () => {
  it("contains stable dataset metadata and product IDs", () => {
    expect(CATALOG_META.source).toBe("Amazon Berkeley Objects");
    expect(CATALOG_META.license).toBe("CC BY 4.0");
    expect(PRODUCTS.length).toBeGreaterThan(0);
    expect(PRODUCTS.every((product) => product.arStatus === "available" && product.modelUrl)).toBe(true);
    expect(PRODUCTS.every((product) => product.material !== "Not specified" && product.dimensions !== "Dimensions not listed")).toBe(true);
    expect(PRODUCTS.every((product) => /^[A-Z0-9]+$/.test(product.id))).toBe(true);
    expect(new Set(PRODUCTS.map((product) => product.id)).size).toBe(PRODUCTS.length);
  });

  it("filters by category", () => {
    const chairs = searchProducts("", "native", "Chairs");
    expect(chairs.length).toBeGreaterThan(0);
    expect(chairs.every((product) => product.category === "Chairs")).toBe(true);
  });

  it("returns sofa intent matches for the multimodal provider", () => {
    const results = searchProducts("warm textured sofa", "unified_multimodal");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((product) => product.category === "Sofas")).toBe(true);
  });

  it("includes beds and supports color-specific search", () => {
    expect(PRODUCTS.some((product) => product.category === "Beds")).toBe(true);
    const navy = searchProducts("navy", "unified_multimodal");
    expect(navy.length).toBeGreaterThan(0);
    expect(navy.every((product) => product.color.toLowerCase().includes("navy") || product.tags.some((tag) => tag.includes("navy")))).toBe(true);
  });

  it("leaves truly unknown queries empty for the similar-products layer", () => {
    expect(searchProducts("purple spaceship", "unified_multimodal")).toHaveLength(0);
  });
});
