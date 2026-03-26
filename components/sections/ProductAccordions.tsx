'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoomProduct } from "@/constants/data";

interface ProductAccordionsProps {
  product: RoomProduct;
}

export default function ProductAccordions({ product }: ProductAccordionsProps) {
  return (
    <div className="w-full border-t border-gray-200 mt-12">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="description" className="border-b border-gray-200">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest py-6 hover:no-underline hover:text-gray-600 transition-colors">
            Description
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-8">
            <p>
              The {product.name} is a masterpiece of {product.style || 'modern'} design, combining superior comfort with clean, sophisticated lines. 
              Upholstered in premium {product.material || 'materials'}, it features a durable frame and high-resiliency foam cushions for a seating experience that lasts.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>Sturdy wood frame with reinforced corners</li>
              <li>Hand-tufted detailing for a classic look</li>
              <li>Reversible seat and back cushions</li>
              <li>Solid wood legs with a natural finish</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features" className="border-b border-gray-200">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest py-6 hover:no-underline hover:text-gray-600 transition-colors">
            Features
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="font-bold text-[#1a1a1a] block">Tufted Detailing</span>
                <p>Meticulously hand-tufted for a refined, tailored aesthetic that adds texture to any room.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#1a1a1a] block">Solid Wood Legs</span>
                <p>Natural wood legs provide a warm accent and exceptionally stable support.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#1a1a1a] block">High-Density Foam</span>
                <p>Cushioned with premium high-resiliency foam for the perfect balance of softness and support.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#1a1a1a] block">Versatile Style</span>
                <p>A timeless design that seamlessly integrates into mid-century, scandinavian, or contemporary interiors.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="specifications" className="border-b border-gray-200">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest py-6 hover:no-underline hover:text-gray-600 transition-colors">
            Specifications
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-gray-400">Width</span>
                <p className="text-lg font-medium text-[#1a1a1a]">88&quot;</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-gray-400">Depth</span>
                <p className="text-lg font-medium text-[#1a1a1a]">38&quot;</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-gray-400">Height</span>
                <p className="text-lg font-medium text-[#1a1a1a]">34&quot;</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-gray-400">Seating Capacity</span>
                <p className="text-lg font-medium text-[#1a1a1a]">3</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="care" className="border-b border-gray-200">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest py-6 hover:no-underline hover:text-gray-600 transition-colors">
            Care & Assembly
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="font-bold text-[#1a1a1a]">Care Instructions</span>
                <p>Vacuum regularly with a soft brush attachment. Avoid direct sunlight which can cause fading. Blot spills immediately with a clean, dry cloth.</p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-[#1a1a1a]">Assembly</span>
                <p>Simple assembly required. Just attach the legs! All tools and hardware included. Estimated time: 15 minutes.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
