import { MarketAsset } from '../types/market';

/**
 * =========================================================================
 * DETERMINISTIC DEMO MARKET DATA
 * =========================================================================
 * NOTICE: The data below represents deterministic benchmark mock quotes.
 * =========================================================================
 */

export const MOCK_DATA_LABEL = 'Demo Market Snapshot';

export const MOCK_MARKETS: MarketAsset[] = [
  // CRYPTO
  {
    id: 'btc-usd',
    symbol: 'BTC/USD',
    name: 'Bitcoin',
    category: 'crypto',
    price: 64820.50,
    change24h: 2.84,
    high24h: 65490.00,
    low24h: 63110.20,
    volume24h: '$34.2B',
    spread: 1.2,
    leverage: '1:50',
    sparkline: [63200, 63400, 63100, 63900, 64200, 64100, 64820.50],
    baseCurrency: 'BTC',
    quoteCurrency: 'USD'
  },
  {
    id: 'eth-usd',
    symbol: 'ETH/USD',
    name: 'Ethereum',
    category: 'crypto',
    price: 3495.20,
    change24h: 3.12,
    high24h: 3540.00,
    low24h: 3380.50,
    volume24h: '$16.8B',
    spread: 0.8,
    leverage: '1:50',
    sparkline: [3385, 3410, 3390, 3440, 3460, 3450, 3495.20],
    baseCurrency: 'ETH',
    quoteCurrency: 'USD'
  },
  {
    id: 'sol-usd',
    symbol: 'SOL/USD',
    name: 'Solana',
    category: 'crypto',
    price: 152.40,
    change24h: 5.48,
    high24h: 156.20,
    low24h: 144.10,
    volume24h: '$4.1B',
    spread: 0.15,
    leverage: '1:20',
    sparkline: [144.5, 146.0, 148.2, 147.0, 150.5, 149.8, 152.40],
    baseCurrency: 'SOL',
    quoteCurrency: 'USD'
  },
  {
    id: 'bnb-usd',
    symbol: 'BNB/USD',
    name: 'BNB',
    category: 'crypto',
    price: 588.60,
    change24h: -0.82,
    high24h: 596.00,
    low24h: 584.10,
    volume24h: '$1.2B',
    spread: 0.40,
    leverage: '1:20',
    sparkline: [594.0, 592.5, 595.0, 590.2, 587.4, 589.0, 588.60],
    baseCurrency: 'BNB',
    quoteCurrency: 'USD'
  },
  {
    id: 'xrp-usd',
    symbol: 'XRP/USD',
    name: 'Ripple',
    category: 'crypto',
    price: 0.5890,
    change24h: 1.45,
    high24h: 0.6010,
    low24h: 0.5780,
    volume24h: '$950M',
    spread: 0.0003,
    leverage: '1:20',
    sparkline: [0.579, 0.582, 0.585, 0.581, 0.586, 0.587, 0.5890],
    baseCurrency: 'XRP',
    quoteCurrency: 'USD'
  },
  {
    id: 'doge-usd',
    symbol: 'DOGE/USD',
    name: 'Dogecoin',
    category: 'crypto',
    price: 0.1245,
    change24h: -2.14,
    high24h: 0.1290,
    low24h: 0.1210,
    volume24h: '$840M',
    spread: 0.0004,
    leverage: '1:20',
    sparkline: [0.1275, 0.1280, 0.1260, 0.1250, 0.1230, 0.1240, 0.1245],
    baseCurrency: 'DOGE',
    quoteCurrency: 'USD'
  },
  {
    id: 'ada-usd',
    symbol: 'ADA/USD',
    name: 'Cardano',
    category: 'crypto',
    price: 0.3840,
    change24h: 1.15,
    high24h: 0.3920,
    low24h: 0.3750,
    volume24h: '$410M',
    spread: 0.0004,
    leverage: '1:20',
    sparkline: [0.378, 0.380, 0.379, 0.382, 0.385, 0.383, 0.3840],
    baseCurrency: 'ADA',
    quoteCurrency: 'USD'
  },
  {
    id: 'avax-usd',
    symbol: 'AVAX/USD',
    name: 'Avalanche',
    category: 'crypto',
    price: 28.75,
    change24h: 3.42,
    high24h: 29.50,
    low24h: 27.60,
    volume24h: '$380M',
    spread: 0.08,
    leverage: '1:20',
    sparkline: [27.8, 28.1, 27.9, 28.4, 28.9, 28.5, 28.75],
    baseCurrency: 'AVAX',
    quoteCurrency: 'USD'
  },
  {
    id: 'link-usd',
    symbol: 'LINK/USD',
    name: 'Chainlink',
    category: 'crypto',
    price: 12.15,
    change24h: 0.95,
    high24h: 12.45,
    low24h: 11.90,
    volume24h: '$260M',
    spread: 0.04,
    leverage: '1:20',
    sparkline: [11.95, 12.05, 12.00, 12.18, 12.25, 12.10, 12.15],
    baseCurrency: 'LINK',
    quoteCurrency: 'USD'
  },
  {
    id: 'dot-usd',
    symbol: 'DOT/USD',
    name: 'Polkadot',
    category: 'crypto',
    price: 4.62,
    change24h: -1.05,
    high24h: 4.75,
    low24h: 4.55,
    volume24h: '$190M',
    spread: 0.02,
    leverage: '1:20',
    sparkline: [4.70, 4.68, 4.72, 4.65, 4.60, 4.64, 4.62],
    baseCurrency: 'DOT',
    quoteCurrency: 'USD'
  },

  // METALS
  {
    id: 'xau-usd',
    symbol: 'XAU/USD',
    name: 'Spot Gold',
    category: 'metals',
    price: 2658.40,
    change24h: 0.74,
    high24h: 2664.20,
    low24h: 2638.10,
    volume24h: '$42.1B',
    spread: 0.12,
    leverage: '1:100',
    sparkline: [2640, 2645, 2642, 2650, 2655, 2652, 2658.40],
    baseCurrency: 'XAU',
    quoteCurrency: 'USD'
  },
  {
    id: 'xag-usd',
    symbol: 'XAG/USD',
    name: 'Spot Silver',
    category: 'metals',
    price: 31.84,
    change24h: 1.88,
    high24h: 32.10,
    low24h: 31.20,
    volume24h: '$8.4B',
    spread: 0.015,
    leverage: '1:100',
    sparkline: [31.25, 31.40, 31.35, 31.60, 31.70, 31.75, 31.84],
    baseCurrency: 'XAG',
    quoteCurrency: 'USD'
  },
  {
    id: 'xpt-usd',
    symbol: 'XPT/USD',
    name: 'Spot Platinum',
    category: 'metals',
    price: 994.50,
    change24h: -0.42,
    high24h: 1005.00,
    low24h: 988.20,
    volume24h: '$1.1B',
    spread: 0.85,
    leverage: '1:50',
    sparkline: [998, 1002, 999, 995, 992, 993, 994.50],
    baseCurrency: 'XPT',
    quoteCurrency: 'USD'
  },
  {
    id: 'xpd-usd',
    symbol: 'XPD/USD',
    name: 'Spot Palladium',
    category: 'metals',
    price: 1042.80,
    change24h: -0.95,
    high24h: 1058.00,
    low24h: 1035.00,
    volume24h: '$680M',
    spread: 1.40,
    leverage: '1:50',
    sparkline: [1050, 1055, 1048, 1040, 1038, 1045, 1042.80],
    baseCurrency: 'XPD',
    quoteCurrency: 'USD'
  },

  // FOREX
  {
    id: 'eur-usd',
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    category: 'forex',
    price: 1.0874,
    change24h: -0.22,
    high24h: 1.0910,
    low24h: 1.0855,
    volume24h: '$120.5B',
    spread: 0.2,
    leverage: '1:100',
    sparkline: [1.0895, 1.0902, 1.0888, 1.0875, 1.0862, 1.0868, 1.0874],
    baseCurrency: 'EUR',
    quoteCurrency: 'USD'
  },
  {
    id: 'gbp-usd',
    symbol: 'GBP/USD',
    name: 'British Pound / USD',
    category: 'forex',
    price: 1.3045,
    change24h: 0.38,
    high24h: 1.3080,
    low24h: 1.2995,
    volume24h: '$84.2B',
    spread: 0.3,
    leverage: '1:100',
    sparkline: [1.3005, 1.3015, 1.3030, 1.3025, 1.3050, 1.3038, 1.3045],
    baseCurrency: 'GBP',
    quoteCurrency: 'USD'
  },
  {
    id: 'usd-jpy',
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    category: 'forex',
    price: 149.65,
    change24h: 0.65,
    high24h: 150.12,
    low24h: 148.80,
    volume24h: '$95.0B',
    spread: 0.3,
    leverage: '1:100',
    sparkline: [148.9, 149.1, 149.4, 149.3, 149.8, 149.5, 149.65],
    baseCurrency: 'USD',
    quoteCurrency: 'JPY'
  },
  {
    id: 'usd-chf',
    symbol: 'USD/CHF',
    name: 'US Dollar / Swiss Franc',
    category: 'forex',
    price: 0.8640,
    change24h: 0.18,
    high24h: 0.8665,
    low24h: 0.8615,
    volume24h: '$28.4B',
    spread: 0.3,
    leverage: '1:100',
    sparkline: [0.8625, 0.8630, 0.8635, 0.8632, 0.8645, 0.8638, 0.8640],
    baseCurrency: 'USD',
    quoteCurrency: 'CHF'
  },
  {
    id: 'aud-usd',
    symbol: 'AUD/USD',
    name: 'Australian Dollar / USD',
    category: 'forex',
    price: 0.6712,
    change24h: -0.45,
    high24h: 0.6750,
    low24h: 0.6690,
    volume24h: '$32.1B',
    spread: 0.4,
    leverage: '1:100',
    sparkline: [0.6745, 0.6738, 0.6720, 0.6710, 0.6705, 0.6708, 0.6712],
    baseCurrency: 'AUD',
    quoteCurrency: 'USD'
  },
  {
    id: 'usd-cad',
    symbol: 'USD/CAD',
    name: 'US Dollar / Canadian Dollar',
    category: 'forex',
    price: 1.3785,
    change24h: -0.15,
    high24h: 1.3820,
    low24h: 1.3760,
    volume24h: '$24.6B',
    spread: 0.4,
    leverage: '1:100',
    sparkline: [1.3805, 1.3810, 1.3795, 1.3788, 1.3775, 1.3780, 1.3785],
    baseCurrency: 'USD',
    quoteCurrency: 'CAD'
  },
  {
    id: 'nzd-usd',
    symbol: 'NZD/USD',
    name: 'New Zealand Dollar / USD',
    category: 'forex',
    price: 0.6120,
    change24h: -0.32,
    high24h: 0.6155,
    low24h: 0.6095,
    volume24h: '$16.2B',
    spread: 0.5,
    leverage: '1:100',
    sparkline: [0.6145, 0.6150, 0.6135, 0.6125, 0.6110, 0.6118, 0.6120],
    baseCurrency: 'NZD',
    quoteCurrency: 'USD'
  },
  {
    id: 'eur-gbp',
    symbol: 'EUR/GBP',
    name: 'Euro / British Pound',
    category: 'forex',
    price: 0.8335,
    change24h: -0.12,
    high24h: 0.8360,
    low24h: 0.8315,
    volume24h: '$21.8B',
    spread: 0.4,
    leverage: '1:100',
    sparkline: [0.8350, 0.8355, 0.8340, 0.8332, 0.8328, 0.8330, 0.8335],
    baseCurrency: 'EUR',
    quoteCurrency: 'GBP'
  },
  {
    id: 'eur-jpy',
    symbol: 'EUR/JPY',
    name: 'Euro / Japanese Yen',
    category: 'forex',
    price: 162.75,
    change24h: 0.42,
    high24h: 163.20,
    low24h: 162.10,
    volume24h: '$36.5B',
    spread: 0.5,
    leverage: '1:100',
    sparkline: [162.1, 162.3, 162.5, 162.4, 162.9, 162.6, 162.75],
    baseCurrency: 'EUR',
    quoteCurrency: 'JPY'
  },
  {
    id: 'gbp-jpy',
    symbol: 'GBP/JPY',
    name: 'British Pound / Japanese Yen',
    category: 'forex',
    price: 195.20,
    change24h: 0.78,
    high24h: 195.80,
    low24h: 194.30,
    volume24h: '$44.1B',
    spread: 0.6,
    leverage: '1:100',
    sparkline: [194.2, 194.5, 194.9, 194.7, 195.4, 195.0, 195.20],
    baseCurrency: 'GBP',
    quoteCurrency: 'JPY'
  },

  // INDICES
  {
    id: 'us-sp500',
    symbol: 'US500',
    name: 'S&P 500 Index Cash',
    category: 'indices',
    price: 5762.50,
    change24h: 0.82,
    high24h: 5780.00,
    low24h: 5725.10,
    volume24h: '$48.2B',
    spread: 0.6,
    leverage: '1:50',
    sparkline: [5730, 5740, 5735, 5752, 5765, 5758, 5762.50],
    baseCurrency: 'USD',
    quoteCurrency: 'INDEX'
  },
  {
    id: 'us-30',
    symbol: 'US30',
    name: 'Dow Jones 30 Index Cash',
    category: 'indices',
    price: 42350.00,
    change24h: 0.54,
    high24h: 42480.00,
    low24h: 42120.00,
    volume24h: '$31.5B',
    spread: 1.8,
    leverage: '1:50',
    sparkline: [42150, 42200, 42180, 42290, 42380, 42320, 42350.00],
    baseCurrency: 'USD',
    quoteCurrency: 'INDEX'
  },
  {
    id: 'us-tech100',
    symbol: 'NAS100',
    name: 'Nasdaq 100 Index Cash',
    category: 'indices',
    price: 20110.80,
    change24h: 1.25,
    high24h: 20220.00,
    low24h: 19940.00,
    volume24h: '$56.4B',
    spread: 1.2,
    leverage: '1:50',
    sparkline: [19960, 20010, 19990, 20080, 20130, 20095, 20110.80],
    baseCurrency: 'USD',
    quoteCurrency: 'INDEX'
  },
  {
    id: 'uk-100',
    symbol: 'UK100',
    name: 'FTSE 100 Index',
    category: 'indices',
    price: 8280.20,
    change24h: 0.14,
    high24h: 8310.00,
    low24h: 8250.00,
    volume24h: '$12.1B',
    spread: 1.2,
    leverage: '1:50',
    sparkline: [8265, 8272, 8268, 8285, 8290, 8278, 8280.20],
    baseCurrency: 'GBP',
    quoteCurrency: 'INDEX'
  },
  {
    id: 'ger-40',
    symbol: 'GER40',
    name: 'DAX 40 Index',
    category: 'indices',
    price: 19445.00,
    change24h: -0.35,
    high24h: 19560.00,
    low24h: 19390.00,
    volume24h: '$18.7B',
    spread: 1.5,
    leverage: '1:50',
    sparkline: [19520, 19540, 19480, 19430, 19410, 19435, 19445.00],
    baseCurrency: 'EUR',
    quoteCurrency: 'INDEX'
  },
  {
    id: 'jpn-225',
    symbol: 'JPN225',
    name: 'Nikkei 225 Index',
    category: 'indices',
    price: 38850.00,
    change24h: 1.65,
    high24h: 39100.00,
    low24h: 38420.00,
    volume24h: '$22.8B',
    spread: 6.0,
    leverage: '1:50',
    sparkline: [38450, 38580, 38520, 38740, 38920, 38810, 38850.00],
    baseCurrency: 'JPY',
    quoteCurrency: 'INDEX'
  },

  // COMMODITIES
  {
    id: 'wti-oil',
    symbol: 'WTI',
    name: 'Crude Oil WTI',
    category: 'commodities',
    price: 72.45,
    change24h: -1.85,
    high24h: 74.20,
    low24h: 71.90,
    volume24h: '$26.8B',
    spread: 0.04,
    leverage: '1:50',
    sparkline: [73.9, 74.1, 73.5, 72.8, 72.2, 72.3, 72.45],
    baseCurrency: 'USD',
    quoteCurrency: 'BBL'
  },
  {
    id: 'brent-oil',
    symbol: 'Brent',
    name: 'Brent Crude Oil',
    category: 'commodities',
    price: 76.10,
    change24h: -1.62,
    high24h: 77.80,
    low24h: 75.60,
    volume24h: '$21.4B',
    spread: 0.04,
    leverage: '1:50',
    sparkline: [77.5, 77.7, 77.0, 76.4, 75.9, 76.0, 76.10],
    baseCurrency: 'USD',
    quoteCurrency: 'BBL'
  },
  {
    id: 'nat-gas',
    symbol: 'Natural Gas',
    name: 'Natural Gas Cash',
    category: 'commodities',
    price: 2.895,
    change24h: 4.22,
    high24h: 2.940,
    low24h: 2.760,
    volume24h: '$8.2B',
    spread: 0.005,
    leverage: '1:20',
    sparkline: [2.78, 2.81, 2.79, 2.85, 2.88, 2.87, 2.895],
    baseCurrency: 'USD',
    quoteCurrency: 'MMBtu'
  },
  {
    id: 'copper',
    symbol: 'Copper',
    name: 'High Grade Copper',
    category: 'commodities',
    price: 4.462,
    change24h: 0.95,
    high24h: 4.510,
    low24h: 4.410,
    volume24h: '$4.7B',
    spread: 0.004,
    leverage: '1:20',
    sparkline: [4.42, 4.43, 4.41, 4.44, 4.47, 4.45, 4.462],
    baseCurrency: 'USD',
    quoteCurrency: 'LBS'
  },
  {
    id: 'corn',
    symbol: 'Corn',
    name: 'US Corn Futures Cash',
    category: 'commodities',
    price: 412.50,
    change24h: 0.48,
    high24h: 416.00,
    low24h: 409.00,
    volume24h: '$1.8B',
    spread: 0.25,
    leverage: '1:20',
    sparkline: [410, 411, 409.5, 413, 414, 412, 412.50],
    baseCurrency: 'USD',
    quoteCurrency: 'BU'
  },
  {
    id: 'wheat',
    symbol: 'Wheat',
    name: 'US Wheat Futures Cash',
    category: 'commodities',
    price: 582.00,
    change24h: -0.75,
    high24h: 589.00,
    low24h: 578.50,
    volume24h: '$2.1B',
    spread: 0.50,
    leverage: '1:20',
    sparkline: [586, 588, 584, 581, 580, 583, 582.00],
    baseCurrency: 'USD',
    quoteCurrency: 'BU'
  }
];

export const FEATURED_MARKET_SYMBOLS = [
  'BTC/USD',
  'ETH/USD',
  'SOL/USD',
  'BNB/USD',
  'DOGE/USD',
  'XAU/USD'
];

export function getFeaturedMarkets(): MarketAsset[] {
  return FEATURED_MARKET_SYMBOLS.map(symbol => {
    const found = MOCK_MARKETS.find(m => m.symbol === symbol);
    if (!found) throw new Error(`Missing featured market: ${symbol}`);
    return found;
  });
}

export function filterMarkets(
  items: MarketAsset[],
  tab: 'all' | 'crypto' | 'forex' | 'indices' | 'commodities' | 'metals' | 'gainers' | 'losers',
  searchQuery: string = ''
): MarketAsset[] {
  let filtered = [...items];

  if (tab === 'gainers') {
    filtered = filtered.filter(m => m.change24h > 0).sort((a, b) => b.change24h - a.change24h);
  } else if (tab === 'losers') {
    filtered = filtered.filter(m => m.change24h < 0).sort((a, b) => a.change24h - b.change24h);
  } else if (tab !== 'all') {
    filtered = filtered.filter(m => m.category === tab);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      m => m.symbol.toLowerCase().includes(q) || m.name.toLowerCase().includes(q)
    );
  }

  return filtered;
}
