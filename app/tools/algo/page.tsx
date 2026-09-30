import type { Metadata } from 'next';
import { AlgoView } from '@/components/tools/AlgoView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Algorithmic Trading | ${BRAND_NAME}`,
  description: `Build a more systematic trading process. Explore rule-based strategies, automated execution pipelines, and risk parameters on ${BRAND_NAME}.`
};

export default function AlgoPage() {
  return <AlgoView />;
}
