import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Trading Specifications & Conditions',
  description: `Explore trading accounts, execution conditions, spread schedules, and margin parameters on ${BRAND_NAME}.`
};

export default function TradingPage() {
  return <TradingView activeSubroute="accounts" />;
}
