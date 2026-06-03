"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getBannerData } from "@/src/services/api";
import { BannerData } from "@/src/types";
import { motion, Variants } from "framer-motion";

export default function Banner() {
  const [data, setData] = useState<BannerData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const bannerData = await getBannerData();
      setData(bannerData);
    };
    fetchData();

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!data) return null;

  const characters = data.title.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white font-karla">
      {/* Dynamic Background Image - Covers full screen */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 3, 
          ease: [0.16, 1, 0.3, 1], // Sophisticated power4-style ease
          delay: 1.4 // Starts exactly as the word "makeup" is fully visible
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src={isMobile ? data.mobileImage : data.image}
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dynamic Text */}
      <div className="relative z-10 text-center w-full lg:px-4  ">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[75px] sm:text-[120px] md:text-[180px] lg:text-[228px] font-bold leading-none select-none text-black flex justify-center flex-wrap"
        >
          {characters.map((char, index) => (
            <span key={index} className="inline-block overflow-hidden pb-1">
              <motion.span variants={childVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
