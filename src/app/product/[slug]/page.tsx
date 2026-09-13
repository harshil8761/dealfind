import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productProvider } from '@/lib/providers';
import { getAffiliateUrl } from '@/lib/affiliate';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PriceDisplay } from '@/components/products/PriceDisplay';
import { RatingDisplay } from '@/components/products/RatingDisplay';
import { ProductBadge } from '@/components/products/ProductBadge';
import { MarketplaceBadge } from '@/components/products/MarketplaceBadge';
import { PriceComparison } from '@/components/products/PriceComparison';
import { ProductGrid } from '@/components/products/ProductGrid';
import { FavoriteButton } from '@/components/products/FavoriteButton';
import { ExternalLink, CheckCircle2, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await productProvider.getProductBySlug(resolvedParams.slug);

  if (!product) {
    return { title: 'Product Not Found — DealFind' };
  }

  return {
    title: `${product.title} — Best Price & Deals on DealFind`,
    description: `${product.description} Compare live prices across Amazon and Flipkart starting at ₹${product.price}.`,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await productProvider.getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const dealUrl = getAffiliateUrl(product);
  const similarProducts = (await productProvider.getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="space-y-8 pb-12">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Search', href: '/search' },
          { label: product.category, href: `/search?category=${product.category}` },
          { label: product.title },
        ]}
      />

      {/* Main Product Details Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image Gallery View */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-square w-full rounded-xl bg-gray-50 overflow-hidden border border-gray-200">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                <ProductBadge badge={product.badge} />
              </div>
            )}
            <div className="absolute top-3 right-3 z-10">
              <FavoriteButton productId={product.id} />
            </div>
          </div>
        </div>

        {/* Right Column: Title, Ratings, Pricing, Features, CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MarketplaceBadge marketplace={product.marketplace} />
              <RatingDisplay rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              {product.title}
            </h1>

            <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex items-baseline justify-between">
              <PriceDisplay
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                size="lg"
              />
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                {product.availability}
              </span>
            </div>

            {/* Primary Action Button: View Deal */}
            <a
              href={dealUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3.5 px-6 rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm transition-all text-center"
            >
              <span>View Deal on {product.marketplace}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified official partner deal link
            </p>
          </div>

          {/* Price Comparison Block */}
          <PriceComparison
            marketplacePrices={product.marketplacePrices}
            currentPrice={product.price}
            currentMarketplace={product.marketplace}
            affiliateUrl={product.affiliateUrl}
          />

          {/* Key Features */}
          {product.features.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-gray-900">Key Features & Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="space-y-4 pt-6">
          <h2 className="text-lg font-bold text-gray-900">Similar Alternatives in {product.category}</h2>
          <ProductGrid products={similarProducts} />
        </div>
      )}
    </div>
  );
}
