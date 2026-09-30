import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Partners & Introducing Brokers - ${BRAND_NAME}`,
  description: `Partner with ${BRAND_NAME} through our Introducing Broker and institutional partnership programs.`
};

export default function PartnersPage() {
  return <CompanyView activeSubroute="partners" />;
}
