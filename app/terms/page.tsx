import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Review the terms and conditions governing the use of the ${BRAND_NAME} public website.`
};

export default function TermsPage() {
  return <LegalView pageType="terms" />;
}
