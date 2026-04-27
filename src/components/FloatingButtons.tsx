import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);

    // Stop pulsing after 5 seconds
    const timer = setTimeout(() => setPulsing(false), 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 animate-fadeInUp"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918019999517?text=Hello%20SLPNS%20Travels!%20I%20want%20to%20book%20a%20ride."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 whatsapp-btn text-white font-semibold px-4 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 group"
        aria-label="WhatsApp Chat"
      >
        {/* Pulse Ring */}
        {pulsing && (
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping" />
        )}
        <MessageCircle className="w-5 h-5" strokeWidth={2} />
        <span className="hidden sm:block text-sm">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:8019999517"
        className="relative flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 yellow-glow"
        aria-label="Call Now"
      >
        {pulsing && (
          <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 animate-ping" />
        )}
        <Phone className="w-5 h-5" strokeWidth={2.5} />
        <span className="hidden sm:block text-sm">Call Now</span>
      </a>
    </div>
  );
}
