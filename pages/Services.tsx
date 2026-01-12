
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop';
  };

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-blue-200 text-xl max-w-3xl mx-auto">
            Comprehensive technical solutions tailored to meet the dynamic needs of businesses in the UAE.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {categories.map((cat) => (
          <div key={cat} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 whitespace-nowrap">{cat}</h2>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-transparent w-full rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.filter(s => s.category === cat).map((service) => (
                <div key={service.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg text-blue-600">
                      <i className={`fa-solid ${service.icon} text-xl`}></i>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <button className="w-full py-4 bg-gray-50 text-blue-600 font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      Request Technical Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
