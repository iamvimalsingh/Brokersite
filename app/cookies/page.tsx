import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cookie Notice & Preferences',
  description: `Understand the use of essential cookies and preference storage on the ${BRAND_NAME} website.`
};

export default function CookiesPage() {
  return <LegalView pageType="cookies" />;
}
