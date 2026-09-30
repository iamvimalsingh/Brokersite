'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MOCK_MARKETS, filterMarkets, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { MarketFilters, FilterCategory } from '@/components/markets/MarketFilters';
import { MarketTable } from '@/components/markets/MarketTable';
import { Info } from 'lucide-react';

export const MarketOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [search, setSearch] = useState('');

  const displayedMarkets = filterMarkets(MOCK_MARKETS, activeTab, search);

  return (
    <section className="py-16 sm:py-20 bg-[#F3F2EE] border-b border-[#E7E4DE]" id="market-overview">
      <Container size="default">
        <SectionHeading
          eyebrow={MOCK_DATA_LABEL}
          title="Market Overview"
          description="Compare instruments, price movements and key market statistics in one place."
        />

        {/* Filter Controls & Search Bar */}
        <MarketFilters
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchQuery={search}
          onSearchChange={setSearch}
        />

        {/* Demo Data Notice */}
        <div className="mb-4 px-3.5 py-2 bg-white/70 border border-[#E7E4DE] rounded-md text-[11px] text-[#77736C] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
            <span>
              Indicative demo figures displayed for demonstration and educational purposes. Real pricing is provided directly by external trading applications.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#77736C] shrink-0 hidden sm:inline">
            20+ Demo Instruments
          </span>
        </div>

        {/* Table & Responsive Cards */}
        <MarketTable markets={displayedMarkets} searchQuery={search} />
      </Container>
    </section>
  );
};
