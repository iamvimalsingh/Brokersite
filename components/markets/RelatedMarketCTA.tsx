'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG } from '@/lib/config';
import { ArrowUpRight } from 'lucide-react';

interface RelatedMarketCTAProps {
  categoryName?: string;
}

export const RelatedMarketCTA: React.FC<RelatedMarketCTAProps> = ({ categoryName }) => {
  return (
    <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
      <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
        Market Access
      </div>
      <h3
        className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Ready to explore the market?
      </h3>
      <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        Access transparent trading conditions, competitive spreads, and reliable platform tools across {categoryName || 'global financial markets'}.
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
          View All Markets
        </Button>
      </div>
    </div>
  );
};
