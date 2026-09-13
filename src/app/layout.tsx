import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DealFind — Smart Product Discovery & Price Comparison',
  description:
    'Find the best products matching your budget. Compare prices, ratings, and features across Amazon, Flipkart, Myntra, and more.',
  keywords: [
    'product discovery',
    'price comparison',
    'best products under budget',
    'deals',
    'shopping helper',
  ],
  openGraph: {
    title: 'DealFind — Smart Product Discovery & Price Comparison',
    description: 'Find the best products matching your budget.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
