import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { MarketTicker } from './components/layout/MarketTicker';
import { RiskWarning } from './components/layout/RiskWarning';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { MarketsPage } from './pages/MarketsPage';
import { TradingPage } from './pages/TradingPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { ToolsPage } from './pages/ToolsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CompanyPage } from './pages/CompanyPage';
import { HelpPage } from './pages/HelpPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#111111] antialiased">
        {/* Global Header & Navigation */}
        <Navbar />
        {/* Live Market Ticker anchored right below the navigation */}
        <MarketTicker />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            {/* 1. Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* 2. Markets Routes */}
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/markets/:category" element={<MarketsPage />} />

            {/* 3. Trading Routes */}
            <Route path="/trading" element={<TradingPage forcedSubroute="accounts" />} />
            <Route path="/trading/accounts" element={<TradingPage forcedSubroute="accounts" />} />
            <Route path="/trading/conditions" element={<TradingPage forcedSubroute="conditions" />} />
            <Route path="/trading/spreads" element={<TradingPage forcedSubroute="spreads" />} />
            <Route path="/trading/leverage" element={<TradingPage forcedSubroute="leverage" />} />
            <Route path="/trading/order-types" element={<TradingPage forcedSubroute="order-types" />} />
            <Route path="/trading/risk-management" element={<TradingPage forcedSubroute="risk-management" />} />

            {/* 4. Platforms Routes */}
            <Route path="/platforms" element={<PlatformsPage />} />
            <Route path="/platforms/webtrader" element={<PlatformsPage forcedPlatform="webtrader" />} />
            <Route path="/platforms/mobile" element={<PlatformsPage forcedPlatform="mobile" />} />
            <Route path="/platforms/mt4" element={<PlatformsPage forcedPlatform="mt4" />} />
            <Route path="/platforms/mt5" element={<PlatformsPage forcedPlatform="mt5" />} />
            <Route path="/platforms/tradingview" element={<PlatformsPage forcedPlatform="tradingview" />} />
            <Route path="/platforms/compare" element={<PlatformsPage forcedPlatform="compare" />} />

            {/* 5. Tools Routes */}
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/calculators" element={<ToolsPage forcedTool="calculators" />} />
            <Route path="/tools/economic-calendar" element={<ToolsPage forcedTool="economic-calendar" />} />
            <Route path="/tools/market-analysis" element={<ToolsPage forcedTool="market-analysis" />} />
            <Route path="/tools/signals" element={<ToolsPage forcedTool="signals" />} />
            <Route path="/tools/quant" element={<ToolsPage forcedTool="quant" />} />
            <Route path="/tools/algo" element={<ToolsPage forcedTool="algo" />} />

            {/* 6. Resources Routes */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/academy" element={<ResourcesPage forcedResource="academy" />} />
            <Route path="/resources/news" element={<ResourcesPage forcedResource="news" />} />
            <Route path="/resources/analysis" element={<ResourcesPage forcedResource="analysis" />} />
            <Route path="/resources/guides" element={<ResourcesPage forcedResource="guides" />} />
            <Route path="/resources/webinars" element={<ResourcesPage forcedResource="webinars" />} />
            <Route path="/resources/glossary" element={<ResourcesPage forcedResource="glossary" />} />

            {/* 7. Company Routes */}
            <Route path="/company" element={<CompanyPage forcedSubroute="about" />} />
            <Route path="/company/about" element={<CompanyPage forcedSubroute="about" />} />
            <Route path="/company/why-us" element={<CompanyPage forcedSubroute="why-us" />} />
            <Route path="/company/security" element={<CompanyPage forcedSubroute="security" />} />
            <Route path="/company/partners" element={<CompanyPage forcedSubroute="partners" />} />
            <Route path="/company/careers" element={<CompanyPage forcedSubroute="careers" />} />
            <Route path="/contact" element={<CompanyPage forcedSubroute="contact" />} />

            {/* 8. Help Routes */}
            <Route path="/help" element={<HelpPage forcedSubroute="faq" />} />
            <Route path="/help/faq" element={<HelpPage forcedSubroute="faq" />} />
            <Route path="/help/support" element={<HelpPage forcedSubroute="support" />} />

            {/* 9. Legal & Disclosure Routes */}
            <Route path="/risk-disclosure" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="/cookies" element={<LegalPage />} />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Mandatory Risk Warning */}
        <RiskWarning />

        {/* Global 4-Column Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
