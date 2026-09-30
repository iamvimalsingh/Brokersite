import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SUPPORTED_PLATFORMS, BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import { Monitor, Smartphone, Check, ArrowUpRight, AlertCircle } from 'lucide-react';

export interface PlatformsViewProps {
  platformId?: 'overview' | 'webtrader' | 'mobile' | 'mt4' | 'mt5' | 'tradingview' | 'compare';
}

export const PlatformsView: React.FC<PlatformsViewProps> = ({ platformId = 'overview' }) => {
  const enabledPlatforms = SUPPORTED_PLATFORMS.filter(p => p.enabled);

  const tabs = [
    { id: 'overview', label: 'All Platforms', path: '/platforms' },
    { id: 'webtrader', label: 'WebTrader', path: '/platforms/webtrader' },
    { id: 'mobile', label: 'Mobile Trading', path: '/platforms/mobile' },
    { id: 'mt5', label: 'MetaTrader 5', path: '/platforms/mt5' },
    { id: 'mt4', label: 'MetaTrader 4', path: '/platforms/mt4' },
    { id: 'tradingview', label: 'TradingView', path: '/platforms/tradingview' },
    { id: 'compare', label: 'Compare Platforms', path: '/platforms/compare' }
  ];

  const targetPlatform = SUPPORTED_PLATFORMS.find(p => p.id === platformId);
  const isEnabled = targetPlatform ? targetPlatform.enabled : true;

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            Execution Ecosystem
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            {targetPlatform ? targetPlatform.name : 'Trading Platforms & Interfaces'}
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed">
            {targetPlatform
              ? targetPlatform.longDesc
              : 'Choose between browser terminals, mobile applications, and platform options designed for clear market access.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-10 border-b border-[#E7E4DE]">
          {tabs.map(tab => {
            const isActive = platformId === tab.id;
            return (
              <Link
                key={tab.id}
                href={tab.path}
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

        {/* VIEW 1: SPECIFIC PLATFORM DETAIL (WHEN ENABLED) */}
        {targetPlatform && platformId !== 'overview' && platformId !== 'compare' && isEnabled && (
          <div className="space-y-12">
            <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-1 rounded-xs font-semibold">
                    {targetPlatform.badge}
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-normal text-[#111111] mt-3 mb-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {targetPlatform.name}
                  </h2>
                  <p className="text-sm text-[#77736C] leading-relaxed mb-6">
                    {targetPlatform.longDesc}
                  </p>

                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#111111] mb-3">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {targetPlatform.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                        <Check className="w-4 h-4 text-[#087F78] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      href={
                        targetPlatform.id === 'webtrader'
                          ? BROKER_CONFIG.tradingTerminalUrl
                          : BROKER_CONFIG.crmRegisterUrl
                      }
                      isExternal
                      variant="primary"
                      size="lg"
                      icon={<ArrowUpRight className="w-4 h-4" />}
                    >
                      {targetPlatform.ctaText}
                    </Button>
                    <Button
                      href={BROKER_CONFIG.crmLoginUrl}
                      isExternal
                      variant="outline"
                      size="lg"
                    >
                      Sign In to Account
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg p-6 text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7E4DE]">
                    <span className="text-[#77736C]">Supported Hardware:</span>
                    <span className="font-mono text-[#111111] font-medium">
                      {targetPlatform.supportedDevices.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7E4DE]">
                    <span className="text-[#77736C]">Platform Status:</span>
                    <span className="font-mono text-[#0A9F6E] font-semibold">Active &amp; Supported</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7E4DE]">
                    <span className="text-[#77736C]">Order Staging:</span>
                    <span className="font-medium text-[#111111]">Interactive Web/Touch</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#77736C]">Installation:</span>
                    <span className="font-medium text-[#111111]">
                      {targetPlatform.id === 'webtrader' ? 'Zero-Install Browser' : 'App Store Download'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: WHEN PLATFORM IS DISABLED/CONFIGURABLE */}
        {targetPlatform && platformId !== 'overview' && platformId !== 'compare' && !isEnabled && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-8 sm:p-12 shadow-xs text-center max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F3F2EE] border border-[#E7E4DE] text-[#77736C] flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6 text-[#C98A00]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              {targetPlatform.name} Configuration Notice
            </h2>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
              Integration with {targetPlatform.name} is currently subject to custom account configuration and administrator setup. To trade using our supported web terminal, please use {BRAND_NAME} WebTrader.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={BROKER_CONFIG.tradingTerminalUrl} isExternal variant="primary" size="md">
                Launch {BRAND_NAME} WebTrader
              </Button>
              <Button href="/platforms/mobile" variant="outline" size="md">
                View Mobile App
              </Button>
            </div>
          </div>
        )}

        {/* VIEW 3: ALL PLATFORMS DIRECTORY */}
        {platformId === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enabledPlatforms.map(platform => (
              <div
                key={platform.id}
                className="p-6 rounded-lg bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase bg-[#F3F2EE] text-[#77736C] px-2 py-0.5 rounded-xs">
                      {platform.badge}
                    </span>
                    {platform.id === 'mobile' ? (
                      <Smartphone className="w-5 h-5 text-[#087F78]" />
                    ) : (
                      <Monitor className="w-5 h-5 text-[#087F78]" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-[#111111] mb-2">{platform.name}</h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {platform.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {platform.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#087F78] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <Link
                    href={`/platforms/${platform.id}`}
                    className="text-xs font-semibold text-[#087F78] hover:text-[#076C66]"
                  >
                    Specifications &rarr;
                  </Link>
                  <Button
                    href={
                      platform.id === 'webtrader'
                        ? BROKER_CONFIG.tradingTerminalUrl
                        : BROKER_CONFIG.crmRegisterUrl
                    }
                    isExternal
                    variant="primary"
                    size="sm"
                  >
                    Launch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 4: COMPARE PLATFORMS MATRIX */}
        {platformId === 'compare' && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl overflow-hidden shadow-xs">
            <div className="p-6 border-b border-[#E7E4DE]">
              <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Platform Feature Comparison
              </h3>
              <p className="text-xs text-[#77736C] mt-1">
                Overview of supported features across trading environments.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#FBFBF9] border-b border-[#E7E4DE] text-[10px] font-mono uppercase text-[#77736C]">
                    <th className="py-3 px-4">Feature / Capability</th>
                    <th className="py-3 px-4">WebTrader</th>
                    <th className="py-3 px-4">Mobile</th>
                    <th className="py-3 px-4">MetaTrader 5</th>
                    <th className="py-3 px-4">TradingView</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E4DE] text-xs">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#111111]">Current Status</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-semibold">Active &amp; Supported</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-semibold">Active &amp; Supported</td>
                    <td className="py-3 px-4 text-[#77736C]">Configurable</td>
                    <td className="py-3 px-4 text-[#77736C]">Configurable</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#111111]">Installation</td>
                    <td className="py-3 px-4 text-[#087F78] font-medium">Zero-Install Web</td>
                    <td className="py-3 px-4">iOS / Android App</td>
                    <td className="py-3 px-4">Desktop / Mobile</td>
                    <td className="py-3 px-4">Web / Desktop</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#111111]">Market Watchlists</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#111111]">Stop Orders &amp; Take Profit</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                    <td className="py-3 px-4 text-[#0A9F6E] font-bold">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#111111]">Available Timeframes</td>
                    <td className="py-3 px-4">12 Timeframes</td>
                    <td className="py-3 px-4">9 Timeframes</td>
                    <td className="py-3 px-4">21 Timeframes</td>
                    <td className="py-3 px-4">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
