import React, { useState } from 'react';
import { Calculator as CalcIcon, ShieldCheck, Sparkles } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
  const [revenue, setRevenue] = useState<number>(100); // in Lakhs (1Cr)
  const [entityType, setEntityType] = useState<string>('LLP');
  const [industry, setIndustry] = useState<string>('Technology & IT');

  // Calculation formulas for corporate tax optimization estimate
  const estimatedTaxWithoutAccobiz = Math.round(revenue * 0.28 * 100000);
  const estimatedTaxWithAccobiz = Math.round(revenue * 0.19 * 100000);
  const totalSavings = estimatedTaxWithoutAccobiz - estimatedTaxWithAccobiz;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-navy-950 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your Enterprise <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Corporate Tax Optimization
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            See how much your enterprise can save through Accobiz LLP’s strategic deductions, R&D tax credits, and statutory structuring.
          </p>
        </div>

        {/* Interactive Tool Widget */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-navy-900/80 border border-gold-500/40 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Entity Selector */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gold-400 mb-2">
                  Select Business Structure
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['LLP', 'Pvt Ltd', 'Proprietorship'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEntityType(type)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all ${
                        entityType === type
                          ? 'bg-gold-500 text-navy-950 shadow-md scale-105'
                          : 'bg-navy-950 border border-slate-800 text-slate-300 hover:border-gold-500/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-gold-400">
                    Annual Turnover / Revenue
                  </label>
                  <span className="text-lg font-black text-white font-sans">
                    {revenue >= 100 ? `₹${(revenue / 100).toFixed(1)} Crore` : `₹${revenue} Lakhs`}
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="1000"
                  step="25"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-navy-950 rounded-lg appearance-none cursor-pointer accent-gold-500 border border-slate-800"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                  <span>₹25 Lakhs</span>
                  <span>₹5 Crores</span>
                  <span>₹10 Crores</span>
                </div>
              </div>

              {/* Industry Type */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gold-400 mb-2">
                  Industry Sector
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-gold-500"
                >
                  <option value="Technology & IT">Technology & IT Services</option>
                  <option value="Manufacturing & Retail">Manufacturing & Retail Export</option>
                  <option value="Real Estate & Construction">Real Estate & Construction</option>
                  <option value="Healthcare & BioTech">Healthcare & Professional Services</option>
                  <option value="Logistics & E-Commerce">Logistics & E-Commerce</option>
                </select>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-slate-800 flex items-center space-x-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Calculated under Income Tax Act & Section 80IAC / 35AD Eligible Deductions.</span>
              </div>

            </div>

            {/* Results Output Box */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy-950 to-navy-900 border-2 border-gold-500/50 text-center space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 bg-gold-500/10 rounded-full filter blur-xl" />

                <span className="inline-block text-[10px] font-extrabold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30">
                  Estimated Tax Savings
                </span>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-gold-400 font-sans tracking-tight">
                    {formatCurrency(totalSavings)}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-semibold">Potential Annual Tax Reduction</div>
                </div>

                <div className="space-y-2 text-xs border-t border-slate-800 pt-4 text-left">
                  <div className="flex justify-between text-slate-400">
                    <span>Standard Tax Liability:</span>
                    <span className="text-slate-200 font-bold">{formatCurrency(estimatedTaxWithoutAccobiz)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>With Accobiz Optimization:</span>
                    <span className="text-emerald-400 font-bold">{formatCurrency(estimatedTaxWithAccobiz)}</span>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Custom Tax Optimization Plan</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
