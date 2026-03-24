import Image from 'next/image';

export function FeatureOne() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2000&auto=format&fit=crop"
          alt="Entryway for small spaces"
          fill
          className="object-cover object-center"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-24 h-full text-white text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-sm">
          A big solution for your small spaces.
        </h2>
        <p className="text-sm md:text-base mb-8 max-w-lg font-medium drop-shadow-sm">
          Whether you&apos;re seeking simplicity, functionality or a bit of both, keep the business of the day homey, too.
        </p>
        <button className="bg-white/90 hover:bg-white text-black font-semibold tracking-wider text-xs px-8 py-3 rounded-full transition-colors uppercase">
          Shop Entryway
        </button>
      </div>
    </section>
  );
}
