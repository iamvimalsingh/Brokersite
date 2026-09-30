'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { ANALYSIS_ARTICLES, FEATURED_INSIGHTS } from '@/lib/resource-data';
import { AnalysisArticle } from '@/types/resource';
import { RelatedResources } from './RelatedResources';
import {
  TrendingUp,
  Clock,
  User,
  Search,
  X,
  ArrowRight,
  Sparkles,
  BarChart2,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export const AnalysisView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAnalysis, setActiveAnalysis] = useState<AnalysisArticle | null>(null);

  const categories = ['All', 'Forex', 'Crypto', 'Metals', 'Indices', 'Commodities'];
  const analysisTypes = ['All', 'Daily Brief', 'Weekly Outlook', 'Technical', 'Fundamental', 'Cross-Asset'];

  const filteredArticles = ANALYSIS_ARTICLES.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'All' || item.analysisType === selectedType;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.technicalPicture.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesType && matchesSearch;
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
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Market Analysis
          </span>
          <Link href="/resources/guides" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Guides
          </Link>
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
              STRATEGIC MARKET ANALYSIS
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Explore structured commentary across forex, crypto, commodities and indices.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Macroeconomic theses, institutional order-flow observations, and high-probability technical levels prepared by dedicated asset desks.
            </p>
          </div>
        </div>

        {/* 3 Featured Flagship Editorial Cards */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#087F78] font-semibold">Desk Perspectives</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Featured Market Reports
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FEATURED_INSIGHTS.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Geometric Chart Visualization */}
                  <div className="h-32 mb-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#77736C] z-10">
                      <span className="font-bold text-[#087F78] uppercase">{item.category} DESK</span>
                      <span>REPORT #{idx + 1}</span>
                    </div>

                    {/* Technical SVG Candlestick Pattern / Grid */}
                    <div className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none px-6">
                      <div className="w-1.5 h-16 bg-[#087F78] rounded-xs" />
                      <div className="w-1.5 h-10 bg-[#E5484D] rounded-xs" />
                      <div className="w-1.5 h-20 bg-[#087F78] rounded-xs" />
                      <div className="w-1.5 h-12 bg-[#087F78] rounded-xs" />
                      <div className="w-1.5 h-24 bg-[#087F78] rounded-xs" />
                    </div>

                    <div className="flex items-end justify-between z-10 text-[10px] font-mono text-[#77736C] pt-2 border-t border-[#E7E4DE]/60">
                      <span>Multi-Timeframe</span>
                      <span>Desk Clearance</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#77736C]">
                    <span className="px-2 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                      {item.category}
                    </span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#111111] mb-2 leading-snug group-hover:text-[#087F78] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-mono text-[#77736C]">
                  <span>By {item.author}</span>
                  <button
                    onClick={() => {
                      const found = ANALYSIS_ARTICLES.find(a => a.category === item.category);
                      if (found) setActiveAnalysis(found);
                    }}
                    className="font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Thesis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 space-y-4 pb-6 border-b border-[#E7E4DE]">
          {/* Asset Class Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold mr-1 shrink-0">
                Asset Class:
              </span>
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
                placeholder="Search levels, instruments, theses..."
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

        {/* Detailed Analysis Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filteredArticles.map(item => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#77736C]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#F3F2EE] text-[#111111] font-semibold text-[10px]">
                      {item.analysisType}
                    </span>
                  </div>
                  <span>{item.publishedDate}</span>
                </div>

                <h3
                  onClick={() => setActiveAnalysis(item)}
                  className="text-xl font-normal text-[#111111] mb-2 leading-snug cursor-pointer group-hover:text-[#087F78] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>

                <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Key Price Levels Box */}
                <div className="p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] mb-6">
                  <div className="text-[10px] font-mono uppercase text-[#77736C] font-semibold mb-2 flex items-center justify-between">
                    <span>Key Technical Inflection Levels:</span>
                    <span>{item.timeframe}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                    <div className="p-2 rounded bg-white border border-[#E7E4DE]">
                      <div className="text-[9px] text-[#E5484D] uppercase font-bold">Resistance</div>
                      <div className="font-semibold text-[#111111]">{item.keyLevels.resistance1}</div>
                    </div>
                    <div className="p-2 rounded bg-[#DDEDEA] border border-[#087F78]/30">
                      <div className="text-[9px] text-[#087F78] uppercase font-bold">Current Spot</div>
                      <div className="font-semibold text-[#087F78]">{item.keyLevels.currentPrice}</div>
                    </div>
                    <div className="p-2 rounded bg-white border border-[#E7E4DE]">
                      <div className="text-[9px] text-[#0A9F6E] uppercase font-bold">Support</div>
                      <div className="font-semibold text-[#111111]">{item.keyLevels.support1}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                <span className="text-[#77736C] font-mono">{item.authorRole}</span>
                <button
                  onClick={() => setActiveAnalysis(item)}
                  className="font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Deconstruct Thesis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Analysis Report Reader */}
        {activeAnalysis && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#77736C]">
                  <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {activeAnalysis.category} Desk
                  </span>
                  <span>·</span>
                  <span>{activeAnalysis.analysisType}</span>
                  <span>·</span>
                  <span>{activeAnalysis.publishedDate}</span>
                </div>
                <button
                  onClick={() => setActiveAnalysis(null)}
                  className="p-1.5 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-normal text-[#111111] mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {activeAnalysis.title}
              </h2>

              <p className="text-sm font-medium text-[#77736C] mb-8 leading-relaxed">
                {activeAnalysis.summary}
              </p>

              {/* Price Grid Breakdown */}
              <div className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] mb-8">
                <h4 className="text-xs font-mono uppercase font-bold text-[#77736C] mb-3">
                  Desk Price Target &amp; Liquidity Corridor:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
                  {activeAnalysis.keyLevels.resistance2 && (
                    <div className="p-3 rounded-lg bg-white border border-[#E7E4DE]">
                      <div className="text-[10px] text-[#E5484D] uppercase font-bold">R2 (Extension)</div>
                      <div className="text-sm font-semibold text-[#111111]">{activeAnalysis.keyLevels.resistance2}</div>
                    </div>
                  )}
                  <div className="p-3 rounded-lg bg-white border border-[#E7E4DE]">
                    <div className="text-[10px] text-[#E5484D] uppercase font-bold">R1 (Primary)</div>
                    <div className="text-sm font-semibold text-[#111111]">{activeAnalysis.keyLevels.resistance1}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#DDEDEA] border border-[#087F78]/30">
                    <div className="text-[10px] text-[#087F78] uppercase font-bold">Spot Entry Node</div>
                    <div className="text-sm font-semibold text-[#087F78]">{activeAnalysis.keyLevels.currentPrice}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[#E7E4DE]">
                    <div className="text-[10px] text-[#0A9F6E] uppercase font-bold">S1 (Invalidation)</div>
                    <div className="text-sm font-semibold text-[#111111]">{activeAnalysis.keyLevels.support1}</div>
                  </div>
                </div>
              </div>

              {/* Three Analytical Pillars */}
              <div className="space-y-6 mb-8">
                <div className="p-5 rounded-xl bg-white border border-[#E7E4DE]">
                  <h4 className="text-sm font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-[#087F78]" />
                    <span>Fundamental Macro Context</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                    {activeAnalysis.fundamentalDrivers}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#E7E4DE]">
                  <h4 className="text-sm font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#087F78]" />
                    <span>Technical Chart Structure</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                    {activeAnalysis.technicalPicture}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#DDEDEA]/40 border border-[#087F78]/30">
                  <h4 className="text-sm font-bold text-[#087F78] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#087F78]" />
                    <span>Risk Considerations &amp; Invalidation Rules</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#111111] leading-relaxed">
                    {activeAnalysis.riskConsiderations}
                  </p>
                </div>
              </div>

              {/* Footer Modal Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E7E4DE]">
                <Button
                  to="/platforms/webtrader"
                  variant="primary"
                  size="sm"
                >
                  Open Chart on WebTrader
                </Button>

                <Button
                  to="/trading/risk-management"
                  variant="outline"
                  size="sm"
                >
                  Review Risk Parameters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Related Resources */}
        <RelatedResources currentCategory="Metals" />
      </Container>
    </div>
  );
};
