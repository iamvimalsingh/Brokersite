import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Trading Account Types',
  description: `Compare Standard, Raw Spread, and Pro account tiers on ${BRAND_NAME}. Transparent pricing and competitive conditions.`
};

export default function AccountsPage() {
  return <TradingView activeSubroute="accounts" />;
}
