"use client";

import { useState, useEffect } from "react";
import { MOCK_PHOTOS as photos } from "@/data/mockData";

interface PhotoGridProps {
  category: string;
}

export default function PhotoGrid({ category }: PhotoGridProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getFilteredPhotos = () => {
    if (category === "All") {
      if (!isClient) return photos;
      return [...photos].sort(() => Math.random() - 0.5);
    }
    return photos.filter((photo) => photo.category.toLowerCase() === category.toLowerCase());
  };

  const filteredPhotos = getFilteredPhotos();

  return (
    <section className="px-6 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="relative group overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
            <img 
              src={photo.url} 
              alt={photo.title || "Photo"} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}