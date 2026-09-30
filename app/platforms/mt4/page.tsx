import type { Metadata } from 'next';
import { MT4View } from '@/components/platforms/MT4View';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `MetaTrader 4 | ${BRAND_NAME}`,
  description: `A proven environment for active traders. MetaTrader 4 on ${BRAND_NAME} with Expert Advisors, custom MQL4 indicators, 9 timeframes, and robust order execution.`
};

export default function MT4Page() {
  return <MT4View />;
}
