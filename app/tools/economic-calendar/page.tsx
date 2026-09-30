import type { Metadata } from 'next';
import { EconomicCalendarView } from '@/components/tools/EconomicCalendarView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Economic Calendar | ${BRAND_NAME}`,
  description: `Real-time macroeconomic announcements, central bank interest rate decisions, and consensus estimates on ${BRAND_NAME}.`
};

export default function EconomicCalendarPage() {
  return <EconomicCalendarView />;
}
