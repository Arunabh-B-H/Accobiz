import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { TrainingVertical } from './components/TrainingVertical';
import { WhyUs } from './components/WhyUs';
import { GoogleReviews } from './components/GoogleReviews';
import { Calculator } from './components/Calculator';
import { ContactAndDirections } from './components/ContactAndDirections';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('');
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950">
      {/* Header Bar */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Body Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* About Accobiz LLP */}
        <AboutUs onOpenConsultation={() => handleOpenConsultation()} />

        {/* Consultancy Services */}
        <Services onSelectService={(service) => handleOpenConsultation(service)} />

        {/* Practical Education & Training Vertical */}
        <TrainingVertical onOpenConsultation={(service) => handleOpenConsultation(service)} />

        {/* Why Choose Us */}
        <WhyUs />

        {/* Google Reviews Section */}
        <GoogleReviews />

        {/* Interactive Tax Savings & Systems Estimator Tool */}
        <Calculator onOpenConsultation={() => handleOpenConsultation()} />

        {/* Contact & Google Maps Directions */}
        <ContactAndDirections selectedServicePrefill={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick Actions Widget */}
      <FloatingWidget />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledService={selectedService}
      />
    </div>
  );
}

export default App;
