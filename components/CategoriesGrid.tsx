import Image from "next/image";
import { categoriesData } from "@/public/datas/homepage";

export default function CategoriesGrid() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32 font-karla   container">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 gap-x-2 gap-y-12 md:gap-y-16">
        {categoriesData.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
            {/* Category Image / Smear */}
            <div className="relative w-[75%] sm:w-[85%] aspect-square mb-6 md:mb-8 overflow-hidden mx-auto">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 "
              />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 tracking-tight">
              {category.title}
            </h3>

            {/* Description */}
            <p className="text-[#545454] text-xs md:text-[15px] leading-relaxed max-w-60">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
