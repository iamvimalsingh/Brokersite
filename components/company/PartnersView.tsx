'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import {
  PARTNER_CATEGORIES,
  PARTNER_PIPELINE,
  COMPANY_DATA
} from '@/lib/company-data';
import {
  Handshake,
  Network,
  Cpu,
  BarChart3,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Users,
  Zap,
  Mail,
  X
} from 'lucide-react';

export const PartnersView: React.FC = () => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerType, setPartnerType] = useState('Introducing Broker (IB)');
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerMessage, setPartnerMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (partnerEmail && partnerName) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setPartnerModalOpen(false);
        setPartnerName('');
        setPartnerEmail('');
        setPartnerMessage('');
      }, 2500);
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
          <Link href="/company/security" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Security Architecture
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Partners
          </span>
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
              INSTITUTIONAL ECOSYSTEM
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Built through strong market relationships.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Our brokerage infrastructure is powered by close collaborations with tier-1 liquidity aggregators, financial technology providers, and institutional partners.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="px-6 py-3 rounded-lg bg-[#087F78] text-white text-xs font-semibold hover:bg-[#076C66] transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-xs min-h-[44px]"
              >
                <span>Become an Institutional Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Contact Partnerships Desk
              </Button>
            </div>
          </div>
        </div>

        {/* 5-Step Partnership Pipeline */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              INTEGRATION ARCHITECTURE
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Partnership Model
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              A five-stage integration lifecycle connecting technology, liquidity, and client services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PARTNER_PIPELINE.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-[#087F78] mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Partner Categories Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
              ECOSYSTEM CATEGORIES
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal text-[#111111] mt-1 mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Specialized Infrastructure Partners
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C]">
              Institutional providers supporting continuous multi-asset pricing, connectivity, and clearing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                      {cat.role}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#111111] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Demo Partner Profiles Showcase */}
                  <div className="space-y-2 mb-6 p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="text-[10px] font-mono uppercase text-[#77736C] font-semibold flex items-center justify-between">
                      <span>Representative Profiles:</span>
                      <span className="text-[#087F78]">Demo designation</span>
                    </div>
                    {cat.demoProfiles.map((prof, pIdx) => (
                      <div key={pIdx} className="p-2 bg-white rounded-md border border-[#E7E4DE] text-xs">
                        <div className="font-semibold text-[#111111]">{prof.name}</div>
                        <div className="text-[11px] text-[#77736C] flex items-center justify-between mt-0.5">
                          <span>{prof.tier}</span>
                          <span className="font-mono text-[#087F78]">{prof.focus}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs */}
                  <div className="space-y-1.5 pt-4 border-t border-[#E7E4DE]">
                    <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block">
                      Core Specifications:
                    </span>
                    {cat.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-[#111111]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span className="text-[11px]">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Introducing Broker (IB) & Institutional Programs Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-[#087F78]" />
              </div>
              <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block mb-2">
                FOR INTRODUCING BROKERS
              </span>
              <h3 className="text-2xl font-normal text-[#111111] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Introducing Broker (IB) Program
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Earn competitive, multi-tier rebate commissions with real-time tracking, transparent client reporting, and dedicated affiliate portal dashboards.
              </p>
              <div className="space-y-2 text-xs text-[#111111]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78]" />
                  <span>Real-time rebate settlements per closed lot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78]" />
                  <span>Customizable marketing collateral and tracking URLs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78]" />
                  <span>Dedicated institutional account manager</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E7E4DE]">
              <button
                onClick={() => {
                  setPartnerType('Introducing Broker (IB)');
                  setPartnerModalOpen(true);
                }}
                className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Apply as an Introducing Broker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#181818] text-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <Building2 className="w-5 h-5 text-[#087F78]" />
              </div>
              <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block mb-2">
                FOR INSTITUTIONAL TRADERS
              </span>
              <h3 className="text-2xl font-normal text-white mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Institutional Liquidity &amp; White Label
              </h3>
              <p className="text-xs sm:text-sm text-[#E7E4DE]/80 leading-relaxed mb-6">
                Direct FIX 4.4 API connectivity, custom aggregated liquidity pools, high-volume tiered commissions, and turnkey brokerage infrastructure solutions.
              </p>
              <div className="space-y-2 text-xs text-[#E7E4DE]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78]" />
                  <span>Direct Equinix LD4 / NY4 cross-connect colocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78]" />
                  <span>Bespoke margin schedules and custom leverage limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F78]" />
                  <span>White Label terminal deployment with custom branding</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setPartnerType('Institutional & Liquidity');
                  setPartnerModalOpen(true);
                }}
                className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire About Institutional Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal: Partnership Inbound Inquiry */}
        {partnerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                  Institutional Partnership Inquiry
                </span>
                <button
                  onClick={() => setPartnerModalOpen(false)}
                  className="p-1.5 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#087F78] mx-auto" />
                  <h4 className="text-xl font-semibold text-[#111111]">Inquiry Received</h4>
                  <p className="text-xs text-[#77736C] max-w-md mx-auto">
                    Thank you, {partnerName}. Our institutional desk will reach out to <span className="font-mono text-[#111111]">{partnerEmail}</span> within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <h3 className="text-xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Discuss a Partnership
                  </h3>
                  <p className="text-xs text-[#77736C]">
                    Submit your requirements to explore institutional liquidity, introducing broker terms, or technology integrations.
                  </p>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Partnership Type</label>
                    <select
                      value={partnerType}
                      onChange={e => setPartnerType(e.target.value)}
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    >
                      <option value="Introducing Broker (IB)">Introducing Broker (IB)</option>
                      <option value="Institutional & Liquidity">Institutional &amp; Liquidity Provider</option>
                      <option value="Technology & API">Technology &amp; API Integration</option>
                      <option value="Payment Provider">Payment &amp; Banking Gateway</option>
                      <option value="Affiliate Network">Affiliate &amp; Media Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Company / Full Name</label>
                    <input
                      type="text"
                      required
                      value={partnerName}
                      onChange={e => setPartnerName(e.target.value)}
                      placeholder="e.g. Apex Capital Ltd / Alex Morgan"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Institutional Email</label>
                    <input
                      type="email"
                      required
                      value={partnerEmail}
                      onChange={e => setPartnerEmail(e.target.value)}
                      placeholder="e.g. partners@apexcapital.com"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Partnership Scope / Message</label>
                    <textarea
                      rows={3}
                      value={partnerMessage}
                      onChange={e => setPartnerMessage(e.target.value)}
                      placeholder="Estimated monthly volume, target jurisdictions, specific API or rebate requirements..."
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#087F78] text-white text-xs font-semibold hover:bg-[#076C66] transition-colors cursor-pointer shadow-xs"
                  >
                    Submit Partnership Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            DIRECT COMMUNICATIONS
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Have a custom institutional requirement?
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-8 leading-relaxed">
            Contact our institutional desk directly at <span className="font-mono text-[#111111]">{COMPANY_DATA.partnersEmail}</span> to arrange a confidential consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Contact Desk
            </Button>
            <Button
              to="/company/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              About {BRAND_NAME}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
