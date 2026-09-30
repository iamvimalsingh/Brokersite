import type { Metadata } from 'next';
import { TradingViewDetailView } from '@/components/platforms/TradingViewDetailView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `TradingView | ${BRAND_NAME}`,
  description: `Powerful charting for deeper market analysis. Connect your ${BRAND_NAME} account directly to TradingView for 100+ indicators, Pine Script, and multi-chart layouts.`
};

export default function TradingViewPage() {
  return <TradingViewDetailView />;
}
