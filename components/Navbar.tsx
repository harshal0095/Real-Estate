
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4 shadow-xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.8 }}
            className="w-10 h-10 border-2 gold-border flex items-center justify-center"
          >
            <span className="font-serif text-xl gold-text font-bold">T</span>
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-serif tracking-widest font-bold text-white group-hover:gold-text transition-colors duration-300">TRINETRA</span>
            <span className="text-[10px] tracking-[0.3em] gold-text uppercase">Real Estate</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="relative group py-2"
            >
              <span className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === item.path ? 'gold-text' : 'text-gray-300 group-hover:text-white'
              }`}>
                {item.label}
              </span>
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-[1px] gold-bg"
                initial={false}
                animate={{ width: location.pathname === item.path ? '100%' : '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-gray-600 hover:gold-border hover:gold-text text-white text-xs uppercase tracking-widest transition-all duration-300"
          >
            Inquire Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col justify-center items-center space-y-12"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link 
                  to={item.path}
                  className="text-3xl font-serif text-white hover:gold-text tracking-widest transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-10 py-4 gold-bg text-black font-bold uppercase tracking-widest"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
