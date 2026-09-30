import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Risk Disclosure Statement',
  description: `Read the risk disclosure statement regarding trading leveraged Forex, crypto, and derivative contracts on ${BRAND_NAME}.`
};

export default function RiskDisclosurePage() {
  return <LegalView pageType="risk-disclosure" />;
}
