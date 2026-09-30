export type HelpCategoryType =
  | 'Getting Started'
  | 'Accounts'
  | 'Trading'
  | 'Markets'
  | 'Platforms'
  | 'Fees'
  | 'Security'
  | 'Technical Support';

export interface HelpCategory {
  id: string;
  title: HelpCategoryType;
  shortDesc: string;
  articleCount: number;
  iconName: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: HelpCategoryType;
  featured?: boolean;
  popular?: boolean;
  tags?: string[];
  details?: {
    definition?: string;
    example?: string;
    note?: string;
  };
}

export interface SupportChannel {
  id: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  hours: string;
  responseTime: string;
  description: string;
  iconName: string;
}

export interface TroubleshootingTopic {
  id: string;
  title: string;
  category: string;
  problem: string;
  possibleCause: string;
  suggestedSteps: string[];
  ctaText: string;
  ctaHref: string;
}

export interface ServiceStatusItem {
  name: string;
  status: 'Operational' | 'Available' | 'Degraded' | 'Maintenance';
  uptime: string;
  description: string;
}

export interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  type: 'FAQ' | 'Guide' | 'Platform' | 'Market' | 'Glossary' | 'Support';
  href: string;
}
