'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Monitor,
  Smartphone,
  Check,
  ArrowUpRight,
  ArrowRight,
  Layers,
  Zap,
  Globe,
  Compass,
  Cpu,
  BarChart2,
  Sliders,
  ShieldCheck,
  Activity,
  LineChart,
  LayoutGrid
} from 'lucide-react';

export const PlatformsOverviewView: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb / Category Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            All Platforms
          </span>
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
              TRADING PLATFORMS
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Trade with the platform that fits your style.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Access professional trading tools across web, desktop and mobile environments, built to help you monitor markets, analyze opportunities and manage positions efficiently.
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
                <Globe className="w-4 h-4 text-[#087F78]" />
                Zero-Install Browser Access
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#087F78]" />
                Native iOS &amp; Android Apps
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#087F78]" />
                Automated Expert Advisors
              </span>
            </div>
          </div>
        </div>

        {/* 5 Distinct Platform Cards Showcase */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Available Environments</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Engineered for Every Trader Profile
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Select an interface built for manual charting, algorithmic execution, or mobile market monitoring.
            </p>
          </div>

          <div className="space-y-6">
            {/* Card 1: RegearFX WebTrader (Flagship wide hero composition) */}
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78]/60 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                      Flagship Web Terminal
                    </span>
                    <span className="text-[11px] font-mono text-[#77736C]">Zero Installation Required</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    {BRAND_NAME} WebTrader
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                    Launch full-featured trading directly in Chrome, Safari, Edge, or Firefox. Stream real-time prices, execute multi-asset orders, manage customized watchlists, and configure stop levels without installing third-party software.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                    {[
                      'Real-time Market Watch',
                      'Multi-Chart Workspaces',
                      'One-Click Execution',
                      'Integrated Order Depth',
                      'Position Netting & Hedging',
                      'SSL-Encrypted Web Socket'
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      isExternal
                      variant="primary"
                      size="md"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Launch WebTrader
                    </Button>
                    <Link
                      href="/platforms/webtrader"
                      className="text-xs font-semibold text-[#111111] hover:text-[#087F78] px-3 py-2 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Abstract Visual: Browser Mockup Preview */}
                <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl p-4 sm:p-5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E4DE] text-[11px] text-[#77736C]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C98A00]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0A9F6E]" />
                      <span className="ml-2 text-[#111111] font-sans font-semibold">WebTrader Console</span>
                    </div>
                    <span className="text-[#087F78] font-semibold text-[10px]">LIVE STREAM</span>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="p-2.5 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#111111]">BTC/USD</span>
                        <span className="block text-[10px] text-[#77736C]">Spread: 1.2 pts</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-[#111111]">$64,820.50</span>
                        <span className="block text-[10px] text-[#0A9F6E]">+2.45%</span>
                      </div>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#111111]">EUR/USD</span>
                        <span className="block text-[10px] text-[#77736C]">Spread: 0.2 pips</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-[#111111]">1.0874</span>
                        <span className="block text-[10px] text-[#E5484D]">-0.22%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 bg-[#DDEDEA]/50 rounded border border-[#087F78]/20 text-[10px] text-[#087F78] flex items-center justify-between">
                    <span>Latency: 28ms LD4</span>
                    <span className="font-bold">One-Click Enabled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 2x2 for Mobile, MT5, MT4, TradingView */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 2: Mobile Trader */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                      iOS &amp; Android
                    </span>
                    <Smartphone className="w-5 h-5 text-[#087F78]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {BRAND_NAME} Mobile
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    Trade on the move with native mobile apps engineered for speed, touch responsiveness, biometric access, and push notification alerts.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      'Interactive Touch-Optimized Charts',
                      'Instant Price Alerts & Push Notifications',
                      'Biometric Face ID / Fingerprint Auth',
                      'Complete Order & Account History'
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <Link
                    href="/platforms/mobile"
                    className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                  >
                    <span>View Mobile Apps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button href={BROKER_CONFIG.crmRegisterUrl} isExternal variant="outline" size="sm">
                    Get Access
                  </Button>
                </div>
              </div>

              {/* Card 3: MetaTrader 5 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                      Multi-Asset &amp; Algorithmic
                    </span>
                    <Cpu className="w-5 h-5 text-[#087F78]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    MetaTrader 5 (MT5)
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    Next-generation institutional desktop platform equipped with 21 timeframes, MQL5 algorithmic scripting, Depth of Market, and advanced strategy backtesting.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      '21 Distinct Chart Timeframes',
                      'MQL5 Integrated Development Environment',
                      'Multi-threaded Strategy Backtester',
                      'Built-in Economic Calendar Feed'
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <Link
                    href="/platforms/mt5"
                    className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                  >
                    <span>MT5 Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button href={BROKER_CONFIG.crmRegisterUrl} isExternal variant="outline" size="sm">
                    Open MT5
                  </Button>
                </div>
              </div>

              {/* Card 4: MetaTrader 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                      Forex Classic Standard
                    </span>
                    <BarChart2 className="w-5 h-5 text-[#087F78]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    MetaTrader 4 (MT4)
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    The world&apos;s most widely used foreign exchange terminal. Renowned for lightweight performance, custom MQL4 Expert Advisors, and robust technical indicators.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      'Support for Custom Expert Advisors (EAs)',
                      '30 Standard Technical Indicators',
                      '9 Chart Timeframes & Flexible Order Types',
                      'Proven Global Execution Reliability'
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <Link
                    href="/platforms/mt4"
                    className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                  >
                    <span>MT4 Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button href={BROKER_CONFIG.crmRegisterUrl} isExternal variant="outline" size="sm">
                    Open MT4
                  </Button>
                </div>
              </div>

              {/* Card 5: TradingView */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                      World-Class Charting
                    </span>
                    <LineChart className="w-5 h-5 text-[#087F78]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    TradingView
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    Connect your {BRAND_NAME} account directly to TradingView&apos;s cloud charts. Execute trades while leveraging 100+ technical indicators, Pine Script, and multi-chart layouts.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      '100+ Pre-built Technical Indicators',
                      'Custom Drawing Tools & Fibonacci Suites',
                      'Pine Script Strategy Scripting & Alerts',
                      'Direct Brokerage Order Integration'
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <Link
                    href="/platforms/tradingview"
                    className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                  >
                    <span>TradingView Integration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button href={BROKER_CONFIG.crmRegisterUrl} isExternal variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Experience Section: Connected-Line Visual Language */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Seamless Continuity</span>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
              One trading experience across every screen.
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
              Your account, customized watchlists, open positions, and pending orders stay synchronized whether you access markets from your desktop desk terminal, tablet, or smartphone.
            </p>
          </div>

          {/* Connected Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Discover',
                subtitle: 'Market Watch',
                desc: 'Scan 60+ currency pairs, crypto assets, indices, and metals with real-time streaming quotes and custom sector watchlists.',
                icon: <Compass className="w-5 h-5 text-[#087F78]" />
              },
              {
                step: '02',
                title: 'Analyze',
                subtitle: 'Deep Technicals',
                desc: 'Deploy multiple timeframes, drawing tools, and statistical indicators to identify high-probability price setups.',
                icon: <BarChart2 className="w-5 h-5 text-[#087F78]" />
              },
              {
                step: '03',
                title: 'Execute',
                subtitle: 'STP/ECN Order Staging',
                desc: 'Stage market, limit, stop-limit, or trailing orders with pre-configured risk parameters and one-click execution.',
                icon: <Zap className="w-5 h-5 text-[#087F78]" />
              },
              {
                step: '04',
                title: 'Monitor',
                subtitle: 'Live Risk Netting',
                desc: 'Track margin requirements, floating P&L, exposure limits, and balance alerts in real time across any device.',
                icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />
              }
            ].map((node, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-mono font-bold text-[#087F78]">{node.step}</span>
                    <div className="w-8 h-8 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center">
                      {node.icon}
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#111111] mb-0.5">{node.title}</h4>
                  <div className="text-[10px] font-mono uppercase text-[#77736C] mb-2">{node.subtitle}</div>
                  <p className="text-xs text-[#77736C] leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Get Started
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Find the right platform for your strategy.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Open an account online to access all supported platforms under a single unified login credential.
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
