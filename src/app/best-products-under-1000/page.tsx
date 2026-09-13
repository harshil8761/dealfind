import React from 'react';
import { productProvider } from '@/lib/providers';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Sparkles, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Products Under ₹1000 — Headphones, Keyboards & Backpacks | DealFind',
  description:
    'Discover top-rated wireless headphones, gaming mice, mechanical-feel keyboards, and college backpacks under ₹1000. Compare live prices across Amazon & Flipkart.',
};

export default async function BestUnder1000Page() {
  const products = await productProvider.searchProducts('', {
    query: '',
    category: 'all',
    minPrice: null,
    maxPrice: 1000,
    minRating: null,
    marketplaces: [],
    minDiscount: null,
    inStockOnly: false,
  });

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs items={[{ label: 'Best Products Under ₹1000' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">
          <Sparkles className="w-3.5 h-3.5" /> High Value Tech & Gear (Under ₹1000)
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Best Value Products & Deals Under ₹1000
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          Top rated Bluetooth headphones, TKL gaming keyboards, 30L laptop backpacks, power banks, and beard trimmers under ₹1000.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Showing {products.length} Products Under ₹1000
          </h2>
          <span className="text-xs text-indigo-700 font-semibold bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Top Rated Selections
          </span>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
