'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingCart, ChevronDown, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './MobileMenu';
import { NAV_LINKS, NavItem } from '@/constants/data';

function NavDropdown({ item }: { item: NavItem }) {
  const hasMegaMenu = (item.columns && item.columns.length > 0) || (item.featured && item.featured.length > 0);

  if (!hasMegaMenu && (!item.children || item.children.length === 0)) {
    return (
      <Link
        href={item.href}
        className={`transition-colors whitespace-nowrap py-8 font-medium tracking-wide text-[#4a4a4a] hover:text-[#1a1a1a] ${item.className || ''}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className={`flex items-center h-full ${hasMegaMenu ? '' : 'relative'} group`}>
      <Link
        href={item.href}
        className={`flex items-center gap-1 hover:text-[#1a1a1a] transition-colors whitespace-nowrap cursor-pointer py-8 font-medium tracking-wide text-[#4a4a4a] border-b-2 border-transparent group-hover:border-[#c05c4b] ${item.className || ''}`}
      >
        {item.label}
        {!hasMegaMenu && <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />}
      </Link>

      {/* Dropdown panel */}
      <div
        className={`
          absolute left-0 top-full w-full bg-[#fcfaf7] border-t border-gray-100/50
          shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] opacity-0 invisible translate-y-1
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] z-50
          ${hasMegaMenu ? 'left-0 right-0 py-12 px-8' : 'min-w-[220px] py-3 rounded-sm bg-white border mt-1'}
        `}
      >
        {hasMegaMenu ? (
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
            {/* Left Title */}
            <div className="col-span-2">
              <h2 className="text-3xl font-serif text-[#1a1a1a] font-normal leading-tight">{item.label}</h2>
            </div>
            
            {/* Columns of Links */}
            <div className="col-span-4 grid grid-cols-2 gap-6 pt-1 border-r border-gray-200/50 pr-8">
              {item.columns?.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      className="text-[15px] text-[#4a4a4a] hover:text-[#c05c4b] transition-all font-normal w-max border-b border-transparent hover:border-[#c05c4b] pb-0.5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Featured Cards */}
            <div className="col-span-6 grid grid-cols-3 gap-6">
              {item.featured?.map((feat) => (
                <Link key={feat.label} href={feat.href} className="flex flex-col group/card">
                  <div className="aspect-4/5 overflow-hidden bg-gray-100 mb-6 rounded-sm relative">
                    <Image 
                      src={feat.image} 
                      alt={feat.label} 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover/card:scale-105" 
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1 py-4 border-t border-gray-200">
                    <span className="text-[15px] font-medium text-[#1a1a1a] tracking-tight">{feat.label}</span>
                    <ArrowRight className="h-5 w-5 text-[#1a1a1a] transition-transform duration-300 group-hover/card:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <ul className="py-2">
            {item.children?.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  className="flex flex-col px-5 py-3 hover:bg-gray-50 transition-colors group/item"
                >
                  <span className="text-[#1a1a1a] font-medium text-[14px] group-hover/item:text-[#c05c4b] transition-colors">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="text-gray-400 text-[12px] mt-1 font-normal">{child.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcfaf7]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 border-b border-gray-100/50">
        <div className="flex justify-between items-center h-24 relative">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center">
            <MobileMenu />
            <Link href="/" className="text-xl sm:text-2xl font-serif tracking-[0.1em] text-[#1a1a1a] uppercase font-light ml-2 lg:ml-0">
              IDASHER
            </Link>
          </div>

          {/* Navigation Links with submenus */}
          <nav className="hidden lg:flex items-center justify-center lg:space-x-4 xl:space-x-8 h-full text-[13px]">
            {NAV_LINKS.map((item) => (
              <div 
                key={item.label} 
                className={item.label === 'Accessories' || item.label === 'Tools' ? 'lg:hidden xl:block' : ''}
              >
                <NavDropdown item={item} />
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-0.5 text-[#4a4a4a]">
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] hover:bg-transparent scale-90"><Search className="h-6 w-6 stroke-[1.5]" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] hover:bg-transparent scale-90"><User className="h-6 w-6 stroke-[1.5]" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-[#1a1a1a] hover:bg-transparent scale-90"><Heart className="h-6 w-6 stroke-[1.5]" /></Button>
            <Button variant="ghost" size="icon" className="relative hover:text-[#1a1a1a] hover:bg-transparent scale-90">
              <ShoppingCart className="h-6 w-6 stroke-[1.5]" />
              <span className="absolute top-1 right-1 bg-[#c05c4b] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">0</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
