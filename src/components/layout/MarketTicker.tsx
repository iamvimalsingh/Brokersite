import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '../../lib/mock-markets';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const REQUIRED_TICKER_SYMBOLS = [
  'BTC/USD',
  'ETH/USD',
  'SOL/USD',
  'BNB/USD',
  'XRP/USD',
  'DOGE/USD',
  'XAU/USD',
  'EUR/USD',
  'GBP/USD',
  'USD/JPY'
];

export const MarketTicker: React.FC = () => {
  const rawItems = REQUIRED_TICKER_SYMBOLS.map(sym => {
    return (
      MOCK_MARKETS.find(m => m.symbol === sym) || {
        id: sym.toLowerCase().replace('/', '-'),
        symbol: sym,
        name: sym,
        category: 'forex' as const,
        price: 1.0,
        change24h: 0.15,
        high24h: 1.05,
        low24h: 0.95,
        volume24h: '$1B',
        spread: 0.2,
        leverage: '1:100',
        sparkline: [1, 1, 1]
      }
    );
  });

  const tickerItems = [...rawItems, ...rawItems];

  return (
    <div
      className="w-full bg-[#F3F2EE] border-b border-[#E7E4DE] text-[11px] sm:text-xs text-[#111111] overflow-hidden select-none"
      role="region"
      aria-label="Demo Market Quotes Ticker"
    >
      <div className="relative flex items-center overflow-x-hidden max-w-full">
        {/* Market snapshot badge */}
        <div className="z-10 bg-[#F3F2EE] px-3 sm:px-4 py-1.5 border-r border-[#E7E4DE] shrink-0 flex items-center gap-1.5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A9F6E]" />
          <span className="font-semibold uppercase tracking-wider text-[10px] text-[#77736C]">
            {MOCK_DATA_LABEL}
          </span>
        </div>

        {/* Scrolling items track */}
        <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap animate-ticker py-1.5">
          {tickerItems.map((item, index) => {
            const isPos = item.change24h >= 0;
            return (
              <Link
                key={`${item.id}-${index}`}
                to={`/markets/${item.category}`}
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="font-semibold text-[#111111]">{item.symbol}</span>
                <span className="font-mono tabular-nums text-[#77736C]">
                  {item.price >= 100
                    ? item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                    : item.price.toFixed(4)}
                </span>
                <span
                  className={`inline-flex items-center font-mono tabular-nums text-[11px] font-medium ${
                    isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                  }`}
                >
                  {isPos ? (
                    <ArrowUpRight className="w-3 h-3 inline stroke-[2.5]" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 inline stroke-[2.5]" />
                  )}
                  {Math.abs(item.change24h).toFixed(2)}%
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
