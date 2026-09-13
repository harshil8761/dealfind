'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getFavorites } from '@/lib/storage';
import { MOCK_PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Heart, Trash2 } from 'lucide-react';

export default function SavedProductsPage() {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favIds = getFavorites();
    const matches = MOCK_PRODUCTS.filter((p) => favIds.includes(p.id));
    setSavedProducts(matches);
    setLoading(false);
  }, []);

  return (
    <div className="space-y-6 pb-12">
      <Breadcrumbs items={[{ label: 'Saved Products' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            Your Saved Deals
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Products you saved for later comparison and deal tracking
          </p>
        </div>

        <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
          {savedProducts.length} items saved
        </span>
      </div>

      {savedProducts.length > 0 ? (
        <ProductGrid products={savedProducts} loading={loading} />
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-900">No saved products yet</h3>
          <p className="text-xs text-gray-500">
            Click the heart icon on any product card while browsing to bookmark it here.
          </p>
          <Link
            href="/search"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-xs transition-colors"
          >
            Discover Deals
          </Link>
        </div>
      )}
    </div>
  );
}
