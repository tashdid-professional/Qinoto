import Image from "next/image";
import { colorsSectionData } from "@/public/datas/homepage";
import CustomButton from "./CustomButton";

export default function ColorsSection() {
  return (
    <section className="bg-[#FCFCFC] font-karla overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
        {/* Text Content - 50% Viewport Width */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-20 pl-6 md:pl-12 lg:pl-24 xl:pl-32 order-2 lg:order-1">
          <div className="max-w-xl flex flex-col gap-8">
            <div className="w-12 h-4 text-black">
              <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="title max-w-md">
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
        </div>

        {/* Image Content - 50% Viewport Width */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative aspect-square w-full">
            <Image
              src={colorsSectionData.image}
              alt="Color Shades"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
