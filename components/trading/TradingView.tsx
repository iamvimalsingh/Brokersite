'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ACCOUNT_TIERS, BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  ArrowUpRight,
  Scale,
  AlertTriangle,
  Zap,
  Clock,
  Globe,
  Sliders,
  Layers,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  FileText,
  Lock,
  Server
} from 'lucide-react';

export interface TradingViewProps {
  activeSubroute: 'accounts' | 'conditions' | 'spreads' | 'leverage' | 'order-types' | 'risk-management';
}

interface SpreadRow {
  symbol: string;
  name: string;
  category: string;
  rawSpread: string;
  standardSpread: string;
  commission: string;
  swapLong: string;
  swapShort: string;
}

const EXTENDED_SPREADS: SpreadRow[] = [
  // Forex Majors
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', category: 'forex', rawSpread: '0.0 pips', standardSpread: '0.8 pips', commission: '$3.50 / lot', swapLong: '-0.72 pts', swapShort: '+0.15 pts' },
  { symbol: 'GBP/USD', name: 'British Pound / US Dollar', category: 'forex', rawSpread: '0.1 pips', standardSpread: '1.0 pips', commission: '$3.50 / lot', swapLong: '-0.45 pts', swapShort: '-0.12 pts' },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', category: 'forex', rawSpread: '0.1 pips', standardSpread: '0.9 pips', commission: '$3.50 / lot', swapLong: '+0.88 pts', swapShort: '-1.42 pts' },
  { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', category: 'forex', rawSpread: '0.2 pips', standardSpread: '1.1 pips', commission: '$3.50 / lot', swapLong: '+0.35 pts', swapShort: '-0.85 pts' },
  { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', category: 'forex', rawSpread: '0.2 pips', standardSpread: '1.0 pips', commission: '$3.50 / lot', swapLong: '-0.28 pts', swapShort: '-0.15 pts' },
  { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', category: 'forex', rawSpread: '0.3 pips', standardSpread: '1.2 pips', commission: '$3.50 / lot', swapLong: '-0.18 pts', swapShort: '-0.42 pts' },
  // Forex Minors
  { symbol: 'EUR/GBP', name: 'Euro / British Pound', category: 'forex', rawSpread: '0.3 pips', standardSpread: '1.2 pips', commission: '$3.50 / lot', swapLong: '-0.38 pts', swapShort: '+0.08 pts' },
  { symbol: 'EUR/JPY', name: 'Euro / Japanese Yen', category: 'forex', rawSpread: '0.4 pips', standardSpread: '1.4 pips', commission: '$3.50 / lot', swapLong: '+0.45 pts', swapShort: '-0.95 pts' },
  // Metals
  { symbol: 'XAU/USD', name: 'Spot Gold', category: 'metals', rawSpread: '0.08 pts', standardSpread: '0.22 pts', commission: '$3.50 / lot', swapLong: '-1.25 pts', swapShort: '+0.42 pts' },
  { symbol: 'XAG/USD', name: 'Spot Silver', category: 'metals', rawSpread: '0.012 pts', standardSpread: '0.030 pts', commission: '$3.50 / lot', swapLong: '-0.18 pts', swapShort: '+0.05 pts' },
  // Indices
  { symbol: 'US500', name: 'S&P 500 Cash', category: 'indices', rawSpread: '0.45 pts', standardSpread: '0.80 pts', commission: 'Included', swapLong: '-0.95 pts', swapShort: '-0.45 pts' },
  { symbol: 'NAS100', name: 'Nasdaq 100 Cash', category: 'indices', rawSpread: '1.10 pts', standardSpread: '1.80 pts', commission: 'Included', swapLong: '-1.40 pts', swapShort: '-0.80 pts' },
  { symbol: 'UK100', name: 'FTSE 100 Index', category: 'indices', rawSpread: '1.00 pts', standardSpread: '1.60 pts', commission: 'Included', swapLong: '-0.60 pts', swapShort: '-0.30 pts' },
  { symbol: 'GER40', name: 'DAX 40 Index', category: 'indices', rawSpread: '1.20 pts', standardSpread: '1.90 pts', commission: 'Included', swapLong: '-0.85 pts', swapShort: '-0.40 pts' },
  // Digital Assets
  { symbol: 'BTC/USD', name: 'Bitcoin Derivative', category: 'crypto', rawSpread: '1.20 pts', standardSpread: '2.50 pts', commission: 'Included', swapLong: '-0.025%', swapShort: '-0.015%' },
  { symbol: 'ETH/USD', name: 'Ethereum Derivative', category: 'crypto', rawSpread: '0.35 pts', standardSpread: '0.85 pts', commission: 'Included', swapLong: '-0.025%', swapShort: '-0.015%' },
  { symbol: 'SOL/USD', name: 'Solana Derivative', category: 'crypto', rawSpread: '0.08 pts', standardSpread: '0.18 pts', commission: 'Included', swapLong: '-0.030%', swapShort: '-0.020%' },
  // Commodities
  { symbol: 'WTI', name: 'Crude Oil WTI', category: 'commodities', rawSpread: '0.03 pts', standardSpread: '0.06 pts', commission: 'Included', swapLong: '-0.45 pts', swapShort: '-0.15 pts' },
  { symbol: 'Brent', name: 'Brent Crude Oil', category: 'commodities', rawSpread: '0.03 pts', standardSpread: '0.06 pts', commission: 'Included', swapLong: '-0.42 pts', swapShort: '-0.18 pts' }
];

export const TradingView: React.FC<TradingViewProps> = ({ activeSubroute }) => {
  const [spreadFilter, setSpreadFilter] = useState<string>('all');

  const subroutes = [
    { id: 'accounts', label: 'Trading Accounts', path: '/trading/accounts' },
    { id: 'conditions', label: 'Trading Conditions', path: '/trading/conditions' },
    { id: 'spreads', label: 'Spreads & Pricing', path: '/trading/spreads' },
    { id: 'leverage', label: 'Leverage & Margin', path: '/trading/leverage' },
    { id: 'order-types', label: 'Order Types', path: '/trading/order-types' },
    { id: 'risk-management', label: 'Risk Management', path: '/trading/risk-management' }
  ];

  const filteredSpreads = spreadFilter === 'all'
    ? EXTENDED_SPREADS
    : EXTENDED_SPREADS.filter(s => s.category === spreadFilter);

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Page Hero Header */}
        <div className="mb-10 sm:mb-14 border-b border-[#E7E4DE] pb-8 sm:pb-10">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
            Trading Specifications
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Trading Specifications &amp; Conditions
          </h1>
          <p className="text-base sm:text-lg text-[#77736C] max-w-2xl leading-relaxed">
            Transparent execution models, institutional spread schedules, structured leverage parameters, and rigorous risk management protocols at {BRAND_NAME}.
          </p>
        </div>

        {/* Subroute Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0 mb-10 border-b border-[#E7E4DE]">
          {subroutes.map(sub => {
            const isActive = activeSubroute === sub.id;
            return (
              <Link
                key={sub.id}
                href={sub.path}
                className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#087F78] text-[#087F78] font-semibold'
                    : 'border-transparent text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {sub.label}
              </Link>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ACCOUNTS */}
        {/* ========================================================================= */}
        {activeSubroute === 'accounts' && (
          <div className="space-y-16">
            {/* Account Tiers Cards */}
            <div>
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Tier Architecture</span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Tailored Account Types
                </h2>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Choose the execution environment and commission model that aligns with your trading methodology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ACCOUNT_TIERS.map(tier => (
                  <div
                    key={tier.id}
                    className={`p-6 sm:p-8 rounded-xl bg-white border flex flex-col justify-between ${
                      tier.recommended
                        ? 'border-[#087F78] ring-1 ring-[#087F78] shadow-md relative'
                        : 'border-[#E7E4DE] shadow-xs'
                    }`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#087F78] text-white text-[10px] uppercase font-semibold px-3 py-0.5 rounded-full">
                        Recommended Tier
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#111111]">{tier.name}</h3>
                        <span className="text-[10px] font-mono text-[#77736C] uppercase">Live STP/ECN</span>
                      </div>
                      <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                        {tier.description}
                      </p>

                      <div className="space-y-3 text-xs border-t border-b border-[#E7E4DE] py-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-[#77736C]">Min Initial Deposit</span>
                          <span className="font-mono font-bold text-[#111111]">{tier.minDeposit}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#77736C]">Spread Starts At</span>
                          <span className="font-mono font-bold text-[#087F78]">{tier.spreadFrom}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#77736C]">Commission</span>
                          <span className="font-medium text-[#111111]">{tier.commission}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#77736C]">Maximum Leverage</span>
                          <span className="font-mono font-semibold text-[#111111]">{tier.leverage}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#77736C]">Execution Model</span>
                          <span className="font-medium text-[#111111]">{tier.execution}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-[11px] uppercase tracking-wider text-[#77736C] font-semibold mb-2">
                          Supported Trading Platforms
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {tier.platforms.map((plat, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono bg-[#F3F2EE] px-2 py-0.5 rounded-xs text-[#111111] border border-[#E7E4DE]"
                            >
                              {plat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      href={BROKER_CONFIG.crmRegisterUrl}
                      isExternal
                      variant={tier.recommended ? 'teal' : 'primary'}
                      fullWidth
                      size="md"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Open {tier.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Comparison Matrix */}
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Side-By-Side Details</span>
                <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Comprehensive Account Comparison
                </h3>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Examine full execution parameters and operational rules across all account tiers.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] font-mono text-[10px] uppercase">
                      <th className="py-3 px-4">Account Feature</th>
                      <th className="py-3 px-4">Standard Account</th>
                      <th className="py-3 px-4 font-semibold text-[#087F78]">Raw Spread Account</th>
                      <th className="py-3 px-4">Pro Account</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E4DE] font-mono text-[11px]">
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Account Base Currencies</td>
                      <td className="py-3 px-4 text-[#77736C]">USD, EUR, GBP</td>
                      <td className="py-3 px-4 text-[#111111]">USD, EUR, GBP</td>
                      <td className="py-3 px-4 text-[#111111]">USD, EUR, GBP, JPY</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Minimum Initial Deposit</td>
                      <td className="py-3 px-4 text-[#111111]">$100</td>
                      <td className="py-3 px-4 font-semibold text-[#087F78]">$500</td>
                      <td className="py-3 px-4 text-[#111111]">$10,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Minimum Order Volume</td>
                      <td className="py-3 px-4 text-[#77736C]">0.01 Lots (1,000 units)</td>
                      <td className="py-3 px-4 text-[#111111]">0.01 Lots (1,000 units)</td>
                      <td className="py-3 px-4 text-[#111111]">0.10 Lots (10,000 units)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Maximum Ticket Size</td>
                      <td className="py-3 px-4 text-[#77736C]">50 Lots</td>
                      <td className="py-3 px-4 text-[#111111]">100 Lots</td>
                      <td className="py-3 px-4 text-[#111111]">200 Lots</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Scalping &amp; Hedging</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Permitted (No Restrictions)</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Permitted (No Restrictions)</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Permitted (No Restrictions)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Automated Strategies (EAs)</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Full Support</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Full Support</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Full Support + FIX API</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Islamic / Swap-Free Option</td>
                      <td className="py-3 px-4 text-[#111111]">Available Upon Request</td>
                      <td className="py-3 px-4 text-[#111111]">Available Upon Request</td>
                      <td className="py-3 px-4 text-[#111111]">Custom Configuration</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Margin Call / Stop-Out</td>
                      <td className="py-3 px-4 text-[#77736C]">100% / 50%</td>
                      <td className="py-3 px-4 text-[#111111]">100% / 50%</td>
                      <td className="py-3 px-4 text-[#111111]">Custom / 50%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-sans font-medium text-[#111111]">Negative Balance Protection</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Active (Full Protection)</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Active (Full Protection)</td>
                      <td className="py-3 px-4 text-[#0A9F6E]">Active (Full Protection)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4-Step Onboarding Process */}
            <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-2xl p-6 sm:p-10">
              <div className="max-w-2xl mb-8">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Account Setup</span>
                <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  How to Open Your Trading Account
                </h3>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  A streamlined, 4-step onboarding procedure designed for institutional transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Register Profile', desc: 'Create your secure client portal profile using your email and contact details.' },
                  { step: '02', title: 'Verify Identity', desc: 'Submit standard proof of identity and residential address documents for verification.' },
                  { step: '03', title: 'Fund Account', desc: 'Deposit funds securely using major fiat banking options or supported digital currencies.' },
                  { step: '04', title: 'Launch Terminal', desc: 'Access WebTrader or configure mobile apps to begin trading live global markets.' }
                ].map((s, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-[#E7E4DE] flex flex-col justify-between">
                    <div>
                      <div className="text-2xl font-mono font-bold text-[#087F78] mb-2">{s.step}</div>
                      <h4 className="font-semibold text-sm text-[#111111] mb-1">{s.title}</h4>
                      <p className="text-xs text-[#77736C] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: TRADING CONDITIONS */}
        {/* ========================================================================= */}
        {activeSubroute === 'conditions' && (
          <div className="space-y-12">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-2xl mb-8">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Execution Principles</span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Execution Policy &amp; Order Routing
                </h2>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Client orders are routed directly into aggregated liquidity pools through low-latency financial gateways.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <Zap className="w-4 h-4 text-[#087F78]" />
                    <span>Straight-Through Processing (STP)</span>
                  </div>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    All client orders are executed with zero dealing desk intervention. Orders are matched electronically against top-tier non-bank and bank market makers.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <Server className="w-4 h-4 text-[#087F78]" />
                    <span>Equinix LD4 &amp; NY4 Infrastructure</span>
                  </div>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    Trading servers and order-routing gateways are co-located in major financial data centers, enabling sub-35 millisecond execution transit and minimal round-trip latency.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <ShieldCheck className="w-4 h-4 text-[#087F78]" />
                    <span>Zero Re-Quotes Policy</span>
                  </div>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    We maintain a strict 100% market execution policy. When you click trade, your order is filled at the prevailing interbank price without dealer rejections.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <TrendingUp className="w-4 h-4 text-[#087F78]" />
                    <span>Symmetrical Slippage &amp; Price Improvement</span>
                  </div>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    Slippage operates symmetrically. If the market moves in your favor while an order is routing, the trade is filled at the improved price, passing 100% of price improvement to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Trading Sessions & Server Clock */}
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-2xl mb-6">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Session Operations</span>
                <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Trading Hours &amp; Server Synchronization
                </h3>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Server times are synchronized to Eastern European Time (EET / GMT+2, with GMT+3 daylight saving observance).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C] uppercase mb-1">Forex Currency Pairs</div>
                  <div className="text-sm font-bold text-[#111111]">24/5 Continuous</div>
                  <div className="text-[11px] text-[#77736C] mt-1">Sun 22:05 — Fri 21:55 GMT</div>
                </div>
                <div className="p-4 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C] uppercase mb-1">Spot Metals (XAU, XAG)</div>
                  <div className="text-sm font-bold text-[#111111]">23/5 Daily Sessions</div>
                  <div className="text-[11px] text-[#77736C] mt-1">Daily break: 22:00 — 23:00 GMT</div>
                </div>
                <div className="p-4 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C] uppercase mb-1">Stock Indices</div>
                  <div className="text-sm font-bold text-[#111111]">Exchange Hours</div>
                  <div className="text-[11px] text-[#77736C] mt-1">US500: Mon 01:00 — Fri 23:15 GMT</div>
                </div>
                <div className="p-4 bg-[#FBFBF9] rounded-lg border border-[#E7E4DE]">
                  <div className="text-[10px] text-[#77736C] uppercase mb-1">Digital Asset Derivatives</div>
                  <div className="text-sm font-bold text-[#087F78]">24/7/365 Non-Stop</div>
                  <div className="text-[11px] text-[#77736C] mt-1">No weekend settlement close</div>
                </div>
              </div>
            </div>

            {/* Overnight Swaps & Financing */}
            <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-2xl p-6 sm:p-10">
              <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Overnight Financing &amp; Rollover Swaps
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-4 max-w-2xl">
                Positions held open through 23:59 server time are subject to overnight swap credits or debits, calculated according to interbank interest rate differentials (SOFR, Euribor, SONIA) and market lending costs.
              </p>
              <div className="text-xs text-[#77736C] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#087F78]" />
                <span>Triple swap rates apply on Wednesdays for foreign exchange to account for weekend settlement cycles.</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SPREADS & PRICING */}
        {/* ========================================================================= */}
        {activeSubroute === 'spreads' && (
          <div className="space-y-10">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Competitive Pricing</span>
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Live Spread Schedules &amp; Commission Rates
                  </h2>
                  <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                    Indicative benchmark spreads observed during active market hours across major liquid instruments.
                  </p>
                </div>

                {/* Category Filter Buttons */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
                  {['all', 'forex', 'metals', 'indices', 'crypto', 'commodities'].map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSpreadFilter(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap capitalize ${
                        spreadFilter === cat
                          ? 'bg-[#181818] text-white'
                          : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
                      }`}
                    >
                      {cat === 'all' ? 'All Classes' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spread Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] text-[10px] uppercase">
                      <th className="py-3 px-4">Instrument</th>
                      <th className="py-3 px-4">Class</th>
                      <th className="py-3 px-4 text-right font-semibold text-[#087F78]">Raw Spread (From)</th>
                      <th className="py-3 px-4 text-right">Standard Spread</th>
                      <th className="py-3 px-4 text-right">Commission (Raw)</th>
                      <th className="py-3 px-4 text-right hidden sm:table-cell">Swap Long</th>
                      <th className="py-3 px-4 text-right hidden sm:table-cell">Swap Short</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E4DE] text-[11px]">
                    {filteredSpreads.map(row => (
                      <tr key={row.symbol} className="hover:bg-[#F3F2EE]/50 transition-colors">
                        <td className="py-3 px-4">
                          <span className="font-semibold text-[#111111]">{row.symbol}</span>
                          <span className="block text-[10px] text-[#77736C] font-sans">{row.name}</span>
                        </td>
                        <td className="py-3 px-4 uppercase text-[10px] text-[#77736C] font-mono">
                          {row.category}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-[#087F78]">
                          {row.rawSpread}
                        </td>
                        <td className="py-3 px-4 text-right text-[#111111]">
                          {row.standardSpread}
                        </td>
                        <td className="py-3 px-4 text-right text-[#77736C]">
                          {row.commission}
                        </td>
                        <td className="py-3 px-4 text-right text-[#77736C] hidden sm:table-cell">
                          {row.swapLong}
                        </td>
                        <td className="py-3 px-4 text-right text-[#77736C] hidden sm:table-cell">
                          {row.swapShort}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transparent Pricing Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#111111]">
              <div className="p-6 bg-white border border-[#E7E4DE] rounded-xl space-y-2">
                <div className="font-semibold text-sm">Floating Spreads</div>
                <p className="text-[#77736C] leading-relaxed">
                  Spreads are variable and reflect real-time interbank order book depth. During major market news releases or low-liquidity rollover hours, spreads may widen dynamically.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E7E4DE] rounded-xl space-y-2">
                <div className="font-semibold text-sm">Zero Mark-Up on Raw Accounts</div>
                <p className="text-[#77736C] leading-relaxed">
                  Raw Spread accounts receive unadulterated quotes directly from liquidity providers without added dealer markups, accompanied by a flat $3.50 commission per side.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E7E4DE] rounded-xl space-y-2">
                <div className="font-semibold text-sm">Transparent Cost Calculator</div>
                <p className="text-[#77736C] leading-relaxed">
                  All fee structures are disclosed in advance. There are zero hidden account management charges, custody fees, or inactivity penalties.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: LEVERAGE */}
        {/* ========================================================================= */}
        {activeSubroute === 'leverage' && (
          <div className="space-y-12">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-2xl mb-8">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Capital Efficiency</span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Tiered Leverage &amp; Margin Requirements
                </h2>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Margin requirements are structured by asset category and notional account exposure to safeguard client capital.
                </p>
              </div>

              {/* Leverage Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs mb-10">
                <div className="p-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Major Currency Pairs</div>
                  <div className="text-3xl font-bold font-mono text-[#087F78] mt-2 mb-1">Up to 1:100</div>
                  <div className="text-[11px] text-[#77736C]">Margin Requirement: 1.00%</div>
                </div>

                <div className="p-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Spot Gold &amp; Silver</div>
                  <div className="text-3xl font-bold font-mono text-[#087F78] mt-2 mb-1">Up to 1:100</div>
                  <div className="text-[11px] text-[#77736C]">Margin Requirement: 1.00%</div>
                </div>

                <div className="p-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Stock Indices &amp; Energy</div>
                  <div className="text-3xl font-bold font-mono text-[#087F78] mt-2 mb-1">Up to 1:50</div>
                  <div className="text-[11px] text-[#77736C]">Margin Requirement: 2.00%</div>
                </div>

                <div className="p-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Crypto Derivatives</div>
                  <div className="text-3xl font-bold font-mono text-[#087F78] mt-2 mb-1">Up to 1:50</div>
                  <div className="text-[11px] text-[#77736C]">Margin Requirement: 2.00%</div>
                </div>
              </div>

              {/* Tiered Volume Schedule */}
              <div className="border-t border-[#E7E4DE] pt-8">
                <h3 className="text-lg font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  Dynamic Exposure Schedule (Forex)
                </h3>
                <p className="text-xs text-[#77736C] mb-4">
                  To protect against market gaps at large sizing, maximum leverage adjusts progressively based on aggregate open notional volume.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-[#E7E4DE] bg-[#FBFBF9] text-[#77736C] text-[10px] uppercase">
                        <th className="py-2.5 px-4">Aggregate Notional Volume (USD)</th>
                        <th className="py-2.5 px-4 text-center">Max FX Leverage</th>
                        <th className="py-2.5 px-4 text-right">Margin Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E7E4DE] text-[11px]">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#111111]">$0 — $1,000,000 (0 to 10 Lots)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-[#087F78]">1:100</td>
                        <td className="py-2.5 px-4 text-right text-[#111111]">1.00%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#111111]">$1,000,001 — $3,000,000 (10 to 30 Lots)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-[#111111]">1:50</td>
                        <td className="py-2.5 px-4 text-right text-[#111111]">2.00%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#111111]">&gt; $3,000,000 (Above 30 Lots)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-[#111111]">1:20</td>
                        <td className="py-2.5 px-4 text-right text-[#111111]">5.00%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Margin Mechanics & Calculation Guide */}
            <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-2xl p-6 sm:p-10">
              <div className="max-w-2xl mb-6">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Margin Formula</span>
                <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  How Margin is Calculated
                </h3>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Required margin is the collateral committed to open and maintain an active market position.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E7E4DE] font-mono text-xs mb-6">
                <div className="text-[11px] text-[#77736C] mb-1">Standard Calculation Formula:</div>
                <div className="text-sm font-semibold text-[#111111] text-wrap">
                  Required Margin = (Volume in Lots × Contract Size × Asset Price) / Account Leverage
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-semibold text-sm text-[#111111] mb-1">Margin Call Level (100%)</div>
                  <p className="text-[#77736C] leading-relaxed">
                    Triggered when Account Equity equals Used Margin. The terminal issues automated warnings indicating additional collateral or exposure reduction is recommended.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-semibold text-sm text-[#111111] mb-1">Stop-Out Level (50%)</div>
                  <p className="text-[#77736C] leading-relaxed">
                    If Account Equity drops to 50% of Used Margin, the liquidation engine automatically closes open positions sequentially (largest losing position first) to prevent deficit balances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: ORDER TYPES */}
        {/* ========================================================================= */}
        {activeSubroute === 'order-types' && (
          <div className="space-y-12">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-2xl mb-8">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Order Staging</span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Supported Order Types &amp; Execution Modes
                </h2>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Professional order parameters available in {BRAND_NAME} WebTrader and mobile trading platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Market Order',
                    tag: 'Immediate Fill',
                    desc: 'Instructs the execution engine to fill your order immediately at the best available prevailing bid or ask price currently quoted across our aggregated liquidity pool.'
                  },
                  {
                    name: 'Limit Order (Buy Limit / Sell Limit)',
                    tag: 'Favorable Entry',
                    desc: 'Stages an order to buy at or below a specified target price, or sell at or above a specified target price. Ensures fill price is equal to or better than the specified limit.'
                  },
                  {
                    name: 'Stop Order (Buy Stop / Sell Stop)',
                    tag: 'Breakout Staging',
                    desc: 'Triggers a market order once a predefined stop activation price has been touched. Commonly used to capture directional breakouts or hedge existing exposure.'
                  },
                  {
                    name: 'Stop-Limit Order',
                    tag: 'Controlled Slippage',
                    desc: 'Combines stop triggers with limit protection. When the stop trigger price is touched, a limit order is submitted, preventing execution at severely slipped market prices.'
                  },
                  {
                    name: 'Trailing Stop',
                    tag: 'Dynamic Protection',
                    desc: 'Maintains a dynamic stop-loss distance that tracks favorable price movements tick-by-tick. If the market reverses by the specified trailing distance, the position is automatically closed.'
                  },
                  {
                    name: 'Bracket Order / OCO (One-Cancels-the-Other)',
                    tag: 'Risk Packaging',
                    desc: 'Pairs take-profit targets and stop-loss levels simultaneously with entry. When one exit condition executes, the opposing contingency order is instantly cancelled.'
                  }
                ].map((order, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-base text-[#111111]">{order.name}</span>
                        <span className="text-[10px] font-mono text-[#087F78] bg-[#DDEDEA] px-2 py-0.5 rounded-xs font-semibold">
                          {order.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#77736C] leading-relaxed">
                        {order.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time in Force Parameters */}
            <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-2xl p-6 sm:p-10">
              <div className="max-w-2xl mb-6">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Order Duration</span>
                <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Time in Force (TIF) Conventions
                </h3>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Specify how long pending limit and stop orders remain active in the order routing queue.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-mono font-bold text-sm text-[#111111] mb-1">GTC (Good &apos;Til Cancelled)</div>
                  <p className="text-[#77736C] leading-relaxed">The order remains active in the order staging queue until filled or manually revoked by the trader.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-mono font-bold text-sm text-[#111111] mb-1">DAY (Day Order)</div>
                  <p className="text-[#77736C] leading-relaxed">Automatically expires at the close of the current active trading session (23:59 server time) if unfilled.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-mono font-bold text-sm text-[#111111] mb-1">IOC (Immediate or Cancel)</div>
                  <p className="text-[#77736C] leading-relaxed">Fills any available volume immediately upon arrival; any unfilled remainder is cancelled instantaneously.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-mono font-bold text-sm text-[#111111] mb-1">FOK (Fill or Kill)</div>
                  <p className="text-[#77736C] leading-relaxed">The entire order volume must be executed in full immediately upon arrival or rejected entirely.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: RISK MANAGEMENT */}
        {/* ========================================================================= */}
        {activeSubroute === 'risk-management' && (
          <div className="space-y-12">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-2xl mb-8">
                <span className="text-[11px] font-mono uppercase text-[#087F78] font-semibold">Account Safeguards</span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Risk Management Protocols &amp; Capital Protection
                </h2>
                <p className="text-xs sm:text-sm text-[#77736C] mt-1">
                  Institutional safeguard mechanisms engineered into our account architecture to help prevent catastrophic drawdowns.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-6 rounded-xl border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#087F78]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111111] mb-1">Negative Balance Protection (NBP)</h4>
                    <p className="text-[#77736C] leading-relaxed">
                      Retail client accounts are protected against negative balance liabilities. In the event of severe market gap openings exceeding available margin, the account balance is restored to zero at company expense.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5 text-[#E5484D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111111] mb-1">Automated Stop-Out Liquidation</h4>
                    <p className="text-[#77736C] leading-relaxed">
                      If account equity declines below 50% of maintenance margin, automated liquidation triggers sequentially, closing the position with the greatest floating loss first to preserve remaining account equity.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-[#087F78]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111111] mb-1">Client Fund Segregation</h4>
                    <p className="text-[#77736C] leading-relaxed">
                      All client capital is held in segregated trust accounts across regulated tier-1 commercial banking institutions, completely insulated from brokerage operational funds.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/60 border border-[#087F78]/15 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-[#C98A00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111111] mb-1">Margin Alert Thresholds</h4>
                    <p className="text-[#77736C] leading-relaxed">
                      Automated notifications are pushed when margin usage reaches 100%, warning traders to either deposit supplementary capital, hedge exposure, or close selected positions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Risk Guidelines */}
            <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-2xl p-6 sm:p-10">
              <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Professional Risk Control Recommendations
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6 max-w-2xl">
                Prudent risk management is the cornerstone of sustainable participation in volatile financial markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-semibold text-sm text-[#111111] mb-1">1% to 2% Capital Allocation</div>
                  <p className="text-[#77736C] leading-relaxed">Limit single-trade risk exposure to a maximum of 1%–2% of total account equity by utilizing disciplined lot sizing.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-semibold text-sm text-[#111111] mb-1">Compulsory Stop-Loss Orders</div>
                  <p className="text-[#77736C] leading-relaxed">Always define maximum acceptable loss parameters at the moment of order placement to eliminate emotional decision-making.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E7E4DE]">
                  <div className="font-semibold text-sm text-[#111111] mb-1">Weekend Gap Awareness</div>
                  <p className="text-[#77736C] leading-relaxed">Recognize that market gaps over weekend closes can bypass standard stop levels; reduce open exposure prior to Friday closes.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* Global Bottom CTA Card */}
        {/* ========================================================================= */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Live Account Setup
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to experience institutional trading conditions?
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Register your client account in minutes to access raw interbank spreads, high-speed routing, and responsive client support at {BRAND_NAME}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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

            <Button
              href={BROKER_CONFIG.tradingTerminalUrl}
              isExternal
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Launch Trading Terminal
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
