
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
             <Link to="/">
               <Logo light className="h-16" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Alshahcs is your trusted partner for IT infrastructure and maintenance in Dubai. Delivering excellence through technology since inception.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/971588551175" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/store" className="hover:text-white transition-colors">Store</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Our Services</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><span className="hover:text-white cursor-pointer transition-colors">Networking & WiFi</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">CCTV & Access Control</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">IT Maintenance (AMC)</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Device Repair</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Fitout Technical Services</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-blue-500"></i>
                <span className="font-medium">Al Jafiliya, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-blue-500"></i>
                <a href="tel:+971588551175" className="hover:text-white font-medium">+971-58-855-1175</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                <a href="mailto:info@alshahsolutions.com" className="hover:text-white font-medium">info@alshahsolutions.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-gray-500 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Alshahcs | Al Shah Complete Solutions. All Rights Reserved.</p>
          <Link to="/admin" className="hover:text-white opacity-50 hover:opacity-100 transition-all flex items-center gap-2">
            <i className="fa-solid fa-lock text-[10px]"></i> Manager Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
