import Image from "next/image";
import { about1 } from "@/public/datas/about";
import CustomButton from "./CustomButton";

export default function ProductSection() {
  return (
    <section className="bg-white pt-20 md:pt-32 font-karla overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Image Content (Laptop/Mockup Side) */}
        <div className="relative w-full lg:w-1/2 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
          <Image
            src={about1.image}
            alt="Product Showcase"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 md:gap-8 order-1 lg:order-2 py-16 md:py-20 px-6 md:px-12 lg:px-24">
          {/* Zig-Zag Icon Placeholder */}
          <div className="w-10 md:w-12 h-4 text-black">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight tracking-tight max-w-md">
            {about1.title}
          </h2>

          <p className="description max-w-md">
            {about1.description}
          </p>

          <CustomButton 
            href={about1.buttonLink}
            text={about1.buttonText}
          />
        </div>
      </div>
    </section>
  );
}
