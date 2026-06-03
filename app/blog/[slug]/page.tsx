import { getBlogBySlug } from "@/src/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20 font-karla">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content Area */}
            <div className="flex-grow w-full lg:w-[75%]">
              
              {/* Image Section with Overlapping Title */}
              <div className="relative mb-12">
                <div className="relative aspect-[16/9] w-full">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Overlapping Title Block - Positioning it at the bottom left */}
                <div className="lg:absolute bottom-0 left-0 bg-white lg:-mb-8 pt-8 lg:pt-10 lg:pr-10 lg:max-w-2xl">
                   <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#999] uppercase mb-4">
                    <span>{blog.day}th {blog.month} {blog.year || '2026'}</span>
                    <span className="text-gray-300">|</span>
                    <span className="">{blog.category}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] uppercase">
                    {blog.title}
                  </h1>
                </div>
              </div>

              {/* Description Section */}
              <div className="lg:mt-16">
                <p className="description mb-8 text-justify">
                  {blog.description}
                </p>
               
              </div>
            </div>

            {/* Sidebar */}
            <BlogSidebar />
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
