'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, User, Heart } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden -ml-2 hover:bg-transparent">
          <Menu className="h-6 w-6 stroke-[1.5]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 bg-[#fcfaf7] border-r-0">
        <SheetHeader className="p-6 border-b border-gray-100">
          <SheetTitle className="text-xl font-serif tracking-widest text-left uppercase">
            IDASHER
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            <Accordion type="single" collapsible className="w-full px-6">
              {NAV_LINKS.map((item) => {
                const hasSubmenu = (item.columns && item.columns.length > 0) || 
                                 (item.children && item.children.length > 0);

                if (!hasSubmenu) {
                  return (
                    <div key={item.label} className="border-b border-gray-100/50">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex py-4 text-[15px] font-medium tracking-wide text-[#4a4a4a] hover:text-[#c05c4b] transition-colors",
                          item.className
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }

                return (
                  <AccordionItem key={item.label} value={item.label} className="border-b border-gray-100/50">
                    <AccordionTrigger className="py-4 text-[15px] font-medium tracking-wide text-[#4a4a4a] hover:no-underline hover:text-[#c05c4b]">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="flex flex-col gap-3 pl-4 border-l border-gray-100 ml-1">
                        <Link
                          href={item.href}
                          className="text-[14px] font-semibold text-[#1a1a1a] hover:text-[#c05c4b] transition-colors mb-1"
                          onClick={() => setOpen(false)}
                        >
                          Shop All {item.label}
                        </Link>
                        {item.columns?.map((column, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            {column.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="text-[14px] text-[#767676] hover:text-[#c05c4b] transition-colors"
                                onClick={() => setOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="text-[14px] text-[#767676] hover:text-[#c05c4b] transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Bottom Actions */}
          <div className="p-6 bg-white border-t border-gray-100 mt-auto">
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 text-[14px] text-[#4a4a4a]"
                onClick={() => setOpen(false)}
              >
                <User className="h-5 w-5 stroke-[1.5]" />
                Account
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 text-[14px] text-[#4a4a4a]"
                onClick={() => setOpen(false)}
              >
                <Heart className="h-5 w-5 stroke-[1.5]" />
                Favorites
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
