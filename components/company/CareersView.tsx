'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import {
  JOB_LISTINGS,
  CAREER_DEPARTMENTS,
  COMPANY_DATA
} from '@/lib/company-data';
import { JobListing } from '@/lib/company-data';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Search,
  X,
  UploadCloud,
  Check,
  Award
} from 'lucide-react';

export const CareersView: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeJob, setActiveJob] = useState<JobListing | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantLocation, setApplicantLocation] = useState('');
  const [applicantCover, setApplicantCover] = useState('');
  const [resumeFileName, setResumeFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = JOB_LISTINGS.filter(job => {
    const matchesDept = selectedDept === 'All Departments' || job.department === selectedDept;
    const matchesSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsApplying(false);
        setActiveJob(null);
        setApplicantName('');
        setApplicantEmail('');
        setApplicantPhone('');
        setApplicantLocation('');
        setApplicantCover('');
        setResumeFileName(null);
      }, 3000);
    }
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
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Careers
          </span>
          <Link href="/contact" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Contact
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 sm:mb-20 border-b border-[#E7E4DE] pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              JOIN OUR TEAM
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Build the future of modern market technology.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              We are building a multidisciplinary team across technology, markets, research, product and operations to redefine how global financial markets are accessed.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs">
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Open Positions</div>
                <div className="text-xl font-mono font-semibold text-[#111111]">8 Openings</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Global Hubs</div>
                <div className="text-xl font-mono font-semibold text-[#087F78]">3 Desks</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Working Model</div>
                <div className="text-xl font-mono font-semibold text-[#111111]">Hybrid / Remote</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Culture</div>
                <div className="text-xl font-mono font-semibold text-[#0A9F6E]">Meritocratic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 space-y-4 pb-6 border-b border-[#E7E4DE]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Department Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {CAREER_DEPARTMENTS.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[#181818] text-white font-semibold'
                      : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search roles, locations, skills..."
                className="w-full bg-white border border-[#E7E4DE] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#111111] placeholder:text-[#77736C] focus:outline-none focus:border-[#087F78] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77736C] hover:text-[#111111]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 8 Job Listings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono text-[#77736C]">
                  <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {job.department}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#087F78]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <h3
                  onClick={() => {
                    setActiveJob(job);
                    setIsApplying(false);
                  }}
                  className="text-xl font-normal text-[#111111] mb-2 leading-snug cursor-pointer group-hover:text-[#087F78] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {job.title}
                </h3>

                <p className="text-xs text-[#77736C] leading-relaxed mb-6">
                  {job.shortDesc}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-[#77736C] mb-4">
                  <span>Type: {job.employmentType}</span>
                  <span>·</span>
                  <span>Experience: {job.experience}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs">
                <span className="text-[#087F78] font-semibold">Immediate Hiring</span>
                <button
                  onClick={() => {
                    setActiveJob(job);
                    setIsApplying(false);
                  }}
                  className="font-semibold text-[#111111] group-hover:text-[#087F78] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Position</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Job Detail & Application Form */}
        {activeJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#77736C]">
                  <span className="px-2.5 py-0.5 rounded bg-[#DDEDEA] text-[#087F78] font-bold text-[10px] uppercase">
                    {activeJob.department}
                  </span>
                  <span>·</span>
                  <span>{activeJob.location}</span>
                  <span>·</span>
                  <span>{activeJob.employmentType}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveJob(null);
                    setIsApplying(false);
                  }}
                  className="p-1.5 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-normal text-[#111111] mb-2 leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {activeJob.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#77736C] mb-8 leading-relaxed">
                {activeJob.shortDesc}
              </p>

              {/* View: Job Details or Application Form */}
              {!isApplying ? (
                <div className="space-y-8">
                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-base font-bold text-[#111111] mb-3">Key Responsibilities</h3>
                    <div className="space-y-2">
                      {activeJob.responsibilities.map((r, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                          <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-base font-bold text-[#111111] mb-3">Requirements &amp; Experience</h3>
                    <div className="space-y-2">
                      {activeJob.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                          <CheckCircle2 className="w-4 h-4 text-[#087F78] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What you'll work on */}
                  <div className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE]">
                    <h3 className="text-xs font-mono uppercase font-bold text-[#087F78] mb-3">
                      Flagship Projects You Will Own:
                    </h3>
                    <div className="space-y-2">
                      {activeJob.whatYoullWorkOn.map((w, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#111111]">
                          <span className="text-[#087F78] font-bold">•</span>
                          <span>{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-base font-bold text-[#111111] mb-3">Compensation &amp; Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeJob.benefits.map((b, idx) => (
                        <div key={idx} className="p-3 bg-[#DDEDEA]/40 rounded-lg border border-[#087F78]/20 text-xs text-[#111111]">
                          <span className="font-semibold text-[#087F78]">✓ </span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#E7E4DE]">
                    <span className="text-xs font-mono text-[#77736C]">Ref: {activeJob.slug}</span>
                    <button
                      onClick={() => setIsApplying(true)}
                      className="px-6 py-2.5 rounded-lg bg-[#087F78] text-white text-xs font-semibold hover:bg-[#076C66] transition-colors cursor-pointer shadow-xs"
                    >
                      Apply for this Position
                    </button>
                  </div>
                </div>
              ) : submitted ? (
                <div className="p-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#087F78] mx-auto" />
                  <h4 className="text-xl font-semibold text-[#111111]">Application Received!</h4>
                  <p className="text-xs sm:text-sm text-[#77736C] max-w-md mx-auto leading-relaxed">
                    Thank you, {applicantName}. Your application for <span className="font-semibold text-[#111111]">{activeJob.title}</span> has been received. Our recruitment team will review your qualifications and reach out to <span className="font-mono text-[#111111]">{applicantEmail}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-[#111111]">Application Form</h3>
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="text-xs text-[#087F78] hover:underline cursor-pointer"
                    >
                      ← Back to Job Description
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#111111] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={e => setApplicantName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#111111] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={e => setApplicantEmail(e.target.value)}
                        placeholder="alex@domain.com"
                        className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#111111] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={applicantPhone}
                        onChange={e => setApplicantPhone(e.target.value)}
                        placeholder="+44 20 7946 0185"
                        className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#111111] mb-1">Current Location / City</label>
                      <input
                        type="text"
                        value={applicantLocation}
                        onChange={e => setApplicantLocation(e.target.value)}
                        placeholder="London, UK"
                        className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Box (Frontend Mockup) */}
                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Resume / CV (PDF or DOCX)</label>
                    <div
                      onClick={() => setResumeFileName('CV_Alex_Morgan_2026.pdf')}
                      className="border-2 border-dashed border-[#E7E4DE] rounded-xl p-4 text-center cursor-pointer hover:border-[#087F78] bg-[#FBFBF9] transition-colors"
                    >
                      <UploadCloud className="w-6 h-6 text-[#087F78] mx-auto mb-1.5" />
                      {resumeFileName ? (
                        <div className="text-xs font-mono text-[#087F78] font-semibold">
                          Selected: {resumeFileName} (Click to re-select)
                        </div>
                      ) : (
                        <div className="text-xs text-[#77736C]">
                          <span className="font-semibold text-[#111111]">Click to attach resume</span> (Demo PDF)
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111111] mb-1">Cover Letter &amp; Portfolio Links</label>
                    <textarea
                      rows={3}
                      value={applicantCover}
                      onChange={e => setApplicantCover(e.target.value)}
                      placeholder="Brief summary of relevant achievements, GitHub / Figma links..."
                      className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="text-xs text-[#77736C] hover:text-[#111111]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-[#087F78] text-white text-xs font-semibold hover:bg-[#076C66] transition-colors cursor-pointer shadow-xs"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Pre-Footer Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#181818] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono uppercase text-[#087F78] bg-white/10 px-2.5 py-1 rounded-sm font-semibold">
              SPECULATIVE APPLICATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white mt-3 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Don&apos;t see an exact match?
            </h3>
            <p className="text-xs sm:text-sm text-[#E7E4DE]/80 leading-relaxed">
              We are always excited to hear from talented engineers, quantitative researchers, and market analysts. Send your CV directly to our talent team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              Contact Talent Desk
            </Button>
            <Button
              to="/company/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              About {BRAND_NAME}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
