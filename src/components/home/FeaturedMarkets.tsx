import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkline } from '../common/Sparkline';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '../../lib/mock-markets';
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react';

const FEATURED_SYMBOLS = [
  'BTC/USD',
  'ETH/USD',
  'SOL/USD',
  'BNB/USD',
  'DOGE/USD',
  'XAU/USD'
];

export const FeaturedMarkets: React.FC = () => {
  const featured = FEATURED_SYMBOLS.map(sym => {
    return (
      MOCK_MARKETS.find(m => m.symbol === sym) || {
        id: sym.toLowerCase().replace('/', '-'),
        symbol: sym,
        name: sym,
        category: 'crypto' as const,
        price: 100,
        change24h: 1.5,
        high24h: 105,
        low24h: 95,
        volume24h: '$1.2B',
        spread: 0.5,
        leverage: '1:50',
        sparkline: [98, 99, 100, 101, 100, 102, 100]
      }
    );
  });

  return (
    <section className="py-16 sm:py-24 bg-[#F3F2EE] border-b border-[#E7E4DE]" id="featured-markets">
      <Container size="default">
        <SectionHeading
          eyebrow={MOCK_DATA_LABEL}
          title="Markets in focus"
          description="Monitor selected instruments and their latest market movements."
          linkText="View Full Directory"
          linkHref="/markets"
        />

        {/* Notice Badge */}
        <div className="mb-6 px-3.5 py-2 bg-white/70 border border-[#E7E4DE] rounded-md text-[11px] text-[#77736C] flex items-center justify-between">
          <span>*Indicative market snapshot figures for interface demonstration. Not live executable pricing.</span>
          <span className="font-mono text-[10px] hidden sm:inline">6 Core Instruments</span>
        </div>

        {/* Exactly 6 Cards in 3-col desktop / 2-col tablet & mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map(market => {
            const isPos = market.change24h >= 0;
            return (
              <div
                key={market.id}
                className="p-5 sm:p-6 rounded-xl bg-white border border-[#E7E4DE] hover:border-[#087F78] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-sm bg-[#F3F2EE] border border-[#E7E4DE] text-[11px] font-bold flex items-center justify-center text-[#111111] font-mono">
                        {market.baseCurrency || market.symbol.slice(0, 3)}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-[#111111] leading-tight">
                          {market.symbol}
                        </div>
                        <div className="text-[11px] text-[#77736C]">{market.name}</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs">
                      {market.category}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-3">
                    <div className="text-2xl font-mono font-semibold text-[#111111] tabular-nums">
                      {market.price >= 100
                        ? `$${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                        : `$${market.price.toFixed(4)}`}
                    </div>
                    <div
                      className={`text-xs font-mono font-medium flex items-center tabular-nums ${
                        isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'
                      }`}
                    >
                      {isPos ? (
                        <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
                      )}
                      {isPos ? '+' : ''}
                      {market.change24h.toFixed(2)}%
                    </div>
                  </div>

                  {/* Sparkline Canvas */}
                  <div className="py-2 flex justify-center">
                    <Sparkline
                      data={market.sparkline}
                      isPositive={isPos}
                      width={240}
                      height={40}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#E7E4DE] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#77736C]">
                    Spread: {market.spread} pts
                  </span>
                  <Link
                    to={`/markets/${market.category}`}
                    className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Market</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
