import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Calculator, 
  ShieldCheck, 
  Globe, 
  GraduationCap, 
  Check, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: 'business-registrations',
      icon: Building2,
      title: 'Business Registrations',
      category: 'Setup & Licensing',
      shortDesc: 'Complete practical support to get your business legally registered and ready for operations.',
      fullDesc: 'We assist new and expanding enterprises with all mandatory licenses and registrations required by government bodies, ensuring seamless commencement of business.',
      benefits: ['100% Documentation Accuracy', 'Fast License Turnaround', 'Hassle-Free Government Approval'],
      features: [
        'Shop & Establishment Registration',
        'MSME / Udyam Registration',
        'FSSAI Registration & Food License',
        'Trade Licenses & Business Permits'
      ]
    },
    {
      id: 'business-compliances',
      icon: ShieldCheck,
      title: 'Business Compliances',
      category: 'Statutory Filings',
      shortDesc: 'End-to-end statutory registrations, monthly/quarterly filings, and tax return management.',
      fullDesc: 'Stay fully compliant with Income Tax, GST, MCA, and ROC requirements without legal stress or late penalties.',
      benefits: ['Zero Penalty Filing Assurance', 'Timely Statutory Reminders', 'Dedicated Tax Compliance Manager'],
      features: [
        'Company & LLP Incorporation',
        'GST Registration & Monthly Return Filing',
        'TDS Return Filing',
        'Income Tax Return (ITR) Filing for Individuals & Corporates'
      ]
    },
    {
      id: 'accounting-systems',
      icon: Calculator,
      title: 'Accounts & Accounting Systems',
      category: 'Financial Management',
      shortDesc: 'We build, improve, and operate robust accounting systems for your business—far beyond basic data entry.',
      fullDesc: 'Rather than basic bookkeeping, Accobiz LLP focuses on reviewing your existing accounting process, implementing modern accounting software, and delivering actionable financial reports.',
      benefits: ['Real-Time Financial Visibility', 'Streamlined Internal Controls', 'Outsourced Professional Accounting'],
      features: [
        'Accounting System Review & Audits',
        'Outsourced End-to-End Accounting',
        'Accounting System & Software Implementation',
        'Process Improvement & Financial Reporting'
      ]
    },
    {
      id: 'financial-documentation',
      icon: FileText,
      title: 'Business & Financial Documentation',
      category: 'Reports & Proposals',
      shortDesc: 'Bank-ready project reports, provisional statements, and projected financials for funding & growth.',
      fullDesc: 'High-quality financial modeling and business documentation designed for bank loans, investor pitches, vendor enrollments, and statutory submissions.',
      benefits: ['Bank Loan & Investor Approved', 'Accurate Financial Projections', 'Professional Documentation Format'],
      features: [
        'Detailed Business Project Reports',
        'Provisional Financial Statements',
        'Projected Financial Statements & Cash Flow',
        'Custom Business & Financial Proposals'
      ]
    },
    {
      id: 'digital-marketing-web',
      icon: Globe,
      title: 'Digital Marketing & Web Solutions',
      category: 'Growth & Technology',
      shortDesc: 'Elevate your online presence with high-converting landing pages, digital marketing, and AI agent integration.',
      fullDesc: 'Modern businesses need a powerful online footprint. Accobiz LLP builds custom high-converting web landing pages, implements AI automation agents, and drives targeted digital growth.',
      benefits: ['Custom High-Converting Web Design', 'AI Agent & Automation Integration', 'Targeted Lead Generation'],
      features: [
        'Social Media Management & Digital Marketing',
        'Custom Business Web Landing Pages',
        'AI Agent & Chatbot Automation Integration',
        'Brand Identity & Online Presence Setup'
      ]
    },
    {
      id: 'practical-education',
      icon: GraduationCap,
      title: 'Education & Practical Training Vertical',
      category: 'Practical Training',
      shortDesc: 'Industry-oriented accounting & financial system training for students, job seekers & working professionals.',
      fullDesc: 'Our dedicated training division teaches how to build & operate practical accounting systems, understand financial reports, and master accounting software as a decision-making tool.',
      benefits: ['100% Practical & Job-Oriented', 'Real-World Case Studies', 'Software & Reporting Mastery'],
      features: [
        'Practical Accounting System Training',
        'Financial Reporting & Analysis Mastery',
        'Accounting Software Operational Training',
        'Industry-Oriented Career Programs'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Consultancy Verticals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Solutions for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Modern Enterprise Needs
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            From initial business registration and statutory compliance to setting up accounting systems, financial reports, digital marketing, and practical training—Accobiz LLP is your complete business partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-navy-900/70 border border-slate-800 p-8 backdrop-blur-md hover:border-gold-500/60 hover:bg-navy-900 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1.5"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold tracking-widest text-gold-400/80 uppercase px-2.5 py-1 rounded-full bg-navy-950 border border-gold-500/20">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="text-xs font-bold text-slate-300 group-hover:text-gold-400 flex items-center space-x-1.5 transition-colors"
                  >
                    <span>View Service Details</span>
                    <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-300 transition-all border border-gold-500/30"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-navy-900 border border-gold-500/50 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-navy-950 border border-gold-500/30 text-slate-400 hover:text-white hover:border-gold-400 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center font-bold shadow-lg">
                  {React.createElement(selectedModalService.icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-xs font-bold text-gold-400 tracking-wider uppercase">{selectedModalService.category}</span>
                  <h3 className="text-2xl font-black text-white">{selectedModalService.title}</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed border-b border-slate-800 pb-4">
                {selectedModalService.fullDesc}
              </p>

              <div>
                <h4 className="text-sm font-extrabold text-gold-300 mb-3 uppercase tracking-wider">Service Offerings & Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModalService.features.map((feature, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-navy-950/80 border border-slate-800 flex items-center space-x-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-gold-300 mb-3 uppercase tracking-wider">Key Benefits</h4>
                <div className="space-y-2">
                  {selectedModalService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
                      <span className="font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedModalService.title;
                    setSelectedModalService(null);
                    onSelectService(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl font-extrabold text-sm bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20 text-center flex items-center justify-center space-x-2"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/917510474429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl font-bold text-sm bg-emerald-600/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all text-center"
                >
                  Ask on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
