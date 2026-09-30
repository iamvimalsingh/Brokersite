'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HelpHero } from './HelpHero';
import { SupportChannels } from './SupportChannels';
import { SupportForm } from './SupportForm';
import { Troubleshooting } from './Troubleshooting';
import { SupportStatus } from './SupportStatus';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const SupportView: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Editorial Hero */}
        <HelpHero
          eyebrow="SUPPORT &amp; OPERATIONS"
          title="We're here when you need us."
          description="Reach the right team for general questions, trading information, partnerships or technical assistance."
          activeSubroute="support"
        />

        {/* 4 Dedicated Support Channels */}
        <SupportChannels />

        {/* Main Grid: Support Form & CRM Portal Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20 items-start">
          <div className="lg:col-span-8">
            <SupportForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Existing Client CRM Action */}
            <div className="p-6 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-xs text-[#77736C] space-y-3">
              <div className="font-semibold text-[#111111] text-sm">Active Account Portals</div>
              <p>
                To deposit or withdraw funds, upload KYC identity documents, or view live account balances:
              </p>
              <div className="pt-1">
                <Button
                  href={BROKER_CONFIG.crmLoginUrl}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="bg-white w-full justify-center"
                >
                  Access Client Portal Sign In &rarr;
                </Button>
              </div>
            </div>

            {/* Support Desk Direct Details */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs text-xs space-y-4">
              <div className="font-semibold text-[#111111] text-sm pb-2 border-b border-[#E7E4DE]">
                Operating Hours &amp; Telephone
              </div>
              <div>
                <div className="text-[#77736C] text-[10px] uppercase font-mono">Telephone Support:</div>
                <div className="font-mono text-sm font-semibold text-[#111111] mt-0.5">{BROKER_CONFIG.supportPhone}</div>
              </div>
              <div>
                <div className="text-[#77736C] text-[10px] uppercase font-mono">Market Desk Hours:</div>
                <div className="font-mono text-xs text-[#111111] mt-0.5">{BROKER_CONFIG.operatingHours}</div>
              </div>
              <div>
                <div className="text-[#77736C] text-[10px] uppercase font-mono">Emergency Escalation:</div>
                <div className="font-mono text-xs text-[#087F78] mt-0.5">security@regearfx.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Diagnostic Troubleshooting Procedures */}
        <Troubleshooting />

        {/* Real-Time Platform Service Status Panel */}
        <div className="mb-20">
          <SupportStatus />
        </div>

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#181818] text-white text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            KNOWLEDGE BASE
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Explore self-guided trading resources.
          </h3>
          <p className="text-xs sm:text-sm text-[#E7E4DE]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            From currency pair calculations to algorithmic execution setup, review our structured guides and trading documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/help/faq"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Browse 50+ FAQs
            </Button>
            <Button
              to="/resources/academy"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Trading Academy
            </Button>
            <Button
              to="/tools/calculators"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Trading Calculators
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
