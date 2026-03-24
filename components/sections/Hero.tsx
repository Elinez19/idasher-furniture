import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-[#1a1a1a]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="adasher-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 tracking-tight drop-shadow-sm">
          We&apos;ve got a chair for that.
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-2xl font-medium drop-shadow-sm text-gray-100">
          Whatever you choose to sit—or not sit—on, now—there&apos;s a seat for you.
        </p>
        <Button className="bg-white hover:bg-gray-100 text-black font-semibold tracking-wider text-xs px-8 h-12 rounded-full transition-colors uppercase shadow-md">
          Shop Upholstered Seating
        </Button>
      </div>
    </section>
  );
}
