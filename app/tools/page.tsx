import type { Metadata } from 'next';
import { ToolsOverviewView } from '@/components/tools/ToolsOverviewView';
import { BRAND_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: `Trading Tools | ${BRAND_NAME}`,
  description: `From market calendars and trading calculators to technical analysis and quantitative tools, ${BRAND_NAME} brings essential analytical resources together in one place.`
};

export default function ToolsPage() {
  return <ToolsOverviewView />;
}
