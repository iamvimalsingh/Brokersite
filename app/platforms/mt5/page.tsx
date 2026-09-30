import type { Metadata } from 'next';
import { MT5View } from '@/components/platforms/MT5View';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `MetaTrader 5 | ${BRAND_NAME}`,
  description: `Powerful tools for advanced market analysis. MetaTrader 5 on ${BRAND_NAME} with 21 timeframes, MQL5 algorithmic scripting, Depth of Market, and multi-currency backtesting.`
};

export default function MT5Page() {
  return <MT5View />;
}
