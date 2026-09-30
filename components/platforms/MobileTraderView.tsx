'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import { Sparkline } from '@/components/ui/Sparkline';
import {
  Smartphone,
  ArrowUpRight,
  ArrowRight,
  Check,
  Bell,
  BarChart2,
  ListFilter,
  Activity,
  Newspaper,
  Sliders,
  ShieldCheck,
  QrCode,
  Download,
  Apple,
  Play
} from 'lucide-react';

export const MobileTraderView: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'watchlist' | 'charts' | 'order' | 'positions' | 'alerts' | 'news'>('watchlist');

  const mobileScreens = [
    { id: 'watchlist', label: 'Watchlist', icon: <ListFilter className="w-4 h-4" /> },
    { id: 'charts', label: 'Charts', icon: <BarChart2 className="w-4 h-4" /> },
    { id: 'order', label: 'Order Ticket', icon: <Sliders className="w-4 h-4" /> },
    { id: 'positions', label: 'Positions', icon: <Activity className="w-4 h-4" /> },
    { id: 'alerts', label: 'Price Alerts', icon: <Bell className="w-4 h-4" /> },
    { id: 'news', label: 'Market News', icon: <Newspaper className="w-4 h-4" /> }
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
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Mobile Trader
          </span>
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
              MOBILE TRADING SUITE
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Trade wherever the market takes you.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Stay in complete control of your positions on iOS and Android. Experience gesture-driven charting, biometric security, instant price notifications, and streamlined order execution in the palm of your hand.
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
                to="/platforms/webtrader"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Launch WebTrader
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#087F78]" />
                Apple iOS 15+ &amp; Android 12+
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#087F78]" />
                Face ID &amp; Biometric Auth
              </span>
              <span className="flex items-center gap-1.5">
                <Bell className="w-4 h-4 text-[#087F78]" />
                Instant Push Price Alerts
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Smartphone Mockup Showcase */}
        <div className="mb-20 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Interactive Interface</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Native Mobile Trading Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Select a screen tab below to preview key modules of the mobile application interface.
            </p>
          </div>

          {/* Screen Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-8 border-b border-[#E7E4DE]">
            {mobileScreens.map(scr => (
              <button
                key={scr.id}
                type="button"
                onClick={() => setActiveScreen(scr.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeScreen === scr.id
                    ? 'bg-[#181818] text-white shadow-xs'
                    : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {scr.icon}
                <span>{scr.label}</span>
              </button>
            ))}
          </div>

          {/* Smartphone Visual Frame & Feature Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Phone Mockup Canvas */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[300px] sm:w-[320px] rounded-[36px] bg-[#111111] p-3 shadow-xl border-4 border-[#333333]">
                {/* Dynamic Screen Inside Phone */}
                <div className="bg-[#FBFBF9] rounded-[28px] overflow-hidden min-h-[460px] flex flex-col justify-between p-4 text-xs font-sans">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-[#77736C] font-mono pb-2 border-b border-[#E7E4DE]">
                    <span>9:41 AM</span>
                    <span className="text-[#087F78] font-semibold">{BRAND_NAME} Mobile</span>
                    <span>5G · 100%</span>
                  </div>

                  {/* Active Screen View */}
                  <div className="py-4 flex-1">
                    {activeScreen === 'watchlist' && (
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase text-[#77736C] mb-2 font-semibold">Favorites Watchlist</div>
                        {[
                          { sym: 'BTC/USD', price: '$64,820.50', chg: '+2.45%', pos: true },
                          { sym: 'EUR/USD', price: '1.0874', chg: '-0.22%', pos: false },
                          { sym: 'XAU/USD', price: '$2,658.40', chg: '+0.74%', pos: true },
                          { sym: 'US500', price: '5,762.50', chg: '+0.82%', pos: true }
                        ].map((item, i) => (
                          <div key={i} className="p-2.5 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-between">
                            <div>
                              <div className="font-bold text-[#111111]">{item.sym}</div>
                              <div className="text-[10px] text-[#77736C]">Live Bid/Ask</div>
                            </div>
                            <div className="text-right font-mono">
                              <div className="font-semibold text-[#111111]">{item.price}</div>
                              <div className={`text-[10px] ${item.pos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>{item.chg}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeScreen === 'charts' && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-[#111111]">EUR/USD · M15</span>
                          <span className="font-mono text-[#087F78] text-[10px] font-bold">1.0874</span>
                        </div>
                        <div className="h-32 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-center p-2 mb-3">
                          <Sparkline
                            data={[1.0860, 1.0865, 1.0862, 1.0870, 1.0868, 1.0876, 1.0874]}
                            isPositive={true}
                            width={240}
                            height={80}
                            className="w-full"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                          <span className="p-1 bg-[#181818] text-white rounded">M15</span>
                          <span className="p-1 bg-white border border-[#E7E4DE] rounded text-[#77736C]">H1</span>
                          <span className="p-1 bg-white border border-[#E7E4DE] rounded text-[#77736C]">H4</span>
                          <span className="p-1 bg-white border border-[#E7E4DE] rounded text-[#77736C]">D1</span>
                        </div>
                      </div>
                    )}

                    {activeScreen === 'order' && (
                      <div className="space-y-3 font-mono">
                        <div className="text-[11px] font-semibold text-[#111111]">Quick Order Ticket</div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE]">
                          <div className="text-[10px] text-[#77736C]">INSTRUMENT</div>
                          <div className="font-bold text-[#111111]">XAU/USD (Gold)</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-[#E5484D]/10 border border-[#E5484D]/30 rounded text-center">
                            <div className="text-[10px] text-[#E5484D] font-bold">SELL 2658.30</div>
                          </div>
                          <div className="p-2 bg-[#0A9F6E]/10 border border-[#0A9F6E]/30 rounded text-center">
                            <div className="text-[10px] text-[#0A9F6E] font-bold">BUY 2658.42</div>
                          </div>
                        </div>
                        <div className="text-[10px] text-[#77736C] text-center">Volume: 0.10 Lots (10 oz)</div>
                      </div>
                    )}

                    {activeScreen === 'positions' && (
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase text-[#77736C] mb-2 font-semibold">Active Positions (2)</div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE]">
                          <div className="flex justify-between font-bold text-[#111111]">
                            <span>BUY 0.50 EUR/USD</span>
                            <span className="font-mono text-[#0A9F6E]">+$124.50</span>
                          </div>
                          <div className="text-[10px] text-[#77736C] font-mono mt-0.5">Entry: 1.0849 · Current: 1.0874</div>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE]">
                          <div className="flex justify-between font-bold text-[#111111]">
                            <span>BUY 0.05 BTC/USD</span>
                            <span className="font-mono text-[#0A9F6E]">+$88.20</span>
                          </div>
                          <div className="text-[10px] text-[#77736C] font-mono mt-0.5">Entry: 63,056 · Current: 64,820</div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 'alerts' && (
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase text-[#77736C] mb-2 font-semibold">Triggered Alerts</div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex items-start gap-2">
                          <Bell className="w-3.5 h-3.5 text-[#087F78] shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-[#111111]">BTC/USD Crossed $64,500</div>
                            <div className="text-[10px] text-[#77736C]">Triggered 12 minutes ago</div>
                          </div>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE] flex items-start gap-2">
                          <Bell className="w-3.5 h-3.5 text-[#087F78] shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-[#111111]">XAU/USD Near Resistance</div>
                            <div className="text-[10px] text-[#77736C]">Target level: $2,660.00</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 'news' && (
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase text-[#77736C] mb-2 font-semibold">Macro Bulletins</div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE]">
                          <div className="text-[10px] font-mono text-[#087F78]">CENTRAL BANKS · 10m ago</div>
                          <div className="font-bold text-[#111111] leading-tight">Fed Signals Data-Dependent Policy Rate Stance</div>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-[#E7E4DE]">
                          <div className="text-[10px] font-mono text-[#087F78]">COMMODITIES · 35m ago</div>
                          <div className="font-bold text-[#111111] leading-tight">Crude Oil Steadies Near $72 Following Inventory Print</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Phone Bottom Nav Bar */}
                  <div className="pt-2 border-t border-[#E7E4DE] flex items-center justify-around text-[#77736C]">
                    <div className="flex flex-col items-center text-[#087F78]">
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Trade</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <ListFilter className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Quotes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Activity className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Positions</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Bell className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Alerts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Description Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-wider text-[#087F78] font-semibold">
                Mobile Capability Specs
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Full Desk Capability on Compact Displays
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                The {BRAND_NAME} Mobile app translates complete institutional order capabilities to your phone. Never miss a critical breakout or macroeconomic print while away from your primary workstation.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE] flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111]">Biometric Security Gate: </span>
                    <span className="text-[#77736C]">Instant login with Apple Face ID, Touch ID, or Android Biometric Prompt, keeping account capital secure.</span>
                  </div>
                </div>
                <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE] flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#087F78]" />
                  <div>
                    <span className="font-semibold text-[#111111]">Custom Push Alerts: </span>
                    <span className="text-[#77736C]">Receive immediate notifications when high-impact price levels trigger or when margin thresholds approach 100%.</span>
                  </div>
                </div>
                <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE] flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#087F78]" />
                  <div>
                    <span className="font-semibold text-[#111111]">Gesture Charting Controls: </span>
                    <span className="text-[#77736C]">Pinch to zoom, pan seamlessly across historical candles, and tap to adjust stop-loss or take-profit lines directly.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Download CTA Areas (iOS & Android) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* iOS Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                  Apple Ecosystem
                </span>
                <span className="text-xs font-mono text-[#087F78]">iOS 15.0+</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Download on the App Store
              </h3>
              <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                Native Swift implementation optimized for iPhone and iPad with ProMotion 120Hz display refresh support and Apple Watch glances.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="primary"
                size="md"
                icon={<Download className="w-4 h-4" />}
              >
                Get for iOS
              </Button>
              <div className="flex items-center gap-1.5 text-xs text-[#77736C]">
                <QrCode className="w-4 h-4 text-[#087F78]" />
                <span className="font-mono text-[11px]">Scan QR Code</span>
              </div>
            </div>
          </div>

          {/* Android Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                  Google Ecosystem
                </span>
                <span className="text-xs font-mono text-[#087F78]">Android 12+</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Get it on Google Play
              </h3>
              <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                Engineered with Kotlin for fast rendering across all modern Android devices, foldables, and tablets with Material 3 styling.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="primary"
                size="md"
                icon={<Download className="w-4 h-4" />}
              >
                Get for Android
              </Button>
              <div className="flex items-center gap-1.5 text-xs text-[#77736C]">
                <QrCode className="w-4 h-4 text-[#087F78]" />
                <span className="font-mono text-[11px]">Direct APK / Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Connect Anywhere
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Carry the markets in your pocket.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Create an account online and immediately sign in to your mobile app with the same verified account credentials.
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
