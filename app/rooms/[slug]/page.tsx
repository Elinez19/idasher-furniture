import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ROOMS_DATA } from '@/constants/data';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import ProductGridClient from '@/components/ProductGridClient';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ROOMS_DATA.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: `${room.name} Furniture | Idasher`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);
  if (!room) notFound();

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      {/* Breadcrumb + title bar (no hero image – matches Article layout) */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-gray-400 text-sm gap-1 mb-2">
            <Link href="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#1a1a1a] font-medium">{room.name}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">{room.name}</h1>
          <p className="text-gray-500 text-sm mt-1 max-w-2xl">{room.description}</p>
        </div>
      </div>

      {/* Hero image strip */}
      <div className="relative h-40 md:h-52 w-full overflow-hidden">
        <Image
          src={room.hero}
          alt={room.name}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Interactive product listing with sidebar */}
      <div className="mt-6">
        <ProductGridClient products={room.products} roomName={room.name} />
      </div>
    </div>
  );
}
