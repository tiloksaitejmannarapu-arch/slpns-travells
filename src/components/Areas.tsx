import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const areas = [
  { city: 'Nellore', distance: '55 km', time: '~1 hr', emoji: '🏙️', popular: true },
  { city: 'Chennai', distance: '90 km', time: '~2 hrs', emoji: '🌆', popular: true },
  { city: 'Tirupati', distance: '120 km', time: '~2.5 hrs', emoji: '🛕', popular: true },
  { city: 'Hyderabad', distance: '380 km', time: '~5 hrs', emoji: '🏛️', popular: false },
  { city: 'Vijayawada', distance: '280 km', time: '~4 hrs', emoji: '🌉', popular: false },
  { city: 'SHAR / Sriharikota', distance: '12 km', time: '~20 min', emoji: '🚀', popular: false },
  { city: 'Gudur', distance: '30 km', time: '~40 min', emoji: '🏘️', popular: false },
  { city: 'Srikalahasti', distance: '100 km', time: '~2 hrs', emoji: '🛕', popular: false },
  { city: 'Ongole', distance: '140 km', time: '~2.5 hrs', emoji: '🌾', popular: false },
  { city: 'Bengaluru', distance: '350 km', time: '~5 hrs', emoji: '💻', popular: false },
  { city: 'Kanipakam', distance: '130 km', time: '~2 hrs', emoji: '🙏', popular: false },
  { city: 'Pulicat', distance: '45 km', time: '~50 min', emoji: '🦢', popular: false },
];

export default function Areas() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="areas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Service Areas</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Where We Travel
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From Sullurpeta, we connect you to all major cities and pilgrimage destinations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Areas Grid */}
          <AreasGrid />

          {/* Map + Info */}
          <MapPanel />
        </div>
      </div>
    </section>
  );
}

function AreasGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div ref={ref}>
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-yellow-500" />
        Cities We Cover
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {areas.map((area, i) => (
          <div
            key={area.city}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-700 card-hover cursor-pointer group ${
              area.popular ? 'border-yellow-300 bg-yellow-50' : 'border-gray-100 bg-gray-50 hover:border-yellow-200 hover:bg-yellow-50/50'
            }`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: `${i * 0.05}s`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{area.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 text-sm">{area.city}</span>
                  {area.popular && (
                    <span className="text-[10px] font-bold bg-yellow-400 text-black px-1.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {area.distance}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {area.time}
                  </span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MapPanel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-yellow-500" />
        Find Us on the Map
      </h3>

      {/* Map */}
      <div className="map-container rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-5">
        <iframe
          title="Sullurpeta Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30757.678965!2d80.0224!3d13.8571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d6e0f2f7c0001%3A0x1!2sSullurpeta%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      {/* Info Card */}
      <div className="bg-gray-900 rounded-2xl p-5 text-white">
        <h4 className="font-bold text-base mb-3">📍 Based in Sullurpeta</h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Sullurpeta is strategically located near SHAR (Satish Dhawan Space Centre), 
          making it a great base for travel to Chennai, Nellore, and Tirupati.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <div className="text-yellow-400 font-bold text-lg">90 km</div>
            <div className="text-gray-400 text-xs">to Chennai</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <div className="text-yellow-400 font-bold text-lg">55 km</div>
            <div className="text-gray-400 text-xs">to Nellore</div>
          </div>
        </div>
      </div>
    </div>
  );
}
