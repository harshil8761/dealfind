export type Marketplace = 'Amazon' | 'Flipkart' | 'Myntra' | 'Ajio' | 'Tata CLiQ';

export type ProductBadgeType = 
  | 'Best Value'
  | 'Bestseller'
  | 'Lowest Price'
  | 'Best Rated'
  | 'Trending'
  | 'Popular Choice';

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  marketplace: Marketplace;
  availability: 'In Stock' | 'Out of Stock' | 'Limited Stock';
  discount: number;
  tags: string[];
  features: string[];
  popularityScore: number;
  affiliateUrl: string;
  badge?: ProductBadgeType;
  marketplacePrices?: {
    marketplace: Marketplace;
    price: number;
    url: string;
    inStock: boolean;
  }[];
};

export type FilterState = {
  query: string;
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number | null;
  marketplaces: Marketplace[];
  minDiscount: number | null;
  inStockOnly: boolean;
};

export type SortOption = 
  | 'recommended'
  | 'best-value'
  | 'price-asc'
  | 'rating-desc'
  | 'reviews-desc'
  | 'discount-desc';

export type SearchQuery = {
  keyword: string;
  maxPrice?: number;
  category?: string;
};
