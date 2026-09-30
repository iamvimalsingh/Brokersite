'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { RelatedMarketCTA } from '@/components/markets/RelatedMarketCTA';
import { ArrowUpRight, ArrowDownRight, ArrowRight, ShieldCheck, Zap, Globe, Info } from 'lucide-react';

export const ForexView: React.FC = () => {
  const forexPairs = MOCK_MARKETS.filter(m => m.category === 'forex');

  const majorSymbols = ['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'AUD/USD', 'USD/CAD', 'NZD/USD'];
  const minorSymbols = ['EUR/GBP', 'EUR/JPY', 'GBP/JPY'];
  const exoticSymbols = [
    { symbol: 'USD/SGD', name: 'US Dollar / Singapore Dollar', price: 1.3080, change: 0.12, spread: 1.8 },
    { symbol: 'EUR/TRY', name: 'Euro / Turkish Lira', price: 37.450, change: -0.45, spread: 12.0 },
    { symbol: 'USD/MXN', name: 'US Dollar / Mexican Peso', price: 19.340, change: 0.28, spread: 8.5 }
  ];

  const majors = forexPairs.filter(p => majorSymbols.includes(p.symbol));
  const minors = forexPairs.filter(p => minorSymbols.includes(p.symbol));

  const concepts = [
    {
      title: 'Currency Pairs',
      desc: 'All forex trades involve simultaneously buying one currency and selling another, quoted as a pair such as EUR/USD.'
    },
    {
      title: 'Base & Quote Currency',
      desc: 'The first currency in the pair is the base currency (e.g. EUR); the second is the quote currency (e.g. USD), indicating the cost in quote units to purchase one base unit.'
    },
    {
      title: 'Spread',
      desc: 'The difference between the bid (sell) price and the ask (buy) price. Tight spreads reduce entry and exit execution friction.'
    },
    {
      title: 'Pip (Percentage in Point)',
      desc: 'The standard standardized unit of price movement, typically equal to 0.0001 for most currency pairs (or 0.01 for JPY-denominated pairs).'
    },
    {
      title: 'Leverage',
      desc: 'Allows market participants to hold positions larger than initial account capital, amplifying both potential returns and potential risks.'
    },
    {
      title: 'Session Volatility',
      desc: 'Currency price fluctuation driven by central bank announcements, interest rate differentials, trade balances, and overlapping global market sessions.'
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/markets" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Markets
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Forex
          </span>
          <Link href="/markets/crypto" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Crypto
          </Link>
          <Link href="/markets/indices" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Indices
          </Link>
          <Link href="/markets/commodities" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Commodities
          </Link>
          <Link href="/markets/metals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Metals
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              Currency Markets
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Trade global currencies.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Access major, minor, and selected exotic currency pairs with transparent variable spreads, structured leverage parameters, and reliable order routing through {BRAND_NAME}.
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
                60+ Currency Pairs
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#087F78]" />
                Spreads from 0.0 Pips*
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#087F78]" />
                24/5 Trading Sessions
              </span>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 px-4 py-2.5 bg-white border border-[#E7E4DE] rounded-lg text-xs text-[#77736C] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#087F78] shrink-0" />
            <span>Quotes displayed below reflect {MOCK_DATA_LABEL} for educational evaluation.</span>
          </div>
          <span className="font-mono text-[11px] hidden sm:inline">Foreign Exchange Desk</span>
        </div>

        {/* 1. Major Pairs Section */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Tier 1 Liquidity</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Major Currency Pairs
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              The world&apos;s most actively traded currency pairs paired against the US Dollar with the highest market liquidity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {majors.map(pair => {
              const isPos = pair.change24h >= 0;
              return (
                <div key={pair.id} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{pair.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{pair.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{pair.name}</div>
                    <div className="text-xl font-mono font-semibold text-[#111111] tabular-nums mb-2">
                      {pair.price.toFixed(4)}
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {pair.spread} pip</span>
                    <a
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-0.5"
                    >
                      Trade <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Minor Pairs Section */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Cross Currency</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Minor Currency Pairs (Crosses)
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Active currency pairs not including the US Dollar, facilitating direct cross-rate trade staging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {minors.map(pair => {
              const isPos = pair.change24h >= 0;
              return (
                <div key={pair.id} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{pair.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{pair.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{pair.name}</div>
                    <div className="text-xl font-mono font-semibold text-[#111111] tabular-nums mb-2">
                      {pair.price >= 100 ? pair.price.toFixed(2) : pair.price.toFixed(4)}
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {pair.spread} pip</span>
                    <a
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-0.5"
                    >
                      Trade <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Selected Exotic Pairs */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Emerging Markets</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Selected Exotic Pairs
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Combinations of major currencies with emerging economy currencies exhibiting distinct volatility characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {exoticSymbols.map(pair => (
              <div key={pair.symbol} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-sm text-[#111111]">{pair.symbol}</span>
                    <span className={`font-mono text-xs font-semibold ${pair.change >= 0 ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                      {pair.change >= 0 ? '+' : ''}{pair.change.toFixed(2)}%
                    </span>
                  </div>
                  <div className="text-[11px] text-[#77736C] mb-3">{pair.name}</div>
                  <div className="text-xl font-mono font-semibold text-[#111111] tabular-nums mb-2">
                    {pair.price.toFixed(3)}
                  </div>
                </div>
                <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                  <span>Spread: ~{pair.spread} pips</span>
                  <span className="text-[10px] text-[#77736C]">Indicative Quote</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Core Currency Market Concepts */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-1">
              Foundational Knowledge
            </div>
            <h3 className="text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Understanding Foreign Exchange Concepts
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Key mechanics and definitions every currency trader should understand before engaging the market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="text-[10px] font-mono uppercase text-[#087F78] font-bold mb-1">
                  Concept 0{idx + 1}
                </div>
                <h4 className="text-sm font-semibold text-[#111111] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#77736C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Market CTA */}
        <RelatedMarketCTA categoryName="Forex" />
      </Container>
    </div>
  );
};
