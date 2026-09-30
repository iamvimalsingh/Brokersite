import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { MarketTicker } from '@/components/layout/MarketTicker';
import { RiskWarning } from '@/components/layout/RiskWarning';
import { Footer } from '@/components/layout/Footer';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FBFBF9',
};

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Professional Forex & Crypto Brokerage`,
    template: `%s | ${BRAND_NAME}`
  },
  description: `Public website for ${BRAND_NAME} - a modern Forex and Crypto brokerage brand offering transparent trading conditions, market information, and advanced platforms.`,
  keywords: ['Forex trading', 'Crypto derivatives', 'Brokerage', 'Trading platform', 'RegearFX', 'Market analysis', 'Commodities'],
  openGraph: {
    title: `${BRAND_NAME} | Global Forex & Crypto Brokerage`,
    description: `Access global financial markets through ${BRAND_NAME}. Transparent conditions, intuitive platforms, and multi-asset trading tools.`,
    type: 'website',
    siteName: BRAND_NAME
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_NAME} | Global Forex & Crypto Brokerage`,
    description: `Access global financial markets through ${BRAND_NAME}. Transparent conditions, intuitive platforms, and multi-asset trading tools.`
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FBFBF9] text-[#111111]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBFBF9] text-[#111111] antialiased selection:bg-[#DDEDEA] selection:text-[#087F78] min-h-screen flex flex-col">
        {/* Global Navigation Header */}
        <Navbar />
        {/* Live-Feel Market Ticker (Demo Snapshot) */}
        <MarketTicker />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Institutional Risk Warning Section */}
        <RiskWarning />

        {/* Global 4-Column Footer */}
        <Footer />
      </body>
    </html>
  );
}
