'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  RESOURCE_CATEGORIES,
  FEATURED_INSIGHTS
} from '@/lib/resource-data';
import { GlobalResourceSearch } from './GlobalResourceSearch';
import {
  BookOpen,
  Newspaper,
  TrendingUp,
  FileText,
  Video,
  HelpCircle,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Clock,
  User,
  ShieldCheck,
  Globe
} from 'lucide-react';

export const ResourcesOverviewView: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'academy': return <BookOpen className="w-6 h-6 text-[#087F78]" />;
      case 'news': return <Newspaper className="w-6 h-6 text-[#087F78]" />;
      case 'analysis': return <TrendingUp className="w-6 h-6 text-[#087F78]" />;
      case 'guides': return <FileText className="w-6 h-6 text-[#087F78]" />;
      case 'webinars': return <Video className="w-6 h-6 text-[#087F78]" />;
      case 'glossary':
      default: return <HelpCircle className="w-6 h-6 text-[#087F78]" />;
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            All Resources
          </span>
          <Link href="/resources/academy" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Academy
          </Link>
          <Link href="/resources/news" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market News
          </Link>
          <Link href="/resources/analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/resources/guides" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Guides
          </Link>
          <Link href="/resources/webinars" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Webinars
          </Link>
          <Link href="/resources/glossary" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Glossary
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              RESOURCES &amp; RESEARCH
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Research, education and insight for every stage of your trading journey.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Explore market commentary, educational guides, trading concepts and practical resources designed to help you understand global markets.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                to="/resources/academy"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Explore Trading Academy
              </Button>

              <Button
                to="/resources/analysis"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Market Analysis
              </Button>
            </div>

            {/* Global Search Bar */}
            <div className="max-w-xl pt-2">
              <GlobalResourceSearch />
            </div>
          </div>
        </div>

        {/* 6 Resource Category Cards Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Knowledge Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Explore Resource Categories
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Select a specialized portal to access structured courses, real-time commentary, guides, and masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2.5 py-0.5 rounded-xs font-semibold">
                      {cat.badge}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center">
                      {getCategoryIcon(cat.id)}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#111111] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#77736C]">{cat.itemCount}</span>
                  <Link
                    href={cat.href}
                    className="text-xs font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Research / Editorial Section (3 Large Cards) */}
        <div className="mb-20">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Flagship Commentary</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Featured Insight
              </h2>
              <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                Deep analytical perspectives across major macro themes and cross-asset correlations.
              </p>
            </div>
            <Link
              href="/resources/analysis"
              className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-1 shrink-0"
            >
              <span>View All Market Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FEATURED_INSIGHTS.map((item, i) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Abstract Financial Graphic Header */}
                  <div className="h-32 mb-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] p-4 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
                    <div className="flex items-center justify-between text-[10px] text-[#77736C] z-10">
                      <span className="font-bold text-[#087F78] uppercase">{item.category} DESK</span>
                      <span>RESEARCH ARTICLE #{i + 1}</span>
                    </div>

                    {/* Geometric Abstract Grid Shapes */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                      <div className="w-24 h-24 rounded-full border border-[#087F78]" />
                      <div className="w-40 h-40 rounded-full border border-[#087F78]/40 absolute" />
                    </div>

                    <div className="flex items-end justify-between z-10 text-[10px] text-[#77736C] pt-2 border-t border-[#E7E4DE]/60">
                      <span>Macro Analysis</span>
                      <span>Institutional Series</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#77736C]">
                    <span className="px-2 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                      {item.category}
                    </span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#111111] mb-3 leading-snug group-hover:text-[#087F78] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-mono text-[#77736C]">
                  <span>By {item.author}</span>
                  <Link
                    href={item.href}
                    className="font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Continuous Learning
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Explore more market insight.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Enhance your market knowledge, evaluate trading specifications, and start trading with transparent institutional conditions on {BRAND_NAME}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/markets"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Markets
            </Button>

            <Button
              to="/resources/academy"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Trading Academy
            </Button>

            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto min-h-[44px]"
            >
              Open an Account
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
