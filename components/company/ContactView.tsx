'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import {
  CONTACT_CATEGORIES,
  OFFICE_LOCATIONS,
  COMPANY_DATA
} from '@/lib/company-data';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Briefcase,
  Handshake,
  Newspaper,
  ArrowRight,
  ArrowUpRight,
  Globe
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('General');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#087F78]" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#087F78]" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5 text-[#087F78]" />;
      case 'HelpCircle':
      default: return <HelpCircle className="w-5 h-5 text-[#087F78]" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, Subject, Message).');
      return;
    }

    if (!email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/company/about" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            About {BRAND_NAME}
          </Link>
          <Link href="/company/why-us" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Why Choose Us
          </Link>
          <Link href="/company/security" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Security Architecture
          </Link>
          <Link href="/company/partners" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Partners
          </Link>
          <Link href="/company/careers" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Careers
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Contact
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-20 border-b border-[#E7E4DE] pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              CONTACT DESK
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Let&apos;s start a conversation.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Whether you are exploring the platform, looking for support or discussing a partnership, our team is here to help.
            </p>
          </div>
        </div>

        {/* 4 Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CONTACT_CATEGORIES.map(cat => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#DDEDEA] border border-[#087F78]/15 flex items-center justify-center mb-4">
                  {getCategoryIcon(cat.iconName)}
                </div>

                <h3 className="text-base font-normal text-[#111111] mb-1.5" style={{ fontFamily: 'var(--font-serif)' }}>
                  {cat.title}
                </h3>

                <p className="text-xs text-[#77736C] leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE] space-y-1">
                <a
                  href={`mailto:${cat.email}`}
                  className="font-mono text-xs font-semibold text-[#087F78] hover:underline block truncate"
                >
                  {cat.email}
                </a>
                <div className="text-[10px] text-[#77736C] font-mono">
                  Response: {cat.responseTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Two-Column Inbound Form & Office Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20 items-start">
          {/* Contact Inbound Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
            <div className="mb-6 pb-4 border-b border-[#E7E4DE]">
              <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block">
                DIRECT TRANSMISSION
              </span>
              <h2 className="text-2xl font-normal text-[#111111] mt-0.5" style={{ fontFamily: 'var(--font-serif)' }}>
                Send a Message to Our Desk
              </h2>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#087F78] mx-auto" />
                <h3 className="text-xl font-semibold text-[#111111]">Your message has been received.</h3>
                <p className="text-xs sm:text-sm text-[#77736C] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A dedicated specialist from our team will review your inquiry and respond to your email address shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-lg bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {status === 'error' && (
                  <div className="p-3.5 rounded-lg bg-[#E5484D]/10 border border-[#E5484D]/30 flex items-center gap-2 text-xs text-[#E5484D]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. alex@domain.com"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+44 20 7946 0185"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Inquiry Category *</label>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    >
                      <option value="General">General Inquiries</option>
                      <option value="Sales">Sales &amp; Institutional Accounts</option>
                      <option value="Partnerships">Partnerships &amp; IB Programs</option>
                      <option value="Media">Media &amp; Press Relations</option>
                      <option value="Careers">Careers &amp; Talent Desk</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#111111] mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="e.g. Institutional Account Specifications"
                    className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#111111] mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Provide details about your query or requirement..."
                    className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'submitting' ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Office Locations & World Map Visualization (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Global Operational Map Visualization */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E4DE]">
                <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold">
                  GLOBAL COVERAGE
                </span>
                <span className="text-xs font-mono text-[#77736C]">3 Operational Desks</span>
              </div>

              {/* Decorative World Grid Schematic */}
              <div className="h-44 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] p-4 relative flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                  <div className="w-full h-full border border-dashed border-[#087F78] rounded-lg m-2" />
                  <div className="absolute w-36 h-36 rounded-full border border-[#087F78]" />
                </div>

                {/* City Coordinates Markers */}
                <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-white rounded-lg border border-[#E7E4DE] shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#087F78] mx-auto mb-1 animate-pulse" />
                    <div className="font-semibold text-[#111111]">London</div>
                    <div className="text-[10px] text-[#77736C] font-mono">UTC+0</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#E7E4DE] shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#087F78] mx-auto mb-1 animate-pulse" />
                    <div className="font-semibold text-[#111111]">Dubai</div>
                    <div className="text-[10px] text-[#77736C] font-mono">UTC+4</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#E7E4DE] shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#087F78] mx-auto mb-1 animate-pulse" />
                    <div className="font-semibold text-[#111111]">Singapore</div>
                    <div className="text-[10px] text-[#77736C] font-mono">UTC+8</div>
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] font-mono text-[#77736C]">
                  <span>Operational Hours:</span>
                  <span className="text-[#111111] font-semibold">{COMPANY_DATA.supportHours}</span>
                </div>
              </div>

              {/* Location Cards */}
              <div className="mt-6 space-y-3 text-xs">
                {OFFICE_LOCATIONS.map(loc => (
                  <div key={loc.id} className="p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#111111]">{loc.city}, {loc.country}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#DDEDEA] text-[#087F78]">
                          {loc.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#77736C] mt-0.5">{loc.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CRM Gateway Callout */}
            <div className="p-6 rounded-2xl bg-[#F3F2EE] border border-[#E7E4DE] text-xs text-[#77736C] space-y-3">
              <div className="font-semibold text-[#111111] text-sm">Existing Client Inquiries</div>
              <p>
                To deposit or withdraw funds, submit compliance identity documents, or view live trade account statements:
              </p>
              <div>
                <Button href={BROKER_CONFIG.crmLoginUrl} isExternal variant="outline" size="sm" className="bg-white">
                  Access Client Portal Sign In &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section ("Need help getting started?") */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#181818] text-white text-center">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-2 block">
            NEXT STEPS
          </span>
          <h3
            className="text-2xl sm:text-4xl font-normal text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Need help getting started?
          </h3>
          <p className="text-xs sm:text-sm text-[#E7E4DE]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Our onboarding team is available to guide you through account configuration, platform selection, and deposit methods.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={BROKER_CONFIG.crmRegisterUrl}
              isExternal
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto min-h-[44px]"
            >
              Open an Account
            </Button>
            <Button
              to="/markets"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Explore Markets
            </Button>
            <Button
              to="/help"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Visit Help Center
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
