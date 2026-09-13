import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function TermsPage() {
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto text-xs text-gray-700">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Terms of Service</h1>
        <p className="text-gray-500">Last updated: September 2026</p>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">1. Platform Nature</h2>
          <p className="leading-relaxed">
            DealFind is an information aggregator and product discovery platform. DealFind is not a seller, merchant, or marketplace vendor. We do not process payments, ship items, or manage product inventory.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">2. Accuracy of Listings</h2>
          <p className="leading-relaxed">
            Prices, discounts, ratings, and stock statuses displayed on DealFind are sourced from mock datasets or partner feeds and are updated frequently. However, final checkout prices on external seller platforms govern all purchases.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">3. Affiliate Disclosure</h2>
          <p className="leading-relaxed">
            DealFind participates in affiliate referral programs. We may earn a commission when you click external marketplace links and complete purchases.
          </p>
        </section>
      </div>
    </div>
  );
}
