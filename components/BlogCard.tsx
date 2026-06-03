import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/src/types";
import { useState } from "react";

export default function BlogCard({ blog }: { blog: Blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const url = `${window.location.origin}/blog/${blog.slug}`;
    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="border border-black flex flex-col h-full font-karla">
      {/* Blog Image */}
      <div className="relative aspect-[16/9] w-full border-b border-black">
        <Image 
          src={blog.image} 
          alt={blog.title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow gap-4">
        <h2 className="text-2xl font-bold leading-tight uppercase">
          {blog.title}
        </h2>
        
        {/* Zig-Zag Icon */}
        <div className="w-12 h-4 text-black">
          <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="description text-[15px] line-clamp-3">
          {blog.excerpt}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-black flex items-center h-12 uppercase text-[12px] font-bold tracking-widest px-8">
        <div className="flex-grow">
          {blog.day}th {blog.month} {blog.year || '2026'}
        </div>
        <div className="w-px h-full bg-black"></div>
        <button 
          onClick={handleShare}
          className="pl-8 flex items-center gap-2 hover:opacity-70 transition-opacity relative z-10"
        >
          {copied ? "COPIED!" : "SHARE"}
        </button>
      </div>

      {/* Hidden Link for full card clickability */}
      <Link href={`/blog/${blog.slug}`} className="absolute inset-0 z-0"></Link>
    </div>
  );
}
