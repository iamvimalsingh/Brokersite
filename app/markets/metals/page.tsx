import type { Metadata } from 'next';
import { MarketsView } from '@/components/markets/MarketsView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Precious Metals Trading',
  description: `Trade spot Gold (XAU/USD), Silver (XAG/USD), and Platinum with tight spreads on ${BRAND_NAME}.`
};

export default function MetalsMarketsPage() {
  return <MarketsView category="metals" />;
}
