'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { MarketAsset } from '@/types/market';
import { BROKER_CONFIG } from '@/lib/config';
import { ArrowUpRight, ArrowDownRight, ArrowUpDown, ChevronDown, ExternalLink } from 'lucide-react';

export type SortField = 'price' | 'change24h' | 'volume24h';
export type SortDirection = 'asc' | 'desc';

interface MarketTableProps {
  markets: MarketAsset[];
  searchQuery?: string;
  initialPageSize?: number;
}

export const MarketTable: React.FC<MarketTableProps> = ({
  markets,
  searchQuery = '',
  initialPageSize = 12
}) => {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>('desc');
  const [visibleCount, setVisibleCount] = useState<number>(initialPageSize);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDir === 'desc') {
        setSortDir('asc');
      } else {
        setSortField(null);
        setSortDir('desc');
      }
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const sortedMarkets = useMemo(() => {
    if (!sortField) return markets;

    return [...markets].sort((a, b) => {
      let valA: number = 0;
      let valB: number = 0;

      if (sortField === 'price') {
        valA = a.price;
        valB = b.price;
      } else if (sortField === 'change24h') {
        valA = a.change24h;
        valB = b.change24h;
      } else if (sortField === 'volume24h') {
        // parse volume strings like '$34.2B' or '$950M'
        const parseVol = (volStr: string) => {
          const num = parseFloat(volStr.replace(/[^0-9.]/g, '')) || 0;
          if (volStr.includes('B')) return num * 1_000_000_000;
          if (volStr.includes('M')) return num * 1_000_000;
          return num;
        };
        valA = parseVol(a.volume24h);
        valB = parseVol(b.volume24h);
      }

      return sortDir === 'asc' ? valA - valB : valB - valA;
    });
  }, [markets, sortField, sortDir]);

  const displayedMarkets = sortedMarkets.slice(0, visibleCount);
  const hasMore = visibleCount < sortedMarkets.length;

  return (
    <div className="space-y-4">
      {/* Desktop & Tablet Table (Hidden on Mobile) */}
      <div className="hidden md:block bg-white border border-[#E7E4DE] rounded-xl overflow-hidden shadow-xs">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] font-mono uppercase text-[10px]">
              <th className="py-3 px-4">Asset</th>
              <th className="py-3 px-4">Pair</th>
              <th
                className="py-3 px-4 text-right cursor-pointer hover:text-[#111111] select-none"
                onClick={() => handleSort('price')}
              >
                <div className="inline-flex items-center gap-1">
                  <span>Price</span>
                  <ArrowUpDown className={`w-3 h-3 ${sortField === 'price' ? 'text-[#087F78]' : 'text-[#77736C]'}`} />
                </div>
              </th>
              <th
                className="py-3 px-4 text-right cursor-pointer hover:text-[#111111] select-none"
                onClick={() => handleSort('change24h')}
              >
                <div className="inline-flex items-center gap-1">
                  <span>24H Change</span>
                  <ArrowUpDown className={`w-3 h-3 ${sortField === 'change24h' ? 'text-[#087F78]' : 'text-[#77736C]'}`} />
                </div>
              </th>
              <th className="py-3 px-4 text-right hidden lg:table-cell">High</th>
              <th className="py-3 px-4 text-right hidden lg:table-cell">Low</th>
              <th
                className="py-3 px-4 text-right cursor-pointer hover:text-[#111111] select-none"
                onClick={() => handleSort('volume24h')}
              >
                <div className="inline-flex items-center gap-1">
                  <span>Volume</span>
                  <ArrowUpDown className={`w-3 h-3 ${sortField === 'volume24h' ? 'text-[#087F78]' : 'text-[#77736C]'}`} />
                </div>
              </th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7E4DE]">
            {displayedMarkets.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-xs text-[#77736C]">
                  No market assets found matching &ldquo;{searchQuery}&rdquo;.
                </td>
              </tr>
            ) : (
              displayedMarkets.map(market => {
                const isPos = market.change24h >= 0;
                return (
                  <tr
                    key={market.id}
                    className="hover:bg-[#F3F2EE]/50 transition-colors group"
                  >
                    {/* Asset Name */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-sm bg-[#F3F2EE] border border-[#E7E4DE] text-[10px] font-bold flex items-center justify-center text-[#111111] font-mono">
                          {market.baseCurrency || market.symbol.slice(0, 3)}
                        </span>
                        <div>
                          <div className="font-semibold text-xs text-[#111111]">
                            {market.name}
                          </div>
                          <span className="text-[10px] font-mono uppercase text-[#77736C]">
                            {market.category}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Pair Symbol */}
                    <td className="py-3.5 px-4 font-mono font-semibold text-xs text-[#111111]">
                      {market.symbol}
                    </td>

                    {/* Price */}
                    <td className="py-3.5 px-4 text-right font-mono font-medium text-[#111111] tabular-nums">
                      {market.price >= 100
                        ? `$${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                        : `$${market.price.toFixed(4)}`}
                    </td>

                    {/* 24h Change */}
                    <td
                      className={`py-3.5 px-4 text-right font-mono font-medium tabular-nums ${
                        isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                      }`}
                    >
                      <span className="inline-flex items-center">
                        {isPos ? '+' : ''}
                        {market.change24h.toFixed(2)}%
                      </span>
                    </td>

                    {/* High */}
                    <td className="py-3.5 px-4 text-right font-mono text-[#77736C] tabular-nums hidden lg:table-cell">
                      {market.high24h >= 100
                        ? `$${market.high24h.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                        : `$${market.high24h.toFixed(4)}`}
                    </td>

                    {/* Low */}
                    <td className="py-3.5 px-4 text-right font-mono text-[#77736C] tabular-nums hidden lg:table-cell">
                      {market.low24h >= 100
                        ? `$${market.low24h.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                        : `$${market.low24h.toFixed(4)}`}
                    </td>

                    {/* Volume */}
                    <td className="py-3.5 px-4 text-right font-mono text-[#77736C] tabular-nums">
                      {market.volume24h}
                    </td>

                    {/* Actions: View Market & Trade */}
                    <td className="py-3.5 px-4 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <Link
                          href={`/markets/${market.category}`}
                          className="px-2.5 py-1 text-[11px] font-semibold text-[#087F78] hover:text-[#076C66] hover:bg-[#DDEDEA]/50 rounded-xs transition-colors"
                        >
                          View Market
                        </Link>
                        <a
                          href={BROKER_CONFIG.tradingTerminalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#181818] hover:bg-black text-white text-[11px] font-medium rounded-xs transition-colors"
                        >
                          <span>Trade</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout (Under 768px): Asset, Pair, Price, 24h %, High/Low, Trade button */}
      <div className="md:hidden space-y-3">
        {displayedMarkets.length === 0 ? (
          <div className="p-6 bg-white border border-[#E7E4DE] rounded-xl text-center text-xs text-[#77736C]">
            No market assets found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          displayedMarkets.map(market => {
            const isPos = market.change24h >= 0;
            return (
              <div
                key={market.id}
                className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E7E4DE]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-sm bg-[#F3F2EE] border border-[#E7E4DE] text-[10px] font-bold flex items-center justify-center text-[#111111] font-mono">
                      {market.baseCurrency || market.symbol.slice(0, 3)}
                    </span>
                    <div>
                      <div className="font-semibold text-xs text-[#111111]">{market.name}</div>
                      <div className="text-[10px] font-mono text-[#77736C] uppercase">{market.symbol}</div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono bg-[#F3F2EE] text-[#77736C] px-1.5 py-0.5 rounded-xs">
                    {market.category}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <div className="text-[10px] text-[#77736C]">Price</div>
                    <div className="text-sm font-mono font-semibold text-[#111111] tabular-nums">
                      {market.price >= 100
                        ? `$${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                        : `$${market.price.toFixed(4)}`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[#77736C]">24H %</div>
                    <div
                      className={`text-sm font-mono font-semibold tabular-nums flex items-center justify-end ${
                        isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                      }`}
                    >
                      {isPos ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
                      {isPos ? '+' : ''}
                      {market.change24h.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#77736C] bg-[#FBFBF9] p-2 rounded border border-[#E7E4DE] mb-3">
                  <span>
                    High:{' '}
                    <span className="text-[#111111]">
                      {market.high24h >= 100 ? `$${market.high24h.toFixed(2)}` : `$${market.high24h.toFixed(4)}`}
                    </span>
                  </span>
                  <span>
                    Low:{' '}
                    <span className="text-[#111111]">
                      {market.low24h >= 100 ? `$${market.low24h.toFixed(2)}` : `$${market.low24h.toFixed(4)}`}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/markets/${market.category}`}
                    className="flex-1 py-2 text-center text-xs font-semibold text-[#087F78] bg-[#DDEDEA]/50 hover:bg-[#DDEDEA] rounded-md transition-colors"
                  >
                    View Market
                  </Link>
                  <a
                    href={BROKER_CONFIG.tradingTerminalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-xs font-semibold bg-[#181818] hover:bg-black text-white rounded-md transition-colors inline-flex items-center justify-center gap-1"
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

      {/* Pagination / Load More */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-white border border-[#E7E4DE] hover:border-[#087F78] hover:bg-[#F3F2EE] text-xs font-semibold text-[#111111] rounded-md transition-all cursor-pointer shadow-xs"
          >
            <span>Load More Instruments ({sortedMarkets.length - visibleCount} remaining)</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#77736C]" />
          </button>
        </div>
      )}
    </div>
  );
};
