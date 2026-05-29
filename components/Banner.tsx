import Image from "next/image";
import { bannerData } from "@/public/datas/homepage";

export default function Banner() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white font-karla">
      {/* Dynamic Background Image - Covers full screen */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bannerData.image}
          alt="Banner background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Dynamic Text */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 className="text-[228px] font-bold tracking-tighter leading-none select-none text-black">
          {bannerData.title}
        </h1>
      </div>

     
    </section>
  );
}
