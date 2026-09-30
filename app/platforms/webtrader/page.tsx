import type { Metadata } from 'next';
import { WebTraderView } from '@/components/platforms/WebTraderView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `WebTrader | ${BRAND_NAME}`,
  description: `Everything you need, right in your browser. Fast, zero-install WebTrader terminal on ${BRAND_NAME} with live charts, order management and depth indicators.`
};

export default function WebTraderPage() {
  return <WebTraderView />;
}
