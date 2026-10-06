import React from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Mail, MapPin, Navigation, ArrowUp, Star } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/30 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <Logo variant="dark" size="lg" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Accobiz LLP is a trusted multi-disciplinary business consultancy firm offering corporate tax planning, LLP registration, statutory audits, virtual CFO, and regulatory advisories.
            </p>

            {/* Google Rating Badge */}
            <div className="flex items-center space-x-2 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.9 / 5.0 Rating</span>
              <span className="text-xs text-slate-400">(124+ Google Reviews)</span>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/917510474429"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/accobiz_llp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all"
                title="Instagram @accobiz_llp"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/company/accobiz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="tel:+917510474429"
                className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-all"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Accobiz LLP</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Consultancy Services</a></li>
              <li><a href="#training" className="hover:text-gold-400 transition-colors font-bold text-gold-300">Practical Training Vertical</a></li>
              <li><a href="#why-us" className="hover:text-gold-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#google-reviews" className="hover:text-gold-400 transition-colors">Google Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Consultancy Practices */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Business Registrations (Shop, Udyam, FSSAI)</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Business Compliances (GST, TDS, ITR)</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Accounts & Accounting Systems</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Business & Financial Documentation</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Digital Marketing & AI Landing Pages</a></li>
              <li><a href="#training" className="hover:text-gold-400 transition-colors">Practical Accounting Education</a></li>
            </ul>
          </div>

          {/* Direct Office & Map Directions */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Consultancy Office</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Suite 402, Financial Towers, MG Road, Business District</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+91 75104 74429</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>consult@accobiz.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Financial+District+Accobiz+LLP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">Accobiz LLP</strong>. All Rights Reserved. Designed for Enterprise Excellence.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Terms of Engagement</a>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-400 hover:text-gold-400 hover:border-gold-500/40 transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
