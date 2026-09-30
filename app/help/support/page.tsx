import type { Metadata } from 'next';
import { HelpView } from '@/components/help/HelpView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Support | ${BRAND_NAME}`,
  description: `Reach the right team for general questions, trading information, partnerships or technical assistance on ${BRAND_NAME}.`
};

export default function SupportPage() {
  return <HelpView activeSubroute="support" />;
}
