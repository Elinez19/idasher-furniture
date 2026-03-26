import NextImage from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FeatureGrid() {
  return (
    <section className="py-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <article className="relative w-full aspect-4/3 group overflow-hidden">
          <NextImage
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop"
            alt="Living room with orange couch"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 top-[20%] flex flex-col items-center justify-center text-center px-6 text-white text-shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">Everybody wants these.</h3>
            <p className="text-sm font-medium mb-6 drop-shadow-md">If you have it, they are asking to sit in the empty space in our warehouse.</p>
            <Link href="/rooms/living-room" passHref legacyBehavior>
              <Button asChild className="bg-white hover:bg-gray-100 text-black font-semibold text-xs px-8 h-12 rounded-full transition-colors uppercase tracking-widest shadow-md">
                <span>Shop Best Sellers</span>
              </Button>
            </Link>
          </div>
        </article>

        {/* Right Card */}
        <article className="relative w-full aspect-4/3 group overflow-hidden">
          <NextImage
            src="https://images.unsplash.com/photo-1532372481358-1a48c5e933d1?q=80&w=1000&auto=format&fit=crop"
            alt="Side tables"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 top-[20%] flex flex-col items-center justify-center text-center px-6 text-white text-shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">Put it all on the table.</h3>
            <p className="text-sm font-medium mb-6 drop-shadow-md">We focus on look good and hold your things.</p>
            <Link href="/rooms/living-room" passHref legacyBehavior>
              <Button asChild className="bg-white hover:bg-gray-100 text-black font-semibold text-xs px-8 h-12 rounded-full transition-colors uppercase tracking-widest shadow-md">
                <span>Shop Side Tables</span>
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
