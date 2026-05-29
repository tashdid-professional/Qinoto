import Image from "next/image";
import { productSectionData } from "@/public/datas/homepage";
import CustomButton from "./CustomButton";

export default function ProductSection() {
  return (
    <section className="bg-[#FCFCFC] font-karla overflow-hidden pt-20">
      <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
        {/* Image Content - 50% Viewport Width */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={productSectionData.image}
              alt="Product Showcase"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Text Content - 50% Viewport Width with internal padding */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-20 pr-6 md:pr-12 lg:pr-24 xl:pr-32 pl-18 order-1 lg:order-2">
          <div className="max-w-xl flex flex-col gap-8">
            <div className="w-12 h-4 text-black">
              <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="title max-w-md">
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
      </div>
    </section>
  );
}
