import React from 'react';
import { productProvider } from '@/lib/providers';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Sparkles, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Products Under ₹500 — Live Price Comparison & Deals | DealFind',
  description:
    'Discover top-rated Men’s pants, track pants, leather wallets, sunglasses, and mobile stands under ₹500. Compare live prices across Amazon, Flipkart & Myntra.',
};

export default async function BestUnder500Page() {
  const products = await productProvider.searchProducts('', {
    query: '',
    category: 'all',
    minPrice: null,
    maxPrice: 500,
    minRating: null,
    marketplaces: [],
    minDiscount: null,
    inStockOnly: false,
  });

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs items={[{ label: 'Best Products Under ₹500' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" /> Budget Friendly Deals (Under ₹500)
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Best Value Products & Deals Under ₹500
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          High-rated daily essentials, cotton chinos, track pants, RFID wallets, and mobile accessories carefully filtered for maximum savings under ₹500.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Showing {products.length} Products Under ₹500
          </h2>
          <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Ratings
          </span>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
