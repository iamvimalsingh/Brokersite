import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Database, Zap, GitCommit, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AlgoSection: React.FC = () => {
  const flowSteps = [
    {
      id: 'data',
      title: 'Market Data',
      desc: 'Normalized multi-asset tick feeds and historic price series.',
      icon: <Database className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'signal',
      title: 'Signal',
      desc: 'Algorithmic indicators and quantitative condition triggers.',
      icon: <Zap className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'rules',
      title: 'Rules',
      desc: 'Deterministic entry logic, sizing parameters, and session filters.',
      icon: <GitCommit className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'risk',
      title: 'Risk Check',
      desc: 'Pre-trade position limits, maximum drawdown and margin limits.',
      icon: <ShieldCheck className="w-5 h-5 text-[#087F78]" />
    },
    {
      id: 'execution',
      title: 'Execution',
      desc: 'Order routing to supported external platforms and terminals.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#087F78]" />
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#E7E4DE]" id="algorithmic-trading">
      <Container size="default">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
            Systematic Methodology
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Build a more systematic trading workflow.
          </h2>
          <p className="text-sm sm:text-base text-[#77736C] leading-relaxed">
            Explore algorithmic concepts, rule-based strategies and automation tools designed to help bring structure to your trading process.
          </p>
        </div>

        {/* Visual Strategy Flow Diagram */}
        <div className="bg-[#F3F2EE] border border-[#E7E4DE] rounded-2xl p-6 sm:p-10 mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#77736C] mb-6 text-center">
            Systematic Execution Lifecycle (Informational Architecture)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {flowSteps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center text-center relative group">
                <div className="w-full bg-white border border-[#E7E4DE] rounded-xl p-5 shadow-xs hover:border-[#087F78] transition-all flex flex-col items-center">
                  <div className="w-12 h-12 rounded-sm bg-[#DDEDEA]/50 border border-[#087F78]/15 flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  <div className="text-[10px] font-mono text-[#087F78] font-semibold mb-1">
                    Step 0{idx + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-[#111111] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#77736C] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < flowSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#111111] text-white items-center justify-center text-xs shadow-xs">
                    &rarr;
                  </div>
                )}
                {idx < flowSteps.length - 1 && (
                  <div className="md:hidden my-2 text-[#087F78] font-bold text-lg">
                    &darr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Informational Disclaimer Notice */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-xs text-[#77736C] leading-relaxed">
            *Algorithmic and automated trading involves financial risk and requires rigorous parameter testing. System performance depends on user-defined configurations and market volatility. Automated strategies do not guarantee profits or eliminate market loss.
          </p>
        </div>

        {/* Action CTA */}
        <div className="flex justify-center">
          <Button
            href="/tools/algo"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Explore Algorithmic Trading
          </Button>
        </div>
      </Container>
    </section>
  );
};
