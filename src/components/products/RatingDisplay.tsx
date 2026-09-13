import React from 'react';
import { Star } from 'lucide-react';
import { formatNumber, cn } from '@/lib/utils';

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
  showCount?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const RatingDisplay: React.FC<RatingDisplayProps> = ({
  rating,
  reviewCount,
  showCount = true,
  size = 'sm',
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-1 text-sm text-gray-600', className)}>
      <div className="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-xs font-semibold border border-amber-200">
        <span>{rating.toFixed(1)}</span>
        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
      </div>
      {showCount && (
        <span className="text-xs text-gray-500">
          ({formatNumber(reviewCount)})
        </span>
      )}
    </div>
  );
};
