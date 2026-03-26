'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function FilterAccordion({
  title,
  children,
  defaultOpen = true,
}: FilterAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider hover:text-[#c05c4b] transition-colors"
      >
        {title}
        {open ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}
