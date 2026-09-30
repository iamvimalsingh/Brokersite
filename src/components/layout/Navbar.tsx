import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileMenu } from './MobileMenu';
import { SearchModal } from '../common/SearchModal';
import { BROKER_CONFIG, BRAND_NAME } from '../../lib/config';
import { Search, Globe, Menu, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'ES' | 'DE' | 'FR' | 'AR' | 'ZH'>('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages: Array<'EN' | 'ES' | 'DE' | 'FR' | 'AR' | 'ZH'> = [
    'EN',
    'ES',
    'DE',
    'FR',
    'AR',
    'ZH'
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E7E4DE] transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Wordmark Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2.5 text-[#111111] group focus-visible:outline-none"
              aria-label={`${BRAND_NAME} Home`}
            >
              <div className="w-8 h-8 rounded-sm bg-[#111111] text-[#FBFBF9] flex items-center justify-center font-serif text-lg font-medium shadow-xs group-hover:bg-[#087F78] transition-colors">
                R
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl sm:text-2xl font-normal tracking-tight leading-none text-[#111111]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {BRAND_NAME}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#77736C]">
                  Markets
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Zone */}
          <DesktopNavigation />

          {/* Right Action Controls Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:px-2.5 sm:py-1.5 text-xs text-[#77736C] hover:text-[#111111] hover:bg-[#F3F2EE] rounded-md transition-colors flex items-center gap-2 border border-transparent hover:border-[#E7E4DE] cursor-pointer"
              aria-label="Search markets and navigation"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline-block">Search</span>
              <kbd className="hidden xl:inline-block text-[10px] font-mono text-[#77736C] bg-white px-1.5 py-0.5 rounded-sm border border-[#E7E4DE]">
                ⌘K
              </kbd>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(prev => !prev)}
                className="p-2 sm:px-2.5 sm:py-1.5 text-xs font-medium text-[#77736C] hover:text-[#111111] hover:bg-[#F3F2EE] rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline-block">{language}</span>
              </button>

              {isLangDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-24 bg-white border border-[#E7E4DE] rounded-md shadow-lg py-1 z-50 animate-in fade-in"
                  onMouseLeave={() => setIsLangDropdownOpen(false)}
                >
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#F3F2EE] transition-colors cursor-pointer ${
                        language === lang ? 'font-semibold text-[#087F78]' : 'text-[#111111]'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In CTA (redirects to external CRM) */}
            <Button
              href={BROKER_CONFIG.crmLoginUrl}
              isExternal
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Sign In
            </Button>

            {/* Open Account CTA (redirects to external CRM registration) */}
            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="sm"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              className="hidden md:inline-flex"
            >
              Open Account
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#111111] hover:bg-[#F3F2EE] rounded-md transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Instant Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
