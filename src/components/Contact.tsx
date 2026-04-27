import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, User, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello SLPNS Travels!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918019999517?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-divider" />
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Ready to book? Have a question? Reach out via call, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <ContactForm sent={sent} form={form} onChange={handleChange} onSubmit={handleSubmit} />

          {/* Right: Info + Map */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function ContactForm({
  sent, form, onChange, onSubmit
}: {
  sent: boolean;
  form: { name: string; phone: string; message: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl border border-gray-100 shadow-xl p-7 sm:p-8 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>

      {sent ? (
        <div className="flex flex-col items-center justify-center py-12 gap-3 animate-fadeInUp">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-9 h-9 text-green-500" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Message Sent!</h4>
          <p className="text-gray-500 text-sm text-center">We'll get back to you shortly on WhatsApp.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Full name"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                placeholder="10-digit mobile"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              placeholder="Tell us about your travel needs..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 placeholder-gray-400 transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-105 yellow-glow shadow-lg shadow-yellow-400/25"
          >
            <Send className="w-4 h-4" />
            Send via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}

function ContactInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
    >
      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="tel:8019999517"
          className="flex items-center gap-4 bg-gray-900 hover:bg-gray-800 rounded-2xl p-5 transition-all duration-200 hover:scale-105 group"
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-black" strokeWidth={2} />
          </div>
          <div>
            <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">Call Us</div>
            <div className="text-white font-bold text-base group-hover:text-yellow-400 transition-colors">
              80199 99517
            </div>
          </div>
        </a>

        <a
          href="https://wa.me/918019999517"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 whatsapp-btn hover:opacity-90 rounded-2xl p-5 transition-all duration-200 hover:scale-105"
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <div className="text-white/70 text-xs font-medium uppercase tracking-wider">WhatsApp</div>
            <div className="text-white font-bold text-base">Chat With Us</div>
          </div>
        </a>

        <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-yellow-600" strokeWidth={2} />
          </div>
          <div>
            <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">Location</div>
            <div className="text-gray-800 font-semibold text-sm">Sullurpeta, Andhra Pradesh</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-blue-600" strokeWidth={2} />
          </div>
          <div>
            <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">Available</div>
            <div className="text-gray-800 font-semibold text-sm">24 Hours, 7 Days</div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-container rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-1" style={{ minHeight: 280 }}>
        <iframe
          title="SLPNS Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61515.357!2d80.0224!3d13.8571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d6e0f2f7c0001%3A0x1!2sSullurpeta%2C%20Andhra%20Pradesh%20524121!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
