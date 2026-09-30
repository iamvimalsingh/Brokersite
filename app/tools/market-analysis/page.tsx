import type { Metadata } from 'next';
import { MarketAnalysisView } from '@/components/tools/MarketAnalysisView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Market Analysis | ${BRAND_NAME}`,
  description: `Daily market briefs, macro research, and technical analysis across currencies, digital assets, metals, and global indices from ${BRAND_NAME}.`
};

export default function MarketAnalysisPage() {
  return <MarketAnalysisView />;
}
