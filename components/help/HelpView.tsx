'use client';

import React from 'react';
import { HelpCenterView } from './HelpCenterView';
import { FAQView } from './FAQView';
import { SupportView } from './SupportView';

export interface HelpViewProps {
  activeSubroute?: 'help' | 'faq' | 'support';
}

export const HelpView: React.FC<HelpViewProps> = ({ activeSubroute = 'help' }) => {
  switch (activeSubroute) {
    case 'faq':
      return <FAQView />;
    case 'support':
      return <SupportView />;
    case 'help':
    default:
      return <HelpCenterView />;
  }
};
