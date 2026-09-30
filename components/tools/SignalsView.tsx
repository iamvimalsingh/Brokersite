'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Radio,
  ArrowUpRight,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  Sliders
} from 'lucide-react';

interface SignalItem {
  id: string;
  instrument: string;
  name: string;
  direction: 'Bullish' | 'Bearish' | 'Neutral';
  timeframe: 'H1' | 'H4' | 'D1';
  entry: string;
  stopLoss: string;
  takeProfit: string;
  status: 'Active' | 'Target Reached' | 'In Range';
  createdAt: string;
  rationale: string;
}

const SIGNALS: SignalItem[] = [
  {
    id: 'sig-eurusd',
    instrument: 'EUR/USD',
    name: 'Euro / US Dollar',
    direction: 'Bearish',
    timeframe: 'H4',
    entry: '1.0890',
    stopLoss: '1.0925',
    takeProfit: '1.0820',
    status: 'Active',
    createdAt: '2 hours ago',
    rationale: 'Breakdown below rising wedge trendline supported by declining MACD histogram and resistance near 1.0900.'
  },
  {
    id: 'sig-gbpusd',
    instrument: 'GBP/USD',
    name: 'British Pound / US Dollar',
    direction: 'Bullish',
    timeframe: 'H1',
    entry: '1.3035',
    stopLoss: '1.2995',
    takeProfit: '1.3110',
    status: 'In Range',
    createdAt: '4 hours ago',
    rationale: 'Bounce off key 50-period EMA on the hourly chart with bullish divergence on 14-period RSI.'
  },
  {
    id: 'sig-xauusd',
    instrument: 'XAU/USD',
    name: 'Spot Gold',
    direction: 'Bullish',
    timeframe: 'D1',
    entry: '2650.00',
    stopLoss: '2632.00',
    takeProfit: '2685.00',
    status: 'Active',
    createdAt: '6 hours ago',
    rationale: 'Sustained consolidation above psychological $2,650 support accompanied by safe-haven accumulation.'
  },
  {
    id: 'sig-btcusd',
    instrument: 'BTC/USD',
    name: 'Bitcoin Derivative',
    direction: 'Neutral',
    timeframe: 'H4',
    entry: '64500.00',
    stopLoss: '62800.00',
    takeProfit: '66800.00',
    status: 'In Range',
    createdAt: '8 hours ago',
    rationale: 'Mean reversion channel trade between $63,000 baseline support and $66,000 range ceiling.'
  },
  {
    id: 'sig-ethusd',
    instrument: 'ETH/USD',
    name: 'Ethereum Derivative',
    direction: 'Bullish',
    timeframe: 'H4',
    entry: '2625.00',
    stopLoss: '2560.00',
    takeProfit: '2750.00',
    status: 'Target Reached',
    createdAt: '14 hours ago',
    rationale: 'Double bottom confirmation on H4 time horizon with volume expansion breaking initial neckline.'
  }
];

export const SignalsView: React.FC = () => {
  const [filterDirection, setFilterDirection] = useState<string>('All');

  const filteredSignals = filterDirection === 'All'
    ? SIGNALS
    : SIGNALS.filter(s => s.direction === filterDirection);

  const getDirectionBadge = (dir: 'Bullish' | 'Bearish' | 'Neutral') => {
    switch (dir) {
      case 'Bullish':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0A9F6E]/15 text-[#0A9F6E]">
            <TrendingUp className="w-3.5 h-3.5" /> BULLISH
          </span>
        );
      case 'Bearish':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#E5484D]/15 text-[#E5484D]">
            <TrendingDown className="w-3.5 h-3.5" /> BEARISH
          </span>
        );
      case 'Neutral':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#F3F2EE] text-[#77736C]">
            <Minus className="w-3.5 h-3.5" /> NEUTRAL
          </span>
        );
    }
  };

  const getStatusBadge = (st: string) => {
    switch (st) {
      case 'Active':
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#DDEDEA] text-[#087F78] font-bold">ACTIVE</span>;
      case 'Target Reached':
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A9F6E]/20 text-[#0A9F6E] font-bold">TARGET REACHED</span>;
      case 'In Range':
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F3F2EE] text-[#77736C] font-semibold">IN RANGE</span>;
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/tools" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Tools
          </Link>
          <Link href="/tools/calculators" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Calculators
          </Link>
          <Link href="/tools/economic-calendar" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Economic Calendar
          </Link>
          <Link href="/tools/market-analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Trading Signals
          </span>
          <Link href="/tools/quant" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Quantitative Tools
          </Link>
          <Link href="/tools/algo" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              ALGORITHMIC SIGNAL CENTER
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Systematic Trading Signals
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Algorithmic pattern recognition and momentum model alerts featuring calculated entry corridors, invalidation stop levels, and risk-reward targets.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                href={BROKER_CONFIG.tradingTerminalUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Trade in Terminal
              </Button>

              <Button
                to="/trading/risk-management"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Risk Management Guidelines
              </Button>
            </div>
          </div>
        </div>

        {/* Direction Filter Bar */}
        <div className="mb-8 flex items-center justify-between gap-4 p-4 bg-white border border-[#E7E4DE] rounded-xl shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#77736C]">Filter By Bias:</span>
            {['All', 'Bullish', 'Bearish', 'Neutral'].map(dir => (
              <button
                key={dir}
                type="button"
                onClick={() => setFilterDirection(dir)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  filterDirection === dir
                    ? 'bg-[#181818] text-white shadow-xs'
                    : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {dir}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-[#77736C] hidden sm:block">
            Showing {filteredSignals.length} Active Models
          </div>
        </div>

        {/* Signals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filteredSignals.map(sig => (
            <div
              key={sig.id}
              className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E4DE]">
                  <div>
                    <span className="font-bold text-base text-[#111111]">{sig.instrument}</span>
                    <span className="text-xs text-[#77736C] block">{sig.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#F3F2EE] font-mono text-[10px] font-bold text-[#77736C]">
                      {sig.timeframe}
                    </span>
                    {getDirectionBadge(sig.direction)}
                  </div>
                </div>

                {/* Price Levels Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE] font-mono text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-[#77736C] block">ENTRY</span>
                    <span className="font-bold text-[#111111]">{sig.entry}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#E5484D] block font-semibold">STOP LOSS</span>
                    <span className="font-bold text-[#E5484D]">{sig.stopLoss}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#0A9F6E] block font-semibold">TAKE PROFIT</span>
                    <span className="font-bold text-[#0A9F6E]">{sig.takeProfit}</span>
                  </div>
                </div>

                <div className="text-xs text-[#77736C] leading-relaxed mb-4">
                  <span className="font-semibold text-[#111111]">Technical Setup: </span>
                  {sig.rationale}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  {getStatusBadge(sig.status)}
                  <span className="text-[11px] text-[#77736C]">{sig.createdAt}</span>
                </div>
                <a
                  href={BROKER_CONFIG.tradingTerminalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                >
                  <span>Trade Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Explanations Section */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Methodology &amp; Risk</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              How Signals Are Formulated &amp; Interpreted
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Ensure you understand the statistical nature and risk governance behind technical signal feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
              <div className="font-semibold text-sm text-[#111111] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#087F78]" />
                <span>What Are Trading Signals?</span>
              </div>
              <p className="text-[#77736C] leading-relaxed">
                Trading signals are mathematical pattern notifications generated when quantitative indicators, price volatility thresholds, and moving average crossovers converge on defined technical setups.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
              <div className="font-semibold text-sm text-[#111111] flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#087F78]" />
                <span>How Signals Are Interpreted</span>
              </div>
              <p className="text-[#77736C] leading-relaxed">
                Signals are not guarantees of future outcomes. Traders use them as reference frameworks to identify potential support/resistance inflection zones and predetermine disciplined risk-to-reward ratios.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
              <div className="font-semibold text-sm text-[#111111] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#C98A00]" />
                <span>Risk Considerations</span>
              </div>
              <p className="text-[#77736C] leading-relaxed">
                Always enforce strict position sizing (maximum 1% to 2% of account equity per trade) and never execute a signal without verifying corresponding macroeconomic events on the economic calendar.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block with Contextual Cross-Link */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Capital Protection
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Review our complete risk management protocols.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Learn about negative balance protection, automated stop-out liquidation mechanisms, and client fund segregation rules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/trading/risk-management"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Risk Management Protocols
            </Button>

            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Open an Account
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
