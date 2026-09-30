import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG } from '@/lib/config';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F3F2EE] border-b border-[#E7E4DE]">
      <Container size="narrow">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
            Get Started
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-5"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Explore the markets with a platform built for modern traders.
          </h2>
          <p className="text-sm sm:text-base text-[#77736C] leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
            Discover markets, tools and trading resources in one professional brokerage experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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

          <div className="mt-8 text-xs text-[#77736C] flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>· Multi-Asset Access</span>
            <span>· Transparent Conditions</span>
            <span>· Flexible Platforms</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
