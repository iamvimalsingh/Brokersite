import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BROKER_CONFIG, BRAND_NAME } from '@/lib/config';
import { AlertCircle, Shield, FileText, Cookie } from 'lucide-react';

export interface LegalViewProps {
  pageType: 'risk-disclosure' | 'terms' | 'privacy' | 'cookies';
}

export const LegalView: React.FC<LegalViewProps> = ({ pageType }) => {
  const meta = {
    'risk-disclosure': {
      title: 'Risk Disclosure Statement',
      subtitle: 'Market Risk Notice',
      icon: <AlertCircle className="w-5 h-5 text-[#C98A00]" />
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Website Terms',
      icon: <FileText className="w-5 h-5 text-[#087F78]" />
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Data Handling Transparency',
      icon: <Shield className="w-5 h-5 text-[#087F78]" />
    },
    cookies: {
      title: 'Cookie Notice',
      subtitle: 'Browser Storage Information',
      icon: <Cookie className="w-5 h-5 text-[#087F78]" />
    }
  }[pageType];

  return (
    <div className="py-12 sm:py-16">
      <Container size="narrow">
        {/* Header */}
        <div className="mb-10 border-b border-[#E7E4DE] pb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            {meta.icon}
            <span>{meta.subtitle}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-normal text-[#111111] leading-tight mb-3"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            {meta.title}
          </h1>
          <p className="text-xs font-mono text-[#77736C]">
            Effective: September 2026 · {BROKER_CONFIG.legalEntity}
          </p>
        </div>

        {/* Tab links between legal documents */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 text-xs border-b border-[#E7E4DE]">
          <Link
            href="/risk-disclosure"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'risk-disclosure' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Risk Disclosure
          </Link>
          <Link
            href="/terms"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'terms' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'privacy' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookies"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'cookies' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Cookie Policy
          </Link>
        </div>

        {/* Legal Text Content */}
        <div className="prose prose-sm max-w-none text-[#111111] space-y-6 text-xs sm:text-sm leading-relaxed">
          {pageType === 'risk-disclosure' && (
            <>
              <div className="p-4 bg-[#F3F2EE] border-l-4 border-[#C98A00] rounded-r-md text-xs leading-relaxed text-[#111111]">
                <strong>Important Notice:</strong> Trading foreign exchange, cryptocurrency derivatives, and leveraged financial contracts involves substantial risk of financial loss. You should only trade with funds you can afford to lose.
              </div>

              <h2 className="text-base font-bold text-[#111111] pt-2">1. Leveraged Trading Risks</h2>
              <p className="text-[#77736C]">
                Leveraged trading allows market participants to control larger contract values with a margin deposit. While leverage can magnify positive returns, it equally amplifies losses. Adverse price movements can rapidly deplete available account margin.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Market Volatility &amp; Gapping</h2>
              <p className="text-[#77736C]">
                Financial markets can experience rapid price fluctuations and gap events where prices move between quotes without intermediate transactions. During high volatility, executed prices may differ from requested order levels (slippage).
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">3. Cryptocurrency Derivative Volatility</h2>
              <p className="text-[#77736C]">
                Digital asset derivatives trade 24/7 and often experience greater price dispersion than traditional fiat currencies. Market sentiment can change rapidly based on technological, macroeconomic, or regulatory events.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">4. General Information Only</h2>
              <p className="text-[#77736C]">
                All market commentary, articles, and calculators on this website are provided solely for general informational and educational purposes. {BRAND_NAME} does not provide individualized investment advice or financial planning.
              </p>
            </>
          )}

          {pageType === 'terms' && (
            <>
              <h2 className="text-base font-bold text-[#111111]">1. Website Terms &amp; Scope</h2>
              <p className="text-[#77736C]">
                This public website is operated by {BROKER_CONFIG.legalEntity}. Access to this website is subject to these terms. This website is a presentation, marketing, and navigational platform linking to external client management and trading systems.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Territorial Limitations</h2>
              <p className="text-[#77736C]">
                The services and materials on this website are not directed at residents of jurisdictions where distribution or use of such information would be contrary to local laws or regulations.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">3. Intellectual Property</h2>
              <p className="text-[#77736C]">
                All branding, trade names, page layouts, text, and visual elements on this website are proprietary to {BRAND_NAME} or its licensors.
              </p>
            </>
          )}

          {pageType === 'privacy' && (
            <>
              <h2 className="text-base font-bold text-[#111111]">1. Information Collection</h2>
              <p className="text-[#77736C]">
                When using this public website, we collect standard web analytics data such as IP address, browser type, and form submissions. Account opening identification documents are collected strictly through our separate secure CRM portal.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Data Protection</h2>
              <p className="text-[#77736C]">
                We implement industry-standard encryption protocols to safeguard communications submitted through our contact forms. We do not sell or rent personal information to third-party data brokers.
              </p>
            </>
          )}

          {pageType === 'cookies' && (
            <>
              <h2 className="text-base font-bold text-[#111111]">1. Use of Cookies</h2>
              <p className="text-[#77736C]">
                We use functional cookies to remember your interface preferences (such as selected language) and optimize website performance. You can adjust cookie preferences through your browser settings.
              </p>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
