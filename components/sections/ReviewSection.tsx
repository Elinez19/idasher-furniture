'use client';

import { StarRating } from '@/components/ui/star-rating';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { RoomProduct } from '@/constants/data';

interface ReviewSectionProps {
  product: RoomProduct;
}

const MOCK_REVIEWS = [
  {
    id: 1,
    user: "Sarah M.",
    date: "March 15, 2026",
    rating: 5,
    title: "Absolutely stunning and comfortable!",
    content: "I was hesitant to buy a sofa online, but the Sven exceeded all my expectations. The color is even more beautiful in person, and it feels high-quality. Assembly was a breeze—just attached the legs!",
    images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=300&auto=format&fit=crop"],
    verified: true
  },
  {
    id: 2,
    user: "David L.",
    date: "February 28, 2026",
    rating: 4,
    title: "Great style, slightly firm",
    content: "Love the look of this piece in our living room. It's a bit firmer than I expected, but still very comfortable for lounging. The fabric seems durable and easy to clean.",
    images: [],
    verified: true
  },
  {
    id: 3,
    user: "Emily R.",
    date: "January 12, 2026",
    rating: 5,
    title: "Perfect addition to my apartment",
    content: "The proportions are perfect for my smaller space. It feels very sturdy and the cushions hold their shape well. Highly recommend!",
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=300&auto=format&fit=crop"],
    verified: true
  }
];

export default function ReviewSection({ product }: ReviewSectionProps) {
  return (
    <div className="py-20 border-t border-gray-100">
      {/* Review Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-medium text-[#1a1a1a]">{product.reviewCount} Reviews</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <StarRating rating={product.rating || 0} size={24} />
              <span className="text-2xl font-bold ml-2">{product.rating}</span>
            </div>
            <div className="flex gap-4 text-sm font-medium text-gray-500">
              <button className="underline underline-offset-4 hover:text-[#1a1a1a] transition-colors">Write a Review</button>
              <button className="underline underline-offset-4 hover:text-[#1a1a1a] transition-colors">Review Policy</button>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-sm border-gray-200">Filter Reviews</Button>
          <Button variant="outline" className="rounded-sm border-gray-200">Sort: Newest</Button>
        </div>
      </div>

      {/* Reviews Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {MOCK_REVIEWS.map((review) => (
          <div key={review.id} className="space-y-5 flex flex-col h-full">
            <div className="space-y-2">
              <StarRating rating={review.rating} size={16} />
              <h3 className="font-bold text-[#1a1a1a] leading-tight">{review.title}</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm grow">
              {review.content}
            </p>

            {review.images.length > 0 && (
              <div className="flex gap-3 pt-2">
                {review.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square w-24 overflow-hidden rounded-sm cursor-zoom-in">
                    <Image src={img} alt="Review photo" fill className="object-cover" sizes="100px" />
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-sm block">{review.user}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              {review.verified && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-sm">
                  Verified Buyer
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button variant="outline" className="rounded-full px-12 py-6 border-[#a54334] text-[#a54334] font-bold hover:bg-[#a54334] hover:text-white transition-all duration-300">
          READ MORE REVIEWS
        </Button>
      </div>
    </div>
  );
}
