import type { Metadata } from 'next';
import { CompanyView } from '@/components/company/CompanyView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Security Architecture - ${BRAND_NAME}`,
  description: `Learn how Two-Factor Authentication, session monitoring, and data encryption safeguard your accounts on ${BRAND_NAME}.`
};

export default function SecurityPage() {
  return <CompanyView activeSubroute="security" />;
}
