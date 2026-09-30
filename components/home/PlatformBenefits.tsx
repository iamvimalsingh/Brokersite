import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Layers, Activity, Smartphone, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const PlatformBenefits: React.FC = () => {
  const benefits = [
    {
      id: 'access',
      title: 'Market Access & Connectivity',
      subtitle: 'Multi-Asset Trading Technology',
      description:
        'Professional trading infrastructure designed for fast access to market information and trading tools across major global instruments.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />,
      stats: 'Global Market Access',
      link: '/trading/conditions'
    },
    {
      id: 'tools',
      title: 'Advanced Trading Analytics',
      subtitle: 'Technical & Calculation Tools',
      description:
        'Access interactive pip calculators, economic event calendars, technical charting indicators, and research tools within a unified experience.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />,
      stats: 'Interactive Tools Suite',
      link: '/tools'
    },
    {
      id: 'platforms',
      title: 'Flexible Trading Environments',
      subtitle: 'Modern Web & Mobile Interfaces',
      description:
        'Execute orders and monitor your portfolio across our browser-based WebTrader and dedicated mobile trading interfaces.',
      icon: <Smartphone className="w-5 h-5 text-[#087F78]" />,
      stats: 'Web & Mobile Supported',
      link: '/platforms'
    },
    {
      id: 'risk',
      title: 'Comprehensive Risk Controls',
      subtitle: 'Account Management Features',
      description:
        'Risk management features can be configured according to applicable account terms, including automated stop alerts and customizable margin limits.',
      icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />,
      stats: 'Configurable Risk Rules',
      link: '/trading/risk-management'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F3F2EE] border-b border-[#E7E4DE]">
      <Container size="default">
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything you need to navigate global markets."
          description="Built for active traders seeking reliable market access, clear pricing structures, and modern execution interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map(benefit => (
            <div
              key={benefit.id}
              className="p-6 sm:p-8 rounded-lg bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-sm bg-[#DDEDEA] text-[#087F78]">
                    {benefit.icon}
                  </div>
                  <span className="text-[11px] font-mono text-[#77736C]">
                    {benefit.stats}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#087F78] font-semibold mb-1">
                  {benefit.subtitle}
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#77736C] leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE]">
                <Link
                  href={benefit.link}
                  className="text-xs font-semibold text-[#111111] hover:text-[#087F78] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
