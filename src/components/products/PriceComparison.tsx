import React from 'react';
import { Marketplace } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { getAffiliateUrl } from '@/lib/affiliate';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { MarketplaceBadge } from './MarketplaceBadge';

interface PriceComparisonProps {
  marketplacePrices?: {
    marketplace: Marketplace;
    price: number;
    url: string;
    inStock: boolean;
  }[];
  currentPrice: number;
  currentMarketplace: Marketplace;
  affiliateUrl: string;
}

export const PriceComparison: React.FC<PriceComparisonProps> = ({
  marketplacePrices,
  currentPrice,
  currentMarketplace,
  affiliateUrl,
}) => {
  // If no detailed marketplace prices exist, create default list
  const prices = marketplacePrices || [
    { marketplace: currentMarketplace, price: currentPrice, url: affiliateUrl, inStock: true },
  ];

  // Find lowest price
  const lowestPrice = Math.min(...prices.map((p) => p.price));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-between">
        <span>Compare Marketplace Prices</span>
        <span className="text-xs font-normal text-gray-500">Live prices</span>
      </h3>

      <div className="divide-y divide-gray-100">
        {prices.map((item, idx) => {
          const isCheapest = item.price === lowestPrice;

          return (
            <div
              key={idx}
              className={`py-2.5 flex items-center justify-between gap-3 ${
                isCheapest ? 'bg-emerald-50/50 -mx-2 px-2 rounded-md' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <MarketplaceBadge marketplace={item.marketplace} />
                {isCheapest && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Best Price
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-900">
                  {formatPrice(item.price)}
                </span>

                <a
                  href={getAffiliateUrl({ affiliateUrl: item.url } as any)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded text-xs font-medium inline-flex items-center gap-1 transition-colors ${
                    isCheapest
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  <span>View Deal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
