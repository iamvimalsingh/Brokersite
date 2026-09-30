import type { Metadata } from 'next';
import { QuantView } from '@/components/tools/QuantView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Quantitative Tools | ${BRAND_NAME}`,
  description: `See the market through data. Explore cross-asset correlation matrices, implied vs historical volatility profiles, and dispersion statistics on ${BRAND_NAME}.`
};

export default function QuantPage() {
  return <QuantView />;
}
