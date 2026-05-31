"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 flex items-center p-6 md:p-8 px-6 md:px-10 transition-all duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${lastScrollY > 100 ? "bg-white/95 backdrop-blur-md shadow-sm py-4 md:py-6" : "bg-transparent"}
        ${ lastScrollY <= 100 ? "absolute" : "fixed"}
      `}>
        <div className="w-full flex items-center">
          {/* Logo Area */}
          <div className="flex-1">
            <Link href="/" className="relative inline-block w-24 md:w-32 h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-300 text-left">
              <Image
                src="/images/logo.png"
                alt="Blush Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>

          {/* New Horizontal Menu - Centered */}
          <div className={`hidden lg:flex items-center gap-10 transition-opacity duration-300 ${ lastScrollY <= 100 ? "opacity-0 invisible" : "opacity-100 visible"}`}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-colors relative group py-2
                  ${pathname === item.path ? "text-black" : "text-black/60 hover:text-black"}
                `}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transition-transform duration-300 origin-left
                  ${pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `} />
              </Link>
            ))}
          </div>
          
          {/* Action Area (Hamburger) */}
          <div className="flex-1 flex justify-end">
            <button 
              onClick={() => setIsOpen(true)}
              className={`flex flex-col gap-1.5 md:gap-2 cursor-pointer z-50 group ${ lastScrollY > 100 ? "lg:hidden" : ""}`}
              aria-label="Open Menu"
            >
              <div className="w-8 md:w-10 h-0.5 bg-black transition-all group-hover:w-8"></div>
              <div className="w-8 md:w-10 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-100 bg-[#F9E4E1] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 md:p-8 px-6 md:px-10">
          <Link href="/" onClick={() => setIsOpen(false)} className="relative w-24 md:w-32 h-10 md:h-12">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 md:w-8 md:h-8">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center gap-1 ">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <li key={item.name} className="relative py-2">
                {isActive && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-12 bg-white -z-10 shadow-sm transition-all duration-300"></div>
                )}
                <Link 
                  href={item.path} 
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all font-karla ${
                    isActive ? "text-black" : "text-black/40 hover:text-black"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
