'use client';

import React from 'react';
import Link from 'next/link';
import { Category } from '@/types';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically resolve Lucide Icon
  const IconComponent = (Icons as any)[category.iconName] || Icons.ShoppingBag;

  return (
    <Link
      href={`/search?category=${category.slug}`}
      className="group bg-white rounded-lg border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <IconComponent className="w-5 h-5 stroke-[2]" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
          {category.name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-50 flex items-center justify-between text-[11px] text-indigo-600 font-medium group-hover:translate-x-0.5 transition-transform">
        <span>Explore deals</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
};
