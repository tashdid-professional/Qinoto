import Image from "next/image";
import { productSectionData } from "@/public/datas/homepage";
import CustomButton from "./CustomButton";

export default function ProductSection() {
  return (
    <section className="bg-white py-20 md:py-32 pr-6 md:pr-12 lg:pr-24 font-karla overflow-hidden">
      <div className=" flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image Content (Laptop/Mockup Side) */}
        <div className="relative w-full  order-2 lg:order-1">
          <div className="relative aspect-[16/10] w-full transform -translate-x-4 md:-translate-x-12">
            <Image
              src={productSectionData.image}
              alt="Product Showcase"
              fill
              className="object-cover  shadow-2xl"
            />
          </div>
        </div>

        {/* Text Content Side */}
        <div className="max-w-2xl flex flex-col gap-8 order-1 lg:order-2">
          {/* Zig-Zag Icon Placeholder */}
          <div className="w-12 h-4 text-black">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="title">
            {productSectionData.title}
          </h2>

          <p className="description">
            {productSectionData.description}
          </p>

          <CustomButton 
            href={productSectionData.buttonLink}
            text={productSectionData.buttonText}
          />
        </div>
      </div>
    </section>
  );
}
