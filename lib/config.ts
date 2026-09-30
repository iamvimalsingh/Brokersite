import { PlatformConfig, TradingAccountTier } from '../types/market';

/**
 * CENTRALIZED BRAND NAME CONFIGURATION
 * Single source of truth for the brand name across the entire application.
 */
export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'RegearFX';

/**
 * EXTERNAL CRM & TRADING APPLICATION INTEGRATION
 * This project only provides public marketing and educational pages.
 * All client onboarding, CRM authentication, and terminal execution
 * link to these external URLs.
 */
export const BROKER_CONFIG = {
  brandName: BRAND_NAME,
  legalEntity: `${BRAND_NAME} Brokerage Services`,
  tagline: "Trade global markets with clarity.",
  crmLoginUrl:
    process.env.NEXT_PUBLIC_CRM_LOGIN_URL ||
    (typeof window !== 'undefined' && (window as any).__ENV?.NEXT_PUBLIC_CRM_LOGIN_URL) ||
    'https://portal.regearfx.com/login',
  crmRegisterUrl:
    process.env.NEXT_PUBLIC_CRM_REGISTER_URL ||
    (typeof window !== 'undefined' && (window as any).__ENV?.NEXT_PUBLIC_CRM_REGISTER_URL) ||
    'https://portal.regearfx.com/register',
  tradingTerminalUrl:
    process.env.NEXT_PUBLIC_TRADING_TERMINAL_URL ||
    (typeof window !== 'undefined' && (window as any).__ENV?.NEXT_PUBLIC_TRADING_TERMINAL_URL) ||
    'https://trade.regearfx.com/terminal',
  supportEmail: 'support@regearfx.com',
  supportPhone: '+44 20 7946 0910',
  operatingHours: '24/5 Monday 00:00 GMT - Friday 23:59 GMT',
};

/**
 * CONFIGURABLE PLATFORM MATRIX
 * Only platforms with `enabled === true` are presented as supported.
 * Unsupported platforms (such as external third-party software unless configured)
 * remain disabled.
 */
export const SUPPORTED_PLATFORMS: PlatformConfig[] = [
  {
    id: 'webtrader',
    name: `${BRAND_NAME} WebTrader`,
    shortDesc: 'Browser-based execution terminal designed for fast access to market charts and order tools.',
    longDesc: 'Access real-time price charts, multiple workspace layouts, and order management directly inside modern web browsers without installation.',
    enabled: true,
    badge: 'Web Terminal',
    features: ['Real-time Charting', 'Multi-Layout Workspaces', 'Custom Watchlists', 'Configurable Stop Orders', 'Market Depth Indicators'],
    supportedDevices: ['Desktop Chrome', 'Safari', 'Firefox', 'Edge'],
    ctaText: 'Launch WebTrader'
  },
  {
    id: 'mobile',
    name: `${BRAND_NAME} Mobile`,
    shortDesc: 'Mobile trading application designed for monitoring markets and managing orders on the go.',
    longDesc: 'Stay connected to market price alerts, interactive mobile charts, and order status updates on iOS and Android devices.',
    enabled: true,
    badge: 'Mobile App',
    features: ['Mobile Price Alerts', 'Interactive Charts', 'Order History Tracking', 'Account Overview', 'Touch-Optimized Controls'],
    supportedDevices: ['Apple iOS 15+', 'Google Android 12+'],
    ctaText: 'Explore Mobile App'
  },
  {
    id: 'tradingview',
    name: 'TradingView',
    shortDesc: 'World-renowned cloud charting platform with institutional-grade technical analysis tools.',
    longDesc: 'Access advanced technical indicators, extensive drawing tools, and community-driven analytics connected directly to your RegearFX execution account.',
    enabled: true,
    badge: 'Advanced Charting',
    features: ['100+ Pre-built Indicators', 'Pine Script Support', 'Synchronized Multi-Charts', 'Custom Drawing Tools', 'Multi-Timeframe Analysis'],
    supportedDevices: ['Web Browser', 'Desktop App', 'iOS', 'Android'],
    ctaText: 'Explore TradingView'
  },
  {
    id: 'mt5',
    name: 'MetaTrader 5 (MT5)',
    shortDesc: 'Next-generation multi-asset trading platform supporting algorithmic workflows and EA strategies.',
    longDesc: 'MetaTrader 5 provides 21 timeframes, integrated strategy testers, market depth indicators, and MQL5 algorithmic scripting environment.',
    enabled: true,
    badge: 'Algorithmic Ready',
    features: ['21 Timeframes', 'MQL5 Scripting', 'Integrated Depth of Market', 'Economic Calendar Integration', 'Multi-Threaded Strategy Tester'],
    supportedDevices: ['Windows', 'macOS', 'iOS', 'Android', 'Web'],
    ctaText: 'Explore MT5'
  },
  {
    id: 'mt4',
    name: 'MetaTrader 4 (MT4)',
    shortDesc: 'The gold standard platform for foreign exchange technical analysis and Expert Advisors.',
    longDesc: 'MetaTrader 4 offers a proven environment for currency pair charting, automated trading with Expert Advisors (EAs), and custom indicator development.',
    enabled: true,
    badge: 'Industry Benchmark',
    features: ['30 Technical Indicators', '9 Timeframes', 'Expert Advisors (EA) Support', 'Fast Order Management', 'Custom Script Library'],
    supportedDevices: ['Windows', 'macOS', 'iOS', 'Android'],
    ctaText: 'Explore MT4'
  }
];

export const ACCOUNT_TIERS: TradingAccountTier[] = [
  {
    id: 'standard',
    name: 'Standard Account',
    description: 'Designed for everyday trading with variable spreads and straightforward pricing.',
    minDeposit: '$100',
    spreadFrom: '0.8 pips',
    commission: 'Included in spread',
    leverage: 'Up to 1:100',
    execution: 'Market Execution',
    platforms: [`${BRAND_NAME} WebTrader`, `${BRAND_NAME} Mobile`]
  },
  {
    id: 'raw-spread',
    name: 'Raw Spread Account',
    description: 'Competitive core market spreads with transparent per-lot commission structure.',
    minDeposit: '$500',
    spreadFrom: '0.0 pips',
    commission: '$3.50 per lot',
    leverage: 'Up to 1:200',
    execution: 'Market Execution',
    platforms: [`${BRAND_NAME} WebTrader`, `${BRAND_NAME} Mobile`],
    recommended: true
  },
  {
    id: 'pro',
    name: 'Pro Account',
    description: 'Higher volume tier with custom account configuration and dedicated relationship support.',
    minDeposit: '$10,000',
    spreadFrom: '0.0 pips',
    commission: 'Volume-tiered schedule',
    leverage: 'Custom margin schedules',
    execution: 'Market Execution',
    platforms: [`${BRAND_NAME} WebTrader`, `${BRAND_NAME} Mobile`]
  }
];
