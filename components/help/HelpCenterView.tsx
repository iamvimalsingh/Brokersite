'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { HelpHero } from './HelpHero';
import { HelpSearch } from './HelpSearch';
import { HelpCategoryGrid } from './HelpCategoryGrid';
import { PopularQuestions } from './PopularQuestions';
import { HELP_QUICK_LINKS } from '@/lib/help-data';
import {
  BarChart2,
  Laptop,
  Calculator,
  TrendingUp,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  ArrowUpRight,
  Headphones,
  BookOpen
} from 'lucide-react';

export const HelpCenterView: React.FC = () => {
  const getQuickIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-4 h-4 text-[#087F78]" />;
      case 'Calculator': return <Calculator className="w-4 h-4 text-[#087F78]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#087F78]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#087F78]" />;
      case 'HelpCircle': return <HelpCircle className="w-4 h-4 text-[#087F78]" />;
      case 'BarChart2':
      default: return <BarChart2 className="w-4 h-4 text-[#087F78]" />;
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Editorial Hero */}
        <HelpHero
          eyebrow="HELP CENTER"
          title="Find the answers you need."
          description="Explore trading, platforms, accounts, market information and support resources in one place."
          activeSubroute="help"
        />

        {/* Global Help Search */}
        <HelpSearch />

        {/* 8 Categories Grid */}
        <HelpCategoryGrid />

        {/* 10 Popular Questions Accordion */}
        <PopularQuestions />

        {/* Horizontal Quick Action Strip */}
        <div className="mb-20">
          <div className="mb-4">
            <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold">
              Quick Navigation
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {HELP_QUICK_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="p-3.5 rounded-xl bg-white border border-[#E7E4DE] hover:border-[#087F78] shadow-xs flex items-center gap-2.5 text-xs text-[#111111] hover:text-[#087F78] font-medium transition-all group"
              >
                <div className="w-7 h-7 rounded-md bg-[#DDEDEA] flex items-center justify-center shrink-0">
                  {getQuickIcon(link.icon)}
                </div>
                <span className="truncate">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Pre-Footer Action Banner ("Still need help?") */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#181818] text-white text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            ASSISTANCE &amp; RESOURCES
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Still need help?
          </h3>
          <p className="text-xs sm:text-sm text-[#E7E4DE]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Our multi-asset support desk is available during global market sessions to provide prompt technical assistance and answer platform questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/help/support"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Contact Support
            </Button>
            <Button
              to="/help/faq"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Browse 50+ FAQs
            </Button>
            <Button
              to="/resources/guides"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Explore Trading Guides
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
