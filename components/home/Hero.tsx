import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG } from '@/lib/config';
import { Sparkline } from '@/components/ui/Sparkline';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 lg:pt-18 pb-14 sm:pb-20 border-b border-[#E7E4DE] bg-[#FBFBF9]">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-4 sm:mb-5 bg-[#DDEDEA]/60 px-3 py-1 rounded-xs border border-[#087F78]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F78]" />
              <span>GLOBAL MARKET ACCESS</span>
            </div>

            {/* 2. Headline */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5 sm:mb-6"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Trade the world&apos;s markets with{' '}
              <span className="text-[#087F78]">confidence.</span>
            </h1>

            {/* 3. Supporting copy */}
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed max-w-xl mb-8 sm:mb-9">
              Access Forex, digital assets, indices and commodities through a modern brokerage experience designed for informed market participants.
            </p>

            {/* 4. CTAs - Minimum 44px touch targets on mobile */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
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
                to="/markets"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Explore Markets
              </Button>

              <Link
                href="/platforms"
                className="text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#087F78] inline-flex items-center justify-center gap-1.5 py-2.5 sm:px-2 transition-colors min-h-[44px]"
              >
                <span>View Trading Platforms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Capability Metrics Strip */}
            <div className="pt-6 border-t border-[#E7E4DE] w-full grid grid-cols-3 gap-3 sm:gap-4 text-xs text-[#77736C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#087F78] shrink-0" />
                <span className="font-medium text-[#111111] text-[11px] sm:text-xs">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#087F78] shrink-0" />
                <span className="font-medium text-[#111111] text-[11px] sm:text-xs">Modern Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#087F78] shrink-0" />
                <span className="font-medium text-[#111111] text-[11px] sm:text-xs">Multi-Asset Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Marketing Financial Dashboard Visualization */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Outer Decorative Terminal Card */}
              <div className="bg-white border border-[#E7E4DE] shadow-sm rounded-xl p-5 sm:p-6 transition-all hover:border-[#087F78]/40">
                {/* Header: Market Watch Status */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E7E4DE]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A9F6E]" />
                    <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider font-mono">
                      Market Watch
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#77736C] bg-[#F3F2EE] px-2 py-0.5 rounded-xs">
                    Demo Snapshot
                  </span>
                </div>

                {/* Primary Asset Spotlight: BTC/USD */}
                <div className="mb-4 p-4 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#111111]">BTC/USD</span>
                      <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-1.5 py-0.5 rounded-xs font-semibold">
                        Crypto
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-[#0A9F6E] flex items-center">
                      <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                      +2.84%
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-2.5">
                    <div className="text-2xl font-mono font-semibold text-[#111111] tabular-nums">
                      $64,820.50
                    </div>
                    <div className="text-[11px] text-[#77736C] font-mono">
                      Spread: <span className="font-semibold text-[#111111]">1.2 pts</span>
                    </div>
                  </div>

                  {/* Sparkline Canvas */}
                  <div className="w-full flex justify-center py-1">
                    <Sparkline
                      data={[63200, 63400, 63100, 63900, 64200, 64100, 64820.5]}
                      isPositive={true}
                      width={280}
                      height={44}
                      className="w-full max-w-xs"
                    />
                  </div>

                  {/* Market Depth-Style Decorative Data */}
                  <div className="mt-3 pt-2.5 border-t border-[#E7E4DE]/60 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#77736C]">
                      <span>Bid Depth: 14.8 BTC</span>
                      <span>Ask Depth: 12.3 BTC</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E7E4DE] rounded-full overflow-hidden flex">
                      <div className="bg-[#0A9F6E] h-full" style={{ width: '55%' }} />
                      <div className="bg-[#E5484D] h-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>

                {/* Secondary Asset Cards Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Spot Gold */}
                  <div className="p-3 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#111111]">XAU/USD</span>
                      <span className="text-[10px] text-[#0A9F6E] font-mono font-medium">+0.74%</span>
                    </div>
                    <div className="text-sm font-mono font-semibold text-[#111111] tabular-nums">
                      $2,658.40
                    </div>
                    <div className="text-[10px] text-[#77736C] mt-0.5">Spot Gold</div>
                  </div>

                  {/* EUR/USD */}
                  <div className="p-3 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#111111]">EUR/USD</span>
                      <span className="text-[10px] text-[#E5484D] font-mono font-medium">-0.22%</span>
                    </div>
                    <div className="text-sm font-mono font-semibold text-[#111111] tabular-nums">
                      1.0874
                    </div>
                    <div className="text-[10px] text-[#77736C] mt-0.5">Spread: 0.2 pip</div>
                  </div>
                </div>

                {/* Staging Action Link to External Terminal */}
                <div className="pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                  <div className="text-[#77736C]">
                    Terminal Status: <span className="font-mono font-semibold text-[#0A9F6E]">Available</span>
                  </div>
                  <a
                    href={BROKER_CONFIG.tradingTerminalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 group"
                  >
                    <span>Launch Terminal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white border border-[#E7E4DE] shadow-md rounded-lg p-3 items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#DDEDEA] flex items-center justify-center text-[#087F78]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111111]">Modern Execution Flow</div>
                  <div className="text-[11px] text-[#77736C]">Engineered for active market traders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
