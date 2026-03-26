'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square w-full bg-gray-100 flex items-center justify-center rounded-lg">
        <span className="text-gray-400 text-sm">No image available</span>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewport */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#f9f9f9] rounded-sm group cursor-zoom-in">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - view ${currentIndex + 1}`}
          fill
          className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-[#1a1a1a]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-[#1a1a1a]" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-sm border-2 transition-all duration-200",
                currentIndex === idx 
                  ? "border-[#1a1a1a] opacity-100" 
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
