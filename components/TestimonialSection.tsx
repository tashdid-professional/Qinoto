"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/public/datas/homepage";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="bg-[#FAEBE8] py-16 md:py-0 px-6 font-karla relative overflow-hidden h-auto md:min-h-[600px] flex items-center">
      <div 
        key={current}
        className="max-w-4xl mx-auto text-center flex flex-col items-center w-full animate-slide-in"
        style={{ "--slide-dir": direction } as React.CSSProperties}
      >
        {/* Profile Image */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-10">
          <div className="absolute inset-0 rounded-full border border-black/10 scale-110"></div>
          <Image
            src={testimonialsData[current].image}
            alt={testimonialsData[current].name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Testimonial Content */}
        <div className="space-y-4 md:space-y-6 min-h-[auto] md:min-h-[280px] flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-black tracking-tight leading-tight">
            {testimonialsData[current].title}
          </h2>

          <p className="text-[#545454] text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed max-w-3xl mx-auto">
            {testimonialsData[current].quote}
          </p>

          <div className="pt-2 md:pt-4">
            <h3 className="text-xl md:text-[24px] font-bold text-black">
              {testimonialsData[current].name}
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] mt-1 md:mt-2">
              {testimonialsData[current].role}
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-4 mt-16">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full border border-black transition-all ${
                current === index ? "bg-black" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 bg-white border border-gray-100 shadow-sm hover:bg-black group transition-colors"
        aria-label="Previous testimonial"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          className="group-hover:stroke-white transition-colors"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 bg-white border border-gray-100 shadow-sm hover:bg-black group transition-colors"
        aria-label="Next testimonial"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          className="group-hover:stroke-white transition-colors"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
