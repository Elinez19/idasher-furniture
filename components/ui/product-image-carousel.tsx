'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
}

export function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-4/3 w-full bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-xs">No image available</span>
      </div>
    );
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex(index);
  };

  return (
    <div className="group/carousel relative aspect-4/3 w-full overflow-hidden bg-gray-100 rounded-sm">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={img}
              alt={`${alt} - view ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover/carousel:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Visible on hover) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 hover:bg-white z-20 text-gray-800"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 hover:bg-white z-20 text-gray-800"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-20 pointer-events-none">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => goToSlide(e, idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all pointer-events-auto ${
                idx === currentIndex ? 'bg-[#1a1a1a] scale-125' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
