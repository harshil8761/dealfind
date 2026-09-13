'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchBar } from '../search/SearchBar';
import { Search, Heart, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                Deal<span className="text-indigo-600">Find</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                Smart Product Discovery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/search" className="hover:text-indigo-600 transition-colors">
              Explore Deals
            </Link>
            <Link href="/blog" className="hover:text-indigo-600 transition-colors">
              Blog
            </Link>
            <Link href="/saved" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Heart className="w-4 h-4 text-rose-500" />
              <span>Saved</span>
            </Link>
            <Link href="/about" className="hover:text-indigo-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Main Desktop SearchBar */}
          <div className="hidden sm:block flex-1 max-w-md mx-4">
            <SearchBar size="normal" />
          </div>

          {/* Actions Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="sm:hidden p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Saved products link icon */}
            <Link
              href="/saved"
              className="p-2 text-gray-600 hover:text-rose-600 rounded-lg hover:bg-gray-100 relative"
              aria-label="View saved items"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Search Bar */}
        {mobileSearchOpen && (
          <div className="sm:hidden pb-3 pt-1 border-t border-gray-100">
            <SearchBar size="normal" />
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-gray-50 text-gray-900 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/search"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-gray-50 text-gray-700"
          >
            Explore All Deals
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-gray-50 text-gray-700"
          >
            Blog & Buyer Guides
          </Link>
          <Link
            href="/saved"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-md hover:bg-gray-50 text-gray-700 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Saved Products</span>
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-gray-50 text-gray-700"
          >
            About DealFind
          </Link>
        </div>
      )}
    </header>
  );
};
