'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, TrendingUp, HelpCircle, ShieldCheck } from 'lucide-react';

interface RelatedItem {
  title: string;
  category: string;
  type: string;
  href: string;
  desc?: string;
}

interface RelatedResourcesProps {
  currentCategory?: string;
  customLinks?: { title: string; href: string }[];
}

export const RelatedResources: React.FC<RelatedResourcesProps> = ({
  currentCategory = 'Forex',
  customLinks
}) => {
  const defaultRelated: Record<string, RelatedItem[]> = {
    Forex: [
      { title: 'Understanding Currency Pairs & Quotes', category: 'Academy', type: 'Course', href: '/resources/academy', desc: 'Master base/quote mechanics and bid-ask spread spreads.' },
      { title: 'How to Read a Forex Quote', category: 'Guides', type: 'Guide', href: '/resources/guides/how-to-read-a-forex-quote', desc: 'Practical breakdown of currency pair pricing.' },
      { title: 'EUR/USD Live Market Specifications', category: 'Markets', type: 'Trading', href: '/markets/forex', desc: 'View live variable spreads and margin parameters.' }
    ],
    Metals: [
      { title: 'Understanding Gold During Periods of Uncertainty', category: 'Analysis', type: 'Research', href: '/resources/analysis/gold-market-uncertainty', desc: 'Macro framework on real yields and bullion flows.' },
      { title: 'Spot Gold (XAU/USD) Trading Conditions', category: 'Markets', type: 'Trading', href: '/markets/metals', desc: 'Spread schedules and execution terms for metals.' },
      { title: 'Risk Management Architecture', category: 'Risk', type: 'Education', href: '/trading/risk-management', desc: 'Stop-out levels and position sizing models.' }
    ],
    Crypto: [
      { title: 'How Volatility Changes in Digital Assets', category: 'Analysis', type: 'Research', href: '/resources/analysis/volatility-digital-assets', desc: 'Derivatives open interest and liquidity cycles.' },
      { title: 'Crypto Derivatives Market Overview', category: 'Markets', type: 'Trading', href: '/markets/crypto', desc: '24/7 continuous digital asset contract terms.' },
      { title: 'Position Sizing Calculator', category: 'Tools', type: 'Calculator', href: '/tools/calculators', desc: 'Calculate exact risk ceilings for volatile assets.' }
    ],
    Default: [
      { title: 'Trading Academy Foundation Track', category: 'Academy', type: 'Course', href: '/resources/academy', desc: 'Structured lessons covering market fundamentals.' },
      { title: 'Live Economic Calendar', category: 'Tools', type: 'Macro Feed', href: '/tools/economic-calendar', desc: 'Track high-impact central bank announcements.' },
      { title: 'Complete Financial Trading Glossary', category: 'Glossary', type: 'Encyclopedia', href: '/resources/glossary', desc: 'Quick definitions for 60+ market terms.' }
    ]
  };

  const items = defaultRelated[currentCategory] || defaultRelated['Default'];

  return (
    <div className="mt-12 pt-8 border-t border-[#E7E4DE]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#087F78] font-semibold">Connected Knowledge</span>
          <h3 className="text-xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
            Related Resources &amp; Specifications
          </h3>
        </div>
        <Link
          href="/resources"
          className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] hidden sm:inline-flex items-center gap-1"
        >
          <span>All Resources</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs font-semibold">
                  {item.type}
                </span>
                <span className="text-[10px] font-mono text-[#087F78]">{item.category}</span>
              </div>
              <h4 className="text-xs font-bold text-[#111111] group-hover:text-[#087F78] transition-colors mb-1.5">
                {item.title}
              </h4>
              {item.desc && (
                <p className="text-[11px] text-[#77736C] leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>

            <div className="pt-3 mt-3 border-t border-[#E7E4DE]/60 flex items-center justify-between text-[11px] font-semibold text-[#087F78]">
              <span>Explore Resource</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
