'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { isFavorite, toggleFavorite } from '@/lib/storage';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  productId: string;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ productId, className }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(productId));
  }, [productId]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = toggleFavorite(productId);
    setFav(updated.includes(productId));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={fav ? 'Remove from saved products' : 'Save product'}
      className={cn(
        'p-1.5 rounded-full border bg-white/90 shadow-sm transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
        fav
          ? 'text-rose-500 border-rose-200 bg-rose-50/50'
          : 'text-gray-400 border-gray-200 hover:text-rose-500',
        className
      )}
    >
      <Heart className={cn('w-4 h-4', fav && 'fill-rose-500 text-rose-500')} />
    </button>
  );
};
