import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { KeyRound, MonitorCheck, UserCheck, Lock, Shield, ArrowRight } from 'lucide-react';

interface SecurityFeature {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  status: 'Available' | 'Planned' | 'Coming soon';
}

export const SecuritySection: React.FC = () => {
  const securityFeatures: SecurityFeature[] = [
    {
      id: 'account-security',
      title: 'Account Security',
      desc: 'Encrypted communication standards and credential hashing safeguard client account interactions across external portal endpoints.',
      icon: <Shield className="w-5 h-5 text-[#087F78]" />,
      status: 'Available'
    },
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      desc: 'Support for standard TOTP authenticator verification on sign-ins, sensitive profile modifications, and critical portal actions.',
      icon: <KeyRound className="w-5 h-5 text-[#087F78]" />,
      status: 'Available'
    },
    {
      id: 'session-monitoring',
      title: 'Session Monitoring',
      desc: 'Automated monitoring tracks active portal sessions, IP origin shifts, and unrecognized browser fingerprints to identify anomalous activity.',
      icon: <MonitorCheck className="w-5 h-5 text-[#087F78]" />,
      status: 'Available'
    },
    {
      id: 'access-controls',
      title: 'Access Controls',
      desc: 'Granular credential scopes allowing separation between read-only account observation and active order modification.',
      icon: <UserCheck className="w-5 h-5 text-[#087F78]" />,
      status: 'Available'
    },
    {
      id: 'withdrawal-controls',
      title: 'Withdrawal Controls',
      desc: 'Configurable destination address whitelisting, verification cooling periods, and manual audit checks for outgoing transfer requests.',
      icon: <Lock className="w-5 h-5 text-[#087F78]" />,
      status: 'Planned'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F3F2EE] border-b border-[#E7E4DE]" id="security">
      <Container size="default">
        <SectionHeading
          eyebrow="Account Safeguards"
          title="Security starts with the account."
          description="Operational protocols, session safeguards, and authentication mechanisms built into our platform architecture."
          linkText="Security Architecture"
          linkHref="/company/security"
        />

        {/* 5 Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {securityFeatures.map(item => {
            const isAvailable = item.status === 'Available';
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-white border border-[#E7E4DE] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-xs font-semibold ${
                        isAvailable
                          ? 'bg-[#DDEDEA] text-[#087F78]'
                          : 'bg-[#F3F2EE] text-[#C98A00] border border-[#C98A00]/20'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E7E4DE] flex items-center justify-between text-[11px] text-[#77736C]">
                  <span>Protection Standard</span>
                  <span className="font-mono font-medium text-[#111111]">{item.status === 'Available' ? 'Active Protocol' : 'Roadmap'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance & Transparency Note */}
        <div className="p-4 rounded-lg bg-white border border-[#E7E4DE] text-xs text-[#77736C] leading-relaxed text-center max-w-2xl mx-auto">
          Security architecture details are provided for technical transparency. All financial transactions and authentication are managed inside the external CRM portal.
        </div>
      </Container>
    </section>
  );
};
