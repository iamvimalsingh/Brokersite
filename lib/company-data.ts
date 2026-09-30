import { BRAND_NAME, BROKER_CONFIG } from './config';

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  region: string;
  address: string;
  timezone: string;
  status: 'Operational Desk' | 'Regional Hub' | 'Technology Center';
  coordinates: { x: number; y: number }; // Relative coordinates on world map (0-100%)
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface SecurityPillar {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  status: 'Active' | 'Available' | 'Monitored' | 'Enforced';
  protocols: string[];
}

export interface SecurityLayerItem {
  step: number;
  label: string;
  technicalName: string;
  description: string;
}

export interface PartnerCategoryItem {
  id: string;
  title: string;
  role: string;
  description: string;
  demoProfiles: {
    name: string;
    tier: string;
    focus: string;
  }[];
  specifications: string[];
}

export interface JobListing {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  shortDesc: string;
  responsibilities: string[];
  requirements: string[];
  whatYoullWorkOn: string[];
  benefits: string[];
}

export interface ContactCategoryItem {
  id: string;
  title: string;
  email: string;
  description: string;
  responseTime: string;
  iconName: string;
}

// ==========================================
// CENTRALIZED COMPANY CONFIGURATION
// ==========================================
export const COMPANY_DATA = {
  brandName: BRAND_NAME,
  tagline: 'Modern multi-asset market access, research and execution infrastructure.',
  foundedYear: '2021',
  headquarters: 'London, United Kingdom',
  operatingRegions: ['Europe', 'Middle East', 'Asia-Pacific', 'Latin America'],
  
  // Registration and internal identifiers (DEMO values, easily configurable)
  registrationNumber: 'RFX-2021-048217',
  companyReference: 'RPM-LON-2148',
  regulatoryInformation: 'RegearFX Global Markets operates in compliance with international financial technology standards, segregated client account practices, and Tier-1 banking custodial frameworks.',
  
  // Communication channels
  supportEmail: 'support@regearfx.com',
  generalEmail: 'hello@regearfx.com',
  salesEmail: 'sales@regearfx.com',
  partnersEmail: 'partners@regearfx.com',
  mediaEmail: 'media@regearfx.com',
  phone: '+44 20 7946 0185',
  
  // Operational timings
  supportHours: 'Monday – Friday, 09:00 – 18:00 UTC',
  digitalSupportHours: '24/7 Digital Help Center & Ticketing',
  
  // Social links
  socialLinks: {
    linkedin: 'https://linkedin.com/company/regearfx',
    twitter: 'https://x.com/regearfx',
    telegram: 'https://t.me/regearfx',
    youtube: 'https://youtube.com/@regearfx'
  },

  // Key Marketing / Showcase Metrics (Demo numbers)
  metrics: [
    { label: 'Tradable Markets', value: '1,000+', change: 'Multi-Asset' },
    { label: 'Digital Asset Access', value: '24/7', change: 'Continuous' },
    { label: 'Trading Environments', value: '5 Platforms', change: 'Web, Mobile, MT5' },
    { label: 'Average Execution Speed', value: '< 25ms', change: 'Tier-1 Routing' },
    { label: 'Global Coverage', value: '180+ Pairs', change: 'Deep Liquidity' }
  ],

  // Mission & Vision Statements
  mission: 'Make professional market access simpler, clearer and more accessible through technology, research and thoughtful product design.',
  vision: 'Build a modern financial platform where market information, trading technology and education work together.',
  storyIntro: 'Founded in 2021, RegearFX was established with a singular focus: to modernize brokerage infrastructure by uniting institutional market connectivity, editorial research, and transparent trading conditions into a seamless digital experience.'
};

// ==========================================
// TIMELINE MILESTONES
// ==========================================
export const COMPANY_TIMELINE: CompanyMilestone[] = [
  {
    year: '2021',
    tag: 'Foundation',
    title: 'Platform Concept & Core Architecture Established',
    description: 'RegearFX was founded to engineer a modern, transparent multi-asset brokerage environment designed around low-latency connectivity, modern UX, and strict client segregation.'
  },
  {
    year: '2022',
    tag: 'Infrastructure',
    title: 'Market Infrastructure & Equinix LD4 Connectivity',
    description: 'Deployed optical fiber aggregation in London Equinix LD4 and New York NY4 data centers, connecting our aggregation engine directly with global tier-1 liquidity providers.'
  },
  {
    year: '2023',
    tag: 'Multi-Asset Expansion',
    title: 'Expanded Multi-Asset Offering & Zero-Install WebTrader',
    description: 'Expanded contract coverage to include 1,000+ instruments across FX, spot metals, crude energy, global indices, and launched our high-speed WebTrader browser interface.'
  },
  {
    year: '2024',
    tag: 'Ecosystem',
    title: 'Enhanced Research Desk & Trading Academy Ecosystem',
    description: 'Integrated daily macro analysis desks, technical inflection reports, multi-track educational academy, and interactive risk calculation engines.'
  },
  {
    year: '2025',
    tag: 'Digital Evolution',
    title: 'Expanded Digital Asset Capabilities & Mobile Suite',
    description: 'Introduced 24/7 digital asset derivative contracts, enhanced mobile applications, biometric security verification, and automated API webhook integration.'
  },
  {
    year: '2026',
    tag: 'Global Reach',
    title: 'Institutional Liquidity & Cross-Asset Evolution',
    description: 'Continuing our commitment to transparent execution, zero-spread raw accounts, institutional partnership channels, and global client assistance.'
  }
];

// ==========================================
// COMPANY CORE VALUES (6 Pillars)
// ==========================================
export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: 'transparency',
    title: 'Transparency',
    shortDesc: 'Published pricing and explicit execution terms.',
    description: 'We believe trust is built on clear, verifiable information. Spreads, commissions, swap schedules, and order routing rules are published openly with zero hidden surprises.',
    iconName: 'Eye'
  },
  {
    id: 'technology',
    title: 'Technology',
    shortDesc: 'Engineered for speed, stability, and high throughput.',
    description: 'Our aggregation stack routes orders across interconnected liquidity centers with sub-millisecond precision, ensuring robust uptime even during severe market volatility.',
    iconName: 'Cpu'
  },
  {
    id: 'discipline',
    title: 'Discipline',
    shortDesc: 'Strict risk frameworks and capital protection.',
    description: 'We advocate calculated risk management. We provide negative balance protection, automated stop-out sequences, and clear leverage tiers to safeguard client capital.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'security',
    title: 'Security',
    shortDesc: 'Multi-layered account architecture and segregation.',
    description: 'Client funds are maintained in segregated tier-1 bank accounts separate from company operating capital, guarded by mandatory 2FA and continuous session monitoring.',
    iconName: 'Lock'
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    shortDesc: 'Intuitive design across web, desktop, and mobile.',
    description: 'Professional financial markets should not require convoluted legacy software. We provide clean, approachable interfaces without compromising technical depth.',
    iconName: 'Globe'
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    shortDesc: 'Relentless refinement of tools and market insight.',
    description: 'Markets evolve continuously. We continuously upgrade our trading infrastructure, expand instrument depth, and deliver fresh research commentary every trading day.',
    iconName: 'Sparkles'
  }
];

// ==========================================
// WHY CHOOSE US (8 Feature Areas & Comparison)
// ==========================================
export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    id: 'multi-asset',
    title: 'Multi-Asset Access',
    category: 'Market Depth',
    shortDesc: 'Trade FX, crypto, metals, indices, and energy from a single unified account.',
    description: 'Consolidate your trading operations across 1,000+ liquid global instruments with competitive leverage tiers and deep liquidity pools.',
    highlight: '1,000+ Liquid Assets',
    iconName: 'Layers'
  },
  {
    id: 'platforms',
    title: 'Professional Platforms',
    category: 'Technology',
    shortDesc: 'WebTrader, Mobile, MetaTrader 5, MetaTrader 4, and TradingView connectivity.',
    description: 'Choose the exact environment that matches your workflow—from lightweight browser trading to automated algorithmic Expert Advisors.',
    highlight: '5 Robust Environments',
    iconName: 'Laptop'
  },
  {
    id: 'research',
    title: 'Market Research Desk',
    category: 'Intelligence',
    shortDesc: 'Daily macroeconomic dispatches, technical key levels, and breaking headlines.',
    description: 'Stay ahead of monetary policy decisions, inflation prints, and cross-asset correlations with objective daily commentary from our research analysts.',
    highlight: 'Daily Desk Dispatches',
    iconName: 'TrendingUp'
  },
  {
    id: 'tools',
    title: 'Institutional Trading Tools',
    category: 'Analytics',
    shortDesc: 'Interactive pip calculators, economic calendar, margin estimators, and position sizing.',
    description: 'Make informed trading decisions using client-ready mathematical calculators and high-impact economic event filtering.',
    highlight: 'Live Calculation Suite',
    iconName: 'Calculator'
  },
  {
    id: 'conditions',
    title: 'Transparent Conditions',
    category: 'Pricing',
    shortDesc: 'Spreads from 0.0 pips on Raw accounts, institutional liquidity, and zero requotes.',
    description: 'Benefit from true market-driven bid/ask quotes streamed directly from top-tier interbank providers with clear, transparent commission rates.',
    highlight: 'Raw Spreads from 0.0 Pips',
    iconName: 'BarChart2'
  },
  {
    id: 'risk-management',
    title: 'Advanced Risk Controls',
    category: 'Protection',
    shortDesc: 'Negative balance protection, tiered margin leverage, and automated stop-out.',
    description: 'Pre-trade margin verification and automated risk protocols ensure that your account balance can never drop below zero under normal market operations.',
    highlight: 'Negative Balance Guard',
    iconName: 'ShieldAlert'
  },
  {
    id: 'experience',
    title: 'Responsive Experience',
    category: 'Support',
    shortDesc: 'Fast account setup, transparent deposit methods, and direct human assistance.',
    description: 'Experience a smooth onboarding journey backed by dedicated operational support teams ready to assist with account questions and inquiries.',
    highlight: 'Dedicated Desk Support',
    iconName: 'Headphones'
  },
  {
    id: 'education',
    title: 'Comprehensive Education',
    category: 'Academy',
    shortDesc: 'Structured 3-tier Trading Academy, practical guides, video masterclasses, and glossary.',
    description: 'From understanding currency pair mechanics to designing quantitative risk budgeting models, our free educational library empowers all trader levels.',
    highlight: '69 Structured Lessons',
    iconName: 'BookOpen'
  }
];

export const BROKER_COMPARISON_DATA = [
  {
    feature: 'Account Setup & Onboarding',
    traditional: 'Days of manual paperwork, cumbersome legacy portals',
    regear: 'Fast streamlined digital registration with instant demo access'
  },
  {
    feature: 'Spread & Pricing Transparency',
    traditional: 'Marked-up hidden dealer spreads with ambiguous fees',
    regear: 'Raw institutional spreads from 0.0 pips + clear fixed commission'
  },
  {
    feature: 'Platform Flexibility',
    traditional: 'Single locked desktop software with clunky UX',
    regear: 'WebTrader, Mobile, MT5, MT4, and TradingView compatibility'
  },
  {
    feature: 'Research & Education',
    traditional: 'Generic promotional marketing tips with minimal depth',
    regear: 'Structured Academy curricula, daily macro theses, and live tools'
  },
  {
    feature: 'Fund Security Architecture',
    traditional: 'Co-mingled balances in complex offshore structures',
    regear: 'Segregated tier-1 accounts, mandatory 2FA, session monitoring'
  },
  {
    feature: 'Digital Asset Access',
    traditional: 'Closed over weekends with high overnight financing',
    regear: 'Continuous 24/7 crypto derivatives trading with competitive swaps'
  }
];

// ==========================================
// SECURITY ARCHITECTURE & LAYERS
// ==========================================
export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    id: 'account-security',
    title: 'Account & Credential Security',
    shortDesc: 'Hardened authentication with cryptographic hashing.',
    description: 'User passwords and credentials are encrypted using modern salted hash algorithms. Brute force mitigation triggers temporary cooldown locks on repeated failed attempts.',
    status: 'Enforced',
    protocols: ['Argon2 Password Hashing', 'Brute Force Cooldown Lock', 'Password Entropy Verification']
  },
  {
    id: 'two-factor-auth',
    title: 'Two-Factor Authentication (2FA)',
    shortDesc: 'Time-Based One-Time Password (TOTP) verification.',
    description: 'Add an impenetrable secondary layer using industry-standard authenticator apps (Google Authenticator, Microsoft Authenticator) for sign-ins, sensitive profile edits, and withdrawals.',
    status: 'Active',
    protocols: ['RFC 6238 TOTP Standard', 'Encrypted Backup Recovery Codes', 'Per-Action Re-Authentication']
  },
  {
    id: 'session-monitoring',
    title: 'Session & IP Monitoring',
    shortDesc: 'Automated real-time anomaly detection.',
    description: 'Our security engine continuously analyzes active user sessions, monitoring for concurrent IP changes, browser fingerprint shifts, and unusual geo-velocity access patterns.',
    status: 'Monitored',
    protocols: ['Automatic Session Timeout', 'Concurrent Login Detection', 'Suspicious IP Geolocation Alerts']
  },
  {
    id: 'device-monitoring',
    title: 'Device & Hardware Verification',
    shortDesc: 'Trusted device registry with authorization challenges.',
    description: 'When an account sign-in is attempted from a previously unseen browser or hardware profile, a one-time verification challenge is dispatched to the verified email address.',
    status: 'Active',
    protocols: ['Hardware Profile Fingerprinting', 'New Device Email Challenges', 'One-Click Session Termination']
  },
  {
    id: 'withdrawal-controls',
    title: 'Withdrawal Whitelisting & Controls',
    shortDesc: 'Address lock-in and destination address security.',
    description: 'Clients can lock withdrawals to verified bank accounts or crypto destination addresses. Newly added destination accounts enter an optional 24-hour security clearing cooldown.',
    status: 'Enforced',
    protocols: ['Destination Address Whitelisting', '24-Hour Cooling-Off Period', 'Multi-Factor Withdrawal Confirmations']
  },
  {
    id: 'operational-security',
    title: 'Operational Security & Tier-1 Custody',
    shortDesc: 'Strict internal segregation and zero employee access to passwords.',
    description: 'All client funds are held in segregated accounts at regulated tier-1 commercial banking institutions. Internal administrative actions are strictly audited and logged.',
    status: 'Monitored',
    protocols: ['Segregated Client Bank Accounts', 'Zero-Knowledge Internal Architecture', 'Immutable Immutable Audit Trails']
  }
];

export const SECURITY_LAYERS: SecurityLayerItem[] = [
  {
    step: 1,
    label: 'User Inbound',
    technicalName: 'CLIENT INITIATION',
    description: 'Trader accesses client portal via TLS 1.3 encrypted browser or mobile endpoint.'
  },
  {
    step: 2,
    label: 'Authentication',
    technicalName: 'MULTI-FACTOR TOTP',
    description: 'Credentials validated with salted cryptographic hashes + 6-digit TOTP challenge.'
  },
  {
    step: 3,
    label: 'Device Verification',
    technicalName: 'DEVICE REGISTRY',
    description: 'Hardware fingerprint matched against trusted device cache and IP reputation database.'
  },
  {
    step: 4,
    label: 'Session Monitoring',
    technicalName: 'ANOMALY DETECTOR',
    description: 'Active session tokens continuously evaluated for token hijacking or geo-velocity shifts.'
  },
  {
    step: 5,
    label: 'Risk Controls',
    technicalName: 'MARGIN VERIFICATION',
    description: 'Pre-trade margin check, negative balance protection ceiling, and stop-out monitoring.'
  },
  {
    step: 6,
    label: 'Transaction Controls',
    technicalName: 'WITHDRAWAL GATE',
    description: 'Withdrawal requests cross-checked against whitelisted destination accounts + cooldowns.'
  },
  {
    step: 7,
    label: 'Audit Trail',
    technicalName: 'IMMUTABLE LOGGING',
    description: 'Every operational event written to append-only encrypted ledger for compliance review.'
  }
];

// ==========================================
// PARTNER CATEGORIES & PROFILES (Demo data)
// ==========================================
export const PARTNER_CATEGORIES: PartnerCategoryItem[] = [
  {
    id: 'liquidity',
    title: 'Liquidity Partners',
    role: 'Tier-1 Interbank Deep Liquidity',
    description: 'We connect to top-tier commercial banks and non-bank market makers to aggregate deep pricing books and narrow spreads across all instruments.',
    demoProfiles: [
      { name: 'Global Liquidity Network', tier: 'Tier-1 Aggregate LP', focus: 'FX & Precious Metals' },
      { name: 'Northbridge Capital Flow', tier: 'Prime Brokerage', focus: 'Global Equity Indices' }
    ],
    specifications: ['Sub-millisecond optical cross-connects', 'Aggregate pricing from 10+ venues', 'Smart Order Routing (SOR)']
  },
  {
    id: 'technology',
    title: 'Technology Providers',
    role: 'Core Trading Engine & Charting Infrastructure',
    description: 'Our software infrastructure leverages high-throughput execution engines, cloud microservices, and world-standard charting engines.',
    demoProfiles: [
      { name: 'Atlas Trading Technology', tier: 'Engine & Matching Infrastructure', focus: 'Core Aggregation' },
      { name: 'TradingView Advanced Charts', tier: 'Charting & Visualizations', focus: 'Cloud Technical Analysis' }
    ],
    specifications: ['Ultra-low latency price feeds', 'HTML5 canvas multi-core charting', 'REST & WebSocket streaming APIs']
  },
  {
    id: 'market-data',
    title: 'Market Data & Feeds',
    role: 'Real-Time Global Market Dispatches',
    description: 'Real-time financial data feeds stream live benchmark quotes, corporate earnings dates, and macroeconomic calendar prints directly to the platform.',
    demoProfiles: [
      { name: 'Northbridge Market Data', tier: 'Institutional Data Feed', focus: 'Macro Indicators & Calendars' },
      { name: 'Equinix LD4 Financial Grid', tier: 'Data Center Colocation', focus: 'London Subsea Interconnect' }
    ],
    specifications: ['Zero-delay benchmark quotes', 'Automated calendar synchronization', 'Global news wire integration']
  },
  {
    id: 'payment',
    title: 'Payment & Banking Infrastructure',
    role: 'Segregated Accounts & Secure Gateway Routing',
    description: 'Seamless deposit and withdrawal processing facilitated by regulated payment gateways, instant bank wires, and secure digital asset rails.',
    demoProfiles: [
      { name: 'ClearPay Infrastructure', tier: 'Global Merchant Gateway', focus: 'SEPA, SWIFT & Card Clearing' },
      { name: 'Apex Digital Custodial Rails', tier: 'Asset Settlement Gate', focus: 'Digital Asset Transactions' }
    ],
    specifications: ['PCI-DSS Level 1 compliant gateways', 'Segregated client holding accounts', 'Rapid automated clearing']
  },
  {
    id: 'security',
    title: 'Security Technology',
    role: 'Threat Intelligence & Cryptographic Protection',
    description: 'Continuous penetration testing, web application firewalls (WAF), and automated DDoS mitigation keep our brokerage infrastructure secure.',
    demoProfiles: [
      { name: 'Vertex Security Systems', tier: 'Cybersecurity & DDoS Guard', focus: 'Layer 7 Edge Protection' },
      { name: 'Cloudflare Enterprise Mesh', tier: 'Global Edge Anycast', focus: 'Edge Routing & SSL/TLS' }
    ],
    specifications: ['24/7 Security Operations Monitoring', 'Automated anomaly containment', 'End-to-end 256-bit encryption']
  },
  {
    id: 'research',
    title: 'Research & Intelligence Partners',
    role: 'Macro Strategy & Quantitative Modeling',
    description: 'Collaborations with independent economic think tanks and market research desks to provide high-conviction market commentary for traders.',
    demoProfiles: [
      { name: 'Beacon Macro Strategy', tier: 'Independent Economic Desk', focus: 'Central Bank Policy Analysis' },
      { name: 'AlphaMetric Research Group', tier: 'Quantitative Modeling', focus: 'Volatility & Correlation Studies' }
    ],
    specifications: ['Daily desk commentary', 'Weekly cross-asset briefings', 'Quarterly macroeconomic outlooks']
  }
];

export const PARTNER_PIPELINE = [
  { step: '01', title: 'Technology', desc: 'Integration of low-latency order routing and platform APIs.' },
  { step: '02', title: 'Infrastructure', desc: 'Equinix cross-connect colocation and high-bandwidth optical fibers.' },
  { step: '03', title: 'Market Data', desc: 'Direct streaming of continuous liquidity and institutional feeds.' },
  { step: '04', title: 'Execution', desc: 'Smart order matching with zero dealing desk interventions.' },
  { step: '05', title: 'Client Services', desc: 'Transparent reporting, account management, and client assistance.' }
];

// ==========================================
// CAREERS (8 Job Listings & Departments)
// ==========================================
export const CAREER_DEPARTMENTS = [
  'All Departments',
  'Engineering',
  'Product & Design',
  'Quantitative Research',
  'Market Research',
  'Operations',
  'Compliance',
  'Client Experience',
  'Marketing'
];

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 'job-1',
    slug: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'London, UK / Hybrid',
    employmentType: 'Full-time',
    experience: '5+ Years',
    shortDesc: 'Architect high-speed trading interfaces, interactive financial charts, and responsive web applications using Next.js, TypeScript, and Tailwind CSS.',
    responsibilities: [
      'Build responsive, high-performance web components for public websites and trading web applications.',
      'Optimize real-time WebSocket data streaming for price tickers and candlestick charts.',
      'Collaborate with product designers to implement pixel-perfect editorial UI matching the RegearFX design system.',
      'Write comprehensive unit and integration tests to ensure rock-solid stability during high-volatility events.'
    ],
    requirements: [
      'Expert proficiency in TypeScript, React 19, Next.js App Router, and Tailwind CSS.',
      'Deep understanding of client-side performance optimization and Web Vitals.',
      'Experience with canvas/WebGL charting libraries (e.g. TradingView Lightweight Charts, D3, Canvas API).',
      'Familiarity with financial brokerage terminology (order types, spreads, leverage, pips).'
    ],
    whatYoullWorkOn: [
      'Next-generation WebTrader interface with customizable multi-chart layouts.',
      'Trading Academy interactive lesson players and real-time calculator widgets.',
      'Micro-frontend architecture connecting public web pages to client account gateways.'
    ],
    benefits: [
      'Competitive base salary + performance bonus',
      'Hybrid working model (London office / Remote flexibility)',
      'Comprehensive private health and dental insurance',
      'Annual tech and home office allowance ($2,500/year)',
      '28 days paid annual leave + public holidays'
    ]
  },
  {
    id: 'job-2',
    slug: 'full-stack-engineer-trading-systems',
    title: 'Full Stack Engineer (Trading Systems)',
    department: 'Engineering',
    location: 'London, UK / Remote',
    employmentType: 'Full-time',
    experience: '4+ Years',
    shortDesc: 'Develop robust backend services and microservices that bridge order routing engines, CRM gateways, and client account APIs.',
    responsibilities: [
      'Develop scalable, low-latency API routes and WebSocket gateways using Node.js, Go, or Python.',
      'Integrate third-party liquidity provider FIX protocols and payment gateway webhooks.',
      'Ensure high availability, database replication, and zero-downtime deployments.',
      'Participate in on-call rotations to maintain 99.99% system availability.'
    ],
    requirements: [
      'Strong proficiency in TypeScript, Node.js, PostgreSQL/Cloud SQL, and Redis caching.',
      'Experience with message brokers (Kafka, RabbitMQ) and event-driven architectures.',
      'Understanding of financial security protocols (HMAC, JWT, OAuth 2.0, TOTP).',
      'Knowledge of container orchestration using Docker and Kubernetes.'
    ],
    whatYoullWorkOn: [
      'High-throughput order validation engine capable of handling 50,000 requests/sec.',
      'Automated reconciliation pipelines between banking custodians and trading ledgers.',
      'Real-time account equity monitoring and automated margin call alert dispatcher.'
    ],
    benefits: [
      'Top-tier compensation package with equity options',
      'Flexible remote working policy across European timezones',
      'Continuous learning budget for conferences and certifications',
      'Company pension contribution scheme (up to 7% match)'
    ]
  },
  {
    id: 'job-3',
    slug: 'quantitative-research-analyst',
    title: 'Quantitative Research Analyst',
    department: 'Quantitative Research',
    location: 'Singapore / Hybrid',
    employmentType: 'Full-time',
    experience: '3+ Years',
    shortDesc: 'Analyze multi-asset order books, liquidity spreads, and design mathematical volatility and execution models for our trading research desk.',
    responsibilities: [
      'Perform statistical analysis on high-frequency tick data across FX, crypto, and commodity markets.',
      'Develop algorithmic models to analyze slippage patterns and optimize Smart Order Routing parameters.',
      'Publish quantitative research papers and volatility reports for institutional and retail clients.',
      'Work alongside engineering to backtest automated trading frameworks.'
    ],
    requirements: [
      'Degree in Quantitative Finance, Mathematics, Physics, Computer Science, or equivalent.',
      'Proficiency in Python (NumPy, Pandas, SciPy) and SQL for large dataset manipulation.',
      'Strong understanding of econometric modeling, volatility surfaces, and derivative pricing.',
      'Clear written communication skills for producing client-facing research commentary.'
    ],
    whatYoullWorkOn: [
      'Dynamic liquidity aggregation analytics measuring venue quality in real-time.',
      'Cross-asset correlation matrix models published on the RegearFX research portal.',
      'Algorithmic execution benchmark metrics (VWAP, TWAP analysis).'
    ],
    benefits: [
      'Attractive performance-linked annual incentive pool',
      'Relocation assistance to Singapore if applicable',
      'Comprehensive family medical coverage',
      'Annual health and wellness stipend'
    ]
  },
  {
    id: 'job-4',
    slug: 'product-designer-ui-ux',
    title: 'Senior Product Designer (UI/UX)',
    department: 'Product & Design',
    location: 'London, UK / Remote',
    employmentType: 'Full-time',
    experience: '5+ Years',
    shortDesc: 'Shape the visual language, design system, and user experience across RegearFX public web pages, mobile apps, and trading tools.',
    responsibilities: [
      'Design cohesive, accessible, and editorial user interfaces adhering to the RegearFX design system.',
      'Create high-fidelity interactive Figma prototypes for complex trading workflows and calculators.',
      'Conduct usability testing and iterate on UI components based on real trader feedback.',
      'Maintain design tokens and component libraries in close collaboration with frontend developers.'
    ],
    requirements: [
      'Exceptional portfolio showcasing typography, editorial layouts, and financial/complex SaaS apps.',
      'Mastery of Figma, design systems, autolayout, prototyping, and micro-interactions.',
      'Strong understanding of responsive design (375px mobile to 1920px wide desktop displays).',
      'Passion for financial markets, fintech, and clean typography.'
    ],
    whatYoullWorkOn: [
      'Next-generation mobile trading app experience for iOS and Android.',
      'Interactive financial calculators with dynamic graph visualizations.',
      'Trading Academy gamified learning pathways and certification badges.'
    ],
    benefits: [
      'Competitive salary + annual design equipment allowance',
      'Flexible remote schedule with optional London office desk',
      '28 days annual leave + mental health days',
      'Comprehensive private health insurance'
    ]
  },
  {
    id: 'job-5',
    slug: 'market-research-analyst-macro',
    title: 'Market Research Analyst (Macro & FX)',
    department: 'Market Research',
    location: 'Dubai, UAE / Hybrid',
    employmentType: 'Full-time',
    experience: '3+ Years',
    shortDesc: 'Author daily macroeconomic commentary, central bank policy analyses, and technical setups for the RegearFX Research Portal.',
    responsibilities: [
      'Write daily morning briefs covering global market developments, currency pairs, and commodities.',
      'Analyze economic data prints (CPI, Non-Farm Payrolls, GDP) and explain market implications.',
      'Host weekly educational webinars and market walkthrough sessions for clients.',
      'Provide rapid commentary during high-impact market breaking events.'
    ],
    requirements: [
      'Demonstrated experience as a financial journalist, sell-side research analyst, or active trader.',
      'Deep knowledge of G10 currency fundamentals, bond yields, and commodity supercycles.',
      'Fluency in technical analysis (support/resistance, Fibonacci, candlestick price action).',
      'Exceptional written English with ability to convey complex ideas clearly and concisely.'
    ],
    whatYoullWorkOn: [
      'Flagship &quot;Daily Market Wire&quot; dispatches and weekly cross-asset outlook reports.',
      'Live central bank interest rate decision coverage and post-meeting analysis.',
      'Educational masterclass series for the RegearFX Trading Academy.'
    ],
    benefits: [
      'Tax-free competitive salary in Dubai financial hub (DIFC)',
      'Health insurance including international emergency cover',
      'Annual flight ticket allowance to home country',
      'Modern workspace in central Dubai with state-of-the-art media studio'
    ]
  },
  {
    id: 'job-6',
    slug: 'devops-site-reliability-engineer',
    title: 'DevOps & Site Reliability Engineer',
    department: 'Engineering',
    location: 'London, UK / Remote',
    employmentType: 'Full-time',
    experience: '4+ Years',
    shortDesc: 'Maintain multi-region cloud infrastructure, low-latency data center colocation, and CI/CD pipelines across global trading systems.',
    responsibilities: [
      'Manage multi-region infrastructure on Google Cloud Platform (GCP) and AWS using Terraform (IaC).',
      'Monitor low-latency network routes connecting Equinix data centers with cloud services.',
      'Build robust CI/CD deployment pipelines with automated security audits and linting.',
      'Implement Prometheus/Grafana telemetry and alerting for sub-second anomaly detection.'
    ],
    requirements: [
      'Experience managing production Kubernetes clusters and Linux server environments.',
      'Expertise with Infrastructure as Code (Terraform), Docker, and CI/CD (GitHub Actions).',
      'Knowledge of cloud networking (BGP routing, VPC peering, Anycast DNS, WAF rules).',
      'Strong focus on high availability, disaster recovery, and automated failover.'
    ],
    whatYoullWorkOn: [
      'Zero-downtime global multi-region deployment automation.',
      'Automated DDoS mitigation and real-time edge filtering pipelines.',
      'Sub-millisecond latency monitoring across London LD4 and New York NY4 nodes.'
    ],
    benefits: [
      'Generous compensation with annual performance bonus',
      'Full remote flexibility with co-working space allowance',
      'Comprehensive private health, dental, and optical insurance',
      'Annual budget for hardware upgrades and cloud certifications'
    ]
  },
  {
    id: 'job-7',
    slug: 'client-experience-specialist',
    title: 'Client Experience Specialist',
    department: 'Client Experience',
    location: 'London, UK / Hybrid',
    employmentType: 'Full-time',
    experience: '2+ Years',
    shortDesc: 'Deliver exceptional, knowledgeable assistance to retail and institutional traders regarding account setup, trading platforms, and specifications.',
    responsibilities: [
      'Assist clients via live chat, email, and scheduled video sessions with platform onboarding.',
      'Explain contract specifications, spread mechanics, margin requirements, and order types.',
      'Troubleshoot platform settings on WebTrader, MT5, and mobile apps.',
      'Collate client feedback and feature requests to guide the product development roadmap.'
    ],
    requirements: [
      'Prior experience in customer support or account management at a financial brokerage or fintech.',
      'Thorough knowledge of MetaTrader 5, WebTrader, and standard trading terminology.',
      'Polite, professional communication style with calm demeanor under pressure.',
      'Multilingual fluency (English + Arabic, Spanish, French, or Mandarin) is an advantage.'
    ],
    whatYoullWorkOn: [
      'Delivering white-glove onboarding for high-volume and institutional traders.',
      'Authoring comprehensive knowledge base articles for the Help Center.',
      'Collaborating with compliance and operations on streamlined account verifications.'
    ],
    benefits: [
      'Competitive salary + shift allowance',
      'Comprehensive medical and life insurance',
      'Clear internal progression pathways to compliance, sales, or operations roles',
      'Annual training and professional development budget'
    ]
  },
  {
    id: 'job-8',
    slug: 'compliance-operations-associate',
    title: 'Compliance Operations Associate',
    department: 'Compliance',
    location: 'London, UK / Hybrid',
    employmentType: 'Full-time',
    experience: '3+ Years',
    shortDesc: 'Ensure adherence to international brokerage operating standards, AML/CTF regulations, client fund segregation rules, and transaction monitoring.',
    responsibilities: [
      'Review client onboarding documentation in accordance with international KYC/AML guidelines.',
      'Perform automated and manual transaction monitoring to detect suspicious activity.',
      'Maintain regulatory reporting schedules and audit trail documentation.',
      'Assist in regular compliance audits and updates to internal compliance policies.'
    ],
    requirements: [
      'Bachelor’s degree in Law, Finance, Business, or related regulatory discipline.',
      '2+ years experience in a compliance or AML role within a financial services institution.',
      'Familiarity with financial crime prevention frameworks (FATF recommendations, Sanctions screening).',
      'Meticulous attention to detail and sound analytical judgment.'
    ],
    whatYoullWorkOn: [
      'Automating frictionless AML verification using modern AI-assisted screening tools.',
      'Auditing segregated client account balances against daily settlement reports.',
      'Preparing regulatory compliance disclosures and risk management statements.'
    ],
    benefits: [
      'Competitive salary + annual compliance performance bonus',
      'Support for professional certifications (ACAMS, ICA, CISI)',
      'Comprehensive private healthcare coverage',
      'Hybrid working model with modern London office amenities'
    ]
  }
];

// ==========================================
// CONTACT CATEGORIES & OFFICE INFO
// ==========================================
export const CONTACT_CATEGORIES: ContactCategoryItem[] = [
  {
    id: 'general',
    title: 'General Enquiries',
    email: 'hello@regearfx.com',
    description: 'For general questions about our brokerage ecosystem, account tiers, and platform features.',
    responseTime: '< 2 Hours during market sessions',
    iconName: 'HelpCircle'
  },
  {
    id: 'sales',
    title: 'Institutional & Sales',
    email: 'sales@regearfx.com',
    description: 'Speak with our institutional desk regarding custom liquidity pools, volume pricing, and API integration.',
    responseTime: '< 1 Business Day',
    iconName: 'Briefcase'
  },
  {
    id: 'partners',
    title: 'Partnerships & IBs',
    email: 'partners@regearfx.com',
    description: 'Explore Introducing Broker (IB) programs, affiliate partnerships, and multi-tier rebate models.',
    responseTime: '< 4 Hours',
    iconName: 'Handshake'
  },
  {
    id: 'media',
    title: 'Media & Communications',
    email: 'media@regearfx.com',
    description: 'For press releases, brand inquiries, editorial commentary, and official executive statements.',
    responseTime: '< 24 Hours',
    iconName: 'Newspaper'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe & Global Desk',
    address: '10 Finsbury Square, London EC2A 1AF, United Kingdom',
    timezone: 'UTC+0 / GMT',
    status: 'Operational Desk',
    coordinates: { x: 49, y: 32 }
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East Hub',
    address: 'DIFC Gate Precinct 4, Level 5, Dubai, United Arab Emirates',
    timezone: 'UTC+4 / GST',
    status: 'Regional Hub',
    coordinates: { x: 62, y: 45 }
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific Center',
    address: 'Marina Bay Financial Centre, Tower 2, Singapore 018983',
    timezone: 'UTC+8 / SGT',
    status: 'Technology Center',
    coordinates: { x: 78, y: 58 }
  }
];
