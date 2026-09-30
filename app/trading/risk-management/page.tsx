import type { Metadata } from 'next';
import { TradingView } from '@/components/trading/TradingView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Risk Management Protocols',
  description: `Learn how margin limits, automated stop parameters, and risk control features are configured on ${BRAND_NAME}.`
};

export default function RiskManagementPage() {
  return <TradingView activeSubroute="risk-management" />;
}
