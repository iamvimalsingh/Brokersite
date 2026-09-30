'use client';

import React from 'react';
import { Mail, Phone, Clock, HelpCircle, TrendingUp, Wrench, Handshake, ArrowRight } from 'lucide-react';
import { SUPPORT_CHANNELS } from '@/lib/help-data';

export const SupportChannels: React.FC = () => {
  const getChannelIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#087F78]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#087F78]" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#087F78]" />;
      case 'HelpCircle':
      default: return <HelpCircle className="w-5 h-5 text-[#087F78]" />;
    }
  };

  return (
    <div className="mb-20">
      <div className="mb-8">
        <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">
          DIRECT DESK ACCESS
        </span>
        <h2
          className="text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Specialized Support Channels
        </h2>
        <p className="text-xs sm:text-sm text-[#77736C]">
          Reach specialized desks equipped to handle market operations, technical connectivity, and onboarding.
        </p>
      </div>

      {/* 4 Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {SUPPORT_CHANNELS.map(ch => (
          <div
            key={ch.id}
            className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center">
                  {getChannelIcon(ch.iconName)}
                </div>
                <span className="text-[10px] font-mono uppercase text-[#087F78] bg-[#DDEDEA] px-2 py-0.5 rounded-xs font-semibold">
                  {ch.department}
                </span>
              </div>

              <h3 className="text-base font-normal text-[#111111] mb-1.5" style={{ fontFamily: 'var(--font-serif)' }}>
                {ch.title}
              </h3>

              <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                {ch.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#E7E4DE] text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#77736C] block">Email Desk:</span>
                <a
                  href={`mailto:${ch.email}`}
                  className="font-mono text-xs font-semibold text-[#087F78] hover:underline block truncate"
                >
                  {ch.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#77736C] block">Direct Phone:</span>
                <a
                  href={`tel:${ch.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-mono text-xs text-[#111111] hover:text-[#087F78] font-semibold"
                >
                  {ch.phone}
                </a>
              </div>

              <div className="pt-2 border-t border-[#E7E4DE]/60 flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                <span>Response Target:</span>
                <span className="text-[#087F78] font-medium">{ch.responseTime.split('(')[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Response Times SLA Policy Banner */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block mb-1">
              SERVICE LEVEL COMMITMENT
            </span>
            <h4 className="text-sm font-semibold text-[#111111]">
              Average Desk Response Targets
            </h4>
            <p className="text-xs text-[#77736C] mt-0.5">
              Support operations run Monday – Friday 09:00–18:00 UTC with automated 24/7 technical monitoring.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono shrink-0">
            <div className="p-2.5 rounded-lg bg-white border border-[#E7E4DE]">
              <div className="text-[9px] text-[#77736C] uppercase">General</div>
              <div className="font-semibold text-[#111111]">&lt; 2 Hours</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-[#E7E4DE]">
              <div className="text-[9px] text-[#77736C] uppercase">Technical</div>
              <div className="font-semibold text-[#087F78]">&lt; 1 Hour</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-[#E7E4DE]">
              <div className="text-[9px] text-[#77736C] uppercase">Institutional</div>
              <div className="font-semibold text-[#111111]">Same Day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
