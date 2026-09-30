'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { Sparkline } from '@/components/ui/Sparkline';
import { RelatedMarketCTA } from '@/components/markets/RelatedMarketCTA';
import { ArrowUpRight, ArrowDownRight, Sparkles, Shield, Compass, Scale, Info } from 'lucide-react';

export const MetalsView: React.FC = () => {
  const metalInstruments = MOCK_MARKETS.filter(m => m.category === 'metals');
  const gold = metalInstruments.find(m => m.symbol === 'XAU/USD') || metalInstruments[0];
  const otherMetals = metalInstruments.filter(m => m.symbol !== 'XAU/USD');

  const metalDynamics = [
    {
      title: 'Store of Value & Safe Haven',
      desc: 'Gold (XAU/USD) has historically served as a core reserve asset and hedge during periods of prolonged systemic risk, sovereign debt instability, and currency depreciation.',
      icon: <Shield className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Inflation Hedging Role',
      desc: 'Physical bullion and spot metal contracts reflect tangible wealth, historically preserving purchasing power during high inflationary periods and fiat expansion.',
      icon: <Sparkles className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Real Yields & Dollar Relationship',
      desc: 'Precious metals typically exhibit an inverse correlation with US real yields (Treasuries minus inflation) and the US Dollar index, reacting sharply to central bank monetary policy.',
      icon: <Scale className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Industrial vs. Speculative Demand',
      desc: 'While Gold is driven primarily by investment and central bank allocations, Silver and Platinum demand is heavily fueled by electronics, solar energy, and automotive technology.',
      icon: <Compass className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Market Hours & Session Volatility',
      desc: 'Metals trade 23 hours a day, 5 days a week, with peak liquidity and price velocity centering around the London LBMA benchmarks and New York COMEX pit opens.',
      icon: <Info className="w-5 h-5 text-[#087F78]" />
    }
  ];

  const isGoldPos = gold.change24h >= 0;

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/markets" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Markets
          </Link>
          <Link href="/markets/forex" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Forex
          </Link>
          <Link href="/markets/crypto" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Crypto
          </Link>
          <Link href="/markets/indices" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Indices
          </Link>
          <Link href="/markets/commodities" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Commodities
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Metals
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              Precious Bullion
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Trade precious and industrial metals.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Access spot prices across Gold, Silver, Platinum, and Palladium with tight institutional spreads, physical bullion-grade liquidity, and dedicated execution tools at {BRAND_NAME}.
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
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 px-4 py-2.5 bg-white border border-[#E7E4DE] rounded-lg text-xs text-[#77736C] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#087F78] shrink-0" />
            <span>Spot metal quotes below reflect {MOCK_DATA_LABEL} for educational demonstration.</span>
          </div>
          <span className="font-mono text-[11px] hidden sm:inline">Precious Metals Desk</span>
        </div>

        {/* Prominent Spot Gold (XAU/USD) Feature Section */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs hover:border-[#087F78]/50 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                  Primary Reserve Asset
                </span>
                <span className="text-[11px] font-mono text-[#77736C]">Spot Contract</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Gold (XAU/USD)
              </h2>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                The global benchmark store of value. Trade spot gold against the US Dollar with tight variable spreads, flexible leverage up to 1:100, and institutional straight-through order routing.
              </p>

              <div className="flex items-baseline gap-4 mb-6">
                <div className="text-3xl sm:text-4xl font-mono font-semibold text-[#111111] tabular-nums">
                  ${gold.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className={`text-sm font-mono font-semibold flex items-center ${isGoldPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                  {isGoldPos ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> : <ArrowDownRight className="w-4 h-4 mr-0.5" />}
                  {isGoldPos ? '+' : ''}{gold.change24h.toFixed(2)}%
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-3 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE] text-xs font-mono mb-6">
                <div>
                  <div className="text-[#77736C] text-[10px]">SPREAD</div>
                  <div className="font-semibold text-[#087F78]">{gold.spread} pts</div>
                </div>
                <div>
                  <div className="text-[#77736C] text-[10px]">24H HIGH</div>
                  <div className="font-semibold text-[#111111]">${gold.high24h.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-[#77736C] text-[10px]">24H LOW</div>
                  <div className="font-semibold text-[#111111]">${gold.low24h.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  href={BROKER_CONFIG.tradingTerminalUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Trade XAU/USD
                </Button>
                <Link
                  href="/trading/conditions"
                  className="text-xs font-semibold text-[#111111] hover:text-[#087F78] px-3 py-2 transition-colors"
                >
                  View Gold Specifications &rarr;
                </Link>
              </div>
            </div>

            {/* Sparkline & Visual Depth Graphic */}
            <div className="lg:col-span-6 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl p-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#77736C] pb-3 mb-4 border-b border-[#E7E4DE]">
                <span>24H Trend Geometry</span>
                <span className="text-[#087F78] font-semibold">Active Snapshot</span>
              </div>
              <div className="py-4 flex justify-center">
                <Sparkline
                  data={gold.sparkline}
                  isPositive={isGoldPos}
                  width={340}
                  height={90}
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#77736C] pt-3 border-t border-[#E7E4DE]/60">
                <span>Indicative Depth: 420 oz</span>
                <span>Execution: Direct ECN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Silver, Platinum, Palladium Cards */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Industrial &amp; Rare Metals</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Silver, Platinum &amp; Palladium
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Explore precious metals driven by industrial transformation alongside store-of-value appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherMetals.map(metal => {
              const isPos = metal.change24h >= 0;
              return (
                <div key={metal.id} className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{metal.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{metal.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{metal.name}</div>
                    <div className="text-2xl font-mono font-semibold text-[#111111] tabular-nums mb-3">
                      ${metal.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {metal.spread} pts</span>
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

        {/* Metal Dynamics & Driving Factors */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-1">
              Macro Drivers
            </div>
            <h3 className="text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Dynamics of Precious Metal Markets
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Key economic relationships influencing bullion pricing and volatility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalDynamics.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center mb-3">
                  {item.icon}
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
        <RelatedMarketCTA categoryName="Precious Metals" />
      </Container>
    </div>
  );
};
