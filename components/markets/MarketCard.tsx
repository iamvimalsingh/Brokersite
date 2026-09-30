import React from 'react';
import Link from 'next/link';
import { MarketAsset } from '@/types/market';
import { BROKER_CONFIG } from '@/lib/config';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MarketCardProps {
  market: MarketAsset;
}

export const MarketCard: React.FC<MarketCardProps> = ({ market }) => {
  const isPos = market.change24h >= 0;

  return (
    <div className="p-4 bg-white border border-[#E7E4DE] rounded-lg shadow-xs flex flex-col gap-3">
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
          <div className="text-[#77736C]">Volume</div>
          <div className="font-mono text-[#111111]">{market.volume24h}</div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#E7E4DE] flex items-center justify-between">
        <Link
          href={`/markets/${market.category}`}
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
};
