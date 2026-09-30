'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, HelpCircle, BookOpen, Laptop, Globe, ShieldCheck, Wrench } from 'lucide-react';
import { FAQ_ITEMS, TROUBLESHOOTING_TOPICS, HELP_CATEGORIES } from '@/lib/help-data';
import { SearchResultItem } from '@/types/help';

export const HelpSearch: React.FC<{ onSelectFaq?: (faqId: string) => void }> = ({ onSelectFaq }) => {
  const [query, setQuery] = useState('');

  // Compile full search corpus across all help resources
  const allSearchableItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // Add all FAQs
    FAQ_ITEMS.forEach(faq => {
      items.push({
        id: `faq-${faq.id}`,
        title: faq.question,
        category: faq.category,
        snippet: faq.answer,
        type: 'FAQ',
        href: `/help/faq?category=${encodeURIComponent(faq.category)}#${faq.id}`
      });
    });

    // Add Troubleshooting
    TROUBLESHOOTING_TOPICS.forEach(tr => {
      items.push({
        id: `trouble-${tr.id}`,
        title: tr.title,
        category: tr.category,
        snippet: `${tr.problem} — ${tr.suggestedSteps[0]}`,
        type: 'Support',
        href: '/help/support'
      });
    });

    // Add Platform Guides
    items.push(
      {
        id: 'guide-webtrader',
        title: 'How to use WebTrader in browser',
        category: 'Platforms',
        snippet: 'Zero-install browser trading guide with order tickets, indicators, and charts.',
        type: 'Platform',
        href: '/platforms/webtrader'
      },
      {
        id: 'guide-leverage',
        title: 'Understanding Margin & Leverage calculations',
        category: 'Trading',
        snippet: 'Calculate required margin, free margin, and leverage tiers across asset classes.',
        type: 'Guide',
        href: '/trading/leverage'
      },
      {
        id: 'guide-spreads',
        title: 'Comparing Standard vs. Raw Spreads',
        category: 'Fees',
        snippet: 'Raw 0.0-pip pricing schedules and commission calculations per lot.',
        type: 'Market',
        href: '/trading/spreads'
      },
      {
        id: 'guide-2fa',
        title: 'Two-Factor Authentication Setup & Security',
        category: 'Security',
        snippet: 'Configure TOTP authenticator apps and protect account withdrawals.',
        type: 'Guide',
        href: '/company/security'
      }
    );

    return items;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allSearchableItems.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allSearchableItems]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Platform': return <Laptop className="w-4 h-4 text-[#087F78]" />;
      case 'Market': return <Globe className="w-4 h-4 text-[#087F78]" />;
      case 'Guide': return <BookOpen className="w-4 h-4 text-[#087F78]" />;
      case 'Support': return <Wrench className="w-4 h-4 text-[#087F78]" />;
      case 'FAQ':
      default: return <HelpCircle className="w-4 h-4 text-[#087F78]" />;
    }
  };

  return (
    <div className="w-full mb-12">
      {/* Search Input Box */}
      <div className="relative max-w-3xl">
        <Search className="w-5 h-5 text-[#77736C] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="What can we help you with? (e.g. leverage, spreads, WebTrader, 2FA)"
          className="w-full bg-white border-2 border-[#E7E4DE] focus:border-[#087F78] rounded-2xl pl-12 pr-12 py-3.5 sm:py-4 text-sm sm:text-base text-[#111111] placeholder:text-[#77736C] shadow-sm focus:outline-none transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77736C] hover:text-[#111111] p-1 rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Real-time Search Results Area */}
      {query.trim() && (
        <div className="mt-4 max-w-3xl bg-white border border-[#E7E4DE] rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E7E4DE] text-xs font-mono text-[#77736C]">
            <span>
              Found <strong className="text-[#087F78] font-bold">{results.length}</strong> {results.length === 1 ? 'result' : 'results'} for &quot;{query}&quot;
            </span>
            <button
              onClick={() => setQuery('')}
              className="text-[#087F78] hover:underline cursor-pointer"
            >
              Clear Search
            </button>
          </div>

          {results.length > 0 ? (
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {results.map(item => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FBFBF9] hover:bg-[#DDEDEA]/40 border border-[#E7E4DE] hover:border-[#087F78]/50 transition-all block group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-white border border-[#E7E4DE] flex items-center justify-center shrink-0">
                        {getTypeIcon(item.type)}
                      </span>
                      <span className="font-semibold text-xs text-[#111111] group-hover:text-[#087F78] transition-colors line-clamp-1">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold">
                        {item.type}
                      </span>
                      <span className="text-[10px] font-mono text-[#77736C] hidden sm:inline">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#77736C] line-clamp-2 leading-relaxed pl-8">
                    {item.snippet}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F3F2EE] flex items-center justify-center mx-auto text-[#77736C]">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-[#111111]">No matching help articles found.</h4>
              <p className="text-xs text-[#77736C] max-w-sm mx-auto">
                Try searching with broader terms such as &quot;orders&quot;, &quot;margin&quot;, &quot;deposit&quot;, or reach out directly to our support desk.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setQuery('')}
                  className="px-4 py-2 rounded-lg bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
