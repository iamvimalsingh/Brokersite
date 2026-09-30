'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Binary,
  ArrowUpRight,
  ArrowRight,
  Activity,
  BarChart2,
  TrendingUp,
  Sliders,
  Layers,
  GitCompare,
  Percent,
  Clock
} from 'lucide-react';

export const QuantView: React.FC = () => {
  // Cross-Asset Correlation Matrix Data (Values between -1.0 and 1.0)
  const assets = ['BTC', 'ETH', 'EUR/USD', 'XAU/USD', 'US500', 'WTI'];
  const correlationMatrix: Record<string, Record<string, number>> = {
    'BTC': { 'BTC': 1.00, 'ETH': 0.88, 'EUR/USD': 0.18, 'XAU/USD': 0.24, 'US500': 0.42, 'WTI': 0.12 },
    'ETH': { 'BTC': 0.88, 'ETH': 1.00, 'EUR/USD': 0.22, 'XAU/USD': 0.20, 'US500': 0.46, 'WTI': 0.15 },
    'EUR/USD': { 'BTC': 0.18, 'ETH': 0.22, 'EUR/USD': 1.00, 'XAU/USD': 0.45, 'US500': 0.32, 'WTI': 0.28 },
    'XAU/USD': { 'BTC': 0.24, 'ETH': 0.20, 'EUR/USD': 0.45, 'XAU/USD': 1.00, 'US500': 0.08, 'WTI': 0.22 },
    'US500': { 'BTC': 0.42, 'ETH': 0.46, 'EUR/USD': 0.32, 'XAU/USD': 0.08, 'US500': 1.00, 'WTI': 0.35 },
    'WTI': { 'BTC': 0.12, 'ETH': 0.15, 'EUR/USD': 0.28, 'XAU/USD': 0.22, 'US500': 0.35, 'WTI': 1.00 }
  };

  const getCellColor = (val: number) => {
    if (val === 1.00) return 'bg-[#181818] text-white font-bold';
    if (val >= 0.70) return 'bg-[#087F78]/80 text-white font-semibold';
    if (val >= 0.40) return 'bg-[#087F78]/40 text-[#111111] font-semibold';
    if (val >= 0.20) return 'bg-[#DDEDEA] text-[#087F78]';
    if (val >= 0.00) return 'bg-[#F3F2EE] text-[#77736C]';
    return 'bg-[#E5484D]/20 text-[#E5484D]';
  };

  // Volatility Profiles
  const volatilityProfiles = [
    { asset: 'BTC/USD', historical30d: '48.2%', implied: '52.4%', regime: 'Elevated', atr: '$1,840' },
    { asset: 'ETH/USD', historical30d: '56.1%', implied: '59.8%', regime: 'High', atr: '$98.50' },
    { asset: 'EUR/USD', historical30d: '6.4%', implied: '6.9%', regime: 'Normal', atr: '0.0062' },
    { asset: 'GBP/USD', historical30d: '7.8%', implied: '8.2%', regime: 'Normal', atr: '0.0084' },
    { asset: 'XAU/USD', historical30d: '14.8%', implied: '16.2%', regime: 'Moderate', atr: '$24.60' },
    { asset: 'US500', historical30d: '12.5%', implied: '13.8%', regime: 'Low-Normal', atr: '48.2 pts' },
    { asset: 'WTI Crude', historical30d: '28.4%', implied: '31.2%', regime: 'Moderate', atr: '$1.85' }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/tools" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Tools
          </Link>
          <Link href="/tools/calculators" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Calculators
          </Link>
          <Link href="/tools/economic-calendar" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Economic Calendar
          </Link>
          <Link href="/tools/market-analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/tools/signals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Signals
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Quantitative Tools
          </span>
          <Link href="/tools/algo" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              STATISTICAL MARKET MODELS
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              See the market through data.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Deconstruct financial price behaviour using cross-asset correlation coefficients, implied vs historical volatility distributions, and relative strength metrics.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Button
                to="/markets"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Explore Traded Markets
              </Button>

              <Button
                to="/tools/algo"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[44px]"
              >
                Algorithmic Workflows
              </Button>
            </div>
          </div>
        </div>

        {/* 1. Correlation Matrix Visual Section */}
        <div className="mb-16 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Cross-Asset Interdependence</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Correlation Heatmap Matrix (30-Day Rolling)
              </h2>
              <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                Pearson correlation coefficients from -1.0 (inverse correlation) to +1.0 (lockstep alignment).
              </p>
            </div>
            <span className="text-xs font-mono text-[#77736C]">Updated Daily at 00:00 GMT</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs font-mono border-collapse">
              <thead>
                <tr>
                  <th className="py-2.5 px-3 text-left font-sans text-[#77736C] uppercase text-[10px]">Asset</th>
                  {assets.map(a => (
                    <th key={a} className="py-2.5 px-3 font-bold text-[#111111] text-[11px]">
                      {a}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E4DE]">
                {assets.map(rowAsset => (
                  <tr key={rowAsset}>
                    <td className="py-2.5 px-3 text-left font-bold text-[#111111]">
                      {rowAsset}
                    </td>
                    {assets.map(colAsset => {
                      const val = correlationMatrix[rowAsset][colAsset];
                      return (
                        <td key={colAsset} className="p-1.5">
                          <div className={`py-2 px-1.5 rounded text-[11px] transition-all ${getCellColor(val)}`}>
                            {val.toFixed(2)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E7E4DE] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#77736C]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#087F78]" />
                Strong Positive (&ge; 0.70)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#DDEDEA]" />
                Moderate (0.20 to 0.40)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#F3F2EE]" />
                Uncorrelated (0.00 to 0.20)
              </span>
            </div>
            <span>Benchmark Period: 30 Sessions</span>
          </div>
        </div>

        {/* 2. Volatility Profile & Rolling Range */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Volatility Profile Table */}
          <div className="lg:col-span-7 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Dispersion Metrics</span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Volatility Profile &amp; Average True Range (ATR)
              </h3>
              <p className="text-xs text-[#77736C] mt-1">
                Compare annualized volatility and daily price movement ranges across asset classes.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] text-[10px] uppercase">
                    <th className="py-2.5 px-3">Asset</th>
                    <th className="py-2.5 px-3 text-right">30D Historical</th>
                    <th className="py-2.5 px-3 text-right">Implied Vol</th>
                    <th className="py-2.5 px-3 text-center">Regime</th>
                    <th className="py-2.5 px-3 text-right">Daily ATR (14)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E4DE] text-[11px]">
                  {volatilityProfiles.map(v => (
                    <tr key={v.asset} className="hover:bg-[#F3F2EE]/40 transition-colors">
                      <td className="py-3 px-3 font-semibold text-[#111111]">{v.asset}</td>
                      <td className="py-3 px-3 text-right text-[#111111]">{v.historical30d}</td>
                      <td className="py-3 px-3 text-right text-[#087F78] font-bold">{v.implied}</td>
                      <td className="py-3 px-3 text-center">
                        <span className="px-2 py-0.5 rounded bg-[#F3F2EE] text-[10px] text-[#77736C] font-sans">
                          {v.regime}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right text-[#111111]">{v.atr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right-Side Dashboard Style Visual: Market Statistics */}
          <div className="lg:col-span-5 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E7E4DE]">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold">
                    Live Statistics
                  </span>
                  <h4 className="text-lg font-bold text-[#111111] mt-1">Cross-Market Distribution</h4>
                </div>
                <Activity className="w-5 h-5 text-[#087F78]" />
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Metric 1 */}
                <div className="p-3 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE]">
                  <div className="flex justify-between text-[#77736C] text-[11px] mb-1">
                    <span>Positive Session Breadth</span>
                    <span className="text-[#0A9F6E] font-bold">64.2%</span>
                  </div>
                  <div className="w-full bg-[#E7E4DE] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0A9F6E] h-full rounded-full" style={{ width: '64.2%' }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-3 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE]">
                  <div className="flex justify-between text-[#77736C] text-[11px] mb-1">
                    <span>Average FX Spread Compression</span>
                    <span className="text-[#087F78] font-bold">-18.4%</span>
                  </div>
                  <div className="w-full bg-[#E7E4DE] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#087F78] h-full rounded-full" style={{ width: '81.6%' }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-3 bg-[#FBFBF9] rounded-xl border border-[#E7E4DE]">
                  <div className="flex justify-between text-[#77736C] text-[11px] mb-1">
                    <span>Precious Metals Correlation to USD</span>
                    <span className="text-[#E5484D] font-bold">-0.72 Inverse</span>
                  </div>
                  <div className="w-full bg-[#E7E4DE] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#E5484D] h-full rounded-full" style={{ width: '72%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-mono text-[#77736C]">
              <span>Sample: 60+ Traded Pairs</span>
              <span className="text-[#087F78] font-bold">Real-Time Data Feed</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block with Contextual Cross-Link */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Execution Interface
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Deploy statistical insights across live markets.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Verify correlation data, spread schedules, and order execution across all asset classes on {BRAND_NAME}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/markets"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Explore Markets Directory
            </Button>

            <Button
              to="/tools/algo"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Algorithmic Trading Tools
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
