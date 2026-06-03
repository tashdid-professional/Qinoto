"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getFooterData } from "@/src/services/api";
import { FooterData } from "@/src/types";

// Custom SVG Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFooterData();
      setFooterData(data);
    };
    fetchData();
  }, []);

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "facebook": return <FacebookIcon />;
      case "instagram": return <InstagramIcon />;
      case "tiktok": return <TikTokIcon />;
      default: return null;
    }
  };

  // Prevent rendering before data is loaded to avoid layout shifts
  if (!footerData) return null;

  return (
    <footer className="font-karla bg-white mt-10">
      {/* Top Bar */}
      <div className="border-t border-b border-black py-8 md:py-10 px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-[17px] text-black tracking-tight">
            <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
          </div>

          <div className="flex items-center gap-6">
            {footerData.socialLinks.map((social) => (
              <Link key={social.name} href={social.link} className="text-black hover:opacity-60 transition-opacity">
                {getIcon(social.name)}
              </Link>
            ))}
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your E-mail"
              className="border border-black px-4 py-3 outline-none grow md:w-64 text-sm"
            />
            <button className="bg-black text-white px-5 py-3 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 md:py-20 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col justify-start">
            <h2 className="text-[24px] max-w-50 font-bold leading-tight tracking-tight">
              {footerData.Description}
            </h2>
          </div>

          {footerData.columns.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {column.links.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.link} 
                  className="text-[11px] font-bold tracking-[0.2em] transition-colors uppercase hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white py-4">
        <h1 className="text-xs tracking-widest text-center">
          © Qinoto 2026 - Powered by <a href="https://www.thebigdogdigital.com" className="hover:underline font-bold" target="_blank" rel="noopener noreferrer">BigDog Digital</a>
        </h1>
      </div>
    </footer>
  );
}