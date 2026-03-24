import Image from 'next/image';

const products = [
  { name: 'Sven Yt... Tufted Velvet Sofa - Plush Pacific/Green', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop' },
  { name: 'Lucia Washable Dining Chair - Black', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=400&auto=format&fit=crop' },
  { name: 'Timber 90" Leather Sofa - Charme Tan', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bria Upholstered Bed Frame - Queen', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ceni 66" Loveseat - Denim Blue', image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=400&auto=format&fit=crop' },
  { name: 'Lenia 6-Drawer Double Dresser - Walnut', image: 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=400&auto=format&fit=crop' },
];

export function TopSellers() {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-10 tracking-tight">Shop Top Sellers</h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-10">
        {products.map((product, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative w-full aspect-square mb-4 bg-gray-100 overflow-hidden mix-blend-multiply">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm"
              />
            </div>
            <h3 className="text-xs text-gray-800 leading-relaxed font-medium group-hover:underline pr-2">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
