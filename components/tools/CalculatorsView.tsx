'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import {
  Calculator,
  ArrowUpRight,
  ArrowRight,
  Check,
  Scale,
  DollarSign,
  PieChart,
  ShieldCheck,
  Info
} from 'lucide-react';

type CalculatorTab = 'pip' | 'margin' | 'position' | 'pnl';

interface InstrumentSpec {
  symbol: string;
  name: string;
  category: 'forex' | 'metals' | 'crypto' | 'indices' | 'commodities';
  contractSize: number;
  pipSize: number;
  defaultPrice: number;
  isJpy?: boolean;
}

const INSTRUMENTS: InstrumentSpec[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', category: 'forex', contractSize: 100000, pipSize: 0.0001, defaultPrice: 1.0874 },
  { symbol: 'GBP/USD', name: 'British Pound / US Dollar', category: 'forex', contractSize: 100000, pipSize: 0.0001, defaultPrice: 1.3045 },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', category: 'forex', contractSize: 100000, pipSize: 0.01, defaultPrice: 149.65, isJpy: true },
  { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', category: 'forex', contractSize: 100000, pipSize: 0.0001, defaultPrice: 0.8640 },
  { symbol: 'XAU/USD', name: 'Spot Gold', category: 'metals', contractSize: 100, pipSize: 0.10, defaultPrice: 2658.40 },
  { symbol: 'BTC/USD', name: 'Bitcoin Derivative', category: 'crypto', contractSize: 1, pipSize: 1.00, defaultPrice: 64820.50 },
  { symbol: 'ETH/USD', name: 'Ethereum Derivative', category: 'crypto', contractSize: 1, pipSize: 0.10, defaultPrice: 2642.10 },
  { symbol: 'US500', name: 'S&P 500 Cash', category: 'indices', contractSize: 1, pipSize: 0.10, defaultPrice: 5762.50 },
  { symbol: 'WTI', name: 'Crude Oil WTI', category: 'commodities', contractSize: 1000, pipSize: 0.01, defaultPrice: 72.45 }
];

export const CalculatorsView: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<CalculatorTab>('pip');

  // Shared Form State
  const [accountCurrency, setAccountCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [selectedSymbol, setSelectedSymbol] = useState<string>('EUR/USD');
  const [lotSize, setLotSize] = useState<number>(1.0);
  const [leverage, setLeverage] = useState<number>(100);
  const [entryPrice, setEntryPrice] = useState<number>(1.0874);
  const [stopLoss, setStopLoss] = useState<number>(1.0824);
  const [takeProfit, setTakeProfit] = useState<number>(1.0974);
  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [direction, setDirection] = useState<'buy' | 'sell'>('buy');

  const selectedInst = INSTRUMENTS.find(i => i.symbol === selectedSymbol) || INSTRUMENTS[0];

  const handleInstrumentChange = (sym: string) => {
    setSelectedSymbol(sym);
    const inst = INSTRUMENTS.find(i => i.symbol === sym);
    if (inst) {
      setEntryPrice(inst.defaultPrice);
      if (inst.category === 'forex' && !inst.isJpy) {
        setStopLoss(Number((inst.defaultPrice - 0.0050).toFixed(4)));
        setTakeProfit(Number((inst.defaultPrice + 0.0100).toFixed(4)));
      } else if (inst.isJpy) {
        setStopLoss(Number((inst.defaultPrice - 0.50).toFixed(2)));
        setTakeProfit(Number((inst.defaultPrice + 1.00).toFixed(2)));
      } else if (inst.category === 'metals') {
        setStopLoss(Number((inst.defaultPrice - 15.00).toFixed(2)));
        setTakeProfit(Number((inst.defaultPrice + 30.00).toFixed(2)));
      } else if (inst.category === 'crypto') {
        setStopLoss(Number((inst.defaultPrice * 0.97).toFixed(2)));
        setTakeProfit(Number((inst.defaultPrice * 1.06).toFixed(2)));
      } else {
        setStopLoss(Number((inst.defaultPrice * 0.98).toFixed(2)));
        setTakeProfit(Number((inst.defaultPrice * 1.04).toFixed(2)));
      }
    }
  };

  // Calculations
  // 1. Pip Value
  const calculatePipValue = (): number => {
    const { contractSize, pipSize, isJpy } = selectedInst;
    let basePipVal = lotSize * contractSize * pipSize;
    if (isJpy) {
      basePipVal = basePipVal / entryPrice;
    }
    return Number(basePipVal.toFixed(2));
  };

  // 2. Required Margin
  const calculateRequiredMargin = (): number => {
    const { contractSize } = selectedInst;
    const notional = lotSize * contractSize * entryPrice;
    return Number((notional / leverage).toFixed(2));
  };

  // 3. Position Size Calculator
  const calculatePositionSize = (): { lots: number; monetaryRisk: number; pipsRisk: number } => {
    const monetaryRisk = accountBalance * (riskPercent / 100);
    const slDistance = Math.abs(entryPrice - stopLoss);
    const pipsRisk = Number((slDistance / selectedInst.pipSize).toFixed(1));
    const singleLotPipValue = (1.0 * selectedInst.contractSize * selectedInst.pipSize) / (selectedInst.isJpy ? entryPrice : 1);
    const lots = pipsRisk > 0 ? Number((monetaryRisk / (pipsRisk * singleLotPipValue)).toFixed(2)) : 0.01;
    return {
      lots: Math.max(0.01, lots),
      monetaryRisk: Number(monetaryRisk.toFixed(2)),
      pipsRisk
    };
  };

  // 4. Profit & Loss Calculator
  const calculatePnL = (): { potentialProfit: number; potentialLoss: number; riskReward: string } => {
    const { contractSize } = selectedInst;
    let profitDiff = direction === 'buy' ? takeProfit - entryPrice : entryPrice - takeProfit;
    let lossDiff = direction === 'buy' ? entryPrice - stopLoss : stopLoss - entryPrice;

    const potentialProfit = profitDiff * lotSize * contractSize;
    const potentialLoss = lossDiff * lotSize * contractSize;
    const ratio = potentialLoss > 0 ? (potentialProfit / potentialLoss).toFixed(2) : '1:2.0';

    return {
      potentialProfit: Number(potentialProfit.toFixed(2)),
      potentialLoss: Number(potentialLoss.toFixed(2)),
      riskReward: `1:${ratio}`
    };
  };

  const pipVal = calculatePipValue();
  const reqMargin = calculateRequiredMargin();
  const posCalc = calculatePositionSize();
  const pnlCalc = calculatePnL();

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/tools" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Tools
          </Link>
          <span className="text-[#77736C]">/</span>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Calculators
          </span>
          <Link href="/tools/economic-calendar" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Economic Calendar
          </Link>
          <Link href="/tools/market-analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/tools/signals" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Signals
          </Link>
          <Link href="/tools/quant" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Quantitative Tools
          </Link>
          <Link href="/tools/algo" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Algorithmic Trading
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-18 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              INTERACTIVE RISK COMPUTATION
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Interactive Trading Calculators
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Compute pip values, required margin, position sizing, and potential profit/loss parameters with institutional accuracy before placing your orders.
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
          </div>
        </div>

        {/* Calculator App Interface */}
        <div className="mb-14 bg-white border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 shadow-xs">
          {/* Calculator Segmented Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE]">
            {[
              { id: 'pip', label: 'Pip Calculator', icon: <Scale className="w-4 h-4" /> },
              { id: 'margin', label: 'Margin Calculator', icon: <PieChart className="w-4 h-4" /> },
              { id: 'position', label: 'Position Size Calculator', icon: <Calculator className="w-4 h-4" /> },
              { id: 'pnl', label: 'Profit & Loss Calculator', icon: <DollarSign className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCalc(tab.id as CalculatorTab)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeCalc === tab.id
                    ? 'bg-[#181818] text-white shadow-xs'
                    : 'bg-[#F3F2EE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Calculator Body: Form (Left) & Results Display (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Form Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Account Currency */}
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                    Account Currency
                  </label>
                  <select
                    value={accountCurrency}
                    onChange={e => setAccountCurrency(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                  </select>
                </div>

                {/* Instrument */}
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                    Instrument
                  </label>
                  <select
                    value={selectedSymbol}
                    onChange={e => handleInstrumentChange(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                  >
                    {INSTRUMENTS.map(inst => (
                      <option key={inst.symbol} value={inst.symbol}>
                        {inst.symbol} ({inst.name})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Inputs depending on Calculator Mode */}
              {(activeCalc === 'pip' || activeCalc === 'margin' || activeCalc === 'pnl') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Volume / Lot Size
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={lotSize}
                      onChange={e => setLotSize(parseFloat(e.target.value) || 0.01)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    />
                    <span className="text-[10px] text-[#77736C] font-mono mt-1 block">
                      Contract Size: {selectedInst.contractSize.toLocaleString()} units
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Account Leverage
                    </label>
                    <select
                      value={leverage}
                      onChange={e => setLeverage(parseInt(e.target.value))}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    >
                      <option value={20}>1:20 (5.00% Margin)</option>
                      <option value={50}>1:50 (2.00% Margin)</option>
                      <option value={100}>1:100 (1.00% Margin)</option>
                      <option value={200}>1:200 (0.50% Margin)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Additional Inputs for P&L or Position Size */}
              {activeCalc === 'position' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Account Balance ({accountCurrency})
                    </label>
                    <input
                      type="number"
                      step="100"
                      value={accountBalance}
                      onChange={e => setAccountBalance(parseFloat(e.target.value) || 1000)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Risk Tolerance (%)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0.1"
                      max="10"
                      value={riskPercent}
                      onChange={e => setRiskPercent(parseFloat(e.target.value) || 1)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    />
                  </div>
                </div>
              )}

              {/* Price Inputs */}
              {(activeCalc === 'pnl' || activeCalc === 'position' || activeCalc === 'margin') && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Entry Price
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={entryPrice}
                      onChange={e => setEntryPrice(parseFloat(e.target.value) || selectedInst.defaultPrice)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Stop Loss Price
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={stopLoss}
                      onChange={e => setStopLoss(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5">
                      Take Profit Price
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={takeProfit}
                      onChange={e => setTakeProfit(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#FBFBF9] border border-[#E7E4DE] rounded-md focus:outline-none focus:border-[#087F78]"
                    />
                  </div>
                </div>
              )}

              {activeCalc === 'pnl' && (
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-semibold text-[#111111]">Order Direction:</span>
                  <button
                    type="button"
                    onClick={() => setDirection('buy')}
                    className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer ${
                      direction === 'buy'
                        ? 'bg-[#0A9F6E] text-white font-bold'
                        : 'bg-[#F3F2EE] text-[#77736C]'
                    }`}
                  >
                    BUY (Long)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDirection('sell')}
                    className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer ${
                      direction === 'sell'
                        ? 'bg-[#E5484D] text-white font-bold'
                        : 'bg-[#F3F2EE] text-[#77736C]'
                    }`}
                  >
                    SELL (Short)
                  </button>
                </div>
              )}
            </div>

            {/* Results Output Column (5 Cols) */}
            <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-xl p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E4DE]">
                <span className="font-semibold font-sans text-sm text-[#111111]">Calculation Results</span>
                <span className="text-[10px] text-[#087F78] uppercase font-bold">{selectedInst.symbol}</span>
              </div>

              {/* Pip Value Display */}
              <div className="p-3 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#77736C] block uppercase">Pip Value ({lotSize} Lots)</span>
                  <span className="text-xl font-bold text-[#087F78]">${pipVal.toFixed(2)}</span>
                </div>
                <div className="text-right text-[10px] text-[#77736C]">
                  <span>Pip Size: {selectedInst.pipSize}</span>
                </div>
              </div>

              {/* Required Margin Display */}
              <div className="p-3 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#77736C] block uppercase">Required Margin (1:{leverage})</span>
                  <span className="text-xl font-bold text-[#111111]">${reqMargin.toLocaleString()}</span>
                </div>
                <div className="text-right text-[10px] text-[#77736C]">
                  <span>Leverage: 1:{leverage}</span>
                </div>
              </div>

              {/* Position Sizing Display */}
              <div className="p-3 bg-white rounded-lg border border-[#E7E4DE] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#77736C] block uppercase">Suggested Sizing (At {riskPercent}% Risk)</span>
                  <span className="text-xl font-bold text-[#111111]">{posCalc.lots} Lots</span>
                </div>
                <div className="text-right text-[10px] text-[#77736C]">
                  <span>Monetary Risk: ${posCalc.monetaryRisk}</span>
                </div>
              </div>

              {/* Potential P&L Display */}
              <div className="p-3 bg-white rounded-lg border border-[#E7E4DE] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#77736C]">Potential Profit:</span>
                  <span className="text-[#0A9F6E] font-bold">+${Math.abs(pnlCalc.potentialProfit).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#77736C]">Potential Risk (Loss):</span>
                  <span className="text-[#E5484D] font-bold">-${Math.abs(pnlCalc.potentialLoss).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-[#E7E4DE]">
                  <span className="text-[#77736C]">Risk : Reward Ratio:</span>
                  <span className="text-[#111111] font-bold">{pnlCalc.riskReward}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={BROKER_CONFIG.tradingTerminalUrl}
                  isExternal
                  variant="primary"
                  fullWidth
                  size="md"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Stage Order in WebTrader
                </Button>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Note */}
          <div className="mt-8 pt-4 border-t border-[#E7E4DE] flex items-start gap-2 text-[11px] text-[#77736C] leading-relaxed">
            <Info className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
            <span>
              Calculation examples may vary based on instrument specifications, account conditions and market prices. All values are displayed for illustrative and educational preparation.
            </span>
          </div>
        </div>

        {/* Bottom CTA Block with Contextual Cross-Link */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-center">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2">
            Execution Specifications
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Review our live execution terms and spread tables.
          </h3>
          <p className="text-xs sm:text-sm text-[#77736C] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Verify benchmark spread schedules, overnight financing formulas, and margin call thresholds before trading.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/trading/conditions"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              View Trading Conditions
            </Button>

            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="outline"
              size="lg"
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
