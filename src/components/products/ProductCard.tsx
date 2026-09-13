'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { ProductBadge } from './ProductBadge';
import { PriceDisplay } from './PriceDisplay';
import { RatingDisplay } from './RatingDisplay';
import { MarketplaceBadge } from './MarketplaceBadge';
import { FavoriteButton } from './FavoriteButton';
import { ExternalLink, ArrowRightLeft } from 'lucide-react';
import { getAffiliateUrl } from '@/lib/affiliate';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onCompareToggle?: (product: Product) => void;
  isComparing?: boolean;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onCompareToggle,
  isComparing = false,
  className,
}) => {
  const dealUrl = getAffiliateUrl(product);

  return (
    <div
      className={cn(
        'group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden relative',
        className
      )}
    >
      {/* Top Media Container */}
      <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden border-b border-gray-100">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <ProductBadge badge={product.badge} />
          </div>
        )}

        {/* Favorite Action Button */}
        <div className="absolute top-2 right-2 z-10">
          <FavoriteButton productId={product.id} />
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3.5 flex-1 flex flex-col justify-between gap-2.5">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1">
            <MarketplaceBadge marketplace={product.marketplace} />
            <RatingDisplay rating={product.rating} reviewCount={product.reviewCount} />
          </div>

          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors leading-snug">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="pt-1 border-t border-gray-50 flex flex-col gap-2.5">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            size="md"
          />

          {/* Action Row: Compare Button + View Deal CTA */}
          <div className="flex items-center gap-2 pt-1">
            {onCompareToggle && (
              <button
                type="button"
                onClick={() => onCompareToggle(product)}
                className={cn(
                  'px-2.5 py-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer',
                  isComparing
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                )}
                title="Compare with another product"
              >
                <ArrowRightLeft className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span className="whitespace-nowrap">{isComparing ? 'Comparing' : 'Compare'}</span>
              </button>
            )}

            <a
              href={dealUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-xs whitespace-nowrap"
            >
              <span>View Deal</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
