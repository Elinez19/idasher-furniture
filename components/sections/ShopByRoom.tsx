import Image from 'next/image';

const rooms = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400&auto=format&fit=crop' },
  { name: 'Outdoor', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dining Room & Kitchen', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop' },
  { name: 'Home Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=400&auto=format&fit=crop' },
];

export function ShopByRoom() {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-10 tracking-tight">Shop By Room</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {rooms.map((room) => (
          <div key={room.name} className="group cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden mb-3 bg-gray-100">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 group-hover:underline">{room.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
