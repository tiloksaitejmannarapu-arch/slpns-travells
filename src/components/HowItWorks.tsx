import { PhoneCall, CalendarCheck, Car, Smile } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Call or Book Online',
    description: 'Call us at 8019999517 or fill the quick booking form above. It takes less than 2 minutes.',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    step: '02',
    icon: CalendarCheck,
    title: 'Confirm Your Booking',
    description: 'We confirm your ride details — date, time, vehicle and pickup point within minutes.',
    color: 'bg-yellow-400',
    lightBg: 'bg-yellow-50',
    textColor: 'text-yellow-600',
  },
  {
    step: '03',
    icon: Car,
    title: 'Driver Arrives',
    description: 'Your professional driver arrives on time with a clean, AC vehicle ready to go.',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    step: '04',
    icon: Smile,
    title: 'Enjoy Your Ride',
    description: 'Sit back, relax and enjoy a safe and comfortable journey to your destination.',
    color: 'bg-green-500',
    lightBg: 'bg-green-50',
    textColor: 'text-green-600',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Booking a ride with SLPNS Travels is quick, easy and hassle-free
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-yellow-200 via-purple-200 to-green-200 z-0" />

          {steps.map((s, i) => (
            <StepCard key={s.step} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step: s, index }: { step: typeof steps[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* Step Number Circle */}
      <div className={`relative z-10 w-[104px] h-[104px] rounded-full ${s.lightBg} border-4 border-white shadow-lg flex flex-col items-center justify-center mb-5`}>
        <s.icon className={`w-8 h-8 ${s.textColor} mb-0.5`} strokeWidth={1.8} />
        <span className={`text-xs font-bold ${s.textColor} opacity-70`}>{s.step}</span>
      </div>

      {/* Content */}
      <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">{s.description}</p>
    </div>
  );
}
