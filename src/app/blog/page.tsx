import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Guides & Buying Tips — DealFind Blog',
  description:
    'Read expert product buying guides, budget shopping strategies, tech recommendations, and price comparison tips on DealFind.',
};

export default function BlogListPage() {
  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs items={[{ label: 'Blog & Buyer Guides' }]} />

      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> DealFind Knowledge Base
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Smart Buyer Guides & Budget Shopping Tips
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          Honest buying advice, feature comparisons, and curated top picks under ₹500, ₹1000, and ₹1500 to help you make informed decisions.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Featured Image */}
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group-hover:translate-x-0.5"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
