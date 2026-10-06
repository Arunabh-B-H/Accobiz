import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, X, ChevronUp } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const FloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {/* Expanded Quick Action Popover */}
      {isOpen && (
        <div className="mb-2 w-72 rounded-2xl bg-navy-900/95 border border-gold-500/40 p-4 shadow-2xl backdrop-blur-xl animate-fadeIn space-y-3">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-white">Connect with Accobiz LLP</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/917510474429?text=Hello%20Accobiz%20LLP,%20I%20would%20like%20to%20consult%20regarding%20business%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <div>
                <strong className="block text-white">Chat on WhatsApp</strong>
                <span className="text-[10px] text-emerald-400 font-semibold">Online • 751 047 4429</span>
              </div>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+917510474429"
              className="flex items-center space-x-3 p-2.5 rounded-xl bg-navy-950 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all"
            >
              <Phone className="w-5 h-5 text-gold-400" />
              <div>
                <strong className="block text-white">Call Us Directly</strong>
                <span className="text-[10px] text-slate-300">+91 75104 74429</span>
              </div>
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/accobiz_llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2.5 rounded-xl bg-pink-600/10 border border-pink-500/30 text-pink-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all"
            >
              <InstagramIcon className="w-5 h-5 text-pink-400" />
              <div>
                <strong className="block text-white">Follow on Instagram</strong>
                <span className="text-[10px] text-slate-300">@accobiz_llp</span>
              </div>
            </a>

            {/* Google Maps Directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Financial+District+Accobiz+LLP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-300 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Navigation className="w-5 h-5 text-blue-400" />
              <div>
                <strong className="block text-white">Get Directions</strong>
                <span className="text-[10px] text-slate-300">Open in Google Maps</span>
              </div>
            </a>
          </div>

        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center space-x-2">
        <a
          href="https://wa.me/917510474429"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform flex items-center justify-center relative group"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-emerald-500" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-navy-950 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-navy-950 rounded-full" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-2xl shadow-gold-500/40 hover:scale-110 transition-transform font-bold flex items-center justify-center border border-gold-300"
          title="Quick Connect Hub"
        >
          {isOpen ? <X className="w-6 h-6" /> : <ChevronUp className="w-6 h-6 animate-bounce" />}
        </button>
      </div>

    </div>
  );
};
