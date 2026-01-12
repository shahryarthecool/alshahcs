
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const saved = localStorage.getItem('alshah_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  // Fix: Explicitly type the Set as string to prevent 'unknown' inference error when spreading into string[]
  const categories: string[] = ['All', ...Array.from(new Set<string>(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800';
    e.currentTarget.className = 'w-full h-full object-cover opacity-50 grayscale';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 rotate-12 scale-150">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-20 w-full border border-blue-500/20 rounded-lg"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Technical Product Catalog</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto font-medium">
            Explore our curated range of professional IT, security, and interactive hardware solutions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-[#0052CC] text-white shadow-lg' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <div key={p.id} className="group flex flex-col bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 bg-gray-50 relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover" 
                  onError={handleImageError}
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase text-blue-600 tracking-widest shadow-sm">
                  {p.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-gray-400 mb-2 tracking-widest uppercase">Model: {p.model}</div>
                <h3 className="font-extrabold text-xl text-gray-900 mb-3 leading-tight">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {p.description}
                </p>
                <button className="w-full py-4 bg-[#0052CC] text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group">
                  <i className="fa-solid fa-file-invoice text-sm"></i>
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-32 p-12 md:p-20 bg-blue-50 rounded-[4rem] text-center border-2 border-dashed border-blue-200">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-8 shadow-xl">
            <i className="fa-solid fa-rocket text-3xl"></i>
          </div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">Online E-Commerce Store Coming Soon!</h3>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
            We are currently building our integrated payment gateway. Soon you will be able to purchase directly online with UAE-wide delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-6 py-3 bg-white rounded-full text-gray-400 text-sm font-bold flex items-center gap-2">
               <i className="fa-solid fa-clock"></i> Launching Q4 2024
             </div>
             <div className="px-6 py-3 bg-white rounded-full text-gray-400 text-sm font-bold flex items-center gap-2">
               <i className="fa-solid fa-truck-fast"></i> UAE Delivery
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
