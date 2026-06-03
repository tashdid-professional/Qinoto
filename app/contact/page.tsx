"use client";

import Image from "next/image";
import { getContactData, submitContactForm } from "@/src/services/api";
import { ContactData } from "@/src/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [data, setData] = useState<ContactData | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const contactData = await getContactData();
      setData(contactData);
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen font-karla  lg:pt-0 ">
        <div className="flex flex-col gap-20 lg:flex-row min-h-screen py-32">
          
          {/* Left Side: Image (Replacing Map) */}
          <div className="lg:w-1/2  flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] bg-white   ">
               <Image
                src={data.image}
                alt="Contact Us"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side: Contact Info & Form */}
          <div className="lg:w-1/2  flex flex-col justify-center bg-white px-6 md:px-12">
            <div className="max-w-md  w-full">
               {/* Zig-Zag Icon Placeholder */}
          <div className="w-12 h-4 text-black mb-3">
            <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 5 L5 0 L15 10 L25 0 L35 10 L40 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                {data.title}
              </h1>

              <p className="text-gray-500 mb-12 leading-relaxed">
                {data.description}
              </p>

              {/* Contact Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white py-4 px-6 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your E-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white py-4 px-6 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your Mobile No"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white py-4 px-6 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white py-4 px-6 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 bg-black text-white px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
