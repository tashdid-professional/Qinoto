"use client";

import { useState } from "react";
import { faqData } from "@/public/datas/faq";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen font-karla pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="lg:w-2/5">
            <h1 className="text-4xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-black mb-10 translate-y-[-0.5rem]">
              {faqData.title}
            </h1>
            <div className="space-y-6">
              {faqData.description.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-[1.05rem]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-3/5">
            <div className="border border-black">
              {faqData.items.map((item, index) => (
                <div key={index} className={`border-b border-black last:border-b-0`}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-stretch text-left group"
                  >
                    {/* Plus Icon Box */}
                    <div className="flex-shrink-0 w-16 md:w-20 border-r border-black flex items-center justify-center bg-transparent group-hover:bg-gray-50 transition-colors">
                      <div className="relative w-4 h-4">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black -translate-y-1/2"></div>
                        <div className={`absolute top-0 left-1/2 w-0.5 h-full bg-black -translate-x-1/2 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}></div>
                      </div>
                    </div>
                    
                    {/* Question */}
                    <div className="flex-grow p-6 md:p-8 flex items-center bg-transparent group-hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm md:text-base font-bold tracking-[0.15em] text-black uppercase">
                        {item.question}
                      </h3>
                    </div>
                  </button>

                  {/* Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-8 pt-0 pl-24 md:pl-28 text-gray-600 leading-relaxed">
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
