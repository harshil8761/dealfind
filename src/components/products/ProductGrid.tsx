import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from '../ui/Skeleton';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onCompareToggle?: (product: Product) => void;
  comparingIds?: string[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  onCompareToggle,
  comparingIds = [],
  className,
}) => {
  if (loading) {
    return (
      <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4', className)}>
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4', className)}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onCompareToggle={onCompareToggle}
          isComparing={comparingIds.includes(product.id)}
        />
      ))}
    </div>
  );
};
