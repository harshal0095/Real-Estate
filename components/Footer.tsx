
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group mb-8">
              <div className="w-8 h-8 border gold-border flex items-center justify-center">
                <span className="font-serif text-lg gold-text font-bold">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-serif tracking-widest font-bold text-white">TRINETRA</span>
                <span className="text-[8px] tracking-[0.3em] gold-text uppercase">Real Estate</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Elevating the real estate experience through impeccable design, data-driven insights, and exclusive inventory.
            </p>
          </div>

          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h5>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-500 text-sm hover:gold-text transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Regions</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:gold-text">New York City</a></li>
              <li><a href="#" className="hover:gold-text">Beverly Hills</a></li>
              <li><a href="#" className="hover:gold-text">London Mayfair</a></li>
              <li><a href="#" className="hover:gold-text">Miami Beach</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Newsletter</h5>
            <p className="text-gray-500 text-xs mb-6">Receive curated insights into the luxury property market.</p>
            <div className="flex border-b border-white/10 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-xs tracking-widest focus:outline-none flex-grow"
              />
              <button className="gold-text text-xs font-bold">→</button>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-[10px] tracking-widest uppercase font-bold">
            &copy; 2025 Trinetra Luxury Estates. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] tracking-widest uppercase text-gray-600 font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
