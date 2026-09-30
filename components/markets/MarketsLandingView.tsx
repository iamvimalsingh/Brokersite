'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG } from '@/lib/config';
import { MarketSnapshot } from './MarketSnapshot';
import { MarketTable } from './MarketTable';
import { MarketFilters, FilterCategory } from './MarketFilters';
import { MOCK_MARKETS, filterMarkets, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export const MarketsLandingView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = filterMarkets(MOCK_MARKETS, activeTab, searchQuery);

  const categories = [
    { id: 'all', label: 'All Markets', path: '/markets' },
    { id: 'forex', label: 'Forex', path: '/markets/forex' },
    { id: 'crypto', label: 'Crypto', path: '/markets/crypto' },
    { id: 'indices', label: 'Indices', path: '/markets/indices' },
    { id: 'commodities', label: 'Commodities', path: '/markets/commodities' },
    { id: 'metals', label: 'Metals', path: '/markets/metals' }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* 1. Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-4 bg-[#DDEDEA]/60 px-3 py-1 rounded-xs border border-[#087F78]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F78]" />
              <span>GLOBAL MARKETS</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Explore the markets that move the world.
            </h1>

            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Discover market information across forex, digital assets, indices, commodities and metals through one professional brokerage experience.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Open an Account
              </Button>

              <Button
                to="/trading/conditions"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                View Trading Conditions
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#087F78]" />
                60+ Traded Instruments
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#087F78]" />
                Institutional-Grade Spreads
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#087F78]" />
                Straight-Through Routing
              </span>
            </div>
          </div>
        </div>

        {/* 2. Horizontal Category Navigation */}
        <div className="mb-10">
          <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar pb-2 border-b border-[#E7E4DE]">
            <div className="flex items-center gap-1.5">
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  href={cat.path}
                  className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    cat.id === 'all'
                      ? 'bg-[#181818] text-white shadow-xs'
                      : 'text-[#77736C] hover:text-[#111111] hover:bg-[#F3F2EE]'
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            <span className="text-[11px] font-mono text-[#77736C] shrink-0 hidden md:inline">
              Category Navigation
            </span>
          </div>
        </div>

        {/* 3. Market Snapshot Section */}
        <MarketSnapshot />

        {/* 4. Full Market Table Section */}
        <div className="mt-14 pt-8 border-t border-[#E7E4DE]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#087F78] font-semibold mb-1">
                Directory Database
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Full Market Table
              </h2>
              <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                Filter by asset class, sort by volume or price changes, and search specific instruments.
              </p>
            </div>
          </div>

          {/* Interactive Filters & Search */}
          <MarketFilters
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Table Component */}
          <MarketTable markets={filtered} searchQuery={searchQuery} />
        </div>

        {/* 5. Bottom Ready to Explore CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Get Started
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to explore the market?
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Open an account online to access transparent spread schedules, institutional liquidity, and modern trading tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto min-h-[44px]"
            >
              Open an Account
            </Button>

            <Button
              to="/trading/conditions"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              View Trading Conditions
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
