import type { Metadata } from 'next';
import { PlatformsOverviewView } from '@/components/platforms/PlatformsOverviewView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Trading Platforms | ${BRAND_NAME}`,
  description: `Access professional trading tools across web, desktop and mobile environments with ${BRAND_NAME}. Compare WebTrader, Mobile, MT5, MT4 and TradingView.`
};

export default function PlatformsPage() {
  return <PlatformsOverviewView />;
}
