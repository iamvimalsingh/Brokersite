'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { Sparkline } from '@/components/ui/Sparkline';
import { ArrowUpRight, ArrowDownRight, ArrowRight, Info } from 'lucide-react';

const SNAPSHOT_SYMBOLS = [
  'BTC/USD',
  'EUR/USD',
  'XAU/USD',
  'US500',
  'ETH/USD',
  'GBP/USD'
];

export const MarketSnapshot: React.FC = () => {
  const snapshotMarkets = SNAPSHOT_SYMBOLS.map(sym => {
    return (
      MOCK_MARKETS.find(m => m.symbol === sym) || {
        id: sym.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        symbol: sym,
        name: sym,
        category: 'crypto' as const,
        price: 100,
        change24h: 1.2,
        high24h: 105,
        low24h: 98,
        volume24h: '$1B',
        spread: 0.2,
        leverage: '1:50',
        sparkline: [98, 99, 100, 101, 100, 102, 100]
      }
    );
  });

  return (
    <div className="mb-12">
      {/* Header and Mandatory Disclosure */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-[#E7E4DE]">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
            Market Snapshot
          </h2>
          <p className="text-xs text-[#77736C] mt-0.5">
            Key benchmark instruments across major global asset classes.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F3F2EE] border border-[#E7E4DE] rounded text-[11px] text-[#77736C]">
          <Info className="w-3.5 h-3.5 text-[#087F78]" />
          <span>Demo market data · Illustrative snapshots</span>
        </div>
      </div>

      {/* 6 Snapshot Cards (3 cols on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {snapshotMarkets.map(item => {
          const isPos = item.change24h >= 0;
          return (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-sm bg-[#F3F2EE] border border-[#E7E4DE] text-[10px] font-bold flex items-center justify-center text-[#111111] font-mono">
                      {item.baseCurrency || item.symbol.slice(0, 3)}
                    </span>
                    <div>
                      <div className="font-semibold text-xs text-[#111111]">{item.symbol}</div>
                      <div className="text-[11px] text-[#77736C]">{item.name}</div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-3">
                  <div className="text-2xl font-mono font-semibold text-[#111111] tabular-nums">
                    {item.price >= 100
                      ? `$${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      : `$${item.price.toFixed(4)}`}
                  </div>
                  <div
                    className={`text-xs font-mono font-medium flex items-center tabular-nums ${
                      isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                    }`}
                  >
                    {isPos ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
                    {isPos ? '+' : ''}
                    {item.change24h.toFixed(2)}%
                  </div>
                </div>

                {/* Small Chart */}
                <div className="py-1 flex justify-center mb-3">
                  <Sparkline
                    data={item.sparkline}
                    isPositive={isPos}
                    width={220}
                    height={38}
                    className="w-full"
                  />
                </div>

                {/* High / Low Row */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#77736C] pt-2.5 border-t border-[#E7E4DE]/60">
                  <span>
                    24h High:{' '}
                    <span className="text-[#111111] font-medium">
                      {item.high24h >= 100 ? `$${item.high24h.toFixed(2)}` : `$${item.high24h.toFixed(4)}`}
                    </span>
                  </span>
                  <span>
                    24h Low:{' '}
                    <span className="text-[#111111] font-medium">
                      {item.low24h >= 100 ? `$${item.low24h.toFixed(2)}` : `$${item.low24h.toFixed(4)}`}
                    </span>
                  </span>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E7E4DE] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#77736C]">
                  Spread: {item.spread} pts
                </span>
                <Link
                  href={`/markets/${item.category}`}
                  className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Market</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
