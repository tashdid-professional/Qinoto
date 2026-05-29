import Image from "next/image";
import { colorsSectionData } from "@/public/datas/homepage";
import CustomButton from "./CustomButton";

export default function ColorsSection() {
  return (
    <section className="bg-white py-20 md:py-32 pl-6 md:pl-12 lg:pl-24 font-karla overflow-hidden">
      <div className=" flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content Side (Left on Desktop) */}
        <div className="w-2xl  lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
          {/* Zig-Zag Icon */}
          <div className="w-12 h-4 text-black">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="title max-w-lg">
            {colorsSectionData.title}
          </h2>

          <p className="description max-w-md">
            {colorsSectionData.description}
          </p>

          <CustomButton 
            href={colorsSectionData.buttonLink}
            text={colorsSectionData.buttonText}
          />
        </div>

        {/* Image Content (Right on Desktop) */}
        <div className="relative w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative aspect-square w-full scale-110 lg:scale-125 translate-x-10 lg:translate-x-20">
            <Image
              src={colorsSectionData.image}
              alt="Color Shades"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
