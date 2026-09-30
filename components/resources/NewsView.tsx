'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { NEWS_ARTICLES } from '@/lib/resource-data';
import { NewsArticle } from '@/types/resource';
import { RelatedResources } from './RelatedResources';
import {
  Newspaper,
  Clock,
  User,
  Search,
  X,
  ArrowRight,
  TrendingUp,
  Sparkles,
  AlertCircle,
  Share2,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const NewsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Forex', 'Crypto', 'Indices', 'Commodities', 'Metals', 'Global Macro'];

  const filteredNews = NEWS_ARTICLES.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = NEWS_ARTICLES.find(n => n.featured) || NEWS_ARTICLES[0];

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
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Market News
          </span>
          <Link href="/resources/analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
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

        {/* Breaking Macro Alert Ticker */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#087F78] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#087F78]"></span>
            </span>
            <span className="text-[10px] font-mono uppercase font-bold text-[#087F78] shrink-0 bg-[#DDEDEA] px-2 py-0.5 rounded-xs">
              LIVE WIRE
            </span>
            <p className="text-xs text-[#111111] font-medium truncate">
              US CPI inflation prints at +3.1% YoY, fueling debate over upcoming Federal Reserve benchmark rate trajectories.
            </p>
          </div>
          <Link
            href="/tools/economic-calendar"
            className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] shrink-0 hidden sm:inline-flex items-center gap-1 font-mono"
          >
            <span>Calendar Impact</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              MARKET NEWS DESK
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Follow developments influencing global financial markets.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Real-time dispatches, central bank interest rate developments, and cross-asset flow commentary curated by our global strategy desks.
            </p>
          </div>
        </div>

        {/* Featured Flagship News Card */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all group">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#77736C]">
                    <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                      Featured Bulletin · {featuredArticle.category}
                    </span>
                    <span>·</span>
                    <span>{featuredArticle.publishedDate}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-4 leading-snug cursor-pointer group-hover:text-[#087F78] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#77736C] leading-relaxed mb-6">
                    {featuredArticle.subtitle}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block">
                      Core Strategic Highlights:
                    </span>
                    {featuredArticle.keyPoints.slice(0, 3).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#111111]">
                        <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#E7E4DE]">
                    <div className="flex items-center gap-2 text-xs text-[#77736C]">
                      <User className="w-3.5 h-3.5" />
                      <span>{featuredArticle.author} ({featuredArticle.authorRole})</span>
                    </div>

                    <button
                      onClick={() => setActiveArticle(featuredArticle)}
                      className="px-5 py-2.5 rounded-lg bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Read Full Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Bar & Search */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E4DE]">
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
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter news by asset or headline..."
              className="w-full bg-white border border-[#E7E4DE] rounded-lg pl-9 pr-3 py-2 text-xs text-[#111111] placeholder:text-[#77736C] focus:outline-none focus:border-[#087F78] shadow-xs"
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

        {/* News Bulletins Grid (15+ Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredNews.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#77736C]">
                  <span className="px-2 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {item.category}
                  </span>
                  <span>{item.publishedDate}</span>
                </div>

                <h3
                  onClick={() => setActiveArticle(item)}
                  className="text-lg font-normal text-[#111111] mb-2 leading-snug cursor-pointer group-hover:text-[#087F78] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>

                <p className="text-xs text-[#77736C] leading-relaxed mb-4 line-clamp-2">
                  {item.summary}
                </p>

                {/* Key Points Preview */}
                <div className="space-y-1.5 mb-6 bg-[#FBFBF9] p-3 rounded-lg border border-[#E7E4DE]">
                  {item.keyPoints.slice(0, 2).map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-[#111111]">
                      <span className="text-[#087F78] font-bold">•</span>
                      <span className="truncate">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                <span className="text-[#77736C] font-mono text-[11px]">{item.readTime}</span>
                <button
                  onClick={() => setActiveArticle(item)}
                  className="font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Article Reading View */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#77736C]">
                  <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {activeArticle.category}
                  </span>
                  <span>·</span>
                  <span>{activeArticle.publishedDate}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-normal text-[#111111] mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {activeArticle.title}
              </h2>

              <p className="text-sm font-medium text-[#77736C] mb-6 leading-relaxed">
                {activeArticle.subtitle}
              </p>

              {/* Author Badge */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE] mb-8 text-xs">
                <div className="w-8 h-8 rounded-full bg-[#DDEDEA] text-[#087F78] font-bold flex items-center justify-center font-mono">
                  {activeArticle.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-[#111111]">{activeArticle.author}</div>
                  <div className="text-[#77736C] text-[11px]">{activeArticle.authorRole}</div>
                </div>
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-4 mb-8 text-sm text-[#111111] leading-relaxed">
                {activeArticle.bodyParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Key Highlights Box */}
              <div className="p-5 rounded-xl bg-[#DDEDEA]/40 border border-[#087F78]/20 mb-8">
                <h4 className="text-xs font-mono uppercase font-bold text-[#087F78] mb-3">
                  Strategic Market Takeaways:
                </h4>
                <div className="space-y-2">
                  {activeArticle.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Modal Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E7E4DE]">
                <Button
                  to="/markets"
                  variant="outline"
                  size="sm"
                >
                  View Market Specs
                </Button>

                <Button
                  to="/tools/economic-calendar"
                  variant="primary"
                  size="sm"
                >
                  Check Economic Calendar
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
