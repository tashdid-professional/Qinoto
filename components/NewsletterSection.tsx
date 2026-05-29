import Image from "next/image";
import { newsletterData } from "@/public/datas/homepage";

export default function NewsletterSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 font-karla overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Large Image */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] lg:scale-110 lg:-ml-12">
          <Image
            src={newsletterData.image}
            alt="Makeup smears"
            fill
            className="object-cover rounded-r-[4rem] shadow-2xl"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Zig-Zag Icon */}
          <div className="w-12 h-4 text-black">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="title">
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
              className="flex-grow border border-gray-300 px-6 py-3.5 text-gray-700 outline-none focus:border-black transition-colors text-sm"
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
