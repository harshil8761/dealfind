import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-xs animate-pulse space-y-3">
      <div className="w-full aspect-[4/3] bg-gray-200 rounded-md" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-6 bg-gray-200 rounded w-1/3" />
      <div className="h-8 bg-gray-200 rounded w-full mt-2" />
    </div>
  );
};

export const DetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 animate-pulse space-y-6">
      <div className="h-4 bg-gray-200 rounded w-48" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-square bg-gray-200 rounded-lg" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-10 bg-gray-200 rounded w-1/2" />
          <div className="h-24 bg-gray-200 rounded w-full" />
          <div className="h-12 bg-gray-200 rounded w-full" />
        </div>
      </div>
    </div>
  );
};
