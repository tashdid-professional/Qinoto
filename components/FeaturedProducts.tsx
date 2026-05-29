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
            className="aspect-square flex flex-col items-center justify-center p-8 bg-white group"
          >
            <div className="relative w-[70%] aspect-[4/5] mb-8 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
