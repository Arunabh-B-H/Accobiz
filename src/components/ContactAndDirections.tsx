import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Navigation, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2
} from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

interface ContactAndDirectionsProps {
  selectedServicePrefill?: string;
}

export const ContactAndDirections: React.FC<ContactAndDirectionsProps> = ({ selectedServicePrefill }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: selectedServicePrefill || 'Corporate Tax & Financial Optimization',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Corporate Tax & Financial Optimization',
        message: ''
      });
    }, 4000);
  };

  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Financial+District+City+Centre+Accobiz+LLP";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy-950 relative border-t border-slate-800/60">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Directions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Accobiz LLP Advisors
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            Reach out directly via Call, WhatsApp, Instagram, or visit our executive consultancy office. We respond within minutes during business hours.
          </p>
        </div>

        {/* Quick Social & Call Buttons Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          
          {/* Call Us */}
          <a
            href="tel:+917510474429"
            className="p-6 rounded-2xl bg-navy-900/80 border border-gold-500/30 hover:border-gold-400 hover:bg-navy-900 transition-all flex items-center space-x-4 group shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-400">Call Us Directly</span>
              <div className="text-base font-extrabold text-white group-hover:text-gold-300 transition-colors">+91 75104 74429</div>
              <div className="text-[11px] text-slate-400 font-semibold">751 047 4429</div>
            </div>
          </a>

          {/* Chat on WhatsApp */}
          <a
            href="https://wa.me/917510474429?text=Hello%20Accobiz%20LLP,%20I%20want%20to%20consult%20regarding%20business%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-navy-900/80 border border-emerald-500/30 hover:border-emerald-400 hover:bg-navy-900 transition-all flex items-center space-x-4 group shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">Chat with Us</span>
              <div className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">WhatsApp Support</div>
              <div className="text-[11px] text-slate-400">Online • Fast Reply</div>
            </div>
          </a>

          {/* Instagram Connect */}
          <a
            href="https://www.instagram.com/accobiz_llp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-navy-900/80 border border-pink-500/30 hover:border-pink-400 hover:bg-navy-900 transition-all flex items-center space-x-4 group shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-pink-400">Connect with Us</span>
              <div className="text-base font-extrabold text-white group-hover:text-pink-300 transition-colors">@accobiz_llp</div>
              <div className="text-[11px] text-slate-400">Instagram Updates</div>
            </div>
          </a>

        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-6 rounded-3xl bg-navy-900/80 border border-gold-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            
            <h3 className="text-2xl font-bold text-white mb-2">Request an Advisory Callback</h3>
            <p className="text-xs text-slate-300 mb-6">Fill in your details below and a Senior Partner will get back to you within 2 business hours.</p>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Callback Request Received!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out to <strong className="text-gold-400">Accobiz LLP</strong>. Our senior consultant will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 75104 74429"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                  >
                    <option value="Business Registrations">Business Registrations (Shop Act, Udyam, FSSAI)</option>
                    <option value="Business Compliances">Business Compliances (Incorporation, GST, TDS, ITR)</option>
                    <option value="Accounts & Accounting Systems">Accounts & Accounting Systems</option>
                    <option value="Business & Financial Documentation">Business & Financial Documentation (Project Reports)</option>
                    <option value="Digital Marketing & Web Solutions">Digital Marketing & Web Solutions (Landing Pages, AI)</option>
                    <option value="Education & Practical Training Vertical">Education & Practical Training Vertical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Brief Description / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business goals or compliance needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Advisory Request</span>
                </button>
              </form>
            )}

          </div>

          {/* Right: Directions & Location Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Location Info Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-gold-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase text-gold-400 tracking-wider">Consultancy Office</span>
                  <h3 className="text-xl font-bold text-white">Accobiz LLP Headquarters</h3>
                </div>
                
                {/* Get Directions Button */}
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors flex items-center space-x-1.5 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Address details */}
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Registered Office</strong>
                    <span>Suite 402, Executive Financial Towers, MG Road, Business District, India</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Official Email</strong>
                    <span>consult@accobiz.com • contact@accobiz.in</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Working Hours</strong>
                    <span>Monday - Saturday: 9:00 AM - 7:00 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Map View Box (Interactive Google Map Placeholder Frame) */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-64 bg-navy-950 group">
                {/* Embedded Map iframe or stylized view */}
                <iframe
                  title="Accobiz LLP Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495208470514!2d78.380000!3d17.440000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzI0LjAiTiA3OMKwMjInNDggMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70 group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                ></iframe>

                {/* Map Floating Tag */}
                <div className="absolute bottom-3 left-3 p-3 rounded-xl bg-navy-950/90 border border-gold-500/40 backdrop-blur-md flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-bold text-white">Accobiz LLP • Business Hub</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
