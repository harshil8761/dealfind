import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-gray-500 py-2 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-indigo-600">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-900 truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
