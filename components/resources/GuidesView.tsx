'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { TRADING_GUIDES } from '@/lib/resource-data';
import { TradingGuide } from '@/types/resource';
import { RelatedResources } from './RelatedResources';
import {
  FileText,
  Clock,
  Search,
  X,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const GuidesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGuide, setActiveGuide] = useState<TradingGuide | null>(null);

  const categories = ['All', 'Getting Started', 'Forex', 'Crypto', 'Technical Analysis', 'Risk Management', 'Platforms', 'Trading Tools'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredGuides = TRADING_GUIDES.filter(guide => {
    const matchesCat = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesDiff = selectedDifficulty === 'All' || guide.difficulty === selectedDifficulty;
    const matchesSearch =
      searchQuery === '' ||
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.sections.some(s => s.heading.toLowerCase().includes(searchQuery.toLowerCase()) || s.content.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesDiff && matchesSearch;
  });

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
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Trading Guides
          </span>
          <Link href="/resources/webinars" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Webinars
          </Link>
          <Link href="/resources/glossary" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Glossary
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              PRACTICAL TRADING GUIDES
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Practical explainers covering trading tools, risk and market mechanics.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Step-by-step documentation, pip value formulas, order execution mechanics, and risk frameworks written for real market execution.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 space-y-4 pb-6 border-b border-[#E7E4DE]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Filter */}
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

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search guides, calculators, steps..."
                className="w-full bg-white border border-[#E7E4DE] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#111111] placeholder:text-[#77736C] focus:outline-none focus:border-[#087F78] shadow-xs"
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
        </div>

        {/* 12 Practical Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredGuides.map((guide, idx) => (
            <div
              key={guide.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#77736C]">
                  <span className="px-2 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {guide.category}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                      guide.difficulty === 'Beginner'
                        ? 'bg-[#F3F2EE] text-[#111111]'
                        : guide.difficulty === 'Intermediate'
                        ? 'bg-[#DDEDEA]/50 text-[#087F78]'
                        : 'bg-[#181818] text-white'
                    }`}
                  >
                    {guide.difficulty}
                  </span>
                </div>

                <h3
                  onClick={() => setActiveGuide(guide)}
                  className="text-lg font-normal text-[#111111] mb-2 leading-snug cursor-pointer group-hover:text-[#087F78] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {guide.title}
                </h3>

                <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                  {guide.summary}
                </p>

                {/* Section Overview Pills */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block">
                    Structured Walkthrough:
                  </span>
                  {guide.sections.slice(0, 3).map((sec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#111111]">
                      <span className="w-4 h-4 rounded-full bg-[#F3F2EE] text-[#087F78] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {sIdx + 1}
                      </span>
                      <span className="truncate">{sec.heading}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                <span className="text-[#77736C] font-mono text-[11px] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{guide.readTime}</span>
                </span>
                <button
                  onClick={() => setActiveGuide(guide)}
                  className="font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Guide Reader */}
        {activeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#77736C]">
                  <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {activeGuide.category}
                  </span>
                  <span>·</span>
                  <span>{activeGuide.difficulty} Level</span>
                  <span>·</span>
                  <span>{activeGuide.readTime}</span>
                </div>
                <button
                  onClick={() => setActiveGuide(null)}
                  className="p-1.5 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-normal text-[#111111] mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {activeGuide.title}
              </h2>

              <p className="text-sm font-medium text-[#77736C] mb-8 leading-relaxed">
                {activeGuide.summary}
              </p>

              {/* Sections Breakdown */}
              <div className="space-y-6 mb-8">
                {activeGuide.sections.map((sec, idx) => (
                  <div key={idx} className="p-5 sm:p-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
                    <h3 className="text-base font-bold text-[#111111] mb-3 flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-[#087F78] text-white font-mono text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sec.heading}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#111111] leading-relaxed whitespace-pre-line">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Takeaways Checkpoints */}
              <div className="p-5 rounded-xl bg-[#DDEDEA]/40 border border-[#087F78]/20 mb-8">
                <h4 className="text-xs font-mono uppercase font-bold text-[#087F78] mb-3">
                  Summary &amp; Key Execution Rules:
                </h4>
                <div className="space-y-2">
                  {activeGuide.keyTakeaways.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Related Cross-Links */}
              {activeGuide.relatedCrossLinks.length > 0 && (
                <div className="p-4 rounded-lg bg-white border border-[#E7E4DE] mb-8">
                  <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block mb-2">
                    Recommended Next Steps &amp; Tools:
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {activeGuide.relatedCrossLinks.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 bg-[#DDEDEA]/40 px-3 py-1.5 rounded-md"
                      >
                        <span>{link.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Modal Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E7E4DE]">
                <Button
                  to="/tools/calculators"
                  variant="outline"
                  size="sm"
                >
                  Open Trading Calculators
                </Button>

                <Button
                  to="/platforms/webtrader"
                  variant="primary"
                  size="sm"
                >
                  Test on WebTrader
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Related Resources */}
        <RelatedResources currentCategory="Forex" />
      </Container>
    </div>
  );
};
