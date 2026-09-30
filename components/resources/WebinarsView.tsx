'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { WEBINAR_SESSIONS } from '@/lib/resource-data';
import { WebinarItem } from '@/types/resource';
import { RelatedResources } from './RelatedResources';
import {
  Video,
  Calendar,
  Clock,
  User,
  Play,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  X,
  Search,
  Check,
  ShieldCheck,
  Award
} from 'lucide-react';

export const WebinarsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'On-Demand'>('Upcoming');
  const [selectedWebinar, setSelectedWebinar] = useState<WebinarItem | null>(null);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const upcomingWebinars = WEBINAR_SESSIONS.filter(w => w.status === 'Upcoming');
  const onDemandWebinars = WEBINAR_SESSIONS.filter(w => w.status === 'On-Demand');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setReservationSuccess(true);
      setTimeout(() => {
        setReservationSuccess(false);
        setSelectedWebinar(null);
        setEmailInput('');
      }, 2500);
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/resources" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Resources
          </Link>
          <Link href="/resources/academy" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Academy
          </Link>
          <Link href="/resources/news" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market News
          </Link>
          <Link href="/resources/analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/resources/guides" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Guides
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Webinars
          </span>
          <Link href="/resources/glossary" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Glossary
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              LIVE &amp; ON-DEMAND WEBINARS
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Explore educational sessions and market-focused presentations.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Join interactive live sessions hosted by senior market strategists or review our on-demand masterclass archive covering macro policy, technical systems, and risk controls.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mb-10 flex items-center gap-3">
          <button
            onClick={() => setActiveTab('Upcoming')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'Upcoming'
                ? 'bg-[#181818] text-white shadow-xs'
                : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming Live Masterclasses ({upcomingWebinars.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('On-Demand')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'On-Demand'
                ? 'bg-[#181818] text-white shadow-xs'
                : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>On-Demand Video Library ({onDemandWebinars.length})</span>
          </button>
        </div>

        {/* VIEW: UPCOMING LIVE SESSIONS */}
        {activeTab === 'Upcoming' && (
          <div className="space-y-6 mb-20">
            {upcomingWebinars.map(webinar => (
              <div
                key={webinar.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-mono text-[#77736C]">
                    <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                      Live Masterclass
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-[#111111]">
                      <Calendar className="w-3.5 h-3.5 text-[#087F78]" />
                      <span>{webinar.date} · {webinar.time}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{webinar.duration}</span>
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-normal text-[#111111] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {webinar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#77736C] leading-relaxed mb-6">
                    {webinar.description || webinar.agenda?.join(' · ') || 'Comprehensive masterclass on institutional market strategies.'}
                  </p>

                  {/* Speaker Info */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="w-9 h-9 rounded-full bg-[#DDEDEA] text-[#087F78] font-mono font-bold text-xs flex items-center justify-center">
                      {webinar.speaker.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111]">{webinar.speaker.name}</div>
                      <div className="text-[11px] text-[#77736C]">{webinar.speaker.role}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-64 w-full flex flex-col gap-3 shrink-0">
                  <div className="p-4 rounded-xl bg-[#DDEDEA]/40 border border-[#087F78]/20 text-center">
                    <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block mb-1">
                      Registration Status
                    </span>
                    <span className="text-xs text-[#111111] font-medium">Free Access · Interactive Q&amp;A</span>
                  </div>

                  <button
                    onClick={() => setSelectedWebinar(webinar)}
                    className="w-full py-3 rounded-xl bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer shadow-xs text-center"
                  >
                    Reserve Free Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: ON-DEMAND ARCHIVE */}
        {activeTab === 'On-Demand' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {onDemandWebinars.map(item => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Video Thumbnail Frame Simulation */}
                  <div className="h-36 mb-6 rounded-xl bg-[#181818] border border-[#E7E4DE] p-4 flex flex-col justify-between relative overflow-hidden text-white">
                    <div className="flex items-center justify-between text-[10px] font-mono z-10">
                      <span className="bg-white/20 px-2 py-0.5 rounded-xs font-bold uppercase">{item.category}</span>
                      <span>HD RECORDING</span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xs border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="flex items-end justify-between z-10 text-[10px] font-mono text-[#E7E4DE]/80">
                      <span>{item.duration}</span>
                      <span>Full Replay</span>
                    </div>
                  </div>

                  <h3
                    className="text-lg font-normal text-[#111111] mb-2 leading-snug group-hover:text-[#087F78] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                    {item.description || item.agenda?.join(' · ') || 'Interactive session replay covering structured market models.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                  <span className="text-[#77736C] font-mono text-[11px]">{item.speaker.name}</span>
                  <button
                    onClick={() => setSelectedWebinar(item)}
                    className="font-semibold text-[#087F78] group-hover:text-[#076C66] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Watch Replay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Registration or Video Replay */}
        {selectedWebinar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2.5 py-0.5 rounded-xs font-semibold">
                  {selectedWebinar.status === 'Upcoming' ? 'Seat Reservation' : 'On-Demand Masterclass'}
                </span>
                <button
                  onClick={() => setSelectedWebinar(null)}
                  className="p-1.5 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                {selectedWebinar.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-mono text-[#77736C] mb-6">
                <span>{selectedWebinar.date}</span>
                <span>·</span>
                <span>{selectedWebinar.time}</span>
                <span>·</span>
                <span>{selectedWebinar.duration}</span>
              </div>

              {reservationSuccess ? (
                <div className="p-6 rounded-xl bg-[#DDEDEA]/60 border border-[#087F78]/30 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#087F78] mx-auto mb-3" />
                  <h4 className="text-base font-bold text-[#111111] mb-1">Reservation Confirmed!</h4>
                  <p className="text-xs text-[#77736C]">
                    We have dispatched your calendar invite and stream credentials to <span className="font-mono text-[#111111]">{emailInput}</span>.
                  </p>
                </div>
              ) : selectedWebinar.status === 'Upcoming' ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    Reserve your live stream access and submit advance questions for {selectedWebinar.speaker.name}.
                  </p>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#77736C] mb-1.5">
                      Your Work or Personal Email
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="trader@domain.com"
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#087F78] text-white text-xs font-semibold hover:bg-[#076C66] transition-colors cursor-pointer shadow-xs"
                  >
                    Confirm My Free Reservation
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="p-8 rounded-xl bg-[#181818] text-white text-center">
                    <Play className="w-12 h-12 text-[#087F78] fill-[#087F78] mx-auto mb-3" />
                    <h4 className="text-sm font-semibold mb-1">Stream Ready</h4>
                    <p className="text-xs text-[#E7E4DE]/70">Full 1080p recording available for instant review.</p>
                  </div>
                  <Button
                    to="/resources/academy"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Explore Related Academy Modules
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Related Resources */}
        <RelatedResources currentCategory="Forex" />
      </Container>
    </div>
  );
};
