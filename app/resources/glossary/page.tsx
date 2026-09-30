import type { Metadata } from 'next';
import { ResourcesView } from '@/components/resources/ResourcesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Financial Markets Glossary A-Z',
  description: `A comprehensive reference dictionary of financial markets, forex, and cryptocurrency terminology on ${BRAND_NAME}.`
};

export default function GlossaryPage() {
  return <ResourcesView resourceId="glossary" />;
}
