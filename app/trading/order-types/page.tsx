import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Supported Order Types',
  description: `Understand market orders, limit orders, stops, and bracket orders available on ${BRAND_NAME} platforms.`
};

export default function OrderTypesPage() {
  return <TradingView activeSubroute="order-types" />;
}
