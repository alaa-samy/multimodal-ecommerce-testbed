import type { ProviderId } from "./catalog";

export type SearchQuery = {
  query?: string;
  imageUrl?: string;
  audioUrl?: string;
  topK?: number;
  catalogVersion: string;
};

export type SearchHit = {
  productId: string;
  rank: number;
  score: number;
  latencyMs: number;
};

export type SearchResponse = {
  provider: ProviderId;
  queryId: string;
  catalogVersion: string;
  results: SearchHit[];
};

export interface SearchProviderAdapter {
  readonly id: ProviderId;
  search(query: SearchQuery): Promise<SearchResponse>;
  health(): Promise<{ ok: boolean; provider: ProviderId; version: string }>;
}

export const PROVIDER_RESPONSE_RULES = [
  "Every provider returns stable catalog product IDs.",
  "Every provider is evaluated against the same catalog version.",
  "Provider errors are visible and never silently replaced during an experiment.",
  "The storefront owns product details, prices, cart state, and checkout state.",
] as const;
