
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Admin from './pages/Admin';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Bubble for Quick Access */}
        <a 
          href="https://wa.me/971588551175" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform z-50 border-4 border-white"
          title="WhatsApp Us"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </Router>
  );
};

export default App;
