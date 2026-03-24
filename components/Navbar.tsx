import Link from 'next/link';
import { Search, MapPin, User, HelpCircle, ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f8f8] border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest text-[#1a1a1a] uppercase">
              ARTICLE<span className="text-[#c05c4b]">.</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search decorative items..."
                className="w-full bg-white border border-gray-300 rounded-sm py-2 px-4 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#1a1a1a] transition-all"
              />
              <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-[#1a1a1a]">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 text-gray-700">
            <button className="hover:text-[#1a1a1a] hidden sm:block transition-colors"><MapPin className="h-5 w-5" /></button>
            <button className="hover:text-[#1a1a1a] transition-colors"><User className="h-5 w-5" /></button>
            <button className="hover:text-[#1a1a1a] hidden sm:block transition-colors"><HelpCircle className="h-5 w-5" /></button>
            <button className="hover:text-[#1a1a1a] relative transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-2 bg-[#c05c4b] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </button>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 pb-3 text-[13px] font-medium text-[#4a4a4a]">
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Rooms</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Products</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Outdoor</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Decor</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Furniture Collections</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Best Sellers</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">New Arrivals</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Bundles</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Ideas & Inspiration</Link>
          <Link href="#" className="hover:text-[#1a1a1a] transition-colors">Article Pro</Link>
          <Link href="#" className="text-[#a54334] hover:text-[#8a382c] transition-colors">Sale</Link>
        </nav>
      </div>
    </header>
  );
}
