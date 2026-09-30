import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { BROKER_CONFIG } from '../lib/config';
import { Button } from '../components/common/Button';
import { Calculator, Calendar, TrendingUp, Radio, Cpu, Binary, ArrowRight } from 'lucide-react';

interface ToolsPageProps {
  forcedTool?: 'calculators' | 'economic-calendar' | 'market-analysis' | 'signals' | 'quant' | 'algo';
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ forcedTool }) => {
  const params = useParams<{ toolId?: string }>();
  const activeTab = forcedTool || params.toolId || 'overview';

  // Calculator State
  const [calcInstrument, setCalcInstrument] = useState<'EUR/USD' | 'GBP/USD' | 'USD/JPY' | 'XAU/USD' | 'BTC/USD'>('EUR/USD');
  const [lotSize, setLotSize] = useState<number>(1.0);
  const [leverageRatio, setLeverageRatio] = useState<number>(100);

  // Pip Value & Margin Calculation
  const calculatePipValue = () => {
    switch (calcInstrument) {
      case 'EUR/USD':
      case 'GBP/USD':
        return (lotSize * 10).toFixed(2);
      case 'USD/JPY':
        return ((lotSize * 1000) / 149.65).toFixed(2);
      case 'XAU/USD':
        return (lotSize * 10).toFixed(2);
      case 'BTC/USD':
        return (lotSize * 1).toFixed(2);
      default:
        return '10.00';
    }
  };

  const calculateRequiredMargin = () => {
    let notional = 100000 * lotSize;
    if (calcInstrument === 'XAU/USD') notional = 2658.40 * 100 * lotSize;
    if (calcInstrument === 'BTC/USD') notional = 64820.50 * 1 * lotSize;
    return (notional / leverageRatio).toFixed(2);
  };

  const tabs = [
    { id: 'overview', label: 'All Tools', path: '/tools' },
    { id: 'calculators', label: 'Calculators', path: '/tools/calculators' },
    { id: 'economic-calendar', label: 'Economic Calendar', path: '/tools/economic-calendar' },
    { id: 'market-analysis', label: 'Market Analysis', path: '/tools/market-analysis' },
    { id: 'signals', label: 'Trading Signals', path: '/tools/signals' },
    { id: 'quant', label: 'Quant Research', path: '/tools/quant' },
    { id: 'algo', label: 'Algorithmic Trading', path: '/tools/algo' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            Analytics &amp; Intelligence
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Trading Tools &amp; Market Research
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed">
            Institutional calculation engines, macroeconomic calendars, and systematic research environments to sharpen execution discipline.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-10 border-b border-[#E7E4DE]">
          {tabs.map(tab => {
            const isActive =
              activeTab === tab.id ||
              (!forcedTool && !params.toolId && tab.id === 'overview');
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

        {/* VIEW: CALCULATORS */}
        {(activeTab === 'calculators' || activeTab === 'overview') && (
          <div className="mb-14">
            <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Interactive Pip &amp; Margin Calculator
                  </h3>
                  <p className="text-xs text-[#77736C] mt-1">
                    Calculate precise pip valuation and required initial margin in US Dollars prior to opening orders.
                  </p>
                </div>
                <div className="p-2 rounded-sm bg-[#DDEDEA] text-[#087F78]">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Instrument Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-2">
                    Instrument
                  </label>
                  <select
                    value={calcInstrument}
                    onChange={e => setCalcInstrument(e.target.value as any)}
                    className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                  >
                    <option value="EUR/USD">EUR/USD (Euro)</option>
                    <option value="GBP/USD">GBP/USD (Pound)</option>
                    <option value="USD/JPY">USD/JPY (Yen)</option>
                    <option value="XAU/USD">XAU/USD (Spot Gold)</option>
                    <option value="BTC/USD">BTC/USD (Bitcoin)</option>
                  </select>
                </div>

                {/* Lot Size Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-2">
                    Volume (Standard Lots)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    max="100"
                    value={lotSize}
                    onChange={e => setLotSize(parseFloat(e.target.value) || 0.01)}
                    className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md px-3 py-2 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#087F78]"
                  />
                  <span className="text-[10px] text-[#77736C] mt-1 block">
                    1.00 Lot = 100,000 units base currency
                  </span>
                </div>

                {/* Leverage Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-2">
                    Account Leverage
                  </label>
                  <select
                    value={leverageRatio}
                    onChange={e => setLeverageRatio(parseInt(e.target.value))}
                    className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                  >
                    <option value="200">1:200 (Max Leverage)</option>
                    <option value="100">1:100 (Standard Tier)</option>
                    <option value="50">1:50 (Conservative)</option>
                    <option value="20">1:20 (Strict Institutional)</option>
                  </select>
                </div>
              </div>

              {/* Calculator Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#F3F2EE] border border-[#E7E4DE]">
                <div className="p-4 bg-white rounded-md border border-[#E7E4DE]">
                  <div className="text-[11px] uppercase tracking-wider text-[#77736C]">
                    Pip Value (Per 1.0 Pip Movement)
                  </div>
                  <div className="text-2xl font-mono font-bold text-[#087F78] mt-1">
                    ${calculatePipValue()} USD
                  </div>
                  <div className="text-[10px] text-[#77736C] mt-1">
                    Direct P&amp;L impact per pip fluctuation
                  </div>
                </div>

                <div className="p-4 bg-white rounded-md border border-[#E7E4DE]">
                  <div className="text-[11px] uppercase tracking-wider text-[#77736C]">
                    Required Initial Margin
                  </div>
                  <div className="text-2xl font-mono font-bold text-[#111111] mt-1">
                    ${calculateRequiredMargin()} USD
                  </div>
                  <div className="text-[10px] text-[#77736C] mt-1">
                    Equity locked to maintain position at 1:{leverageRatio}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: ECONOMIC CALENDAR */}
        {(activeTab === 'economic-calendar' || activeTab === 'overview') && (
          <div className="mb-14">
            <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Economic Calendar
                  </h3>
                  <p className="text-xs text-[#77736C] mt-1">
                    Real-time macroeconomic prints, consensus expectations, and historical revisions.
                  </p>
                </div>
                <div className="p-2 rounded-sm bg-[#DDEDEA] text-[#087F78]">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E7E4DE] text-[10px] font-mono uppercase text-[#77736C] bg-[#FBFBF9]">
                      <th className="py-2.5 px-3">Time (GMT)</th>
                      <th className="py-2.5 px-3">Currency</th>
                      <th className="py-2.5 px-3">Impact</th>
                      <th className="py-2.5 px-3">Event Description</th>
                      <th className="py-2.5 px-3 text-right">Actual</th>
                      <th className="py-2.5 px-3 text-right">Forecast</th>
                      <th className="py-2.5 px-3 text-right">Previous</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E4DE] font-mono text-[11px]">
                    <tr>
                      <td className="py-3 px-3 text-[#77736C]">12:30</td>
                      <td className="py-3 px-3 font-semibold text-[#111111]">USD</td>
                      <td className="py-3 px-3">
                        <span className="text-[10px] font-sans font-semibold bg-[#E5484D]/10 text-[#E5484D] px-1.5 py-0.5 rounded-xs">
                          HIGH
                        </span>
                      </td>
                      <td className="py-3 px-3 font-sans font-medium text-[#111111]">
                        Non-Farm Payrolls (NFP)
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-[#0A9F6E]">254K</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">140K</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">159K</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-[#77736C]">12:30</td>
                      <td className="py-3 px-3 font-semibold text-[#111111]">USD</td>
                      <td className="py-3 px-3">
                        <span className="text-[10px] font-sans font-semibold bg-[#E5484D]/10 text-[#E5484D] px-1.5 py-0.5 rounded-xs">
                          HIGH
                        </span>
                      </td>
                      <td className="py-3 px-3 font-sans font-medium text-[#111111]">
                        US Unemployment Rate
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-[#0A9F6E]">4.1%</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">4.2%</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">4.2%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-[#77736C]">14:00</td>
                      <td className="py-3 px-3 font-semibold text-[#111111]">EUR</td>
                      <td className="py-3 px-3">
                        <span className="text-[10px] font-sans font-semibold bg-[#C98A00]/15 text-[#C98A00] px-1.5 py-0.5 rounded-xs">
                          MEDIUM
                        </span>
                      </td>
                      <td className="py-3 px-3 font-sans font-medium text-[#111111]">
                        ECB Monetary Policy Statement
                      </td>
                      <td className="py-3 px-3 text-right text-[#111111]">3.25%</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">3.25%</td>
                      <td className="py-3 px-3 text-right text-[#77736C]">3.50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: QUANT RESEARCH */}
        {activeTab === 'quant' && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs mb-14">
            <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Quantitative Research &amp; Market Datasets
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
              RegearFX offers normalized Level 2 tick logs, order book depth snapshots, and volatility matrices for systematic research and quantitative portfolio allocation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="font-semibold text-sm text-[#111111] mb-1">Tick History Data Store</div>
                <div className="text-[#77736C] leading-relaxed mb-3">
                  Historical tick-level bid/ask timestamps preserved in Parquet/CSV formats spanning 5+ years of institutional FX and crypto flow.
                </div>
                <span className="text-[10px] font-mono bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs">
                  API &amp; S3 Export Ready
                </span>
              </div>
              <div className="p-4 rounded-md bg-[#FBFBF9] border border-[#E7E4DE]">
                <div className="font-semibold text-sm text-[#111111] mb-1">Normalized Volatility Cones</div>
                <div className="text-[#77736C] leading-relaxed mb-3">
                  Dynamic rolling standard deviation cones identifying implied vs. realized volatility regime transitions.
                </div>
                <span className="text-[10px] font-mono bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs">
                  Updated Hourly
                </span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: ALGO TRADING */}
        {activeTab === 'algo' && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs mb-14">
            <h3 className="text-xl font-semibold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Algorithmic Execution &amp; FIX 4.4 Gateways
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
              Connect external algorithmic execution systems directly to our matching engines. Support for FIX Protocol 4.4, REST order routing, and low-latency WebSocket pricing feeds.
            </p>

            <div className="p-4 rounded-md bg-[#181818] text-[#FBFBF9] font-mono text-xs overflow-x-auto mb-6">
              <code>
                {`// Sample FIX 4.4 New Order Single (MsgType=D)
8=FIX.4.4|9=148|35=D|49=STRATA_CLIENT|56=STRATA_MATCHING|34=102|52=20260930-10:14:02.124|
11=ORD_84920|55=EUR/USD|54=1|38=100000|40=1|59=0|10=182|`}
              </code>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href={BROKER_CONFIG.crmRegisterUrl}
                isExternal
                variant="primary"
                size="md"
              >
                Request FIX 4.4 Access
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Talk to Institutional Desk
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
