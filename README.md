# DealFind — Smart Product Discovery & Price Comparison Platform

> **"User searches for what they want + their budget → DealFind finds and displays the best matching products → User compares live prices → User clicks 'View Deal' to purchase directly from verified marketplaces."**

DealFind is a production-quality Indian product discovery and price comparison web application built using **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. It helps online shoppers discover high-value products tailored to their exact budget constraints and product preferences across major online marketplaces like Amazon, Flipkart, Myntra, and Ajio.

---

## 🌟 Key Features

### 🔍 1. Natural Language Budget Search
- Intelligently interprets natural language queries containing price limits and keywords:
  - *"Men's pants under ₹500"* → Extracts keyword `pants` with `maxPrice = 500`
  - *"Best headphones under ₹1000"* → Extracts keyword `headphones` with `maxPrice = 1000`
  - *"Gaming mouse under ₹800"* → Extracts keyword `gaming mouse` with `maxPrice = 800`
- Instant search suggestion dropdown displaying recent search history and popular budget deal chips.

### 📊 2. Live Price Comparison Engine
- Displays side-by-side marketplace price breakdowns for every item.
- Automatically highlights the **"Best Price"** seller badge for the lowest available offer.

### ⚖️ 3. Side-by-Side Product Comparison Drawer
- Select up to **4 products** simultaneously to trigger a sticky comparison bar.
- Compare features, prices, ratings, discounts, and marketplace sellers in a clear side-by-side matrix view.

### 🏆 4. Smart "Best Value" Ranking Algorithm
- Dynamically ranks items using a composite scoring algorithm balancing:
  - Customer Rating (0 to 5 stars)
  - Verified Review Count & Trust Volume
  - Discount Percentage & Price Point
  - Category Popularity Score
- Automatically calculates badges: `Best Value`, `Bestseller`, `Lowest Price`, `Best Rated`, and `Trending`.

### 🎛️ 5. Functional Filters & 6 Sorting Modes
- **Multi-faceted Filtering**: Category, Price Budget Range, Marketplace, Min Customer Rating (4★ / 3★), and Min Discount %.
- **6 Sorting Modes**: Recommended, Best Value, Lowest Price, Highest Rating, Most Reviewed, and Biggest Discount.
- **Mobile Drawer**: Responsive bottom-sheet filter menu for small viewports.

### ❤️ 6. Favorites & Recently Viewed
- Bookmark products with a single click on the heart icon.
- Persistent saved items page (`/saved`) powered by `localStorage` — no login required.

### 🎨 7. Trustworthy Light Theme UI
- Clean, light-mode interface (white/light-gray background, professional indigo primary actions, green savings tags).
- Designed for speed, clarity, and ease of use.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Storage**: Browser `localStorage` (Favorites & Recent Searches)
- **Font**: [Google Inter Font](https://fonts.google.com/specimen/Inter)

---

## 🛠️ Architecture & Future API Provider Pattern

DealFind is designed with a provider-oriented architecture (`src/lib/providers.ts`). The frontend consumes a normalized `ProductProvider` interface, decoupling UI components from mock data sources:

```ts
export interface ProductProvider {
  name: string;
  searchProducts(query: string, filters?: FilterState): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductById(id: string): Promise<Product | null>;
  getPopularProducts(limit?: number): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
}
```

Future authorized affiliate or marketplace API providers (`AmazonProvider`, `FlipkartProvider`) can be plugged in seamlessly without rebuilding the UI components.

---

## 📁 Project Structure

```text
e-com/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with Metadata & Inter Font
│   │   ├── page.tsx               # Homepage (Hero, Categories, Best Finds, Trending)
│   │   ├── search/page.tsx        # Search Results with Sidebar & Sorting
│   │   ├── product/[slug]/page.tsx# Product Detail & Price Comparison
│   │   ├── saved/page.tsx         # Saved Favorites Page
│   │   ├── about/page.tsx         # About DealFind
│   │   ├── contact/page.tsx       # Contact & Feedback Form
│   │   ├── privacy/page.tsx       # Privacy Policy
│   │   ├── terms/page.tsx         # Terms of Service
│   │   └── not-found.tsx          # Custom 404 Page
│   │
│   ├── components/
│   │   ├── layout/                # Header, Footer
│   │   ├── search/                # SearchBar, SearchSuggestions
│   │   ├── products/              # ProductCard, ProductGrid, ProductBadge, PriceDisplay, PriceComparison
│   │   ├── filters/               # FilterSidebar, FilterDrawer, SortDropdown
│   │   ├── categories/            # CategoryCard, CategoryGrid
│   │   ├── comparison/            # CompareDrawer (Matrix Comparison Modal)
│   │   └── ui/                    # Skeleton, EmptyState, ErrorState, Breadcrumbs
│   │
│   ├── data/                      # 40+ Realistic Mock Indian Products
│   ├── lib/                       # Search parser, Ranking algorithm, Storage, Providers, Affiliate links
│   ├── types/                     # TypeScript Interfaces
│   └── constants/                 # Categories, Price Ranges, Marketplaces, Chips
│
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
└── package.json                   # Dependencies
```

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/harshil8761/dealfind.git
cd dealfind
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📜 Affiliate Disclosure

*Some links on DealFind are affiliate links. DealFind may earn a small referral commission when users purchase products through these links, at no extra cost to the user. All product prices and availability are accurate as of listing.*

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for details.
