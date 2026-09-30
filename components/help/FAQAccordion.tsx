'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, Search, X, HelpCircle, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/help-data';
import { HelpCategoryType, FAQItem } from '@/types/help';

export const FAQAccordion: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as HelpCategoryType | null;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    'All',
    'Getting Started',
    'Accounts',
    'Trading',
    'Markets',
    'Platforms',
    'Fees',
    'Security'
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredFaqs.forEach(f => {
      allOpen[f.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  return (
    <div>
      {/* Category Tabs & Search Controls */}
      <div className="mb-8 space-y-4 pb-6 border-b border-[#E7E4DE]">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#181818] text-white shadow-xs font-semibold'
                    : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search 50+ questions & topics..."
              className="w-full bg-white border border-[#E7E4DE] rounded-lg pl-9 pr-8 py-2 text-xs text-[#111111] placeholder:text-[#77736C] focus:outline-none focus:border-[#087F78] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77736C] hover:text-[#111111]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Controls & Result Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-[#77736C] pt-2">
          <div>
            Showing <span className="font-semibold text-[#111111]">{filteredFaqs.length}</span> questions in{' '}
            <span className="text-[#087F78] font-bold">{selectedCategory}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-[#087F78] hover:underline cursor-pointer"
            >
              Expand All
            </button>
            <span>·</span>
            <button
              onClick={collapseAll}
              className="text-[#77736C] hover:underline cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Questions List */}
      {filteredFaqs.length > 0 ? (
        <div className="space-y-3 mb-16">
          {filteredFaqs.map(faq => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden bg-white ${
                  isOpen
                    ? 'border-[#087F78] shadow-xs'
                    : 'border-[#E7E4DE] hover:border-[#087F78]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleItem(faq.id);
                    }
                  }}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F78]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-md bg-[#F3F2EE] text-[#087F78] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span
                      className="text-base sm:text-lg font-normal text-[#111111] leading-snug"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold hidden sm:inline">
                      {faq.category}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-[#DDEDEA] text-[#087F78]'
                          : 'bg-[#F3F2EE] text-[#77736C]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#77736C] leading-relaxed border-t border-[#E7E4DE]/60 space-y-3">
                    <p>{faq.answer}</p>

                    {faq.details && (
                      <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2 mt-3 font-normal">
                        {faq.details.definition && (
                          <div className="text-xs text-[#111111]">
                            <strong className="text-[#087F78] font-mono uppercase text-[10px] block mb-0.5">
                              Core Definition:
                            </strong>
                            {faq.details.definition}
                          </div>
                        )}
                        {faq.details.example && (
                          <div className="text-xs text-[#111111]">
                            <strong className="text-[#087F78] font-mono uppercase text-[10px] block mb-0.5">
                              Calculation / Example:
                            </strong>
                            {faq.details.example}
                          </div>
                        )}
                        {faq.details.note && (
                          <div className="text-[11px] text-[#77736C] italic pt-1 border-t border-[#E7E4DE]">
                            Note: {faq.details.note}
                          </div>
                        )}
                      </div>
                    )}

                    {faq.tags && faq.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        <span className="text-[10px] font-mono text-[#77736C] mr-1">Tags:</span>
                        {faq.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono bg-[#F3F2EE] text-[#111111] px-2 py-0.5 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border border-[#E7E4DE] rounded-2xl mb-16 space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#F3F2EE] text-[#77736C] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-[#111111]">No matching questions found</h4>
          <p className="text-xs text-[#77736C] max-w-sm mx-auto">
            We couldn&apos;t find any questions matching &quot;{searchQuery}&quot; in {selectedCategory}. Try resetting your search or choosing a different category.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
