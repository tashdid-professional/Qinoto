"use client";

import { useState, useEffect } from "react";
import { getFAQData } from "@/src/services/api";
import { FAQData } from "@/src/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQPage() {
  const [data, setData] = useState<FAQData | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const fetchData = async () => {
      const faqData = await getFAQData();
      setData(faqData);
    };
    fetchData();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!data) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen font-karla bg-white">
        {/* Hero Header */}
        <section className="relative h-[350px] flex items-center overflow-hidden bg-[#F0F0F0]">
          <div className="relative z-10 pt-20 container mx-auto">
            <h1 className="text-6xl md:text-[60px] font-bold font-outfit text-black mb-4">
              FAQ
            </h1>
            <nav className="flex items-center space-x-3 text-[12px] font-bold tracking-[0.2em] text-black uppercase font-lato">
              <Link href="/" className="hover:text-[#b6713e] transition-colors">
                HOME
              </Link>
              <span className="text-[#b6713e]">♦</span>
              <span className="opacity-50">HELP CENTER</span>
            </nav>
          </div>
        </section>

        <div className="container mx-auto py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="lg:w-2/5">
            <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-black mb-10 translate-y-[-0.5rem]">
              {data.title}
            </h1>
            <div className="space-y-6">
              {data.description.map((para, i) => (
                <p key={i} className="text-gray-500 leading-relaxed text-sm">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-3/5">
            <div className="flex flex-col ">
              {data.items.map((item, index) => (
                <div key={index} className="flex flex-col">
                  {/* Question Box */}
                  <div className={`border border-black transition-colors ${openIndex === index ? 'bg-[#F8DCDB]' : 'hover:bg-[#F8DCDB]'}`}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-stretch text-left group"
                    >
                      {/* Plus Icon Box */}
                      <div className="flex-shrink-0 w-16 md:w-20 border-r border-black flex items-center justify-center bg-transparent transition-colors">
                        <div className="relative w-4 h-4">
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black -translate-y-1/2"></div>
                          <div className={`absolute top-0 left-1/2 w-0.5 h-full bg-black -translate-x-1/2 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}></div>
                        </div>
                      </div>
                      
                      {/* Question */}
                      <div className="flex-grow p-3 md:p-5 flex items-center bg-transparent transition-colors">
                        <h3 className="text-[13px] font-bold tracking-[0.15em] text-black uppercase">
                          {item.question}
                        </h3>
                      </div>
                    </button>
                  </div>

                  {/* Answer (Outside the box) */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-10 text-gray-500 text-[15px] leading-[1.8] font-lato">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
