'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { POPULAR_QUESTIONS } from '@/lib/help-data';

export const PopularQuestions: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(POPULAR_QUESTIONS[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="mb-20">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
            FREQUENT INQUIRIES
          </span>
          <h2
            className="text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Popular Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#77736C]">
            Quick answers to the most common questions asked by new and active traders.
          </p>
        </div>

        <Link
          href="/help/faq"
          className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 shrink-0"
        >
          <span>View All 50+ FAQs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-3">
        {POPULAR_QUESTIONS.map((faq, idx) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden bg-white ${
                isOpen
                  ? 'border-[#087F78] shadow-sm'
                  : 'border-[#E7E4DE] hover:border-[#087F78]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F78]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#F3F2EE] text-[#087F78] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {faq.question}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold hidden sm:inline">
                    {faq.category}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? 'rotate-180 bg-[#DDEDEA] text-[#087F78]' : 'bg-[#F3F2EE] text-[#77736C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#77736C] leading-relaxed border-t border-[#E7E4DE]/60 space-y-3">
                  <p>{faq.answer}</p>

                  {faq.details && (
                    <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2 mt-3 font-normal">
                      {faq.details.definition && (
                        <div className="text-xs text-[#111111]">
                          <strong className="text-[#087F78] font-mono uppercase text-[10px] block mb-0.5">
                            Definition:
                          </strong>
                          {faq.details.definition}
                        </div>
                      )}
                      {faq.details.example && (
                        <div className="text-xs text-[#111111]">
                          <strong className="text-[#087F78] font-mono uppercase text-[10px] block mb-0.5">
                            Practical Example:
                          </strong>
                          {faq.details.example}
                        </div>
                      )}
                      {faq.details.note && (
                        <div className="text-[11px] text-[#77736C] italic pt-1 border-t border-[#E7E4DE]">
                          Note: {faq.details.note}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#77736C]">
                    <span className="text-[10px] uppercase">Category: {faq.category}</span>
                    <Link
                      href={`/help/faq?category=${encodeURIComponent(faq.category)}`}
                      className="text-[#087F78] hover:underline font-semibold"
                    >
                      More in {faq.category} &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
