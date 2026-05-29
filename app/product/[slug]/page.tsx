"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import ProductCard from "@/components/ProductCard";
import { products } from "@/public/datas/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [mainImage, setMainImage] = useState(product?.image || "");

  // Update image when product or variant changes
  React.useEffect(() => {
    if (product) {
      if (selectedVariant) {
        setMainImage(selectedVariant.image);
      } else {
        setMainImage(product.image);
      }
    }
  }, [product, selectedVariant]);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-40 text-center">
          <h2 className="text-2xl tracking-[0.08em] uppercase">Product Not Found</h2>
          <Link href="/shop" className="mt-8 inline-block text-sm tracking-[0.08em] uppercase border-b border-black pb-1">Back to Shop</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const activeGallery = selectedVariant ? selectedVariant.gallery : product.gallery;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative h-[250px] md:h-[350px] flex items-center overflow-hidden bg-[#F0F0F0]">
        <div className="relative z-10 pt-16 md:pt-20 container ">
          <h1 className="text-5xl md:text-[60px] font-bold font-outfit text-black mb-4">
            Shop
          </h1>
          <nav className="flex items-center space-x-3 text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-black uppercase font-lato">
            <Link href="/" className="hover:text-[#b6713e] transition-colors">HOME</Link>
            <span className="text-[#b6713e]">♦</span>
            <Link href="/shop" className="hover:text-[#b6713e] transition-colors">SHOP</Link>
            <span className="text-[#b6713e]">♦</span>
            <span className="opacity-50">{product.name}</span>
          </nav>
        </div>
      </section>

      <div className="container pb-16 md:pb-20 pt-10 md:pt-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-6">
            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto md:mx-0 bg-[#F9F9F9] overflow-hidden">
              {product.oldPrice && (
                <div className="absolute top-4 left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center z-20">
                  <span className="text-white text-xs md:text-[13px] font-bold">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                </div>
              )}
              
              <Image src={mainImage} alt={product.name} fill className="object-cover" priority />
              {product.badge && (
                <span className="absolute top-0 right-0 bg-[#f9e2bf] px-6 md:px-8 py-2 text-[10px] md:text-xs font-serif italic tracking-[0.08em] z-10">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {activeGallery.map((img, idx) => (
                <div 
                  key={idx}
                  className={`relative w-16 h-20 md:w-20 md:h-24 shrink-0 cursor-pointer border transition-all ${mainImage === img ? 'border-[#d4b1a4]' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-start max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
              <h1 className="text-[32px] md:text-[38px] font-bold font-outfit text-black leading-tight">
                {product.name}
              </h1>
              <div className="hidden md:block h-8 w-px bg-gray-300" />
              <div className="flex items-center gap-4 font-lato">
                {product.oldPrice && (
                  <span className="text-[#999] line-through text-[24px] md:text-[29px]">
                    ৳{product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-black text-[24px] md:text-[29px] font-bold">
                  ৳{product.price.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="text-[#545454] font-lato text-sm md:text-[15px] leading-relaxed mb-8 whitespace-pre-line">
              {product.description}
            </p>

            {/* Meta */}
            <div className="space-y-3 mb-8">
              <p className="text-[12px] uppercase tracking-widest font-bold text-black font-outfit">
                Category: <span className="font-normal text-[#777] ml-1">{product.category}</span>
              </p>
              <p className="text-[12px] uppercase tracking-widest font-bold text-black font-outfit">
                Tag: <span className="font-normal text-[#777] ml-1">{product.tags.join(", ")}</span>
              </p>
            </div>

            {/* Variants / Dynamic Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8 md:mb-10">
                <span className="text-[12px] md:text-[14px] tracking-[0.08em] uppercase text-black font-semibold block mb-4">
                  {product.variantType || "Choose Option"}
                </span>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 border text-[11px] md:text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 ${
                        selectedVariant?.name === variant.name
                          ? "bg-[#FCF7EE] border-[#DED0B9] text-black"
                          : "border-neutral-300 text-neutral-500 hover:border-[#DED0B9] hover:bg-[#FCF7EE] hover:text-black"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase */}
            <div className="flex items-center gap-6 mb-12">
              <a 
                href={product.purchaseLink || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto px-14 bg-black border border-black text-white h-14 flex items-center justify-center text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 font-lato"
              >
                Purchase Now
              </a>
            </div>

            {/* Tabs Section */}
            <div className="mt-4">
              <div className="flex flex-wrap justify-start mb-8">
                <button 
                  onClick={() => setActiveTab("description")}
                  className={`px-8 md:px-12 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-black -mr-px ${
                    activeTab === 'description' 
                    ? 'bg-[#F9E4E1] text-black' 
                    : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab("videos")}
                  className={`px-8 md:px-12 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-black ${
                    activeTab === 'videos' 
                    ? 'bg-[#F9E4E1] text-black' 
                    : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  Videos
                </button>
              </div>

              <div className="py-2">
                {activeTab === "description" ? (
                  <div className="animate-fadeIn">
                    <p className="text-[#545454] font-lato text-base leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6 animate-fadeIn">
                    {product.videos.map((vidId, idx) => (
                      <div key={idx} className="relative aspect-video rounded-sm overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube-nocookie.com/embed/${vidId}`}
                          title={`Product Video ${idx + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                          loading="lazy"
                        ></iframe>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className=" text-[24px] tracking-normal mb-8 font-semibold font-karla border-t pt-4">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
