import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { ACCOUNT_TIERS, BROKER_CONFIG } from '../lib/config';
import { Button } from '../components/common/Button';
import { ShieldCheck, Zap, Sliders, CheckCircle2, ArrowUpRight, Scale, AlertTriangle } from 'lucide-react';

interface TradingPageProps {
  forcedSubroute?: 'accounts' | 'conditions' | 'spreads' | 'leverage' | 'order-types' | 'risk-management';
}

export const TradingPage: React.FC<TradingPageProps> = ({ forcedSubroute }) => {
  const params = useParams<{ subroute?: string }>();
  const activeSubroute = forcedSubroute || params.subroute || 'accounts';

  const subroutes = [
    { id: 'accounts', label: 'Trading Accounts', path: '/trading/accounts' },
    { id: 'conditions', label: 'Trading Conditions', path: '/trading/conditions' },
    { id: 'spreads', label: 'Spreads & Pricing', path: '/trading/spreads' },
    { id: 'leverage', label: 'Leverage & Margin', path: '/trading/leverage' },
    { id: 'order-types', label: 'Order Types', path: '/trading/order-types' },
    { id: 'risk-management', label: 'Risk Management', path: '/trading/risk-management' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Page Hero Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            Execution Standards
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Institutional Trading Specifications
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed">
            Transparent execution models, raw ECN spread pass-through, and disciplined margin protocols designed to eliminate conflicts of interest.
          </p>
        </div>

        {/* Subroute Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0 mb-10 border-b border-[#E7E4DE]">
          {subroutes.map(sub => {
            const isActive = activeSubroute === sub.id || (!forcedSubroute && !params.subroute && sub.id === 'accounts');
            return (
              <Link
                key={sub.id}
                to={sub.path}
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

        {/* TAB 1: ACCOUNTS */}
        {(activeSubroute === 'accounts' || activeSubroute === 'overview') && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACCOUNT_TIERS.map(tier => (
                <div
                  key={tier.id}
                  className={`p-6 sm:p-8 rounded-lg bg-white border flex flex-col justify-between ${
                    tier.recommended
                      ? 'border-[#087F78] ring-1 ring-[#087F78] shadow-md relative'
                      : 'border-[#E7E4DE] shadow-xs'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#087F78] text-white text-[10px] uppercase font-semibold px-3 py-0.5 rounded-full">
                      Institutional Preferred
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2">{tier.name}</h3>
                    <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <div className="space-y-3 text-xs border-t border-b border-[#E7E4DE] py-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-[#77736C]">Min Initial Deposit</span>
                        <span className="font-mono font-semibold text-[#111111]">{tier.minDeposit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#77736C]">Spread Starts At</span>
                        <span className="font-mono font-semibold text-[#087F78]">{tier.spreadFrom}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#77736C]">Commission</span>
                        <span className="font-medium text-[#111111]">{tier.commission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#77736C]">Leverage</span>
                        <span className="font-mono text-[#111111]">{tier.leverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#77736C]">Routing</span>
                        <span className="font-medium text-[#111111]">{tier.execution}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-[#77736C] font-semibold mb-2">
                        Supported Platforms
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tier.platforms.map((plat, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-[#F3F2EE] px-2 py-0.5 rounded-xs text-[#111111]"
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
        )}

        {/* TAB 2: TRADING CONDITIONS */}
        {activeSubroute === 'conditions' && (
          <div className="space-y-8">
            <div className="bg-white border border-[#E7E4DE] rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#111111] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Execution Policy &amp; Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                RegearFX acts as a Straight-Through Processing (STP) and Direct Market Access (DMA) brokerage. Client orders are matched against top-tier liquidity providers including global banks, non-bank electronic market makers, and institutional venues.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#111111]">
                <div className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="font-semibold text-sm text-[#111111]">No Dealing Desk (NDD)</div>
                  <p className="text-[#77736C] leading-relaxed">
                    Zero manual intervention, zero dealer requotes, and no synthetic slippage injection. All orders execute at the best available consolidated bid/ask.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="font-semibold text-sm text-[#111111]">Equinix Cross-Connect Latency</div>
                  <p className="text-[#77736C] leading-relaxed">
                    Servers physically co-located in LD4 (Slough, UK) and NY4 (Secaucus, NJ) ensuring sub-30 millisecond packet transit to matching engines.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="font-semibold text-sm text-[#111111]">Positive Slippage Pass-Through</div>
                  <p className="text-[#77736C] leading-relaxed">
                    When the market gaps in your favor between staging and execution, the price improvement is passed fully to your balance.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE] space-y-2">
                  <div className="font-semibold text-sm text-[#111111]">Micro Lots &amp; Fractional Sizing</div>
                  <p className="text-[#77736C] leading-relaxed">
                    Trade in minimum volume increments from 0.01 standard lots (1,000 units base currency) up to 100 lots per ticket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SPREADS & PRICING */}
        {activeSubroute === 'spreads' && (
          <div className="space-y-8">
            <div className="bg-white border border-[#E7E4DE] rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Live Benchmark Spreads
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Indicative average spreads observed during high liquidity peak market sessions (London &amp; New York overlap).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#E7E4DE] text-[#77736C] text-[10px]">
                      <th className="py-2.5 px-3">INSTRUMENT</th>
                      <th className="py-2.5 px-3 text-right">RAW SPREAD (MIN)</th>
                      <th className="py-2.5 px-3 text-right">STANDARD SPREAD</th>
                      <th className="py-2.5 px-3 text-right">COMMISSION (RAW)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E4DE] text-[11px]">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-[#111111]">EUR/USD</td>
                      <td className="py-3 px-3 text-right text-[#087F78] font-bold">0.0 pips</td>
                      <td className="py-3 px-3 text-right text-[#111111]">0.8 pips</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">$3.00 / lot</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-[#111111]">GBP/USD</td>
                      <td className="py-3 px-3 text-right text-[#087F78] font-bold">0.1 pips</td>
                      <td className="py-3 px-3 text-right text-[#111111]">1.0 pips</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">$3.00 / lot</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-[#111111]">USD/JPY</td>
                      <td className="py-3 px-3 text-right text-[#087F78] font-bold">0.1 pips</td>
                      <td className="py-3 px-3 text-right text-[#111111]">0.9 pips</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">$3.00 / lot</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-[#111111]">XAU/USD (Gold)</td>
                      <td className="py-3 px-3 text-right text-[#087F78] font-bold">0.12 pts</td>
                      <td className="py-3 px-3 text-right text-[#111111]">0.25 pts</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">$3.00 / lot</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-[#111111]">BTC/USD</td>
                      <td className="py-3 px-3 text-right text-[#087F78] font-bold">1.20 pts</td>
                      <td className="py-3 px-3 text-right text-[#111111]">2.50 pts</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">0.05% notional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LEVERAGE */}
        {activeSubroute === 'leverage' && (
          <div className="space-y-8">
            <div className="bg-white border border-[#E7E4DE] rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Tiered Leverage &amp; Margin Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                To safeguard client capital against sudden macroeconomic gap events, leverage is tiered dynamically based on position size and asset class.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Major FX</div>
                  <div className="text-2xl font-bold font-mono text-[#087F78] mt-1 mb-1">1:200</div>
                  <div className="text-[11px] text-[#77736C]">Margin: 0.50%</div>
                </div>
                <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Spot Gold &amp; Silver</div>
                  <div className="text-2xl font-bold font-mono text-[#087F78] mt-1 mb-1">1:200</div>
                  <div className="text-[11px] text-[#77736C]">Margin: 0.50%</div>
                </div>
                <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Global Indices &amp; Oil</div>
                  <div className="text-2xl font-bold font-mono text-[#087F78] mt-1 mb-1">1:100</div>
                  <div className="text-[11px] text-[#77736C]">Margin: 1.00%</div>
                </div>
                <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                  <div className="text-[#77736C] font-mono uppercase text-[10px]">Crypto Derivatives</div>
                  <div className="text-2xl font-bold font-mono text-[#087F78] mt-1 mb-1">1:50</div>
                  <div className="text-[11px] text-[#77736C]">Margin: 2.00%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ORDER TYPES */}
        {activeSubroute === 'order-types' && (
          <div className="space-y-8">
            <div className="bg-white border border-[#E7E4DE] rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Supported Order Execution Types
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Deploy granular order routing instructions directly via WebTrader, MT5, or API.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {[
                  { name: 'Market Order', desc: 'Executes immediately at the best available bid or ask price currently in the order book.' },
                  { name: 'Limit Order', desc: 'Stages an order to buy at or below a specified price, or sell at or above a specified price.' },
                  { name: 'Stop Order', desc: 'Triggers a market order once a predefined stop activation price has been touched.' },
                  { name: 'Stop-Limit Order', desc: 'Converts to a limit order when the trigger price is reached, protecting against slippage in illiquid spikes.' },
                  { name: 'Trailing Stop', desc: 'Maintains a dynamic stop-loss distance that moves automatically as favorable price movement occurs.' },
                  { name: 'Iceberg Order', desc: 'Divides large volume blocks into smaller visible orders to minimize market impact on institutional depth.' }
                ].map((order, i) => (
                  <div key={i} className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="font-semibold text-sm text-[#111111] mb-1">{order.name}</div>
                    <div className="text-[#77736C] leading-relaxed">{order.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: RISK MANAGEMENT */}
        {activeSubroute === 'risk-management' && (
          <div className="space-y-8">
            <div className="bg-white border border-[#E7E4DE] rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Capital Preservation &amp; Stop-Out Policy
              </h3>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                Clear rules safeguarding account equity under extreme market gaps and volatility.
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-md border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#111111]">Strict Negative Balance Protection</div>
                    <div className="text-[#77736C] mt-1 leading-relaxed">
                      Your liability is strictly limited to deposited funds. In the extraordinary event that sudden market gaps drop an account balance below zero, the deficit is automatically reset to zero at broker expense.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-md border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C98A00] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#111111]">Margin Call Level (100%)</div>
                    <div className="text-[#77736C] mt-1 leading-relaxed">
                      When your account Equity / Margin ratio declines to 100%, an automated notification alert is triggered via push/email warning that additional margin is required.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-md border border-[#E7E4DE] bg-[#FBFBF9] flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#E5484D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#111111]">Liquidation Stop-Out Level (50%)</div>
                    <div className="text-[#77736C] mt-1 leading-relaxed">
                      If the margin level drops to 50%, the risk engine automatically begins liquidating open positions, starting with the largest unprofitable position first, to prevent further account balance deterioration.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Bottom CTA Box */}
        <div className="mt-12 p-8 bg-[#F3F2EE] border border-[#E7E4DE] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-[#111111] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
              Ready to trade with transparent institutional conditions?
            </h4>
            <p className="text-xs sm:text-sm text-[#77736C]">
              Create an account or connect your existing MetaTrader or TradingView terminal in minutes.
            </p>
          </div>
          <Button
            href={BROKER_CONFIG.crmRegisterUrl}
            isExternal
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
            className="shrink-0"
          >
            Open Live Account
          </Button>
        </div>
      </Container>
    </div>
  );
};
