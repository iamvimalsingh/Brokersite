import type { Metadata } from 'next';
import { MarketsLandingView } from '@/components/markets/MarketsLandingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Global Markets Directory | ${BRAND_NAME}`,
  description: `Explore market information across forex, digital assets, indices, commodities and metals through one professional brokerage experience with ${BRAND_NAME}.`
};

export default function MarketsPage() {
  return <MarketsLandingView />;
}
