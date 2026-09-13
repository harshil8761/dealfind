'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { CATEGORIES, POPULAR_SEARCH_CHIPS } from '@/constants';
import { getRecentSearches, addRecentSearch, clearRecentSearches } from '@/lib/storage';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
  className?: string;
  size?: 'normal' | 'large';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = '',
  placeholder = 'Search for "pants under ₹500" or "headphones"...',
  className,
  size = 'normal',
}) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, [isOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    addRecentSearch(searchTerm.trim());
    setIsOpen(false);
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className={cn(
            'w-full bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all',
            size === 'large' ? 'py-3.5 pl-11 pr-24 text-base' : 'py-2 pl-9 pr-20 text-sm'
          )}
        />
        <Search
          className={cn(
            'absolute text-gray-400 pointer-events-none',
            size === 'large' ? 'left-4 w-5 h-5' : 'left-3 w-4 h-4'
          )}
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className={cn(
              'absolute text-gray-400 hover:text-gray-600 p-1',
              size === 'large' ? 'right-24' : 'right-20'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          type="submit"
          className={cn(
            'absolute right-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 text-white font-medium rounded-md transition-colors shadow-sm',
            size === 'large' ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'
          )}
        >
          Find
        </button>
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden divide-y text-sm">
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-3">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Recent Searches
                </span>
                <button
                  onClick={() => {
                    clearRecentSearches();
                    setRecentSearches([]);
                  }}
                  className="text-indigo-600 hover:underline font-normal"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {recentSearches.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuery(item);
                      handleSearch(item);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-md transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Searches */}
          <div className="p-3">
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-2">
              <TrendingUp className="w-3.5 h-3.5" /> Popular Deals
            </div>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_SEARCH_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(chip);
                    handleSearch(chip);
                  }}
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs px-2.5 py-1 rounded-md transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
