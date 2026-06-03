import {
  products as mockProducts,
} from "@/public/datas/products";
import {
  blogs as mockBlogs,
  blogSidebarData as mockBlogSidebarData,
} from "@/public/datas/blogs";
import {
  bannerData as mockBannerData,
  Section1Data as mockSection1Data,
  Section2Data as mockSection2Data,
  categoriesData as mockCategoriesData,
  testimonialsData as mockTestimonialsData,
  newsletterData as mockNewsletterData,
  footerData as mockFooterData,
} from "@/public/datas/homepage";
import { contactData as mockContactData } from "@/public/datas/contact";
import { faqData as mockFAQData } from "@/public/datas/faq";
import { 
  privacyPolicyContent as mockPrivacyPolicy, 
  termsAndConditionsContent as mockTermsAndConditions 
} from "@/public/datas/legal";
import { 
  about1 as mockAbout1, 
  about2 as mockAbout2 
} from "@/public/datas/about";

import {
  Product,
  Blog,
  BlogSidebarData,
  BannerData,
  SectionData,
  CategoryData,
  TestimonialData,
  NewsletterData,
  FooterData,
  ContactData,
  FAQData,
  LegalContent,
  AboutData
} from "@/src/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Common fetch helper for backend integration
 * 
 * const apiFetch = async (endpoint: string) => {
 *   const res = await fetch(`${API_URL}${endpoint}`);
 *   if (!res.ok) throw new Error("Failed to fetch data");
 *   return res.json();
 * };
 */

// Products
export async function getProducts(): Promise<Product[]> {
  // const data = await apiFetch("/products");
  // return data;
  return mockProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  // const data = await apiFetch(`/products/${slug}`);
  // return data;
  return mockProducts.find((p) => p.slug === slug);
}

// Blogs
export async function getBlogs(): Promise<Blog[]> {
  // const data = await apiFetch("/blogs");
  // return data;
  return mockBlogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  // const data = await apiFetch(`/blogs/${slug}`);
  // return data;
  return mockBlogs.find((b) => b.slug === slug);
}

export async function getBlogSidebar(): Promise<BlogSidebarData> {
  // const data = await apiFetch("/blog-sidebar");
  // return data;
  return mockBlogSidebarData;
}

// Homepage
export async function getBannerData(): Promise<BannerData> {
  // const data = await apiFetch("/homepage/banner");
  // return data;
  return mockBannerData;
}

export async function getSection1Data(): Promise<SectionData> {
  return mockSection1Data;
}

export async function getSection2Data(): Promise<SectionData> {
  return mockSection2Data;
}

export async function getCategories(): Promise<CategoryData[]> {
  return mockCategoriesData;
}

export async function getTestimonials(): Promise<TestimonialData[]> {
  return mockTestimonialsData;
}

export async function getNewsletterData(): Promise<NewsletterData> {
  return mockNewsletterData;
}

export async function getFooterData(): Promise<FooterData> {
  return mockFooterData;
}

// About
export async function getAbout1Data(): Promise<AboutData> {
  return mockAbout1;
}

export async function getAbout2Data(): Promise<AboutData> {
  return mockAbout2;
}

// Contact
export async function getContactData(): Promise<ContactData> {
  return mockContactData;
}

// FAQ
export async function getFAQData(): Promise<FAQData> {
  return mockFAQData;
}

// Legal
export async function getPrivacyPolicy(): Promise<LegalContent> {
  return mockPrivacyPolicy;
}

export async function getTermsAndConditions(): Promise<LegalContent> {
  return mockTermsAndConditions;
}

// Mutations (To be implemented by backend)
export async function submitContactForm(data: any) {
  // const res = await fetch(`${API_URL}/contact`, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: { "Content-Type": "application/json" }
  // });
  // return res.json();
  console.log("Mocking contact submission:", data);
  return { success: true };
}

export async function subscribeNewsletter(email: string) {
  // const res = await fetch(`${API_URL}/subscribe`, {
  //   method: "POST",
  //   body: JSON.stringify({ email }),
  //   headers: { "Content-Type": "application/json" }
  // });
  // return res.json();
  console.log("Mocking newsletter subscription:", email);
  return { success: true };
}
