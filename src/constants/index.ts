import { Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Men & Women Clothing, Jeans, T-Shirts & Pants',
    iconName: 'Shirt',
    popularSearch: "Men's pants under ₹500",
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Headphones, Speakers, Powerbanks & Smart Devices',
    iconName: 'Headphones',
    popularSearch: 'Best headphones under ₹1000',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    slug: 'gaming',
    description: 'Gaming Mice, Keyboards, Controllers & Gear',
    iconName: 'Gamepad2',
    popularSearch: 'Gaming mouse under ₹800',
  },
  {
    id: 'footwear',
    name: 'Footwear',
    slug: 'footwear',
    description: 'Sneakers, Running Shoes, Casual Shoes & Sandals',
    iconName: 'Footprints',
    popularSearch: 'Shoes under ₹2000',
  },
  {
    id: 'watches',
    name: 'Watches',
    slug: 'watches',
    description: 'Analog, Digital & Smartwatches for Men & Women',
    iconName: 'Watch',
    popularSearch: 'Best watches under ₹1500',
  },
  {
    id: 'bags',
    name: 'Bags & Backpacks',
    slug: 'bags',
    description: 'College Bags, Travel Backpacks & Laptops Sleeves',
    iconName: 'ShoppingBag',
    popularSearch: 'College bags under ₹1000',
  },
  {
    id: 'beauty',
    name: 'Beauty & Care',
    slug: 'beauty',
    description: 'Skincare, Grooming Kits, Perfumes & Personal Care',
    iconName: 'Sparkles',
    popularSearch: 'Grooming kit under ₹999',
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    slug: 'home',
    description: 'Desk Lamps, Organizers, Water Bottles & Cookware',
    iconName: 'Home',
    popularSearch: 'Desk lamps under ₹700',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Wallets, Belts, Sunglasses & Gadget Accessories',
    iconName: 'Glasses',
    popularSearch: 'Leather wallets under ₹500',
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    slug: 'fitness',
    description: 'Yoga Mats, Resistance Bands, Dumbbells & Gear',
    iconName: 'Dumbbell',
    popularSearch: 'Yoga mat under ₹600',
  },
];

export const POPULAR_SEARCH_CHIPS = [
  "Pants under ₹500",
  "Headphones under ₹1000",
  "Gaming Mouse under ₹800",
  "Watches under ₹1500",
  "Shoes under ₹2000",
  "College bags under ₹1000",
];

export const TRENDING_SEARCHES = [
  "Best phones under ₹15000",
  "Men's jeans under ₹1000",
  "Wireless earbuds under ₹1500",
  "Gaming keyboards under ₹2000",
  "Office chairs under ₹5000",
];

export const PRICE_RANGES = [
  { label: 'Under ₹500', min: null, max: 500 },
  { label: '₹500 – ₹1,000', min: 500, max: 1000 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000 – ₹5,000', min: 2000, max: 5000 },
  { label: 'Above ₹5,000', min: 5000, max: null },
];

export const MARKETPLACES = ['Amazon', 'Flipkart', 'Myntra', 'Ajio', 'Tata CLiQ'] as const;

export const SORT_OPTIONS = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Best Value', value: 'best-value' },
  { label: 'Lowest Price', value: 'price-asc' },
  { label: 'Highest Rating', value: 'rating-desc' },
  { label: 'Most Reviewed', value: 'reviews-desc' },
  { label: 'Biggest Discount', value: 'discount-desc' },
];
