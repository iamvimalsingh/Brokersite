import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { MOCK_MARKETS, filterMarkets } from '../lib/mock-markets';
import { BROKER_CONFIG } from '../lib/config';
import { MarketCategory } from '../types/market';
import { ArrowUpRight, ArrowDownRight, Search, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { Button } from '../components/common/Button';

type ActiveCategoryFilter = MarketCategory | 'all';

interface MarketsPageProps {
  forcedCategory?: ActiveCategoryFilter;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({ forcedCategory }) => {
  const params = useParams<{ category?: string }>();
  const activeCategory: ActiveCategoryFilter =
    forcedCategory || (params.category as MarketCategory) || 'all';

  const [search, setSearch] = useState('');

  const categoryMeta: Record<
    string,
    { title: string; subtitle: string; desc: string; leverage: string; hours: string; instruments: string }
  > = {
    all: {
      title: 'Global Markets Directory',
      subtitle: 'Multi-Asset Institutional Coverage',
      desc: 'Trade over 500+ CFDs and spot contracts across Foreign Exchange, Digital Currencies, Sovereign Indices, Energy, and Precious Metals.',
      leverage: 'Up to 1:200',
      hours: '24/5 GMT',
      instruments: '500+ Instruments'
    },
    forex: {
      title: 'Forex Trading',
      subtitle: 'Foreign Exchange Pairs',
      desc: 'Access institutional tier-1 liquidity on major, minor, and exotic FX pairs with raw spreads starting from 0.0 pips and deep market depth.',
      leverage: 'Up to 1:200',
      hours: '24/5 (Mon 00:00 - Fri 23:59 GMT)',
      instruments: '60+ Pairs'
    },
    crypto: {
      title: 'Crypto Derivatives',
      subtitle: 'Perpetual & Spot Contracts',
      desc: 'Trade Bitcoin, Ethereum, Solana, and top decentralized asset derivatives with deep order book depth, high liquidity, and 24/7 market hours.',
      leverage: 'Up to 1:50',
      hours: '24/7/365 Continuous',
      instruments: '40+ Digital Assets'
    },
    indices: {
      title: 'Global Indices',
      subtitle: 'Equity Benchmarks',
      desc: 'Gain exposure to world-leading economies via cash and futures indices including the US500, NAS100, GER40, UK100, and JP225 with competitive margins.',
      leverage: 'Up to 1:100',
      hours: 'Follows Regional Exchanges',
      instruments: '18+ Major Indices'
    },
    commodities: {
      title: 'Commodities Trading',
      subtitle: 'Energies & Agricultural Contracts',
      desc: 'Trade West Texas Intermediate (USOIL), Brent Crude (UKOIL), and Natural Gas with transparent swap pricing and zero unexpected rollover penalties.',
      leverage: 'Up to 1:100',
      hours: 'Trading sessions align with NYMEX/ICE',
      instruments: '12+ Energy Contracts'
    },
    metals: {
      title: 'Precious Metals',
      subtitle: 'Spot Gold & Silver Bullion',
      desc: 'Hedge inflation and macro volatility with institutional spot liquidity on Gold (XAU/USD), Silver (XAG/USD), and Platinum with sub-second execution.',
      leverage: 'Up to 1:200',
      hours: '23/5 Continuous Trading',
      instruments: 'Gold, Silver, Platinum, Palladium'
    }
  };

  const currentMeta = categoryMeta[activeCategory] || categoryMeta.all;

  // Filter markets
  const categoryFilter = activeCategory === 'all' ? 'all' : (activeCategory as MarketCategory);
  const items = filterMarkets(MOCK_MARKETS, categoryFilter, search);

  const categories = [
    { id: 'all', label: 'All Markets', path: '/markets' },
    { id: 'forex', label: 'Forex', path: '/markets/forex' },
    { id: 'crypto', label: 'Crypto', path: '/markets/crypto' },
    { id: 'indices', label: 'Indices', path: '/markets/indices' },
    { id: 'commodities', label: 'Commodities', path: '/markets/commodities' },
    { id: 'metals', label: 'Metals', path: '/markets/metals' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Category Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            {currentMeta.subtitle}
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            {currentMeta.title}
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed mb-6">
            {currentMeta.desc}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-lg text-xs border-t border-[#E7E4DE] pt-4 text-[#111111]">
            <div>
              <div className="text-[#77736C] text-[11px]">Maximum Leverage</div>
              <div className="font-semibold font-mono">{currentMeta.leverage}</div>
            </div>
            <div>
              <div className="text-[#77736C] text-[11px]">Available Instruments</div>
              <div className="font-semibold font-mono">{currentMeta.instruments}</div>
            </div>
            <div>
              <div className="text-[#77736C] text-[11px]">Market Hours</div>
              <div className="font-semibold">{currentMeta.hours}</div>
            </div>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {categories.map(cat => {
              const isSelected =
                activeCategory === cat.id ||
                (activeCategory === 'all' && cat.id === 'all');
              return (
                <Link
                  key={cat.id}
                  to={cat.path}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#181818] text-white shadow-xs'
                      : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111] hover:border-[#77736C]'
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#77736C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Filter pair or asset..."
              className="w-full bg-white border border-[#E7E4DE] rounded-md pl-9 pr-3 py-1.5 text-xs text-[#111111] placeholder-[#77736C] focus:outline-none focus:border-[#087F78]"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white border border-[#E7E4DE] rounded-lg overflow-hidden shadow-xs mb-12">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] font-mono uppercase text-[10px]">
                <th className="py-3 px-4">Instrument</th>
                <th className="py-3 px-4">Asset Class</th>
                <th className="py-3 px-4 text-right">Price</th>
                <th className="py-3 px-4 text-right">24h Change</th>
                <th className="py-3 px-4 text-right">24h High</th>
                <th className="py-3 px-4 text-right">24h Low</th>
                <th className="py-3 px-4 text-right">Raw Spread</th>
                <th className="py-3 px-4 text-right">Max Leverage</th>
                <th className="py-3 px-4 text-center">Trade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4DE]">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-xs text-[#77736C]">
                    No market assets found matching &ldquo;{search}&rdquo;.
                  </td>
                </tr>
              ) : (
                items.map(market => {
                  const isPos = market.change24h >= 0;
                  return (
                    <tr key={market.id} className="hover:bg-[#F3F2EE]/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-xs text-[#111111]">
                          {market.symbol}
                        </div>
                        <div className="text-[11px] text-[#77736C]">{market.name}</div>
                      </td>
                      <td className="py-3 px-4 font-mono uppercase text-[10px] text-[#77736C]">
                        {market.category}
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
                        {isPos ? '+' : ''}{market.change24h}%
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#77736C] tabular-nums">
                        ${market.high24h}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#77736C] tabular-nums">
                        ${market.low24h}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#087F78] font-semibold tabular-nums">
                        {market.spread} pts
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-[#111111] tabular-nums">
                        {market.leverage}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href={BROKER_CONFIG.tradingTerminalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#181818] hover:bg-black text-white text-[11px] font-medium rounded-xs transition-colors"
                        >
                          <span>Execute</span>
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

        {/* Mobile View: High-Density Responsive Market Cards */}
        <div className="md:hidden space-y-3 mb-12">
          {items.map(market => {
            const isPos = market.change24h >= 0;
            return (
              <div
                key={market.id}
                className="p-4 bg-white border border-[#E7E4DE] rounded-lg shadow-xs flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-sm text-[#111111]">{market.symbol}</span>
                    <span className="text-xs text-[#77736C] ml-2 font-mono uppercase">{market.category}</span>
                    <div className="text-xs text-[#77736C]">{market.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono font-semibold text-[#111111] tabular-nums">
                      ${market.price >= 100 ? market.price.toLocaleString() : market.price.toFixed(4)}
                    </div>
                    <div
                      className={`text-xs font-mono font-medium ${
                        isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                      }`}
                    >
                      {isPos ? '+' : ''}{market.change24h}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E7E4DE] text-[11px]">
                  <div>
                    <span className="text-[#77736C]">Raw Spread: </span>
                    <span className="font-mono font-semibold text-[#087F78]">{market.spread} pts</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#77736C]">Max Leverage: </span>
                    <span className="font-mono text-[#111111]">{market.leverage}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E7E4DE] flex items-center justify-between">
                  <a
                    href={BROKER_CONFIG.crmRegisterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#087F78]"
                  >
                    Open Account &rarr;
                  </a>
                  <a
                    href={BROKER_CONFIG.tradingTerminalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#181818] text-white text-xs font-medium rounded-xs hover:bg-black inline-flex items-center gap-1"
                  >
                    <span>Trade</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Callout */}
        <div className="p-6 sm:p-8 bg-[#F3F2EE] border border-[#E7E4DE] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Looking for custom liquidity or bespoke FIX 4.4 streams?
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
              Our institutional trading desk provides customized margin schedules, dedicated sub-accounts, and dark pool aggregation for high-volume traders.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="md"
            >
              Get Started
            </Button>
            <Button to="/contact" variant="outline" size="md">
              Contact Desk
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
