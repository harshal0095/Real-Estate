
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=90"
            alt="Hero Luxury Property"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.8em] gold-text mb-6 block font-bold">Exquisite Living Redefined</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
              Find Your <br /> <span className="italic font-light">Dream Sanctuary</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-12 font-light leading-relaxed">
              Curating an exclusive collection of high-end residences in the world's most prestigious locations. Experience architectural mastery.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <Link to="/properties">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 gold-bg text-black font-bold uppercase tracking-widest text-xs transition-transform"
                >
                  View Properties
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border border-white/30 hover:border-white text-white font-bold uppercase tracking-widest text-xs transition-all"
                >
                  Contact Agent
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2 text-gray-400">Scroll</span>
          <ChevronDown size={20} className="gold-text" />
        </motion.div>
      </section>

      {/* Intro Stats Bar */}
      <section className="bg-[#0a0a0a] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Marketed Assets', value: '$2.4B+' },
            { label: 'Premium Listings', value: '450+' },
            { label: 'Global Offices', value: '12' },
            { label: 'Years of Trust', value: '15' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-3xl font-serif text-white mb-1">{stat.value}</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Property Showcase Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-8 md:space-y-0">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest gold-text mb-4 block font-bold">Featured Listings</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Finest Residential <br /> Masterpieces</h2>
          </div>
          <Link to="/properties" className="group flex items-center space-x-4 gold-text">
            <span className="text-xs uppercase tracking-[0.3em] font-bold">View All Inventory</span>
            <div className="w-12 h-[1px] gold-bg transition-all group-hover:w-20" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.slice(0, 3).map((property, idx) => (
            <PropertyCard key={property.id} property={property} index={idx} />
          ))}
        </div>
      </section>

      {/* Featured Project / Large Banner */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Architecture"
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.5em] gold-text mb-6 block font-bold">Collection 2024</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Architecture of <br /><span className="italic">Excellence</span></h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Every property we represent is vetted for architectural integrity and location prestige. We don't just sell homes; we curate lifestyles.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="group flex items-center space-x-6 text-white"
            >
              <span className="text-xs uppercase tracking-[0.5em] font-bold">Read Our Story</span>
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:gold-border group-hover:gold-text transition-all">
                <ArrowRight size={24} />
              </div>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="hidden md:block relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Villa Interior"
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#111] p-10 shadow-2xl border border-white/5">
              <p className="text-3xl font-serif gold-text mb-2">Sustainable</p>
              <p className="text-[10px] tracking-widest text-gray-500 uppercase">Innovation & Design</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
