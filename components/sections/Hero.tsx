import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop"
          alt="Leather Chair"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 tracking-tight drop-shadow-sm">
          We&apos;ve got a chair for that.
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-2xl font-medium drop-shadow-sm">
          Whatever you choose to sit—or not sit—on, now—there&apos;s a seat for you.
        </p>
        <button className="bg-white/90 hover:bg-white text-black font-semibold tracking-wider text-xs px-8 py-3 rounded-full transition-colors uppercase">
          Shop Upholstered Seating
        </button>
      </div>
    </section>
  );
}
