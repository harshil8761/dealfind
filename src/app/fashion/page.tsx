import React from 'react';
import { productProvider } from '@/lib/providers';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Shirt } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Fashion & Clothing Deals — Chinos, Jeans & Shirts | DealFind',
  description:
    'Discover top-rated Men’s cotton chinos, dark blue denim jeans, athletic track pants, and printed T-shirts. Compare prices across Myntra, Flipkart & Amazon.',
};

export default async function FashionPage() {
  const products = await productProvider.getProductsByCategory('fashion');

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs items={[{ label: 'Fashion & Apparel' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200">
          <Shirt className="w-3.5 h-3.5" /> Apparel, Jeans & Style Essentials
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Fashion & Clothing Deals
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          High quality slim fit chinos, stretch jeans, printed tees, linen shirts, and cargo pants under budget.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            {products.length} Fashion Items Found
          </h2>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
