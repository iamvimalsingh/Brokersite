'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  LineChart,
  ArrowUpRight,
  ArrowRight,
  Check,
  BarChart2,
  PenTool,
  Layers,
  GitCompare,
  Clock,
  ListFilter,
  Sparkles,
  TrendingUp,
  Maximize2
} from 'lucide-react';

export const TradingViewDetailView: React.FC = () => {
  const tvSections = [
    {
      title: 'Advanced Charts',
      desc: 'Supercharged HTML5 financial charts offering Heikin Ashi, Renko, Kagi, Point & Figure, and standard Candlestick modes.',
      icon: <LineChart className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Drawing Tools',
      desc: 'Over 90 intelligent drawing instruments including Gann, Fibonacci retracements, geometric channels, and Pitchforks.',
      icon: <PenTool className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Technical Indicators',
      desc: 'More than 100 built-in fundamental and technical indicators, plus over 100,000 public community-crafted indicators.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Market Comparison',
      desc: 'Overlay multiple asset symbols on a single chart to spot lead-lag relationships, beta divergences, and macro correlation.',
      icon: <GitCompare className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Multi-Timeframe Analysis',
      desc: 'Simultaneously view up to 8 synchronized charts per browser tab with linked crosshair and interval tracking.',
      icon: <Clock className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Dynamic Watchlists',
      desc: 'Keep track of major global symbols with color-coded tags, customized sorting, and real-time cloud data sync across devices.',
      icon: <ListFilter className="w-5 h-5 text-[#087F78]" />
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
          <Link href="/platforms/mt4" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            MetaTrader 4
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            TradingView
          </span>
          <Link href="/platforms/compare" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Compare Platforms
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              PREMIUM CLOUD CHARTING
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Powerful charting for deeper market analysis.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Connect your {BRAND_NAME} account directly to TradingView&apos;s world-renowned charting engine. Analyze opportunities with institutional drawing tools, multi-chart synchronization, and Pine Script.
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
                Explore TradingView
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
                <LineChart className="w-4 h-4 text-[#087F78]" />
                100+ Built-In Indicators
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#087F78]" />
                Pine Script Strategy Engine
              </span>
              <span className="flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-[#087F78]" />
                Multi-Chart Synchronization
              </span>
            </div>
          </div>
        </div>

        {/* Premium Chart Visualization Frame */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl overflow-hidden shadow-xs">
          {/* Chart Header Bar */}
          <div className="bg-[#F3F2EE] border-b border-[#E7E4DE] px-4 py-3 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#111111] text-sm">BTC/USD · 1D · REGEARFX</span>
              <span className="text-[#0A9F6E] font-semibold">$64,820.50 (+2.45%)</span>
              <span className="hidden sm:inline text-[#77736C]">O: 63,270 H: 65,100 L: 63,050 C: 64,820</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-white rounded border border-[#E7E4DE] text-[10px] text-[#77736C]">Indicators: EMA 20/50/200 · RSI</span>
              <span className="text-[10px] text-[#087F78] font-bold">Cloud Connected</span>
            </div>
          </div>

          {/* Chart Canvas Mockup with Candlestick & Volume Depth */}
          <div className="p-6 sm:p-8 bg-[#FBFBF9]">
            <div className="relative h-64 sm:h-80 bg-white border border-[#E7E4DE] rounded-xl p-4 flex flex-col justify-between overflow-hidden">
              {/* Subtle Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 grid-cols-6 pointer-events-none opacity-40">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border-b border-r border-[#E7E4DE]" />
                ))}
              </div>

              {/* Decorative Candlestick Shapes */}
              <div className="relative z-10 flex items-end justify-between h-48 px-2 sm:px-6">
                {[
                  { h: 60, bull: true, wickT: 10, wickB: 12 },
                  { h: 45, bull: false, wickT: 8, wickB: 10 },
                  { h: 70, bull: true, wickT: 15, wickB: 8 },
                  { h: 85, bull: true, wickT: 12, wickB: 14 },
                  { h: 65, bull: false, wickT: 14, wickB: 10 },
                  { h: 50, bull: false, wickT: 10, wickB: 8 },
                  { h: 90, bull: true, wickT: 16, wickB: 12 },
                  { h: 110, bull: true, wickT: 18, wickB: 15 },
                  { h: 95, bull: false, wickT: 12, wickB: 14 },
                  { h: 130, bull: true, wickT: 20, wickB: 18 },
                  { h: 145, bull: true, wickT: 15, wickB: 12 }
                ].map((c, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Top Wick */}
                    <div className="w-[1.5px] bg-[#77736C]" style={{ height: `${c.wickT}px` }} />
                    {/* Candle Body */}
                    <div
                      className={`w-3 sm:w-5 rounded-[1px] ${c.bull ? 'bg-[#0A9F6E]' : 'bg-[#E5484D]'}`}
                      style={{ height: `${c.h}px` }}
                    />
                    {/* Bottom Wick */}
                    <div className="w-[1.5px] bg-[#77736C]" style={{ height: `${c.wickB}px` }} />
                  </div>
                ))}
              </div>

              {/* Volume Profile Subplot */}
              <div className="relative z-10 pt-2 border-t border-[#E7E4DE] flex items-end justify-between h-14 px-2 sm:px-6 opacity-60">
                {[20, 15, 30, 42, 28, 22, 50, 68, 40, 85, 92].map((v, idx) => (
                  <div
                    key={idx}
                    className="w-3 sm:w-5 bg-[#087F78]/50 rounded-t-[1px]"
                    style={{ height: `${v * 0.5}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#77736C] mt-4">
              <span>Drawing Tools: Trendlines, Pitchforks, Fibonacci Arrays</span>
              <span className="text-[#087F78] font-semibold">100% Sync with RegearFX Execution Gate</span>
            </div>
          </div>
        </div>

        {/* 6 Feature Sections Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Feature Modules</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Why Traders Rely on TradingView
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Explore the advanced analytical environment designed for institutional-grade visual charting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tvSections.map((sec, i) => (
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
            Integrated Access
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Connect your account to TradingView today.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Link your live trading account to execute straight from TradingView charts with institutional spreads.
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
              Explore TradingView
            </Button>

            <Button
              to="/platforms/compare"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Compare All Platforms
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
