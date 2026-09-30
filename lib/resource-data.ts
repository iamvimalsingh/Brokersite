import {
  AcademyCourse,
  NewsArticle,
  AnalysisArticle,
  TradingGuide,
  WebinarItem,
  GlossaryTerm
} from '@/types/resource';

export const RESOURCE_CATEGORIES = [
  {
    id: 'academy',
    title: 'Trading Academy',
    shortDesc: 'Build your knowledge from market fundamentals to advanced trading concepts.',
    itemCount: '9 Comprehensive Courses',
    badge: 'Education Track',
    href: '/resources/academy',
    ctaText: 'Start Learning'
  },
  {
    id: 'news',
    title: 'Market News',
    shortDesc: 'Follow developments influencing global financial markets.',
    itemCount: '15+ Daily Bulletins',
    badge: 'Real-Time News',
    href: '/resources/news',
    ctaText: 'Read Latest News'
  },
  {
    id: 'analysis',
    title: 'Market Analysis',
    shortDesc: 'Explore structured commentary across forex, crypto, commodities and indices.',
    itemCount: 'Daily & Weekly Research',
    badge: 'Desk Commentary',
    href: '/resources/analysis',
    ctaText: 'Explore Research'
  },
  {
    id: 'guides',
    title: 'Trading Guides',
    shortDesc: 'Practical explainers covering trading tools, risk and market mechanics.',
    itemCount: '12 Essential Guides',
    badge: 'Practical Guides',
    href: '/resources/guides',
    ctaText: 'Browse Guides'
  },
  {
    id: 'webinars',
    title: 'Webinars',
    shortDesc: 'Explore educational sessions and market-focused presentations.',
    itemCount: 'Live & On-Demand',
    badge: 'Video Masterclasses',
    href: '/resources/webinars',
    ctaText: 'View Sessions'
  },
  {
    id: 'glossary',
    title: 'Glossary',
    shortDesc: 'Quick definitions for essential financial and trading terminology.',
    itemCount: '60+ Financial Terms',
    badge: 'A-Z Encyclopedia',
    href: '/resources/glossary',
    ctaText: 'Explore Terms'
  }
];

// ==========================================
// FEATURED INSIGHT ARTICLES (3 Editorial Cards)
// ==========================================
export const FEATURED_INSIGHTS = [
  {
    id: 'feat-1',
    slug: 'interest-rate-expectations-fx',
    title: 'Why Currency Markets React to Interest Rate Expectations',
    category: 'Forex',
    author: 'Market Strategy Desk',
    readTime: '7 min read',
    date: 'Oct 14, 2026',
    summary: 'Central bank interest rate differentials represent the primary driver of sovereign currency valuation. We examine how bond yield curves and forward rate agreements dictate foreign exchange flows.',
    href: '/resources/analysis/interest-rate-expectations-fx'
  },
  {
    id: 'feat-2',
    slug: 'gold-market-uncertainty',
    title: 'Understanding Gold During Periods of Market Uncertainty',
    category: 'Metals',
    author: 'Research Desk',
    readTime: '6 min read',
    date: 'Oct 13, 2026',
    summary: 'Gold has maintained a multi-century role as a store of value. We review how real interest rates, dollar index fluctuations, and sovereign reserve allocations drive spot bullion pricing.',
    href: '/resources/analysis/gold-market-uncertainty'
  },
  {
    id: 'feat-3',
    slug: 'volatility-digital-assets',
    title: 'How Volatility Changes Across Digital Asset Markets',
    category: 'Crypto',
    author: 'Digital Markets Research',
    readTime: '8 min read',
    date: 'Oct 12, 2026',
    summary: 'Digital asset derivative markets trade continuously without weekend settlement pauses. We deconstruct historical volatility cycles, derivatives open interest, and liquidity depth dynamics.',
    href: '/resources/analysis/volatility-digital-assets'
  }
];

// ==========================================
// TRADING ACADEMY COURSES (9 Courses, 3 Tracks)
// ==========================================
export const ACADEMY_COURSES: AcademyCourse[] = [
  // BEGINNER TRACK (3 Courses)
  {
    id: 'course-1',
    slug: 'intro-to-financial-markets',
    title: 'Introduction to Financial Markets',
    level: 'Beginner',
    duration: '45 min',
    lessonCount: 8,
    progressPercent: 100,
    badge: 'Core Foundation',
    description: 'Learn the foundational mechanics of global exchange markets, participant roles, and the difference between spot and derivative instruments.',
    topics: ['Financial Markets Overview', 'Market Participants', 'Spot vs Derivatives', 'Market Sessions & Liquidity', 'Order Routing Basics'],
    lessons: [
      {
        id: 'l1',
        title: 'How Global Financial Markets Function',
        duration: '6 min',
        summary: 'An overview of foreign exchange, equity indices, digital assets, and commodities markets.',
        content: [
          'Financial markets exist to facilitate the allocation of capital and the exchange of contractual risk between global participants.',
          'Unlike centralized stock exchanges, foreign exchange operates as an Over-the-Counter (OTC) network where commercial banks, institutional liquidity providers, and retail brokers connect electronically.'
        ],
        keyTakeaway: 'OTC markets provide continuous global liquidity by routing orders across interconnected interbank centers.'
      },
      {
        id: 'l2',
        title: 'Market Participants and Order Liquidity',
        duration: '5 min',
        summary: 'Understand the roles of central banks, commercial institutions, and retail traders.',
        content: [
          'Central banks dictate monetary policy and baseline interest rates.',
          'Tier-1 investment banks provide depth of liquidity, while retail brokers aggregate pricing for individual market participants.'
        ],
        keyTakeaway: 'Liquidity is deepest during session overlaps (e.g., London and New York mornings).'
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'currency-pairs-and-quotes',
    title: 'Understanding Currency Pairs & Quotes',
    level: 'Beginner',
    duration: '50 min',
    lessonCount: 7,
    progressPercent: 40,
    badge: 'Forex Mechanics',
    description: 'Master the mechanics of base and quote currencies, bid-ask spread spreads, pip calculations, and lot sizing conventions.',
    topics: ['Base and Quote Currencies', 'Bid vs Ask Mechanics', 'Spread Cost Calculation', 'Pip Value Formula', 'Micro vs Standard Lots'],
    lessons: [
      {
        id: 'l3',
        title: 'Base Currency vs. Quote Currency',
        duration: '7 min',
        summary: 'Why currencies are always priced and traded in pairs.',
        content: [
          'In EUR/USD = 1.0850, EUR is the base currency and USD is the quote currency. The quote indicates that 1 Euro costs 1.0850 US Dollars.',
          'When buying EUR/USD, you are going long Euro while simultaneously shorting the US Dollar.'
        ],
        keyTakeaway: 'The first currency is the asset being bought or sold; the second is the unit of exchange.'
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'risk-management-fundamentals',
    title: 'Risk Management Fundamentals',
    level: 'Beginner',
    duration: '50 min',
    lessonCount: 7,
    progressPercent: 15,
    badge: 'Capital Protection',
    description: 'Understand leverage ratios, required margin, stop loss placement, and why disciplined position sizing protects account equity.',
    topics: ['Leverage and Margin Mechanics', 'Stop Loss Discipline', '1% Risk Per Trade Rule', 'Risk-to-Reward Ratios', 'Negative Balance Protection'],
    lessons: [
      {
        id: 'l4',
        title: 'Leverage vs. Margin Requirements',
        duration: '8 min',
        summary: 'How leverage amplifies both potential returns and potential drawdown risk.',
        content: [
          'Leverage allows market participants to open larger positions than initial deposited cash.',
          'A leverage ratio of 1:100 means that $1,000 of account equity can control $100,000 of notional currency volume (1.00 standard lot).'
        ],
        keyTakeaway: 'Always calculate your exact monetary risk in dollars rather than relying purely on percentage leverage.'
      }
    ]
  },

  // INTERMEDIATE TRACK (3 Courses)
  {
    id: 'course-4',
    slug: 'technical-analysis-price-action',
    title: 'Technical Analysis & Price Action',
    level: 'Intermediate',
    duration: '70 min',
    lessonCount: 10,
    progressPercent: 0,
    badge: 'Chart Mastery',
    description: 'Deconstruct market structure, swing highs and lows, trend continuation patterns, and key horizontal support/resistance levels.',
    topics: ['Market Structure & Swing Points', 'Support & Resistance Zones', 'Candlestick Reversal Formations', 'Trendlines & Channels', 'Multiple Timeframe Alignment'],
    lessons: [
      {
        id: 'l5',
        title: 'Mapping Support and Resistance Zones',
        duration: '9 min',
        summary: 'Treating levels as dynamic price zones rather than single lines.',
        content: [
          'Support represents an area where buying pressure overcomes selling pressure.',
          'Resistance represents an area where supply overcomes buying demand.'
        ],
        keyTakeaway: 'Look for prior high-volume consolidation nodes to identify high-probability turning points.'
      }
    ]
  },
  {
    id: 'course-5',
    slug: 'indicators-and-volatility-models',
    title: 'Technical Indicators & Volatility',
    level: 'Intermediate',
    duration: '60 min',
    lessonCount: 8,
    progressPercent: 0,
    badge: 'Statistical Overlays',
    description: 'Learn the mathematical foundations of Moving Averages, RSI momentum divergence, MACD crossovers, and Average True Range (ATR).',
    topics: ['Exponential Moving Averages', 'RSI Divergence Setup', 'MACD Momentum Histogram', 'ATR Volatility Sizing', 'Bollinger Bands & Mean Reversion'],
    lessons: [
      {
        id: 'l6',
        title: 'Using ATR for Stop-Loss Sizing',
        duration: '7 min',
        summary: 'Adapting stop distances to current market volatility.',
        content: [
          'The Average True Range (ATR) measures the average price range over 14 historical bars.',
          'Setting stop-losses at a multiple of ATR (e.g., 1.5x ATR) avoids being stopped out by normal market noise.'
        ],
        keyTakeaway: 'Volatility-adjusted stops prevent arbitrary exits during volatile market sessions.'
      }
    ]
  },
  {
    id: 'course-6',
    slug: 'trading-sessions-and-macro-drivers',
    title: 'Global Trading Sessions & Macro Drivers',
    level: 'Intermediate',
    duration: '55 min',
    lessonCount: 7,
    progressPercent: 0,
    badge: 'Session Dynamics',
    description: 'Understand the distinct characteristics of the Tokyo, London, and New York market sessions and how economic releases trigger volatility.',
    topics: ['Asian, London, and NY Sessions', 'Session Overlap Spikes', 'Economic Calendar Timing', 'Central Bank Rate Meetings', 'Post-News Spread Management'],
    lessons: [
      {
        id: 'l7',
        title: 'Trading the London-New York Overlap',
        duration: '8 min',
        summary: 'The highest liquidity and volume window of the 24-hour trading day.',
        content: [
          'From 13:00 to 17:00 GMT, both London and New York dealing desks are active.',
          'This window accounts for over 50% of global daily FX transaction volume.'
        ],
        keyTakeaway: 'Spreads are typically tightest and trend direction is most authoritative during this 4-hour window.'
      }
    ]
  },

  // ADVANCED TRACK (3 Courses)
  {
    id: 'course-7',
    slug: 'quantitative-risk-and-portfolio-thinking',
    title: 'Quantitative Risk & Portfolio Thinking',
    level: 'Advanced',
    duration: '80 min',
    lessonCount: 10,
    progressPercent: 0,
    badge: 'Institutional Math',
    description: 'Apply cross-asset correlation analysis, Sharpe ratio evaluation, Value at Risk (VaR), and fractional Kelly sizing models.',
    topics: ['Correlation Coefficient Matrices', 'Sharpe & Sortino Evaluation', 'Value at Risk (VaR)', 'Maximum Drawdown Budgeting', 'Multi-Asset Hedging'],
    lessons: [
      {
        id: 'l8',
        title: 'Cross-Asset Correlation in Portfolio Risk',
        duration: '10 min',
        summary: 'Why opening multiple positions in correlated assets concentrates risk.',
        content: [
          'Holding long EUR/USD and long GBP/USD is functionally doubling exposure to US Dollar depreciation.',
          'Cross-asset correlation matrices reveal hidden systemic exposure between metals, crypto, and equity indices.'
        ],
        keyTakeaway: 'True portfolio diversification requires selecting assets with low or inverse correlation.'
      }
    ]
  },
  {
    id: 'course-8',
    slug: 'algorithmic-trading-architecture',
    title: 'Algorithmic Trading & Systematic Architecture',
    level: 'Advanced',
    duration: '75 min',
    lessonCount: 9,
    progressPercent: 0,
    badge: 'Systematic Logic',
    description: 'Explore rule-based strategy development, backtesting with tick-level data, execution latency considerations, and automated risk controls.',
    topics: ['Systematic Rules Formulation', 'MQL5 & Pine Script Overview', 'In-Sample vs Out-of-Sample Backtesting', 'Curve Fitting & Overfitting Risks', 'Execution Gateway Latency'],
    lessons: [
      {
        id: 'l9',
        title: 'Avoiding Overfitting in Backtesting',
        duration: '9 min',
        summary: 'The danger of optimizing parameters to historical noise rather than persistent edges.',
        content: [
          'Overfitting occurs when a trading algorithm is fine-tuned so specifically to past data that it fails in live market conditions.',
          'Always validate quantitative strategies on out-of-sample data and forward paper tests.'
        ],
        keyTakeaway: 'Simpler models with fewer optimized parameters generally perform more robustly out of sample.'
      }
    ]
  },
  {
    id: 'course-9',
    slug: 'advanced-market-structure-and-liquidity',
    title: 'Advanced Market Structure & Liquidity Depth',
    level: 'Advanced',
    duration: '65 min',
    lessonCount: 8,
    progressPercent: 0,
    badge: 'Order Book Depth',
    description: 'Understand non-bank liquidity aggregation, straight-through processing (STP/ECN), order book Level II depth, and slippage distributions.',
    topics: ['Order Book Mechanics & DOM', 'STP vs Market Maker Routing', 'Positive vs Negative Slippage', 'Liquidity Pools & Stop Runs', 'FIX API Connectivity'],
    lessons: [
      {
        id: 'l10',
        title: 'Understanding Order Book Depth (Level II)',
        duration: '8 min',
        summary: 'How large institutional orders consume available liquidity across multiple price tiers.',
        content: [
          'Level II market depth displays limit buy and sell orders stacked at prices above and below the current market midpoint.',
          'Large market orders sweep through multiple price tiers, resulting in volume-weighted execution prices.'
        ],
        keyTakeaway: 'Understanding depth helps large-volume traders stage orders without causing excessive market impact.'
      }
    ]
  }
];

// ==========================================
// MARKET NEWS ARTICLES (15+ Realistic Articles)
// ==========================================
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'european-currency-rate-expectations',
    title: 'European Currency Markets React to Shifting Rate Expectations',
    subtitle: 'EUR/USD consolidates near 1.0850 as ECB policymakers weigh economic indicators against inflation targets.',
    category: 'Forex',
    author: 'Chief Macro Strategist',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 14, 2026',
    updatedDate: 'Oct 14, 2026',
    readTime: '4 min read',
    summary: 'European foreign exchange desks witnessed balanced price action as market participants assessed recent commentary from Frankfurt.',
    bodyParagraphs: [
      'The single European currency held steady in early European dealing on Wednesday, trading in a defined corridor between 1.0840 and 1.0890 against the US Dollar.',
      'Central bank officials emphasized a data-dependent trajectory heading into the upcoming policy meeting, noting that headline inflation trends show signs of moderate deceleration while core services pricing remains sticky.',
      'Trading desks observed balanced order flow, with commercial corporate demand providing underlying support near the 1.0820 mark.'
    ],
    keyPoints: [
      'EUR/USD trades within a tight 50-pip band ahead of key Eurozone economic sentiment data.',
      'Sovereign bond yield differentials between German Bunds and US Treasuries remain steady.',
      'Implied options volatility reflects subdued pricing heading into tomorrow\'s macro releases.'
    ],
    relatedSlugs: ['gold-holds-focus-global-growth', 'digital-assets-volatile-session'],
    featured: true
  },
  {
    id: 'news-2',
    slug: 'gold-holds-focus-global-growth',
    title: 'Gold Holds Focus as Investors Assess Global Growth Signals',
    subtitle: 'Spot Gold remains anchored near $2,658/oz with institutional treasury demand sustaining elevated price floors.',
    category: 'Metals',
    author: 'Senior Commodities Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 14, 2026',
    readTime: '4 min read',
    summary: 'Spot Gold (XAU/USD) demonstrated constructive resilience as investors balanced persistent safe-haven reserve demand against stable real bond yields.',
    bodyParagraphs: [
      'Spot bullion prices advanced modestly during London morning fixings, trading near $2,658.40 per troy ounce.',
      'Precious metals desks reported continued sovereign central bank accumulation throughout Q3, establishing a firm historical floor under spot prices despite periodic strength in the US Dollar index.'
    ],
    keyPoints: [
      'Spot Gold stabilizes above $2,650 support.',
      'Silver (XAG/USD) follows bullion, testing $31.80 resistance.',
      'Physical ETF holdings record consecutive weekly net inflows.'
    ],
    relatedSlugs: ['european-currency-rate-expectations', 'oil-prices-supply-expectations']
  },
  {
    id: 'news-3',
    slug: 'digital-assets-volatile-session',
    title: 'Digital Assets Trade Through a Volatile Global Session',
    subtitle: 'Bitcoin consolidates around $64,800 as institutional derivatives volume reaches fresh monthly highs.',
    category: 'Crypto',
    author: 'Digital Asset Intelligence',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 13, 2026',
    readTime: '5 min read',
    summary: 'Cryptocurrency derivatives markets experienced elevated two-way turnover as spot ETF volume balanced against profit-taking at higher resistance bands.',
    bodyParagraphs: [
      'Bitcoin derivative contracts traded in a range between $63,800 and $65,100 over the past 24 hours, with annualized perpetual funding rates settling near neutral levels.',
      'Ethereum derivatives observed steady liquidity around $2,640, while altcoins reflected mixed performance across decentralized finance protocols.'
    ],
    keyPoints: [
      'Bitcoin derivative open interest remains elevated above $32 billion.',
      'Perpetual funding rates hold steady near +0.008% per 8-hour period.',
      'Liquidations remain contained within normal historical distributions.'
    ],
    relatedSlugs: ['european-currency-rate-expectations', 'indices-mixed-sentiment']
  },
  {
    id: 'news-4',
    slug: 'oil-prices-supply-expectations',
    title: 'Oil Prices Respond to Changes in Supply Expectations',
    subtitle: 'WTI Crude trades near $72.45/bbl as OPEC+ quota discipline meets shifting industrial demand metrics.',
    category: 'Commodities',
    author: 'Energy Research Group',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 13, 2026',
    readTime: '4 min read',
    summary: 'Crude oil benchmarks stabilized following inventory data releases that showed tighter prompt physical supplies.',
    bodyParagraphs: [
      'West Texas Intermediate (WTI) traded around $72.45 per barrel on Tuesday, while Brent crude held near $76.10.',
      'Traders noted that scheduled refinery maintenance and seasonal consumption shifts continue to dictate short-term inventory builds.'
    ],
    keyPoints: [
      'WTI support remains firm near the $70.00 psychological level.',
      'Brent crack spreads reflect stable refinery margins across European hubs.',
      'OPEC+ compliance metrics indicate strict adherence to production quotas.'
    ],
    relatedSlugs: ['gold-holds-focus-global-growth', 'indices-mixed-sentiment']
  },
  {
    id: 'news-5',
    slug: 'indices-mixed-sentiment',
    title: 'Global Equity Benchmarks Navigate Mixed Macro Sentiment',
    subtitle: 'US500 and NAS100 consolidate near record highs as earnings season kicks off with strong bank results.',
    category: 'Indices',
    author: 'Global Equity Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 12, 2026',
    readTime: '4 min read',
    summary: 'Benchmark cash indices maintained elevated valuations as corporate financial reports supported market breadth.',
    bodyParagraphs: [
      'The S&P 500 cash index traded near 5,762, supported by strong net interest income metrics from major Wall Street banking institutions.',
      'Technology benchmarks showed measured performance, with semiconductor components consolidating after recent multi-week gains.'
    ],
    keyPoints: [
      'US500 holds above 5,720 support with healthy market breadth.',
      'German DAX 40 trades near 19,445 on steady export metrics.',
      'Nikkei 225 advances on yen stabilization near 149.60.'
    ],
    relatedSlugs: ['european-currency-rate-expectations', 'digital-assets-volatile-session']
  },
  {
    id: 'news-6',
    slug: 'british-pound-inflation-prints',
    title: 'British Pound Steady Ahead of Key UK Inflation Print',
    subtitle: 'GBP/USD tests 1.3045 as Bank of England officials reiterate balanced monetary policy expectations.',
    category: 'Forex',
    author: 'Chief Macro Strategist',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 12, 2026',
    readTime: '3 min read',
    summary: 'Sterling held firm against major currencies as foreign exchange markets positioned for consumer price index releases.',
    bodyParagraphs: [
      'GBP/USD found strong institutional demand on dips toward 1.3000, recovering to 1.3045 in early European trading.',
      'Economic commentators noted that wage growth indicators remain key to determining the Bank of England\'s next quarterly interest rate adjustment.'
    ],
    keyPoints: [
      'Sterling trades in a 60-pip range against the Dollar.',
      'EUR/GBP cross rate consolidates around 0.8335.',
      'UK gilt yields trade in tandem with European benchmark sovereign debt.'
    ],
    relatedSlugs: ['european-currency-rate-expectations', 'japanese-yen-intervention-levels']
  },
  {
    id: 'news-7',
    slug: 'japanese-yen-intervention-levels',
    title: 'USD/JPY Trades Near 149.60 as Yield Differentials Dominate',
    subtitle: 'Japanese currency dynamics remain tied to US Treasury benchmarks as Bank of Japan monitors FX velocity.',
    category: 'Forex',
    author: 'Asian Currency Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 11, 2026',
    readTime: '4 min read',
    summary: 'USD/JPY hovered below the key 150.00 psychological threshold with trading desks closely watching Tokyo session commentary.',
    bodyParagraphs: [
      'The US Dollar held firm against the Yen, trading at 149.65 as the 10-year US Treasury yield hovered near 4.05%.',
      'Japanese authorities reiterated the importance of orderly exchange rate adjustments reflecting fundamental economic factors.'
    ],
    keyPoints: [
      '150.00 psychological level marks key technical resistance.',
      'Overnight cross flows support EUR/JPY and GBP/JPY cross pairs.',
      'Implied 1-month volatility reflects steady positioning.'
    ],
    relatedSlugs: ['british-pound-inflation-prints', 'european-currency-rate-expectations']
  },
  {
    id: 'news-8',
    slug: 'silver-industrial-demand-surge',
    title: 'Silver Prices Outperform Gold on Green Energy Industrial Demand',
    subtitle: 'Spot Silver climbs toward $31.84/oz as solar panel and semiconductor manufacturing consumes physical supply.',
    category: 'Metals',
    author: 'Senior Commodities Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 11, 2026',
    readTime: '4 min read',
    summary: 'XAG/USD demonstrated strong relative strength against gold, narrowing the historical gold-to-silver ratio.',
    bodyParagraphs: [
      'Physical silver recorded strong buying in London, advancing 1.88% to trade at $31.84 per ounce.',
      'Industrial analysts highlighted that modern photovoltaic technology requires increased silver paste loading per cell.'
    ],
    keyPoints: [
      'Gold/Silver ratio compresses toward 83.5:1.',
      'London Bullion Market vault inventories record slight drawdowns.',
      'Platinum (XPT/USD) trades steady at $994.50.'
    ],
    relatedSlugs: ['gold-holds-focus-global-growth', 'copper-price-breakout']
  },
  {
    id: 'news-9',
    slug: 'copper-price-breakout',
    title: 'Copper Holds Near $4.46/lb on Infrastructure Investment Commitments',
    subtitle: 'Red metal prices reflect solid grid expansion demand across North American and Asian industrial centers.',
    category: 'Commodities',
    author: 'Energy Research Group',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 10, 2026',
    readTime: '3 min read',
    summary: 'High-grade copper futures traded constructively as global warehouse inventories remained at multi-month lows.',
    bodyParagraphs: [
      'COMEX copper contracts traded at $4.462 per pound, up 0.95% on the session.',
      'Smelter treatment charges in major refining hubs indicate steady demand for copper concentrate.'
    ],
    keyPoints: [
      'Copper tests technical resistance at $4.50/lb.',
      'LME warehouse stocks remain near historically tight levels.',
      'Electrification demand supports long-term structural consumption.'
    ],
    relatedSlugs: ['silver-industrial-demand-surge', 'oil-prices-supply-expectations']
  },
  {
    id: 'news-10',
    slug: 'solana-ecosystem-derivatives-surge',
    title: 'Solana Derivatives Volume Expands Across Institutional Venues',
    subtitle: 'SOL/USD derivative liquidity deepens as transaction throughput on the layer-1 network reaches record highs.',
    category: 'Crypto',
    author: 'Digital Asset Intelligence',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 10, 2026',
    readTime: '4 min read',
    summary: 'Solana derivative contracts observed increased market maker participation, narrowing average spreads across major desks.',
    bodyParagraphs: [
      'SOL/USD traded at $152.40, marking a 3.15% daily advance with over $1.2 billion in 24-hour derivatives turnover.',
      'Trading desks noted that automated arbitrage models are narrowing basis spreads between spot and perpetual contracts.'
    ],
    keyPoints: [
      'SOL/USD tests key $155.00 resistance corridor.',
      'Daily active decentralized addresses surpass 3.5 million.',
      'Derivative funding rates remain positive at +0.012%.'
    ],
    relatedSlugs: ['digital-assets-volatile-session', 'bitcoin-etf-inflow-momentum']
  },
  {
    id: 'news-11',
    slug: 'natural-gas-seasonal-storage',
    title: 'Natural Gas Prices Advance as European Storage Reaches Target',
    subtitle: 'Henry Hub natural gas futures trade at $2.89/MMBtu ahead of winter heating season demand forecasts.',
    category: 'Commodities',
    author: 'Energy Research Group',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 09, 2026',
    readTime: '3 min read',
    summary: 'Natural gas prices recorded a 4.22% advance following weather forecasts predicting below-average temperatures.',
    bodyParagraphs: [
      'Henry Hub natural gas cash contracts traded up to $2.895/MMBtu, rebounding from recent seasonal lows.',
      'LNG export terminal capacity utilization in the US Gulf Coast remained above 92%.'
    ],
    keyPoints: [
      'Natural gas breaks above the $2.80 technical barrier.',
      'European underground gas storage stands at 94.5% capacity.',
      'Winter weather models project heightened residential demand in late Q4.'
    ],
    relatedSlugs: ['oil-prices-supply-expectations', 'copper-price-breakout']
  },
  {
    id: 'news-12',
    slug: 'bitcoin-etf-inflow-momentum',
    title: 'Institutional ETF Inflows Provide Underlying Support to Bitcoin',
    subtitle: 'Net positive weekly inflows of $850M into spot digital asset products stabilize market liquidity.',
    category: 'Crypto',
    author: 'Digital Asset Intelligence',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 09, 2026',
    readTime: '5 min read',
    summary: 'Capital flows into regulated digital asset investment vehicles continued for the fourth consecutive week.',
    bodyParagraphs: [
      'Institutional custodial inflows reached $850 million over the trailing 5 trading sessions, led by tier-1 asset management products.',
      'The steady accumulation absorbed normal short-term miner distribution, keeping BTC/USD above the $62,000 baseline.'
    ],
    keyPoints: [
      'Consecutive 4-week positive net institutional flows recorded.',
      'Exchange reserve balances decline by 14,000 BTC.',
      '30-day realized volatility compresses toward 42%.'
    ],
    relatedSlugs: ['digital-assets-volatile-session', 'solana-ecosystem-derivatives-surge']
  },
  {
    id: 'news-13',
    slug: 'australian-dollar-commodity-tailwinds',
    title: 'Australian Dollar Gains on Solid Mining Export Figures',
    subtitle: 'AUD/USD climbs to 0.6720 as iron ore prices stabilize and employment data exceeds market expectations.',
    category: 'Forex',
    author: 'Asian Currency Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 08, 2026',
    readTime: '3 min read',
    summary: 'The Aussie dollar gained traction across G10 crosses, outperforming the Euro and Yen in early Asian trading.',
    bodyParagraphs: [
      'AUD/USD advanced 0.28% to trade at 0.6720, supported by favorable terms-of-trade data and stable reserve bank rates.',
      'Resource export demand from regional manufacturing partners supported trade balance figures.'
    ],
    keyPoints: [
      'AUD/USD support sighted at 0.6680 with resistance at 0.6750.',
      'RBA maintains cash rate target at 4.35%.',
      'AUD/JPY cross pair approaches 100.50 resistance.'
    ],
    relatedSlugs: ['japanese-yen-intervention-levels', 'copper-price-breakout']
  },
  {
    id: 'news-14',
    slug: 'central-bank-liquidity-facilities',
    title: 'Global Central Banks Coordinate Liquidity Framework Reviews',
    subtitle: 'Cross-border swap lines and repo facilities remain operating smoothly with minimal stress indicators.',
    category: 'Global Macro',
    author: 'Chief Macro Strategist',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 08, 2026',
    readTime: '4 min read',
    summary: 'Interbank liquidity metrics and commercial paper rates continue to reflect orderly funding markets across major financial centers.',
    bodyParagraphs: [
      'Central bank operational data published on Thursday confirmed that interbank funding markets remain well-lubricated.',
      'Usage of standing dollar liquidity swap lines remained minimal, indicating robust private market liquidity distribution.'
    ],
    keyPoints: [
      'SOFR and Euribor rate fixings track monetary policy expectations.',
      'Interbank credit spreads remain at historical low levels.',
      'FX swap basis points hold near neutral equilibrium.'
    ],
    relatedSlugs: ['european-currency-rate-expectations', 'indices-mixed-sentiment']
  },
  {
    id: 'news-15',
    slug: 'dax-industrial-earnings-resilience',
    title: 'German DAX 40 Holds Gains as Industrial Exporters Report Steady Margins',
    subtitle: 'GER40 index trades near 19,445 with automotive and chemical components leading morning sector performance.',
    category: 'Indices',
    author: 'Global Equity Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 07, 2026',
    readTime: '4 min read',
    summary: 'Frankfurt equity trading reflected steady institutional participation as corporate balance sheets weathered currency headwinds.',
    bodyParagraphs: [
      'The DAX 40 index recorded steady turnover, supported by positive quarterly revenue guidance from engineering leaders.',
      'Trading desks noted consistent institutional accumulation across industrial and healthcare index constituents.'
    ],
    keyPoints: [
      'DAX 40 maintains consolidation above 19,300 support.',
      'Eurozone purchasing managers\' index signals stabilization in services.',
      'Trading volume tracks in line with 30-day moving averages.'
    ],
    relatedSlugs: ['indices-mixed-sentiment', 'european-currency-rate-expectations']
  }
];

// ==========================================
// MARKET ANALYSIS ARTICLES (Structured Research)
// ==========================================
export const ANALYSIS_ARTICLES: AnalysisArticle[] = [
  {
    id: 'analysis-1',
    slug: 'interest-rate-expectations-fx',
    title: 'EUR/USD: Understanding Current Market Drivers',
    category: 'Forex',
    analysisType: 'Fundamental',
    timeframe: 'Daily & Weekly Horizon',
    author: 'Chief Currency Strategist',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 14, 2026',
    readTime: '7 min read',
    summary: 'A deep structural analysis of real yield differentials, ECB policy communications, and US economic resilience affecting the EUR/USD currency pair.',
    marketContext: 'EUR/USD has spent the past six weeks trading inside a 250-pip horizontal channel between 1.0780 and 1.1030. As real yield differentials between 10-year US Treasuries and German Bunds hover near 180 basis points, neither currency has demonstrated sufficient momentum to establish a sustained multi-month trend.',
    technicalPicture: 'On the daily chart, EUR/USD is testing the confluence of the 50-day and 200-day Exponential Moving Averages (EMAs) near 1.0870. The 14-day Relative Strength Index (RSI) reads 48.5, indicating a neutral momentum equilibrium. A daily candle close above 1.0930 would open a pathway toward 1.1020 resistance, while a breakdown below 1.0820 exposes the 1.0770 structural baseline.',
    fundamentalDrivers: 'The primary fundamental drivers remain interest rate differential projections between the Federal Reserve and the European Central Bank. Recent US non-farm payroll and inflation figures indicate resilient consumer demand, sustaining US Dollar strength. Meanwhile, European manufacturing metrics have shown stabilization.',
    keyLevels: {
      resistance2: '1.1025',
      resistance1: '1.0930',
      currentPrice: '1.0874',
      support1: '1.0820',
      support2: '1.0770'
    },
    riskConsiderations: 'Upcoming FOMC meeting minutes and European CPI revisions could generate sharp intraday volatility. Traders should account for spread widening during release timestamps.',
    featured: true
  },
  {
    id: 'analysis-2',
    slug: 'gold-market-uncertainty',
    title: 'Gold and Real Yields: A Practical Framework',
    category: 'Metals',
    analysisType: 'Cross-Asset',
    timeframe: 'Daily / 4-Hour Timeframe',
    author: 'Senior Commodities Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 13, 2026',
    readTime: '6 min read',
    summary: 'Evaluating the historical inverse correlation between spot Gold (XAU/USD) and US real bond yields in the current macroeconomic environment.',
    marketContext: 'Historically, spot gold exhibits an inverse correlation with US 10-year TIPS (Treasury Inflation-Protected Securities) yields. When real yields decline, the opportunity cost of holding non-yielding bullion drops, boosting gold demand. However, in recent quarters, central bank reserve purchases have added an independent price driver.',
    technicalPicture: 'XAU/USD maintains an intact bullish channel on the daily timeframe, holding firmly above the 20-day EMA ($2,642). Bullish momentum remains supported by ascending volume profile nodes above the $2,630 invalidation level.',
    fundamentalDrivers: 'Physical sovereign central bank reserve allocations from non-G7 economies have continued to absorb prompt physical supply. Geopolitical transit security in vital trade corridors further reinforces institutional safe-haven demand.',
    keyLevels: {
      resistance2: '2700.00',
      resistance1: '2675.00',
      currentPrice: '2658.40',
      support1: '2638.00',
      support2: '2610.00'
    },
    riskConsiderations: 'A sudden hawkish repricing in US interest rate expectations could prompt short-term profit-taking in leveraged metal futures contracts.',
    featured: true
  },
  {
    id: 'analysis-3',
    slug: 'volatility-digital-assets',
    title: 'Bitcoin Volatility and Market Liquidity',
    category: 'Crypto',
    analysisType: 'Technical',
    timeframe: '4-Hour & 1-Hour Horizon',
    author: 'Digital Markets Research',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 12, 2026',
    readTime: '8 min read',
    summary: 'An examination of order book depth, ETF inflow dynamics, and derivative funding rates shaping BTC/USD range boundaries.',
    marketContext: 'Bitcoin derivative markets have settled into a defined accumulation range between $62,000 and $66,000 following institutional ETF inflows. The compression of 30-day historical volatility indicates that a directional volatility expansion is approaching.',
    technicalPicture: 'On the 4-hour chart, BTC/USD is forming an ascending triangle with horizontal resistance at $65,200 and higher lows supported by an ascending trendline starting at $60,800. Volume has contracted during the consolidation, a classic precursor to breakout expansion.',
    fundamentalDrivers: 'Net institutional spot ETF inflows have stabilized at approximately $150M daily, absorbing miner selling pressure. Derivatives open interest is concentrated in call options with strikes between $65,000 and $70,000.',
    keyLevels: {
      resistance2: '68500.00',
      resistance1: '65200.00',
      currentPrice: '64820.50',
      support1: '62800.00',
      support2: '60800.00'
    },
    riskConsiderations: 'Digital asset derivative volatility can exceed 5% intraday. Conservative position sizing and automated stop-loss protection are essential.',
    featured: true
  },
  {
    id: 'analysis-4',
    slug: 'oil-prices-supply-demand-balance',
    title: 'Oil Prices and the Supply-Demand Balance',
    category: 'Commodities',
    analysisType: 'Fundamental',
    timeframe: 'Daily & Weekly Horizon',
    author: 'Energy Research Group',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 11, 2026',
    readTime: '5 min read',
    summary: 'Assessing OPEC+ quota adherence, US shale production trajectories, and prompt physical crude crack spreads.',
    marketContext: 'Crude Oil WTI is consolidating near $72.45 per barrel. While concerns over global industrial manufacturing throughput cap upside momentum, production restraint from major producer cartels prevents substantial price breakdown below $68.00.',
    technicalPicture: 'WTI Crude is oscillating within a symmetrical triangle pattern between $70.50 support and $75.20 resistance. Moving average ribbons are currently compressed, suggesting an impending volatility expansion.',
    fundamentalDrivers: 'Commercial petroleum inventory reports in North America show moderate draws in crude stocks offset by mild builds in distillate inventories.',
    keyLevels: {
      resistance2: '77.80',
      resistance1: '74.50',
      currentPrice: '72.45',
      support1: '70.80',
      support2: '68.00'
    },
    riskConsiderations: 'Sudden changes in shipping lane transit logistics or unexpected adjustments to cartel output schedules can create weekend gap opens.'
  },
  {
    id: 'analysis-5',
    slug: 'global-indices-macro-sensitivity',
    title: 'Global Indices and Macro Sensitivity',
    category: 'Indices',
    analysisType: 'Daily Brief',
    timeframe: 'Daily Horizon',
    author: 'Global Equity Desk',
    authorRole: 'RegearFX Research Desk',
    publishedDate: 'Oct 10, 2026',
    readTime: '6 min read',
    summary: 'How benchmark cash equity indices are responding to valuation multiples, corporate earnings revisions, and bond yields.',
    marketContext: 'The S&P 500 (US500) and Nasdaq 100 (NAS100) continue to display shallow pullbacks as institutional dip-buyers defend key moving averages. Earnings breadth across non-tech sectors has expanded.',
    technicalPicture: 'US500 is maintaining higher highs and higher lows above its 20-day EMA (5,710). The daily RSI stands at 58, indicating healthy momentum without entering overbought territory (>70).',
    fundamentalDrivers: 'Third-quarter corporate earnings reports have generally exceeded consensus baseline estimates, driven by margin preservation in technology and banking sectors.',
    keyLevels: {
      resistance2: '5850.00',
      resistance1: '5790.00',
      currentPrice: '5762.50',
      support1: '5710.00',
      support2: '5640.00'
    },
    riskConsiderations: 'High-valuation equity multiples remain sensitive to any unexpected rise in long-term sovereign bond yields.'
  }
];

// ==========================================
// TRADING GUIDES (12+ Comprehensive Guides)
// ==========================================
export const TRADING_GUIDES: TradingGuide[] = [
  {
    id: 'guide-1',
    slug: 'how-to-read-a-forex-quote',
    title: 'How to Read a Forex Quote',
    category: 'Getting Started',
    difficulty: 'Beginner',
    readTime: '4 min read',
    summary: 'Understand base currency, quote currency, bid-ask spreads, and how currency pair pricing works.',
    sections: [
      {
        heading: 'Structure of a Currency Pair',
        content: 'In foreign exchange, all prices are quoted in pairs. For example, EUR/USD = 1.0850. The first currency (EUR) is the Base Currency, and the second (USD) is the Quote Currency.'
      },
      {
        heading: 'The Bid and Ask Price',
        content: 'Brokers stream two prices: the Bid (the price at which you can sell to the market) and the Ask (the price at which you can buy from the market). The difference is the spread.'
      }
    ],
    keyTakeaways: [
      'The base currency is always equal to 1 unit.',
      'The quote currency represents how much of that currency is needed to buy 1 base unit.',
      'Buy at the Ask, Sell at the Bid.'
    ],
    relatedCrossLinks: [
      { title: 'View Live Forex Markets', href: '/markets/forex' },
      { title: 'Interactive Pip Calculator', href: '/tools/calculators' }
    ]
  },
  {
    id: 'guide-2',
    slug: 'what-is-a-pip',
    title: 'What Is a Pip in Forex Trading?',
    category: 'Forex',
    difficulty: 'Beginner',
    readTime: '4 min read',
    summary: 'Learn how discrete price movements are measured across standard and JPY-denominated currency pairs.',
    sections: [
      {
        heading: 'Defining the Pip (Percentage in Point)',
        content: 'A pip is the standard unit of measurement for price changes. For most currency pairs (like EUR/USD or GBP/USD), one pip is equal to 0.0001 (the 4th decimal place).'
      },
      {
        heading: 'JPY Currency Pairs Exception',
        content: 'For pairs involving the Japanese Yen (such as USD/JPY or EUR/JPY), one pip is equal to 0.01 (the 2nd decimal place).'
      }
    ],
    keyTakeaways: [
      '1 standard pip on EUR/USD = 0.0001.',
      '1 standard pip on USD/JPY = 0.01.',
      'On a standard lot (100,000 units), 1 pip in EUR/USD equals exactly $10.00.'
    ],
    relatedCrossLinks: [
      { title: 'Launch Pip Calculator', href: '/tools/calculators' },
      { title: 'Spread Schedules', href: '/trading/spreads' }
    ]
  },
  {
    id: 'guide-3',
    slug: 'understanding-leverage',
    title: 'Understanding Leverage & Margin',
    category: 'Risk Management',
    difficulty: 'Beginner',
    readTime: '5 min read',
    summary: 'How leverage works, how margin requirements are calculated, and how to avoid over-leveraging.',
    sections: [
      {
        heading: 'What Is Leverage?',
        content: 'Leverage enables you to control a larger market position with a smaller amount of collateral (margin). A 1:100 leverage ratio requires 1% of the notional position value as margin collateral.'
      },
      {
        heading: 'The Dual Nature of Leverage',
        content: 'While leverage increases purchasing power, it amplifies both potential profits and potential losses equally. Prudent traders restrict actual monetary risk per trade to 1%–2% of account equity.'
      }
    ],
    keyTakeaways: [
      'Leverage increases exposure relative to account capital.',
      'Required Margin = Notional Volume / Leverage Ratio.',
      'Always calculate position size based on dollar risk at your stop-loss.'
    ],
    relatedCrossLinks: [
      { title: 'Leverage & Margin Schedules', href: '/trading/leverage' },
      { title: 'Margin Calculator', href: '/tools/calculators' }
    ]
  },
  {
    id: 'guide-4',
    slug: 'how-margin-works',
    title: 'How Margin & Stop-Outs Work',
    category: 'Risk Management',
    difficulty: 'Intermediate',
    readTime: '5 min read',
    summary: 'A complete breakdown of Account Balance, Floating Equity, Used Margin, Margin Level %, and Stop-Outs.',
    sections: [
      {
        heading: 'Key Margin Terminology',
        content: 'Balance is realized cash. Equity is Balance plus/minus floating P&L. Margin Level % is (Equity / Used Margin) x 100.'
      },
      {
        heading: 'Margin Call (100%) and Stop-Out (50%)',
        content: 'When Margin Level drops to 100%, an automated warning is issued. If it declines to 50%, automated liquidation triggers sequentially to protect against deficit balances.'
      }
    ],
    keyTakeaways: [
      'Keep Margin Level % well above 200% to ensure trade buffer.',
      'Stop-Out occurs at 50% margin level on RegearFX accounts.',
      'Negative Balance Protection ensures retail clients cannot lose more than deposited funds.'
    ],
    relatedCrossLinks: [
      { title: 'Risk Management Rules', href: '/trading/risk-management' },
      { title: 'Account Specifications', href: '/trading/accounts' }
    ]
  },
  {
    id: 'guide-5',
    slug: 'introduction-to-candlestick-charts',
    title: 'Introduction to Candlestick Charts',
    category: 'Technical Analysis',
    difficulty: 'Beginner',
    readTime: '6 min read',
    summary: 'Learn how to read Open, High, Low, and Close (OHLC) Japanese candlestick bars and spot common formations.',
    sections: [
      {
        heading: 'Anatomy of a Candlestick',
        content: 'Each candle represents price action over a chosen timeframe. The real body shows the distance between Open and Close. Wicks (shadows) show highest and lowest prices reached.'
      },
      {
        heading: 'Common Reversal Signals',
        content: 'Pin bars, engulfing candles, and doji patterns illustrate shifts in supply-demand equilibrium at key support/resistance zones.'
      }
    ],
    keyTakeaways: [
      'Green/Teal candles indicate Close > Open (Bullish).',
      'Red candles indicate Close < Open (Bearish).',
      'Long wicks signal price rejection by market participants.'
    ],
    relatedCrossLinks: [
      { title: 'Explore TradingView Charts', href: '/platforms/tradingview' },
      { title: 'Trading Signals Center', href: '/tools/signals' }
    ]
  },
  {
    id: 'guide-6',
    slug: 'how-stop-loss-works',
    title: 'How Stop Loss Orders Work',
    category: 'Risk Management',
    difficulty: 'Beginner',
    readTime: '4 min read',
    summary: 'The most important risk management tool in trading: why, where, and how to place effective stop orders.',
    sections: [
      {
        heading: 'Purpose of a Stop Loss',
        content: 'A stop loss is a conditional order placed to close a position automatically if the market moves against you to a specified price level, capping maximum potential loss.'
      },
      {
        heading: 'Avoiding Common Placement Mistakes',
        content: 'Do not place stops at arbitrary round numbers. Place them beyond structural invalidation levels such as recent swing highs or swing lows.'
      }
    ],
    keyTakeaways: [
      'Never open a position without a predefined stop loss.',
      'Stop loss execution converts to a market order upon trigger.',
      'Disciplined stops remove emotional decision-making.'
    ],
    relatedCrossLinks: [
      { title: 'Order Types Guide', href: '/trading/order-types' },
      { title: 'Position Size Calculator', href: '/tools/calculators' }
    ]
  },
  {
    id: 'guide-7',
    slug: 'how-to-read-economic-calendar',
    title: 'How to Read an Economic Calendar',
    category: 'Trading Tools',
    difficulty: 'Beginner',
    readTime: '5 min read',
    summary: 'Master the timing, consensus forecasts, and impact ratings of macroeconomic news events.',
    sections: [
      {
        heading: 'Interpreting Previous vs. Forecast vs. Actual',
        content: 'Market reactions are driven by deviations between Actual data and Forecast consensus. A result higher than forecast is usually bullish for the respective currency.'
      },
      {
        heading: 'High-Impact Event Categorization',
        content: 'Red/High impact events include Non-Farm Payrolls, Central Bank Interest Rate Decisions, and Consumer Price Index (CPI) releases.'
      }
    ],
    keyTakeaways: [
      'High-impact events cause rapid intraday spread widening.',
      'Deviation from consensus dictates directional momentum.',
      'Check the calendar daily before entering positions.'
    ],
    relatedCrossLinks: [
      { title: 'Live Economic Calendar', href: '/tools/economic-calendar' },
      { title: 'Market Analysis Desk', href: '/tools/market-analysis' }
    ]
  },
  {
    id: 'guide-8',
    slug: 'understanding-market-volatility',
    title: 'Understanding Market Volatility',
    category: 'Technical Analysis',
    difficulty: 'Intermediate',
    readTime: '6 min read',
    summary: 'How historical and implied volatility affect position sizing, stop distance, and execution slippage.',
    sections: [
      {
        heading: 'Historical vs. Implied Volatility',
        content: 'Historical volatility measures past price dispersion over a defined lookback. Implied volatility reflects future price swings priced in by options markets.'
      },
      {
        heading: 'Volatility Regimes in Strategy Selection',
        content: 'High-volatility regimes favor trend-following and momentum breakout strategies. Low-volatility environments favor mean-reversion and range-trading models.'
      }
    ],
    keyTakeaways: [
      'Volatility is cyclical: periods of contraction precede expansion.',
      'Use ATR to dynamically adjust position size to market volatility.',
      'Digital assets and commodities typically exhibit higher volatility than G10 FX.'
    ],
    relatedCrossLinks: [
      { title: 'Quantitative Volatility Tools', href: '/tools/quant' },
      { title: 'Algorithmic Trading Models', href: '/tools/algo' }
    ]
  },
  {
    id: 'guide-9',
    slug: 'how-trading-spreads-affect-costs',
    title: 'How Trading Spreads Affect Execution Costs',
    category: 'Trading Tools',
    difficulty: 'Beginner',
    readTime: '4 min read',
    summary: 'Comparing fixed, variable, and raw ECN spreads plus commission models for active traders.',
    sections: [
      {
        heading: 'Raw Spreads vs. Standard Account Pricing',
        content: 'Raw accounts stream interbank spreads from 0.0 pips with a fixed per-lot commission ($3.50/side). Standard accounts embed the cost entirely within an all-inclusive spread.'
      },
      {
        heading: 'Calculating Total Cost of Round-Turn Trades',
        content: 'Total cost = (Spread in Pips x Pip Value) + Commission. Scalpers and high-frequency traders typically achieve lower net costs on Raw Spread accounts.'
      }
    ],
    keyTakeaways: [
      'Raw Spread accounts provide unadulterated interbank feeds.',
      'Lower spreads reduce entry and exit friction for active intraday strategies.',
      'Zero markup on Raw accounts.'
    ],
    relatedCrossLinks: [
      { title: 'Spread Schedule & Fees', href: '/trading/spreads' },
      { title: 'Compare Account Tiers', href: '/trading/accounts' }
    ]
  },
  {
    id: 'guide-10',
    slug: 'market-vs-limit-orders',
    title: 'Market Orders vs. Limit & Stop Orders',
    category: 'Platforms',
    difficulty: 'Beginner',
    readTime: '5 min read',
    summary: 'When to execute instantly at market price versus staging pending limit and stop orders.',
    sections: [
      {
        heading: 'Market Orders',
        content: 'Instructs the execution engine to fill your order immediately at the best available prevailing bid or ask price currently in the order book.'
      },
      {
        heading: 'Limit vs. Stop Orders',
        content: 'Limit orders buy below or sell above the market (favorable price). Stop orders trigger once price passes through a breakout threshold.'
      }
    ],
    keyTakeaways: [
      'Market orders prioritize immediate fill over exact price certainty.',
      'Limit orders guarantee price or better, but risk non-execution.',
      'Stop orders convert to market orders once the trigger is breached.'
    ],
    relatedCrossLinks: [
      { title: 'Supported Order Types', href: '/trading/order-types' },
      { title: 'WebTrader Terminal', href: '/platforms/webtrader' }
    ]
  },
  {
    id: 'guide-11',
    slug: 'building-a-basic-trading-routine',
    title: 'Building a Disciplined Daily Trading Routine',
    category: 'Getting Started',
    difficulty: 'Intermediate',
    readTime: '6 min read',
    summary: 'A step-by-step pre-market, in-session, and post-session workflow for sustainable market participation.',
    sections: [
      {
        heading: 'Pre-Market Preparation',
        content: 'Check the economic calendar for red-impact events, review major index trendlines, and update your personal watchlist before the session bell.'
      },
      {
        heading: 'Post-Market Journaling',
        content: 'Record execution prices, planned vs actual risk:reward, emotional state, and rule compliance in a structured trading journal.'
      }
    ],
    keyTakeaways: [
      'Structure eliminates impulsive, unverified trades.',
      'Pre-market calendar checks prevent unexpected news slippage.',
      'Journaling reveals behavioral patterns and improves execution consistency.'
    ],
    relatedCrossLinks: [
      { title: 'Economic Calendar', href: '/tools/economic-calendar' },
      { title: 'Trading Academy Courses', href: '/resources/academy' }
    ]
  },
  {
    id: 'guide-12',
    slug: 'understanding-position-size',
    title: 'How to Calculate Exact Position Sizing',
    category: 'Risk Management',
    difficulty: 'Intermediate',
    readTime: '5 min read',
    summary: 'The mathematical formula connecting account balance, risk percentage, stop loss distance, and lot allocation.',
    sections: [
      {
        heading: 'The Position Sizing Formula',
        content: 'Position Size (Lots) = (Account Balance x Risk %) / (Stop Loss in Pips x Pip Value per Standard Lot).'
      },
      {
        heading: 'Worked Mathematical Example',
        content: 'On a $10,000 account risking 1% ($100) with a 20-pip stop on EUR/USD ($10/pip on 1 lot): Lots = $100 / (20 x $10) = 0.50 Lots.'
      }
    ],
    keyTakeaways: [
      'Position size must adapt to the size of your stop loss, not vice versa.',
      'Never trade a fixed lot size across volatile and quiet assets.',
      'Use our interactive calculator to automate this math in seconds.'
    ],
    relatedCrossLinks: [
      { title: 'Position Size Calculator', href: '/tools/calculators' },
      { title: 'Trading Conditions', href: '/trading/conditions' }
    ]
  }
];

// ==========================================
// WEBINARS (Upcoming & On-Demand Sessions)
// ==========================================
export const WEBINAR_SESSIONS: WebinarItem[] = [
  {
    id: 'webinar-1',
    slug: 'understanding-macro-drivers',
    title: 'Understanding Global Macro Drivers & Central Bank Policy',
    category: 'Macro Strategy',
    date: 'Thursday, Oct 22, 2026',
    time: '14:00 GMT',
    duration: '60 mins',
    status: 'Upcoming',
    speaker: {
      name: 'Daniel Morgan',
      role: 'Chief Currency Strategist',
      bio: 'Former institutional FX analyst with over 15 years experience analyzing central bank balance sheets and global sovereign yield curves.'
    },
    agenda: [
      'Deconstructing sovereign real yield differentials',
      'How to evaluate FOMC and ECB meeting minutes',
      'Positioning around Non-Farm Payrolls and CPI releases',
      'Live Q&A session with the research desk'
    ],
    learningOutcomes: [
      'Learn how interest rate expectations drive medium-term currency trends',
      'Master the economic calendar filtering routine for pre-market planning',
      'Identify cross-asset correlations between bond yields and equities'
    ]
  },
  {
    id: 'webinar-2',
    slug: 'trading-volatility-masterclass',
    title: 'Trading Volatility: ATR, Bollinger Bands & Risk Sizing',
    category: 'Technical Analysis',
    date: 'Tuesday, Oct 27, 2026',
    time: '15:30 GMT',
    duration: '45 mins',
    status: 'Upcoming',
    speaker: {
      name: 'Sarah Bennett',
      role: 'Senior Technical Analyst',
      bio: 'Quantitative technical researcher specializing in statistical volatility regimes and algorithmic indicator modeling.'
    },
    agenda: [
      'Measuring implied vs historical volatility on live charts',
      'Using Average True Range (ATR) for dynamic stop-loss sizing',
      'Bollinger Band squeeze breakout strategies',
      'Real-time charting examples on WebTrader and TradingView'
    ],
    learningOutcomes: [
      'Understand how volatility expansion cycles emerge from contractions',
      'Formulate rule-based entry triggers for breakout trades',
      'Prevent common stop-loss mistakes during high-volatility sessions'
    ]
  },
  {
    id: 'webinar-3',
    slug: 'risk-management-leveraged-markets',
    title: 'Risk Management Architecture in Leveraged Markets',
    category: 'Risk Management',
    date: 'Thursday, Nov 05, 2026',
    time: '14:00 GMT',
    duration: '50 mins',
    status: 'Upcoming',
    speaker: {
      name: 'Michael Reed',
      role: 'Head of Risk Education',
      bio: 'Institutional risk manager focused on capital preservation protocols, drawdown controls, and portfolio stress testing.'
    },
    agenda: [
      'The mathematics of drawdown recovery and ruin probability',
      'Deterministic position sizing across multi-asset portfolios',
      'Managing margin call thresholds and stop-out mechanics',
      'Weekend gap risk and defensive overnight positioning'
    ],
    learningOutcomes: [
      'Calculate precise position size based on account risk ceilings',
      'Implement fractional risk-budgeting models',
      'Understand how automated stop-out engines protect remaining account capital'
    ]
  },
  {
    id: 'webinar-4',
    slug: 'technical-analysis-workshop-ondemand',
    title: 'Technical Analysis Workshop: Support, Resistance & Structure',
    category: 'Technical Analysis',
    date: 'Recorded Session',
    time: 'On-Demand',
    duration: '55 mins',
    status: 'On-Demand',
    videoDuration: '54:20',
    speaker: {
      name: 'Sarah Bennett',
      role: 'Senior Technical Analyst',
      bio: 'Quantitative technical researcher specializing in statistical volatility regimes and algorithmic indicator modeling.'
    },
    agenda: [
      'Mapping horizontal support and resistance zones',
      'Identifying institutional order block supply/demand areas',
      'Multi-timeframe structural alignment (Daily -> H4 -> M15)',
      'Practical trade walkthroughs on EUR/USD and Spot Gold'
    ],
    learningOutcomes: [
      'Read price action context without relying on lagging indicators',
      'Identify key inflection zones with high risk:reward potential',
      'Align intraday executions with higher-timeframe trend direction'
    ]
  },
  {
    id: 'webinar-5',
    slug: 'algorithmic-trading-primer-ondemand',
    title: 'Algorithmic Trading: From Concept to Automated Execution',
    category: 'Platform Masterclass',
    date: 'Recorded Session',
    time: 'On-Demand',
    duration: '65 mins',
    status: 'On-Demand',
    videoDuration: '62:45',
    speaker: {
      name: 'Daniel Morgan',
      role: 'Chief Currency Strategist',
      bio: 'Former institutional FX analyst with over 15 years experience analyzing central bank balance sheets and global sovereign yield curves.'
    },
    agenda: [
      'Overview of MQL5, Pine Script, and REST/FIX APIs',
      'Backtesting quantitative models with historical tick data',
      'Managing execution slippage and server latency in LD4',
      'Deploying automated Expert Advisors with strict risk checks'
    ],
    learningOutcomes: [
      'Understand how automated trading pipelines operate',
      'Avoid curve-fitting pitfalls during historical backtesting',
      'Configure automated risk parameters before deploying code'
    ]
  }
];

// ==========================================
// GLOSSARY TERMS (60+ Financial Terms A-Z)
// ==========================================
export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // A
  { id: 'ask-price', term: 'Ask Price', category: 'Orders', letter: 'A', definition: 'The lowest quoted price at which a market maker or seller is willing to sell a financial instrument. When opening a long (buy) position, your order is executed at the Ask price.', example: 'If EUR/USD is quoted at 1.0850 / 1.0852, the Ask price is 1.0852.' },
  { id: 'atr', term: 'Average True Range (ATR)', category: 'Technical', letter: 'A', definition: 'A technical indicator that measures market volatility by calculating the average range between high and low prices over a specified lookback period (typically 14 periods).', example: 'An ATR of 80 pips indicates that the asset typically moves 80 pips per day.' },
  { id: 'algorithmic-trading', term: 'Algorithmic Trading', category: 'Technical', letter: 'A', definition: 'The use of automated computer programs and mathematical algorithms to execute trading orders according to predefined rules for timing, price, and volume.', example: 'An Expert Advisor programmed in MQL5 that enters trades when RSI crosses 30.' },

  // B
  { id: 'base-currency', term: 'Base Currency', category: 'Basics', letter: 'B', definition: 'The first currency listed in a currency pair quotation. The quote indicates how much of the second currency is needed to purchase one unit of the base currency.', example: 'In GBP/USD = 1.3000, GBP is the base currency.' },
  { id: 'bid-price', term: 'Bid Price', category: 'Orders', letter: 'B', definition: 'The highest quoted price at which a buyer is willing to purchase an asset in the order book. When opening a short (sell) position, your order executes at the Bid price.', example: 'If GBP/USD is 1.3045 / 1.3047, the Bid price is 1.3045.' },
  { id: 'bollinger-bands', term: 'Bollinger Bands', category: 'Technical', letter: 'B', definition: 'A technical analysis tool consisting of a simple moving average and two standard deviation bands plotted above and below the average to assess relative volatility and price extremes.', example: 'Price touching the lower band during a ranging market can indicate temporary oversold conditions.' },
  { id: 'breakout', term: 'Breakout', category: 'Technical', letter: 'B', definition: 'A market situation where the price of an instrument moves decisively beyond a defined support or resistance level with expanding volume.', example: 'Gold breaking out above $2,650 resistance with high turnover.' },
  { id: 'balance', term: 'Balance', category: 'Basics', letter: 'B', definition: 'The total realized funds in a trading account excluding unrealized profit or loss from open positions.', example: 'An account with $10,000 deposited has a balance of $10,000.' },
  { id: 'bracket-order', term: 'Bracket Order (OCO)', category: 'Orders', letter: 'B', definition: 'A multi-leg conditional order designed to limit losses and lock in profits simultaneously by bracketing a trade with both a Take Profit and Stop Loss order.', example: 'Entering EUR/USD long with a 20-pip Stop Loss and 40-pip Take Profit attached.' },

  // C
  { id: 'candlestick', term: 'Candlestick Chart', category: 'Technical', letter: 'C', definition: 'A style of financial price chart originating in Japan that displays the Open, High, Low, and Close prices for a given timeframe as a vertical bar with a colored real body and wicks.', example: 'A daily candlestick summarizing 24 hours of market trading.' },
  { id: 'cfd', term: 'CFD (Contract for Difference)', category: 'Instruments', letter: 'C', definition: 'A financial derivative contract between an investor and a broker to exchange the difference between the open and close prices of an underlying asset without owning the physical asset.', example: 'Speculating on the price of Spot Crude Oil without taking physical delivery of barrels.' },
  { id: 'commission', term: 'Commission', category: 'Basics', letter: 'C', definition: 'A flat fee charged per traded lot by a broker for executing an order, typically associated with Raw Spread accounts with zero dealer markups.', example: 'A $3.50 commission per standard lot on raw spread execution.' },
  { id: 'correlation', term: 'Correlation', category: 'Macro', letter: 'C', definition: 'A statistical measure ranging from -1.0 to +1.0 that expresses the extent to which two financial assets move in relation to each other.', example: 'EUR/USD and GBP/USD frequently exhibit a positive correlation of +0.80.' },
  { id: 'cpi', term: 'Consumer Price Index (CPI)', category: 'Macro', letter: 'C', definition: 'A primary macroeconomic indicator measuring the average change over time in prices paid by consumers for a representative basket of goods and services.', example: 'A higher than expected CPI print often boosts expectations of central bank interest rate hikes.' },

  // D
  { id: 'day-order', term: 'Day Order (DAY)', category: 'Orders', letter: 'D', definition: 'An order duration attribute specifying that the pending order remains active only until the end of the current trading session (23:59 server time), after which it cancels if unfilled.', example: 'Staging a limit order that expires automatically at the daily close.' },
  { id: 'depth-of-market', term: 'Depth of Market (DOM)', category: 'Technical', letter: 'D', definition: 'A measure of the total volume of buy and sell limit orders waiting in the order book at various price levels beyond the top of the book.', example: 'Viewing available order depth across Level II pricing on MetaTrader 5.' },
  { id: 'drawdown', term: 'Drawdown', category: 'Risk', letter: 'D', definition: 'The peak-to-trough decline in account equity or portfolio value, expressed as a percentage of peak capital.', example: 'An account declining from $10,000 to $9,000 experiences a 10% drawdown.' },
  { id: 'diversification', term: 'Diversification', category: 'Risk', letter: 'D', definition: 'A risk management strategy that mixes a wide variety of uncorrelated investments within a portfolio to reduce unsystematic risk.', example: 'Allocating capital across foreign exchange, precious metals, and cash indices.' },

  // E
  { id: 'equity', term: 'Equity', category: 'Basics', letter: 'E', definition: 'The true real-time liquidation value of a trading account, calculated as Balance plus or minus unrealized floating profits and losses.', example: 'Balance of $10,000 with floating profit of +$250 equals Equity of $10,250.' },
  { id: 'ecn', term: 'Electronic Communication Network (ECN)', category: 'Basics', letter: 'E', definition: 'An automated execution system that directly connects market participants with tier-1 liquidity providers without dealer intervention.', example: 'RegearFX straight-through routing to aggregated bank and non-bank market makers.' },
  { id: 'economic-calendar', term: 'Economic Calendar', category: 'Macro', letter: 'E', definition: 'A chronological schedule of macroeconomic data releases, policy decisions, and governmental reports that impact asset volatility.', example: 'Tracking Non-Farm Payrolls and GDP announcements.' },
  { id: 'expert-advisor', term: 'Expert Advisor (EA)', category: 'Technical', letter: 'E', definition: 'An automated trading script developed in MQL4 or MQL5 that runs within the MetaTrader terminal to monitor markets and execute trades according to programmed rules.', example: 'An automated trend-following robot executing FX orders.' },

  // F
  { id: 'fibonacci-retracement', term: 'Fibonacci Retracement', category: 'Technical', letter: 'F', definition: 'A technical analysis tool using horizontal lines based on key Fibonacci mathematical ratios (23.6%, 38.2%, 50%, 61.8%) to identify potential support and resistance pullback levels.', example: 'EUR/USD pulling back exactly to the 61.8% retracement level before resuming its trend.' },
  { id: 'fill-or-kill', term: 'Fill or Kill (FOK)', category: 'Orders', letter: 'F', definition: 'A time-in-force order instruction requiring the entire order volume to execute in full immediately upon arrival at the gateway or cancel entirely.', example: 'Submitting an order for 20 lots that must fill completely or not at all.' },
  { id: 'floating-pnl', term: 'Floating P&L', category: 'Basics', letter: 'F', definition: 'The current unrealized profit or loss on active open positions based on mark-to-market prices.', example: 'An open trade currently showing +$150 before being closed.' },
  { id: 'fundamental-analysis', term: 'Fundamental Analysis', category: 'Macro', letter: 'F', definition: 'A method of evaluating asset valuation and price direction by examining economic indicators, central bank policies, interest rates, and geopolitical factors.', example: 'Analyzing GDP growth and trade balances to forecast currency trends.' },

  // G
  { id: 'gtc', term: 'Good \'Til Cancelled (GTC)', category: 'Orders', letter: 'G', definition: 'A time-in-force order instruction specifying that a pending order remains active in the order book until filled or explicitly revoked by the trader.', example: 'A limit order placed on Gold that stays active across multiple trading days.' },
  { id: 'gdp', term: 'Gross Domestic Product (GDP)', category: 'Macro', letter: 'G', definition: 'The total monetary value of all finished goods and services produced within a country during a specific period, serving as a primary scorecard of economic health.', example: 'Quarterly US GDP growth figures influencing currency momentum.' },

  // H
  { id: 'hedging', term: 'Hedging', category: 'Risk', letter: 'H', definition: 'Opening a position to offset potential losses in an existing investment, or holding simultaneous long and short positions in the same or correlated instruments.', example: 'Holding long EUR/USD and opening short EUR/USD to freeze current floating P&L.' },
  { id: 'high-frequency-trading', term: 'High-Frequency Trading (HFT)', category: 'Technical', letter: 'H', definition: 'Algorithmic trading characterized by ultra-low latency execution and rapid order entry and cancellation to capture fractional price inefficiencies.', example: 'Automated algorithms executing hundreds of orders per second in Equinix LD4.' },

  // I
  { id: 'implied-volatility', term: 'Implied Volatility (IV)', category: 'Technical', letter: 'I', definition: 'The market\'s forecast of a likely movement in an asset\'s price as derived from options pricing formulas.', example: 'Elevated implied volatility prior to an election or central bank rate decision.' },
  { id: 'interest-rate-differential', term: 'Interest Rate Differential', category: 'Macro', letter: 'I', definition: 'The difference between the central bank benchmark interest rates of two sovereign currencies, dictating carry trade appeal and forward swap costs.', example: 'The difference between the US Federal Funds rate (5.00%) and the Bank of Japan rate (0.25%).' },
  { id: 'ioc', term: 'Immediate or Cancel (IOC)', category: 'Orders', letter: 'I', definition: 'A time-in-force instruction specifying that any portion of an order that can execute immediately is filled, while any unfilled remainder is cancelled.', example: 'Submitting 10 lots where 7 lots fill immediately and 3 lots are cancelled.' },

  // L
  { id: 'leverage', term: 'Leverage', category: 'Basics', letter: 'L', definition: 'The ratio of notional position volume to required margin collateral, allowing market participants to hold positions larger than initial account capital.', example: 'A leverage of 1:100 allows a $1,000 margin deposit to control a $100,000 position.' },
  { id: 'limit-order', term: 'Limit Order', category: 'Orders', letter: 'L', definition: 'A pending order to buy an asset at or below a specified target price, or sell at or above a specified target price.', example: 'Placing a Buy Limit on EUR/USD at 1.0820 when the current price is 1.0874.' },
  { id: 'liquidity', term: 'Liquidity', category: 'Basics', letter: 'L', definition: 'The ease with which an asset can be rapidly bought or sold in the market without causing a significant price change.', example: 'EUR/USD is the world\'s most liquid currency pair with deep bid-ask books.' },
  { id: 'lot', term: 'Lot', category: 'Basics', letter: 'L', definition: 'A standardized unit of measurement representing the volume of a transaction. In forex, 1 Standard Lot equals 100,000 units of the base currency; a Mini Lot is 10,000 units; a Micro Lot is 1,000 units.', example: 'Buying 0.10 lots (Mini Lot) of GBP/USD equals 10,000 British Pounds.' },

  // M
  { id: 'macd', term: 'MACD (Moving Average Convergence Divergence)', category: 'Technical', letter: 'M', definition: 'A trend-following momentum oscillator that shows the relationship between two exponential moving averages of an asset\'s price.', example: 'A bullish crossover occurring when the MACD line crosses above the signal line.' },
  { id: 'margin', term: 'Margin', category: 'Basics', letter: 'M', definition: 'The collateral equity required by a broker and locked in the account to open and maintain an active leveraged position.', example: 'Opening 1 lot of EUR/USD at 1:100 leverage requires $1,000 in margin collateral.' },
  { id: 'margin-call', term: 'Margin Call', category: 'Risk', letter: 'M', definition: 'An alert issued by the trading platform when Account Equity declines to 100% of Used Margin, warning the trader to add funds or reduce open exposure.', example: 'Receiving a terminal notification when account margin usage reaches capacity.' },
  { id: 'market-order', term: 'Market Order', category: 'Orders', letter: 'M', definition: 'An order instruction to buy or sell an asset immediately at the best prevailing bid or ask price currently available in the order book.', example: 'Clicking "Buy Now" on WebTrader to execute immediately at prevailing interbank rates.' },
  { id: 'micro-lot', term: 'Micro Lot', category: 'Basics', letter: 'Micro Lot', definition: 'A contract size of 1,000 units of the base currency (0.01 standard lots), enabling precise position sizing for retail accounts.', example: 'Trading 0.01 lots of USD/CAD.' },
  { id: 'momentum', term: 'Momentum', category: 'Technical', letter: 'M', definition: 'The rate of acceleration of a price movement, indicating the velocity and strength behind an ongoing trend.', example: 'Using RSI or Rate of Change indicators to measure trend momentum.' },

  // N
  { id: 'negative-balance-protection', term: 'Negative Balance Protection (NBP)', category: 'Risk', letter: 'N', definition: 'A safeguard mechanism guaranteeing that retail client account balances cannot drop below zero, even during catastrophic weekend market gaps.', example: 'RegearFX absorbing deficit liabilities to restore retail balances to zero.' },
  { id: 'non-farm-payrolls', term: 'Non-Farm Payrolls (NFP)', category: 'Macro', letter: 'N', definition: 'A major monthly US economic indicator published on the first Friday of each month reporting the net change in employed workers excluding farm employees.', example: 'The NFP report frequently produces 50+ pip swings in USD pairs within seconds of release.' },

  // O
  { id: 'oco', term: 'One-Cancels-the-Other (OCO)', category: 'Orders', letter: 'O', definition: 'A pair of conditional orders where the execution of one automatically triggers the instantaneous cancellation of the other.', example: 'A simultaneous Take Profit and Stop Loss order attached to an active trade.' },
  { id: 'open-interest', term: 'Open Interest', category: 'Technical', letter: 'O', definition: 'The total number of outstanding derivative contracts (futures or options) that have not been settled or closed.', example: 'High open interest on Bitcoin options indicating substantial institutional positioning.' },

  // P
  { id: 'pip', term: 'Pip (Percentage in Point)', category: 'Basics', letter: 'P', definition: 'The standard measurement unit representing the smallest discrete price change in exchange rates, typically 0.0001 for standard currency pairs.', example: 'EUR/USD moving from 1.0850 to 1.0851 represents a 1-pip movement.' },
  { id: 'position-sizing', term: 'Position Sizing', category: 'Risk', letter: 'P', definition: 'The mathematical calculation determining how many lots to trade on a given setup to ensure dollar risk remains strictly within defined account parameters.', example: 'Calculating that a 25-pip stop on a $10,000 account risking 1% requires 0.40 lots.' },
  { id: 'price-action', term: 'Price Action', category: 'Technical', letter: 'P', definition: 'A trading methodology that analyzes clean historical price movements, candlesticks, and structural highs/lows without heavy reliance on lagging mathematical indicators.', example: 'Trading pin bar reversals at key daily support zones.' },

  // Q
  { id: 'quantitative-analysis', term: 'Quantitative Analysis', category: 'Technical', letter: 'Q', definition: 'The use of mathematical, statistical, and numerical modeling to understand market price behavior and identify systematic probabilistic edges.', example: 'Calculating rolling correlation matrices and standard deviation distributions.' },
  { id: 'quote-currency', term: 'Quote Currency', category: 'Basics', letter: 'Q', definition: 'The second currency listed in a currency pair quotation, representing the price of one unit of the base currency.', example: 'In EUR/USD, the US Dollar is the quote currency.' },

  // R
  { id: 'relative-strength-index', term: 'Relative Strength Index (RSI)', category: 'Technical', letter: 'R', definition: 'A momentum oscillator measuring the speed and magnitude of recent price changes on a scale of 0 to 100 to identify overbought (>70) and oversold (<30) conditions.', example: 'RSI divergence occurring when price makes a new high but RSI fails to confirm.' },
  { id: 'resistance', term: 'Resistance Zone', category: 'Technical', letter: 'R', definition: 'A price level or zone where selling pressure and overhead supply historically overcome buying interest, halting an upward price advance.', example: 'Gold repeatedly failing to breach $2,680 resistance.' },
  { id: 'risk-reward-ratio', term: 'Risk-to-Reward Ratio (R:R)', category: 'Risk', letter: 'R', definition: 'The ratio comparing the potential monetary loss of a trade (stop loss distance) to the potential monetary gain (take profit target).', example: 'A trade with a $100 stop loss and $300 profit target offers a 1:3 R:R ratio.' },
  { id: 'rollover-swap', term: 'Rollover Swap', category: 'Basics', letter: 'R', definition: 'The interest rate differential credited or debited to an account when holding a leveraged position open past the daily server settlement time (23:59).', example: 'Earning swap interest on long USD/JPY due to positive interest rate differentials.' },

  // S
  { id: 'scalping', term: 'Scalping', category: 'Technical', letter: 'S', definition: 'A high-frequency trading strategy aimed at capturing small fractional price movements by opening and closing positions within seconds or minutes.', example: 'Executing multiple EUR/USD trades aiming for 3–5 pips of profit.' },
  { id: 'slippage', term: 'Slippage', category: 'Basics', letter: 'S', definition: 'The difference between the expected price of an order and the actual price at which the order executes at the interbank gateway, which can be positive or negative.', example: 'Submitting a market order at 1.0850 that executes at 1.08505 due to rapid price velocity.' },
  { id: 'spot-market', term: 'Spot Market', category: 'Basics', letter: 'S', definition: 'A financial market in which instruments or currencies are traded for immediate settlement at current prevailing market rates.', example: 'Spot Gold (XAU/USD) or spot foreign exchange.' },
  { id: 'spread', term: 'Spread', category: 'Basics', letter: 'S', definition: 'The difference between the Bid (sell) price and the Ask (buy) price quoted for a financial instrument.', example: 'A Bid of 1.0874 and an Ask of 1.0876 represents a 0.2-pip spread.' },
  { id: 'stop-loss', term: 'Stop Loss Order', category: 'Orders', letter: 'S', definition: 'A risk-mitigation order placed to automatically close an active position if market price moves adversely to a specified loss threshold.', example: 'Setting a stop loss 30 pips below entry on a long trade.' },
  { id: 'stop-out', term: 'Stop-Out Level', category: 'Risk', letter: 'S', definition: 'The margin level percentage (50% on RegearFX) at which the platform liquidation engine automatically closes open positions sequentially to prevent account deficit.', example: 'Positions automatically liquidating when account equity drops to half of used margin.' },
  { id: 'support', term: 'Support Zone', category: 'Technical', letter: 'S', definition: 'A price level or zone where buying pressure and demand historically overcome selling pressure, halting a downward price decline.', example: 'Bitcoin finding strong support at $62,000.' },

  // T
  { id: 'take-profit', term: 'Take Profit (TP)', category: 'Orders', letter: 'T', definition: 'A pending exit order that automatically closes an active position once market price reaches a specified profit target.', example: 'Setting a take profit order 50 pips above entry.' },
  { id: 'trailing-stop', term: 'Trailing Stop', category: 'Orders', letter: 'T', definition: 'A dynamic stop-loss order that automatically tracks favorable price movements at a fixed distance, locking in unrealized gains as price advances.', example: 'A 20-pip trailing stop that ratchets upward as EUR/USD rises.' },

  // V
  { id: 'volatility', term: 'Volatility', category: 'Basics', letter: 'V', definition: 'A statistical measure of the dispersion and velocity of price returns for a given financial security over a specified time horizon.', example: 'High volatility during central bank rate announcements.' },
  { id: 'volume', term: 'Volume', category: 'Basics', letter: 'V', definition: 'The total number of contracts, shares, or lots transacted during a given trading period.', example: 'High volume accompanying a breakout confirm the authenticity of the move.' }
];
