import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { BROKER_CONFIG } from '../lib/config';
import { Button } from '../components/common/Button';
import { HelpCircle, ChevronDown, Mail, Phone, Clock, Search, MessageSquare } from 'lucide-react';

interface HelpPageProps {
  forcedSubroute?: 'faq' | 'support';
}

export const HelpPage: React.FC<HelpPageProps> = ({ forcedSubroute }) => {
  const params = useParams<{ subroute?: string }>();
  const activeTab = forcedSubroute || params.subroute || 'faq';

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How do I open an account with RegearFX?',
      a: 'Click "Open Account" in the top navigation or anywhere on this website. You will be redirected to our secure client registration portal where you complete your personal profile, specify your account currency, and submit your identity verification documents.'
    },
    {
      q: 'What is the difference between Standard and Raw Spread accounts?',
      a: 'The Standard Account features zero commissions with competitive markups incorporated into the spread (starting from 0.8 pips). The Raw Spread Account passes direct interbank ECN pricing with spreads starting from 0.0 pips, plus a flat institutional commission of $3.00 per standard lot traded.'
    },
    {
      q: 'Where do I deposit funds and request withdrawals?',
      a: 'All deposits, withdrawals, and account balance transfers are handled securely inside the separate client portal. RegearFX does not process card or wallet payments directly on this public marketing website.'
    },
    {
      q: 'Can I connect my existing MetaTrader 5 or TradingView account?',
      a: 'Yes. Once your account is provisioned in the CRM, you can download MT5 or launch the TradingView broker connection panel and search for "RegearFX" to log in with your trading account credentials.'
    },
    {
      q: 'What is your negative balance protection policy?',
      a: 'We enforce an automated negative balance protection policy. If an unprecedented market gap drops your account equity below zero, the negative balance is automatically reset to $0.00 without any debt obligation on your part.'
    },
    {
      q: 'What are your operational trading hours?',
      a: 'Forex, Indices, and Metals markets operate 24 hours a day, 5 days a week, opening Sunday at 22:00 GMT and closing Friday at 22:00 GMT. Crypto perpetual derivatives trade 24/7/365 with zero weekend downtime.'
    }
  ];

  const filteredFaqs = faqs.filter(
    f =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            Support Desk &amp; Knowledge Base
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Help &amp; Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed">
            Find immediate answers to common account onboarding, platform setup, and trading condition questions.
          </p>
        </div>

        {/* Tab Links */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/help/faq"
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'faq'
                ? 'bg-[#181818] text-white'
                : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
            }`}
          >
            FAQ &amp; Knowledge Base
          </Link>
          <Link
            to="/help/support"
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'support'
                ? 'bg-[#181818] text-white'
                : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
            }`}
          >
            Contact Support Desk
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg mb-8">
          <Search className="w-4 h-4 text-[#77736C] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search FAQ questions..."
            className="w-full bg-white border border-[#E7E4DE] rounded-md pl-9 pr-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-3xl mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E7E4DE] rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-[#111111] hover:text-[#087F78] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#77736C] transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? 'rotate-180 text-[#087F78]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#77736C] leading-relaxed border-t border-[#E7E4DE]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Direct Assistance Box */}
        <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-4xl">
          <div>
            <h4 className="text-lg font-semibold text-[#111111] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
              Still need assistance?
            </h4>
            <p className="text-xs text-[#77736C]">
              Our institutional desk is available 24/5 Monday through Friday.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button to="/contact" variant="primary" size="md">
              Send Support Ticket
            </Button>
            <Button
              href={BROKER_CONFIG.crmLoginUrl}
              isExternal
              variant="outline"
              size="md"
            >
              Sign In to CRM
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
