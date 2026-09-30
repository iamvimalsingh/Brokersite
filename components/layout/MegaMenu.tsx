'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavSection } from '@/lib/navigation';
import {
  TrendingUp,
  BarChart2,
  Cpu,
  Layers,
  BookOpen,
  Building,
  HelpCircle,
  ArrowRight,
  Shield,
  Smartphone,
  Monitor
} from 'lucide-react';

interface MegaMenuProps {
  section: NavSection;
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ section, isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

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

  const getSubtleIcon = (id: string, index: number) => {
    switch (id) {
      case 'markets':
        return <TrendingUp className="w-4 h-4 text-[#087F78]" />;
      case 'trading':
        return <BarChart2 className="w-4 h-4 text-[#087F78]" />;
      case 'platforms':
        return index === 1 ? (
          <Smartphone className="w-4 h-4 text-[#087F78]" />
        ) : (
          <Monitor className="w-4 h-4 text-[#087F78]" />
        );
      case 'tools':
        return <Cpu className="w-4 h-4 text-[#087F78]" />;
      case 'resources':
        return <BookOpen className="w-4 h-4 text-[#087F78]" />;
      case 'company':
        return index === 2 ? (
          <Shield className="w-4 h-4 text-[#087F78]" />
        ) : (
          <Building className="w-4 h-4 text-[#087F78]" />
        );
      case 'help':
        return <HelpCircle className="w-4 h-4 text-[#087F78]" />;
      default:
        return <Layers className="w-4 h-4 text-[#087F78]" />;
    }
  };

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl bg-[#FBFBF9] border border-[#E7E4DE] shadow-xl rounded-b-lg p-6 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      onMouseLeave={onClose}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E7E4DE]">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#77736C]">
          {section.label} Overview
        </div>
        {section.href && (
          <Link
            href={section.href}
            onClick={onClose}
            className="text-xs font-semibold text-[#087F78] hover:text-[#076C66] flex items-center gap-1 group"
          >
            <span>View All {section.label}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {section.items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="p-3 rounded-md hover:bg-[#F3F2EE] border border-transparent hover:border-[#E7E4DE] transition-all group flex items-start gap-3"
          >
            <div className="p-1.5 rounded-sm bg-[#DDEDEA]/50 group-hover:bg-[#DDEDEA] transition-colors shrink-0 mt-0.5">
              {getSubtleIcon(section.id, index)}
            </div>
            <div>
              <div className="text-sm font-semibold text-[#111111] group-hover:text-[#087F78] transition-colors leading-snug">
                {item.title}
              </div>
              <div className="text-xs text-[#77736C] line-clamp-2 mt-0.5 leading-relaxed">
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
