import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { MOCK_MARKETS, filterMarkets } from '../../lib/mock-markets';
import { BROKER_CONFIG } from '../../lib/config';
import { Search, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

type FilterTab = 'all' | 'crypto' | 'forex' | 'indices' | 'commodities' | 'gainers' | 'losers';

export const MarketOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [search, setSearch] = useState('');

  const displayedMarkets = filterMarkets(MOCK_MARKETS, activeTab, search);

  const tabs: { id: FilterTab; label: string }[] = [
    { id: 'all', label: 'All Assets' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'forex', label: 'Forex' },
    { id: 'indices', label: 'Indices' },
    { id: 'commodities', label: 'Commodities' },
    { id: 'gainers', label: 'Top Gainers' },
    { id: 'losers', label: 'Top Losers' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F3F2EE] border-b border-[#E7E4DE]" id="market-overview">
      <Container size="default">
        <SectionHeading
          eyebrow="Market Depth"
          title="Market Overview"
          description="Institutional benchmark quotes across liquid global asset classes. Updated with deterministic indicative pricing."
        />

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Segmented Tab Controls */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#77736C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Filter pair or name..."
              className="w-full bg-white border border-[#E7E4DE] rounded-md pl-9 pr-3 py-1.5 text-xs text-[#111111] placeholder-[#77736C] focus:outline-none focus:border-[#087F78]"
            />
          </div>
        </div>

        {/* API Disclaimer Note */}
        <div className="mb-4 px-3.5 py-2 bg-white/70 border border-[#E7E4DE] rounded-md text-[11px] text-[#77736C] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
            <span>
              Indicative benchmark quotes displayed for demonstration. Live pricing is populated via direct broker FIX/WebSocket APIs upon CRM onboarding.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#77736C] shrink-0 hidden sm:inline">
            20+ Instruments Available
          </span>
        </div>

        {/* Desktop & Tablet Table (Hidden on Mobile) */}
        <div className="hidden md:block bg-white border border-[#E7E4DE] rounded-lg overflow-hidden shadow-xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] font-mono uppercase text-[10px]">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4">Asset / Pair</th>
                <th className="py-3 px-4 text-right">Price</th>
                <th className="py-3 px-4 text-right">24h Change</th>
                <th className="py-3 px-4 text-right hidden lg:table-cell">24h High</th>
                <th className="py-3 px-4 text-right hidden lg:table-cell">24h Low</th>
                <th className="py-3 px-4 text-right">Volume</th>
                <th className="py-3 px-4 text-right">Spread</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4DE]">
              {displayedMarkets.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-xs text-[#77736C]">
                    No market assets found matching &ldquo;{search}&rdquo;.
                  </td>
                </tr>
              ) : (
                displayedMarkets.map((market, idx) => {
                  const isPos = market.change24h >= 0;
                  return (
                    <tr
                      key={market.id}
                      className="hover:bg-[#F3F2EE]/50 transition-colors group"
                    >
                      <td className="py-3 px-4 text-center text-[#77736C] font-mono text-[11px]">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4">
                        <Link
                          to={`/markets/${market.category}`}
                          className="flex items-center gap-2 group-hover:text-[#087F78] transition-colors"
                        >
                          <span className="font-semibold text-xs text-[#111111]">
                            {market.symbol}
                          </span>
                          <span className="text-[11px] text-[#77736C]">{market.name}</span>
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-medium text-[#111111] tabular-nums">
                        {market.price >= 100
                          ? `$${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                          : `$${market.price.toFixed(4)}`}
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-mono font-medium tabular-nums ${
                          isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                        }`}
                      >
                        {isPos ? '+' : ''}
                        {market.change24h}%
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#77736C] tabular-nums hidden lg:table-cell">
                        {market.high24h >= 100
                          ? `$${market.high24h.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                          : `$${market.high24h.toFixed(4)}`}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#77736C] tabular-nums hidden lg:table-cell">
                        {market.low24h >= 100
                          ? `$${market.low24h.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                          : `$${market.low24h.toFixed(4)}`}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#77736C] tabular-nums">
                        {market.volume24h}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#111111] tabular-nums">
                        {market.spread} pts
                      </td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href={BROKER_CONFIG.tradingTerminalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#181818] hover:bg-black text-white text-[11px] font-medium rounded-xs transition-colors"
                        >
                          <span>Trade</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View: High-Density Responsive Market Cards (Under 768px) */}
        <div className="md:hidden space-y-3">
          {displayedMarkets.length === 0 ? (
            <div className="p-6 bg-white border border-[#E7E4DE] rounded-lg text-center text-xs text-[#77736C]">
              No market assets found matching &ldquo;{search}&rdquo;.
            </div>
          ) : (
            displayedMarkets.map(market => {
              const isPos = market.change24h >= 0;
              return (
                <div
                  key={market.id}
                  className="p-4 bg-white border border-[#E7E4DE] rounded-lg shadow-xs flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#111111]">
                        {market.symbol}
                      </div>
                      <div className="text-xs text-[#77736C]">{market.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono font-semibold text-[#111111] tabular-nums">
                        {market.price >= 100
                          ? `$${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                          : `$${market.price.toFixed(4)}`}
                      </div>
                      <div
                        className={`text-xs font-mono font-medium tabular-nums ${
                          isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                        }`}
                      >
                        {isPos ? '+' : ''}
                        {market.change24h}%
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E7E4DE] text-[11px]">
                    <div>
                      <div className="text-[#77736C]">24h High</div>
                      <div className="font-mono text-[#111111]">${market.high24h}</div>
                    </div>
                    <div>
                      <div className="text-[#77736C]">24h Low</div>
                      <div className="font-mono text-[#111111]">${market.low24h}</div>
                    </div>
                    <div>
                      <div className="text-[#77736C]">24h Vol</div>
                      <div className="font-mono text-[#111111]">{market.volume24h}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E7E4DE] flex items-center justify-between">
                    <Link
                      to={`/markets/${market.category}`}
                      className="text-xs font-medium text-[#77736C] hover:text-[#111111]"
                    >
                      View Specifications &rarr;
                    </Link>
                    <a
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-[#181818] text-white text-xs font-medium rounded-xs hover:bg-black inline-flex items-center gap-1"
                    >
                      <span>Trade</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </section>
  );
};
