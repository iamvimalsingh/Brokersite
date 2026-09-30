import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { BROKER_CONFIG, BRAND_NAME } from '../../lib/config';
import { Globe, Twitter, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    products: [
      { label: 'Markets', href: '/markets' },
      { label: 'Trading', href: '/trading' },
      { label: 'Platforms', href: '/platforms' },
      { label: 'Tools', href: '/tools' }
    ],
    resources: [
      { label: 'Academy', href: '/resources/academy' },
      { label: 'News', href: '/resources/news' },
      { label: 'Analysis', href: '/resources/analysis' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Glossary', href: '/resources/glossary' }
    ],
    company: [
      { label: 'About', href: '/company/about' },
      { label: 'Why Choose Us', href: '/company/why-us' },
      { label: 'Security', href: '/company/security' },
      { label: 'Partners', href: '/company/partners' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    legalAndHelp: [
      { label: 'Risk Disclosure', href: '/risk-disclosure' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'FAQ', href: '/help/faq' },
      { label: 'Support', href: '/help/support' }
    ]
  };

  return (
    <footer className="bg-[#FBFBF9] border-t border-[#E7E4DE] pt-14 pb-12 text-[#111111]" id="footer">
      <Container size="default">
        {/* Top 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#E7E4DE]">
          {/* Col 1: Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-xs text-[#77736C]">
              {footerNavigation.products.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#087F78] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-[#77736C]">
              {footerNavigation.resources.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#087F78] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-[#77736C]">
              {footerNavigation.company.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#087F78] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal & Help */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-4">
              Legal &amp; Help
            </h3>
            <ul className="space-y-2.5 text-xs text-[#77736C]">
              {footerNavigation.legalAndHelp.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#087F78] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand & Corporate Operational Overview */}
        <div className="pt-8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#77736C]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#111111] text-[#FBFBF9] flex items-center justify-center font-serif text-sm font-semibold">
              R
            </div>
            <div>
              <span className="font-semibold text-[#111111]">{BRAND_NAME}</span>
              <span className="mx-2 text-[#E7E4DE]">|</span>
              <span>{BROKER_CONFIG.tagline}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#77736C]">
            <span>Support: Monday–Friday, 09:00–18:00 UTC</span>
            <span>·</span>
            <span>Office: International Client Services</span>
          </div>
        </div>

        {/* Regulatory & Corporate Transparency Placeholders */}
        <div className="text-[11px] leading-relaxed text-[#77736C] max-w-4xl border-t border-[#E7E4DE]/60 pt-6 space-y-2">
          <p>
            Regulatory Notice: Registration Number: [TO BE VERIFIED] · Regulatory Status: [TO BE VERIFIED] · License Information: [TO BE VERIFIED]
          </p>
          <p>
            Disclaimer: The services and financial products described on this website are not directed at residents of jurisdictions where such distribution or use would be contrary to local laws or regulations. {BRAND_NAME} operates this public website strictly as an informational and educational portal linking to external CRM client onboarding and trading terminals.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Language, Social Links */}
        <div className="mt-8 pt-6 border-t border-[#E7E4DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736C]">
          <div>
            &copy; {currentYear} {BRAND_NAME}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#087F78]" />
              <span>English (Global)</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
