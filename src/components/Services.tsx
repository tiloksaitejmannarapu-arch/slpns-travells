import { MapPin, Navigation, Plane, Landmark, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: MapPin,
    title: 'Local Trips',
    description: 'Convenient rides within Sullurpeta and nearby areas for any occasion — errands, events, or appointments.',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    features: ['Within city limits', 'Hourly packages', 'Flexible timing'],
  },
  {
    icon: Navigation,
    title: 'Outstation Trips',
    description: 'Long-distance travel to Nellore, Chennai, Hyderabad and beyond with experienced highway drivers.',
    color: 'bg-yellow-400',
    lightBg: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    features: ['Inter-city travel', 'Highway experts', 'Overnight available'],
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Stress-free drop & pickup service to Chennai, Tirupati, and Hyderabad airports. Never miss a flight.',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    features: ['Flight tracking', 'Early morning pickups', 'Luggage assistance'],
  },
  {
    icon: Landmark,
    title: 'Temple Trips',
    description: 'Comfortable pilgrimage travel to Tirupati, Srikalahasti, Kanipakam and other divine destinations.',
    color: 'bg-orange-500',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-600',
    features: ['Tirupati Darshan', 'Multi-temple tour', 'Devotional routes'],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From quick local rides to long outstation journeys — we've got every travel need covered
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className={`mt-14 bg-gray-900 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700`}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Need a custom trip plan?
            </h3>
            <p className="text-gray-400 text-base">
              Call us and we'll create a personalized travel package just for you.
            </p>
          </div>
          <a
            href="tel:8019999517"
            className="flex-shrink-0 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 yellow-glow text-base"
          >
            Call Us Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 card-hover border border-gray-100 group cursor-pointer transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 ${s.lightBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <s.icon className={`w-7 h-7 ${s.textColor}`} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>

      {/* Feature Tags */}
      <div className="space-y-1.5">
        {s.features.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
            <span className="text-xs text-gray-500 font-medium">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
