import { useState } from 'react';
import { User, Phone, MapPin, Navigation, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const popularRoutes = [
  'Sullurpeta', 'Nellore', 'Chennai', 'Tirupati', 'Hyderabad',
  'Vijayawada', 'Ongole', 'Gudur', 'SHAR', 'Bengaluru'
];

export default function BookingForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', pickup: '', drop: '', date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello SLPNS Travels! I'd like to book a ride.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0APickup: ${form.pickup}%0ADrop: ${form.drop}%0ADate: ${form.date}`;
    window.open(`https://wa.me/918019999517?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="relative z-30 -mt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-7">
            <div className="section-divider mb-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Quick Booking
            </h2>
            <p className="text-gray-500 text-sm mt-1">Fill the form and we'll confirm your ride instantly</p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3 animate-fadeInUp">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Booking Sent!</h3>
              <p className="text-gray-500 text-sm text-center max-w-xs">
                We've opened WhatsApp with your details. Our team will confirm shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="10-digit mobile"
                      pattern="[6-9][0-9]{9}"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={today}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Pickup */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-500" />
                    <input
                      type="text"
                      name="pickup"
                      value={form.pickup}
                      onChange={handleChange}
                      required
                      placeholder="From where?"
                      list="pickup-list"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200"
                    />
                    <datalist id="pickup-list">
                      {popularRoutes.map(r => <option key={r} value={r} />)}
                    </datalist>
                  </div>
                </div>

                {/* Drop */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Drop Location
                  </label>
                  <div className="relative">
                    <Navigation className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                    <input
                      type="text"
                      name="drop"
                      value={form.drop}
                      onChange={handleChange}
                      required
                      placeholder="Where to?"
                      list="drop-list"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200"
                    />
                    <datalist id="drop-list">
                      {popularRoutes.map(r => <option key={r} value={r} />)}
                    </datalist>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 yellow-glow shadow-lg shadow-yellow-400/25 text-sm"
                  >
                    Book Now via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400">
                🔒 Your information is safe with us. We'll call you to confirm the booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
