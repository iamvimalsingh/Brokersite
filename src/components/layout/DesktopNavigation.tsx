import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MAIN_NAVIGATION, NavSection } from '../../lib/navigation';
import { MegaMenu } from './MegaMenu';
import { ChevronDown } from 'lucide-react';

export const DesktopNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavSection | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (section: NavSection) => {
    setActiveSection(section);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // Only close if leaving nav boundary
    const rect = navRef.current?.getBoundingClientRect();
    if (rect && (e.clientY < rect.top || e.clientX < rect.left || e.clientX > rect.right)) {
      setActiveSection(null);
    }
  };

  const isCurrentActive = (section: NavSection) => {
    if (section.href && location.pathname === section.href) return true;
    return section.items.some(item => location.pathname === item.href);
  };

  return (
    <nav
      ref={navRef}
      className="hidden lg:flex items-center gap-1 xl:gap-2 relative"
      onMouseLeave={handleMouseLeave}
      aria-label="Main Navigation"
    >
      {MAIN_NAVIGATION.map(section => {
        const isActive = isCurrentActive(section);
        const isOpen = activeSection?.id === section.id;

        return (
          <div key={section.id} className="relative">
            <button
              onClick={() => setActiveSection(isOpen ? null : section)}
              onMouseEnter={() => handleMouseEnter(section)}
              className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                isActive
                  ? 'text-[#087F78] font-semibold'
                  : isOpen
                  ? 'text-[#111111] bg-[#F3F2EE]'
                  : 'text-[#111111] hover:text-[#087F78] hover:bg-[#F3F2EE]'
              }`}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span>{section.label}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#77736C] transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#087F78]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <MegaMenu
                section={section}
                isOpen={isOpen}
                onClose={() => setActiveSection(null)}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};
