
import React from 'react';
import { motion } from 'framer-motion';
import { STATISTICS } from '../constants';

const StatCounter = ({ value, label, suffix, index }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center p-8 border border-white/5 bg-[#0a0a0a]"
    >
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
        className="text-5xl md:text-6xl font-serif gold-text mb-4"
      >
        {value}{suffix}
      </motion.h3>
      <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">{label}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.6em] gold-text mb-6 block font-bold">The Trinetra Legacy</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Defining the Art of <br /><span className="italic font-light">Luxury Real Estate</span></h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Founded on the principles of integrity, exclusivity, and unparalleled market expertise, Trinetra has become the benchmark for luxury property advisory. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We provide a bespoke service that transcends traditional brokerage, offering a global portfolio that represents the pinnacle of modern living.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1200&q=80"
              alt="Trinetra HQ"
              className="w-full h-[600px] object-cover grayscale brightness-75 shadow-2xl"
            />
            <div className="absolute -left-8 -bottom-8 w-64 h-64 border-2 gold-border -z-10" />
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-24">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-serif text-white mb-6">Our Vision</h2>
              <div className="w-24 h-[1px] gold-bg" />
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-serif text-gray-300 leading-relaxed italic">
                "To create a world where home is an immersive sensory experience of luxury, comfort, and architectural brilliance."
              </p>
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {STATISTICS.map((stat, idx) => (
            <StatCounter key={idx} {...stat} index={idx} />
          ))}
        </div>

        {/* Team / Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Global Reach',
              desc: 'Connecting our clients to exclusive properties across five continents through our elite partner network.'
            },
            {
              title: 'Market Intel',
              desc: 'Utilizing sophisticated data analysis and deep local knowledge to identify emerging value and investment opportunities.'
            },
            {
              title: 'Bespoke Experience',
              desc: 'Every client journey is unique. We provide tailored advisory services from acquisition to management.'
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-12 h-12 gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-black font-bold">0{idx + 1}</span>
              </div>
              <h4 className="text-2xl font-serif text-white mb-4">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
