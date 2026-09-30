import type { Metadata } from 'next';
import { ForexView } from '@/components/markets/ForexView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Forex Trading | ${BRAND_NAME}`,
  description: `Trade major, minor, and exotic global currency pairs with transparent spreads and institutional execution at ${BRAND_NAME}.`
};

export default function ForexPage() {
  return <ForexView />;
}
