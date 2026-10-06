import React from 'react';
import { Award, Lock, Clock, UserCheck, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: UserCheck,
      title: 'Dedicated Senior Partner',
      description: 'You work directly with experienced Senior Chartered Accountants and Corporate Tax Attorneys—never junior delegates.'
    },
    {
      icon: Lock,
      title: 'Ironclad Data Confidentiality',
      description: 'Bank-grade encryption and strict non-disclosure compliance safeguards your enterprise legal and financial documents.'
    },
    {
      icon: Clock,
      title: 'Rapid Turnaround Guarantee',
      description: 'Streamlined digital workflows ensure company incorporations, GST filings, and audit completions in industry-record speed.'
    },
    {
      icon: ShieldCheck,
      title: '100% Tax & Legal Compliance',
      description: 'Zero penalty track record with proactive regulatory updates covering ROC, Income Tax, GST, and FEMA advisories.'
    },
    {
      icon: Zap,
      title: 'Transparent Flat Pricing',
      description: 'Clear upfront retainer and engagement contracts with zero unexpected add-ons or hidden processing surcharges.'
    },
    {
      icon: Award,
      title: 'Audited Track Record',
      description: 'Over 1,200 successful corporate engagements with an average 4.9/5 Google star rating from verified business owners.'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-navy-950 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Accobiz Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Leading Enterprises <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Trust Accobiz LLP
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            We combine boutique personalized attention with big-four corporate rigor to deliver unmatched value for your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComp = reason.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-navy-900/50 border border-slate-800 hover:border-gold-500/50 hover:bg-navy-900 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors mb-6">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
