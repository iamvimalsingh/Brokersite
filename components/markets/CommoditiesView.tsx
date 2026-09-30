'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { RelatedMarketCTA } from '@/components/markets/RelatedMarketCTA';
import { ArrowUpRight, ArrowDownRight, Flame, Globe2, AlertTriangle, Truck, Info } from 'lucide-react';

export const CommoditiesView: React.FC = () => {
  const commodityInstruments = MOCK_MARKETS.filter(m => m.category === 'commodities');

  const commodityTopics = [
    {
      title: 'Commodity Market Overview',
      desc: 'Commodity markets encompass standardized contracts for raw physical goods across fossil energies, industrial metals, and agricultural foodstuffs.',
      icon: <Globe2 className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Drivers of Commodity Prices',
      desc: 'Physical supply bottlenecks, OPEC+ production quotas, weather disruptions, geopolitical transit corridor security, and global industrial demand dictate pricing.',
      icon: <Flame className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Trading Considerations & Rollovers',
      desc: 'Futures-based commodity contracts exhibit contango or backwardation curves, requiring awareness of contract expirations, cash settlement terms, and storage financing.',
      icon: <Truck className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Commodity Risk Factors',
      desc: 'Sudden macroeconomic supply shocks or geopolitical escalation can induce steep gap opens and wide bid/ask slippage during volatile trading sessions.',
      icon: <AlertTriangle className="w-5 h-5 text-[#087F78]" />
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
          <Link href="/markets/forex" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Forex
          </Link>
          <Link href="/markets/crypto" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Crypto
          </Link>
          <Link href="/markets/indices" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Indices
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Commodities
          </span>
          <Link href="/markets/metals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Metals
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              Energy &amp; Raw Materials
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Access global commodity markets.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Trade key energy benchmarks, base industrial metals, and agricultural contracts with published trading terms, competitive variable spreads, and direct routing through {BRAND_NAME}.
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
            <span>Commodity quotes below reflect {MOCK_DATA_LABEL} for educational platform demonstration.</span>
          </div>
          <span className="font-mono text-[11px] hidden sm:inline">Commodities Desk</span>
        </div>

        {/* Commodity Instruments Grid */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Energy &amp; Agricultural</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Core Commodity Contracts
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Popular cash and forward contracts across crude oils, natural gas, copper, and grains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commodityInstruments.map(comm => {
              const isPos = comm.change24h >= 0;
              return (
                <div key={comm.id} className="p-5 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{comm.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{comm.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{comm.name}</div>
                    <div className="text-2xl font-mono font-semibold text-[#111111] tabular-nums mb-3">
                      ${comm.price >= 100 ? comm.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : comm.price.toFixed(3)}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {comm.spread} pts</span>
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

        {/* Commodity Mechanics & Pricing Drivers */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-1">
              Market Architecture
            </div>
            <h3 className="text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Commodity Market Fundamentals
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Essential economic drivers, contract structures, and volatility considerations in commodity markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commodityTopics.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Market CTA */}
        <RelatedMarketCTA categoryName="Commodities" />
      </Container>
    </div>
  );
};
