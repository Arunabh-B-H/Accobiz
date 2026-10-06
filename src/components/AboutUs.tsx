import React from 'react';
import { Target, Award, Compass, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface AboutUsProps {
  onOpenConsultation: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-t border-slate-800/60">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-800/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image Frame with Gold Border Accent */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl group">
                <img
                  src="/images/about_consulting.jpg"
                  alt="Accobiz LLP Business Consultancy Team"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 border border-gold-500/40 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 font-black text-xl shadow-md">
                      360°
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Practical Business Consultancy</div>
                      <div className="text-xs text-gold-300">Registration • Accounting • Digital Growth</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-gold-400 opacity-80" />
                </div>
              </div>

              {/* Decorative Accent Frame Box behind image */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl border border-gold-500/20 pointer-events-none hidden sm:block -z-10 bg-gold-500/5" />
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>About Accobiz LLP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Practical Support for Growing Enterprises & <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">Financial Systems</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong className="text-gold-400">Accobiz LLP</strong> is a modern business consultancy designed to give business owners hands-on, practical support. We don't view accounting as basic data entry—we focus on designing, setting up, and improving robust accounting systems for sustainable business growth.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you need statutory registrations (FSSAI, Udyam, Shop Act), ongoing tax compliances (GST, TDS, ITR), financial project documentation, or modern digital marketing & web solutions, Accobiz LLP provides complete operational clarity under one roof.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-navy-900/60 border border-slate-800 hover:border-gold-500/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-2.5">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Systemic Accounting Setup</h3>
                <p className="text-xs text-slate-400 mt-1">Reviewing, implementing, and optimizing your internal accounting process.</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/60 border border-slate-800 hover:border-gold-500/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-2.5">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Full Compliances & Web Growth</h3>
                <p className="text-xs text-slate-400 mt-1">End-to-end statutory filings, project documentation, and digital marketing landing pages.</p>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Shop & Establishment, Udyam/MSME, FSSAI & Incorporation</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Project Reports, Provisional & Projected Financial Statements</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Digital Marketing, High-Converting Web Landing Pages & AI Agents</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Separate Practical Accounting Education & Systems Training Vertical</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all flex items-center space-x-2"
              >
                <span>Connect with Accobiz Advisors</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
