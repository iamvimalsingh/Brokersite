import { BRAND_NAME, BROKER_CONFIG } from './config';
import {
  HelpCategory,
  FAQItem,
  SupportChannel,
  TroubleshootingTopic,
  ServiceStatusItem,
  SearchResultItem
} from '@/types/help';

// ==========================================
// 8 HELP CATEGORIES
// ==========================================
export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    shortDesc: 'Learn how to explore markets, understand trading basics and get familiar with the RegearFX platform.',
    articleCount: 8,
    iconName: 'Compass',
    href: '/help/faq?category=Getting%20Started'
  },
  {
    id: 'trading',
    title: 'Trading',
    shortDesc: 'Master order types, leverage mechanics, pips, slippage, and position sizing rules.',
    articleCount: 12,
    iconName: 'TrendingUp',
    href: '/help/faq?category=Trading'
  },
  {
    id: 'markets',
    title: 'Markets',
    shortDesc: 'Explore available currency pairs, crypto assets, commodities, precious metals, and indices.',
    articleCount: 10,
    iconName: 'Globe',
    href: '/help/faq?category=Markets'
  },
  {
    id: 'platforms',
    title: 'Platforms',
    shortDesc: 'WebTrader, Mobile app, MetaTrader 5, MetaTrader 4, and TradingView configuration.',
    articleCount: 9,
    iconName: 'Laptop',
    href: '/help/faq?category=Platforms'
  },
  {
    id: 'accounts',
    title: 'Accounts',
    shortDesc: 'Standard vs. Raw Spread tiers, profile updates, base currencies, and verification guidelines.',
    articleCount: 8,
    iconName: 'UserCheck',
    href: '/help/faq?category=Accounts'
  },
  {
    id: 'security',
    title: 'Security',
    shortDesc: 'Two-Factor Authentication (2FA), session verification, withdrawal controls, and account protection.',
    articleCount: 7,
    iconName: 'ShieldCheck',
    href: '/help/faq?category=Security'
  },
  {
    id: 'fees',
    title: 'Fees',
    shortDesc: 'Understand raw spreads, commission schedules, overnight swaps, and financing mechanics.',
    articleCount: 8,
    iconName: 'BarChart2',
    href: '/help/faq?category=Fees'
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    shortDesc: 'Browser requirements, connectivity troubleshooting, cache clearing, and mobile device settings.',
    articleCount: 8,
    iconName: 'Wrench',
    href: '/help/support'
  }
];

// ==========================================
// 10 POPULAR QUESTIONS (Top of Help Center)
// ==========================================
export const POPULAR_QUESTIONS: FAQItem[] = [
  {
    id: 'pop-1',
    category: 'Getting Started',
    popular: true,
    question: `How do I open an account with ${BRAND_NAME}?`,
    answer: `Click "Open an Account" on any page to open our streamlined client registration portal. You will provide your basic personal profile, choose an account base currency, and configure your preferred trading tier (Standard or Raw Spread). You can also immediately access a risk-free demo account to practice trading before depositing funds.`
  },
  {
    id: 'pop-2',
    category: 'Markets',
    popular: true,
    question: 'Which markets are available for trading?',
    answer: `${BRAND_NAME} provides access to 1,000+ tradable instruments across five asset classes: major, minor, and exotic Forex pairs, 24/7 digital asset derivatives (BTC, ETH, SOL), global equity indices (US500, NAS100, UK100), spot energy commodities (WTI, Brent Crude), and precious metals (Gold, Silver, Platinum).`
  },
  {
    id: 'pop-3',
    category: 'Platforms',
    popular: true,
    question: 'What platforms can I use to trade?',
    answer: `You can trade directly in any desktop or mobile browser using ${BRAND_NAME} WebTrader with zero software installation required. We also support our dedicated iOS and Android mobile trading applications, as well as MetaTrader 5 (MT5), MetaTrader 4 (MT4), and TradingView charting integration.`
  },
  {
    id: 'pop-4',
    category: 'Trading',
    popular: true,
    question: 'What is leverage and how does it work?',
    answer: `Leverage allows you to control a larger market position size by committing a fraction of the total trade value as margin. For example, with 1:100 leverage, $1,000 of account equity can control a $100,000 position. While leverage magnifies potential gains, it also increases risk exposure, which is why strict stop-loss rules are essential.`,
    details: {
      definition: 'Leverage is a borrowing mechanism enabling exposure to larger notional trade volumes.',
      example: '$500 margin at 1:100 leverage controls $50,000 notional volume (0.50 standard lot).',
      note: 'RegearFX provides negative balance protection so your account cannot fall below zero.'
    }
  },
  {
    id: 'pop-5',
    category: 'Fees',
    popular: true,
    question: 'How are spreads calculated?',
    answer: `The spread is the difference between the Ask (buy) price and the Bid (sell) price quoted by liquidity providers. On our Raw Spread account, spreads stream directly from interbank liquidity pools from 0.0 pips with a fixed commission of $3.50 per lot per side. On our Standard account, spreads start from 0.8 pips with zero commission.`
  },
  {
    id: 'pop-6',
    category: 'Trading',
    popular: true,
    question: 'What is required margin and free margin?',
    answer: `Required margin is the collateral held by the brokerage to maintain your open positions. Free margin is your remaining account equity available to open new trades or absorb market price fluctuations. If your equity falls to the margin call threshold (80%), you will receive an alert; at the 50% stop-out level, trades are closed automatically to prevent deficit.`,
    details: {
      definition: 'Free Margin = Equity − Used Margin. Margin Level = (Equity / Used Margin) × 100%.',
      example: 'If equity is $10,000 and used margin is $2,000, free margin is $8,000 (Margin level = 500%).'
    }
  },
  {
    id: 'pop-7',
    category: 'Trading',
    popular: true,
    question: 'How do I place an order (Market, Limit, Stop)?',
    answer: `In WebTrader or MT5, click on your chosen instrument to open the order ticket. Choose "Market Order" for instantaneous execution at the current spot price, "Limit Order" to execute only if the market reaches a more favorable price, or "Stop Order" to trigger a buy above or sell below the current price when momentum breaks through a key level.`
  },
  {
    id: 'pop-8',
    category: 'Security',
    popular: true,
    question: 'How do I protect my account with 2FA?',
    answer: `You can enable Two-Factor Authentication (2FA) inside your client profile settings using any standard TOTP authenticator app (Google Authenticator, Microsoft Authenticator). Once activated, you will enter a time-sensitive 6-digit passcode upon sign-in, sensitive profile modifications, and all withdrawal requests.`
  },
  {
    id: 'pop-9',
    category: 'Fees',
    popular: true,
    question: 'Where can I view transparent trading conditions?',
    answer: `All live spreads, average historical spreads, overnight financing swap schedules, trading hours, and leverage tiers are published transparently on our public website under the Trading > Conditions section and Trading > Spreads section.`
  },
  {
    id: 'pop-10',
    category: 'Technical Support',
    popular: true,
    question: 'How can I contact the support desk?',
    answer: `You can reach our dedicated support desk via email at support@regearfx.com, phone at +44 20 7946 0185, or by submitting our online Support Form. General inquiries receive a response within 1 business day, and critical technical assistance is prioritized during market hours.`
  }
];

// ==========================================
// 50+ COMPREHENSIVE FAQ ITEMS (7 GROUPS)
// ==========================================
export const FAQ_ITEMS: FAQItem[] = [
  // ------------------------------------------
  // GROUP 1: GETTING STARTED (8 items)
  // ------------------------------------------
  {
    id: 'faq-gs-1',
    category: 'Getting Started',
    question: `What is ${BRAND_NAME}?`,
    answer: `${BRAND_NAME} is a modern online multi-asset brokerage offering retail and institutional clients access to over 1,000+ global financial instruments. We provide low-latency execution, transparent raw pricing, rich research commentary, and comprehensive educational resources.`,
    tags: ['Overview', 'Brokerage', 'Introduction']
  },
  {
    id: 'faq-gs-2',
    category: 'Getting Started',
    question: 'How do I open a live or demo trading account?',
    answer: 'Simply click "Open an Account" in the top header. Complete the 3-minute registration form with your email and password. Once registered, you will have immediate access to a practice demo account with virtual funds, as well as instructions to activate your live trading account.',
    tags: ['Account Opening', 'Registration', 'Demo']
  },
  {
    id: 'faq-gs-3',
    category: 'Getting Started',
    question: 'What information is required to register?',
    answer: 'Initial registration requires only your full name, email address, country of residence, and phone number. To activate live trading with real funds, standard identity verification (KYC) documents such as a government-issued photo ID and proof of address are submitted inside the secure client portal.',
    tags: ['KYC', 'Verification', 'Onboarding']
  },
  {
    id: 'faq-gs-4',
    category: 'Getting Started',
    question: 'How long does account setup take?',
    answer: 'Digital registration and demo account creation are instant. Live account verification is typically processed by our automated compliance system within a few hours during business days.',
    tags: ['Speed', 'Setup Time', 'Verification']
  },
  {
    id: 'faq-gs-5',
    category: 'Getting Started',
    question: 'Can I access the trading platform directly from my browser?',
    answer: `Yes. ${BRAND_NAME} WebTrader is accessible from Chrome, Safari, Edge, and Firefox without downloading any executable files. It provides institutional charting, one-click order tickets, and full position management.`,
    tags: ['WebTrader', 'Browser', 'No Download']
  },
  {
    id: 'faq-gs-6',
    category: 'Getting Started',
    question: 'Where can I learn the basics of financial trading?',
    answer: 'Our free Trading Academy offers 3 structured tracks (Beginner, Intermediate, Advanced) with 9 comprehensive courses covering currency mechanics, chart patterns, risk budgeting, and order execution.',
    tags: ['Academy', 'Education', 'Learning']
  },
  {
    id: 'faq-gs-7',
    category: 'Getting Started',
    question: 'Is there a minimum deposit requirement?',
    answer: 'The Standard account has a low minimum initial deposit of $50, making it accessible to beginners. The Raw Spread account requires a $200 minimum deposit, and the institutional Pro account starts at $10,000.',
    tags: ['Deposit', 'Minimum', 'Tiers']
  },
  {
    id: 'faq-gs-8',
    category: 'Getting Started',
    question: 'Can I test trading strategies with virtual money?',
    answer: 'Yes. All registered clients receive a demo trading account credited with virtual funds ($10,000 or $50,000 default balance) to test trading conditions, indicators, and platform features risk-free.',
    tags: ['Demo Account', 'Virtual Money', 'Strategy Testing']
  },

  // ------------------------------------------
  // GROUP 2: ACCOUNTS (8 items)
  // ------------------------------------------
  {
    id: 'faq-acc-1',
    category: 'Accounts',
    question: 'What account types are available?',
    answer: `${BRAND_NAME} offers three primary account tiers: Standard (all-inclusive spreads from 0.8 pips, zero commission), Raw Spread (interbank spreads from 0.0 pips + $3.50/lot commission), and Pro (volume discounts, custom liquidity routing, dedicated account manager).`,
    details: {
      definition: 'Account tiers cater to different trading frequencies and capital sizes.',
      example: 'Day traders and scalpers usually prefer the Raw Spread account for minimum transaction drag.'
    }
  },
  {
    id: 'faq-acc-2',
    category: 'Accounts',
    question: 'Can I switch or hold multiple account types simultaneously?',
    answer: 'Yes. Inside the client portal, you can maintain multiple sub-accounts (for example, a Standard account for swing trading and a Raw Spread account for intraday algorithmic trading) and transfer balances between them seamlessly.',
    tags: ['Sub-Accounts', 'Account Switch', 'Multi-Account']
  },
  {
    id: 'faq-acc-3',
    category: 'Accounts',
    question: 'What base currencies can I choose for my account?',
    answer: 'You can denominate your trading account in USD, EUR, GBP, AUD, CAD, or JPY. Deposits in non-base currencies are converted at transparent interbank exchange rates upon arrival.',
    tags: ['Currencies', 'USD', 'EUR', 'GBP']
  },
  {
    id: 'faq-acc-4',
    category: 'Accounts',
    question: 'How do I update my email address or personal profile?',
    answer: 'To ensure account integrity, profile updates such as changing an email address or registered residential address are processed inside the secure client portal with Two-Factor Authentication verification.',
    tags: ['Profile', 'Settings', 'Update Email']
  },
  {
    id: 'faq-acc-5',
    category: 'Accounts',
    question: 'Are client funds kept in segregated bank accounts?',
    answer: `Yes. In strict compliance with regulatory standards, all client funds are held in segregated accounts at Tier-1 credit-rated banks, completely separated from ${BRAND_NAME} operational funds.`,
    tags: ['Segregation', 'Fund Safety', 'Tier-1 Banks']
  },
  {
    id: 'faq-acc-6',
    category: 'Accounts',
    question: 'How do I close or temporarily deactivate my trading account?',
    answer: 'You can request account deactivation or closure at any time through the client portal or by contacting support@regearfx.com after closing all open positions and withdrawing remaining equity.',
    tags: ['Closure', 'Deactivate', 'Withdrawal']
  },
  {
    id: 'faq-acc-7',
    category: 'Accounts',
    question: 'Is Islamic / Swap-Free account trading supported?',
    answer: 'Yes. Swap-free account options are available for clients who adhere to Islamic religious principles regarding overnight interest. Administrative carrying charges may apply on positions held beyond specific holding durations.',
    tags: ['Islamic', 'Swap-Free', 'Sharia']
  },
  {
    id: 'faq-acc-8',
    category: 'Accounts',
    question: 'Where can I download my historical trade statements and tax records?',
    answer: 'Detailed historical trade summaries, monthly profit/loss reports, and execution logs are exportable in CSV and PDF format directly from your client portal account dashboard.',
    tags: ['Statements', 'Reports', 'Tax', 'History']
  },

  // ------------------------------------------
  // GROUP 3: TRADING (10 items)
  // ------------------------------------------
  {
    id: 'faq-trd-1',
    category: 'Trading',
    question: 'What is a Market Order?',
    answer: 'A Market Order is an instruction to execute a buy or sell trade immediately at the best available current market price in the order book. Market orders prioritize execution speed over specific price certainty.',
    tags: ['Market Order', 'Instant Execution']
  },
  {
    id: 'faq-trd-2',
    category: 'Trading',
    question: 'What is a Limit Order (Buy Limit / Sell Limit)?',
    answer: 'A Limit Order is an order to buy at or below a specified price, or sell at or above a specified price. Limit orders guarantee price ceiling/floor but will not execute if market prices never reach your limit level.',
    tags: ['Limit Order', 'Pending Order']
  },
  {
    id: 'faq-trd-3',
    category: 'Trading',
    question: 'What is a Stop Order (Buy Stop / Sell Stop)?',
    answer: 'A Stop Order is a conditional order placed to buy above the current market price or sell below the current market price once a specific threshold is breached. It converts into a market order upon trigger.',
    tags: ['Stop Order', 'Breakout']
  },
  {
    id: 'faq-trd-4',
    category: 'Trading',
    question: 'What is a Stop Loss and Take Profit?',
    answer: 'A Stop Loss automatically closes an open position at a predetermined price to cap monetary drawdown. A Take Profit automatically closes a winning trade once your target price is reached to lock in realized profit.',
    tags: ['Stop Loss', 'Take Profit', 'Risk Control']
  },
  {
    id: 'faq-trd-5',
    category: 'Trading',
    question: 'What is a Pip and how is pip value calculated?',
    answer: 'A Pip (Percentage in Point) is the standard unit of price change in Forex exchange rates, representing 0.0001 for most currency pairs (and 0.01 for JPY pairs). For a standard 1.00 lot of EUR/USD, 1 pip equals $10.00 USD.',
    details: {
      definition: 'Pip Value = (1 pip / Exchange Rate) × Trade Notional Size.',
      example: 'On 0.10 lot (10,000 units) of GBP/USD, a 25-pip move equals $25.00 USD profit or loss.'
    }
  },
  {
    id: 'faq-trd-6',
    category: 'Trading',
    question: 'What causes Slippage and how does RegearFX mitigate it?',
    answer: 'Slippage occurs when an order executes at a price different from the requested price, typically during ultra-fast market news spikes or illiquid periods. RegearFX connects directly to aggregate Tier-1 liquidity venues to provide maximum order book depth and minimize slippage.',
    tags: ['Slippage', 'Execution', 'Volatility']
  },
  {
    id: 'faq-trd-7',
    category: 'Trading',
    question: 'What is the Margin Call and Stop-Out policy?',
    answer: 'When account equity falls below 80% of used margin, a Margin Call warning is displayed. If equity declines further to the 50% Stop-Out level, the execution engine begins closing open positions starting with the largest losing position to prevent account deficit.',
    tags: ['Margin Call', 'Stop-Out', 'Liquidation']
  },
  {
    id: 'faq-trd-8',
    category: 'Trading',
    question: 'What is Negative Balance Protection?',
    answer: `Negative Balance Protection ensures that unexpected gap volatility or extreme market moves will never cause your account balance to fall below zero. If an account experiences a negative balance during unprecedented market turbulence, ${BRAND_NAME} resets the deficit to zero.`,
    tags: ['Negative Balance Protection', 'Capital Safety']
  },
  {
    id: 'faq-trd-9',
    category: 'Trading',
    question: 'Are Hedging and Scalping strategies permitted?',
    answer: 'Yes. Hedging (holding simultaneous long and short positions on the same currency pair) and Scalping (opening and closing trades within brief time horizons) are fully permitted on all RegearFX accounts.',
    tags: ['Hedging', 'Scalping', 'Strategy']
  },
  {
    id: 'faq-trd-10',
    category: 'Trading',
    question: 'Can I use automated Expert Advisors (EAs) or trading bots?',
    answer: 'Yes. Both MetaTrader 5 and MetaTrader 4 support custom algorithmic Expert Advisors (EAs) and automated trading scripts. You can also connect custom algorithms via our REST and WebSocket APIs.',
    tags: ['Algorithmic', 'EAs', 'Trading Bots', 'Automated']
  },

  // ------------------------------------------
  // GROUP 4: MARKETS (8 items)
  // ------------------------------------------
  {
    id: 'faq-mkt-1',
    category: 'Markets',
    question: 'Which Forex currency pairs are available?',
    answer: 'We offer over 60 currency pairs, including all major pairs (EUR/USD, GBP/USD, USD/JPY, USD/CHF), minor cross pairs (EUR/GBP, GBP/JPY, AUD/NZD), and emerging exotic pairs (USD/MXN, USD/ZAR, USD/TRY).',
    tags: ['Forex', 'Currency Pairs', 'Majors', 'Crosses']
  },
  {
    id: 'faq-mkt-2',
    category: 'Markets',
    question: 'Which Cryptocurrency markets can I trade?',
    answer: 'We provide 24/7 continuous derivatives trading on leading digital assets including Bitcoin (BTC/USD), Ethereum (ETH/USD), Solana (SOL/USD), Ripple (XRP/USD), and top altcoins against USD and USDT.',
    tags: ['Crypto', 'Bitcoin', 'Ethereum', '24/7']
  },
  {
    id: 'faq-mkt-3',
    category: 'Markets',
    question: 'What are Index CFDs and which indices are supported?',
    answer: 'Stock index contracts allow you to trade the overall performance of a national equity basket without purchasing individual shares. Supported indices include US500 (S&P 500), NAS100 (Nasdaq), US30 (Dow Jones), GER40 (DAX), UK100 (FTSE), and JP225 (Nikkei).',
    tags: ['Indices', 'US500', 'NAS100', 'GER40']
  },
  {
    id: 'faq-mkt-4',
    category: 'Markets',
    question: 'What Commodities and Energy contracts are available?',
    answer: 'We offer spot energy contracts on US WTI Crude Oil, UK Brent Crude Oil, and Henry Hub Natural Gas, with flexible contract sizing from 0.01 micro lots.',
    tags: ['Commodities', 'Crude Oil', 'Natural Gas', 'WTI']
  },
  {
    id: 'faq-mkt-5',
    category: 'Markets',
    question: 'What Precious Metals are tradable?',
    answer: 'You can trade Spot Gold (XAU/USD, XAU/EUR), Spot Silver (XAG/USD), and Platinum (XPT/USD) with institutional liquidity and raw fractional pricing.',
    tags: ['Metals', 'Gold', 'Silver', 'XAU/USD']
  },
  {
    id: 'faq-mkt-6',
    category: 'Markets',
    question: 'What are global market trading hours?',
    answer: 'Forex, Indices, and Metals markets operate 24 hours a day, 5 days a week, opening Monday at 00:00 GMT and closing Friday at 23:59 GMT. Cryptocurrency markets trade 24 hours a day, 7 days a week, 365 days a year without pause.',
    tags: ['Market Hours', 'Sessions', 'Schedule']
  },
  {
    id: 'faq-mkt-7',
    category: 'Markets',
    question: 'Why do financial market prices move?',
    answer: 'Prices move based on supply and demand dynamics influenced by central bank interest rate decisions, inflation data, geopolitical events, economic indicators (such as GDP and employment reports), and institutional liquidity flows.',
    tags: ['Market Drivers', 'Macro', 'Fundamentals']
  },
  {
    id: 'faq-mkt-8',
    category: 'Markets',
    question: 'What primary factors influence Spot Gold prices?',
    answer: 'Gold (XAU/USD) is primarily driven by real interest rate expectations, US Dollar strength or weakness, global inflation trends, central bank gold reserve purchases, and geopolitical safe-haven demand.',
    tags: ['Gold Drivers', 'XAU', 'Inflation', 'Safe Haven']
  },

  // ------------------------------------------
  // GROUP 5: PLATFORMS (8 items)
  // ------------------------------------------
  {
    id: 'faq-plt-1',
    category: 'Platforms',
    question: 'What is WebTrader and how do I access it?',
    answer: `WebTrader is ${BRAND_NAME}'s browser-based trading terminal. It runs instantly in Google Chrome, Safari, Firefox, or Microsoft Edge without downloading any files or plugins. Simply visit /platforms/webtrader or click "Launch WebTrader".`,
    tags: ['WebTrader', 'Browser', 'Zero Install']
  },
  {
    id: 'faq-plt-2',
    category: 'Platforms',
    question: 'Is mobile trading available on iOS and Android?',
    answer: 'Yes. The RegearFX Mobile trading application is available for both iOS (iPhone/iPad) and Android smartphones, featuring live streaming quotes, interactive charts, order placement, and push notifications for margin alerts.',
    tags: ['Mobile', 'iOS', 'Android', 'App']
  },
  {
    id: 'faq-plt-3',
    category: 'Platforms',
    question: 'Does RegearFX support MetaTrader 5 (MT5)?',
    answer: 'Yes. We support MetaTrader 5 on Windows, macOS, and mobile devices. MT5 provides advanced technical indicators, Depth of Market (DOM) pricing, customizable timeframes, and MQL5 algorithmic automated trading.',
    tags: ['MetaTrader 5', 'MT5', 'EAs', 'MQL5']
  },
  {
    id: 'faq-plt-4',
    category: 'Platforms',
    question: 'Can I trade using MetaTrader 4 (MT4)?',
    answer: 'Yes. MetaTrader 4 remains available for active traders and developers who utilize existing MQL4 Expert Advisors and custom technical indicators.',
    tags: ['MetaTrader 4', 'MT4', 'MQL4']
  },
  {
    id: 'faq-plt-5',
    category: 'Platforms',
    question: 'What is the TradingView integration?',
    answer: 'TradingView integration enables you to view high-performance cloud charts, deploy hundreds of built-in community indicators, draw trendlines and Fibonacci retracements, and analyze multi-timeframe candle structures.',
    tags: ['TradingView', 'Charting', 'Indicators']
  },
  {
    id: 'faq-plt-6',
    category: 'Platforms',
    question: 'Can I log into multiple platforms at the same time?',
    answer: 'Yes. You can monitor positions on your mobile phone while executing orders on WebTrader or MetaTrader simultaneously using your synchronized master trading credentials.',
    tags: ['Concurrent Sessions', 'Multi-Device']
  },
  {
    id: 'faq-plt-7',
    category: 'Platforms',
    question: 'Which platform is recommended for technical chart analysis?',
    answer: 'TradingView and MetaTrader 5 provide the deepest chart analysis suites, offering custom indicator scripting, split multi-chart layouts, and extensive historical data lookback.',
    tags: ['Chart Analysis', 'Technical Tools', 'Best Platform']
  },
  {
    id: 'faq-plt-8',
    category: 'Platforms',
    question: 'What are the minimum hardware or system requirements?',
    answer: 'WebTrader runs smoothly on any modern device with a broadband internet connection and an HTML5-compatible browser (Chrome 90+, Safari 14+, Edge 90+). MetaTrader 5 requires Windows 10/11 or macOS 11+.',
    tags: ['System Requirements', 'Hardware', 'Compatibility']
  },

  // ------------------------------------------
  // GROUP 6: FEES (7 items)
  // ------------------------------------------
  {
    id: 'faq-fee-1',
    category: 'Fees',
    question: 'What is the difference between Spread and Commission?',
    answer: 'The Spread is the natural difference between the buy and sell price. A Commission is a separate fixed fee charged per standard lot traded (e.g. $3.50 per lot on Raw Spread accounts). Standard accounts combine all costs into the spread with $0 commission.',
    tags: ['Spread', 'Commission', 'Cost Comparison']
  },
  {
    id: 'faq-fee-2',
    category: 'Fees',
    question: 'What are overnight financing swap rates?',
    answer: 'Swaps are interest rate adjustments applied when a leveraged trade is held past the daily global market settlement rollover time (21:00 GMT). Depending on the interest rate differential between the two currencies, swap can be either debited or credited to your account.',
    details: {
      definition: 'Swaps represent the difference between central bank benchmark rates for base and quote currencies.',
      note: 'Wednesday rollovers carry a 3-day swap charge to account for weekend settlement.'
    }
  },
  {
    id: 'faq-fee-3',
    category: 'Fees',
    question: 'Are there any platform access or monthly subscription fees?',
    answer: `No. Access to ${BRAND_NAME} WebTrader, mobile apps, MetaTrader 5, and basic TradingView charting is 100% free with zero monthly recurring fees or platform license charges.`,
    tags: ['Free Platform', 'No Subscription', 'Zero Cost']
  },
  {
    id: 'faq-fee-4',
    category: 'Fees',
    question: 'Are there deposit or withdrawal fees charged by RegearFX?',
    answer: `${BRAND_NAME} does not charge internal deposit or withdrawal processing fees for standard payment methods. Third-party intermediary bank fees or blockchain network gas fees may apply depending on your payment provider.`,
    tags: ['Deposits', 'Withdrawals', 'Zero Fee']
  },
  {
    id: 'faq-fee-5',
    category: 'Fees',
    question: 'How do I calculate the total transaction cost of a trade?',
    answer: 'Total cost = (Spread in pips × Pip Value) + (Commission per lot × Volume). You can use our interactive Spread and Profit Calculators in the Tools section to preview exact dollar costs before entering a trade.',
    tags: ['Calculation', 'Calculator', 'Cost Formula']
  },
  {
    id: 'faq-fee-6',
    category: 'Fees',
    question: 'Is there an account inactivity fee?',
    answer: 'Accounts with zero trading activity and no open positions for more than 90 consecutive days may be subject to a minor maintenance fee of $10 per month, charged only against remaining positive account balances (never creating a negative balance).',
    tags: ['Inactivity Fee', 'Dormant Account']
  },
  {
    id: 'faq-fee-7',
    category: 'Fees',
    question: 'Where can I view live and historical swap schedules?',
    answer: 'Live long and short swap rates for every currency pair, index, and commodity are published in real-time under Trading > Spreads on this website, and visible in the Market Watch specification window inside WebTrader and MT5.',
    tags: ['Swap Schedule', 'Rollover', 'Rates']
  },

  // ------------------------------------------
  // GROUP 7: SECURITY (7 items)
  // ------------------------------------------
  {
    id: 'faq-sec-1',
    category: 'Security',
    question: 'How can I protect my account credentials?',
    answer: 'Always use a unique, strong password containing uppercase, lowercase, numbers, and symbols. Enable Two-Factor Authentication (2FA), never share one-time passcodes with anyone, and always ensure you are browsing on the official RegearFX domain.',
    tags: ['Password', '2FA', 'Account Protection']
  },
  {
    id: 'faq-sec-2',
    category: 'Security',
    question: 'What is Two-Factor Authentication (2FA) and how is it used?',
    answer: '2FA adds a mandatory secondary verification step during login using an authenticator app (Google Authenticator, Microsoft Authenticator). It prevents unauthorized access even if your password is somehow compromised.',
    tags: ['2FA', 'TOTP', 'Authenticator']
  },
  {
    id: 'faq-sec-3',
    category: 'Security',
    question: 'How are login sessions and devices monitored?',
    answer: 'Our automated security telemetry analyzes browser fingerprints and IP locations. If a login occurs from an unrecognized device or unusual country, a one-time verification email challenge is triggered immediately.',
    tags: ['Device Challenge', 'Session Monitoring', 'IP Anomaly']
  },
  {
    id: 'faq-sec-4',
    category: 'Security',
    question: 'What is Withdrawal Address Whitelisting?',
    answer: 'Whitelisting allows you to restrict withdrawals solely to verified, pre-authorized bank accounts or digital asset addresses. Newly added destination accounts undergo a mandatory 24-hour security cooling-off period.',
    tags: ['Whitelisting', 'Withdrawal Lock', 'Cooling Period']
  },
  {
    id: 'faq-sec-5',
    category: 'Security',
    question: 'What should I do if I suspect unauthorized activity on my account?',
    answer: 'Immediately sign in to your client portal, click "Terminate All Other Sessions" in security settings, reset your password, and notify our security response desk at security@regearfx.com or +44 20 7946 0185.',
    tags: ['Emergency', 'Compromised', 'Terminate Sessions']
  },
  {
    id: 'faq-sec-6',
    category: 'Security',
    question: 'How does RegearFX encrypt data in transit and at rest?',
    answer: 'All communications between your browser and our servers are encrypted using TLS 1.3 encryption. Passwords and sensitive operational data at rest are protected using Argon2 and AES-256 cryptographic standards.',
    tags: ['TLS 1.3', 'AES-256', 'Encryption', 'Data Security']
  },
  {
    id: 'faq-sec-7',
    category: 'Security',
    question: 'How can I recognize fraudulent or phishing communications?',
    answer: `RegearFX representatives will never ask you for your account password, 2FA secret backup keys, or to transfer funds to external personal accounts. All official communications originate strictly from @regearfx.com email domains.`,
    tags: ['Phishing', 'Fraud Prevention', 'Official Communications']
  }
];

// ==========================================
// SUPPORT CHANNELS & DESK INFORMATION
// ==========================================
export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 'general-support',
    title: 'General Client Support',
    department: 'Customer Assistance Desk',
    email: 'support@regearfx.com',
    phone: '+44 20 7946 0185',
    hours: 'Monday – Friday, 09:00 – 18:00 UTC',
    responseTime: 'Within 1 business day (avg < 2 hrs)',
    description: 'For inquiries regarding onboarding, account tier selection, deposit methods, and general platform navigation.',
    iconName: 'HelpCircle'
  },
  {
    id: 'trading-desk',
    title: 'Trading & Execution Desk',
    department: 'Market Operations',
    email: 'trading@regearfx.com',
    phone: '+44 20 7946 0186',
    hours: '24 Hours / 5 Days (Market Sessions)',
    responseTime: 'Immediate during active market hours',
    description: 'For trade confirmations, margin inquiries, corporate actions, and spread schedule questions.',
    iconName: 'TrendingUp'
  },
  {
    id: 'technical-support',
    title: 'Technical Support Desk',
    department: 'Systems & Infrastructure',
    email: 'tech@regearfx.com',
    phone: '+44 20 7946 0187',
    hours: '24/7 Monitoring & Ticket Assistance',
    responseTime: 'Same business day (avg < 1 hr)',
    description: 'For WebTrader connectivity troubleshooting, MetaTrader terminal setup, API integration, and chart settings.',
    iconName: 'Wrench'
  },
  {
    id: 'institutional-partners',
    title: 'Institutional & Partnerships',
    department: 'Institutional Relations',
    email: 'partners@regearfx.com',
    phone: '+44 20 7946 0188',
    hours: 'Monday – Friday, 08:00 – 19:00 UTC',
    responseTime: 'Within 1 business day',
    description: 'For Introducing Broker (IB) agreements, multi-tier rebate setups, FIX 4.4 API connectivity, and liquidity consultation.',
    iconName: 'Handshake'
  }
];

// ==========================================
// TROUBLESHOOTING TOPICS (7 Actionable Guides)
// ==========================================
export const TROUBLESHOOTING_TOPICS: TroubleshootingTopic[] = [
  {
    id: 'trouble-1',
    title: "Can't Sign In to Account",
    category: 'Access & Authentication',
    problem: 'Sign-in fails with invalid credentials message or session rejection.',
    possibleCause: 'Typo in email/password, caps lock active, or account undergoing security cooling-off.',
    suggestedSteps: [
      'Verify that Caps Lock is disabled and check for extra spaces in your email address.',
      'Use the "Forgot Password" link on the sign-in screen to trigger a password reset email.',
      'Ensure your browser is not auto-filling an outdated cached password.',
      'If you recently failed 5 sign-in attempts, wait 15 minutes for the security cooldown to expire.'
    ],
    ctaText: 'Contact Technical Support',
    ctaHref: '/help/support'
  },
  {
    id: 'trouble-2',
    title: 'WebTrader Platform Not Loading',
    category: 'Platform Connectivity',
    problem: 'Browser displays a blank white screen, continuous spinner, or WebSocket connection error.',
    possibleCause: 'Outdated browser cache, aggressive ad-blocker extensions, or restrictive corporate firewall.',
    suggestedSteps: [
      'Perform a hard refresh: Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac).',
      'Temporarily disable ad-blockers or privacy extensions for the trading domain.',
      'Open WebTrader in an Incognito / Private browsing window to isolate extension conflicts.',
      'Verify that WebSocket port 443 (WSS) is not restricted by your local firewall.'
    ],
    ctaText: 'Open WebTrader Guide',
    ctaHref: '/platforms/webtrader'
  },
  {
    id: 'trouble-3',
    title: 'Chart Not Updating / Frozen Prices',
    category: 'Market Data Feeds',
    problem: 'Candlestick charts appear paused or do not reflect recent market price ticks.',
    possibleCause: 'Market is closed for the weekend, local internet instability, or symbol timeframe loading.',
    suggestedSteps: [
      'Check market hours: Forex and Metals are closed from Friday 23:59 GMT to Monday 00:00 GMT (Crypto is 24/7).',
      'Switch between timeframes (e.g. 1M to 5M, then back to 1M) to re-request tick data.',
      'Check the latency indicator in the bottom right corner of WebTrader to verify feed health.'
    ],
    ctaText: 'Check Service Status',
    ctaHref: '/help/support'
  },
  {
    id: 'trouble-4',
    title: 'Market Information Unavailable',
    category: 'Quotes & Instruments',
    problem: 'Certain currency pairs or indices show "Market Suspended" or no bid/ask quotes.',
    possibleCause: 'Instrument is undergoing daily settlement rollover, bank holiday, or corporate action.',
    suggestedSteps: [
      'Confirm whether the underlying market has a scheduled daily rollover maintenance (e.g. 21:00-21:05 GMT).',
      'Check our Economic Calendar to verify if an international market holiday is in effect.',
      'Right-click on Market Watch in MetaTrader and click "Show All" to load hidden symbols.'
    ],
    ctaText: 'View Economic Calendar',
    ctaHref: '/tools/economic-calendar'
  },
  {
    id: 'trouble-5',
    title: 'Two-Factor Authentication (2FA) Code Invalid',
    category: 'Security & TOTP',
    problem: 'The 6-digit code from Google/Microsoft Authenticator is rejected as incorrect.',
    possibleCause: 'Internal device clock on your smartphone is out of synchronization with standard internet time.',
    suggestedSteps: [
      'On Android: Open Google Authenticator > Settings > Time correction for codes > Sync now.',
      'On iOS: Open iPhone Settings > General > Date & Time > Enable "Set Automatically".',
      'Ensure you are using the token labeled specifically for your RegearFX account.',
      'If you lost your authenticator device, use one of your saved single-use recovery codes.'
    ],
    ctaText: 'Security Architecture Guide',
    ctaHref: '/company/security'
  },
  {
    id: 'trouble-6',
    title: 'Password Reset Email Not Received',
    category: 'Email Delivery',
    problem: 'You requested a password reset link but the email has not arrived in your inbox.',
    possibleCause: 'Email delivered to Spam/Junk folder, corporate email filter, or unregistered address.',
    suggestedSteps: [
      'Check your Spam, Junk, Promotions, and Quarantine email folders.',
      'Add no-reply@regearfx.com to your email contact whitelist or safe senders list.',
      'Wait up to 5 minutes for email gateway routing.',
      'Verify that you entered the exact email address used during initial account creation.'
    ],
    ctaText: 'Submit Support Request',
    ctaHref: '/help/support'
  },
  {
    id: 'trouble-7',
    title: 'Account Margin Alert Triggered',
    category: 'Trading & Margin',
    problem: 'Received a notification that account margin level has declined towards the margin call threshold.',
    possibleCause: 'Open position drawdowns have reduced account equity relative to required margin.',
    suggestedSteps: [
      'Review open trades and calculate total required margin against current equity.',
      'Consider closing non-essential losing positions to free up margin buffer.',
      'Deposit additional funds via the client portal to increase your total equity cushion.',
      'Use the Position Sizing Calculator in our Tools section to budget future trade risk.'
    ],
    ctaText: 'Open Position Calculator',
    ctaHref: '/tools/calculators'
  }
];

// ==========================================
// SERVICE STATUS (Demo Real-Time Telemetry)
// ==========================================
export const SERVICE_STATUS_ITEMS: ServiceStatusItem[] = [
  {
    name: 'Trading Engine & Matching',
    status: 'Operational',
    uptime: '99.99%',
    description: 'Equinix LD4 low-latency order routing operating at peak efficiency.'
  },
  {
    name: 'Real-Time Market Data Feeds',
    status: 'Operational',
    uptime: '100%',
    description: 'Continuous aggregate quotes streaming across FX, Crypto, Metals, and Indices.'
  },
  {
    name: 'WebTrader Browser Terminal',
    status: 'Operational',
    uptime: '99.98%',
    description: 'WebSocket chart streaming and order tickets responding normally.'
  },
  {
    name: 'Mobile Gateway & APIs',
    status: 'Operational',
    uptime: '99.99%',
    description: 'iOS and Android push notifications and REST endpoints nominal.'
  },
  {
    name: 'Support & Desk Operations',
    status: 'Available',
    uptime: 'Active',
    description: 'Live desks actively monitoring inquiries and ticket queues.'
  }
];

// ==========================================
// QUICK ACTION LINKS STRIP
// ==========================================
export const HELP_QUICK_LINKS = [
  { label: 'Trading Conditions', href: '/trading/conditions', icon: 'BarChart2' },
  { label: 'Trading Platforms', href: '/platforms', icon: 'Laptop' },
  { label: 'Trading Calculators', href: '/tools/calculators', icon: 'Calculator' },
  { label: 'Market Analysis', href: '/resources/analysis', icon: 'TrendingUp' },
  { label: 'Risk Management', href: '/trading/risk-management', icon: 'ShieldCheck' },
  { label: 'Contact Support', href: '/help/support', icon: 'HelpCircle' }
];
