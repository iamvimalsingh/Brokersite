import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Coins, LineChart, Gauge, Flame, Sparkles, ArrowRight } from 'lucide-react';

interface AssetClassItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export const AssetClasses: React.FC = () => {
  const assetClasses: AssetClassItem[] = [
    {
      id: 'forex',
      title: 'Forex',
      category: 'Currency Markets',
      description: 'Explore major, minor and selected currency pairs with market information and trading tools designed for active participants.',
      icon: <LineChart className="w-5 h-5 text-[#087F78]" />,
      href: '/markets/forex'
    },
    {
      id: 'crypto',
      title: 'Crypto',
      category: 'Digital Assets',
      description: 'Track digital assets across a broad range of established and emerging markets.',
      icon: <Coins className="w-5 h-5 text-[#087F78]" />,
      href: '/markets/crypto'
    },
    {
      id: 'indices',
      title: 'Indices',
      category: 'Equity Benchmarks',
      description: 'Follow major global equity indices and monitor market-wide movements.',
      icon: <Gauge className="w-5 h-5 text-[#087F78]" />,
      href: '/markets/indices'
    },
    {
      id: 'commodities',
      title: 'Commodities',
      category: 'Energy & Agricultural',
      description: 'Access market information across key energy and agricultural commodities.',
      icon: <Flame className="w-5 h-5 text-[#087F78]" />,
      href: '/markets/commodities'
    },
    {
      id: 'metals',
      title: 'Metals',
      category: 'Precious Metals',
      description: 'Monitor gold, silver and other major precious-metal markets.',
      icon: <Sparkles className="w-5 h-5 text-[#087F78]" />,
      href: '/markets/metals'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#E7E4DE]" id="asset-classes">
      <Container size="default">
        <SectionHeading
          eyebrow="Market Diversity"
          title="Access markets built around opportunity."
          description="Explore a range of global instruments from a single brokerage experience."
          linkText="View All Markets"
          linkHref="/markets"
        />

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {assetClasses.map(item => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center mb-4 group-hover:bg-[#DDEDEA] transition-colors">
                  {item.icon}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#77736C] mb-1">
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE]">
                <Link
                  to={item.href}
                  className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore {item.title}</span>
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
