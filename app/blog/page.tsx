"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { getBlogs } from "@/src/services/api";
import { Blog } from "@/src/types";

function BlogGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchData();
  }, []);

  const filteredBlogs = blogs.filter((blog) => 
    blog.title.toLowerCase().includes(search) || 
    blog.excerpt.toLowerCase().includes(search) ||
    blog.category.toLowerCase().includes(search)
  );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="flex-grow lg:w-[75%]">
      {currentBlogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="relative">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16 font-karla">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 border border-black flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 border border-black flex items-center justify-center font-bold text-xs transition-colors ${
                      currentPage === page ? "bg-black text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 border border-black flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold font-karla">No results found for "{search}"</h2>
          <p className="mt-4 text-gray-500">Try searching with different keywords.</p>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <Suspense fallback={<div className="flex-grow w-[75%]">Loading...</div>}>
              <BlogGrid />
            </Suspense>

            {/* Sidebar */}
            <BlogSidebar />
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
