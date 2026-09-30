import type { Metadata } from 'next';
import { HelpView } from '@/components/help/HelpView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Help Center | ${BRAND_NAME}`,
  description: `Explore trading, platforms, accounts, market information and support resources in one place on ${BRAND_NAME}.`
};

export default function HelpPage() {
  return <HelpView activeSubroute="help" />;
}
