import React from 'react';
import Link from 'next/link';
import { SearchX, ArrowRight } from 'lucide-react';
import { POPULAR_SEARCH_CHIPS } from '@/constants';

interface EmptyStateProps {
  query?: string;
  onResetFilters?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ query, onResetFilters }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center max-w-lg mx-auto my-8 shadow-xs">
      <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">
        No products found {query && `for "${query}"`}
      </h3>
      <p className="text-xs text-gray-500 mb-6 leading-relaxed">
        We couldn't find matches for your exact budget or keywords. Try relaxing your price filters or searching for popular alternatives.
      </p>

      <div className="space-y-4">
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-xs transition-colors"
          >
            Clear All Filters
          </button>
        )}

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-700 mb-2.5">Try searching popular items:</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {POPULAR_SEARCH_CHIPS.map((chip, i) => (
              <Link
                key={i}
                href={`/search?q=${encodeURIComponent(chip)}`}
                className="bg-gray-100 hover:bg-indigo-50 hover:text-indigo-700 text-gray-600 text-xs px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1"
              >
                <span>{chip}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
