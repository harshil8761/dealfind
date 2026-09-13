import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Sparkles, ShieldCheck, Target, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: 'About DealFind' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> About DealFind
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Helping shoppers discover the right products at the right budget.
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            DealFind is a smart product discovery and price comparison engine. We remove the frustration of searching across dozens of tabs by organizing products by budget, genuine rating metrics, and marketplace availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
          <div className="p-5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-2">
            <Target className="w-6 h-6 text-indigo-600" />
            <h3 className="text-base font-bold text-gray-900">Our Core Vision</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We do not sell products directly or maintain inventory. Our sole focus is empowering everyday online shoppers in India to quickly discover maximum value options for their specified budget.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-2">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            <h3 className="text-base font-bold text-gray-900">Transparency First</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              DealFind operates via affiliate partnerships with major online marketplaces like Amazon and Flipkart. When you click "View Deal", you are redirected to the official seller store without paying any additional fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
