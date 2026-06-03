// Product Types
export interface ProductVariant {
  name: string;
  image: string;
  gallery: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New";
  shortdescription?: string;
  description: string;
  slug: string;
  tags: string[];
  gallery: string[];
  videos: string[];
  purchaseLink?: string;
  variantType?: string;
  variants?: ProductVariant[];
  featured: boolean;
}

// Blog Types
export interface Blog {
  id: number;
  slug: string;
  category: string;
  author: string;
  day: string;
  month: string;
  year?: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export interface BlogSidebarData {
  title: string;
  description: string;
}

// Homepage Types
export interface BannerData {
  title: string;
  image: string;
  mobileImage: string;
  logoText: string;
}

export interface SectionData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface CategoryData {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialData {
  image: string;
  title: string;
  quote: string;
  name: string;
  role: string;
}

export interface NewsletterData {
  title: string;
  description: string;
  image: string;
}

export interface FooterLink {
  label: string;
  link: string;
}

export interface FooterColumn {
  links: FooterLink[];
}

export interface FooterData {
  Description: string;
  email: string;
  socialLinks: { name: string; link: string }[];
  columns: FooterColumn[];
}

// Contact Types
export interface ContactData {
  title: string;
  image: string;
  description: string;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  description: string[];
  items: FAQItem[];
}

// Legal Types
export interface LegalContent {
  title: string;
  content: string[];
}

// About Types
export interface AboutData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}
