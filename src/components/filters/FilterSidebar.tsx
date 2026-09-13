'use client';

import React from 'react';
import Link from 'next/link';
import { FilterState, Marketplace } from '@/types/product';
import { CATEGORIES, PRICE_RANGES, MARKETPLACES } from '@/constants';
import { RotateCcw, Filter, Check } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  className?: string;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onReset,
  className = '',
}) => {
  const handlePriceRangeClick = (min: number | null, max: number | null) => {
    onFilterChange({
      ...filters,
      minPrice: min,
      maxPrice: max,
    });
  };

  const handleRatingClick = (rating: number | null) => {
    onFilterChange({
      ...filters,
      minRating: filters.minRating === rating ? null : rating,
    });
  };

  const handleMarketplaceToggle = (marketplace: Marketplace) => {
    const exists = filters.marketplaces.includes(marketplace);
    const updated = exists
      ? filters.marketplaces.filter((m) => m !== marketplace)
      : [...filters.marketplaces, marketplace];

    onFilterChange({
      ...filters,
      marketplaces: updated,
    });
  };

  const handleDiscountClick = (discount: number | null) => {
    onFilterChange({
      ...filters,
      minDiscount: filters.minDiscount === discount ? null : discount,
    });
  };

  return (
    <aside className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm space-y-6 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
          <Filter className="w-4 h-4 text-indigo-600" />
          Filters
        </h2>
        <button
          onClick={onReset}
          className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          Clear All
        </button>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Category</h3>
        <div className="space-y-1 text-sm">
          <button
            onClick={() => onFilterChange({ ...filters, category: 'all' })}
            className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
              filters.category === 'all' || !filters.category
                ? 'bg-indigo-50 text-indigo-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onFilterChange({ ...filters, category: cat.slug })}
              className={`w-full text-left px-2 py-1.5 rounded transition-colors flex items-center justify-between ${
                filters.category === cat.slug
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Price Budget</h3>
        <div className="space-y-1.5">
          {PRICE_RANGES.map((range, idx) => {
            const isSelected =
              filters.minPrice === range.min && filters.maxPrice === range.max;
            return (
              <button
                key={idx}
                onClick={() => handlePriceRangeClick(range.min, range.max)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between border ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{range.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Marketplace */}
      <div>
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Marketplace</h3>
        <div className="space-y-2">
          {MARKETPLACES.map((mp) => {
            const checked = filters.marketplaces.includes(mp);
            return (
              <label key={mp} className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleMarketplaceToggle(mp)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <span>{mp}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Customer Rating</h3>
        <div className="space-y-1.5">
          {[4, 3].map((r) => {
            const selected = filters.minRating === r;
            return (
              <button
                key={r}
                onClick={() => handleRatingClick(r)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between border ${
                  selected
                    ? 'bg-amber-50 border-amber-200 text-amber-900 font-semibold'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{r}★ & above</span>
                {selected && <Check className="w-3.5 h-3.5 text-amber-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Minimum Discount */}
      <div>
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Discount</h3>
        <div className="flex flex-wrap gap-1.5">
          {[20, 30, 50].map((d) => {
            const selected = filters.minDiscount === d;
            return (
              <button
                key={d}
                onClick={() => handleDiscountClick(d)}
                className={`px-2.5 py-1 rounded text-xs border transition-colors ${
                  selected
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {d}%+ OFF
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
