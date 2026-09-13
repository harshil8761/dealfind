import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';
import { productProvider } from '@/lib/providers';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Clock, User, Calendar, CheckCircle2, HelpCircle, ArrowRight, Tag, Search } from 'lucide-react';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: 'Article Not Found — DealFind Blog' };
  }

  return {
    title: `${post.title} — DealFind Buyer Guide`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.featuredImage }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get matching recommended deals
  const recommendedProducts = (await productProvider.searchProducts(post.searchQuery)).slice(0, 4);

  return (
    <article className="space-y-8 pb-12 max-w-4xl mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <header className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="bg-indigo-50 text-indigo-700 font-semibold px-2.5 py-1 rounded-full border border-indigo-100">
            {post.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="flex items-center gap-1 text-gray-500">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {post.description}
        </p>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
              DF
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-[11px] text-gray-400">{post.author.role}</p>
            </div>
          </div>

          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </header>

      {/* Main Cover Image */}
      <div className="relative aspect-21/9 w-full rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shadow-xs">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover"
        />
      </div>

      {/* Main Content Body */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-8 text-sm text-gray-700 leading-relaxed">
        {/* Introduction */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">Overview</h2>
          <p className="leading-relaxed text-gray-600">{post.content.introduction}</p>
        </section>

        {/* Key Advice Chips */}
        {post.buyingAdvice.length > 0 && (
          <section className="bg-indigo-50/60 rounded-lg p-5 border border-indigo-100 space-y-3">
            <h3 className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Key Buying Checklist
            </h3>
            <ul className="space-y-2 text-xs text-indigo-900">
              {post.buyingAdvice.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* What to Look For */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">What to Look for Before Buying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.content.whatToLookFor.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-gray-200 bg-gray-50/50 space-y-1.5">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products Grid */}
        {recommendedProducts.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Top Recommended Deals</h2>
              <Link
                href={`/search?q=${encodeURIComponent(post.searchQuery)}`}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>View all {post.searchQuery}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <ProductGrid products={recommendedProducts} />
          </section>
        )}

        {/* Buying Tips */}
        <section className="space-y-3 pt-4 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Smart Shopping Tips</h2>
          <ul className="space-y-2">
            {post.content.buyingTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        {post.content.faq.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {post.content.faq.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-gray-200 bg-gray-50/50 space-y-1">
                  <h3 className="text-xs font-bold text-gray-900">{item.question}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Searches Links for Internal SEO */}
        <section className="pt-4 border-t border-gray-100 space-y-3">
          <p className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-indigo-600" /> Search Deals Mentioned in this Guide:
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/search?q=${encodeURIComponent(post.searchQuery)}`}
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs px-3 py-1.5 rounded-md font-medium transition-colors"
            >
              Search "{post.searchQuery}"
            </Link>
            <Link
              href={`/search?category=${post.recommendedCategorySlug}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-md font-medium transition-colors"
            >
              Explore {post.recommendedCategorySlug} deals
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
