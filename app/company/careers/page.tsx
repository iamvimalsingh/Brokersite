import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Careers at ${BRAND_NAME}`,
  description: `Join the team at ${BRAND_NAME}. Explore opportunities in engineering, design, and operations.`
};

export default function CareersPage() {
  return <CompanyView activeSubroute="careers" />;
}
