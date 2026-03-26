'use client';

import { useState } from 'react';
import { StarRating } from '@/components/ui/star-rating';
import { Button } from '@/components/ui/button';
import { Heart, Truck, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RoomProduct } from '@/constants/data';

interface ProductInfoProps {
  product: RoomProduct;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [selectedMaterial, setSelectedMaterial] = useState(product.material || 'Velvet');

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Title & Badge */}
      <div className="space-y-2">
        {product.badge && (
          <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#a54334] text-white rounded-sm">
            {product.badge}
          </span>
        )}
        <h1 className="text-3xl font-medium tracking-tight text-[#1a1a1a] leading-tight">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating || 0} size={16} />
            <span className="text-sm text-gray-500 font-medium">({product.reviewCount})</span>
          </div>
          <span className="h-4 w-px bg-gray-300" />
          <button className="text-sm font-medium text-[#1a1a1a] underline underline-offset-4 hover:text-gray-600 transition-colors">
            Read Reviews
          </button>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-[#a54334]">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            <span className="text-sm font-bold text-[#a54334]">Save {discount}%</span>
          </>
        )}
      </div>

      <div className="h-[1px] bg-gray-200" />

      {/* Configuration Options */}
      <div className="space-y-6">
        {/* Material Selection */}
        {product.category?.includes('Sofas') && (
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">Material: <span className="font-medium text-gray-600 normal-case ml-1">{selectedMaterial}</span></span>
            </div>
            <div className="flex gap-2">
              {['Velvet', 'Fabric', 'Leather'].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium border rounded-sm transition-all duration-200",
                    selectedMaterial === mat 
                      ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" 
                      : "border-gray-200 text-gray-600 hover:border-gray-400"
                  )}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="space-y-3">
            <span className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">Color: <span className="font-medium text-gray-600 normal-case ml-1">{selectedColor}</span></span>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 p-0.5 transition-all duration-200 ring-offset-2",
                    selectedColor === color.name ? "border-[#1a1a1a] ring-1 ring-[#1a1a1a]" : "border-transparent hover:border-gray-300"
                  )}
                >
                  <div 
                    className="w-full h-full rounded-full shadow-inner" 
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-4">
        <div className="flex gap-3">
          <Button className="flex-1 h-14 bg-[#f8655e] hover:bg-[#e05a54] text-white text-lg font-bold rounded-sm border-none shadow-lg shadow-[#f8655e]/20 transition-all duration-300 transform hover:translate-y-[-2px]">
            ADD TO CART
          </Button>
          <Button variant="outline" className="h-14 w-14 border-gray-200 hover:border-gray-400 rounded-sm">
            <Heart className="h-6 w-6 text-gray-400" />
          </Button>
        </div>
        
        <p className="text-xs text-center text-gray-500 mt-2">
          Delivered by <span className="font-bold text-[#1a1a1a]">Mon, Apr 20 - Wed, Apr 22</span>
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 gap-4 pt-4">
        <div className="flex items-center gap-3 text-[13px] text-gray-600">
          <Truck className="h-5 w-5 text-gray-400 shrink-0" />
          <span>Estimated delivery to <span className="font-bold text-[#1a1a1a]">90210</span></span>
        </div>
        <div className="flex items-center gap-3 text-[13px] text-gray-600">
          <RotateCcw className="h-5 w-5 text-gray-400 shrink-0" />
          <span>30-day satisfaction guarantee</span>
        </div>
      </div>
    </div>
  );
}
