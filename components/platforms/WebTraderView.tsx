'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import { Sparkline } from '@/components/ui/Sparkline';
import {
  Monitor,
  ArrowUpRight,
  ArrowRight,
  Check,
  Zap,
  Globe,
  Lock,
  BarChart2,
  Sliders,
  ShieldCheck,
  Activity,
  Layers,
  Eye,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const WebTraderView: React.FC = () => {
  const browserTickers = [
    {
      symbol: 'BTC/USD',
      name: 'Bitcoin',
      bid: 64818.50,
      ask: 64819.70,
      spread: '1.2 pts',
      change24h: 2.45,
      sparkline: [63800, 64100, 64000, 64500, 64700, 64600, 64818.50]
    },
    {
      symbol: 'EUR/USD',
      name: 'Euro / US Dollar',
      bid: 1.0873,
      ask: 1.0875,
      spread: '0.2 pips',
      change24h: -0.22,
      sparkline: [1.0895, 1.0902, 1.0888, 1.0875, 1.0862, 1.0868, 1.0874]
    },
    {
      symbol: 'XAU/USD',
      name: 'Spot Gold',
      bid: 2658.30,
      ask: 2658.42,
      spread: '0.12 pts',
      change24h: 0.74,
      sparkline: [2640, 2645, 2642, 2650, 2655, 2652, 2658.40]
    }
  ];

  const features = [
    {
      id: 'market-watch',
      title: 'Market Watch',
      desc: 'Real-time streaming bid/ask quotes with customizable instrument lists and instant spread displays across all asset classes.',
      icon: <Eye className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'advanced-charts',
      title: 'Advanced Charts',
      desc: 'Interactive candlestick, line, and bar charting with multi-timeframe options, technical indicators, and drawing toolkits.',
      icon: <BarChart2 className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'order-management',
      title: 'Order Management',
      desc: 'Stage market orders, pending limit orders, stop-limits, and bracket exits with intuitive sliders and ticket summaries.',
      icon: <Sliders className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'watchlists',
      title: 'Custom Watchlists',
      desc: 'Organize personal watchlists by asset group, sector correlation, or daily trading priority with drag-and-drop flexibility.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'one-click',
      title: 'One-Click Trading',
      desc: 'Execute positions instantly from charts or quotes tables with pre-configured default lot sizes for ultra-fast reaction times.',
      icon: <Zap className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'position-monitoring',
      title: 'Position Monitoring',
      desc: 'Track live floating P&L, used margin, margin level %, and aggregate portfolio exposure tick-by-tick in real time.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'risk-controls',
      title: 'Risk Controls',
      desc: 'Built-in stop loss, take profit, and margin call notification thresholds to protect capital in dynamic market conditions.',
      icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />
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
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            WebTrader
          </span>
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
              ZERO INSTALLATION TRADING
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Everything you need, right in your browser.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Execute trades across forex, digital assets, commodities and indices directly inside modern browsers. Built with sub-35ms connectivity, live streaming order depth, and institutional risk parameters.
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
                Launch WebTrader
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

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#087F78]" />
                Universal Web Compatibility
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#087F78]" />
                256-Bit SSL Encryption
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#087F78]" />
                Direct Straight-Through Routing
              </span>
            </div>
          </div>
        </div>

        {/* Browser-Frame Visualization with BTC/USD, EUR/USD, XAU/USD */}
        <div className="mb-20">
          <div className="bg-white border border-[#E7E4DE] rounded-2xl overflow-hidden shadow-xs">
            {/* Mock Browser Header */}
            <div className="bg-[#F3F2EE] border-b border-[#E7E4DE] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E5484D]" />
                <span className="w-3 h-3 rounded-full bg-[#C98A00]" />
                <span className="w-3 h-3 rounded-full bg-[#0A9F6E]" />
                <div className="ml-3 hidden sm:flex items-center gap-2 bg-white px-3 py-1 rounded text-xs text-[#77736C] border border-[#E7E4DE]/60">
                  <Lock className="w-3 h-3 text-[#087F78]" />
                  <span className="font-mono text-[11px]">https://trade.regearfx.com/terminal</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#77736C]">
                <span className="w-2 h-2 rounded-full bg-[#0A9F6E]" />
                <span>LD4 Server Gateway: 28ms</span>
              </div>
            </div>

            {/* Browser Visual Body: 3 Live Asset Ticker Cards */}
            <div className="p-6 sm:p-8 bg-[#FBFBF9]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#087F78] font-semibold">
                  Active Web Market Stream
                </div>
                <span className="text-[11px] font-mono text-[#77736C]">One-Click Staging Enabled</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {browserTickers.map(t => {
                  const isPos = t.change24h >= 0;
                  return (
                    <div
                      key={t.symbol}
                      className="p-5 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-[#111111]">{t.symbol}</span>
                          <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                            {isPos ? '+' : ''}{t.change24h.toFixed(2)}%
                          </span>
                        </div>
                        <div className="text-[11px] text-[#77736C] mb-3">{t.name}</div>

                        {/* Bid / Ask Box */}
                        <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE] mb-3 text-xs font-mono">
                          <div>
                            <span className="text-[10px] text-[#77736C] block">BID</span>
                            <span className="font-bold text-[#111111] tabular-nums">
                              {t.bid >= 100 ? t.bid.toLocaleString(undefined, { minimumFractionDigits: 2 }) : t.bid.toFixed(4)}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-[#77736C] block">ASK</span>
                            <span className="font-bold text-[#111111] tabular-nums">
                              {t.ask >= 100 ? t.ask.toLocaleString(undefined, { minimumFractionDigits: 2 }) : t.ask.toFixed(4)}
                            </span>
                          </div>
                        </div>

                        {/* Mini Sparkline Chart */}
                        <div className="py-2 flex justify-center mb-2">
                          <Sparkline
                            data={t.sparkline}
                            isPositive={isPos}
                            width={220}
                            height={34}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#77736C]">Spread: {t.spread}</span>
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
          </div>
        </div>

        {/* Feature Sections Grid (7 Modules) */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Engineered Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Core WebTrader Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Every tool required to analyze, enter, and monitor positions with institutional precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div key={feat.id} className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#111111] mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Instant Access
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Launch WebTrader in your browser today.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Zero downloads or local installations required. Compatible with all modern desktop and tablet browsers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href={BROKER_CONFIG.tradingTerminalUrl}
              isExternal
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto min-h-[44px]"
            >
              Launch WebTrader
            </Button>

            <Button
              to="/trading/conditions"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              View Trading Conditions
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
