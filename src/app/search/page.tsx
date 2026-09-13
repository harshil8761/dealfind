'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FilterState, SortOption, Product } from '@/types/product';
import { filterProducts, searchProducts, parseSearchQuery } from '@/lib/search';
import { sortProducts } from '@/lib/ranking';
import { MOCK_PRODUCTS } from '@/data/products';
import { ProductGrid } from '@/components/products/ProductGrid';
import { FilterSidebar } from '@/components/filters/FilterSidebar';
import { FilterDrawer } from '@/components/filters/FilterDrawer';
import { SortDropdown } from '@/components/filters/SortDropdown';
import { SearchBar } from '@/components/search/SearchBar';
import { EmptyState } from '@/components/ui/EmptyState';
import { CompareDrawer } from '@/components/comparison/CompareDrawer';
import { Filter, SlidersHorizontal } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get('q') || '';
  const rawCategory = searchParams.get('category') || 'all';
  const rawSort = (searchParams.get('sort') as SortOption) || 'recommended';

  // Parse natural language (e.g. "pants under 500")
  const parsed = useMemo(() => parseSearchQuery(rawQuery), [rawQuery]);

  const [filters, setFilters] = useState<FilterState>({
    query: rawQuery,
    category: rawCategory,
    minPrice: null,
    maxPrice: parsed.maxPrice !== undefined ? parsed.maxPrice : null,
    minRating: null,
    marketplaces: [],
    minDiscount: null,
    inStockOnly: false,
  });

  const [sortOption, setSortOption] = useState<SortOption>(rawSort);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [comparingProducts, setComparingProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      query: rawQuery,
      category: rawCategory,
      maxPrice: parsed.maxPrice !== undefined ? parsed.maxPrice : prev.maxPrice,
    }));
  }, [rawQuery, rawCategory, parsed.maxPrice]);

  const handleResetFilters = () => {
    setFilters({
      query: '',
      category: 'all',
      minPrice: null,
      maxPrice: null,
      minRating: null,
      marketplaces: [],
      minDiscount: null,
      inStockOnly: false,
    });
  };

  // Filter & Sort Pipeline
  const filteredProducts = useMemo(() => {
    const matched = filterProducts(MOCK_PRODUCTS, filters);
    return sortProducts(matched, sortOption);
  }, [filters, sortOption]);

  const handleCompareToggle = (product: Product) => {
    setComparingProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 products at a time.');
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {rawQuery
              ? `Search Results for "${rawQuery}"`
              : filters.category && filters.category !== 'all'
              ? `Products in ${filters.category}`
              : 'Discover All Products'}
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Showing <strong className="text-gray-900">{filteredProducts.length}</strong> matching products
            {parsed.maxPrice && ` (under ₹${parsed.maxPrice})`}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5"
          >
            <Filter className="w-3.5 h-3.5 text-indigo-600" />
            <span>Filters</span>
          </button>

          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Desktop Sidebar Filters */}
        <FilterSidebar
          filters={filters}
          onFilterChange={setFilters}
          onReset={handleResetFilters}
          className="hidden lg:block lg:col-span-1 sticky top-20"
        />

        {/* Product Results Grid */}
        <main className="lg:col-span-3 space-y-4">
          {filteredProducts.length > 0 ? (
            <ProductGrid
              products={filteredProducts}
              onCompareToggle={handleCompareToggle}
              comparingIds={comparingProducts.map((p) => p.id)}
            />
          ) : (
            <EmptyState query={rawQuery} onResetFilters={handleResetFilters} />
          )}
        </main>
      </div>

      {/* Mobile Drawer Filter */}
      <FilterDrawer
        isOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleResetFilters}
        resultCount={filteredProducts.length}
      />

      {/* Sticky Bottom Compare Drawer */}
      <CompareDrawer
        comparingProducts={comparingProducts}
        onRemove={(id) => setComparingProducts((prev) => prev.filter((p) => p.id !== id))}
        onClear={() => setComparingProducts([])}
      />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading deals...</div>}>
      <SearchContent />
    </Suspense>
  );
}
