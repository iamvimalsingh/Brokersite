import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Trading Academy - Structured Curricula',
  description: `Master market fundamentals, chart analysis, and risk management with the ${BRAND_NAME} Trading Academy.`
};

export default function AcademyPage() {
  return <ResourcesView resourceId="academy" />;
}
