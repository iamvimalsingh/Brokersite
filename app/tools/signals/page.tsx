import type { Metadata } from 'next';
import { SignalsView } from '@/components/tools/SignalsView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Trading Signals | ${BRAND_NAME}`,
  description: `Systematic technical signals and momentum setup alerts across EUR/USD, GBP/USD, Gold, and Bitcoin on ${BRAND_NAME}.`
};

export default function SignalsPage() {
  return <SignalsView />;
}
