'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowUpRight, TrendingUp } from 'lucide-react';
import { MOCK_MARKETS } from '@/lib/mock-markets';
import { MAIN_NAVIGATION } from '@/lib/navigation';
import { BROKER_CONFIG } from '@/lib/config';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search markets
  const matchedMarkets = normalizedQuery
    ? MOCK_MARKETS.filter(
        m =>
          m.symbol.toLowerCase().includes(normalizedQuery) ||
          m.name.toLowerCase().includes(normalizedQuery) ||
          m.category.toLowerCase().includes(normalizedQuery)
      ).slice(0, 6)
    : MOCK_MARKETS.slice(0, 4);

  // Search site pages
  const matchedNavPages = normalizedQuery
    ? MAIN_NAVIGATION.flatMap(sec => sec.items)
        .filter(
          item =>
            item.title.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery)
        )
        .slice(0, 6)
    : [];

  const handleSelectRoute = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search markets and site navigation"
    >
      <div
        className="w-full max-w-2xl bg-[#FBFBF9] border border-[#E7E4DE] shadow-2xl rounded-lg overflow-hidden flex flex-col max-h-[80vh] transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E7E4DE] bg-white gap-3">
          <Search className="w-5 h-5 text-[#77736C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search currency pairs, crypto, indices, tools, guides..."
            className="w-full bg-transparent text-base text-[#111111] placeholder-[#77736C] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#77736C] hover:text-[#111111] rounded-sm cursor-pointer"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#77736C] bg-[#F3F2EE] px-1.5 py-0.5 rounded-sm border border-[#E7E4DE]">
            ESC
          </span>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Markets Section */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#77736C] font-semibold mb-2 flex items-center justify-between">
              <span>{normalizedQuery ? 'Matching Instruments' : 'Popular Markets'}</span>
              <span className="text-[11px] font-normal lowercase">{matchedMarkets.length} results</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchedMarkets.map(market => {
                const isPos = market.change24h >= 0;
                return (
                  <div
                    key={market.id}
                    onClick={() => handleSelectRoute(`/markets/${market.category}`)}
                    className="p-2.5 rounded-md border border-[#E7E4DE] bg-white hover:border-[#087F78] hover:bg-[#F3F2EE] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-[#111111]">{market.symbol}</span>
                        <span className="text-[10px] uppercase text-[#77736C] font-mono">{market.category}</span>
                      </div>
                      <div className="text-[11px] text-[#77736C] truncate max-w-[140px]">{market.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-medium text-[#111111] tabular-nums">
                        {market.price >= 100 ? market.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : market.price.toFixed(4)}
                      </div>
                      <div className={`text-[11px] font-mono tabular-nums ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{market.change24h}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation & Research Pages */}
          {matchedNavPages.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-[#77736C] font-semibold mb-2">
                Platform &amp; Information Pages
              </div>
              <div className="space-y-1.5">
                {matchedNavPages.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectRoute(item.href)}
                    className="p-2.5 rounded-md border border-transparent hover:border-[#E7E4DE] hover:bg-white transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#111111] group-hover:text-[#087F78]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#77736C] line-clamp-1">{item.description}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#77736C] group-hover:text-[#087F78] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Direct Links */}
          {!normalizedQuery && (
            <div className="pt-2 border-t border-[#E7E4DE]">
              <div className="text-xs uppercase tracking-wider text-[#77736C] font-semibold mb-2">
                Quick Portals
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={BROKER_CONFIG.crmRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#181818] text-white rounded-md hover:bg-black transition-colors"
                >
                  Open Live Account &rarr;
                </a>
                <a
                  href={BROKER_CONFIG.tradingTerminalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-[#E7E4DE] bg-white text-[#111111] rounded-md hover:border-[#087F78] transition-colors"
                >
                  Launch WebTrader &rarr;
                </a>
                <button
                  onClick={() => handleSelectRoute('/tools/calculators')}
                  className="px-3 py-1.5 border border-[#E7E4DE] bg-white text-[#111111] rounded-md hover:border-[#087F78] transition-colors cursor-pointer"
                >
                  Pip &amp; Margin Calculator
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#F3F2EE] border-t border-[#E7E4DE] text-[11px] text-[#77736C] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#087F78]" />
            <span>Deterministic demo quotes for reference</span>
          </div>
          <div>Press ESC to close</div>
        </div>
      </div>
    </div>
  );
};
