'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { MOCK_MARKETS, MOCK_DATA_LABEL } from '@/lib/mock-markets';
import { RelatedMarketCTA } from '@/components/markets/RelatedMarketCTA';
import { ArrowUpRight, ArrowDownRight, Clock, ShieldAlert, BarChart2, Activity, Info } from 'lucide-react';

export const CryptoView: React.FC = () => {
  const cryptoAssets = MOCK_MARKETS.filter(m => m.category === 'crypto');

  const largeCapSymbols = ['BTC/USD', 'ETH/USD', 'SOL/USD', 'BNB/USD'];
  const altcoinSymbols = ['XRP/USD', 'DOGE/USD', 'ADA/USD', 'AVAX/USD'];
  const selectedSymbols = ['LINK/USD', 'DOT/USD'];

  const largeCaps = cryptoAssets.filter(p => largeCapSymbols.includes(p.symbol));
  const altcoins = cryptoAssets.filter(p => altcoinSymbols.includes(p.symbol));
  const selected = cryptoAssets.filter(p => selectedSymbols.includes(p.symbol));

  const cryptoMechanics = [
    {
      title: '24/7/365 Continuous Availability',
      desc: 'Unlike traditional equity or foreign exchange sessions that close on weekends, digital asset derivative markets trade continuously without settlement pauses.',
      icon: <Clock className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Elevated Price Volatility',
      desc: 'Digital asset prices exhibit wider intraday swings than sovereign fiat currencies. Traders must exercise strict stop-loss discipline and conservative position sizing.',
      icon: <Activity className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Market Depth & Liquidity Aggregation',
      desc: 'Top-tier cryptocurrencies possess deep order books across consolidated non-bank market makers, enabling reliable execution with controlled slippage.',
      icon: <BarChart2 className="w-5 h-5 text-[#087F78]" />
    },
    {
      title: 'Digital Asset Risk Considerations',
      desc: 'Crypto derivative markets are subject to protocol upgrades, shifting regulatory postures, and high systemic correlation across tokens. Capital is at risk.',
      icon: <ShieldAlert className="w-5 h-5 text-[#087F78]" />
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/markets" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Markets
          </Link>
          <Link href="/markets/forex" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Forex
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Crypto
          </span>
          <Link href="/markets/indices" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Indices
          </Link>
          <Link href="/markets/commodities" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Commodities
          </Link>
          <Link href="/markets/metals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Metals
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              Digital Assets
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Explore digital asset markets.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Track major cryptocurrency derivatives across Bitcoin, Ethereum, and prominent protocols with continuous trading hours, transparent spreads, and professional execution tools at {BRAND_NAME}.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Open an Account
              </Button>

              <Button
                to="/trading/conditions"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                View Trading Conditions
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#77736C] pt-4 border-t border-[#E7E4DE]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#087F78]" />
                24/7/365 Continuous Trading
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-[#087F78]" />
                Deep Derivative Liquidity
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#087F78]" />
                Strict Risk Safeguards
              </span>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 px-4 py-2.5 bg-white border border-[#E7E4DE] rounded-lg text-xs text-[#77736C] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#087F78] shrink-0" />
            <span>Digital asset prices below reflect {MOCK_DATA_LABEL} for educational platform demonstration.</span>
          </div>
          <span className="font-mono text-[11px] hidden sm:inline">Crypto Derivatives Desk</span>
        </div>

        {/* 1. Large Cap Assets */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Tier 1 Market Cap</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Large Cap Assets
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Established benchmark digital assets offering maximum global order book depth and liquidity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {largeCaps.map(asset => {
              const isPos = asset.change24h >= 0;
              return (
                <div key={asset.id} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{asset.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{asset.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{asset.name}</div>
                    <div className="text-xl font-mono font-semibold text-[#111111] tabular-nums mb-2">
                      ${asset.price >= 100 ? asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : asset.price.toFixed(4)}
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {asset.spread} pts</span>
                    <a
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-0.5"
                    >
                      Trade <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Major Altcoins */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Smart Contract &amp; Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Major Altcoins
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Widely recognized blockchain network protocols with active trading volumes and directional volatility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {altcoins.map(asset => {
              const isPos = asset.change24h >= 0;
              return (
                <div key={asset.id} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{asset.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{asset.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{asset.name}</div>
                    <div className="text-xl font-mono font-semibold text-[#111111] tabular-nums mb-2">
                      ${asset.price >= 100 ? asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : asset.price.toFixed(4)}
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {asset.spread} pts</span>
                    <a
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-0.5"
                    >
                      Trade <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Selected Digital Assets */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Infrastructure Tokens</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Selected Digital Assets
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Oracle networks and interoperability protocols selected for liquidity and technical structure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selected.map(asset => {
              const isPos = asset.change24h >= 0;
              return (
                <div key={asset.id} className="p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sm text-[#111111]">{asset.symbol}</span>
                      <span className={`font-mono text-xs font-semibold ${isPos ? 'text-[#0A9F6E]' : 'text-[#E5484D]'}`}>
                        {isPos ? '+' : ''}{asset.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-[#77736C] mb-3">{asset.name}</div>
                    <div className="text-xl font-mono font-semibold text-[#111111] tabular-nums mb-2">
                      ${asset.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                    <span>Spread: {asset.spread} pts</span>
                    <a
                      href={BROKER_CONFIG.tradingTerminalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#087F78] hover:text-[#076C66] inline-flex items-center gap-0.5"
                    >
                      Trade <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Digital Asset Mechanics & Risk Factors */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-1">
              Market Mechanics
            </div>
            <h3 className="text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Key Considerations in Digital Asset Trading
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] mt-1">
              Understand the operational attributes and market risks specific to digital asset derivative instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cryptoMechanics.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Market CTA */}
        <RelatedMarketCTA categoryName="Crypto Derivatives" />
      </Container>
    </div>
  );
};
