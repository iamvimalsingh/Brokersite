'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { SERVICE_STATUS_ITEMS } from '@/lib/help-data';

export const SupportStatus: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E7E4DE]">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block">
            LIVE TELEMETRY &amp; UPTIME
          </span>
          <h3 className="text-lg font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
            Brokerage Systems Status
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#0A9F6E] bg-[#DDEDEA] px-3 py-1.5 rounded-md font-bold self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#0A9F6E] animate-pulse" />
          <span>ALL PLATFORM SERVICES OPERATIONAL</span>
        </div>
      </div>

      <div className="divide-y divide-[#E7E4DE]">
        {SERVICE_STATUS_ITEMS.map((srv, idx) => (
          <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0A9F6E]" />
              <span className="font-semibold text-[#111111]">{srv.name}</span>
            </div>

            <div className="flex items-center gap-4 text-[#77736C] font-mono text-[11px]">
              <span className="hidden md:inline text-[#77736C]">{srv.description}</span>
              <span className="px-2 py-0.5 rounded bg-[#F3F2EE] text-[#111111] font-semibold">
                Uptime: {srv.uptime}
              </span>
              <span className="text-[#0A9F6E] font-bold uppercase">{srv.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
