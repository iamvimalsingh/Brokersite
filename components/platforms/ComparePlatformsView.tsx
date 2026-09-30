'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Check,
  Minus,
  ArrowUpRight,
  ArrowRight,
  Smartphone,
  Monitor,
  Cpu,
  LineChart,
  Layers,
  ShieldCheck
} from 'lucide-react';

interface ComparisonRow {
  feature: string;
  webtrader: string | boolean;
  mobile: string | boolean;
  mt5: string | boolean;
  mt4: string | boolean;
  tradingview: string | boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Market Access',
    webtrader: 'All 60+ Assets',
    mobile: 'All 60+ Assets',
    mt5: 'All 60+ Assets',
    mt4: 'Forex & Metals',
    tradingview: 'All 60+ Assets'
  },
  {
    feature: 'Charting Engine',
    webtrader: 'HTML5 Interactive',
    mobile: 'Native Gesture Charting',
    mt5: '21 Timeframes Advanced',
    mt4: '9 Timeframes Classic',
    tradingview: 'Cloud HTML5 Supercharts'
  },
  {
    feature: 'Technical Indicators',
    webtrader: '50+ Built-In',
    mobile: '30+ Touch-Optimized',
    mt5: '38 Built-In + MQL5',
    mt4: '30 Built-In + MQL4',
    tradingview: '100+ Indicators & Scripts'
  },
  {
    feature: 'Custom Watchlists',
    webtrader: true,
    mobile: true,
    mt5: true,
    mt4: true,
    tradingview: true
  },
  {
    feature: 'Order Management',
    webtrader: 'Market, Limit, Stop, Bracket',
    mobile: 'Touch Market, Limit, Stop',
    mt5: '6 Pending Modes + Stop Limit',
    mt4: '4 Pending Modes',
    tradingview: 'Visual On-Chart Orders'
  },
  {
    feature: 'Automated Trading (Algo/EAs)',
    webtrader: 'API Webhooks',
    mobile: false,
    mt5: 'Full MQL5 Expert Advisors',
    mt4: 'Full MQL4 Expert Advisors',
    tradingview: 'Pine Script Alerts'
  },
  {
    feature: 'Alerts & Notifications',
    webtrader: 'Browser Popups',
    mobile: 'Push, Sound & Biometric',
    mt5: 'Sound & Email Push',
    mt4: 'Audio & Popup Alerts',
    tradingview: 'Cloud Webhook & Email'
  },
  {
    feature: 'Mobile Device Access',
    webtrader: 'Mobile Web Browser',
    mobile: 'Native iOS & Android App',
    mt5: 'MT5 Mobile App',
    mt4: 'MT4 Mobile App',
    tradingview: 'TradingView Mobile App'
  },
  {
    feature: 'Technical Analysis Objects',
    webtrader: '30+ Drawing Tools',
    mobile: '15+ Drawing Tools',
    mt5: '44 Graphical Objects',
    mt4: '24 Analytical Objects',
    tradingview: '90+ Smart Drawing Tools'
  },
  {
    feature: 'Multi-Device Synchronization',
    webtrader: true,
    mobile: true,
    mt5: 'Via Account Login',
    mt4: 'Via Account Login',
    tradingview: 'Cloud Account Sync'
  }
];

export const ComparePlatformsView: React.FC = () => {
  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-4 h-4 text-[#0A9F6E] mx-auto" />
      ) : (
        <Minus className="w-4 h-4 text-[#77736C] mx-auto" />
      );
    }
    return <span className="text-[11px] font-mono text-[#111111]">{val}</span>;
  };

  const platforms = [
    {
      id: 'webtrader',
      name: `${BRAND_NAME} WebTrader`,
      badge: 'Browser Terminal',
      href: '/platforms/webtrader',
      icon: <Monitor className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'mobile',
      name: `${BRAND_NAME} Mobile`,
      badge: 'iOS & Android',
      href: '/platforms/mobile',
      icon: <Smartphone className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'mt5',
      name: 'MetaTrader 5',
      badge: 'Multi-Asset Algo',
      href: '/platforms/mt5',
      icon: <Cpu className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'mt4',
      name: 'MetaTrader 4',
      badge: 'FX Classic',
      href: '/platforms/mt4',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'tradingview',
      name: 'TradingView',
      badge: 'Cloud Charts',
      href: '/platforms/tradingview',
      icon: <LineChart className="w-5 h-5 text-[#087F78]" />
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
          <Link href="/platforms/tradingview" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            TradingView
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Compare Platforms
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              PLATFORM BENCHMARK
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Side-by-side platform comparison.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Compare capabilities across our flagship WebTrader, Mobile applications, MetaTrader 5, MetaTrader 4, and TradingView to identify your ideal trading environment.
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
                href={BROKER_CONFIG.tradingTerminalUrl}
                isExternal
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Launch WebTrader
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop & Tablet Table (Hidden on Mobile) */}
        <div className="hidden lg:block mb-20 bg-white border border-[#E7E4DE] rounded-2xl overflow-hidden shadow-xs">
          <div className="p-6 border-b border-[#E7E4DE] bg-[#FBFBF9]">
            <h2 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Comprehensive Specification Matrix
            </h2>
            <p className="text-xs text-[#77736C] mt-1">
              Verify compatibility, device access, and algorithmic features across supported software suites.
            </p>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] font-mono text-[10px] uppercase">
                <th className="py-4 px-4 font-bold text-[#111111] w-[20%]">FEATURE</th>
                <th className="py-4 px-3 text-center text-[#087F78] font-bold w-[16%]">REGEARFX WEBTRADER</th>
                <th className="py-4 px-3 text-center w-[16%]">MOBILE</th>
                <th className="py-4 px-3 text-center w-[16%]">MT5</th>
                <th className="py-4 px-3 text-center w-[16%]">MT4</th>
                <th className="py-4 px-3 text-center w-[16%]">TRADINGVIEW</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4DE]">
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i} className="hover:bg-[#F3F2EE]/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#111111] font-sans">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-3 text-center bg-[#DDEDEA]/20 font-medium">
                    {renderCell(row.webtrader)}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    {renderCell(row.mobile)}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    {renderCell(row.mt5)}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    {renderCell(row.mt4)}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    {renderCell(row.tradingview)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Stacked Comparison Cards (Under 1024px) */}
        <div className="lg:hidden space-y-6 mb-20">
          <div className="mb-2">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Stacked Comparison</span>
            <h2 className="text-xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Platform Profiles
            </h2>
            <p className="text-xs text-[#77736C]">
              Review feature availability organized by individual platform environment.
            </p>
          </div>

          {platforms.map(p => (
            <div
              key={p.id}
              className="p-5 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
            >
              <div className="pb-4 mb-4 border-b border-[#E7E4DE] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs font-semibold">
                    {p.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#111111] mt-1">{p.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center">
                  {p.icon}
                </div>
              </div>

              {/* Rows for this platform */}
              <div className="space-y-2.5 text-xs mb-6">
                {COMPARISON_ROWS.map((row, idx) => {
                  const val = (row as any)[p.id];
                  return (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#E7E4DE]/50 text-xs">
                      <span className="text-[#77736C]">{row.feature}</span>
                      <div className="font-mono text-right">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <span className="inline-flex items-center gap-1 text-[#0A9F6E] font-semibold text-[11px]">
                              <Check className="w-3.5 h-3.5" /> Supported
                            </span>
                          ) : (
                            <span className="text-[#77736C] text-[11px]">Not Applicable</span>
                          )
                        ) : (
                          <span className="text-[#111111] font-medium text-[11px]">{val}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href={p.href}
                  className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                >
                  <span>Full Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Button
                  href={p.id === 'webtrader' ? BROKER_CONFIG.tradingTerminalUrl : BROKER_CONFIG.crmRegisterUrl}
                  isExternal
                  variant="primary"
                  size="sm"
                >
                  Access
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Multi-Platform Login
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Access all platforms with one account.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Switch effortlessly between WebTrader, Mobile, and desktop installations with unified wallet balance and trading terms.
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
              href={BROKER_CONFIG.tradingTerminalUrl}
              isExternal
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Launch WebTrader
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
