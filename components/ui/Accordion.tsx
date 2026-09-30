'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = ''
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map(item => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white border border-[#E7E4DE] rounded-lg overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-[#111111] hover:text-[#087F78] transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#77736C] transition-transform duration-200 shrink-0 ml-3 ${
                  isOpen ? 'rotate-180 text-[#087F78]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#77736C] leading-relaxed border-t border-[#E7E4DE]/60 pt-3">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
