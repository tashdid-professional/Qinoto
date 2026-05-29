"use client"
import Image from "next/image";

import { blogs } from "@/public/datas/blogs";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogSidebar() {
  const latestPosts = blogs.slice(0, 3);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <aside className="w-[25%]  flex flex-col gap-12 font-karla">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative border border-black p-4 flex items-center justify-between">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3">
          <div className="w-px h-6 bg-gray-300"></div>
          <button type="submit" className="flex items-center justify-center">
            <svg className="w-4 h-4 text-black hover:opacity-60 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* About Me Section */}
      <div>
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-1">About Me</h3>
        <div className="w-full h-px bg-black mb-6"></div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed.
        </p>
      </div>

      {/* Latest Posts Section */}
      <div>
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-1">Latest Posts</h3>
        <div className="w-full h-px bg-black mb-6"></div>
        <div className="flex flex-col gap-6">
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="flex gap-4 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  {post.day}th {post.month} 2026
                </span>
                <h4 className="text-sm font-bold leading-tight group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      
    </aside>
  );
}
