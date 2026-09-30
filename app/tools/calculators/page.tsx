import type { Metadata } from 'next';
import { CalculatorsView } from '@/components/tools/CalculatorsView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Trading Calculators | ${BRAND_NAME}`,
  description: `Interactive pip calculator, margin calculator, position size calculator, and profit/loss calculation engines on ${BRAND_NAME}.`
};

export default function CalculatorsPage() {
  return <CalculatorsView />;
}
