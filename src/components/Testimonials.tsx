import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Ramesh Kumar',
    location: 'Sullurpeta',
    rating: 5,
    text: 'Excellent service! I travel to Chennai frequently for work and SLPNS Travels has been my go-to for 2 years. Always on time, clean car, and friendly driver.',
    avatar: 'RK',
    color: 'bg-blue-500',
    trip: 'Sullurpeta → Chennai',
  },
  {
    name: 'Lakshmi Devi',
    location: 'Nellore',
    rating: 5,
    text: 'We booked the Innova for a Tirupati darshan trip with the whole family. The driver was very helpful and the vehicle was very comfortable. Highly recommended!',
    avatar: 'LD',
    color: 'bg-pink-500',
    trip: 'Family Temple Tour',
  },
  {
    name: 'Srinivas Rao',
    location: 'Gudur',
    rating: 5,
    text: 'Booked for airport pickup at Chennai. The driver tracked my flight and was waiting even though my flight was delayed. Superb professionalism!',
    avatar: 'SR',
    color: 'bg-green-500',
    trip: 'Airport Transfer',
  },
  {
    name: 'Priya Anand',
    location: 'Sullurpeta',
    rating: 5,
    text: 'Very affordable pricing and the vehicle was spotlessly clean. The 80km/8hr package is amazing value for a full-day tour. Will definitely book again.',
    avatar: 'PA',
    color: 'bg-purple-500',
    trip: '80km Day Package',
  },
  {
    name: 'Venkat Reddy',
    location: 'Nellore',
    rating: 5,
    text: 'I called at midnight for an emergency hospital trip and they responded immediately. Outstanding service, reliable and trustworthy. God bless SLPNS Travels!',
    avatar: 'VR',
    color: 'bg-orange-500',
    trip: 'Emergency Trip',
  },
  {
    name: 'Meena Krishnan',
    location: 'Chennai',
    rating: 4,
    text: 'Great experience overall. The driver was polite and the car had good AC. Price was fair and transparent. Will use again for my Sullurpeta visits.',
    avatar: 'MK',
    color: 'bg-teal-500',
    trip: 'Chennai → Sullurpeta',
  },
];

export default function Testimonials() {
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
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            What Our Passengers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Real stories from real passengers who trust SLPNS Travels for their journeys
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-700 font-bold ml-1">4.9</span>
            <span className="text-gray-400 text-sm">from 500+ reviews</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`testimonial-card rounded-2xl p-6 card-hover flex flex-col gap-4 transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-yellow-400/15 rounded-xl flex items-center justify-center">
        <Quote className="w-5 h-5 text-yellow-500" />
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
        {Array.from({ length: 5 - t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>

      {/* Trip badge */}
      <div className="inline-flex self-start items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
        <span className="text-xs text-yellow-700 font-medium">🚗 {t.trip}</span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
        <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
          <div className="text-gray-400 text-xs">{t.location}</div>
        </div>
      </div>
    </div>
  );
}
