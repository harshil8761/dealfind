import { Product } from '@/types/product';

/**
 * Centralized affiliate URL generator.
 * In a production setup, this appends registered affiliate tracking tags (e.g. tag=dealfind-21).
 */
export function getAffiliateUrl(product: Product, overrideMarketplaceUrl?: string): string {
  const baseUrl = overrideMarketplaceUrl || product.affiliateUrl;
  
  if (!baseUrl) return '#';

  try {
    const url = new URL(baseUrl);
    // Add mock tracking parameters for transparency
    url.searchParams.set('utm_source', 'dealfind');
    url.searchParams.set('utm_medium', 'discovery_platform');
    url.searchParams.set('utm_campaign', 'price_comparison');
    return url.toString();
  } catch (e) {
    return baseUrl;
  }
}
