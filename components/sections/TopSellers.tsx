import Link from 'next/link';
import { ProductImageCarousel } from '@/components/ui/product-image-carousel';
import { TOP_SELLERS_DATA } from '@/constants/data';

export function TopSellers() {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-10 tracking-tight">Shop Top Sellers</h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-10">
        {TOP_SELLERS_DATA.map((product, i) => (
          <article key={i} className="group">
            <Link href={product.link} className="block">
              <div className="relative w-full aspect-square mb-4 bg-gray-100 overflow-hidden mix-blend-multiply">
                <ProductImageCarousel 
                  images={product.images || [product.image]} 
                  alt={product.name} 
                />
              </div>
              <h3 className="text-xs text-gray-800 leading-relaxed font-medium group-hover:underline pr-2">{product.name}</h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
