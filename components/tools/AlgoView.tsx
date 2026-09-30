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
  Terminal,
  Code,
  ShieldCheck,
  Check,
  TrendingUp,
  Activity,
  Layers,
  Sliders,
  Database,
  Play,
  RotateCcw
} from 'lucide-react';

export const AlgoView: React.FC = () => {
  const algoWorkflows = [
    { step: '01', title: 'MARKET DATA', desc: 'Tick-level aggregation from Equinix LD4 gateways.' },
    { step: '02', title: 'SIGNAL', desc: 'Mathematical pattern indicator or statistical trigger.' },
    { step: '03', title: 'STRATEGY RULES', desc: 'Pre-programmed entry condition verification.' },
    { step: '04', title: 'RISK CHECK', desc: 'Exposure, margin limits, and drawdown ceilings.' },
    { step: '05', title: 'ORDER', desc: 'Sub-35ms straight-through execution routing.' },
    { step: '06', title: 'MONITORING', desc: 'Continuous P&L, stop-loss trailing, and exit rules.' }
  ];

  const featureSections = [
    {
      title: 'Strategy Logic',
      desc: 'Define deterministic rules for trade staging, invalidation criteria, and take-profit targets using clean algorithmic code.',
      icon: <Code className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Automated Execution',
      desc: 'Execute trades automatically via FIX API, MQL5 Expert Advisors, or WebTrader Webhooks with zero human latency.',
      icon: <Cpu className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Risk Parameters',
      desc: 'Programmatic position-sizing limits, daily drawdown stops, and maximum open exposure controls hard-coded before orders.',
      icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Position Monitoring',
      desc: 'Real-time telemetry measuring floating equity, margin consumption, slippage variance, and session execution fill rates.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Backtesting Engines',
      desc: 'Test systematic strategies against historical tick data with variable spread models and realistic slippage assumptions.',
      icon: <RotateCcw className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Performance Analytics',
      desc: 'Review quantitative Sharpe ratios, Sortino ratios, maximum drawdown metrics, and profit factors across test intervals.',
      icon: <TrendingUp className="w-5 h-5 text-[#087F78]" />
    }
  ];

  const algoCards = [
    {
      title: 'Trend Following',
      desc: 'Captures prolonged directional momentum using moving average bands and breakout channels.',
      marketType: 'Forex, Commodities, Indices',
      timeframe: 'H4 to Daily',
      riskConsiderations: 'Prone to whip-saws during ranging/consolidating regimes.',
      automationLevel: 'Full Automation (100% Rule-Based)'
    },
    {
      title: 'Mean Reversion',
      desc: 'Exploits statistical overextensions beyond standard deviation envelopes (Bollinger/Keltner).',
      marketType: 'Forex Majors & Liquid Indices',
      timeframe: 'M15 to H1',
      riskConsiderations: 'Requires strict stop invalidation when strong trends develop.',
      automationLevel: 'Full or Semi-Automated'
    },
    {
      title: 'Breakout Staging',
      desc: 'Places pending stop orders above volatility contractions prior to high-impact economic prints.',
      marketType: 'All Asset Classes',
      timeframe: 'M5 to H1',
      riskConsiderations: 'Vulnerable to false breakouts and initial gap slippage.',
      automationLevel: 'Automated Stop Trigger Staging'
    },
    {
      title: 'Momentum Velocity',
      desc: 'Filters multi-asset universes by rate of change (ROC) and volume expansion indicators.',
      marketType: 'Digital Assets & Equities',
      timeframe: 'H1 to Daily',
      riskConsiderations: 'Fast reversals require adaptive dynamic trailing stops.',
      automationLevel: 'Full Algorithmic Scripting'
    },
    {
      title: 'Multi-Asset Hedging',
      desc: 'Maintains market-neutral beta by simultaneously longing resilient leaders and shorting lagging instruments.',
      marketType: 'Correlated FX Crosses & Energy',
      timeframe: 'Daily to Weekly',
      riskConsiderations: 'Correlation breakdown risk during systemic liquidity shocks.',
      automationLevel: 'Portfolio Quantitative Engine'
    }
  ];

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
          <Link href="/tools/signals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Signals
          </Link>
          <Link href="/tools/quant" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Quantitative Tools
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              SYSTEMATIC EXECUTION FRAMEWORK
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Build a more systematic trading process.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Explore rule-based strategies, algorithmic workflows and automated execution concepts designed for disciplined market participation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                to="/trading"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                View Trading Conditions
              </Button>

              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Open Algorithmic Account
              </Button>
            </div>
          </div>
        </div>

        {/* Visual Workflow: Horizontal on Desktop, Vertical on Mobile */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Execution Pipeline</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              The Algorithmic Workflow
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              From market tick arrival to risk audit and order dispatch, systematic pipelines follow a structured sequence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {algoWorkflows.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] flex flex-col justify-between relative"
              >
                <div>
                  <div className="text-xl font-mono font-bold text-[#087F78] mb-1">{step.step}</div>
                  <div className="font-bold text-xs text-[#111111] mb-2">{step.title}</div>
                  <p className="text-[11px] text-[#77736C] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Sections Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Core Components</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Systematic Infrastructure Modules
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Every element of the systematic stack engineered for transparency, safety, and low latency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureSections.map((sec, i) => (
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

        {/* Algo Feature Showcase Cards */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Model Architectures</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Algorithmic Strategy Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Explore common systematic archetypes deployed by automated trading systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algoCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#087F78] font-semibold mb-1">
                    {card.automationLevel}
                  </div>
                  <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-2 text-[11px] font-mono border-t border-[#E7E4DE] pt-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#77736C]">Market Type:</span>
                      <span className="font-semibold text-[#111111]">{card.marketType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#77736C]">Typical Horizon:</span>
                      <span className="font-semibold text-[#111111]">{card.timeframe}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FBFBF9] rounded border border-[#E7E4DE] text-[11px]">
                  <span className="text-[#E5484D] font-bold block mb-0.5">Risk Factor:</span>
                  <span className="text-[#77736C] leading-relaxed">{card.riskConsiderations}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block with Contextual Cross-Link */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Execution Parameters
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Review our execution latency and order conditions.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Examine our straight-through processing policies, low-latency financial gateways, and institutional tiered margin schedules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/trading"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Trading Conditions
            </Button>

            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Open Algorithmic Account
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
