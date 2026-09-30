import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Trading Guides & Methodologies',
  description: `Practical guides on order types, risk budgeting, and charting strategies on ${BRAND_NAME}.`
};

export default function GuidesPage() {
  return <ResourcesView resourceId="guides" />;
}
