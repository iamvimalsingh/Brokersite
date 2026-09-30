'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import {
  COMPANY_DATA,
  COMPANY_TIMELINE,
  COMPANY_VALUES
} from '@/lib/company-data';
import {
  Eye,
  Cpu,
  ShieldCheck,
  Lock,
  Globe,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Clock,
  MapPin,
  Building2,
  Compass,
  FileCheck
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Eye': return <Eye className="w-5 h-5 text-[#087F78]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#087F78]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#087F78]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#087F78]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#087F78]" />;
      case 'Sparkles':
      default: return <Sparkles className="w-5 h-5 text-[#087F78]" />;
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            About {BRAND_NAME}
          </span>
          <Link href="/company/why-us" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Why Choose Us
          </Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
                ABOUT {BRAND_NAME}
              </div>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
              >
                Built for a changing world of markets.
              </h1>
              <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-xl">
                {BRAND_NAME} brings market access, trading technology, research and educational resources together in one modern brokerage experience.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  to="/company/why-us"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto justify-center min-h-[44px]"
                >
                  Why Choose Us
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto justify-center min-h-[44px]"
                >
                  Contact Our Desk
                </Button>
              </div>
            </div>

            {/* Abstract Global Market Visualization */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E7E4DE]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block">
                      Global Desk Network
                    </span>
                    <h3 className="text-sm font-semibold text-[#111111]">Operating Centers</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] text-[10px] font-mono font-bold">
                    ACTIVE DESKS
                  </span>
                </div>

                {/* Abstract Line Grid & Nodes */}
                <div className="h-52 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] p-4 relative flex flex-col justify-between overflow-hidden">
                  {/* Geometric Lines & Rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                    <div className="w-48 h-48 rounded-full border border-[#087F78]" />
                    <div className="w-32 h-32 rounded-full border border-[#087F78]/50 absolute" />
                    <div className="w-64 h-64 rounded-full border border-[#087F78]/20 absolute" />
                  </div>

                  {/* Operational Nodes */}
                  <div className="grid grid-cols-3 gap-2 relative z-10 text-center">
                    <div className="p-2.5 rounded-lg bg-white border border-[#E7E4DE] shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-[#087F78] mx-auto mb-1" />
                      <div className="text-xs font-semibold text-[#111111]">London</div>
                      <div className="text-[10px] text-[#77736C] font-mono">LD4 Colocation</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[#E7E4DE] shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-[#087F78] mx-auto mb-1" />
                      <div className="text-xs font-semibold text-[#111111]">Dubai</div>
                      <div className="text-[10px] text-[#77736C] font-mono">Regional Hub</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[#E7E4DE] shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-[#087F78] mx-auto mb-1" />
                      <div className="text-xs font-semibold text-[#111111]">Singapore</div>
                      <div className="text-[10px] text-[#77736C] font-mono">Tech Gateway</div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Ultra-Low Latency Routing</span>
                    <span className="text-[#087F78] font-bold">&lt; 25ms Execution</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-mono text-[#77736C]">
                  <span>Founded: {COMPANY_DATA.foundedYear}</span>
                  <span>HQ: {COMPANY_DATA.headquarters}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Narrative Story */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              ORIGIN &amp; EVOLUTION
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-[#77736C] leading-relaxed">
              {BRAND_NAME} was established with a singular focus: to modernize brokerage infrastructure by uniting institutional market connectivity, editorial research, and transparent trading conditions into a seamless digital experience.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="relative border-l-2 border-[#E7E4DE] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {COMPANY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#087F78] group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#087F78] bg-[#DDEDEA] px-2.5 py-0.5 rounded-xs">
                      {item.year} · {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Sections (Large Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/20 flex items-center justify-center mb-6">
                <Compass className="w-5 h-5 text-[#087F78]" />
              </div>
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-bold block mb-2">
                OUR MISSION
              </span>
              <h3
                className="text-2xl sm:text-3xl font-normal text-[#111111] leading-snug mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;{COMPANY_DATA.mission}&rdquo;
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed pt-4 border-t border-[#E7E4DE]">
              We eliminate unnecessary friction and ambiguous pricing so traders can focus entirely on market strategy and risk budgeting.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#181818] text-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <Building2 className="w-5 h-5 text-[#087F78]" />
              </div>
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-bold block mb-2">
                OUR VISION
              </span>
              <h3
                className="text-2xl sm:text-3xl font-normal text-white leading-snug mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;{COMPANY_DATA.vision}&rdquo;
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#E7E4DE]/80 leading-relaxed pt-4 border-t border-white/10">
              Transforming global market access into a transparent, multi-asset financial ecosystem backed by institutional execution standards.
            </p>
          </div>
        </div>

        {/* 6 Core Values Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              OPERATIONAL PILLARS
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              Principles that govern our technological engineering, market pricing, and client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map(val => (
              <div
                key={val.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getValueIcon(val.iconName)}
                  </div>
                  <h3
                    className="text-xl font-normal text-[#111111] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#087F78] mb-3">
                    {val.shortDesc}
                  </p>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats Data Strip */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {COMPANY_DATA.metrics.map((m, i) => (
              <div key={i} className="p-3">
                <div className="text-2xl sm:text-3xl font-normal text-[#111111] font-mono mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-[#111111] mb-0.5">{m.label}</div>
                <div className="text-[11px] font-mono text-[#087F78]">{m.change}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Footer CTA Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            GET STARTED TODAY
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Experience modern multi-asset trading.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-8 leading-relaxed">
            Open an account in minutes or explore our risk-free demo environment with real-time institutional market conditions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              to="/markets"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Markets
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
