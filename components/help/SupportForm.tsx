'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, UploadCloud, X } from 'lucide-react';

export const SupportForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [accountRef, setAccountRef] = useState('');
  const [category, setCategory] = useState('General');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('RFX-240184');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Full Name, Email, Subject, Message).');
      return;
    }

    if (!email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      // Generate realistic demo ticket ID
      const randomTicketNum = Math.floor(100000 + Math.random() * 900000);
      setTicketId(`RFX-${randomTicketNum}`);
      setStatus('success');
    }, 1000);
  };

  const handleReset = () => {
    setStatus('idle');
    setFullName('');
    setEmail('');
    setAccountRef('');
    setCategory('General');
    setSubject('');
    setMessage('');
    setAttachedFileName(null);
  };

  return (
    <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
      <div className="mb-6 pb-4 border-b border-[#E7E4DE]">
        <span className="text-[10px] font-mono uppercase text-[#087F78] font-bold block">
          INBOUND SUPPORT TICKET
        </span>
        <h3 className="text-2xl font-normal text-[#111111] mt-0.5" style={{ fontFamily: 'var(--font-serif)' }}>
          Submit a Support Request
        </h3>
        <p className="text-xs text-[#77736C] mt-1">
          Our specialized operations desk will review your inquiry and respond with technical resolution.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 sm:p-10 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#DDEDEA] text-[#087F78] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-[#087F78] font-bold">
              REQUEST DISPATCHED
            </span>
            <h4 className="text-2xl font-semibold text-[#111111]">
              Your support request has been received.
            </h4>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E7E4DE] max-w-sm mx-auto font-mono text-xs text-[#111111]">
            <div className="text-[10px] text-[#77736C] uppercase mb-1">Generated Ticket Reference:</div>
            <div className="text-base font-bold text-[#087F78]">{ticketId}</div>
          </div>

          <p className="text-xs sm:text-sm text-[#77736C] max-w-md mx-auto leading-relaxed">
            A confirmation dispatch has been sent to <span className="font-mono text-[#111111] font-semibold">{email}</span>. A support specialist from our {category} desk has been assigned to your ticket.
          </p>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {status === 'error' && (
            <div className="p-3.5 rounded-lg bg-[#E5484D]/10 border border-[#E5484D]/30 flex items-center gap-2 text-xs text-[#E5484D]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || 'Something went wrong. Please check your inputs.'}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#111111] mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Alex Morgan"
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
                placeholder="alex@example.com"
                className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#111111] mb-1">Account Reference (Optional)</label>
              <input
                type="text"
                value={accountRef}
                onChange={e => setAccountRef(e.target.value)}
                placeholder="e.g. MT5-948217 or Demo"
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
                <option value="General">General Inquiry</option>
                <option value="Trading">Trading &amp; Execution</option>
                <option value="Platform">Platform &amp; WebTrader</option>
                <option value="Technical">Technical Support</option>
                <option value="Security">Security &amp; 2FA</option>
                <option value="Fees">Fees &amp; Swap Schedules</option>
                <option value="Partnerships">Partnerships &amp; IB Programs</option>
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
              placeholder="e.g. WebTrader chart loading on Safari"
              className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#111111] mb-1">Message Description *</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Please describe your question or issue in detail including any error messages..."
              className="w-full bg-[#FBFBF9] border border-[#E7E4DE] rounded-lg px-3.5 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#087F78]"
            />
          </div>

          {/* Attachment Box (Frontend Mockup) */}
          <div>
            <label className="block font-semibold text-[#111111] mb-1">Screenshots or Logs (Optional)</label>
            <div
              onClick={() => setAttachedFileName('screenshot_error_webtrader.png')}
              className="border-2 border-dashed border-[#E7E4DE] rounded-xl p-3.5 text-center cursor-pointer hover:border-[#087F78] bg-[#FBFBF9] transition-colors"
            >
              <UploadCloud className="w-5 h-5 text-[#087F78] mx-auto mb-1" />
              {attachedFileName ? (
                <div className="text-xs font-mono text-[#087F78] font-semibold">
                  Attached: {attachedFileName} (Click to change)
                </div>
              ) : (
                <div className="text-xs text-[#77736C]">
                  <span className="font-semibold text-[#111111]">Click to attach file</span> (PNG, JPG, PDF up to 10MB)
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 rounded-xl bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{status === 'submitting' ? 'Submitting Ticket...' : 'Submit Support Request'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
