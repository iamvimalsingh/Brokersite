import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `About ${BRAND_NAME} - Corporate Overview`,
  description: `Learn about ${BRAND_NAME}, our technology infrastructure, operating principles, and trading services.`
};

export default function CompanyPage() {
  return <CompanyView activeSubroute="about" />;
}
