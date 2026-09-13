import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ShieldCheck, Info } from 'lucide-react';

export default function AffiliateDisclosurePage() {
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto text-xs text-gray-700">
      <Breadcrumbs items={[{ label: 'Affiliate Disclosure' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-900">Affiliate Disclosure Statement</h1>
        </div>

        <p className="text-gray-500">Last updated: September 2026</p>

        <section className="space-y-3 leading-relaxed">
          <p>
            At <strong>DealFind</strong>, transparency is a core priority. We believe in being upfront about how our product discovery and price comparison platform is funded.
          </p>

          <div className="p-4 rounded-lg bg-indigo-50/70 border border-indigo-100 space-y-2 text-indigo-950">
            <h2 className="font-bold text-sm flex items-center gap-1.5">
              <Info className="w-4 h-4 text-indigo-600" /> How DealFind Earns Revenue
            </h2>
            <p>
              Some links on DealFind are affiliate referral links. If you click through a link to an external seller or marketplace (such as Amazon, Flipkart, Myntra, etc.) and complete a purchase, DealFind may earn a small referral commission at <strong>no additional cost to you</strong>.
            </p>
          </div>
        </section>

        <section className="space-y-2 leading-relaxed">
          <h2 className="text-sm font-bold text-gray-900">1. No Impact on Price</h2>
          <p>
            The price you pay on the external seller website remains identical whether you use our referral link or navigate directly to the store. Affiliate commissions do not increase your purchase price.
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <h2 className="text-sm font-bold text-gray-900">2. Objective & Unbiased Recommendations</h2>
          <p>
            Affiliate partnerships do not influence our product score rankings or sorting algorithms. Product badges like <em>Best Value</em>, <em>Lowest Price</em>, and <em>Bestseller</em> are calculated objectively based on customer ratings, review volume, and discount percentages.
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <h2 className="text-sm font-bold text-gray-900">3. Contact & Questions</h2>
          <p>
            If you have any questions regarding our affiliate policy or partnerships, please feel free to reach out to us at <a href="mailto:affiliates@dealfind.in" className="text-indigo-600 underline">affiliates@dealfind.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
