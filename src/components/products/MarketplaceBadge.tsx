import React from 'react';
import { Marketplace } from '@/types/product';
import { cn } from '@/lib/utils';

interface MarketplaceBadgeProps {
  marketplace: Marketplace;
  className?: string;
}

export const MarketplaceBadge: React.FC<MarketplaceBadgeProps> = ({ marketplace, className }) => {
  const getStyle = () => {
    switch (marketplace) {
      case 'Amazon':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Flipkart':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Myntra':
        return 'bg-pink-100 text-pink-900 border-pink-300';
      case 'Ajio':
        return 'bg-stone-100 text-stone-800 border-stone-300';
      case 'Tata CLiQ':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 text-[11px] font-medium rounded border',
        getStyle(),
        className
      )}
    >
      {marketplace}
    </span>
  );
};
