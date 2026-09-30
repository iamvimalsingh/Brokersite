import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { SlidersHorizontal, Clock, DollarSign, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface ConditionCard {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export const TradingConditions: React.FC = () => {
  const cards: ConditionCard[] = [
    {
      id: 'spreads',
      title: 'Spreads',
      value: 'From 0.0 pips*',
      description: 'Competitive raw spread pricing models accessible on selected liquid currency pairs and digital assets.',
      icon: <DollarSign className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'leverage',
      title: 'Leverage',
      value: 'Up to 1:200*',
      description: 'Configurable margin ratios structured in accordance with product volatility and account eligibility.',
      icon: <SlidersHorizontal className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'order-types',
      title: 'Order Types',
      value: 'Market & Pending*',
      description: 'Full suite of market, limit, stop, and bracket execution orders supported across connected terminals.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'trading-hours',
      title: 'Trading Hours',
      value: '24/5 FX · 24/7 Crypto*',
      description: 'Continuous digital asset tracking alongside standard global foreign exchange trading session schedules.',
      icon: <Clock className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'fees',
      title: 'Fees & Financing',
      value: 'Transparent Schedules*',
      description: 'Clearly published commission schedules, transparent overnight swap benchmarks, and zero hidden account handling fees.',
      icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#E7E4DE]" id="trading-conditions">
      <Container size="default">
        <SectionHeading
          eyebrow="Trading Specifications"
          title="Clear trading conditions."
          description="Straightforward pricing structures, disciplined margin parameters, and reliable order routing options."
          linkText="View Trading Conditions"
          linkHref="/trading/conditions"
        />

        {/* 5 Configurable Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {cards.map(item => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-[11px] font-mono uppercase text-[#77736C] mb-1">
                  {item.title}
                </div>
                <div className="text-xl font-mono font-semibold text-[#111111] mb-2 tabular-nums">
                  {item.value}
                </div>
                <p className="text-xs text-[#77736C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E7E4DE] text-[11px] text-[#77736C]">
                Status: <span className="font-semibold text-[#111111]">Configurable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Sample / Demo Values Disclaimer Note */}
        <div className="p-4 rounded-lg bg-[#F3F2EE] border border-[#E7E4DE] text-xs text-[#77736C] flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <p className="leading-relaxed">
            *Example pricing shown for interface demonstration. Replace with approved commercial terms before production.
          </p>
          <span className="font-mono text-[10px] text-[#77736C] shrink-0">
            Terms Disclosure
          </span>
        </div>

        {/* Section Action CTA Button */}
        <div className="flex justify-center">
          <Button
            href="/trading/conditions"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            View Trading Conditions
          </Button>
        </div>
      </Container>
    </section>
  );
};
