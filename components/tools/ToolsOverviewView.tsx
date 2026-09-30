'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Calculator,
  Calendar,
  TrendingUp,
  Radio,
  Cpu,
  Binary,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Check,
  BarChart2,
  Sliders,
  Globe,
  Activity
} from 'lucide-react';

export const ToolsOverviewView: React.FC = () => {
  const tools = [
    {
      id: 'calculators',
      title: 'Trading Calculators',
      badge: 'Position Math',
      desc: 'Interactive pip value, required margin, position sizing, and potential profit/loss calculation engines.',
      href: '/tools/calculators',
      icon: <Calculator className="w-6 h-6 text-[#087F78]" />,
      stats: '4 Interactive Engines'
    },
    {
      id: 'economic-calendar',
      title: 'Economic Calendar',
      badge: 'Macro Events',
      desc: 'Real-time schedule of high-impact macroeconomic releases, central bank meetings, consensus estimates, and actuals.',
      href: '/tools/economic-calendar',
      icon: <Calendar className="w-6 h-6 text-[#087F78]" />,
      stats: 'Global Macro Feed'
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      badge: 'Daily Research',
      desc: 'In-depth market commentary, daily macro briefings, and structural technical analysis across currencies, equities, and commodities.',
      href: '/tools/market-analysis',
      icon: <TrendingUp className="w-6 h-6 text-[#087F78]" />,
      stats: '6 Asset Desks'
    },
    {
      id: 'signals',
      title: 'Trading Signals',
      badge: 'Algorithmic Alerts',
      desc: 'Automated technical setup alerts featuring entry parameters, stop-loss invalidation thresholds, and take-profit targets.',
      href: '/tools/signals',
      icon: <Radio className="w-6 h-6 text-[#087F78]" />,
      stats: 'Multi-Timeframe Models'
    },
    {
      id: 'quant',
      title: 'Quantitative Tools',
      badge: 'Statistical Edge',
      desc: 'Cross-asset correlation matrices, historical volatility distributions, and relative strength metrics for data-driven decisions.',
      href: '/tools/quant',
      icon: <Binary className="w-6 h-6 text-[#087F78]" />,
      stats: 'Correlation & Vol Profiles'
    },
    {
      id: 'algo',
      title: 'Algorithmic Trading',
      badge: 'Systematic Execution',
      desc: 'Rule-based execution architecture, strategy logic workflows, risk parameter verification, and automated API staging.',
      href: '/tools/algo',
      icon: <Cpu className="w-6 h-6 text-[#087F78]" />,
      stats: 'Systematic Framework'
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            All Tools
          </span>
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
          <Link href="/tools/algo" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              TRADING TOOLS
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Tools that help you read the markets.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              From market calendars and trading calculators to technical analysis and quantitative tools, {BRAND_NAME} brings essential resources together in one place.
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
                to="/tools/calculators"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Explore Calculators
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#087F78]" />
                Institutional Risk Calculators
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#087F78]" />
                Consensus Macroeconomic Tracking
              </span>
              <span className="flex items-center gap-1.5">
                <Binary className="w-4 h-4 text-[#087F78]" />
                Cross-Asset Statistical Data
              </span>
            </div>
          </div>
        </div>

        {/* 6 Tools Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Analytical Intelligence</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Integrated Analytical Suite
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Select any resource to access dedicated calculators, calendars, signals, and statistical metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => (
              <div
                key={tool.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                      {tool.badge}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center">
                      {tool.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#77736C]">{tool.stats}</span>
                  <Link
                    href={tool.href}
                    className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Broker-Style Sections */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Why Traders Use Our Tools</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Disciplined Decision Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Market participants face endless streams of unstructured information. Our analytical tools are engineered to filter noise, quantify mathematical probabilities, and verify position risk before staging an execution ticket.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111]">Deterministic Position Sizing: </span>
                    <span className="text-[#77736C]">Eliminate guesswork by computing exact lot allocations anchored to account risk ceilings.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111]">Pre-Event Awareness: </span>
                    <span className="text-[#77736C]">Avoid unexpected spread widening during macroeconomic consensus releases by referencing live dates and ratings.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111]">Cross-Asset Diversification: </span>
                    <span className="text-[#77736C]">Measure actual correlation coefficients between digital assets, gold, and indices to prevent accidental overconcentration.</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Systematic Trading Principles</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                How Systematic Strategies Are Structured
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Professional trading operations deploy rule-based workflows where entry, sizing, exit, and exposure verification are executed systematically without emotion.
              </p>

              <div className="p-5 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E4DE]">
                  <span className="text-[#77736C]">Phase 1: Market Data Aggregation</span>
                  <span className="text-[#087F78] font-semibold">Tick Feed LD4</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E4DE]">
                  <span className="text-[#77736C]">Phase 2: Signal Filtering &amp; Validation</span>
                  <span className="text-[#111111] font-semibold">Rule Matrix</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E4DE]">
                  <span className="text-[#77736C]">Phase 3: Pre-Trade Risk Verification</span>
                  <span className="text-[#087F78] font-semibold">Margin Check</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#77736C]">Phase 4: Automated STP Execution</span>
                  <span className="text-[#111111] font-semibold">Sub-35ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Integrated Suite
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Enhance your trading process today.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            All analytical tools and research publications are freely available to market participants. Open an account to link them directly with live execution.
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
              Open an Account
            </Button>

            <Button
              to="/tools/calculators"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Launch Calculators
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
