'use client';

import React from 'react';
import { ResourcesOverviewView } from './ResourcesOverviewView';
import { AcademyView } from './AcademyView';
import { NewsView } from './NewsView';
import { AnalysisView } from './AnalysisView';
import { GuidesView } from './GuidesView';
import { WebinarsView } from './WebinarsView';
import { GlossaryView } from './GlossaryView';

export interface ResourcesViewProps {
  resourceId?: 'overview' | 'academy' | 'news' | 'analysis' | 'guides' | 'webinars' | 'glossary';
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ resourceId = 'overview' }) => {
  switch (resourceId) {
    case 'academy':
      return <AcademyView />;
    case 'news':
      return <NewsView />;
    case 'analysis':
      return <AnalysisView />;
    case 'guides':
      return <GuidesView />;
    case 'webinars':
      return <WebinarsView />;
    case 'glossary':
      return <GlossaryView />;
    case 'overview':
    default:
      return <ResourcesOverviewView />;
  }
};
