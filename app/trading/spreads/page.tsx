import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Live Spread Schedules & Fees',
  description: `View indicative spread schedules, commission rates, and financing fees across markets on ${BRAND_NAME}.`
};

export default function SpreadsPage() {
  return <TradingView activeSubroute="spreads" />;
}
