'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import {
  WHY_US_FEATURES,
  BROKER_COMPARISON_DATA,
  COMPANY_DATA
} from '@/lib/company-data';
import {
  Layers,
  Laptop,
  TrendingUp,
  Calculator,
  BarChart2,
  ShieldAlert,
  Headphones,
  BookOpen,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const WhyUsView: React.FC = () => {
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5 text-[#087F78]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#087F78]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#087F78]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#087F78]" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-[#087F78]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#087F78]" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#087F78]" />;
      case 'BookOpen':
      default: return <BookOpen className="w-5 h-5 text-[#087F78]" />;
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/company/about" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            About {BRAND_NAME}
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Why Choose Us
          </span>
          <Link href="/company/security" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Security Architecture
          </Link>
          <Link href="/company/partners" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Partners
          </Link>
          <Link href="/company/careers" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Careers
          </Link>
          <Link href="/contact" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Contact
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-20 border-b border-[#E7E4DE] pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              ADVANTAGE &amp; CAPABILITIES
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Why traders choose a modern brokerage.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              We combine institutional liquidity, ultra-low latency execution, comprehensive risk safeguards, and daily research into a cohesive multi-asset platform.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
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
                to="/trading/conditions"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                View Trading Conditions
              </Button>
            </div>
          </div>
        </div>

        {/* Data Strip Metrics */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#E7E4DE]">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-normal text-[#111111] font-mono mb-1">
                1,000+
              </div>
              <div className="text-xs font-semibold text-[#111111] uppercase mb-0.5">Tradable Markets</div>
              <div className="text-[11px] font-mono text-[#087F78]">Forex, Crypto, Metals, Indices</div>
            </div>

            <div className="p-2 pt-6 sm:pt-2">
              <div className="text-3xl sm:text-4xl font-normal text-[#087F78] font-mono mb-1">
                24/7
              </div>
              <div className="text-xs font-semibold text-[#111111] uppercase mb-0.5">Digital Asset Access</div>
              <div className="text-[11px] font-mono text-[#77736C]">Continuous Derivatives Trading</div>
            </div>

            <div className="p-2 pt-6 sm:pt-2">
              <div className="text-3xl sm:text-4xl font-normal text-[#111111] font-mono mb-1">
                5 Platforms
              </div>
              <div className="text-xs font-semibold text-[#111111] uppercase mb-0.5">Trading Environments</div>
              <div className="text-[11px] font-mono text-[#087F78]">Web, Mobile, MT5, MT4, TV</div>
            </div>

            <div className="p-2 pt-6 sm:pt-2">
              <div className="text-3xl sm:text-4xl font-normal text-[#111111] font-mono mb-1">
                Global
              </div>
              <div className="text-xs font-semibold text-[#111111] uppercase mb-0.5">Market Coverage</div>
              <div className="text-[11px] font-mono text-[#77736C]">London, New York, Tokyo Hours</div>
            </div>
          </div>
        </div>

        {/* 8 Feature Areas Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              CORE PILLARS
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Eight Reasons to Trade with {BRAND_NAME}
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              Engineered from the ground up for transparency, reliability, and institutional precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US_FEATURES.map(feat => (
              <div
                key={feat.id}
                className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getFeatureIcon(feat.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs font-semibold">
                      {feat.category}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-normal text-[#111111] mb-1.5"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#087F78] font-medium mb-3">
                    {feat.highlight}
                  </p>

                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Comparison: Traditional vs RegearFX Modern Brokerage */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              PARADIGM SHIFT
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Traditional Experience vs. Modern Brokerage
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              How {BRAND_NAME} redesigns every touchpoint of retail and institutional market engagement.
            </p>
          </div>

          <div className="bg-white border border-[#E7E4DE] rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#F3F2EE] border-b border-[#E7E4DE] p-4 text-xs font-mono font-bold uppercase">
              <div className="md:col-span-4 text-[#77736C]">Brokerage Aspect</div>
              <div className="md:col-span-4 text-[#E5484D] hidden md:block">Traditional Legacy Broker</div>
              <div className="md:col-span-4 text-[#087F78] hidden md:block">{BRAND_NAME} Modern Approach</div>
            </div>

            <div className="divide-y divide-[#E7E4DE]">
              {BROKER_COMPARISON_DATA.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 text-xs items-center gap-3 md:gap-4">
                  <div className="md:col-span-4 font-semibold text-[#111111]">
                    {row.feature}
                  </div>

                  <div className="md:col-span-4 flex items-start gap-2 text-[#77736C] bg-[#FBFBF9] md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none">
                    <XCircle className="w-4 h-4 text-[#E5484D] shrink-0 mt-0.5" />
                    <div>
                      <span className="md:hidden font-bold text-[#E5484D] block mb-0.5">Traditional Broker:</span>
                      <span>{row.traditional}</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 flex items-start gap-2 text-[#111111] bg-[#DDEDEA]/40 md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none">
                    <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                    <div>
                      <span className="md:hidden font-bold text-[#087F78] block mb-0.5">{BRAND_NAME}:</span>
                      <span className="font-medium text-[#111111]">{row.regear}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#181818] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono uppercase text-[#087F78] bg-white/10 px-2.5 py-1 rounded-sm font-semibold">
              TRANSPARENT CONDITIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white mt-3 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Ready to trade with modern infrastructure?
            </h3>
            <p className="text-xs sm:text-sm text-[#E7E4DE]/80 leading-relaxed">
              Open your live or demo trading account today and access transparent market execution with {BRAND_NAME}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto justify-center"
            >
              Open Account
            </Button>
            <Button
              to="/trading/accounts"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Compare Account Types
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
