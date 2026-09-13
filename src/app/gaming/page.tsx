import React from 'react';
import { productProvider } from '@/lib/providers';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Gamepad2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Gaming Gear Deals — Mice, Keyboards & Headsets | DealFind',
  description:
    'Discover top-rated 7200 DPI RGB gaming mice, TKL mechanical-feel keyboards, over-ear RGB headsets, and mouse pads under budget.',
};

export default async function GamingPage() {
  const products = await productProvider.getProductsByCategory('gaming');

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs items={[{ label: 'Gaming Gear' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
          <Gamepad2 className="w-3.5 h-3.5" /> PC & Esports Accessories
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Gaming Gear & Accessories Deals
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          High precision gaming mice, tactile back-lit keyboards, bass gaming headsets, and desk mats under budget.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            {products.length} Gaming Items Found
          </h2>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
