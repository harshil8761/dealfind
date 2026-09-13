import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto text-xs text-gray-700">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500">Last updated: September 2026</p>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">1. Information We Collect</h2>
          <p className="leading-relaxed">
            DealFind does not require mandatory account registration or personal authentication to search or compare products. We utilize local browser storage (`localStorage`) solely to store your saved products, recent searches, and recent product views locally on your own device.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">2. External Affiliate Links</h2>
          <p className="leading-relaxed">
            When you click "View Deal", you are redirected to third-party marketplaces (e.g. Amazon, Flipkart). Those external websites have their own independent privacy policies and tracking cookies. We encourage you to review their terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">3. Contact Us</h2>
          <p className="leading-relaxed">
            For privacy inquiries, please contact us at privacy@dealfind.in.
          </p>
        </section>
      </div>
    </div>
  );
}
