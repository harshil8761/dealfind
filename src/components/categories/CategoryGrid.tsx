import React from 'react';
import { CATEGORIES } from '@/constants';
import { CategoryCard } from './CategoryCard';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
      {CATEGORIES.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
