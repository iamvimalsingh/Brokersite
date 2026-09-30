import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Binary, GitBranch, BarChart3, Activity, ArrowRight } from 'lucide-react';

export const QuantSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F3F2EE] border-b border-[#E7E4DE]" id="quantitative-tools">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              Quantitative Analytics
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Turn market data into better decisions.
            </h2>
            <p className="text-sm sm:text-base text-[#77736C] leading-relaxed mb-8">
              Explore quantitative tools designed to help traders study price behavior, volatility, correlation and market structure.
            </p>

            {/* 4 Quantitative Disciplines */}
            <div className="space-y-4 mb-8 text-xs text-[#111111]">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#E7E4DE]">
                <div className="p-1.5 rounded-sm bg-[#DDEDEA] text-[#087F78] shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm">Cross-Asset Correlation:</span>
                  <p className="text-[#77736C] mt-0.5">
                    Study statistical correlation matrices across foreign exchange pairs, precious metals, and digital assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#E7E4DE]">
                <div className="p-1.5 rounded-sm bg-[#DDEDEA] text-[#087F78] shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm">Volatility Distribution:</span>
                  <p className="text-[#77736C] mt-0.5">
                    Evaluate average true range (ATR), historical volatility spreads, and session breakout dispersion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#E7E4DE]">
                <div className="p-1.5 rounded-sm bg-[#DDEDEA] text-[#087F78] shrink-0 mt-0.5">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm">Price Behaviour:</span>
                  <p className="text-[#77736C] mt-0.5">
                    Model price distributions around major macroeconomic sessions and high-liquidity order flow bands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#E7E4DE]">
                <div className="p-1.5 rounded-sm bg-[#DDEDEA] text-[#087F78] shrink-0 mt-0.5">
                  <Binary className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm">Market Statistics:</span>
                  <p className="text-[#77736C] mt-0.5">
                    Analyze descriptive metrics, spread behavior across rollovers, and historical market depth profiles.
                  </p>
                </div>
              </div>
            </div>

            <Button
              href="/tools/quant"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Explore Quantitative Tools
            </Button>
          </div>

          {/* Right Column: Abstract Quantitative Visualization */}
          <div className="lg:col-span-6 bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-7 shadow-xs">
            {/* Header: Correlation Matrix Overview */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E7E4DE] text-xs">
              <div>
                <span className="font-semibold text-[#111111] font-mono block">
                  Asset Correlation Matrix
                </span>
                <span className="text-[10px] text-[#77736C]">Statistical Rolling Window (30D)</span>
              </div>
              <span className="text-[11px] font-mono text-[#087F78] bg-[#DDEDEA] px-2 py-0.5 rounded-xs font-semibold">
                Pearson r
              </span>
            </div>

            {/* Correlation Matrix Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-center text-xs font-mono">
                <thead>
                  <tr className="text-[#77736C] border-b border-[#E7E4DE] text-[10px]">
                    <th className="py-2 text-left">PAIR</th>
                    <th className="py-2">EUR/USD</th>
                    <th className="py-2">GBP/USD</th>
                    <th className="py-2">USD/JPY</th>
                    <th className="py-2">XAU/USD</th>
                    <th className="py-2">BTC/USD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E4DE] text-[11px]">
                  <tr>
                    <td className="py-2.5 text-left font-semibold text-[#111111]">EUR/USD</td>
                    <td className="py-2.5 bg-[#DDEDEA]/50 text-[#087F78] font-bold">1.00</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.84</td>
                    <td className="py-2.5 text-[#E5484D]">-0.62</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.48</td>
                    <td className="py-2.5 text-[#77736C]">+0.22</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-left font-semibold text-[#111111]">GBP/USD</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.84</td>
                    <td className="py-2.5 bg-[#DDEDEA]/50 text-[#087F78] font-bold">1.00</td>
                    <td className="py-2.5 text-[#E5484D]">-0.55</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.41</td>
                    <td className="py-2.5 text-[#77736C]">+0.19</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-left font-semibold text-[#111111]">USD/JPY</td>
                    <td className="py-2.5 text-[#E5484D]">-0.62</td>
                    <td className="py-2.5 text-[#E5484D]">-0.55</td>
                    <td className="py-2.5 bg-[#DDEDEA]/50 text-[#087F78] font-bold">1.00</td>
                    <td className="py-2.5 text-[#E5484D]">-0.38</td>
                    <td className="py-2.5 text-[#77736C]">-0.12</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-left font-semibold text-[#111111]">XAU/USD</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.48</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.41</td>
                    <td className="py-2.5 text-[#E5484D]">-0.38</td>
                    <td className="py-2.5 bg-[#DDEDEA]/50 text-[#087F78] font-bold">1.00</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.34</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-left font-semibold text-[#111111]">BTC/USD</td>
                    <td className="py-2.5 text-[#77736C]">+0.22</td>
                    <td className="py-2.5 text-[#77736C]">+0.19</td>
                    <td className="py-2.5 text-[#77736C]">-0.12</td>
                    <td className="py-2.5 text-[#0A9F6E]">+0.34</td>
                    <td className="py-2.5 bg-[#DDEDEA]/50 text-[#087F78] font-bold">1.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Volatility Bars & Small Chart Points */}
            <div className="space-y-3 pt-3 border-t border-[#E7E4DE]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#111111] font-mono">Relative Volatility Index</span>
                <span className="text-[11px] text-[#77736C] font-mono">Standard Deviations</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1 text-[#77736C]">
                    <span>BTC/USD Volatility</span>
                    <span className="text-[#111111] font-semibold">High (2.4σ)</span>
                  </div>
                  <div className="w-full bg-[#E7E4DE] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#087F78] h-full rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1 text-[#77736C]">
                    <span>EUR/USD Volatility</span>
                    <span className="text-[#111111] font-semibold">Moderate (0.9σ)</span>
                  </div>
                  <div className="w-full bg-[#E7E4DE] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#087F78] h-full rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E7E4DE] text-[10px] text-[#77736C] flex items-center justify-between">
              <span>*Analytical tools provided for research. No profit guarantees.</span>
              <span className="font-mono">Reference Model</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
