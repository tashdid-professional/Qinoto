"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  LayoutGrid,
  List,
  ChevronDown,
  Plus,
  ChevronLeft,
  X,
} from "lucide-react";
import { products } from "@/public/datas/products";
import ProductCard from "@/components/ProductCard";

import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function ShopContent() {
  const searchParams = useSearchParams();
  const searchBarQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category");

  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParam,
  );
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [searchQuery, setSearchQuery] = useState(searchBarQuery);

  // Sync state with URL parameter if it changes
  React.useEffect(() => {
    setSelectedCategory(categoryParam);
    setSearchQuery(searchBarQuery);
    setCurrentPage(1);
  }, [categoryParam, searchBarQuery]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const productsPerPage = 9; // 3 rows * 3 columns on desktop
  // Filter products by search and category
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    const matchesSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : true;
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (val: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (val) params.set("search", val);
    else params.delete("search");

    // Use push instead of reload for better UX
    window.history.pushState(null, "", `?${params.toString()}`);
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Apply Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "latest":
        return b.id - a.id;
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Extract unique categories and their counts
  const categories = Array.from(new Set(products.map((p) => p.category))).map(
    (cat) => ({
      name: cat,
      count: products.filter((p) => p.category === cat).length,
    }),
  );

  const bannerCategories = ["Face", "Hair Styling", "Lips", "Skincare"];

  return (
    <main className="bg-white min-h-screen ">
      <Navbar />
      {/* Hero Header */}
      <section className="relative h-[250px] md:h-[350px] flex items-center overflow-hidden bg-[#F0F0F0]">
        <div className="relative z-10 pt-16 md:pt-20 container px-6 md:px-0">
          <h1 className="text-5xl md:text-[60px] font-bold font-outfit text-black mb-4">
            Shop
          </h1>
          <nav className="flex items-center space-x-3 text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-black uppercase font-lato">
            <Link href="/" className="hover:text-[#b6713e] transition-colors">
              HOME
            </Link>
            <span className="text-[#b6713e]">♦</span>
            <span className="opacity-50">SHOP</span>
          </nav>
        </div>
      </section>
      {/* Main Content Area */}
      <section className="py-12 container px-6 md:px-0 relative">
        <div className="flex flex-col lg:flex-row gap-12 relative lg:static">
          {/* Product Grid Area - Left Side */}
          <div className="w-full lg:w-[76%] order-2 lg:order-1">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 pt-2 gap-4">
              <div className="text-[14px] md:text-[15px] text-gray-400 font-lato text-center md:text-left">
                Showing {indexOfFirstProduct + 1}–
                {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                {sortedProducts.length} results
              </div>

              <div className="relative w-full md:w-auto border border-gray-300">
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none border-none px-6 py-3 text-[15px] outline-none bg-white pr-10 text-gray-500 cursor-pointer"
                >
                  
                  <option value="a-z">Sort by alphabetically: A-Z</option>
                  <option value="z-a">Sort by alphabetically: Z-A</option>
                  <option value="low-high">Sort by price: low to high</option>
                  <option value="high-low">Sort by price: high to low</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-24 flex items-center gap-6 justify-center font-outfit">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`text-[20px] transition-all duration-300 ${
                      currentPage === i + 1
                        ? "text-[#F5E6E3] underline underline-offset-12 decoration-1"
                        : "text-black hover:opacity-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="text-black hover:opacity-50 transition-opacity ml-2"
                  >
                    <ChevronRight size={22} strokeWidth={1} />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Mobile Filter Button - Fixed Side */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="fixed right-4 top-[30%] -rotate-90 origin-right translate-y-1/2 z-[100] bg-black text-white px-8 py-4 rounded-t-2xl font-bold text-[11px] uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 transition-all active:scale-95 whitespace-nowrap"
            >
              <Plus size={16} />
              Browse Categories
            </button>
          </div>

          {/* Sidebar - Right Side (Desktop) / Drawer (Mobile) */}
          <aside className={`
            fixed inset-0 z-[100] bg-white md:p-10 p-6 transition-all duration-500 lg:static lg:z-auto lg:p-0 lg:translate-x-0 lg:w-[24%] lg:order-2 lg:opacity-100
            ${isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100"}
          `}>
             {/* Mobile Header for Sidebar */}
             <div className="flex lg:hidden justify-between items-center mb-10 pb-4 border-b">
                <h2 className="text-xl font-bold uppercase tracking-widest font-outfit">Filter</h2>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

            <div className="space-y-16 overflow-y-auto max-h-screen lg:max-h-none pb-20 lg:pb-0">
              {/* Search Product Widget */}
              <div className="space-y-6">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search Products.."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(e.currentTarget.value);
                      }
                    }}
                    className="w-full border border-black px-6 py-3.5 text-[15px] outline-none font-lato placeholder:text-gray-700"
                  />
                  <div className="absolute right-0 top-0 bottom-0 flex items-center pr-5 pointer-events-none">
                    <div className="h-[60%] w-px bg-black/20 mr-4" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product Categories Widget */}
              <div className="space-y-8">
                <div className="relative pb-4">
                  <h4 className="font-semibold text-[13px] uppercase tracking-[0.13em] text-black border-b border-t py-4 font-karla">
                    Product categories
                  </h4>
                  
                </div>
                <ul className="space-y-5">
                  <li
                    onClick={() => handleCategorySelect(null)}
                    className="flex items-center group cursor-pointer"
                  >
                    <span
                      className={`text-[16px] font-bold transition-colors font-outfit ${selectedCategory === null ? "text-black" : "text-black/80 hover:text-black"}`}
                    >
                      All Products
                    </span>
                    <span className="ml-2 text-[16px] text-black font-bold">
                      ({products.length})
                    </span>
                  </li>
                  {categories.map((cat) => (
                    <li
                      key={cat.name}
                      onClick={() => handleCategorySelect(cat.name)}
                      className="flex items-center group cursor-pointer"
                    >
                      <span
                        className={`text-[16px] font-bold transition-colors font-outfit ${selectedCategory === cat.name ? "text-black" : "text-black/80 hover:text-black"}`}
                      >
                        {cat.name}
                      </span>
                      <span className="ml-2 text-[16px] text-black font-bold">
                        ({cat.count})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Backdrop for mobile */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/40 z-[90] lg:hidden backdrop-blur-sm transition-opacity"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center bg-white text-black font-serif text-2xl animate-pulse uppercase tracking-[0.2em]">
          Loading Shop...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
