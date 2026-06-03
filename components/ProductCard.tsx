import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/types";
import { Eye, X } from "lucide-react";
import { createPortal } from "react-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const closeQuickView = (e: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsQuickViewOpen(false);
  };

  return (
    <>
      <div className="text-center block relative group">
        <Link href={`/product/${product.slug}`} className="block">
          {/* Image Container */}
          <div className="relative aspect-[4/5] flex items-center justify-center mb-4 md:mb-8 overflow-hidden bg-[#F9F9F9]">
            {/* Product Image */}
            <div className="relative w-full h-full p-4 md:p-8 transition-transform duration-700 ">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2 md:space-y-3 pb-2 md:pb-4 px-2">
            
            
            <h3 className="text-sm md:text-[16px] font-bold text-black leading-tight transition-colors font-karlo">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 md:gap-3 justify-center font-bold text-[11px] md:text-[12px] font-karlo">
              {product.oldPrice && (
                <span className="text-gray-400 line-through decoration-black/30">
                  ৳{product.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-black">
                ৳{product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>

        {/* Hover Button */}
        <div className="absolute left-0 right-0 top-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30 pointer-events-none group-hover:pointer-events-auto ">
          <Link 
            href={`/product/${product.slug}`}
            className="flex items-center justify-between border-1 border-black bg-white px-6 py-3.5 hover:bg-[#F9E4E1]  transition-colors duration-300 group/btn"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">View Details</span>
            <div className="flex items-center">
              <div className="h-6 w-px bg-black group-hover/btn:bg-white/30 mr-4 transition-colors" />
              <div className="relative">
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
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && isMounted && createPortal(
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={closeQuickView}
          />
          <div className="relative bg-white w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300 rounded-sm">
            <button 
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm md:bg-transparent rounded-full hover:rotate-90 transition-transform duration-300 text-gray-500 hover:text-black"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            <div className="w-full md:w-1/2 aspect-4/5 relative bg-[#fcf9f9] shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
              <div className="mb-6">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.08em] mb-2 block font-medium text-gray-500">
                  {product.category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] text-black uppercase mb-3 md:mb-4 leading-tight">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  {product.oldPrice && (
                    <span className="text-lg md:text-xl text-gray-400 line-through font-dm-sans">
                      £{product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xl md:text-2xl text-[#1a1a1a] font-dm-sans">
                    £{product.price.toFixed(2)}
                  </span>
                </div>
                <div className="w-12 h-px bg-[#d4b1a4] mb-4 md:mb-6" />
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-light mb-6 md:mb-8 italic">
                  Take a closer look at our {product.name.toLowerCase()}. This elegant piece from our {product.category.toLowerCase()} collection is designed for those who appreciate refined beauty and exceptional quality.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 mt-auto">
                <Link 
                  href={`/product/${product.slug}`}
                  className="w-full bg-[#1a1a1a] text-white text-center py-4 text-[12px] uppercase tracking-[0.08em] border border-[#1a1a1a] hover:bg-white hover:border-black hover:text-black transition-colors duration-500"
                >
                  View Details
                </Link>
                <a 
                  href={product.purchaseLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-gray-200 text-[#1a1a1a] text-center py-4 text-[11px] md:text-[12px] uppercase tracking-[0.08em] hover:border-black transition-colors duration-500"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
