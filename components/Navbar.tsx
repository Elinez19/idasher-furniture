import Link from 'next/link';
import { Search, MapPin, User, HelpCircle, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NAV_LINKS } from '@/constants/data';

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
            <div className="w-full relative flex items-center">
              <Input
                type="text"
                placeholder="Search decorative items..."
                className="w-full bg-white border-gray-300 py-2 px-4 pr-10 text-sm focus-visible:ring-1 focus-visible:ring-[#1a1a1a] h-10"
              />
              <Button variant="ghost" size="icon" className="absolute right-1 text-gray-500 hover:text-[#1a1a1a] hover:bg-transparent h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-1 text-gray-700">
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] hidden sm:flex transition-colors"><MapPin className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] transition-colors"><User className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] hidden sm:flex transition-colors"><HelpCircle className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] relative transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-[#c05c4b] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">0</span>
            </Button>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 pb-3 text-[13px] font-medium text-[#4a4a4a]">
          {NAV_LINKS.map(link => (
            <Link key={link.label} href={link.href} className={`hover:text-[#1a1a1a] transition-colors ${link.className || ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
