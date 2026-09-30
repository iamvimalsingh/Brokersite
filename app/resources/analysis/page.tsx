import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'In-Depth Market Analysis & Research',
  description: `In-depth technical setups, support and resistance mapping, and weekly outlooks on ${BRAND_NAME}.`
};

export default function AnalysisPage() {
  return <ResourcesView resourceId="analysis" />;
}
