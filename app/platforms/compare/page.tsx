import type { Metadata } from 'next';
import { ComparePlatformsView } from '@/components/platforms/ComparePlatformsView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Compare Platforms | ${BRAND_NAME}`,
  description: `Side-by-side feature comparison of supported trading platforms on ${BRAND_NAME}. Compare WebTrader, Mobile, MT5, MT4, and TradingView across execution, charting, and algorithmic features.`
};

export default function ComparePlatformsPage() {
  return <ComparePlatformsView />;
}
