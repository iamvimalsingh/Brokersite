import React from 'react';
import { Container } from '../common/Container';
import { Globe, Sliders, Monitor, BookOpen } from 'lucide-react';

interface TrustItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    title: 'Multi-Market Access',
    subtitle: 'Forex, digital assets, indices, commodities & metals',
    icon: <Globe className="w-4 h-4 text-[#087F78]" />
  },
  {
    title: 'Advanced Trading Tools',
    subtitle: 'Interactive calculators, economic calendars & charts',
    icon: <Sliders className="w-4 h-4 text-[#087F78]" />
  },
  {
    title: 'Flexible Platforms',
    subtitle: 'Modern WebTrader, mobile suite & third-party options',
    icon: <Monitor className="w-4 h-4 text-[#087F78]" />
  },
  {
    title: 'Market Research',
    subtitle: 'Daily technical levels, macro analysis & market structure',
    icon: <BookOpen className="w-4 h-4 text-[#087F78]" />
  }
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E7E4DE] py-6 sm:py-7">
      <Container size="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#E7E4DE]">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 px-0 sm:px-4 lg:px-6 first:pl-0 last:pr-0"
            >
              <div className="w-9 h-9 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-[#111111] leading-tight">
                  {item.title}
                </span>
                <span className="text-[11px] sm:text-xs text-[#77736C] leading-snug mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
