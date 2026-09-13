import React from 'react';
import Link from 'next/link';
import { CategoryGrid } from '@/components/categories/CategoryGrid';
import { ProductGrid } from '@/components/products/ProductGrid';
import { productProvider } from '@/lib/providers';
import { POPULAR_SEARCH_CHIPS, TRENDING_SEARCHES } from '@/constants';
import { Search, Sparkles, SlidersHorizontal, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

export default async function HomePage() {
  const featuredProducts = await productProvider.getPopularProducts(8);

  return (
    <div className="space-y-12 pb-8">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xs text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
          <Sparkles className="w-3.5 h-3.5" />
          Smart Shopping & Budget Discovery Platform
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Find the Best Products at the Best Prices.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Search by product, category, or budget and discover top-rated matching options instantly.
          </p>
        </div>

        {/* Clickable Popular Search Chips */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-gray-400 font-medium">Popular:</span>
          {POPULAR_SEARCH_CHIPS.map((chip, idx) => (
            <Link
              key={idx}
              href={`/search?q=${encodeURIComponent(chip)}`}
              className="bg-gray-100 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 font-medium px-3 py-1 rounded-full transition-colors"
            >
              {chip}
            </Link>
          ))}
        </div>
      </section>

      {/* Category Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Explore by Category</h2>
            <p className="text-xs text-gray-500">Browse budget deals across popular lifestyle categories</p>
          </div>
          <Link
            href="/search"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <CategoryGrid />
      </section>

      {/* Today's Best Finds */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Today's Best Finds</h2>
            <p className="text-xs text-gray-500">Handpicked top value items matching high ratings and maximum savings</p>
          </div>
          <Link
            href="/search?sort=best-value"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>Explore Best Value</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Trending Searches Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-gray-900">Trending Search Queries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          {TRENDING_SEARCHES.map((query, idx) => (
            <Link
              key={idx}
              href={`/search?q=${encodeURIComponent(query)}`}
              className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-all flex items-center justify-between group"
            >
              <span className="font-medium text-gray-800 group-hover:text-indigo-700">
                {query}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-linear-to-b from-gray-50 to-white rounded-xl border border-gray-200 p-6 sm:p-8 text-center space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">How DealFind Works</h2>
          <p className="text-xs text-gray-500">3 easy steps to discovering your ideal product</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1">
              <Search className="w-4 h-4 text-indigo-600" /> 1. Search
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Tell us what item you are looking for and your budget constraint (e.g. "pants under ₹500").
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1">
              <SlidersHorizontal className="w-4 h-4 text-indigo-600" /> 2. Compare
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Filter by rating, seller, or feature matrix to discover the genuine best value choice.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1">
              <ExternalLink className="w-4 h-4 text-indigo-600" /> 3. View Deal
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Click View Deal to open verified external marketplace links with zero added fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
