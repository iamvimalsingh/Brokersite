import type { Metadata } from 'next';
import { HelpView } from '@/components/help/HelpView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `FAQ | ${BRAND_NAME}`,
  description: `Quick answers to common questions about accounts, markets, platforms, trading and security on ${BRAND_NAME}.`
};

export default function FAQPage() {
  return <HelpView activeSubroute="faq" />;
}
