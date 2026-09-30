import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { BROKER_CONFIG } from '../../lib/config';
import { Sparkline } from '../common/Sparkline';
import { ArrowUpRight, ShieldCheck, Zap, Globe2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-[#E7E4DE]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-4 sm:mb-5 bg-[#DDEDEA]/60 px-3 py-1 rounded-xs border border-[#087F78]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F78]" />
              <span>GLOBAL MARKET ACCESS</span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5 sm:mb-6"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Trade the world&apos;s markets with{' '}
              <span className="text-[#087F78]">confidence.</span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed max-w-xl mb-8 sm:mb-9">
              Access Forex, digital assets, indices and commodities through a modern brokerage experience designed for informed market participants.
            </p>

            {/* CTA Group */}
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
                to="/platforms"
                className="text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#087F78] inline-flex items-center justify-center gap-1.5 py-2.5 sm:px-2 transition-colors min-h-[44px]"
              >
                <span>View Trading Platforms</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Institutional Trust Markers */}
            <div className="pt-6 border-t border-[#E7E4DE] w-full grid grid-cols-3 gap-4 text-xs text-[#77736C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#087F78] shrink-0" />
                <span className="font-medium text-[#111111]">Tier-1 Bank Liquidity</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#087F78] shrink-0" />
                <span className="font-medium text-[#111111]">Ultra-Low Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#087F78] shrink-0" />
                <span className="font-medium text-[#111111]">500+ Instruments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Market Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Outer Framed Terminal Card */}
              <div className="bg-white border border-[#E7E4DE] shadow-xl rounded-lg p-5 sm:p-6 transition-all hover:border-[#087F78]/40">
                {/* Header of Simulated Execution Monitor */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E7E4DE]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A9F6E]" />
                    <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider font-mono">
                      Institutional Execution Feed
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#77736C] bg-[#F3F2EE] px-2 py-0.5 rounded-sm">
                    DMA / ECN Direct
                  </span>
                </div>

                {/* Primary Asset Spotlight: BTC/USD */}
                <div className="mb-5 p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
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

                  <div className="flex items-baseline justify-between mb-3">
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
                </div>

                {/* Secondary Tickers Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {/* Spot Gold */}
                  <div className="p-3 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
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
                  <div className="p-3 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#111111]">EUR/USD</span>
                      <span className="text-[10px] text-[#E5484D] font-mono font-medium">-0.22%</span>
                    </div>
                    <div className="text-sm font-mono font-semibold text-[#111111] tabular-nums">
                      1.0874
                    </div>
                    <div className="text-[10px] text-[#77736C] mt-0.5">Spread: 0.1 pip</div>
                  </div>
                </div>

                {/* Real-time Order Staging Action */}
                <div className="pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                  <div className="text-[#77736C]">
                    Aggregated Depth: <span className="font-mono font-semibold text-[#111111]">Level 2</span>
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
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-[#E7E4DE] shadow-lg rounded-md p-3 items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#DDEDEA] flex items-center justify-center text-[#087F78]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111111]">Sub-30ms Fill Time</div>
                  <div className="text-[11px] text-[#77736C]">Equinix LD4 / NY4 Cross-Connect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
