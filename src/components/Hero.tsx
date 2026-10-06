import React from 'react';
import { ShieldCheck, Award, ArrowRight, MessageCircle, Phone, Star, Building2, CheckCircle2, Globe, Cpu, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-navy-950 overflow-hidden">
      {/* Background Hero Image with Deep Navy Gradient & Mesh Grid */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_consulting.jpg"
          alt="Accobiz LLP Business Consultancy Office"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent" />
        
        {/* Subtle SVG Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Floating Animated Ambient Light Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-500/10 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-700/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-bold tracking-wide uppercase text-gold-300">
                Accobiz LLP • Business & Financial Consultancy
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Practical Business Support <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent drop-shadow-sm">
                From Registration to Revenue
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Accobiz LLP equips businesses with end-to-end practical advisory: <strong className="text-gold-300 font-semibold">Business Registrations, Statutory Compliances, Accounting System Implementation, Financial Documentation, Digital Marketing & Web Solutions</strong>, plus a dedicated <strong className="text-gold-300 font-semibold">Practical Accounting Training Vertical</strong>.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Registrations: Shop, Udyam, FSSAI</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>GST, ITR & Statutory Compliances</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Accounting Systems & Process Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Project Reports & Financial Statements</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Digital Marketing & AI Landing Pages</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Practical Accounting System Education</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-extrabold text-base bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/45 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <a
                href="https://wa.me/917510474429?text=Hello%20Accobiz%20LLP,%20I%20would%20like%20to%20consult%20regarding%20business%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2.5 px-6 py-4 rounded-xl font-bold text-base bg-emerald-600/20 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/10"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center space-x-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-slate-200">5.0 Rating</span>
                <span>(Verified Google Reviews)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="font-semibold text-slate-200">Agile Business Support</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-gold-400" />
                <span className="font-semibold text-slate-200">360° Enterprise Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Visual Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold-500 via-navy-600 to-gold-400 opacity-40 blur-lg animate-pulse-glow" />

              {/* Main Floating Glass Card */}
              <div className="relative rounded-2xl bg-navy-900/90 border border-gold-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                
                {/* Header inside Card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">Practical Consultancy</span>
                    <h3 className="text-xl font-bold text-white">How Accobiz Empowers You</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Feature Blocks */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-slate-800 hover:border-gold-500/40 transition-all flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Registrations & Statutory Compliances</h4>
                      <p className="text-xs text-slate-400 mt-0.5">FSSAI, Udyam, Shop Act, GST, TDS & ITR handled seamlessly.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-slate-800 hover:border-gold-500/40 transition-all flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Accounting Systems & Documentation</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Not just bookkeeping—we design & implement complete accounting workflows & project reports.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-slate-800 hover:border-gold-500/40 transition-all flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Digital Marketing & AI Web Presence</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Modern landing pages, AI agents & growth marketing built for your brand.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Call Quick Action */}
                <div className="pt-2">
                  <a
                    href="tel:+917510474429"
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-gold-500/30 text-gold-300 font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>Speak to an Accobiz Advisor</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Highlight Bar Below Hero */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-navy-900/60 border border-gold-500/20 backdrop-blur-md hover:border-gold-500/50 transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-black text-gold-400 font-sans tracking-tight group-hover:scale-105 transition-transform">
              100%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Practical System Focus</div>
            <p className="text-[11px] text-slate-400 mt-0.5">End-to-End Execution</p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900/60 border border-gold-500/20 backdrop-blur-md hover:border-gold-500/50 transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-black text-gold-400 font-sans tracking-tight group-hover:scale-105 transition-transform">
              6-in-1
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Consultancy Verticals</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Registrations to Digital Growth</p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900/60 border border-gold-500/20 backdrop-blur-md hover:border-gold-500/50 transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-black text-gold-400 font-sans tracking-tight group-hover:scale-105 transition-transform">
              Fast-Track
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Compliances & Setup</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Hassle-Free Filing</p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900/60 border border-gold-500/20 backdrop-blur-md hover:border-gold-500/50 transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-black text-gold-400 font-sans tracking-tight group-hover:scale-105 transition-transform">
              5.0 ★
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Google Client Rating</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Verified Partner Trust</p>
          </div>
        </div>

      </div>
    </section>
  );
};
