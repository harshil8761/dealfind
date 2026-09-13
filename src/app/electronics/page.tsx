import React from 'react';
import { productProvider } from '@/lib/providers';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Headphones, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Electronics Deals & Audio Gear | DealFind',
  description:
    'Discover top-rated Bluetooth headphones, TWS earbuds, wired earphones, power banks, and portable speakers. Compare live prices across Amazon & Flipkart.',
};

export default async function ElectronicsPage() {
  const products = await productProvider.getProductsByCategory('electronics');

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs items={[{ label: 'Electronics Deals' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
          <Headphones className="w-3.5 h-3.5" /> Audio, Power & Smart Electronics
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Electronics & Tech Accessories Deals
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          Compare pricing and features for Boult, boAt, JBL, Mivi, and Mi electronics products matching your budget.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            {products.length} Electronics Items Found
          </h2>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
