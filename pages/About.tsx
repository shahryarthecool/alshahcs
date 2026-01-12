
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Our Company</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Providing reliable and innovative IT & ELV solutions across the UAE for over a decade.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold text-blue-900">Bridging the Gap Between <span className="text-green-600">Ideas & Infrastructure</span></h2>
              <p className="text-gray-600 leading-relaxed">
                Al Shah Complete Solutions was founded with a vision to simplify technical challenges for businesses in Dubai. We specialize in the design, installation, and maintenance of mission-critical systems including IT infrastructure, networking, and advanced security.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Our Mission</h4>
                    <p className="text-gray-500 text-sm">To provide seamless, high-quality, and cost-effective technical solutions that empower businesses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Our Vision</h4>
                    <p className="text-gray-500 text-sm">To be the preferred technical partner in the UAE, known for innovation and reliability in ELV and IT systems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Office Infrastructure" 
                className="rounded-[3rem] shadow-2xl" 
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block max-w-xs">
                 <h4 className="text-orange-500 font-black text-4xl mb-2">10+</h4>
                 <p className="font-bold text-gray-900 uppercase text-xs tracking-widest">Years of Experience in UAE Market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-16 rounded-[4rem] shadow-xl border border-gray-100">
           <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-3xl font-bold">FS</div>
           <h3 className="text-3xl font-bold text-gray-900 mb-6">Founder's Message</h3>
           <p className="text-lg text-gray-600 italic leading-relaxed mb-8">
             "At Al Shah Complete Solutions, we don't just fix problems; we build long-term relationships through trust and technical excellence. Our goal is to ensure your technology works for you, so you can focus on growing your business."
           </p>
           <div className="font-bold text-blue-900">Syed Shah</div>
           <div className="text-gray-400 text-sm uppercase tracking-widest mt-1">CEO & Founder</div>
        </div>
      </section>
    </div>
  );
};

export default About;
