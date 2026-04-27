import { Check, Star, Zap, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const plans = [
  {
    name: '4-Seater Sedan',
    emoji: '🚗',
    price: '₹14',
    unit: '/km',
    popular: false,
    features: [
      '4 passengers max',
      'Air conditioned',
      'GPS tracking enabled',
      'Professional driver',
      'Luggage space',
      'Outstation trips',
    ],
    cta: 'Book Sedan',
    color: 'border-gray-200',
    btnClass: 'bg-gray-900 hover:bg-yellow-400 hover:text-black text-white',
  },
  {
    name: 'MUV / Innova',
    emoji: '🚙',
    price: '₹18',
    unit: '/km',
    popular: true,
    features: [
      '7 passengers max',
      'Premium AC + charging',
      'Extra luggage space',
      'GPS & live tracking',
      'Night driving allowed',
      'All routes covered',
    ],
    cta: 'Book MUV',
    color: 'border-yellow-400',
    btnClass: 'bg-yellow-400 hover:bg-yellow-300 text-black',
  },
  {
    name: 'Ertiga Package',
    emoji: '🚐',
    price: '₹9,000',
    unit: 'flat',
    popular: false,
    features: [
      '7 passengers max',
      'Air conditioned',
      'Flat rate – no surprise bill',
      'Long trip specialist',
      'Driver allowance included',
      'Great for family trips',
    ],
    cta: 'Book Ertiga',
    color: 'border-gray-200',
    btnClass: 'bg-gray-900 hover:bg-yellow-400 hover:text-black text-white',
  },
];

const packageDeal = {
  title: '80 km / 8 hrs Package',
  price: '₹2,500',
  emoji: '⏱️',
  perks: [
    'Full 8 hours at your disposal',
    '80 km coverage included',
    'Ideal for local sightseeing',
    'Waiting charges included',
    'Professional driver',
    'AC vehicle',
  ],
};

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Simple, Fair Rates
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            No hidden charges. No surge pricing. Just honest fares for every journey.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {plans.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>

        {/* Special Package Deal */}
        <PackageDeal deal={packageDeal} />

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            * Toll charges and driver allowances may apply for outstation trips. Fuel included in all prices.
          </p>
          <a
            href="tel:8019999517"
            className="inline-flex items-center gap-2 mt-4 text-yellow-600 font-semibold hover:text-yellow-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call for custom quotes: 8019999517
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan: p, index }: { plan: typeof plans[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={ref}
      className={`relative rounded-3xl border-2 ${p.color} p-7 card-hover bg-white flex flex-col transition-all duration-700 ${
        p.popular ? 'shadow-2xl shadow-yellow-400/20 scale-[1.02]' : 'shadow-lg'
      }`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? `translateY(0) ${p.popular ? 'scale(1.02)' : ''}` : 'translateY(40px)',
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      {p.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 badge-popular text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            <Star className="w-3 h-3 fill-white" />
            Most Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="text-4xl mb-3">{p.emoji}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{p.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-gray-900">{p.price}</span>
          <span className="text-gray-500 font-medium">{p.unit}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {p.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.popular ? 'bg-yellow-400' : 'bg-gray-100'}`}>
              <Check className={`w-3 h-3 ${p.popular ? 'text-black' : 'text-gray-600'}`} strokeWidth={3} />
            </div>
            {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={scrollToBooking}
        className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105 ${p.btnClass} ${p.popular ? 'shadow-lg shadow-yellow-400/30' : ''}`}
      >
        {p.cta}
      </button>
    </div>
  );
}

function PackageDeal({ deal }: { deal: typeof packageDeal }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-10 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{deal.emoji}</span>
            <div className="flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-3 py-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-300 text-xs font-bold uppercase tracking-wider">Special Deal</span>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{deal.title}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl font-extrabold text-yellow-400">{deal.price}</span>
            <span className="text-gray-400">all inclusive</span>
          </div>
        </div>

        {/* Right: perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
          {deal.perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-black" strokeWidth={3} />
              </div>
              <span className="text-gray-300 text-sm">{perk}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <button
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 yellow-glow whitespace-nowrap"
          >
            Book Package
          </button>
        </div>
      </div>
    </div>
  );
}
