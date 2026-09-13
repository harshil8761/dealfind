export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  featuredImage: string;
  buyingAdvice: string[];
  recommendedCategorySlug: string;
  searchQuery: string;
  content: {
    introduction: string;
    whatToLookFor: {
      title: string;
      description: string;
    }[];
    buyingTips: string[];
    faq: {
      question: string;
      answer: string;
    }[];
  };
};
