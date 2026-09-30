import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { BROKER_CONFIG } from '../lib/config';
import { Button } from '../components/common/Button';
import { Building, ShieldCheck, Users, Briefcase, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';

interface CompanyPageProps {
  forcedSubroute?: 'about' | 'why-us' | 'security' | 'partners' | 'careers' | 'contact';
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ forcedSubroute }) => {
  const params = useParams<{ subroute?: string }>();
  const activeTab = forcedSubroute || params.subroute || 'about';

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.includes('@') || !contactName) return;
    setFormSubmitted(true);
  };

  const tabs = [
    { id: 'about', label: 'About Us', path: '/company/about' },
    { id: 'why-us', label: 'Why Choose Us', path: '/company/why-us' },
    { id: 'security', label: 'Security Architecture', path: '/company/security' },
    { id: 'partners', label: 'Partners & IBs', path: '/company/partners' },
    { id: 'careers', label: 'Careers', path: '/company/careers' },
    { id: 'contact', label: 'Contact Us', path: '/contact' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="default">
        {/* Header */}
        <div className="mb-10 sm:mb-12 border-b border-[#E7E4DE] pb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-2">
            Company &amp; Operations
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            {activeTab === 'contact' ? 'Contact Institutional Desk' : 'About RegearFX'}
          </h1>
          <p className="text-sm sm:text-base text-[#77736C] max-w-2xl leading-relaxed">
            Founded on principles of transparent execution, technological low-latency infrastructure, and client fund safety.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-10 border-b border-[#E7E4DE]">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#087F78] text-[#087F78] font-semibold'
                    : 'border-transparent text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* VIEW: ABOUT */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4 text-sm text-[#77736C] leading-relaxed">
                <h3 className="text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Bridging discretionary traders and institutional liquidity.
                </h3>
                <p>
                  RegearFX was built by veterans of quantitative finance, algorithmic execution engineering, and Tier-1 prime brokerage operations. Our mission is to dismantle the latency barriers and opaque markups traditionally imposed on active market participants.
                </p>
                <p>
                  By aggregating deep liquidity streams from Tier-1 banks and top-tier market makers within Equinix LD4 (London) and NY4 (New York) cross-connect hubs, we ensure that every order is routed with optimal pricing and ultra-low slippage.
                </p>
                <p>
                  We operate as a pure agency model with zero dealing desk conflicts, ensuring that our interests remain strictly aligned with the long-term success of our clients.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#F3F2EE] border border-[#E7E4DE] rounded-xl p-6 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  Operating Principles
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white rounded-md border border-[#E7E4DE]">
                    <div className="font-semibold text-[#111111]">100% STP / DMA Order Flow</div>
                    <div className="text-[#77736C] text-[11px] mt-0.5">Zero dealing desk interference or synthetic requotes.</div>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-[#E7E4DE]">
                    <div className="font-semibold text-[#111111]">Segregated Client Balances</div>
                    <div className="text-[#77736C] text-[11px] mt-0.5">Strict fiduciary segregation with leading banking institutions.</div>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-[#E7E4DE]">
                    <div className="font-semibold text-[#111111]">Negative Balance Protection</div>
                    <div className="text-[#77736C] text-[11px] mt-0.5">Guaranteed protection against rapid tail-risk events.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: WHY US */}
        {activeTab === 'why-us' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Sub-30ms Fill Time', desc: 'Direct fiber cross-connects inside Equinix LD4 and NY4 data centers reduce order transit latency to institutional minimums.' },
              { title: 'Raw Spreads from 0.0 Pips', desc: 'Our aggregate liquidity depth draws from multiple Tier-1 bank and non-bank pricing venues to yield razor-sharp quotes.' },
              { title: 'No Requotes or Asymmetric Slippage', desc: 'Orders execute automatically without manual dealer intervention. Price improvements on gaps are credited directly to your account.' },
              { title: 'Multi-Asset Flexibility', desc: 'Trade over 500+ instruments including major FX, crypto derivatives, global indices, spot metals, and energy contracts.' },
              { title: 'Multi-Device Suite', desc: 'Seamlessly switch between our zero-install WebTrader, native mobile apps, and MetaTrader 5 without disjointed workflows.' },
              { title: '24/5 Institutional Desk', desc: 'Direct access to experienced market professionals via phone, ticket, and encrypted chat channels throughout market hours.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white border border-[#E7E4DE] shadow-xs">
                <h4 className="text-base font-semibold text-[#111111] mb-2">{item.title}</h4>
                <p className="text-xs text-[#77736C] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: SECURITY */}
        {activeTab === 'security' && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
              Security Architecture &amp; Custody Protocols
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed">
              We employ military-grade encryption, time-based one-time password (TOTP) protocols, automated session invalidation, and strict withdrawal destination address whitelisting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                <div className="font-semibold text-[#111111] mb-1">Mandatory 2FA Enforcement</div>
                <div className="text-[#77736C]">All administrative actions, password resets, and fund transfers require authenticator verification.</div>
              </div>
              <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                <div className="font-semibold text-[#111111]">Withdrawal Address Whitelisting</div>
                <div className="text-[#77736C]">Newly registered bank accounts or crypto withdrawal addresses require a 24-hour mandatory verification freeze.</div>
              </div>
              <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                <div className="font-semibold text-[#111111]">IP &amp; Device Fingerprinting</div>
                <div className="text-[#77736C]">Unusual login locations trigger instant email verification challenge gates before dashboard session grant.</div>
              </div>
              <div className="p-4 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md">
                <div className="font-semibold text-[#111111]">TLS 1.3 &amp; AES-256 Storage</div>
                <div className="text-[#77736C]">All data transmitted over public networks is protected by modern cipher suites with zero legacy fallback.</div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: CONTACT US */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-white border border-[#E7E4DE] rounded-xl shadow-xs space-y-4 text-xs">
                <h4 className="text-base font-semibold text-[#111111]">Direct Contact Channels</h4>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#77736C]">Institutional Desk:</div>
                    <div className="font-semibold text-[#111111]">{BROKER_CONFIG.supportEmail}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#77736C]">Global Phone Line:</div>
                    <div className="font-semibold text-[#111111]">{BROKER_CONFIG.supportPhone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#77736C]">Desk Hours:</div>
                    <div className="font-semibold text-[#111111]">{BROKER_CONFIG.operatingHours}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#F3F2EE] border border-[#E7E4DE] rounded-xl text-xs text-[#77736C] space-y-2">
                <div className="font-semibold text-[#111111]">Existing Client Portal Access</div>
                <p>
                  To manage funds, submit deposit/withdrawal requests, or open sub-accounts, please log in directly to your client dashboard:
                </p>
                <div className="pt-2">
                  <Button href={BROKER_CONFIG.crmLoginUrl} isExternal variant="outline" size="sm">
                    Open CRM Login Portal &rarr;
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Inbound Form */}
            <div className="lg:col-span-7 bg-white border border-[#E7E4DE] rounded-xl p-6 sm:p-8 shadow-xs">
              {formSubmitted ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#0A9F6E] mx-auto" />
                  <h4 className="text-xl font-semibold text-[#111111]">Inquiry Received</h4>
                  <p className="text-xs text-[#77736C] max-w-md mx-auto">
                    Thank you, {contactName}. An institutional representative will respond to {contactEmail} within 2 hours during active market sessions.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} variant="outline" size="sm">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <h3 className="text-xl font-semibold text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Send an Institutional Inquiry
                  </h3>
                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      placeholder="e.g. Julian Reynolds"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#087F78]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Corporate or Personal Email</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      placeholder="e.g. j.reynolds@firm.com"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#087F78]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Message / Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      placeholder="Inquire about FIX 4.4 connections, bespoke liquidity, or general desk inquiries..."
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#087F78]"
                    />
                  </div>
                  <Button type="submit" variant="primary" size="md">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* VIEW: PARTNERS & CAREERS */}
        {activeTab === 'partners' && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-8 shadow-xs">
            <h3 className="text-xl font-semibold text-[#111111] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
              Introducing Broker (IB) &amp; White Label Solutions
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
              Partner with an institutional brokerage offering competitive volume rebates, multi-tier commission structures, customized portal branding, and real-time affiliate tracking.
            </p>
            <Button href={BROKER_CONFIG.crmRegisterUrl} isExternal variant="primary" size="md">
              Apply for IB Program
            </Button>
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="bg-white border border-[#E7E4DE] rounded-xl p-8 shadow-xs">
            <h3 className="text-xl font-semibold text-[#111111] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
              Engineering &amp; Operations Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
              We are actively expanding our quantitative analytics, ultra-low latency infrastructure, and institutional client service desks.
            </p>
            <div className="space-y-3 text-xs mb-6">
              <div className="p-3 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md flex justify-between items-center">
                <span className="font-semibold text-[#111111]">Low-Latency C++ Execution Engineer</span>
                <span className="text-[#087F78] font-mono">London, UK / Hybrid</span>
              </div>
              <div className="p-3 bg-[#FBFBF9] border border-[#E7E4DE] rounded-md flex justify-between items-center">
                <span className="font-semibold text-[#111111]">Senior Quantitative Risk Analyst</span>
                <span className="text-[#087F78] font-mono">New York / Remote</span>
              </div>
            </div>
            <Button to="/contact" variant="outline" size="sm">
              Inquire with Recruiting Desk
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};
