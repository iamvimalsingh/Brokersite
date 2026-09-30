'use client';

import React from 'react';
import { AboutView } from './AboutView';
import { WhyUsView } from './WhyUsView';
import { SecurityView } from './SecurityView';
import { PartnersView } from './PartnersView';
import { CareersView } from './CareersView';
import { ContactView } from './ContactView';

export interface CompanyViewProps {
  activeSubroute?: 'about' | 'why-us' | 'security' | 'partners' | 'careers' | 'contact';
}

export const CompanyView: React.FC<CompanyViewProps> = ({ activeSubroute = 'about' }) => {
  switch (activeSubroute) {
    case 'why-us':
      return <WhyUsView />;
    case 'security':
      return <SecurityView />;
    case 'partners':
      return <PartnersView />;
    case 'careers':
      return <CareersView />;
    case 'contact':
      return <ContactView />;
    case 'about':
    default:
      return <AboutView />;
  }
};
