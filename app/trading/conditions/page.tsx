import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Trading Conditions & Execution Policy',
  description: `Learn about execution models, pricing transparency, and order staging rules on ${BRAND_NAME}.`
};

export default function ConditionsPage() {
  return <TradingView activeSubroute="conditions" />;
}
