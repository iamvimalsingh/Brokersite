import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MAIN_NAVIGATION } from '../../lib/navigation';
import { BROKER_CONFIG } from '../../lib/config';
import { X, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedSection(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setExpandedSection(prev => (prev === id ? null : id));
  };

  const handleNavigate = (to: string) => {
    onClose();
    navigate(to);
  };

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/40 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div
        ref={drawerRef}
        className="w-full max-w-sm h-full bg-[#FBFBF9] border-l border-[#E7E4DE] shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E7E4DE] bg-white sticky top-0 z-10">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-2 text-base font-bold tracking-tight text-[#111111]"
          >
            <span className="w-7 h-7 rounded-sm bg-[#111111] text-[#FBFBF9] flex items-center justify-center font-serif text-sm">
              S
            </span>
            <span style={{ fontFamily: 'var(--font-serif)' }} className="text-lg">
              {BROKER_CONFIG.brandName}
            </span>
          </Link>

          <button
            onClick={onClose}
            className="p-2 text-[#77736C] hover:text-[#111111] hover:bg-[#F3F2EE] rounded-md transition-colors"
            aria-label="Close mobile navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Accordion Navigation */}
        <div className="flex-1 px-4 py-4 space-y-1">
          {MAIN_NAVIGATION.map(section => {
            const isExpanded = expandedSection === section.id;
            return (
              <div key={section.id} className="border-b border-[#E7E4DE]/60 pb-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-3 px-2 text-left text-base font-medium text-[#111111] hover:text-[#087F78] transition-colors"
                  aria-expanded={isExpanded}
                >
                  <span>{section.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#77736C] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#087F78]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pl-3 pr-2 pb-3 space-y-1 animate-in fade-in duration-150">
                    {section.href && (
                      <button
                        onClick={() => handleNavigate(section.href!)}
                        className="w-full text-left py-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#087F78] hover:bg-[#F3F2EE] rounded-sm transition-colors"
                      >
                        Explore all {section.label} &rarr;
                      </button>
                    )}
                    {section.items.map(item => (
                      <button
                        key={item.href}
                        onClick={() => handleNavigate(item.href)}
                        className="w-full text-left py-2 px-2.5 rounded-md hover:bg-[#F3F2EE] transition-colors block group"
                      >
                        <div className="text-sm font-medium text-[#111111] group-hover:text-[#087F78]">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#77736C] line-clamp-1 mt-0.5">
                          {item.description}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Bottom Actions (Divider & External CRM Portal CTAs) */}
        <div className="p-5 border-t border-[#E7E4DE] bg-white space-y-3 sticky bottom-0">
          <div className="text-[11px] text-[#77736C] text-center mb-1">
            Direct CRM &amp; Trading Gateways
          </div>

          <Button
            href={BROKER_CONFIG.crmRegisterUrl}
            isExternal
            variant="primary"
            fullWidth
            size="lg"
            icon={<ExternalLink className="w-4 h-4 ml-1" />}
          >
            Open Live Account
          </Button>

          <Button
            href={BROKER_CONFIG.crmLoginUrl}
            isExternal
            variant="outline"
            fullWidth
            size="md"
          >
            Sign In to CRM Portal
          </Button>

          <Button
            href={BROKER_CONFIG.tradingTerminalUrl}
            isExternal
            variant="soft"
            fullWidth
            size="sm"
          >
            Launch WebTrader Terminal
          </Button>
        </div>
      </div>
    </div>
  );
};
