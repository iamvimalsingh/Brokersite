import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Learn how ${BRAND_NAME} handles and protects personal data and communication inquiries.`
};

export default function PrivacyPage() {
  return <LegalView pageType="privacy" />;
}
