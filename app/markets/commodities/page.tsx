import type { Metadata } from 'next';
import { CommoditiesView } from '@/components/markets/CommoditiesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Commodities Trading | ${BRAND_NAME}`,
  description: `Access key energy, metal, and agricultural commodity markets with published schedules at ${BRAND_NAME}.`
};

export default function CommoditiesPage() {
  return <CommoditiesView />;
}
