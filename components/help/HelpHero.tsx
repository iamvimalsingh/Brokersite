'use client';

import React from 'react';
import Link from 'next/link';

interface HelpHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  activeSubroute?: 'help' | 'faq' | 'support';
}

export const HelpHero: React.FC<HelpHeroProps> = ({
  eyebrow = 'HELP CENTER',
  title,
  description,
  activeSubroute = 'help'
}) => {
  return (
    <div>
      {/* Navigation Breadcrumb Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
        <Link
          href="/help"
          className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
            activeSubroute === 'help'
              ? 'font-semibold text-[#087F78] bg-[#DDEDEA]/60'
              : 'text-[#77736C] hover:text-[#111111]'
          }`}
        >
          Help Center
        </Link>
        <Link
          href="/help/faq"
          className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
            activeSubroute === 'faq'
              ? 'font-semibold text-[#087F78] bg-[#DDEDEA]/60'
              : 'text-[#77736C] hover:text-[#111111]'
          }`}
        >
          Frequently Asked Questions (FAQ)
        </Link>
        <Link
          href="/help/support"
          className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
            activeSubroute === 'support'
              ? 'font-semibold text-[#087F78] bg-[#DDEDEA]/60'
              : 'text-[#77736C] hover:text-[#111111]'
          }`}
        >
          Contact Support Desk
        </Link>
      </div>

      {/* Main Title Block */}
      <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8 sm:pb-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
            {eyebrow}
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#77736C] leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
