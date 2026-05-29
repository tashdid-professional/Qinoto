import Image from "next/image";
import { newsletterData } from "@/public/datas/homepage";

export default function NewsletterSection() {
  return (
    <section className="bg-white pb-20 md:pb-32 px-6 md:px-0 md:pr-12 lg:pr-24 font-karla overflow-hidden">
      <div className=" flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        {/* Left Side: Large Image */}
        <div className="w-full lg:w-[45%] relative h-75 sm:h-100 md:h-150 lg:scale-110 ">
          <Image
            src={newsletterData.image}
            alt="Makeup smears"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 md:gap-8">
          {/* Zig-Zag Icon */}
          <div className="w-10 md:w-12 h-4 text-black">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight tracking-tight">
            {newsletterData.title}
          </h2>

          <p className="description">
            {newsletterData.description}
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row w-full max-w-lg mt-4 shadow-sm">
            <input
              type="email"
              placeholder="Your E-mail"
              className="grow border border-gray-300 px-6 py-3.5 text-gray-700 outline-none focus:border-black transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-10 py-4 font-bold tracking-[0.2em] text-xs hover:bg-gray-800 transition-colors uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
