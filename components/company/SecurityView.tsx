'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import {
  SECURITY_PILLARS,
  SECURITY_LAYERS,
  COMPANY_DATA
} from '@/lib/company-data';
import {
  ShieldCheck,
  Lock,
  Smartphone,
  Eye,
  Activity,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Layers,
  FileText,
  Server
} from 'lucide-react';

export const SecurityView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'account-security': return <Lock className="w-5 h-5 text-[#087F78]" />;
      case 'two-factor-auth': return <Smartphone className="w-5 h-5 text-[#087F78]" />;
      case 'session-monitoring': return <Eye className="w-5 h-5 text-[#087F78]" />;
      case 'device-monitoring': return <Activity className="w-5 h-5 text-[#087F78]" />;
      case 'withdrawal-controls': return <KeyRound className="w-5 h-5 text-[#087F78]" />;
      case 'operational-security':
      default: return <Server className="w-5 h-5 text-[#087F78]" />;
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
          <Link href="/company/why-us" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Why Choose Us
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Security Architecture
          </span>
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
              SECURITY ARCHITECTURE
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Security is part of the platform, not an afterthought.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              {BRAND_NAME} is designed around layered account controls, secure access and operational monitoring to safeguard client accounts and data.
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
                Open Protected Account
              </Button>
              <Button
                to="/trading/risk-management"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Risk Management Policy
              </Button>
            </div>
          </div>
        </div>

        {/* Security Status Panel */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E7E4DE]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block">
                SYSTEM TELEMETRY
              </span>
              <h3 className="text-lg font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Security Operations &amp; Protection Status
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0A9F6E] bg-[#DDEDEA] px-3 py-1.5 rounded-md font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0A9F6E] animate-pulse" />
              <span>ALL SECURITY PROTOCOLS NOMINAL</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
              <div className="text-[10px] font-mono uppercase text-[#77736C] mb-1">Account Protection</div>
              <div className="text-sm font-semibold text-[#111111] mb-1">Enforced</div>
              <div className="text-[11px] text-[#087F78] font-mono">Argon2 Password Hashes</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
              <div className="text-[10px] font-mono uppercase text-[#77736C] mb-1">Operational Monitoring</div>
              <div className="text-sm font-semibold text-[#111111] mb-1">Active 24/7</div>
              <div className="text-[11px] text-[#087F78] font-mono">Real-Time IP Tracking</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
              <div className="text-[10px] font-mono uppercase text-[#77736C] mb-1">Access Controls</div>
              <div className="text-sm font-semibold text-[#111111] mb-1">Monitored</div>
              <div className="text-[11px] text-[#087F78] font-mono">TOTP 2FA Verification</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
              <div className="text-[10px] font-mono uppercase text-[#77736C] mb-1">Security Alerts</div>
              <div className="text-sm font-semibold text-[#111111] mb-1">Instant</div>
              <div className="text-[11px] text-[#087F78] font-mono">Email Device Challenges</div>
            </div>
          </div>
        </div>

        {/* Layered Security Diagram (Interactive Flow) */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              ARCHITECTURE SCHEMATIC
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Seven-Stage Security Defense Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              Every user session, market order, and withdrawal request passes through automated validation gates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Flow Pipeline List */}
            <div className="lg:col-span-7 space-y-3">
              {SECURITY_LAYERS.map(layer => {
                const isSelected = activeStep === layer.step;
                return (
                  <div
                    key={layer.step}
                    onClick={() => setActiveStep(layer.step)}
                    className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-white border-[#087F78] ring-2 ring-[#087F78]/10 shadow-xs'
                        : 'bg-white/80 border-[#E7E4DE] hover:border-[#087F78]/40'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#087F78] text-white'
                          : 'bg-[#F3F2EE] text-[#77736C]'
                      }`}
                    >
                      0{layer.step}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-semibold text-[#111111]">{layer.label}</h4>
                        <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs">
                          {layer.technicalName}
                        </span>
                      </div>
                      <p className="text-xs text-[#77736C] leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Layer Visual Inspector Card */}
            <div className="lg:col-span-5 sticky top-24">
              {(() => {
                const current = SECURITY_LAYERS.find(l => l.step === activeStep) || SECURITY_LAYERS[0];
                return (
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#181818] text-white border border-[#E7E4DE] shadow-lg">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                      <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold">
                        LAYER STAGE {current.step} OF 7
                      </span>
                      <span className="text-xs font-mono text-[#E7E4DE]/60">INSPECTOR</span>
                    </div>

                    <h3 className="text-xl font-normal text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                      {current.label}
                    </h3>
                    <div className="text-xs font-mono text-[#087F78] mb-6">
                      // {current.technicalName}
                    </div>

                    <p className="text-xs sm:text-sm text-[#E7E4DE]/90 leading-relaxed mb-8">
                      {current.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-white/10 text-xs font-mono text-[#E7E4DE]/80">
                      <div className="flex items-center justify-between">
                        <span>Latency Impact:</span>
                        <span className="text-[#0A9F6E]">&lt; 1.2ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Verification Rule:</span>
                        <span className="text-white">Deterministic Strict</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Fail Action:</span>
                        <span className="text-[#E5484D]">Reject &amp; Quarantine</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* 6 Security Sections Detail Cards */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              COMPREHENSIVE CONTROLS
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Six Security Architecture Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              Detailed breakdown of cryptographic standards, authentication mechanisms, and custody rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_PILLARS.map(pillar => (
              <div
                key={pillar.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-xs font-semibold ${
                        pillar.status === 'Enforced'
                          ? 'bg-[#181818] text-white'
                          : pillar.status === 'Active'
                          ? 'bg-[#DDEDEA] text-[#087F78]'
                          : 'bg-[#F3F2EE] text-[#111111]'
                      }`}
                    >
                      {pillar.status}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#111111] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Protocols list */}
                  <div className="space-y-2 mb-4 pt-4 border-t border-[#E7E4DE]">
                    <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block">
                      Enforced Protocols:
                    </span>
                    {pillar.protocols.map((proto, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-[#111111]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span className="font-mono text-[11px]">{proto}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            CLIENT CUSTODY &amp; SEGREGATION
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Your funds remain segregated in Tier-1 banks.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-8 leading-relaxed">
            Client money is held in strictly segregated custodial bank accounts and never co-mingled with company operational capital.
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
              Open Protected Account
            </Button>
            <Button
              to="/company/why-us"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Brokerage Features
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
