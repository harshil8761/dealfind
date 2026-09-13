import { Product, SearchQuery, FilterState } from '@/types/product';
import { CATEGORIES } from '@/constants';

/**
 * Natural language query parser
 * Example: "Pants under 500" => { keyword: "Pants", maxPrice: 500 }
 * Example: "headphones under 1000" => { keyword: "headphones", maxPrice: 1000 }
 * Example: "best gaming mouse" => { keyword: "gaming mouse" }
 */
export function parseSearchQuery(input: string): SearchQuery {
  const cleanInput = input.trim().toLowerCase();
  
  // Match "under [number]" or "under rs [number]" or "under ₹[number]" or "< [number]"
  const underPriceRegex = /(?:under|below|less than|\<)\s*(?:rs\.?|₹)?\s*(\d+)/i;
  const match = cleanInput.match(underPriceRegex);

  let maxPrice: number | undefined = undefined;
  let keyword = cleanInput;

  if (match) {
    maxPrice = parseInt(match[1], 10);
    // Remove the price matching part from keyword string
    keyword = cleanInput.replace(match[0], '').trim();
  }

  // Remove common filler words
  keyword = keyword
    .replace(/\b(best|cheap|top|good|affordable|for|in|rupees|rs|inr)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  // If keyword ended up empty (e.g. user typed "under 500"), keep original input without price part
  if (!keyword && input) {
    keyword = input.replace(underPriceRegex, '').trim();
  }

  // Check if keyword matches a known category
  let matchedCategory: string | undefined = undefined;
  const foundCategory = CATEGORIES.find(
    (c) => c.name.toLowerCase() === keyword || c.slug === keyword
  );
  if (foundCategory) {
    matchedCategory = foundCategory.slug;
  }

  return {
    keyword: keyword || input.trim(),
    maxPrice,
    category: matchedCategory,
  };
}

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query || query.trim() === '') return products;

  const parsed = parseSearchQuery(query);
  const searchTerm = parsed.keyword.toLowerCase();

  return products.filter((product) => {
    // If maximum price constraint was found in query
    if (parsed.maxPrice !== undefined && product.price > parsed.maxPrice) {
      return false;
    }

    // Match title, category, tags, or description
    const titleMatch = product.title.toLowerCase().includes(searchTerm);
    const categoryMatch = product.category.toLowerCase().includes(searchTerm);
    const tagMatch = product.tags.some((tag) => tag.toLowerCase().includes(searchTerm));
    const descMatch = product.description.toLowerCase().includes(searchTerm);

    // Partial term match fallback
    const terms = searchTerm.split(' ').filter((t) => t.length > 2);
    const wordMatches = terms.some(
      (term) =>
        product.title.toLowerCase().includes(term) ||
        product.tags.some((tag) => tag.toLowerCase().includes(term))
    );

    return titleMatch || categoryMatch || tagMatch || descMatch || wordMatches;
  });
}

export function filterProducts(products: Product[], filters: FilterState): Product[] {
  return products.filter((product) => {
    // Search query keyword matching
    if (filters.query.trim()) {
      const parsed = parseSearchQuery(filters.query);
      const searchTerm = parsed.keyword.toLowerCase();
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
        searchTerm.split(' ').some((term) => term.length > 2 && product.title.toLowerCase().includes(term));
      
      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (product.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
    }

    // Min Price filter
    if (filters.minPrice !== null && product.price < filters.minPrice) {
      return false;
    }

    // Max Price filter
    if (filters.maxPrice !== null && product.price > filters.maxPrice) {
      return false;
    }

    // Rating filter
    if (filters.minRating !== null && product.rating < filters.minRating) {
      return false;
    }

    // Marketplace filter
    if (filters.marketplaces.length > 0) {
      if (!filters.marketplaces.includes(product.marketplace)) {
        return false;
      }
    }

    // Discount filter
    if (filters.minDiscount !== null && product.discount < filters.minDiscount) {
      return false;
    }

    // In Stock filter
    if (filters.inStockOnly && product.availability !== 'In Stock') {
      return false;
    }

    return true;
  });
}
