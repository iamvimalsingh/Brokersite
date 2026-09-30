import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `About Us - ${BRAND_NAME}`,
  description: `Discover the mission and technology principles driving ${BRAND_NAME} online brokerage.`
};

export default function AboutPage() {
  return <CompanyView activeSubroute="about" />;
}
