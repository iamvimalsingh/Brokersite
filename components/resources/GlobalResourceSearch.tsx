'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, Newspaper, TrendingUp, HelpCircle, Video, FileText, ArrowRight } from 'lucide-react';
import {
  NEWS_ARTICLES,
  ANALYSIS_ARTICLES,
  TRADING_GUIDES,
  ACADEMY_COURSES,
  GLOSSARY_TERMS,
  WEBINAR_SESSIONS
} from '@/lib/resource-data';

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  type: 'News' | 'Analysis' | 'Guide' | 'Academy' | 'Glossary' | 'Webinar';
  snippet: string;
  href: string;
  dateOrMeta?: string;
}

export const GlobalResourceSearch: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Compile all search items
  const allItems: SearchResultItem[] = [
    // News
    ...NEWS_ARTICLES.map(n => ({
      id: `news-${n.id}`,
      title: n.title,
      category: n.category,
      type: 'News' as const,
      snippet: n.summary,
      href: `/resources/news/${n.slug}`,
      dateOrMeta: n.publishedDate
    })),
    // Analysis
    ...ANALYSIS_ARTICLES.map(a => ({
      id: `analysis-${a.id}`,
      title: a.title,
      category: a.category,
      type: 'Analysis' as const,
      snippet: a.summary,
      href: `/resources/analysis/${a.slug}`,
      dateOrMeta: a.timeframe
    })),
    // Guides
    ...TRADING_GUIDES.map(g => ({
      id: `guide-${g.id}`,
      title: g.title,
      category: g.category,
      type: 'Guide' as const,
      snippet: g.summary,
      href: `/resources/guides/${g.slug}`,
      dateOrMeta: g.difficulty
    })),
    // Academy
    ...ACADEMY_COURSES.map(c => ({
      id: `academy-${c.id}`,
      title: c.title,
      category: c.level,
      type: 'Academy' as const,
      snippet: c.description,
      href: `/resources/academy`,
      dateOrMeta: `${c.lessonCount} Lessons`
    })),
    // Glossary
    ...GLOSSARY_TERMS.map(t => ({
      id: `glossary-${t.id}`,
      title: t.term,
      category: t.category,
      type: 'Glossary' as const,
      snippet: t.definition,
      href: `/resources/glossary`,
      dateOrMeta: `Letter ${t.letter}`
    })),
    // Webinars
    ...WEBINAR_SESSIONS.map(w => ({
      id: `webinar-${w.id}`,
      title: w.title,
      category: w.category,
      type: 'Webinar' as const,
      snippet: w.speaker.name + ' - ' + w.duration,
      href: `/resources/webinars/${w.slug}`,
      dateOrMeta: w.date
    }))
  ];

  const results = query.trim() === ''
    ? []
    : allItems.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.snippet.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'News': return <Newspaper className="w-3.5 h-3.5 text-[#087F78]" />;
      case 'Analysis': return <TrendingUp className="w-3.5 h-3.5 text-[#087F78]" />;
      case 'Guide': return <FileText className="w-3.5 h-3.5 text-[#087F78]" />;
      case 'Academy': return <BookOpen className="w-3.5 h-3.5 text-[#087F78]" />;
      case 'Webinar': return <Video className="w-3.5 h-3.5 text-[#087F78]" />;
      case 'Glossary':
      default: return <HelpCircle className="w-3.5 h-3.5 text-[#087F78]" />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-[#77736C]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search research, academy courses, guides, glossary terms..."
          className="w-full pl-10 pr-10 py-3 bg-white border border-[#E7E4DE] rounded-xl text-xs font-sans text-[#111111] placeholder:text-[#77736C] focus:outline-none focus:border-[#087F78] focus:ring-1 focus:ring-[#087F78] shadow-xs transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#77736C] hover:text-[#111111]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown Overlay */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-[#E7E4DE] rounded-xl shadow-xl overflow-hidden max-h-96 overflow-y-auto">
          <div className="p-3 bg-[#FBFBF9] border-b border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
            <span>Search Results for &ldquo;{query}&rdquo;</span>
            <span>{results.length} items found</span>
          </div>

          {results.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#77736C] space-y-2">
              <p className="font-semibold text-[#111111]">No resources found matching &ldquo;{query}&rdquo;.</p>
              <p className="text-[11px]">Try searching for keywords like &ldquo;Forex&rdquo;, &ldquo;Leverage&rdquo;, &ldquo;Pip&rdquo;, &ldquo;Gold&rdquo;, or &ldquo;ATR&rdquo;.</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="mt-2 text-xs font-semibold text-[#087F78] hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#E7E4DE]">
              {results.map(item => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="p-3.5 flex items-start justify-between gap-3 hover:bg-[#F3F2EE]/60 transition-colors group block"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs font-semibold">
                        {getTypeIcon(item.type)}
                        <span>{item.type}</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#087F78]">{item.category}</span>
                      {item.dateOrMeta && (
                        <span className="text-[10px] font-mono text-[#77736C]">· {item.dateOrMeta}</span>
                      )}
                    </div>
                    <h4 className="text-xs font-semibold text-[#111111] group-hover:text-[#087F78] transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#77736C] line-clamp-1 leading-relaxed">
                      {item.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#77736C] group-hover:text-[#087F78] group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
