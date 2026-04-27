import { Users, Star, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const vehicles = [
  {
    name: '4-Seater Sedan',
    emoji: '🚗',
    image: '/images/car-sedan.jpg',
    price: '₹14',
    unit: '/km',
    tag: null,
    features: ['4 Passengers', 'AC Cabin', 'GPS Tracked', 'Clean & Comfortable'],
    rating: 4.8,
    trips: '2000+',
    color: 'from-blue-50 to-blue-100/50',
    accent: 'bg-blue-500',
    description: 'Perfect for small groups and business trips',
  },
  {
    name: 'MUV / Innova',
    emoji: '🚙',
    image: '/images/car-innova.jpg',
    price: '₹18',
    unit: '/km',
    tag: 'Popular',
    features: ['7 Passengers', 'Premium AC', 'GPS Tracked', 'Extra Luggage Space'],
    rating: 4.9,
    trips: '3500+',
    color: 'from-yellow-50 to-yellow-100/50',
    accent: 'bg-yellow-400',
    description: 'Best for family trips & group outings',
  },
  {
    name: 'Ertiga',
    emoji: '🚐',
    image: '/images/car-ertiga.jpg',
    price: '₹9,000',
    unit: 'flat',
    tag: 'Best Value',
    features: ['7 Passengers', 'AC Cabin', 'Smooth Ride', 'Spacious Interiors'],
    rating: 4.7,
    trips: '1800+',
    color: 'from-green-50 to-green-100/50',
    accent: 'bg-green-500',
    description: 'Flat rate package – great for long trips',
  },
];

export default function Fleet() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="fleet" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Our Fleet</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Choose Your Perfect Ride
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Well-maintained, clean vehicles with professional drivers — ready for any journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.name} vehicle={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle: v, index }: { vehicle: typeof vehicles[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden border border-gray-100 card-hover bg-gradient-to-br ${v.color} transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* Popular tag */}
      {v.tag && (
        <div className={`absolute top-4 right-4 ${v.tag === 'Popular' ? 'badge-popular' : 'bg-green-500'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
          {v.tag}
        </div>
      )}

      <div className="p-6">
        {/* Vehicle Image */}
        <div className="relative h-40 mb-4 rounded-xl overflow-hidden bg-gray-50">
          <img
            src={v.image}
            alt={v.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = `<div class="flex items-center justify-center h-full text-6xl">${v.emoji}</div>`;
              }
            }}
          />
        </div>

        {/* Name & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">{v.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{v.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-3xl font-extrabold text-gray-900">{v.price}</span>
          <span className="text-gray-500 text-sm font-medium">{v.unit}</span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {v.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
              <div className={`w-1.5 h-1.5 rounded-full ${v.accent}`} />
              {f}
            </li>
          ))}
        </ul>

        {/* Rating + Trips Row */}
        <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200/60">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-800">{v.rating}</span>
            <span className="text-xs text-gray-400 ml-1">rating</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">{v.trips} trips</span>
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={() => {
            const el = document.getElementById('booking');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-semibold py-3 rounded-xl transition-all duration-300 text-sm group"
        >
          Book This Vehicle
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
