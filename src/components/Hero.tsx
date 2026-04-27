import { Phone, ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0f1923',
      }}
    >
      {/* Gradient Overlay – dark on left, transparent on right */}
      <div className="hero-gradient absolute inset-0 z-10" />

      {/* Extra bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fadeInUp">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 text-xs font-semibold tracking-wider uppercase">
              Trusted by 5000+ Passengers
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 animate-fadeInLeft"
            style={{ animationDelay: '0.1s' }}
          >
            Book Your{' '}
            <span className="text-yellow-400">Ride</span>
            <br />
            in Minutes
          </h1>

          {/* Subheading */}
          <p
            className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-lg animate-fadeInLeft"
            style={{ animationDelay: '0.2s' }}
          >
            Comfortable, safe and affordable travel from{' '}
            <span className="text-white font-semibold">Sullurpeta</span> to nearby cities.
            Professional drivers, clean vehicles, on-time every time.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-8 animate-fadeInLeft"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={scrollToBooking}
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 yellow-glow text-base shadow-lg shadow-yellow-400/25"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:8019999517"
              className="flex items-center justify-center gap-2 border-2 border-white/60 hover:border-yellow-400 text-white hover:text-yellow-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 backdrop-blur-sm text-base"
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              Call Now – 8019999517
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap gap-4 sm:gap-6 animate-fadeInLeft"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { icon: ShieldCheck, text: 'Safe & Secure' },
              { icon: Star, text: 'Experienced Drivers' },
              { icon: Clock, text: 'On-Time Service' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3 h-3 text-black" strokeWidth={2.5} />
                </div>
                <span className="text-gray-200 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float hidden md:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
