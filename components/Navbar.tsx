'use client';

import Link from 'next/link';
import { Search, MapPin, User, HelpCircle, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NAV_LINKS, NavItem } from '@/constants/data';

function NavDropdown({ item }: { item: NavItem }) {
  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className={`hover:text-[#1a1a1a] transition-colors whitespace-nowrap ${item.className || ''}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-0.5 hover:text-[#1a1a1a] transition-colors whitespace-nowrap cursor-pointer ${item.className || ''}`}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Dropdown panel */}
      <div
        className="
          absolute left-0 top-full mt-1 min-w-[200px] bg-white border border-gray-100
          shadow-xl rounded-sm opacity-0 invisible translate-y-1
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          transition-all duration-200 ease-out z-50
        "
      >
        <ul className="py-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors group/item"
              >
                <span className="text-[#1a1a1a] font-medium text-[13px] group-hover/item:text-[#c05c4b] transition-colors">
                  {child.label}
                </span>
                {child.description && (
                  <span className="text-gray-400 text-[11px] mt-0.5">{child.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f8f8] border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest text-[#1a1a1a] uppercase">
              IDASHER<span className="text-[#c05c4b]">.</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="w-full relative flex items-center">
              <Input
                type="text"
                placeholder="Search furniture & decor..."
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

        {/* Navigation Links with submenus */}
        <nav className="hidden md:flex items-center space-x-6 pb-3 text-[13px] font-medium text-[#4a4a4a] overflow-x-auto">
          {NAV_LINKS.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
