"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      
      {selectedCategory === "All" && <Hero />}

      <PhotoGrid category={selectedCategory} />
      <Subscribe />
      
      <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-100">
        &copy; {new Date().getFullYear()} Unsplash Clone. Replicated with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}