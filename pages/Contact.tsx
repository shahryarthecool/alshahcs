
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-gray-500 text-lg">We're here to answer any question you may have.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
              {success ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h2 className="text-2xl font-bold">Message Sent!</h2>
                  <p className="text-gray-500">Thank you for reaching out. Our technical team will contact you shortly.</p>
                  <button onClick={() => setSuccess(false)} className="text-blue-600 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Interested Service</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="networking">Networking & WiFi</option>
                      <option value="cctv">CCTV & Security</option>
                      <option value="it-infra">IT Infrastructure</option>
                      <option value="repair">Device Repair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Info and Map */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <i className="fa-solid fa-phone text-orange-500 text-3xl mb-4"></i>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-gray-500 text-sm font-bold text-blue-600">+971 58 855 1175</p>
                  <p className="text-gray-500 text-sm italic">Available for technical queries</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <i className="fa-solid fa-location-dot text-blue-500 text-3xl mb-4"></i>
                  <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                  <p className="text-gray-500 text-sm">Al Jafiliya, Dubai, United Arab Emirates</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-80 bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-inner relative group">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                <iframe
                  title="Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Al%20Jafiliya,%20Dubai,%20UAE+(Al%20Shah%20Complete%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>

              {/* WhatsApp Quick Contact */}
              <a 
                href="https://wa.me/971588551175" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-4 p-6 bg-green-500 hover:bg-green-600 text-white rounded-[2rem] font-bold text-xl shadow-lg transition-all transform hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
