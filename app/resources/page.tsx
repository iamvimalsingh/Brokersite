import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Trading Academy & Resources',
  description: `Educational guides, trading academy courses, and market glossary on ${BRAND_NAME}.`
};

export default function ResourcesPage() {
  return <ResourcesView resourceId="overview" />;
}
