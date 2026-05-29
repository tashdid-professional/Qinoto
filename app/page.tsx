import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductSection from "@/components/Section1";
import ColorsSection from "@/components/Section2";
import CategoriesGrid from "@/components/CategoriesGrid";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <ProductSection />
      <ColorsSection />
      <CategoriesGrid />
      <TestimonialSection />
      <FeaturedProducts />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
