import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Contact Us - ${BRAND_NAME}`,
  description: `Reach our customer and institutional desk directly for inquiries regarding ${BRAND_NAME} platforms and services.`
};

export default function ContactPage() {
  return <CompanyView activeSubroute="contact" />;
}
