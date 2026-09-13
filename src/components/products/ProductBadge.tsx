import React from 'react';
import { ProductBadgeType } from '@/types/product';
import { cn } from '@/lib/utils';
import { Tag, TrendingUp, Award, DollarSign, Star, ThumbsUp } from 'lucide-react';

interface ProductBadgeProps {
  badge: ProductBadgeType;
  className?: string;
}

export const ProductBadge: React.FC<ProductBadgeProps> = ({ badge, className }) => {
  const getBadgeStyle = () => {
    switch (badge) {
      case 'Best Value':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: DollarSign,
        };
      case 'Bestseller':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          icon: Award,
        };
      case 'Lowest Price':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: Tag,
        };
      case 'Best Rated':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          icon: Star,
        };
      case 'Trending':
        return {
          bg: 'bg-rose-50 text-rose-700 border-rose-200',
          icon: TrendingUp,
        };
      case 'Popular Choice':
      default:
        return {
          bg: 'bg-purple-50 text-purple-700 border-purple-200',
          icon: ThumbsUp,
        };
    }
  };

  const style = getBadgeStyle();
  const Icon = style.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border',
        style.bg,
        className
      )}
    >
      <Icon className="w-3 h-3 stroke-[2.5]" />
      {badge}
    </span>
  );
};
