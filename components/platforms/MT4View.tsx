'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  BarChart2,
  ArrowUpRight,
  ArrowRight,
  Check,
  Cpu,
  Layers,
  Sliders,
  Activity,
  Code,
  ShieldCheck,
  Clock,
  Terminal,
  Globe
} from 'lucide-react';

export const MT4View: React.FC = () => {
  const mt4Sections = [
    {
      title: 'Technical Analysis',
      desc: '30 built-in indicators and 24 analytical objects allow traders to detect price patterns, trends, and support/resistance levels.',
      icon: <BarChart2 className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Expert Advisors (EAs)',
      desc: 'Automate trades with algorithmic robots using MQL4. Deploy custom backtested scripts to execute positions around the clock.',
      icon: <Cpu className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Multiple Order Types',
      desc: 'Stage instant market fills or choose between 4 standard pending order types (Buy Limit, Sell Limit, Buy Stop, Sell Stop).',
      icon: <Sliders className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Multi-Chart Layouts',
      desc: 'Open unlimited charts across 9 timeframes from M1 to MN1, each configured with independent indicators and template styles.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Market Monitoring',
      desc: 'Track live streaming market prices in the Market Watch window, monitor tick charts, and review real-time account equity.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Custom Indicators',
      desc: 'Access thousands of indicators developed by the global MQL4 developer community or write proprietary algorithms in MetaEditor.',
      icon: <Code className="w-5 h-5 text-[#087F78]" />
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
          <Link href="/platforms/mt5" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            MetaTrader 5
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            MetaTrader 4
          </span>
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
              THE GOLD STANDARD IN FX TRADING
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              A proven environment for active traders.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              MetaTrader 4 remains the world&apos;s most widely adopted foreign exchange platform. Known for ultra-fast execution, lightweight resource usage, and extensive algorithmic EA support.
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
                Open MT4 Account
              </Button>

              <Button
                to="/platforms/compare"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Compare Platforms
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#087F78]" />
                Automated EA Robots
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#087F78]" />
                9 Standard Chart Timeframes
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#087F78]" />
                Proven 15+ Year Stability
              </span>
            </div>
          </div>
        </div>

        {/* Feature Representation Card */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                Execution Reliability
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Trusted Global Standard for Currency Trading
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                Connect MT4 to {BRAND_NAME} deep liquidity pools. Experience competitive spreads starting from 0.0 pips on major currencies, zero dealing-desk intervention, and high-frequency order placement.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-[#111111]">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Support for all legacy MQL4 custom scripts and indicators</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Trailing stop loss order modification hosted on server</span>
                </div>
                <div className="flex items-center gap-2 text-[#111111]">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Lightweight client footprint compatible with standard Windows/macOS hardware</span>
                </div>
              </div>
            </div>

            {/* MT4 Visual Card */}
            <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E4DE] text-[11px] text-[#77736C]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#087F78]" />
                  <span className="font-bold text-[#111111]">MetaTrader 4 Core</span>
                </div>
                <span className="text-[#087F78] font-semibold text-[10px]">CONNECTED</span>
              </div>

              <div className="space-y-2 mb-3">
                <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex justify-between">
                  <div>
                    <div className="font-bold text-[#111111]">EUR/USD (Euro / USD)</div>
                    <div className="text-[10px] text-[#77736C]">MQL4 EA Active: Scalper Pro</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#087F78]">1.0874</div>
                    <div className="text-[10px] text-[#0A9F6E]">0.0 Pip Spread</div>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex justify-between">
                  <div>
                    <div className="font-bold text-[#111111]">GBP/USD (Pound / USD)</div>
                    <div className="text-[10px] text-[#77736C]">Indicator: RSI + Bollinger</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#111111]">1.3045</div>
                    <div className="text-[10px] text-[#77736C]">0.1 Pip Spread</div>
                  </div>
                </div>
              </div>

              <div className="p-2 bg-[#DDEDEA]/50 rounded border border-[#087F78]/20 text-[10px] text-[#087F78] flex items-center justify-between">
                <span>London LD4 Fiber</span>
                <span className="font-bold">Zero Re-quotes</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Feature Sections */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Core Framework</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              MetaTrader 4 Feature Suite
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Explore the battle-tested modules that have made MT4 the industry standard for over a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mt4Sections.map((sec, i) => (
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
            Trade with MT4
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Access proven reliability on MetaTrader 4.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Open an account to receive your MT4 server login details and configure automated strategies with low-latency execution.
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
              Open MT4 Account
            </Button>

            <Button
              to="/platforms/compare"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Compare Platforms
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
