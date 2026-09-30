import type { Metadata } from 'next';
import { CryptoView } from '@/components/markets/CryptoView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Crypto Markets | ${BRAND_NAME}`,
  description: `Access cryptocurrency derivative instruments with 24/7 liquidity, transparent spreads, and professional execution tools at ${BRAND_NAME}.`
};

export default function CryptoPage() {
  return <CryptoView />;
}
