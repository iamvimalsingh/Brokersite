import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SUPPORTED_PLATFORMS, BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Monitor, Smartphone, CheckCircle2, ArrowRight, ExternalLink, LineChart, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const PlatformsSection: React.FC = () => {
  // Only show platforms that are enabled in configuration
  const enabledPlatforms = SUPPORTED_PLATFORMS.filter(p => p.enabled);

  return (
    <section className="py-16 sm:py-24 bg-[#F3F2EE] border-b border-[#E7E4DE]" id="platforms">
      <Container size="default">
        <SectionHeading
          eyebrow="Trading Infrastructure"
          title="Trade on the platform that fits you."
          description="Access global markets through flexible browser terminals, responsive mobile applications, and established analytical platforms."
          linkText="Compare Platforms"
          linkHref="/platforms/compare"
        />

        {/* 1. Browser Experience Showcase: RegearFX WebTrader */}
        <div className="mb-10 bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase font-mono font-semibold text-[#087F78] bg-[#DDEDEA] px-2.5 py-1 rounded-xs">
                Browser Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] mt-3 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                {BRAND_NAME} WebTrader
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Browser-based execution terminal designed for fast access without software installation. Built for quick order entry, multi-chart layout options, and customizable market watchlists.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-[#111111]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Real-Time Charting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Configurable Orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Multi-Chart Layouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0" />
                  <span>Interactive Indicators</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href={BROKER_CONFIG.tradingTerminalUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Launch WebTrader
                </Button>
                <Link
                  href="/platforms/webtrader"
                  className="text-xs font-semibold text-[#111111] hover:text-[#087F78] px-3 py-2 transition-colors"
                >
                  Platform Specs &rarr;
                </Link>
              </div>
            </div>

            {/* Stylized Browser Terminal Interface Preview */}
            <div className="lg:col-span-7 bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg p-4 sm:p-5">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E7E4DE] text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C98A00]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A9F6E]" />
                  <span className="ml-2 font-mono text-[11px] text-[#77736C]">
                    https://trade.regearfx.com/terminal
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#087F78] bg-[#DDEDEA] px-2 py-0.5 rounded-xs">
                  Zero Install
                </span>
              </div>

              {/* Chart Mockup */}
              <div className="bg-white border border-[#E7E4DE] rounded-md p-4 mb-3">
                <div className="flex items-center justify-between mb-4 text-xs font-mono">
                  <span className="text-[#111111] font-semibold">EUR/USD · 15m · Feed Snapshot</span>
                  <span className="text-[#0A9F6E]">1.08742 (+0.32%)</span>
                </div>
                {/* SVG Visual Candlestick Representation */}
                <div className="h-32 w-full flex items-end justify-between gap-1 sm:gap-2 px-1 py-2 bg-[#FBFBF9] rounded border border-[#E7E4DE]/60">
                  {[40, 55, 45, 60, 75, 65, 80, 70, 85, 95, 80, 100].map((h, i) => {
                    const isUp = i % 3 !== 0;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                        <div
                          className={`w-0.5 ${isUp ? 'bg-[#0A9F6E]' : 'bg-[#E5484D]'}`}
                          style={{ height: `${h + 10}%` }}
                        />
                        <div
                          className={`w-full max-w-[14px] rounded-xs ${
                            isUp ? 'bg-[#0A9F6E]' : 'bg-[#E5484D]'
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 bg-white rounded border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C]">BUY LOTS</div>
                  <div className="font-semibold text-[#111111]">1.00</div>
                </div>
                <div className="p-2 bg-white rounded border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C]">SPREAD</div>
                  <div className="font-semibold text-[#087F78]">0.2 PIP</div>
                </div>
                <div className="p-2 bg-white rounded border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C]">STOP LOSS</div>
                  <div className="font-semibold text-[#111111]">1.0820</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Grid of Configured Platforms (Mobile Experience & Desktop Integrations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {enabledPlatforms
            .filter(p => p.id !== 'webtrader')
            .map(platform => {
              const isMobile = platform.id === 'mobile';
              return (
                <div
                  key={platform.id}
                  className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center text-[#087F78]">
                        {isMobile ? (
                          <Smartphone className="w-5 h-5" />
                        ) : platform.id === 'tradingview' ? (
                          <LineChart className="w-5 h-5" />
                        ) : (
                          <Monitor className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs">
                        {platform.badge || 'Platform'}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-[#111111] mb-2">
                      {platform.name}
                    </h4>
                    <p className="text-xs text-[#77736C] leading-relaxed mb-4">
                      {platform.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-[#111111]">
                      {platform.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                          <span className="text-[11px]">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E7E4DE]">
                    <Link
                      href={`/platforms/${platform.id}`}
                      className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore {platform.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Section Action CTA */}
        <div className="flex justify-center">
          <Button
            to="/platforms/compare"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Compare Platforms
          </Button>
        </div>
      </Container>
    </section>
  );
};
