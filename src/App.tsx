import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Fleet from './components/Fleet';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Areas from './components/Areas';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Quick Booking Form */}
      <BookingForm />

      {/* Fleet / Vehicles */}
      <Fleet />

      {/* Services */}
      <Services />

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing */}
      <Pricing />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Service Areas */}
      <Areas />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
