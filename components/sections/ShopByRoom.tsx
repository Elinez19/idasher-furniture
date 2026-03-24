import Image from 'next/image';
import { ROOMS_DATA } from '@/constants/data';

export function ShopByRoom() {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-10 tracking-tight">Shop By Room</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {ROOMS_DATA.map((room) => (
          <article key={room.name} className="group cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden mb-3 bg-gray-100">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 group-hover:underline">{room.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
