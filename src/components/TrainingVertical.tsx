import React from 'react';
import { GraduationCap, BookOpen, Layers, CheckCircle2, ArrowRight, Award } from 'lucide-react';

interface TrainingVerticalProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const TrainingVertical: React.FC<TrainingVerticalProps> = ({ onOpenConsultation }) => {
  const trainingPillars = [
    {
      icon: Layers,
      title: 'Practical Accounting System Setup',
      desc: 'Learn how to structure chart of accounts, design document workflows, and set up internal accounting controls for real businesses.'
    },
    {
      icon: BookOpen,
      title: 'Practical Reporting & Analysis',
      desc: 'Understand how to read P&L statements, balance sheets, cash flow statements, and use accounting data for business decision-making.'
    },
    {
      icon: GraduationCap,
      title: 'Software as a Financial Tool',
      desc: 'Master Tally, Zoho Books, and financial software as active decision tools rather than plain data-entry portals.'
    },
    {
      icon: Award,
      title: 'Industry-Oriented Career Training',
      desc: 'Designed for students, fresh graduates, accountants, and working professionals seeking practical hands-on mastery.'
    }
  ];

  return (
    <section id="training" className="py-20 lg:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-t border-gold-500/30">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Pill */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span>Education & Practical Training Vertical</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Accobiz Academy: Practical <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                Accounting Systems Training
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Beyond textbook theory or data entry—we teach students and professionals how to build, manage, and operate complete accounting systems.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Practical Accounting Education & Training')}
            className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Inquire for Training Batches</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainingPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-gold-500/40 hover:bg-navy-900 transition-all group shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/90 border border-gold-500/30 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3 text-left">
            <span className="text-xs font-extrabold uppercase text-gold-400 tracking-wider">Why Accobiz Training Stands Out</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">System-Oriented vs Traditional Bookkeeping Courses</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Most accounting institutes focus solely on manual voucher entry or basic software menus. Accobiz Academy trains candidates on actual business financial workflows, GST compliance integration, and decision-level financial reporting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Real Company Data & Document Templates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>GST, TDS & Statutory Filing Workflows</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Financial Analysis & MIS Presentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Completion Certificate & Job Guidance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <button
              onClick={() => onOpenConsultation('Practical Accounting Education & Training')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-300 border border-gold-500/40 transition-all shadow-lg"
            >
              Get Training Syllabus
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
