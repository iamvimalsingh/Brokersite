'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  TrendingUp,
  Globe,
  Laptop,
  UserCheck,
  ShieldCheck,
  BarChart2,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { HELP_CATEGORIES } from '@/lib/help-data';

export const HelpCategoryGrid: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#087F78]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#087F78]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#087F78]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#087F78]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#087F78]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#087F78]" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-[#087F78]" />;
      case 'Wrench':
      default: return <Wrench className="w-5 h-5 text-[#087F78]" />;
    }
  };

  return (
    <div className="mb-20">
      <div className="mb-8">
        <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
          TOPIC HUBS
        </span>
        <h2
          className="text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Browse by Help Category
        </h2>
        <p className="text-xs sm:text-sm text-[#77736C]">
          Explore organized guides, FAQs, and step-by-step documentation across all brokerage departments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HELP_CATEGORIES.map(cat => (
          <Link
            key={cat.id}
            href={cat.href}
            className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[10px] font-mono text-[#77736C] bg-[#F3F2EE] px-2 py-0.5 rounded-xs font-semibold">
                  {cat.articleCount} Articles
                </span>
              </div>

              <h3
                className="text-lg font-normal text-[#111111] mb-2 leading-snug group-hover:text-[#087F78] transition-colors"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {cat.title}
              </h3>

              <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                {cat.shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-semibold text-[#087F78]">
              <span>View Articles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
