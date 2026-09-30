'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Calendar,
  ArrowUpRight,
  ArrowRight,
  Filter,
  Clock,
  Globe,
  AlertCircle,
  TrendingUp,
  Info
} from 'lucide-react';

interface CalendarEvent {
  id: string;
  time: string;
  currency: string;
  event: string;
  impact: 'High' | 'Medium' | 'Low';
  previous: string;
  forecast: string;
  actual: string;
  period: 'today' | 'tomorrow' | 'week';
  dateLabel: string;
}

const EVENTS: CalendarEvent[] = [
  // Today
  { id: '1', time: '08:30 GMT', currency: 'USD', event: 'Core CPI (MoM)', impact: 'High', previous: '0.3%', forecast: '0.2%', actual: '0.3%', period: 'today', dateLabel: 'Wednesday, Oct 14, 2026' },
  { id: '2', time: '10:00 GMT', currency: 'EUR', event: 'ECB Monetary Policy Meeting', impact: 'High', previous: '3.75%', forecast: '3.50%', actual: '3.50%', period: 'today', dateLabel: 'Wednesday, Oct 14, 2026' },
  { id: '3', time: '14:30 GMT', currency: 'USD', event: 'Crude Oil Inventories', impact: 'Medium', previous: '-2.1M', forecast: '+1.2M', actual: '-0.8M', period: 'today', dateLabel: 'Wednesday, Oct 14, 2026' },
  { id: '4', time: '18:00 GMT', currency: 'USD', event: 'FOMC Meeting Minutes', impact: 'High', previous: '5.25%', forecast: '5.00%', actual: '5.00%', period: 'today', dateLabel: 'Wednesday, Oct 14, 2026' },
  { id: '5', time: '23:50 GMT', currency: 'JPY', event: 'Trade Balance Adjusted', impact: 'Low', previous: '-¥120B', forecast: '-¥95B', actual: '-¥88B', period: 'today', dateLabel: 'Wednesday, Oct 14, 2026' },

  // Tomorrow
  { id: '6', time: '07:00 GMT', currency: 'GBP', event: 'GDP (MoM)', impact: 'High', previous: '0.1%', forecast: '0.2%', actual: 'Pending', period: 'tomorrow', dateLabel: 'Thursday, Oct 15, 2026' },
  { id: '7', time: '08:30 GMT', currency: 'CHF', event: 'SNB Interest Rate Decision', impact: 'High', previous: '1.25%', forecast: '1.00%', actual: 'Pending', period: 'tomorrow', dateLabel: 'Thursday, Oct 15, 2026' },
  { id: '8', time: '12:30 GMT', currency: 'USD', event: 'Initial Jobless Claims', impact: 'Medium', previous: '218K', forecast: '222K', actual: 'Pending', period: 'tomorrow', dateLabel: 'Thursday, Oct 15, 2026' },
  { id: '9', time: '14:00 GMT', currency: 'USD', event: 'Existing Home Sales', impact: 'Low', previous: '3.88M', forecast: '3.90M', actual: 'Pending', period: 'tomorrow', dateLabel: 'Thursday, Oct 15, 2026' },

  // This Week (Remaining)
  { id: '10', time: '06:00 GMT', currency: 'EUR', event: 'German Manufacturing PMI', impact: 'Medium', previous: '42.4', forecast: '43.1', actual: 'Pending', period: 'week', dateLabel: 'Friday, Oct 16, 2026' },
  { id: '11', time: '12:30 GMT', currency: 'USD', event: 'Non-Farm Payrolls (NFP)', impact: 'High', previous: '142K', forecast: '150K', actual: 'Pending', period: 'week', dateLabel: 'Friday, Oct 16, 2026' },
  { id: '12', time: '12:30 GMT', currency: 'USD', event: 'Unemployment Rate', impact: 'High', previous: '4.2%', forecast: '4.2%', actual: 'Pending', period: 'week', dateLabel: 'Friday, Oct 16, 2026' },
  { id: '13', time: '14:00 GMT', currency: 'CAD', event: 'Employment Change', impact: 'High', previous: '22.1K', forecast: '25.0K', actual: 'Pending', period: 'week', dateLabel: 'Friday, Oct 16, 2026' }
];

export const EconomicCalendarView: React.FC = () => {
  const [periodFilter, setPeriodFilter] = useState<'today' | 'tomorrow' | 'week'>('today');
  const [impactFilter, setImpactFilter] = useState<string>('All');

  const filteredEvents = EVENTS.filter(ev => {
    const matchPeriod = periodFilter === 'week' ? true : ev.period === periodFilter;
    const matchImpact = impactFilter === 'All' ? true : ev.impact === impactFilter;
    return matchPeriod && matchImpact;
  });

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'High':
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E5484D]/15 text-[#E5484D]">HIGH</span>;
      case 'Medium':
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#C98A00]/15 text-[#C98A00]">MED</span>;
      case 'Low':
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F3F2EE] text-[#77736C]">LOW</span>;
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/tools" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Tools
          </Link>
          <Link href="/tools/calculators" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Calculators
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Economic Calendar
          </span>
          <Link href="/tools/market-analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/tools/signals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Signals
          </Link>
          <Link href="/tools/quant" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Quantitative Tools
          </Link>
          <Link href="/tools/algo" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              MACROECONOMIC INTELLIGENCE
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Economic Calendar
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Monitor scheduled central bank rate announcements, labor market statistics, and inflation releases that dictate volatility across global markets.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Open an Account
              </Button>

              <Button
                to="/tools/market-analysis"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Read Market Analysis
              </Button>
            </div>
          </div>
        </div>

        {/* Calendar Control Panel (Period & Impact Filters) */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white border border-[#E7E4DE] rounded-xl shadow-xs">
          {/* Period Tabs */}
          <div className="flex items-center gap-1.5">
            {[
              { id: 'today', label: 'Today' },
              { id: 'tomorrow', label: 'Tomorrow' },
              { id: 'week', label: 'This Week' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPeriodFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  periodFilter === tab.id
                    ? 'bg-[#181818] text-white shadow-xs'
                    : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Impact Filter Buttons */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[#77736C] font-mono text-[11px] mr-1">Impact:</span>
            {['All', 'High', 'Medium', 'Low'].map(imp => (
              <button
                key={imp}
                type="button"
                onClick={() => setImpactFilter(imp)}
                className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer font-mono ${
                  impactFilter === imp
                    ? 'bg-[#087F78] text-white font-bold'
                    : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {imp}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Calendar Table (Hidden on Mobile) */}
        <div className="hidden md:block mb-16 bg-white border border-[#E7E4DE] rounded-2xl overflow-hidden shadow-xs">
          <div className="p-4 border-b border-[#E7E4DE] bg-[#FBFBF9] flex items-center justify-between text-xs font-mono text-[#77736C]">
            <span className="font-bold text-[#111111] font-sans">
              Schedule: {periodFilter === 'week' ? 'Weekly Outlook' : periodFilter === 'tomorrow' ? 'Tomorrow Sessions' : 'Today Sessions'}
            </span>
            <span>All times synchronized to GMT</span>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] font-mono text-[10px] uppercase">
                <th className="py-3 px-4 w-[12%]">Time</th>
                <th className="py-3 px-3 w-[10%]">Currency</th>
                <th className="py-3 px-4 w-[38%]">Event</th>
                <th className="py-3 px-3 text-center w-[10%]">Impact</th>
                <th className="py-3 px-3 text-right w-[10%]">Previous</th>
                <th className="py-3 px-3 text-right w-[10%]">Forecast</th>
                <th className="py-3 px-4 text-right w-[10%]">Actual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4DE] font-mono text-[11px]">
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-[#77736C]">
                    No macroeconomic events match the selected filters.
                  </td>
                </tr>
              ) : (
                filteredEvents.map(ev => (
                  <tr key={ev.id} className="hover:bg-[#F3F2EE]/40 transition-colors">
                    <td className="py-3.5 px-4 text-[#77736C]">{ev.time}</td>
                    <td className="py-3.5 px-3">
                      <span className="px-2 py-0.5 rounded bg-[#F3F2EE] font-bold text-[#111111]">
                        {ev.currency}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-sans font-semibold text-[#111111]">
                      {ev.event}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {getImpactBadge(ev.impact)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-[#77736C]">{ev.previous}</td>
                    <td className="py-3.5 px-3 text-right text-[#77736C]">{ev.forecast}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-[#111111]">
                      {ev.actual === 'Pending' ? (
                        <span className="text-[#77736C] italic font-normal text-[10px]">Pending</span>
                      ) : (
                        <span className="text-[#087F78]">{ev.actual}</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Timeline-Style Cards (Under 768px) */}
        <div className="md:hidden space-y-3 mb-16">
          <div className="text-xs font-mono text-[#77736C] pb-1">
            Timeline View ({filteredEvents.length} events)
          </div>

          {filteredEvents.length === 0 ? (
            <div className="p-6 bg-white border border-[#E7E4DE] rounded-xl text-center text-xs text-[#77736C]">
              No events match the selected filters.
            </div>
          ) : (
            filteredEvents.map(ev => (
              <div key={ev.id} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#111111]">{ev.time}</span>
                    <span className="px-2 py-0.5 rounded bg-[#F3F2EE] font-mono text-[10px] font-bold text-[#111111]">
                      {ev.currency}
                    </span>
                  </div>
                  {getImpactBadge(ev.impact)}
                </div>

                <div className="font-semibold text-xs text-[#111111]">{ev.event}</div>

                <div className="grid grid-cols-3 gap-2 p-2 bg-[#FBFBF9] rounded border border-[#E7E4DE] text-[10px] font-mono">
                  <div>
                    <span className="text-[#77736C] block">PREV</span>
                    <span className="font-bold text-[#111111]">{ev.previous}</span>
                  </div>
                  <div>
                    <span className="text-[#77736C] block">EXP</span>
                    <span className="font-bold text-[#111111]">{ev.forecast}</span>
                  </div>
                  <div>
                    <span className="text-[#77736C] block">ACTUAL</span>
                    <span className="font-bold text-[#087F78]">{ev.actual}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom CTA Block with Contextual Cross-Link */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Macro Research
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Read our analyst commentary on upcoming events.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Gain deeper perspective into how interest rate differentials, inflation surprises, and central bank commentary impact active currency crosses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/tools/market-analysis"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Market Analysis
            </Button>

            <Button
              to="/markets"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Markets Directory
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
