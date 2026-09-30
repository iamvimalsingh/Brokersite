export type ResourceType = 'academy' | 'news' | 'analysis' | 'guides' | 'webinars' | 'glossary';

export interface AcademyLesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string[];
  keyTakeaway: string;
}

export interface AcademyCourse {
  id: string;
  slug: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessonCount: number;
  description: string;
  progressPercent?: number;
  badge: string;
  topics: string[];
  lessons: AcademyLesson[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Forex' | 'Crypto' | 'Indices' | 'Commodities' | 'Metals' | 'Global Macro';
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  summary: string;
  bodyParagraphs: string[];
  keyPoints: string[];
  relatedSlugs: string[];
  featured?: boolean;
}

export interface AnalysisArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Forex' | 'Crypto' | 'Metals' | 'Indices' | 'Commodities';
  analysisType: 'Daily Brief' | 'Weekly Outlook' | 'Technical' | 'Fundamental' | 'Cross-Asset';
  timeframe: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  summary: string;
  marketContext: string;
  technicalPicture: string;
  fundamentalDrivers: string;
  keyLevels: {
    resistance2?: string;
    resistance1: string;
    currentPrice: string;
    support1: string;
    support2?: string;
  };
  riskConsiderations: string;
  featured?: boolean;
}

export interface TradingGuide {
  id: string;
  slug: string;
  title: string;
  category: 'Getting Started' | 'Forex' | 'Crypto' | 'Technical Analysis' | 'Risk Management' | 'Platforms' | 'Trading Tools';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyTakeaways: string[];
  relatedCrossLinks: {
    title: string;
    href: string;
  }[];
}

export interface WebinarItem {
  id: string;
  slug: string;
  title: string;
  category: 'Macro Strategy' | 'Technical Analysis' | 'Risk Management' | 'Platform Masterclass';
  date: string;
  time: string;
  duration: string;
  status: 'Upcoming' | 'On-Demand';
  speaker: {
    name: string;
    role: string;
    bio: string;
  };
  description?: string;
  agenda: string[];
  learningOutcomes: string[];
  videoDuration?: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Basics' | 'Orders' | 'Risk' | 'Technical' | 'Macro' | 'Instruments' | string;
  letter: string;
  definition: string;
  example?: string;
  formula?: string;
  relatedTerms?: string[];
}
