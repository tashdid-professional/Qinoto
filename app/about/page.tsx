import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import About1 from "@/components/About1";
import About2 from "@/components/About2";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

     <About1/>
     <About2/>
     

      <Footer />
      <ScrollToTop />
    </main>
  );
}
