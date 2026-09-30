import { PlatformConfig, TradingAccountTier } from '../types/market';

/**
 * Global Configuration for RegearFX Public Broker Site
 * 
 * IMPORTANT: Authentication, Client Portals, and Trading Engines exist
 * as external systems. These URLs link to those separate deployments.
 */
export const BRAND_NAME =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BRAND_NAME) ||
  ((import.meta as any).env?.VITE_BRAND_NAME as string) ||
  'RegearFX';

/**
 * Global Configuration for RegearFX Public Broker Site
 * 
 * IMPORTANT: Authentication, Client Portals, and Trading Engines exist
 * as external systems. These URLs link to those separate deployments.
 */
export const BROKER_CONFIG = {
  brandName: BRAND_NAME,
  legalEntity: `${BRAND_NAME} Brokerage Services`,
  tagline: "Trade the world's markets with confidence.",
  crmLoginUrl:
    ((import.meta as any).env?.VITE_CRM_LOGIN_URL as string) ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_CRM_LOGIN_URL) ||
    'https://portal.regearfx.com/login',
  crmRegisterUrl:
    ((import.meta as any).env?.VITE_CRM_REGISTER_URL as string) ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_CRM_REGISTER_URL) ||
    'https://portal.regearfx.com/register',
  tradingTerminalUrl:
    ((import.meta as any).env?.VITE_TRADING_TERMINAL_URL as string) ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_TRADING_TERMINAL_URL) ||
    'https://trade.regearfx.com/terminal',
  supportEmail: 'support@regearfx.com',
  supportPhone: '+44 20 7946 0910',
  operatingHours: '24/5 Monday 00:00 GMT - Friday 23:59 GMT',
};

/**
 * Configurable Platform Matrix.
 * Only platforms with `enabled: true` are presented as supported across the site.
 */
export const SUPPORTED_PLATFORMS: PlatformConfig[] = [
  {
    id: 'webtrader',
    name: `${BRAND_NAME} WebTrader`,
    shortDesc: 'Zero-install browser execution terminal built for latency-sensitive execution.',
    longDesc: 'Access real-time Level 2 market depth, precision order staging, custom layouts, and server-side alerts directly within Chromium, Safari, or Firefox.',
    enabled: true,
    badge: 'Proprietary Web',
    features: ['Level 2 Market Depth', 'Multi-chart Staging', 'Server-side Trailing Stops', '1-Click Execution', 'Custom Layout Workspaces'],
    supportedDevices: ['Desktop Chrome', 'Safari', 'Firefox', 'Edge'],
    ctaText: 'Launch WebTrader'
  },
  {
    id: 'mobile',
    name: `${BRAND_NAME} Mobile Trader`,
    shortDesc: 'Institutional trading suite engineered for touch devices on iOS and Android.',
    longDesc: 'Real-time push pricing, biometric authorization, native mobile charts, and one-thumb order modification designed for traders on the move.',
    enabled: true,
    badge: 'iOS & Android',
    features: ['Biometric Security', 'Native Gesture Charting', 'Real-time Margin Alerts', 'Full Order History', 'Haptic Order Feedback'],
    supportedDevices: ['Apple iOS 15+', 'Google Android 12+'],
    ctaText: 'Get Mobile App'
  },
  {
    id: 'tradingview',
    name: 'TradingView Integration',
    shortDesc: `Trade directly from TradingView charts connected to ${BRAND_NAME} liquidity.`,
    longDesc: 'Seamlessly link your TradingView account to execute spot FX, crypto derivatives, and commodities with our tight institutional spreads.',
    enabled: true,
    badge: 'Direct Broker API',
    features: ['100+ Indicators', 'Pine Script Alerts', 'Direct Broker Connect', 'Synchronized Watchlists', 'Volume Profile Depth'],
    supportedDevices: ['Web', 'Desktop App', 'Tablet'],
    ctaText: 'Connect TradingView'
  },
  {
    id: 'mt5',
    name: 'MetaTrader 5 (MT5)',
    shortDesc: 'Next-generation multi-asset trading platform with enhanced MQL5 algorithmic capabilities.',
    longDesc: 'Deploy automated Expert Advisors, utilize 21 distinct timeframes, economic calendar integration, and multi-threaded strategy backtesting.',
    enabled: true,
    badge: 'Algorithmic Standard',
    features: ['MQL5 Algo IDE', '21 Timeframes', 'Depth of Market (DOM)', 'Multi-currency Strategy Tester', 'Built-in Economic Calendar'],
    supportedDevices: ['Windows', 'macOS', 'iOS', 'Android'],
    ctaText: 'Download MT5'
  },
  {
    id: 'mt4',
    name: 'MetaTrader 4 (MT4)',
    shortDesc: 'The established global benchmark for algorithmic FX trading and custom MQL4 indicators.',
    longDesc: 'Lightweight, ultra-reliable execution environment trusted worldwide for automated trading systems and EA execution.',
    enabled: true,
    badge: 'Legacy FX Standard',
    features: ['Custom MQL4 EAs', '30 Built-in Indicators', '9 Timeframes', 'Automated Execution', 'Trailing Stops'],
    supportedDevices: ['Windows', 'iOS', 'Android'],
    ctaText: 'Download MT4'
  }
];

export const ACCOUNT_TIERS: TradingAccountTier[] = [
  {
    id: 'standard',
    name: 'Standard Account',
    description: 'Designed for retail traders seeking zero-commission simplicity with tight variable spreads.',
    minDeposit: '$100',
    spreadFrom: '0.8 pips',
    commission: '$0 / round turn',
    leverage: 'Up to 1:100',
    execution: 'STP Straight-Through',
    platforms: [`${BRAND_NAME} WebTrader`, 'Mobile', 'MT5', 'TradingView']
  },
  {
    id: 'raw-spread',
    name: 'Raw Spread Account',
    description: 'Direct Tier-1 bank and non-bank liquidity access with institutional spreads from 0.0 pips.',
    minDeposit: '$500',
    spreadFrom: '0.0 pips',
    commission: '$3.00 per standard lot',
    leverage: 'Up to 1:200',
    execution: 'Direct ECN / DMA',
    platforms: [`${BRAND_NAME} WebTrader`, 'Mobile', 'MT5', 'MT4', 'TradingView'],
    recommended: true
  },
  {
    id: 'institutional',
    name: 'Institutional Pro',
    description: 'Bespoke liquidity aggregation, FIX 4.4 API connectivity, and dedicated relationship manager.',
    minDeposit: '$25,000',
    spreadFrom: '0.0 pips',
    commission: 'Volume-tiered rebates',
    leverage: 'Custom margin schedules',
    execution: 'Direct Cross-Connect NY4 / LD4',
    platforms: ['FIX 4.4 API', `${BRAND_NAME} WebTrader`, 'MT5', 'TradingView']
  }
];
