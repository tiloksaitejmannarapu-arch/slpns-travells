import { ShieldCheck, Clock, CreditCard, Headphones, Star, MapPin, Smile, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Fully sanitized vehicles with verified, background-checked drivers for your peace of mind.',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description: 'We value your time. Our drivers arrive 10 minutes early so you never miss a moment.',
    color: 'bg-yellow-400',
    lightBg: 'bg-yellow-50',
    textColor: 'text-yellow-600',
  },
  {
    icon: CreditCard,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden charges. Transparent billing from start to finish.',
    color: 'bg-green-500',
    lightBg: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via phone and WhatsApp for instant assistance.',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: Star,
    title: 'Top Rated',
    description: 'Consistently rated 4.8+ stars by thousands of happy passengers across the region.',
    color: 'bg-orange-500',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    description: 'We cover Sullurpeta, Nellore, Chennai, Tirupati, Hyderabad and all major nearby cities.',
    color: 'bg-red-500',
    lightBg: 'bg-red-50',
    textColor: 'text-red-600',
  },
  {
    icon: Smile,
    title: 'Friendly Drivers',
    description: 'Courteous, professional drivers who make every ride a pleasant and memorable experience.',
    color: 'bg-teal-500',
    lightBg: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    icon: Award,
    title: 'Trusted Since 2015',
    description: 'Over 8 years of reliable travel service in the Sullurpeta region with proven track record.',
    color: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
];

export default function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            The SLPNS Difference
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We don't just drive you — we deliver an experience you can trust
          </p>
        </div>

        {/* Stats */}
        <StatsBar />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {[
        { value: '5000+', label: 'Happy Passengers' },
        { value: '8+', label: 'Years of Service' },
        { value: '4.8★', label: 'Average Rating' },
        { value: '24/7', label: 'Available' },
      ].map((stat, i) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm card-hover"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function ReasonCard({ reason: r, index }: { reason: typeof reasons[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-5 card-hover border border-gray-100 group transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      <div className={`w-12 h-12 ${r.lightBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <r.icon className={`w-6 h-6 ${r.textColor}`} strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-1.5">{r.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
    </div>
  );
}
