
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200';
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a192f] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                Dubai's Trusted IT & ELV Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Empowering <span className="text-blue-400">Business</span> Through Technology
              </h1>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
                Alshahcs provides world-class IT infrastructure, networking, and technical maintenance solutions tailored for the UAE market.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <Link to="/contact" className="px-10 py-4 bg-[#0052CC] hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-900/20">
                  Discuss Your Project
                </Link>
                <Link to="/services" className="px-10 py-4 bg-transparent hover:bg-white/5 text-white border-2 border-white/20 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                  Our Expertise
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Server Room" 
                  className="w-full h-auto object-cover" 
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent"></div>
              </div>
              {/* Stats badges */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 text-gray-900">
                <div className="text-blue-600 font-black text-3xl">10+</div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years in UAE</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-2xl shadow-2xl z-20 text-white">
                <i className="fa-solid fa-check-double text-2xl mb-1"></i>
                <div className="font-bold text-sm">Certified Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em] mb-8">Recognized by Leading Clients</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             {PROJECTS.map(p => (
               <div key={p.id} className="text-2xl font-black text-gray-300 hover:text-gray-500 transition-colors cursor-default">{p.name}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Our Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Comprehensive Technical <br/> Solutions for Enterprises</h3>
            </div>
            <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-blue-100">
              View All Services <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative p-10 rounded-[2rem] bg-gray-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl mb-8 group-hover:rotate-12 transition-transform shadow-lg">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="h-1 w-12 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Alshahcs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Engineer at work" className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="space-y-10 order-1 md:order-2">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Why Alshahcs?</h2>
                <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">Excellence in Every Connection</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: 'Proven Expertise', desc: 'Over a decade of managing complex IT & ELV projects in Dubai.', icon: 'fa-medal' },
                  { title: '24/7 Support', desc: 'Our AMC clients enjoy round-the-clock technical assistance.', icon: 'fa-headset' },
                  { title: 'Turnkey Solutions', desc: 'From design and cabling to server setup and maintenance.', icon: 'fa-layer-group' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0052CC] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">Ready to Secure Your Technical Infrastructure?</h2>
              <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium">Get a free consultation from our expert engineers today.</p>
              <div className="pt-6">
                <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl inline-block">
                  Get Started
                </Link>
              </div>
            </div>
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
