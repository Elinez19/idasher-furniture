'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Share2, Printer } from 'lucide-react'
import { ROOMS_DATA, RoomProduct } from '@/constants/data'
import ProductGallery from '@/components/sections/ProductGallery'
import ProductInfo from '@/components/sections/ProductInfo'
import ProductAccordions from '@/components/sections/ProductAccordions'
import ReviewSection from '@/components/sections/ReviewSection'
import RelatedProducts from '@/components/sections/RelatedProducts'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ProductPage() {
  const params = useParams()
  const id = params?.id ? parseInt(params.id as string) : null

  if (!id) return notFound()

  // Find product in ROOMS_DATA
  let product: RoomProduct | undefined
  let foundRoom = ''

  for (const room of ROOMS_DATA) {
    product = room.products.find((p) => p.id === id)
    if (product) {
      foundRoom = room.name
      break
    }
  }

  if (!product) return notFound()

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner/Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <nav className="flex items-center text-gray-400 text-[13px] gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/rooms/${foundRoom.toLowerCase().replace(' ', '-')}`} className="hover:text-[#1a1a1a] transition-colors">{foundRoom}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#1a1a1a] font-medium truncate">{product.name}</span>
          </nav>
          
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            <button className="flex items-center gap-2 hover:text-[#1a1a1a] transition-colors">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button className="flex items-center gap-2 hover:text-[#1a1a1a] transition-colors">
              <Printer className="h-4 w-4" /> Print
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ProductGallery 
              images={product.images || [product.image]} 
              alt={product.name} 
            />
          </div>

          {/* Right: Info & Actions */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24 self-start">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Accordions Section */}
        <div className="mt-20 lg:mt-32 max-w-4xl">
          <ProductAccordions product={product} />
        </div>

        {/* Social Proof Placeholder (article features UGC images) */}
        <div className="mt-24 space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium text-[#1a1a1a]">Sven, in our customers&apos; homes.</h2>
            <p className="text-gray-500">Discover real products in real spaces. Pick up some style inspiration.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square md:aspect-4/3 overflow-hidden rounded-sm hover:brightness-95 transition-all">
              <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square md:aspect-4/3 overflow-hidden rounded-sm hover:brightness-95 transition-all">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square md:aspect-4/3 overflow-hidden rounded-sm hover:brightness-95 transition-all hidden md:block">
              <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>

        {/* Reviews Section */}
        <div className="mt-24 pb-24">
          <ReviewSection product={product} />
        </div>

        {/* Why Buy Section */}
        <div className="py-20 border-t border-gray-100 flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          <div className="space-y-4 max-w-xs">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <span className="text-2xl">🛋️</span>
            </div>
            <h3 className="font-bold text-[#1a1a1a]">Modern Furniture at Fair Prices</h3>
            <p className="text-sm text-gray-500 leading-relaxed">By cutting out the middlemen and focusing on quality, we offer stunning designs at prices that make sense.</p>
            <button className="text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-gray-400">Learn More</button>
          </div>
          <div className="space-y-4 max-w-xs">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-bold text-[#1a1a1a]">30-Day Satisfaction Guarantee</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Try it out in your home for 30 days. If you&apos;re not completely in love, we&apos;ll pick it up and refund your money.</p>
            <button className="text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-gray-400">Learn More</button>
          </div>
          <div className="space-y-4 max-w-xs">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-bold text-[#1a1a1a]">We&apos;re Here To Help</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Our world-class customer service team is ready to assist you via chat, phone, or email. Your happiness is our priority.</p>
            <button className="text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-gray-400">Contact Us</button>
          </div>
        </div>
      </main>
    </div>
  )
}
