import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, MapPin, Menu, X, Star, ChevronRight, Clock, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Consultancy Services', href: '#services' },
    { name: 'Accounting Training', href: '#training' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#google-reviews' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-navy-950/95 border-b border-gold-500/20 text-xs py-2 px-4 transition-all duration-300 hidden md:block ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <a href="tel:+917510474429" className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>+91 75104 74429</span>
            </a>
            <a href="https://wa.me/917510474429" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp Support</span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>Business Consultancy Hub</span>
            </div>
          </div>

          {/* Quick Rating Badge & Instagram */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/accobiz_llp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 font-semibold text-[11px] flex items-center space-x-1"
            >
              <span>@accobiz_llp</span>
            </a>

            <a href="#google-reviews" className="flex items-center space-x-1.5 bg-navy-900/80 px-3 py-1 rounded-full border border-gold-500/30 hover:border-gold-400 transition-all">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white text-[11px]">5.0 Star Rated</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-navy-950/90 backdrop-blur-md shadow-2xl py-3 border-b border-gold-500/30' : 'bg-navy-950/70 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300 ${
                  link.name === 'Accounting Training'
                    ? 'text-gold-300 font-bold flex items-center space-x-1 bg-gold-500/10 px-2.5 py-1 rounded-lg border border-gold-500/30'
                    : 'text-slate-200 hover:text-gold-400'
                }`}
              >
                {link.name === 'Accounting Training' && <GraduationCap className="w-3.5 h-3.5 text-gold-400 mr-1 inline" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Button & Quick Connect */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/917510474429"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gold-500 text-navy-950 sm:hidden"
            >
              Consult Us
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-gold-400 hover:bg-navy-900 border border-gold-500/20 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-navy-950/98 backdrop-blur-xl border-b border-gold-500/30 shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-gold-400 py-2 border-b border-slate-800 flex justify-between items-center"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gold-500" />
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://wa.me/917510474429"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-bold rounded-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+917510474429"
                className="flex items-center justify-center space-x-2 py-3 bg-navy-900 border border-gold-500/30 text-gold-400 font-bold rounded-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 75104 74429</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="py-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-extrabold rounded-xl shadow-lg shadow-gold-500/20"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
