'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HelpHero } from './HelpHero';
import { FAQAccordion } from './FAQAccordion';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const FAQView: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Editorial Hero */}
        <HelpHero
          eyebrow="FAQ &amp; KNOWLEDGE BASE"
          title="Frequently asked questions."
          description="Quick answers to common questions about accounts, markets, platforms, trading and security."
          activeSubroute="faq"
        />

        {/* Full 50+ FAQ Accordion with Category Tabs & Search */}
        <React.Suspense fallback={<div className="py-8 text-center text-xs text-[#77736C]">Loading FAQs...</div>}>
          <FAQAccordion />
        </React.Suspense>

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            NEED FURTHER ASSISTANCE?
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Didn&apos;t find your answer?
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-8 leading-relaxed">
            Reach out directly to our dedicated support and market operations desks for personalized assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/help/support"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Contact Support Desk
            </Button>
            <Button
              to="/resources/academy"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Trading Academy
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
