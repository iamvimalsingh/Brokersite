import type { Metadata } from 'next';
import { IndicesView } from '@/components/markets/IndicesView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Global Indices Trading | ${BRAND_NAME}`,
  description: `Follow and trade major benchmark equity indices including US500, NAS100, and GER40 with ${BRAND_NAME}.`
};

export default function IndicesPage() {
  return <IndicesView />;
}
