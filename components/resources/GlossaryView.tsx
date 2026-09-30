'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { GLOSSARY_TERMS } from '@/lib/resource-data';
import { GlossaryTerm } from '@/types/resource';
import { RelatedResources } from './RelatedResources';
import {
  HelpCircle,
  Search,
  X,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  ArrowRight,
  Calculator,
  ShieldCheck
} from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  const categories = ['All', 'Forex', 'Derivatives', 'Risk & Margin', 'Execution & Orders', 'Technical Analysis'];
  const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const handleCopy = (term: string, def: string) => {
    navigator.clipboard.writeText(`${term}: ${def}`);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(item => {
      const matchesLetter =
        selectedLetter === 'All' ||
        item.term.toUpperCase().startsWith(selectedLetter);

      const matchesCat =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesSearch =
        searchQuery === '' ||
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.example && item.example.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesLetter && matchesCat && matchesSearch;
    });
  }, [selectedLetter, selectedCategory, searchQuery]);

  // Check available letters
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_TERMS.forEach(t => letters.add(t.term[0].toUpperCase()));
    return letters;
  }, []);

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/resources" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Resources
          </Link>
          <Link href="/resources/academy" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Academy
          </Link>
          <Link href="/resources/news" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market News
          </Link>
          <Link href="/resources/analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/resources/guides" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Guides
          </Link>
          <Link href="/resources/webinars" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Webinars
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Glossary
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              FINANCIAL GLOSSARY
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Quick definitions for essential financial and trading terminology.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              An exhaustive encyclopedia of institutional foreign exchange, derivatives, liquidity mechanics, and risk management definitions.
            </p>
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#181818] text-white font-semibold'
                      : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search 60+ terms, formulas, definitions..."
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

          {/* Alphabet Index Filter Bar */}
          <div className="p-2.5 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
            {alphabet.map(letter => {
              const hasTerms = letter === 'All' || availableLetters.has(letter);
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  disabled={!hasTerms}
                  onClick={() => setSelectedLetter(letter)}
                  className={`min-w-[28px] h-7 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-[#087F78] text-white'
                      : hasTerms
                      ? 'text-[#111111] hover:bg-[#F3F2EE]'
                      : 'text-[#E7E4DE] cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Terms Counter */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-[#77736C]">
          <span>Showing {filteredTerms.length} financial definitions</span>
          {(selectedLetter !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedLetter('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#087F78] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Glossary Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredTerms.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold">
                    {item.category}
                  </span>
                  <button
                    onClick={() => handleCopy(item.term, item.definition)}
                    className="p-1 text-[#77736C] hover:text-[#087F78] rounded-sm transition-colors cursor-pointer"
                    title="Copy definition"
                  >
                    {copiedTerm === item.term ? (
                      <Check className="w-3.5 h-3.5 text-[#0A9F6E]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <h3
                  className="text-lg font-normal text-[#111111] mb-2 leading-snug group-hover:text-[#087F78] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.term}
                </h3>

                <p className="text-xs text-[#77736C] leading-relaxed mb-4">
                  {item.definition}
                </p>

                {/* Practical Example Box */}
                {item.example && (
                  <div className="p-3 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE] text-[11px] text-[#111111] mb-3">
                    <span className="font-mono font-bold text-[#087F78] uppercase text-[10px] block mb-0.5">
                      Execution Example:
                    </span>
                    <span>{item.example}</span>
                  </div>
                )}

                {/* Formula Box */}
                {item.formula && (
                  <div className="p-3 rounded-lg bg-[#DDEDEA]/30 border border-[#087F78]/20 font-mono text-[11px] text-[#087F78]">
                    <span className="font-bold uppercase text-[9px] block mb-0.5">Formula:</span>
                    <span>{item.formula}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Related Resources */}
        <RelatedResources currentCategory="Default" />
      </Container>
    </div>
  );
};
