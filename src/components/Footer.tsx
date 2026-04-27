import { Phone, MessageCircle, MapPin, Car, ArrowRight, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Local Trips',
  'Outstation Trips',
  'Airport Transfers',
  'Temple Tours',
  'Corporate Travel',
  'Emergency Rides',
];

const cities = [
  'Sullurpeta ↔ Nellore',
  'Sullurpeta ↔ Chennai',
  'Sullurpeta ↔ Tirupati',
  'Sullurpeta ↔ Hyderabad',
  'Sullurpeta ↔ SHAR',
  'Sullurpeta ↔ Bengaluru',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-extrabold text-xl leading-none">
                  SLPNS <span className="text-yellow-400">Travels</span>
                </div>
                <div className="text-gray-500 text-[10px] tracking-widest uppercase">Sullurpeta</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Safe, reliable & affordable travel from Sullurpeta to all major cities. 
              Trusted by 5000+ passengers since 2015.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:8019999517"
                className="flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/50 rounded-xl px-4 py-3 transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors">
                  8019999517
                </span>
              </a>
              <a
                href="https://wa.me/918019999517"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 hover:border-green-400/50 rounded-xl px-4 py-3 transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">
                  WhatsApp Chat
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-400 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-400 rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-400 rounded-full" />
              Popular Routes
            </h4>
            <ul className="space-y-2.5">
              {cities.map((c) => (
                <li key={c} className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 SLPNS Travels. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Sullurpeta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
