import { BRAND_NAME } from './config';

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
        description: 'Major, minor, and cross currency pairs with competitive pricing.'
      },
      {
        title: 'Crypto',
        href: '/markets/crypto',
        description: 'Explore leading crypto derivatives and spot market indicators.'
      },
      {
        title: 'Indices',
        href: '/markets/indices',
        description: 'Major benchmark indices tracking global equity movements.'
      },
      {
        title: 'Commodities',
        href: '/markets/commodities',
        description: 'Energy and agricultural contracts with transparent schedules.'
      },
      {
        title: 'Metals',
        href: '/markets/metals',
        description: 'Spot Gold, Silver, and Platinum market information.'
      },
      {
        title: 'All Markets',
        href: '/markets',
        description: 'Comprehensive multi-asset directory across global instruments.'
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
        description: 'Explore Standard, Raw Spread, and Pro account configurations.'
      },
      {
        title: 'Trading Conditions',
        href: '/trading/conditions',
        description: 'Execution details, market hours, and order staging specifications.'
      },
      {
        title: 'Spreads & Pricing',
        href: '/trading/spreads',
        description: 'Benchmark spread schedules across instruments.'
      },
      {
        title: 'Leverage & Margins',
        href: '/trading/leverage',
        description: 'Tiered margin schedules tailored to product volatility.'
      },
      {
        title: 'Order Types',
        href: '/trading/order-types',
        description: 'Market, limit, stop, and staged order options.'
      },
      {
        title: 'Risk Management',
        href: '/trading/risk-management',
        description: 'Configurable margin alerts and risk control features.'
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
        description: 'Browser-based execution terminal designed for fast access.'
      },
      {
        title: 'Mobile Trading',
        href: '/platforms/mobile',
        description: 'Mobile applications for monitoring markets and managing orders.'
      },
      {
        title: 'MetaTrader 5',
        href: '/platforms/mt5',
        description: 'Multi-asset platform integration (subject to configuration).'
      },
      {
        title: 'MetaTrader 4',
        href: '/platforms/mt4',
        description: 'Established third-party platform for currency charting.'
      },
      {
        title: 'TradingView',
        href: '/platforms/tradingview',
        description: 'Direct charting tool connection (subject to configuration).'
      },
      {
        title: 'Compare Platforms',
        href: '/platforms/compare',
        description: 'Side-by-side feature comparison to find your preferred setup.'
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
        description: 'Interactive pip value and margin requirement calculators.'
      },
      {
        title: 'Economic Calendar',
        href: '/tools/economic-calendar',
        description: 'Macroeconomic announcements, consensus estimates, and ratings.'
      },
      {
        title: 'Market Analysis',
        href: '/tools/market-analysis',
        description: 'Technical reviews, market structure, and daily commentary.'
      },
      {
        title: 'Trading Signals',
        href: '/tools/signals',
        description: 'Technical pattern recognition and momentum indicator alerts.'
      },
      {
        title: 'Quantitative Tools',
        href: '/tools/quant',
        description: 'Systematic statistical models, correlation matrices, and metrics.'
      },
      {
        title: 'Algorithmic Trading',
        href: '/tools/algo',
        description: 'Information on programmatic workflows, rules, and automation.'
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
        description: 'Educational modules covering foundational and advanced concepts.'
      },
      {
        title: 'Market News',
        href: '/resources/news',
        description: 'Curated financial dispatches on macroeconomic events.'
      },
      {
        title: 'In-Depth Analysis',
        href: '/resources/analysis',
        description: 'Periodic market reviews across currency pairs and commodities.'
      },
      {
        title: 'Trading Guides',
        href: '/resources/guides',
        description: 'Educational guides on order execution and risk budgeting.'
      },
      {
        title: 'Webinars',
        href: '/resources/webinars',
        description: 'Educational market walkthroughs and platform guides.'
      },
      {
        title: 'Financial Glossary',
        href: '/resources/glossary',
        description: 'A-Z dictionary of trading terms and market definitions.'
      }
    ]
  },
  {
    id: 'company',
    label: 'Company',
    href: '/company',
    items: [
      {
        title: `About ${BRAND_NAME}`,
        href: '/company/about',
        description: 'Our mission, technology background, and operating approach.'
      },
      {
        title: 'Why Choose Us',
        href: '/company/why-us',
        description: 'Transparent pricing, responsive support, and modern tools.'
      },
      {
        title: 'Security Architecture',
        href: '/company/security',
        description: 'Two-Factor Authentication, session monitoring, and data security.'
      },
      {
        title: 'Partners & Affiliates',
        href: '/company/partners',
        description: 'Introducing Broker programs and institutional partner options.'
      },
      {
        title: 'Careers',
        href: '/company/careers',
        description: 'Explore opportunities across technology and client operations.'
      },
      {
        title: 'Contact Us',
        href: '/contact',
        description: 'Reach our team directly for inquiries and platform assistance.'
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
        description: 'Knowledge base and FAQs on onboarding and account setup.'
      },
      {
        title: 'Frequently Asked Questions',
        href: '/help/faq',
        description: 'Common questions regarding spreads, margins, and platforms.'
      },
      {
        title: 'Contact Support',
        href: '/help/support',
        description: 'Support desk options and direct contact channels.'
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
    { label: 'Risk Controls', href: '/trading/risk-management' }
  ],
  platforms: [
    { label: 'WebTrader', href: '/platforms/webtrader' },
    { label: 'Mobile Trading', href: '/platforms/mobile' },
    { label: 'MetaTrader 5', href: '/platforms/mt5' },
    { label: 'MetaTrader 4', href: '/platforms/mt4' },
    { label: 'TradingView', href: '/platforms/tradingview' },
    { label: 'Platform Comparison', href: '/platforms/compare' }
  ],
  resources: [
    { label: 'Trading Academy', href: '/resources/academy' },
    { label: 'Market News', href: '/resources/news' },
    { label: 'Market Analysis', href: '/resources/analysis' },
    { label: 'Trading Calculators', href: '/tools/calculators' },
    { label: 'Economic Calendar', href: '/tools/economic-calendar' },
    { label: 'Financial Glossary', href: '/resources/glossary' }
  ],
  company: [
    { label: `About ${BRAND_NAME}`, href: '/company/about' },
    { label: 'Why Choose Us', href: '/company/why-us' },
    { label: 'Security & Access', href: '/company/security' },
    { label: 'Partnership Program', href: '/company/partners' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Contact Us', href: '/contact' }
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
