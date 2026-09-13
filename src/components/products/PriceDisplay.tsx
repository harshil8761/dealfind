import React from 'react';
import { formatPrice, cn } from '@/lib/utils';

interface PriceDisplayProps {
  price: number;
  originalPrice: number;
  discount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  originalPrice,
  discount,
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: {
      price: 'text-base font-bold text-gray-900',
      original: 'text-xs text-gray-500 line-through',
      discount: 'text-xs font-semibold text-emerald-600',
    },
    md: {
      price: 'text-lg font-bold text-gray-900',
      original: 'text-sm text-gray-500 line-through',
      discount: 'text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100',
    },
    lg: {
      price: 'text-2xl font-bold text-gray-900',
      original: 'text-base text-gray-500 line-through',
      discount: 'text-sm font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={cn('flex items-baseline gap-2 flex-wrap', className)}>
      <span className={currentSize.price}>{formatPrice(price)}</span>
      {originalPrice > price && (
        <span className={currentSize.original}>{formatPrice(originalPrice)}</span>
      )}
      {discount > 0 && (
        <span className={currentSize.discount}>{discount}% OFF</span>
      )}
    </div>
  );
};
