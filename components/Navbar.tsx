"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-8 px-10 bg-transparent font-karla">
        <Link href="/" className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/images/logo.png"
            alt="Blush Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-2 cursor-pointer z-50 group"
          aria-label="Open Menu"
        >
          <div className="w-10 h-0.5 bg-black transition-all group-hover:w-8"></div>
          <div className="w-10 h-0.5 bg-black"></div>
        </button>
      </nav>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-100 bg-[#F9E4E1] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-8 px-10">
          <Link href="/" onClick={() => setIsOpen(false)} className="relative w-32 h-12">
            <Image
              src="/images/logo.png"
              alt="Blush Logo"
              fill
              className="object-contain object-left"
            />
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 cursor-pointer hover:rotate-90 transition-transform duration-300"
            aria-label="Close Menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center gap-1 ">
          {menuItems.map((item, index) => (
            <li key={item.name} className="relative py-2">
              {index === 0 && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-12 bg-white -z-10 shadow-sm"></div>
              )}
              <Link 
                href={item.path} 
                className="text-5xl  font-bold tracking-tight text-black hover:opacity-70 transition-opacity font-karla"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
