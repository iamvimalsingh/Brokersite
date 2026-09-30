import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Interactive Trading Webinars & Sessions',
  description: `Educational webinars covering platform navigation, market overviews, and trading tools on ${BRAND_NAME}.`
};

export default function WebinarsPage() {
  return <ResourcesView resourceId="webinars" />;
}
