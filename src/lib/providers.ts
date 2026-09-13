import { Product, FilterState } from '@/types/product';
import { MOCK_PRODUCTS } from '@/data/products';
import { filterProducts, searchProducts } from './search';

export interface ProductProvider {
  name: string;
  searchProducts(query: string, filters?: FilterState): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductById(id: string): Promise<Product | null>;
  getPopularProducts(limit?: number): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
}

export class MockProductProvider implements ProductProvider {
  name = 'MockDataProvider';

  async searchProducts(query: string, filters?: FilterState): Promise<Product[]> {
    let results = searchProducts(MOCK_PRODUCTS, query);
    if (filters) {
      results = filterProducts(results, filters);
    }
    return results;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
    return product || null;
  }

  async getProductById(id: string): Promise<Product | null> {
    const product = MOCK_PRODUCTS.find((p) => p.id === id);
    return product || null;
  }

  async getPopularProducts(limit: number = 8): Promise<Product[]> {
    return [...MOCK_PRODUCTS]
      .sort((a, b) => b.popularityScore - a.popularityScore)
      .slice(0, limit);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return MOCK_PRODUCTS.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
}

// Global active provider instance
export const productProvider = new MockProductProvider();
