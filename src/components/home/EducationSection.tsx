import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticleCard {
  id: string;
  category: 'Trading Basics' | 'Technical Analysis' | 'Risk Management' | 'Forex' | 'Crypto' | 'Market Structure';
  title: string;
  summary: string;
  readTime: string;
  link: string;
}

export const EducationSection: React.FC = () => {
  const articles: ArticleCard[] = [
    {
      id: 'currency-moves',
      category: 'Forex',
      title: 'What Moves Currency Markets?',
      summary: 'Explore how central bank interest rates, inflation differentials, trade balances, and geopolitical events drive exchange rate fluctuations.',
      readTime: '6 min read',
      link: '/resources/academy'
    },
    {
      id: 'volatility',
      category: 'Risk Management',
      title: 'Understanding Volatility',
      summary: 'Learn how to interpret historical and implied volatility, utilize average true range (ATR), and adjust position sizing during high-impact market events.',
      readTime: '8 min read',
      link: '/resources/guides'
    },
    {
      id: 'leverage-risk',
      category: 'Trading Basics',
      title: 'How Leverage Changes Risk',
      summary: 'Understand margin mechanics, how leveraged positions amplify both gains and losses, and why strict stop-loss disciplines are vital for capital preservation.',
      readTime: '5 min read',
      link: '/trading/leverage'
    },
    {
      id: 'price-trends',
      category: 'Technical Analysis',
      title: 'Reading Price Trends',
      summary: 'Study higher highs and lower lows, horizontal support and resistance, moving averages, and structural trend exhaustion patterns across multiple timeframes.',
      readTime: '7 min read',
      link: '/resources/analysis'
    },
    {
      id: 'crypto-fundamentals',
      category: 'Crypto',
      title: 'Crypto Market Fundamentals',
      summary: 'Gain insight into on-chain metrics, halving cycles, liquidity distribution, and derivative market open interest across major digital assets.',
      readTime: '9 min read',
      link: '/resources/academy'
    },
    {
      id: 'trading-routine',
      category: 'Market Structure',
      title: 'Building a Trading Routine',
      summary: 'Develop a disciplined pre-market workflow: reviewing economic calendars, marking key session levels, formulating trade plans, and journaling execution.',
      readTime: '6 min read',
      link: '/resources/guides'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#E7E4DE]" id="education">
      <Container size="default">
        <SectionHeading
          eyebrow="Educational Hub"
          title="Learn before you trade."
          description="Build structured market understanding through foundational guides, technical analyses, and disciplined risk management concepts."
          linkText="Explore Academy"
          linkHref="/resources/academy"
        />

        {/* 6 Article Cards in 3-col Desktop / 2-col Tablet / 1-col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <div
              key={article.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono text-[10px] uppercase font-semibold text-[#087F78] bg-[#DDEDEA] px-2 py-0.5 rounded-xs">
                    {article.category}
                  </span>
                  <span className="text-[#77736C] flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#111111] mb-2.5 group-hover:text-[#087F78] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE]">
                <Link
                  to={article.link}
                  className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read More</span>
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
