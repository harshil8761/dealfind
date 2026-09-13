import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-gray-900">
                Deal<span className="text-indigo-600">Find</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Discover top-rated products matching your exact budget and compare live prices across trusted online marketplaces.
            </p>
          </div>

          {/* Product & Deals links */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">
              Discover Deals
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/best-products-under-500" className="hover:text-indigo-600 transition-colors">
                  Deals Under ₹500
                </Link>
              </li>
              <li>
                <Link href="/best-products-under-1000" className="hover:text-indigo-600 transition-colors">
                  Deals Under ₹1000
                </Link>
              </li>
              <li>
                <Link href="/search?sort=best-value" className="hover:text-indigo-600 transition-colors">
                  Best Value Finds
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-indigo-600 transition-colors">
                  Saved Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">
              Company & Guides
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-indigo-600 transition-colors font-semibold text-indigo-600">
                  Blog & Buying Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 transition-colors">
                  About DealFind
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">
              Legal & Trust
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-indigo-600 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Affiliate Disclosure */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-gray-600 font-semibold">Affiliate Disclosure:</strong> Some links on DealFind may be affiliate links. We may earn a small commission when you purchase through these links, at no additional cost to you. Product prices and availability are accurate as of the time of listing and are subject to change.
          </p>
          <p>© {new Date().getFullYear()} DealFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
