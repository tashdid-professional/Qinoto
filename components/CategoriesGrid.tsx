import Image from "next/image";
import { categoriesData } from "@/public/datas/homepage";

export default function CategoriesGrid() {
  return (
    <section className="bg-[#FAFAFA] py-20 md:py-32  font-karla container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {categoriesData.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
            {/* Category Image / Smear */}
            <div className="relative w-[85%] aspect-square mb-5 overflow-hidden mx-auto">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 "
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
              {category.title}
            </h3>

            {/* Description */}
            <p className="text-[#545454] text-sm md:text-[15px] leading-relaxed max-w-[240px]">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
