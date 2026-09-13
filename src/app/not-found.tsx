import React from 'react';
import Link from 'next/link';
import { Tag, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center max-w-md w-full shadow-xs space-y-5">
        <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <Tag className="w-7 h-7" />
        </div>

        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">404</h1>
          <h2 className="text-base font-bold text-gray-900 mt-1">
            Looks like this deal disappeared.
          </h2>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            The product or page you are looking for might have been moved, updated, or removed from our price index.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go Home</span>
          </Link>
          <Link
            href="/search"
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-4 rounded-md text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Deals</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
