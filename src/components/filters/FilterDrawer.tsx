'use client';

import React from 'react';
import { FilterState } from '@/types/product';
import { FilterSidebar } from './FilterSidebar';
import { X, Filter } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  resultCount?: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  resultCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xs bg-white shadow-xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-indigo-600" />
              Filter Products
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Filters */}
          <div className="flex-1 overflow-y-auto p-4">
            <FilterSidebar
              filters={filters}
              onFilterChange={onFilterChange}
              onReset={onReset}
              className="border-none p-0 shadow-none space-y-5"
            />
          </div>

          {/* Footer Action */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors text-center"
            >
              Apply Filters {resultCount !== undefined && `(${resultCount})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
