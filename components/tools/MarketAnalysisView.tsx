'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  Clock,
  User,
  BookOpen,
  Calendar,
  Share2,
  Tag
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: 'Daily Brief' | 'Forex' | 'Crypto' | 'Metals' | 'Indices' | 'Commodities';
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  keyTakeaway: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: 'usd-strength',
    title: 'USD Strength and the Global Macro Picture',
    category: 'Forex',
    author: 'Chief Currency Strategist',
    date: 'Oct 14, 2026',
    readTime: '5 min read',
    excerpt: 'The US Dollar continues to demonstrate cyclical resilience against the Euro and Japanese Yen as real bond yield differentials remain anchored by resilient consumer metrics.',
    keyTakeaway: 'DXY tests key 103.50 resistance; EUR/USD consolidates near 1.0850 support with FOMC minutes approaching.',
    featured: true
  },
  {
    id: 'gold-prices',
    title: 'What Is Driving Gold Prices?',
    category: 'Metals',
    author: 'Senior Commodities Desk',
    date: 'Oct 13, 2026',
    readTime: '4 min read',
    excerpt: 'Spot Gold (XAU/USD) holds above the $2,650/oz threshold as central bank reserve accumulation and ongoing geopolitical transit friction sustain physical bullion demand.',
    keyTakeaway: 'Gold maintains a structural uptrend while real yields remain range-bound; immediate resistance sighted at $2,675.',
    featured: false
  },
  {
    id: 'crypto-volatility',
    title: 'Understanding Volatility in Digital Assets',
    category: 'Crypto',
    author: 'Digital Asset Research',
    date: 'Oct 12, 2026',
    readTime: '6 min read',
    excerpt: 'Bitcoin derivative funding rates normalize following institutional ETF inflows, presenting defined trading ranges between $62,000 support and $66,000 resistance.',
    keyTakeaway: 'Implied 30-day volatility contracts to 48%, favoring systematic range-bound strategies over momentum chasing.',
    featured: false
  },
  {
    id: 'indices-reaction',
    title: 'How Equity Indices React to Economic Data',
    category: 'Indices',
    author: 'Global Macro Team',
    date: 'Oct 11, 2026',
    readTime: '4 min read',
    excerpt: 'The S&P 500 (US500) and Nasdaq 100 (NAS100) display asymmetric reactions to inflation prints. We examine historic dispersion patterns across cyclical vs tech sectors.',
    keyTakeaway: 'Earnings revision breadth supports valuation multiples, but elevated 10-year yields cap breakout velocity.',
    featured: false
  },
  {
    id: 'oil-markets',
    title: 'Oil Markets and Supply Expectations',
    category: 'Commodities',
    author: 'Energy Research Group',
    date: 'Oct 10, 2026',
    readTime: '5 min read',
    excerpt: 'Crude Oil WTI fluctuates near $72 as OPEC+ output quota discipline balances macroeconomic concerns surrounding global industrial manufacturing throughput.',
    keyTakeaway: 'Tight prompt physical spreads signal balanced market structure heading into inventory reporting cycles.',
    featured: false
  },
  {
    id: 'daily-brief-macro',
    title: 'Daily Market Brief: Central Bank Pivot Projections',
    category: 'Daily Brief',
    author: 'Research Desk',
    date: 'Oct 14, 2026',
    readTime: '3 min read',
    excerpt: 'A morning digest of Asian, European, and American pre-market developments, including currency cross ranges, commodity fixings, and overnight risk sentiment.',
    keyTakeaway: 'Overnight FX liquidity concentrated in EUR/USD and USD/JPY; European equities open flat to slightly higher.',
    featured: false
  }
];

export const MarketAnalysisView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Daily Brief', 'Forex', 'Crypto', 'Metals', 'Indices', 'Commodities'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/tools" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Tools
          </Link>
          <Link href="/tools/calculators" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Calculators
          </Link>
          <Link href="/tools/economic-calendar" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Economic Calendar
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Market Analysis
          </span>
          <Link href="/tools/signals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Signals
          </Link>
          <Link href="/tools/quant" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Quantitative Tools
          </Link>
          <Link href="/tools/algo" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              EDITORIAL MARKET RESEARCH
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Institutional Analysis &amp; Commentary
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Daily market briefs, cross-asset macro research, and structural technical perspectives authored by {BRAND_NAME} market strategists.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                to="/markets"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Explore Traded Markets
              </Button>

              <Button
                to="/tools/economic-calendar"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                View Economic Calendar
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Editorial Banner */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                  Featured Research
                </span>
                <span className="text-xs font-mono text-[#77736C]">{featuredArticle.category}</span>
              </div>

              <h2
                className="text-2xl sm:text-4xl font-normal text-[#111111] mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {featuredArticle.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="p-3 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE] text-xs font-mono mb-6">
                <span className="text-[#087F78] font-bold">Key Technical Takeaway: </span>
                <span className="text-[#111111]">{featuredArticle.keyTakeaway}</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#77736C]">
                <span>By {featuredArticle.author}</span>
                <span>·</span>
                <span>{featuredArticle.date}</span>
                <span>·</span>
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl p-5 text-xs font-mono">
              <div className="text-[10px] font-mono uppercase text-[#77736C] mb-2 font-semibold">Related Instruments</div>
              <div className="space-y-2">
                <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex justify-between">
                  <span className="font-bold text-[#111111]">DXY (Dollar Index)</span>
                  <span className="font-bold text-[#087F78]">103.45</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex justify-between">
                  <span className="font-bold text-[#111111]">EUR/USD</span>
                  <span className="font-bold text-[#E5484D]">1.0874</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex justify-between">
                  <span className="font-bold text-[#111111]">USD/JPY</span>
                  <span className="font-bold text-[#0A9F6E]">149.65</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-2 mb-8 border-b border-[#E7E4DE]">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#181818] text-white shadow-xs'
                  : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredArticles.map(art => (
            <div
              key={art.id}
              className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#77736C]">
                  <span className="px-2 py-0.5 rounded bg-[#F3F2EE] font-bold text-[#111111] uppercase text-[10px]">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3
                  className="text-lg font-normal text-[#111111] mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {art.title}
                </h3>
                <p className="text-xs text-[#77736C] leading-relaxed mb-4">
                  {art.excerpt}
                </p>

                <div className="p-2.5 bg-[#FBFBF9] rounded border border-[#E7E4DE] text-[11px] font-mono mb-6">
                  <span className="text-[#087F78] font-bold block mb-0.5">Analyst Note:</span>
                  <span className="text-[#111111]">{art.keyTakeaway}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                <span>{art.author}</span>
                <span>{art.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block with Contextual Cross-Link */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Trade with Insight
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Explore live markets covered in our analysis.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Monitor real-time prices, historical sparklines, and institutional spreads across all 60+ covered assets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/markets"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              View Full Market Directory
            </Button>

            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Open an Account
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
