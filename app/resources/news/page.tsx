import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Global Financial Market News',
  description: `Stay informed with curated macro news, geopolitical developments, and market trends on ${BRAND_NAME}.`
};

export default function NewsPage() {
  return <ResourcesView resourceId="news" />;
}
