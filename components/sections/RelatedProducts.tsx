'use client';

import { RoomProduct, ROOMS_DATA } from '@/constants/data';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
interface RelatedProductsProps {
  currentProductId: number;
  category?: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Get some products from the same category or just random ones
  const allProducts = ROOMS_DATA.flatMap(room => room.products);
  const related = allProducts
    .filter(p => p.id !== currentProductId && (category ? p.category === category : true))
    .slice(0, 5);

  return (
    <div className="py-20 border-t border-gray-100">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="text-3xl font-medium text-[#1a1a1a]">You Might Also Like</h2>
        <Link href="/rooms/living-room" className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] hover:underline underline-offset-8">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {related.map((product) => (
          <Link 
            key={product.id} 
            href={`/product/${product.id}-${slugify(product.name)}`}
            className="group flex flex-col gap-4"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-gray-50 rounded-sm">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-sm text-[#1a1a1a] line-clamp-1 group-hover:underline transition-all">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#a54334]">${product.price}</span>
                {product.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
