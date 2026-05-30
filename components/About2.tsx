import Image from "next/image";
import { about2 } from "@/public/datas/about";
import CustomButton from "./CustomButton";

export default function ColorsSection() {
  return (
    <section className="bg-white font-karla overflow-hidden mb-20 md:mb-26">
      <div className="flex flex-col lg:flex-row items-stretch ">
        {/* Text Content Side (Left on Desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 md:gap-8 order-1 lg:order-1 py-16 md:py-20 px-6 md:px-12 lg:px-24">
          {/* Zig-Zag Icon */}
          <div className="w-10 md:w-12 h-4 text-black">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight tracking-tight max-w-md">
            {about2.title}
          </h2>

          <p className="description max-w-md">
            {about2.description}
          </p>

          <CustomButton 
            href={about2.buttonLink}
            text={about2.buttonText}
          />
        </div>

        {/* Image Content (Right on Desktop) */}
        <div className="relative w-full lg:w-1/2 order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
          <Image
            src={about2.image}
            alt="Color Shades"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
