import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Leverage & Margin Schedules',
  description: `Tiered leverage parameters and margin requirements across FX, commodities, and crypto assets on ${BRAND_NAME}.`
};

export default function LeveragePage() {
  return <TradingView activeSubroute="leverage" />;
}
