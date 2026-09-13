'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { getAffiliateUrl } from '@/lib/affiliate';
import { X, ArrowRightLeft, ExternalLink, Check, Trash2 } from 'lucide-react';
import { MarketplaceBadge } from '../products/MarketplaceBadge';
import { ProductBadge } from '../products/ProductBadge';

interface CompareDrawerProps {
  comparingProducts: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  comparingProducts,
  onRemove,
  onClear,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (comparingProducts.length === 0) return null;

  return (
    <>
      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-gray-900 text-white rounded-xl px-4 py-3 shadow-xl border border-gray-800 flex items-center gap-4 max-w-xl w-[92%] sm:w-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">
            {comparingProducts.length}
          </div>
          <div>
            <p className="text-xs font-semibold">Comparing Products</p>
            <p className="text-[11px] text-gray-400">Select up to 4 items</p>
          </div>
        </div>

        {/* Thumbnail preview */}
        <div className="hidden sm:flex items-center gap-1.5 border-l border-gray-800 pl-3">
          {comparingProducts.map((p) => (
            <div key={p.id} className="relative w-8 h-8 rounded bg-white overflow-hidden border border-gray-700">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
              <button
                onClick={() => onRemove(p.id)}
                className="absolute -top-1 -right-1 bg-gray-900 text-white rounded-full p-0.5"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Compare Now</span>
          </button>
          <button
            onClick={onClear}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800 text-xs"
            title="Clear all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Comparison Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-indigo-600" />
                Product Comparison ({comparingProducts.length})
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Matrix Content Table */}
            <div className="p-4 overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3 w-40 text-xs font-bold text-gray-500 uppercase bg-gray-50">Feature</th>
                    {comparingProducts.map((p) => (
                      <th key={p.id} className="p-3 w-64 text-center align-top relative">
                        <button
                          onClick={() => onRemove(p.id)}
                          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-rose-600 rounded"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="relative w-28 h-28 mx-auto mb-2 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                          <Image src={p.image} alt={p.title} fill className="object-cover" />
                        </div>
                        <h4 className="text-xs font-semibold text-gray-900 line-clamp-2 mb-1">{p.title}</h4>
                        {p.badge && <ProductBadge badge={p.badge} className="mb-2" />}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  <tr>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50">Price</td>
                    {comparingProducts.map((p) => (
                      <td key={p.id} className="p-3 text-center">
                        <span className="text-base font-bold text-gray-900">{formatPrice(p.price)}</span>
                        <span className="block text-gray-400 line-through">{formatPrice(p.originalPrice)}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50">Rating</td>
                    {comparingProducts.map((p) => (
                      <td key={p.id} className="p-3 text-center font-medium text-amber-700">
                        ⭐ {p.rating} ({p.reviewCount} reviews)
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50">Marketplace</td>
                    {comparingProducts.map((p) => (
                      <td key={p.id} className="p-3 text-center">
                        <MarketplaceBadge marketplace={p.marketplace} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50">Key Features</td>
                    {comparingProducts.map((p) => (
                      <td key={p.id} className="p-3 align-top">
                        <ul className="space-y-1 text-gray-600 text-left">
                          {p.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50">Action</td>
                    {comparingProducts.map((p) => (
                      <td key={p.id} className="p-3 text-center">
                        <a
                          href={getAffiliateUrl(p)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-3 rounded text-xs flex items-center justify-center gap-1 transition-colors"
                        >
                          <span>View Deal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
