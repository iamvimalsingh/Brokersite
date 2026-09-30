export interface NavItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavSection {
  id: string;
  label: string;
  href?: string;
  items: NavItem[];
}

export const MAIN_NAVIGATION: NavSection[] = [
  {
    id: 'markets',
    label: 'Markets',
    href: '/markets',
    items: [
      {
        title: 'Forex',
        href: '/markets/forex',
        description: 'Major, minor, and exotic pairs with institutional spreads from 0.0 pips.'
      },
      {
        title: 'Crypto',
        href: '/markets/crypto',
        description: 'Trade leading crypto perpetual derivatives with deep liquidity.'
      },
      {
        title: 'Indices',
        href: '/markets/indices',
        description: 'US, European, and Asian benchmark indices with competitive margin.'
      },
      {
        title: 'Commodities',
        href: '/markets/commodities',
        description: 'WTI, Brent crude, and natural gas with transparent execution.'
      },
      {
        title: 'Metals',
        href: '/markets/metals',
        description: 'Spot Gold (XAU), Silver (XAG), and Platinum with raw liquidity.'
      },
      {
        title: 'All Markets',
        href: '/markets',
        description: 'Explore our complete instrument directory across all global asset classes.'
      }
    ]
  },
  {
    id: 'trading',
    label: 'Trading',
    href: '/trading',
    items: [
      {
        title: 'Trading Accounts',
        href: '/trading/accounts',
        description: 'Standard, Raw Spread, and bespoke Institutional Pro tiers.'
      },
      {
        title: 'Trading Conditions',
        href: '/trading/conditions',
        description: 'Transparent execution policies, order routing, and overnight swaps.'
      },
      {
        title: 'Spreads & Pricing',
        href: '/trading/spreads',
        description: 'Live benchmark spreads and aggregate liquidity depth profiles.'
      },
      {
        title: 'Leverage & Margins',
        href: '/trading/leverage',
        description: 'Flexible tiered leverage structures aligned with asset volatility.'
      },
      {
        title: 'Order Types',
        href: '/trading/order-types',
        description: 'Market, limit, stop, iceberg, and algorithmic execution types.'
      },
      {
        title: 'Risk Management',
        href: '/trading/risk-management',
        description: 'Negative balance protection and automated stop-out protocols.'
      }
    ]
  },
  {
    id: 'platforms',
    label: 'Platforms',
    href: '/platforms',
    items: [
      {
        title: 'WebTrader',
        href: '/platforms/webtrader',
        description: 'Institutional browser terminal with native Level 2 market depth.'
      },
      {
        title: 'Mobile Trading',
        href: '/platforms/mobile',
        description: 'Full-featured iOS and Android execution with real-time push alerts.'
      },
      {
        title: 'MetaTrader 5',
        href: '/platforms/mt5',
        description: 'Multi-asset trading engine with 21 timeframes and MQL5 algorithmic support.'
      },
      {
        title: 'MetaTrader 4',
        href: '/platforms/mt4',
        description: 'The proven global standard for automated Expert Advisor (EA) execution.'
      },
      {
        title: 'TradingView',
        href: '/platforms/tradingview',
        description: 'Connect our deep institutional liquidity directly inside your TradingView charts.'
      },
      {
        title: 'Compare Platforms',
        href: '/platforms/compare',
        description: 'Side-by-side feature matrix to select your ideal trading environment.'
      }
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    href: '/tools',
    items: [
      {
        title: 'Trading Calculators',
        href: '/tools/calculators',
        description: 'Interactive pip value, margin requirements, swap rates, and position size calculators.'
      },
      {
        title: 'Economic Calendar',
        href: '/tools/economic-calendar',
        description: 'Real-time macro announcements, consensus forecasts, and volatility ratings.'
      },
      {
        title: 'Market Analysis',
        href: '/tools/market-analysis',
        description: 'Daily technical levels, institutional order flow commentary, and breakout reports.'
      },
      {
        title: 'Trading Signals',
        href: '/tools/signals',
        description: 'Algorithmic pattern recognition and multi-timeframe divergence alerts.'
      },
      {
        title: 'Quantitative Tools',
        href: '/tools/quant',
        description: 'Systematic statistical models, correlation matrices, and volatility cones.'
      },
      {
        title: 'Algorithmic Trading',
        href: '/tools/algo',
        description: 'FIX 4.4 API connectivity, co-location options, and custom API execution.'
      }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources',
    items: [
      {
        title: 'Trading Academy',
        href: '/resources/academy',
        description: 'Structured educational curricula for foundational and advanced trading concepts.'
      },
      {
        title: 'Market News',
        href: '/resources/news',
        description: 'Curated macro financial dispatches covering central bank policy and geopolitical flows.'
      },
      {
        title: 'In-Depth Analysis',
        href: '/resources/analysis',
        description: 'Weekly thematic outlooks across FX crosses, precious metals, and digital assets.'
      },
      {
        title: 'Trading Guides',
        href: '/resources/guides',
        description: 'Step-by-step methodologies on order execution, price action, and risk budgeting.'
      },
      {
        title: 'Institutional Webinars',
        href: '/resources/webinars',
        description: 'Live interactive market reviews and platform strategy walkthroughs.'
      },
      {
        title: 'Financial Glossary',
        href: '/resources/glossary',
        description: 'Comprehensive A-Z dictionary of institutional and derivative terminology.'
      }
    ]
  },
  {
    id: 'company',
    label: 'Company',
    href: '/company',
    items: [
      {
        title: 'About RegearFX',
        href: '/company/about',
        description: 'Our institutional heritage, liquidity relationships, and core operating principles.'
      },
      {
        title: 'Why Choose Us',
        href: '/company/why-us',
        description: 'Ultra-low latency execution, transparent pricing models, and client fund segregation.'
      },
      {
        title: 'Security Architecture',
        href: '/company/security',
        description: 'Multi-layer infrastructure defense, cold storage protocols, and session monitoring.'
      },
      {
        title: 'Partners & Affiliates',
        href: '/company/partners',
        description: 'Introducing Broker (IB) programs, white-label solutions, and liquidity API access.'
      },
      {
        title: 'Careers',
        href: '/company/careers',
        description: 'Join our quantitative engineering, client service, and risk management teams.'
      },
      {
        title: 'Contact Us',
        href: '/contact',
        description: 'Direct access to institutional desks, global relationship managers, and support.'
      }
    ]
  },
  {
    id: 'help',
    label: 'Help',
    href: '/help',
    items: [
      {
        title: 'Help Center',
        href: '/help',
        description: 'Knowledge base and guides for account onboarding, platform setup, and funding.'
      },
      {
        title: 'Frequently Asked Questions',
        href: '/help/faq',
        description: 'Answers regarding spreads, margin calls, API keys, and trading hours.'
      },
      {
        title: 'Contact Support',
        href: '/help/support',
        description: '24/5 dedicated desk assistance via ticket, direct line, or live assistance.'
      }
    ]
  }
];

export const FOOTER_LINKS = {
  products: [
    { label: 'All Markets', href: '/markets' },
    { label: 'Forex Trading', href: '/markets/forex' },
    { label: 'Crypto Derivatives', href: '/markets/crypto' },
    { label: 'Precious Metals', href: '/markets/metals' },
    { label: 'Global Indices', href: '/markets/indices' },
    { label: 'Commodities', href: '/markets/commodities' }
  ],
  trading: [
    { label: 'Trading Accounts', href: '/trading/accounts' },
    { label: 'Conditions & Execution', href: '/trading/conditions' },
    { label: 'Spreads Matrix', href: '/trading/spreads' },
    { label: 'Leverage Schedules', href: '/trading/leverage' },
    { label: 'Order Types', href: '/trading/order-types' },
    { label: 'Risk Protocols', href: '/trading/risk-management' }
  ],
  platforms: [
    { label: 'RegearFX WebTrader', href: '/platforms/webtrader' },
    { label: 'Mobile Trading App', href: '/platforms/mobile' },
    { label: 'MetaTrader 5', href: '/platforms/mt5' },
    { label: 'MetaTrader 4', href: '/platforms/mt4' },
    { label: 'TradingView Connect', href: '/platforms/tradingview' },
    { label: 'Platform Comparison', href: '/platforms/compare' }
  ],
  resources: [
    { label: 'Trading Academy', href: '/resources/academy' },
    { label: 'Market News', href: '/resources/news' },
    { label: 'Research & Analysis', href: '/resources/analysis' },
    { label: 'Trading Calculators', href: '/tools/calculators' },
    { label: 'Economic Calendar', href: '/tools/economic-calendar' },
    { label: 'Financial Glossary', href: '/resources/glossary' }
  ],
  company: [
    { label: 'About Us', href: '/company/about' },
    { label: 'Why RegearFX', href: '/company/why-us' },
    { label: 'Security & Custody', href: '/company/security' },
    { label: 'Partnership Program', href: '/company/partners' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Contact Desk', href: '/contact' }
  ],
  legal: [
    { label: 'Risk Disclosure', href: '/risk-disclosure' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Notice', href: '/cookies' },
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/help/faq' }
  ]
};
