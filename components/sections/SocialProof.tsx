import Image from 'next/image';
import { Camera } from 'lucide-react';

const posts = [
  { img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop', user: 'Photo by @jessicahal' },
  { img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop', user: 'Photo by @smithmodernhomes' },
  { img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop', user: 'Photo by @rileyinterior' },
];

export function SocialProof() {
  return (
    <section className="py-16 pb-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2 tracking-tight">Great style in the wild.</h2>
      <p className="text-sm text-gray-600 mb-10 font-medium tracking-tight">
        Looking for style? Check out how our customers style their Article pieces. <a href="#" className="font-semibold text-red-500 hover:underline hover:text-red-700">See more.</a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <div key={i} className="flex flex-col">
            <div className="relative w-full aspect-square mb-3 bg-gray-100 group cursor-pointer overflow-hidden">
              <Image
                src={post.img}
                alt="Customer photo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 p-1.5 rounded-full shadow-sm text-black">
                <Camera className="h-4 w-4" />
              </div>
            </div>
            <span className="text-xs text-gray-500 font-medium tracking-wide">{post.user}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
