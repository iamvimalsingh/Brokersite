import type { Metadata } from 'next';
import { MobileTraderView } from '@/components/platforms/MobileTraderView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Mobile Trading | ${BRAND_NAME}`,
  description: `Trade wherever the market takes you. Native iOS and Android mobile trading applications on ${BRAND_NAME} with push alerts, gesture charts and biometric security.`
};

export default function MobilePage() {
  return <MobileTraderView />;
}
