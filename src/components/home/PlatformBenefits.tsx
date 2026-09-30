import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Layers, Activity, Smartphone, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlatformBenefits: React.FC = () => {
  const benefits = [
    {
      id: 'access',
      title: 'Institutional Market Access',
      subtitle: 'Multi-Venue Liquidity Aggregation',
      description:
        'Access aggregated Tier-1 bank and non-bank institutional liquidity streams routed with deterministic low latency and minimal market impact.',
      icon: <Layers className="w-5 h-5 text-[#087F78]" />,
      stats: 'Equinix LD4 / NY4 Cross-Connect',
      link: '/trading/conditions'
    },
    {
      id: 'tools',
      title: 'Advanced Trading Analytics',
      subtitle: 'Precision Execution Tools',
      description:
        'Deploy integrated risk calculators, depth-of-market visualization, volumetric indicators, and macroeconomic calendars within a unified workflow.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />,
      stats: 'Real-time Level 2 DOM',
      link: '/tools'
    },
    {
      id: 'platforms',
      title: 'Flexible Trading Environments',
      subtitle: 'Cross-Device Multi-Platform',
      description:
        'Execute seamlessly across our zero-install WebTrader, native mobile apps, MetaTrader 5, and direct TradingView broker API integration.',
      icon: <Smartphone className="w-5 h-5 text-[#087F78]" />,
      stats: 'Web · Mobile · Desktop · API',
      link: '/platforms'
    },
    {
      id: 'risk',
      title: 'Comprehensive Risk Controls',
      subtitle: 'Capital Protection Architecture',
      description:
        'Manage exposures proactively with automated stop-out protocols, real-time margin alerts, and strict negative balance protection policies.',
      icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />,
      stats: 'Negative Balance Protected',
      link: '/trading/risk-management'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F3F2EE] border-b border-[#E7E4DE]">
      <Container size="default">
        <SectionHeading
          eyebrow="Platform Architecture"
          title="Everything you need to navigate global markets."
          description="Built from the ground up for discretionary traders, quantitative developers, and institutional desks requiring stability and speed."
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
                  to={benefit.link}
                  className="text-xs font-semibold text-[#111111] hover:text-[#087F78] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read specifications</span>
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
