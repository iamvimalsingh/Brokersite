import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { BROKER_CONFIG } from '../lib/config';
import { BookOpen, Newspaper, LineChart, FileText, Video, Library, Search } from 'lucide-react';
import { Button } from '../components/common/Button';

interface ResourcesPageProps {
  forcedResource?: 'academy' | 'news' | 'analysis' | 'guides' | 'webinars' | 'glossary';
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ forcedResource }) => {
  const params = useParams<{ resourceId?: string }>();
  const activeTab = forcedResource || params.resourceId || 'overview';

  const [glossaryQuery, setGlossaryQuery] = useState('');

  const glossaryTerms = [
    { term: 'Ask Price', desc: 'The lowest price a seller is willing to accept for a currency pair or financial asset.' },
    { term: 'Bid Price', desc: 'The highest price a buyer is willing to pay for a financial asset in the order book.' },
    { term: 'CFD (Contract for Difference)', desc: 'A financial derivative allowing traders to speculate on price movements without owning the physical underlying asset.' },
    { term: 'Depth of Market (DOM)', desc: 'A measure of the quantity of open buy and sell orders for a financial instrument at various price levels (Level 2).' },
    { term: 'ECN (Electronic Communication Network)', desc: 'A technology connecting market participants directly to eliminate dealing desk intermediaries and quote raw spreads.' },
    { term: 'FIX Protocol', desc: 'Financial Information eXchange messaging protocol used globally for real-time electronic trade routing and liquidity integration.' },
    { term: 'Margin Call', desc: 'An automated threshold notification triggered when account equity drops near or below the required maintenance margin.' },
    { term: 'Negative Balance Protection', desc: 'A regulatory safeguard guaranteeing a trader will never lose more money than their total deposited account equity.' },
    { term: 'Pip (Percentage in Point)', desc: 'The smallest standard standardized price move that a given exchange rate makes (usually 0.0001 in major FX pairs).' },
    { term: 'Slippage', desc: 'The difference between the expected execution price of an order and the actual price at which the trade is executed in the market.' },
    { term: 'Swap Rate / Rollover', desc: 'The overnight interest fee credited or debited when holding a leveraged currency position past daily rollover time (22:00 GMT).' }
  ];

  const filteredGlossary = glossaryTerms.filter(
    t =>
      t.term.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(glossaryQuery.toLowerCase())
  );

  const tabs = [
    { id: 'overview', label: 'All Resources', path: '/resources' },
    { id: 'academy', label: 'Trading Academy', path: '/resources/academy' },
    { id: 'news', label: 'Market News', path: '/resources/news' },
    { id: 'analysis', label: 'Market Analysis', path: '/resources/analysis' },
    { id: 'guides', label: 'Trading Guides', path: '/resources/guides' },
    { id: 'webinars', label: 'Webinars', path: '/resources/webinars' },
    { id: 'glossary', label: 'Financial Glossary', path: '/resources/glossary' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            Knowledge Ecosystem
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Education &amp; Research Hub
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed">
            Curated coursework, daily technical commentary, macroeconomic intelligence, and institutional trading guides.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-10 border-b border-[#E7E4DE]">
          {tabs.map(tab => {
            const isActive =
              activeTab === tab.id ||
              (!forcedResource && !params.resourceId && tab.id === 'overview');
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#087F78] text-[#087F78] font-semibold'
                    : 'border-transparent text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* VIEW: ACADEMY */}
        {(activeTab === 'academy' || activeTab === 'overview') && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Trading Academy Curriculum
                </h3>
                <p className="text-xs text-[#77736C]">Structured educational modules from beginner to institutional level.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { level: 'Foundational', title: 'Market Mechanics & Order Types', modules: '6 Lessons · 45 mins', desc: 'Understand bid-ask spread mechanics, pip valuation, leverage ratios, and how global currency flows function.' },
                { level: 'Intermediate', title: 'Technical Analysis & Market Structure', modules: '8 Lessons · 60 mins', desc: 'Identify support and resistance inflection points, volume profile nodes, candlestick formations, and trend continuation.' },
                { level: 'Advanced', title: 'Institutional Risk & Sizing Models', modules: '5 Lessons · 50 mins', desc: 'Deploy Value at Risk (VaR), portfolio beta hedging, maximum drawdown caps, and algorithmic execution discipline.' }
              ].map((course, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold">
                      {course.level}
                    </span>
                    <h4 className="text-base font-semibold text-[#111111] mt-3 mb-2">{course.title}</h4>
                    <p className="text-xs text-[#77736C] leading-relaxed mb-4">{course.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                    <span className="text-[#77736C] font-mono text-[11px]">{course.modules}</span>
                    <Button to="/trading/accounts" variant="outline" size="sm">
                      Start Course
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: GLOSSARY */}
        {(activeTab === 'glossary' || activeTab === 'overview') && (
          <div className="mb-14">
            <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#E7E4DE]">
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Financial Markets Glossary
                  </h3>
                  <p className="text-xs text-[#77736C] mt-1">A-Z authoritative institutional trading and derivatives terminology.</p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-[#77736C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={glossaryQuery}
                    onChange={e => setGlossaryQuery(e.target.value)}
                    placeholder="Search terminology..."
                    className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md pl-9 pr-3 py-1.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="font-semibold text-xs text-[#111111] font-mono mb-1">{item.term}</div>
                    <div className="text-xs text-[#77736C] leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
