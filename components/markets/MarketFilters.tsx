'use client';

import React from 'react';
import { SearchInput } from '@/components/ui/SearchInput';

export type FilterCategory = 'all' | 'crypto' | 'forex' | 'indices' | 'commodities' | 'metals' | 'gainers' | 'losers';

interface MarketFiltersProps {
  activeTab: FilterCategory;
  onTabChange: (tab: FilterCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  className?: string;
}

export const MarketFilters: React.FC<MarketFiltersProps> = ({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  className = ''
}) => {
  const tabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'forex', label: 'Forex' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'indices', label: 'Indices' },
    { id: 'commodities', label: 'Commodities' },
    { id: 'metals', label: 'Metals' }
  ];

  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 ${className}`}>
      {/* Segmented Tab Controls */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 md:pb-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white text-[#111111] shadow-xs border border-[#E7E4DE] font-semibold'
                : 'text-[#77736C] hover:text-[#111111] hover:bg-white/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="w-full md:w-64">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Filter pair or name..."
        />
      </div>
    </div>
  );
};
