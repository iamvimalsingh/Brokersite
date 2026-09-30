import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { AssetClasses } from '../components/home/AssetClasses';
import { FeaturedMarkets } from '../components/home/FeaturedMarkets';
import { MarketOverview } from '../components/home/MarketOverview';
import { TradingExperience } from '../components/home/TradingExperience';
import { TradingConditions } from '../components/home/TradingConditions';
import { PlatformsSection } from '../components/home/PlatformsSection';
import { ResearchSection } from '../components/home/ResearchSection';
import { QuantSection } from '../components/home/QuantSection';
import { AlgoSection } from '../components/home/AlgoSection';
import { SecuritySection } from '../components/home/SecuritySection';
import { EducationSection } from '../components/home/EducationSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 3. Hero */}
      <Hero />

      {/* 4. Trust / Capability Strip */}
      <TrustStrip />

      {/* 5. Asset Classes */}
      <AssetClasses />

      {/* 6. Featured Markets */}
      <FeaturedMarkets />

      {/* 7. Market Overview */}
      <MarketOverview />

      {/* 8. Trading Experience */}
      <TradingExperience />

      {/* 9. Trading Conditions */}
      <TradingConditions />

      {/* 10. Platforms */}
      <PlatformsSection />

      {/* 11. Tools & Research */}
      <ResearchSection />

      {/* 12. Quantitative Tools */}
      <QuantSection />

      {/* 13. Algorithmic Trading */}
      <AlgoSection />

      {/* 14. Security */}
      <SecuritySection />

      {/* 15. Education */}
      <EducationSection />

      {/* 16. Final CTA */}
      <FinalCTA />
    </div>
  );
};
