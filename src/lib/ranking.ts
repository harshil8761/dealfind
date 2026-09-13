import { Product, SortOption, ProductBadgeType } from '@/types/product';

/**
 * Calculates a composite Best Value score for a product based on:
 * - Rating (higher is better)
 * - Review count (higher popularity/trust)
 * - Discount percentage (higher savings)
 * - Price balance
 */
export function calculateBestValueScore(product: Product): number {
  const ratingScore = (product.rating / 5) * 40; // max 40 points
  const reviewScore = Math.min((product.reviewCount / 5000) * 20, 20); // max 20 points
  const discountScore = (product.discount / 100) * 30; // max 30 points
  const popularityBonus = (product.popularityScore / 100) * 10; // max 10 points

  return ratingScore + reviewScore + discountScore + popularityBonus;
}

export function sortProducts(products: Product[], sortMode: SortOption): Product[] {
  const list = [...products];

  switch (sortMode) {
    case 'best-value':
      return list.sort((a, b) => calculateBestValueScore(b) - calculateBestValueScore(a));

    case 'price-asc':
      return list.sort((a, b) => a.price - b.price);

    case 'rating-desc':
      return list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);

    case 'reviews-desc':
      return list.sort((a, b) => b.reviewCount - a.reviewCount);

    case 'discount-desc':
      return list.sort((a, b) => b.discount - a.discount);

    case 'recommended':
    default:
      return list.sort((a, b) => b.popularityScore - a.popularityScore);
  }
}

/**
 * Dynamically computes badge for products if not explicitly assigned
 */
export function getProductBadge(product: Product, allProducts: Product[]): ProductBadgeType | null {
  if (product.badge) return product.badge;

  // Find lowest price in category
  const categoryProducts = allProducts.filter((p) => p.category === product.category);
  const minCategoryPrice = Math.min(...categoryProducts.map((p) => p.price));

  if (product.price === minCategoryPrice) {
    return 'Lowest Price';
  }

  if (product.rating >= 4.4 && product.reviewCount > 3000) {
    return 'Best Rated';
  }

  if (product.discount >= 65) {
    return 'Best Value';
  }

  if (product.popularityScore > 90) {
    return 'Bestseller';
  }

  return null;
}
