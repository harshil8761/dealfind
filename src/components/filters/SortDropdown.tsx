'use client';

import React from 'react';
import { SortOption } from '@/types/product';
import { SORT_OPTIONS } from '@/constants';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  value: SortOption;
  onChange: (sort: SortOption) => void;
  className?: string;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs text-gray-500 font-medium flex items-center gap-1 hidden sm:inline-flex">
        <ArrowUpDown className="w-3.5 h-3.5" /> Sort by:
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 py-1.5 pl-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-xs cursor-pointer"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
