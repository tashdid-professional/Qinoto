import Image from "next/image";
import Link from "next/link";
import { products } from "@/public/datas/products";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  return (
    <section className="bg-white border-b border-t border-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-300 gap-px">
        {featuredProducts.map((product) => (
          <div 
            key={product.id} 
            className="aspect-square flex flex-col items-center justify-center p-8 bg-white group relative"
          >
            {/* Image and Hover Overlay */}
            <div className="relative w-[70%] aspect-[4/5] mb-8 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto bg-black/5 px-2">
                <Link 
                  href={`/product/${product.slug}`}
                  className="flex items-center justify-between border-1 border-black bg-white px-5 py-3.5 hover:bg-[#F9E4E1] transition-colors duration-300 group/btn w-full"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">View Details</span>
                  <div className="flex items-center">
                    <div className="h-4 w-[1px] bg-black/20 mr-4 transition-colors" />
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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

            <Link 
              href={`/product/${product.slug}`}
              className="font-bold tracking-tight text-black hover:opacity-60 transition-opacity text-center uppercase"
            >
              {product.name}
            </Link>
          </div>
        ))}
        {/* Empty cells to maintain the 4-column grid structure visually */}
        {featuredProducts.length % 4 !== 0 && Array.from({ length: 4 - (featuredProducts.length % 4) }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden lg:block bg-white h-full w-full" />
        ))}
      </div>
    </section>
  );
}
