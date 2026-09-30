import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowUpRight, TrendingUp, Sliders, ArrowRight, BarChart2 } from 'lucide-react';
import { BROKER_CONFIG } from '@/lib/config';

export const TradingExperience: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#E7E4DE]" id="trading-experience">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
            Trading Experience
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Built around the way markets move.
          </h2>
          <p className="text-sm sm:text-base text-[#77736C] leading-relaxed">
            Move from market discovery to informed execution with a streamlined experience that brings pricing, analysis and trading tools closer together.
          </p>
        </div>

        {/* 3 Editorial Feature Blocks with Rich Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Block 1: Market Discovery */}
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#087F78]/50 transition-all shadow-xs">
            <div>
              {/* Visual Composition: Mini Watchlist Preview */}
              <div className="mb-6 p-4 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#77736C] uppercase pb-2 mb-3 border-b border-[#E7E4DE]">
                  <span>Discovery Monitor</span>
                  <span className="text-[#087F78] font-semibold">Active</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#111111]">EUR/USD</span>
                    <span className="font-mono tabular-nums text-[#111111]">1.0874</span>
                    <span className="font-mono text-[#0A9F6E] text-[11px]">+0.32%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#111111]">BTC/USD</span>
                    <span className="font-mono tabular-nums text-[#111111]">$64,820</span>
                    <span className="font-mono text-[#0A9F6E] text-[11px]">+2.84%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#111111]">XAU/USD</span>
                    <span className="font-mono tabular-nums text-[#111111]">$2,658</span>
                    <span className="font-mono text-[#E5484D] text-[11px]">-0.18%</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-[#087F78] font-semibold mb-2">
                Phase 01 · Scanning
              </div>
              <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Market Discovery
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                Scan multiple asset classes with organized directories, benchmark indices, and comprehensive market tables that highlight emerging volume and daily price movements.
              </p>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
              <span className="text-[#77736C]">Directory Coverage</span>
              <span className="font-mono font-semibold text-[#111111]">60+ Instruments</span>
            </div>
          </div>

          {/* Block 2: Research & Analysis */}
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#087F78]/50 transition-all shadow-xs">
            <div>
              {/* Visual Composition: Technical Structure & Event Overlay */}
              <div className="mb-6 p-4 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#77736C] uppercase pb-2 mb-3 border-b border-[#E7E4DE]">
                  <span>Technical Structure</span>
                  <span className="text-[#111111] font-semibold">H4 Framework</span>
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-semibold text-[#111111]">Pivot Level</span>
                  <span className="text-xs font-mono text-[#087F78]">R1: 1.0920 · S1: 1.0840</span>
                </div>
                {/* Horizontal Depth / Momentum Bar */}
                <div className="w-full bg-[#E7E4DE] h-1.5 rounded-full overflow-hidden mb-3">
                  <div className="bg-[#087F78] h-full rounded-full" style={{ width: '68%' }} />
                </div>
                <div className="p-2 bg-white rounded-xs border border-[#E7E4DE] text-[10px] text-[#77736C] flex items-center justify-between">
                  <span>Economic Release: US CPI</span>
                  <span className="font-mono text-[#111111] font-medium">Consensus: 2.9%</span>
                </div>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-[#087F78] font-semibold mb-2">
                Phase 02 · Evaluation
              </div>
              <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Research &amp; Analysis
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                Ground your trading ideas in macroeconomic calendar expectations, technical chart levels, interactive position sizing calculators, and statistical correlation metrics.
              </p>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
              <span className="text-[#77736C]">Analysis Toolkit</span>
              <span className="font-mono font-semibold text-[#111111]">Calendars &amp; Calcs</span>
            </div>
          </div>

          {/* Block 3: Execution Access */}
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#087F78]/50 transition-all shadow-xs">
            <div>
              {/* Visual Composition: Order Ticket Preview */}
              <div className="mb-6 p-4 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#77736C] uppercase pb-2 mb-3 border-b border-[#E7E4DE]">
                  <span>Order Staging Ticket</span>
                  <span className="text-[#0A9F6E] font-semibold">Online</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="p-2 rounded-xs bg-white border border-[#E7E4DE] text-center">
                    <div className="text-[10px] text-[#77736C]">Bid (Sell)</div>
                    <div className="text-xs font-mono font-semibold text-[#111111]">1.08738</div>
                  </div>
                  <div className="p-2 rounded-xs bg-[#DDEDEA]/50 border border-[#087F78]/30 text-center">
                    <div className="text-[10px] text-[#087F78]">Ask (Buy)</div>
                    <div className="text-xs font-mono font-semibold text-[#087F78]">1.08740</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#77736C] flex items-center justify-between font-mono">
                  <span>Spread: 0.2 pip</span>
                  <span>Execution: External STP/DMA</span>
                </div>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-[#087F78] font-semibold mb-2">
                Phase 03 · Execution
              </div>
              <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Execution Access
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                Connect directly to our supported external WebTrader, mobile applications, and established desktop platforms with clear order parameters and straight-through routing.
              </p>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
              <span className="text-[#77736C]">Terminal Connectivity</span>
              <span className="font-mono font-semibold text-[#111111]">Web &amp; Mobile</span>
            </div>
          </div>
        </div>

        {/* Section Action CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#F3F2EE] border border-[#E7E4DE] rounded-xl">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#111111]">
              Ready to explore our trading conditions and specifications?
            </span>
            <span className="text-xs text-[#77736C]">
              Review account structures, spreads, leverage schedules, and order execution parameters.
            </span>
          </div>
          <Button
            to="/trading"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
            className="shrink-0"
          >
            Explore Trading
          </Button>
        </div>
      </Container>
    </section>
  );
};
