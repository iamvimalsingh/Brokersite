import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Why Choose Us - ${BRAND_NAME}`,
  description: `Explore the advantages of trading with ${BRAND_NAME} - clear pricing, responsive platforms, and support.`
};

export default function WhyUsPage() {
  return <CompanyView activeSubroute="why-us" />;
}
