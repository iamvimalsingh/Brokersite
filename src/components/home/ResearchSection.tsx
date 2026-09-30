import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Calendar, Calculator, TrendingUp, Radio, Newspaper, ArrowRight } from 'lucide-react';

interface ToolItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
  link: string;
  visual: React.ReactNode;
}

export const ResearchSection: React.FC = () => {
  const tools: ToolItem[] = [
    {
      id: 'economic-calendar',
      title: 'Economic Calendar',
      category: 'Macro Schedule',
      description: 'Track key macroeconomic releases, central bank rate decisions, and market consensus expectations in real time.',
      icon: <Calendar className="w-5 h-5 text-[#087F78]" />,
      actionText: 'View Calendar',
      link: '/tools/economic-calendar',
      visual: (
        <div className="p-2.5 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between text-[#77736C]">
            <span>13:30 GMT · USD</span>
            <span className="text-[#C98A00] font-semibold">High Impact</span>
          </div>
          <div className="flex justify-between text-[#111111] font-semibold">
            <span>Core Inflation Rate</span>
            <span>Est: 3.2%</span>
          </div>
        </div>
      )
    },
    {
      id: 'calculators',
      title: 'Trading Calculators',
      category: 'Position Sizing',
      description: 'Estimate pip values, margin requirements, overnight swap rates, and position sizing across supported instruments.',
      icon: <Calculator className="w-5 h-5 text-[#087F78]" />,
      actionText: 'Launch Calculators',
      link: '/tools/calculators',
      visual: (
        <div className="p-2.5 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between text-[#77736C]">
            <span>EUR/USD · 1.00 Lot</span>
            <span>Leverage: 1:100</span>
          </div>
          <div className="flex justify-between text-[#111111] font-semibold">
            <span>Pip Value: $10.00</span>
            <span className="text-[#087F78]">Margin: $1,087.40</span>
          </div>
        </div>
      )
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      category: 'Technical Structure',
      description: 'Technical level reviews, daily trend commentary, and key price structure observations across active markets.',
      icon: <TrendingUp className="w-5 h-5 text-[#087F78]" />,
      actionText: 'Read Analysis',
      link: '/tools/market-analysis',
      visual: (
        <div className="p-2.5 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between text-[#77736C]">
            <span>XAU/USD · Technical</span>
            <span className="text-[#0A9F6E]">Bullish Bias</span>
          </div>
          <div className="flex justify-between text-[#111111] font-semibold">
            <span>Key Resistance</span>
            <span>$2,670.00</span>
          </div>
        </div>
      )
    },
    {
      id: 'signals',
      title: 'Trading Signals',
      category: 'Pattern Alerts',
      description: 'Algorithmic pattern alerts flagging technical channel breaks, momentum reversals, and price threshold crosses.',
      icon: <Radio className="w-5 h-5 text-[#087F78]" />,
      actionText: 'Browse Signals',
      link: '/tools/signals',
      visual: (
        <div className="p-2.5 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between text-[#77736C]">
            <span>BTC/USD · 4H RSI</span>
            <span className="text-[#087F78]">Oversold</span>
          </div>
          <div className="flex justify-between text-[#111111] font-semibold">
            <span>Signal: Support Bounce</span>
            <span>Conf: 78%</span>
          </div>
        </div>
      )
    },
    {
      id: 'news',
      title: 'Market News',
      category: 'Financial Dispatches',
      description: 'Curated financial dispatches summarizing global macroeconomic developments and currency dynamics.',
      icon: <Newspaper className="w-5 h-5 text-[#087F78]" />,
      actionText: 'Read Dispatches',
      link: '/resources/news',
      visual: (
        <div className="p-2.5 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between text-[#77736C]">
            <span>Global Macro</span>
            <span>12m ago</span>
          </div>
          <div className="truncate text-[#111111] font-semibold">
            Central Banks Weigh Neutral Rate Projections
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#E7E4DE]" id="tools-research">
      <Container size="default">
        <SectionHeading
          eyebrow="Market Intelligence"
          title="Tools & Research"
          description="Access market analytics, economic calendars, and interactive calculation tools designed to assist in your market study."
          linkText="Explore All Tools"
          linkHref="/tools"
        />

        {/* 5 Editorial Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center text-[#087F78]">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  {tool.title}
                </h3>
                <p className="text-xs text-[#77736C] leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Small Data Visualization */}
                <div className="mb-4">
                  {tool.visual}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE]">
                <Link
                  to={tool.link}
                  className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{tool.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
