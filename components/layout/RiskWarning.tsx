import React from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const RiskWarning: React.FC = () => {
  return (
    <section className="bg-[#F3F2EE] border-t border-b border-[#E7E4DE] py-8 sm:py-10" id="risk-warning">
      <Container size="default">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-2 rounded-sm bg-white border border-[#E7E4DE] text-[#C98A00] shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1">
                Risk Warning
              </h4>
              <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
                Trading foreign exchange, digital assets, leveraged products and other financial instruments involves significant risk. Markets can move rapidly and losses may occur. The information on this website is provided for general informational purposes and should not be considered financial advice.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/risk-disclosure"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#111111] hover:text-[#087F78] border border-[#E7E4DE] bg-white rounded-md hover:bg-[#F3F2EE] transition-all w-full md:w-auto min-h-[44px]"
            >
              <span>Read Full Risk Disclosure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
