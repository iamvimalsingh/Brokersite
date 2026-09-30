export type MarketCategory = 'forex' | 'crypto' | 'indices' | 'commodities' | 'metals';

export interface MarketAsset {
  id: string;
  symbol: string;
  name: string;
  category: MarketCategory;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: string;
  spread: number; // in pips or points
  leverage: string;
  sparkline: number[];
  baseCurrency?: string;
  quoteCurrency?: string;
}

export interface PlatformConfig {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  enabled: boolean;
  badge?: string;
  features: string[];
  supportedDevices: string[];
  ctaText: string;
}

export interface TradingAccountTier {
  id: string;
  name: string;
  description: string;
  minDeposit: string;
  spreadFrom: string;
  commission: string;
  leverage: string;
  execution: string;
  platforms: string[];
  recommended?: boolean;
}
