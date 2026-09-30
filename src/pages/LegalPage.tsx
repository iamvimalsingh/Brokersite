import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { BROKER_CONFIG } from '../lib/config';
import { AlertCircle, Shield, FileText, Cookie } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let pageType: 'risk-disclosure' | 'terms' | 'privacy' | 'cookies' = 'risk-disclosure';
  if (path.includes('terms')) pageType = 'terms';
  else if (path.includes('privacy')) pageType = 'privacy';
  else if (path.includes('cookies')) pageType = 'cookies';

  const meta = {
    'risk-disclosure': {
      title: 'Full Risk Disclosure Statement',
      subtitle: 'Mandatory Institutional Risk Notice',
      icon: <AlertCircle className="w-5 h-5 text-[#C98A00]" />
    },
    terms: {
      title: 'Terms & Conditions of Service',
      subtitle: 'Website & Service Agreement',
      icon: <FileText className="w-5 h-5 text-[#087F78]" />
    },
    privacy: {
      title: 'Global Privacy & Data Policy',
      subtitle: 'Data Handling & Privacy Standards',
      icon: <Shield className="w-5 h-5 text-[#087F78]" />
    },
    cookies: {
      title: 'Cookie & Tracking Notice',
      subtitle: 'Browser Storage Transparency',
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
            Last updated &amp; effective: September 2026 · {BROKER_CONFIG.legalEntity}
          </p>
        </div>

        {/* Tab links between legal documents */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 text-xs border-b border-[#E7E4DE]">
          <Link
            to="/risk-disclosure"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'risk-disclosure' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Risk Disclosure
          </Link>
          <Link
            to="/terms"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'terms' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              pageType === 'privacy' ? 'bg-[#181818] text-white font-medium' : 'text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/cookies"
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
                <strong>Warning:</strong> Trading foreign exchange (Forex), cryptocurrencies, contracts for difference (CFDs), and leveraged derivatives involves significant risk of loss and is not suitable for all investors. You should not invest money that you cannot afford to lose.
              </div>

              <h2 className="text-base font-bold text-[#111111] pt-2">1. Nature of Leveraged Trading</h2>
              <p className="text-[#77736C]">
                Leverage enables market participants to gain large market exposure with a comparatively small initial margin deposit. A relatively small market fluctuation can result in proportionally large gains or losses. If the market moves against your position, you may sustain a total loss of your initial margin deposit and any additional funds deposited to maintain the position.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Volatility and Price Gapping</h2>
              <p className="text-[#77736C]">
                Financial markets are subject to sudden price discontinuities (known as &ldquo;gaps&rdquo; or slippage), where the price jumps between discrete quotes without trading occurring at intermediate levels. This can occur around major economic news releases, central bank decisions, or weekend market opens. Stop-loss orders do not guarantee execution at the specified price during gap events unless specifically designated as guaranteed.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">3. Cryptocurrency Derivative Risks</h2>
              <p className="text-[#77736C]">
                Digital asset derivative products exhibit higher price volatility than traditional sovereign currencies and equities. Market sentiment can shift precipitously based on technological developments, protocol updates, or global regulatory changes.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">4. No Financial Advice Provided</h2>
              <p className="text-[#77736C]">
                All market commentaries, daily technical levels, economic calendars, and educational articles provided on this website are published solely for general information purposes. RegearFX does not provide personalized investment advice or recommendations regarding the suitability of any trade.
              </p>
            </>
          )}

          {pageType === 'terms' && (
            <>
              <h2 className="text-base font-bold text-[#111111]">1. Scope of Website Use</h2>
              <p className="text-[#77736C]">
                This public website is owned and operated by {BROKER_CONFIG.legalEntity}. By accessing or using this website, you confirm your acceptance of these Terms and Conditions. This website serves as a marketing, educational, and navigational portal to our separate client account management portals and institutional execution systems.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Jurisdictional Limitations</h2>
              <p className="text-[#77736C]">
                The information provided on this website is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. Residents of restricted territories are prohibited from opening accounts or accessing execution gateways.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">3. Intellectual Property Rights</h2>
              <p className="text-[#77736C]">
                All trademarks, logos, page headers, custom graphics, button icons, scripts, and trade names appearing on this website are proprietary intellectual property of {BROKER_CONFIG.legalEntity} or its software licensors.
              </p>
            </>
          )}

          {pageType === 'privacy' && (
            <>
              <h2 className="text-base font-bold text-[#111111]">1. Information We Collect</h2>
              <p className="text-[#77736C]">
                When you browse our public website or submit an institutional contact form, we collect minimal operational information such as IP address, browser type, language preferences, and form contact data. Comprehensive client onboarding documentation is collected strictly inside our separate encrypted CRM portal.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Data Security &amp; Encryption</h2>
              <p className="text-[#77736C]">
                We implement industry-standard TLS encryption across all client communications. Access to contact inquiries is strictly restricted to authorized institutional sales and client desk representatives.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">3. No Sale of Personal Data</h2>
              <p className="text-[#77736C]">
                We do not sell, rent, or lease personal information to third-party data brokers or marketing affiliates under any circumstances.
              </p>
            </>
          )}

          {pageType === 'cookies' && (
            <>
              <h2 className="text-base font-bold text-[#111111]">1. How We Use Cookies</h2>
              <p className="text-[#77736C]">
                We utilize essential first-party cookies to remember your preferred language selection, preserve active search queries, and optimize page load performance. We do not employ third-party tracking pixels that monitor your browsing behavior across unrelated websites.
              </p>

              <h2 className="text-base font-bold text-[#111111] pt-2">2. Managing Preferences</h2>
              <p className="text-[#77736C]">
                You can manage or disable cookies via your browser settings. However, disabling essential cookies may impact the persistence of your selected language and interface preferences.
              </p>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
