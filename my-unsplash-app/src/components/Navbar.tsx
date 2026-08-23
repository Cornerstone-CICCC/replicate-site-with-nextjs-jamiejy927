"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";

interface NavbarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Navbar({ selectedCategory, onSelectCategory }: NavbarProps) {
  const categories = ["All", "Animals", "Nature", "Wallpapers", "Architecture", "Travel", "People"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-6 flex-1">
          <Link href="/" onClick={() => onSelectCategory("All")} className="flex items-center space-x-2 cursor-pointer">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 9V5H14V9H17L12 14L7 9H10ZM5 18H19V20H5V18Z" />
            </svg>
            <span className="font-bold text-xl tracking-tight text-black">Unsplash</span>
          </Link>

          <div className="relative flex-1 max-w-4xl bg-gray-100 rounded-full px-4 py-2.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-black transition">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search photos and illustrations"
              className="w-full pl-8 pr-4 bg-transparent text-sm outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <span className="cursor-pointer hover:text-black transition">Get Unsplash+</span>
          <span className="cursor-pointer hover:text-black transition">Log in</span>
          <button className="px-4 py-2 text-black bg-white border border-gray-300 rounded hover:border-black transition">
            Submit an image
          </button>
        </div>

        <button className="lg:hidden p-2 text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex items-center px-6 space-x-8 overflow-x-auto text-sm text-gray-600 border-t border-gray-100 whitespace-nowrap scrollbar-hide">
        {categories.map((cat, idx) => {
          const isSelected = selectedCategory === cat;
          return (
            <span 
              key={idx} 
              onClick={() => onSelectCategory(cat)}
              className={`py-3 cursor-pointer transition ${
                isSelected 
                  ? "font-semibold text-black border-b-2 border-black" 
                  : "hover:text-black"
              }`}
            >
              {cat}
            </span>
          );
        })}
      </nav>
    </header>
  );
}