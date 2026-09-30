'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Cpu,
  ArrowUpRight,
  ArrowRight,
  Check,
  BarChart2,
  Sliders,
  Layers,
  Code,
  Calendar,
  ShieldCheck,
  Terminal,
  Activity,
  Zap,
  Globe
} from 'lucide-react';

export const MT5View: React.FC = () => {
  const mt5Sections = [
    {
      title: 'Advanced Charting',
      desc: 'Deploy 21 distinct timeframes from one minute up to one month, allowing multi-perspective technical alignment.',
      icon: <BarChart2 className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Technical Indicators',
      desc: 'Access 38 built-in technical indicators, 44 analytical graphical objects, and thousands of custom community tools.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Multiple Order Types',
      desc: 'Execute 6 pending order types including Buy/Sell Stop Limit, plus Market and Stop-Loss/Take-Profit brackets.',
      icon: <Sliders className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Algorithmic Trading',
      desc: 'Build, compile, and run automated Expert Advisors (EAs) using the object-oriented MQL5 programming language.',
      icon: <Code className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Market Monitoring',
      desc: 'Inspect real Depth of Market (DOM) with tick charts, Level II pricing, and integrated macroeconomic news feeds.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Strategy Development',
      desc: 'Run multi-currency, multi-threaded historical backtesting with genetic optimization algorithms and real tick history.',
      icon: <Terminal className="w-5 h-5 text-[#087F78]" />
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/platforms" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Platforms
          </Link>
          <Link href="/platforms/webtrader" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            WebTrader
          </Link>
          <Link href="/platforms/mobile" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Mobile Trader
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            MetaTrader 5
          </span>
          <Link href="/platforms/mt4" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            MetaTrader 4
          </Link>
          <Link href="/platforms/tradingview" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            TradingView
          </Link>
          <Link href="/platforms/compare" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Compare Platforms
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              NEXT-GEN INSTITUTIONAL DESKTOP
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Powerful tools for advanced market analysis.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              MetaTrader 5 brings comprehensive multi-asset charting, MQL5 automated strategy execution, Depth of Market transparency, and multi-currency backtesting to your trading desk.
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
                MetaTrader 5
              </Button>

              <Button
                to="/platforms/compare"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Explore Platform
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#087F78]" />
                MQL5 Object-Oriented IDE
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-[#087F78]" />
                21 Chart Timeframes
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#087F78]" />
                Live In-Platform Economic Feed
              </span>
            </div>
          </div>
        </div>

        {/* Visual MT5 Terminal Representation */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                Architecture Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Precision Engineering for Systematic Traders
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                Connect your {BRAND_NAME} Raw Spread or Pro account directly to the MetaTrader 5 network. Benefit from optical cross-connects to financial liquidity gateways and zero dealer requotes.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-[#111111]">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Full support for automated EAs, custom indicators, and scripts</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Level II market depth pricing with tick volume tracking</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Separate accounting for netting (exchange) and hedging (forex)</span>
                </div>
              </div>
            </div>

            {/* Terminal Window Representation */}
            <div className="lg:col-span-6 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E4DE] text-[11px] text-[#77736C]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#087F78]" />
                  <span className="font-bold text-[#111111]">MetaTrader 5 Client Terminal</span>
                </div>
                <span className="text-[10px] text-[#087F78]">64-Bit x86_64</span>
              </div>

              {/* Code / Visual Snippet */}
              <div className="bg-[#111111] text-[#DDEDEA] rounded-lg p-4 mb-3 text-[11px] space-y-1">
                <div className="text-[#77736C]">// MQL5 Automated Strategy Routine</div>
                <div><span className="text-[#087F78]">#include</span> &lt;Trade\Trade.mqh&gt;</div>
                <div><span className="text-[#E5484D]">CTrade</span> trade;</div>
                <div className="text-[#77736C]">// Execute Stop-Limit Order on Liquidity Breach</div>
                <div><span className="text-[#C98A00]">void</span> OnTick() &#123;</div>
                <div className="pl-4">trade.BuyLimit(<span className="text-[#0A9F6E]">1.00</span>, <span className="text-[#0A9F6E]">1.0850</span>, <span className="text-[#DDEDEA]">&quot;EURUSD&quot;</span>);</div>
                <div>&#125;</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 bg-white rounded border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C]">EXECUTION SPEED</div>
                  <div className="font-bold text-[#087F78]">32ms Equinix LD4</div>
                </div>
                <div className="p-2 bg-white rounded border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C]">ORDER TYPES</div>
                  <div className="font-bold text-[#111111]">6 Pending Modes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Feature Sections */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Platform Breakdown</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Engineered Capabilities in MT5
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Explore the advanced analytical and computational infrastructure native to MetaTrader 5.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mt5Sections.map((sec, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center mb-4">
                    {sec.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#111111] mb-1.5">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Get MT5 Access
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Deploy your strategies on MetaTrader 5.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Create an account to configure your MetaTrader 5 login credentials and access our straight-through execution environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto min-h-[44px]"
            >
              MetaTrader 5
            </Button>

            <Button
              to="/platforms/compare"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Platform
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
