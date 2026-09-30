'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wrench,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { TROUBLESHOOTING_TOPICS } from '@/lib/help-data';

export const Troubleshooting: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(TROUBLESHOOTING_TOPICS[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="mb-20">
      <div className="mb-8">
        <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
          SELF-SERVICE DIAGNOSTICS
        </span>
        <h2
          className="text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Common Troubleshooting Procedures
        </h2>
        <p className="text-xs sm:text-sm text-[#77736C]">
          Step-by-step diagnostic checklists for quick resolution of common platform, chart, and authentication issues.
        </p>
      </div>

      <div className="space-y-4">
        {TROUBLESHOOTING_TOPICS.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all overflow-hidden bg-white ${
                isOpen
                  ? 'border-[#087F78] shadow-sm'
                  : 'border-[#E7E4DE] hover:border-[#087F78]/40'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F78]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DDEDEA] text-[#087F78] flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </h3>
                    <div className="text-xs text-[#77736C] hidden sm:block mt-0.5">
                      {item.problem}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs font-semibold hidden md:inline">
                    {item.category}
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
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#E7E4DE]/60 space-y-4 text-xs">
                  {/* Problem & Cause row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#E5484D] font-bold block mb-1">
                        Reported Symptom:
                      </span>
                      <p className="text-xs text-[#111111] leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block mb-1">
                        Primary Technical Cause:
                      </span>
                      <p className="text-xs text-[#111111] leading-relaxed">{item.possibleCause}</p>
                    </div>
                  </div>

                  {/* Step-by-step checklist */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block">
                      Recommended Resolution Steps:
                    </span>
                    <div className="space-y-2">
                      {item.suggestedSteps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-[#111111] bg-white p-2.5 rounded-lg border border-[#E7E4DE]">
                          <span className="w-5 h-5 rounded-full bg-[#DDEDEA] text-[#087F78] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#E7E4DE]/60 text-xs">
                    <span className="text-[#77736C] font-mono">Still experiencing issues?</span>
                    <Link
                      href={item.ctaHref}
                      className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
