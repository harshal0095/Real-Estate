
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Move, MapPin, Calendar, Shield, Map as MapIcon } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailPanelProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyDetailPanel: React.FC<PropertyDetailPanelProps> = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="relative w-full max-w-2xl bg-[#080808] h-full shadow-2xl overflow-y-auto border-l border-white/5"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center bg-black/50 border border-white/10 rounded-full text-white hover:gold-border hover:gold-text transition-all"
          >
            <X size={24} />
          </button>

          {/* Header Image */}
          <div className="relative h-[45vh] overflow-hidden">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent" />
            <div className="absolute bottom-10 left-10">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest gold-bg text-black font-bold mb-4 inline-block">
                {property.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">{property.title}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 space-y-12 pb-24">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5">
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Price</p>
                <p className="text-2xl font-serif gold-text">{property.price}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Beds</p>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Bed size={16} className="text-white" />
                  <span className="text-xl text-white">{property.beds}</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Baths</p>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Bath size={16} className="text-white" />
                  <span className="text-xl text-white">{property.baths}</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Area</p>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Move size={16} className="text-white" />
                  <span className="text-xl text-white">{property.area}</span>
                </div>
              </div>
            </div>

            {/* Location & Description */}
            <div className="space-y-6">
              <div className="flex items-center text-gray-400 space-x-2">
                <MapPin size={18} className="gold-text" />
                <span className="text-sm tracking-widest uppercase">{property.location}</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#111] border border-white/5 rounded-sm">
                <Shield size={24} className="gold-text mb-4" />
                <h4 className="text-lg font-serif text-white mb-2">Exclusive Security</h4>
                <p className="text-gray-500 text-sm">24/7 concierge, biometric access, and advanced surveillance systems for your peace of mind.</p>
              </div>
              <div className="p-6 bg-[#111] border border-white/5 rounded-sm">
                <Calendar size={24} className="gold-text mb-4" />
                <h4 className="text-lg font-serif text-white mb-2">Private Tour</h4>
                <p className="text-gray-500 text-sm">Available for viewing by appointment. Contact our specialist agents to schedule a visit.</p>
              </div>
            </div>

            {/* Small Map Indicator */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Geographic Location</h4>
              <div className="h-48 w-full bg-[#111] rounded-sm flex items-center justify-center relative group overflow-hidden border border-white/10">
                <MapIcon size={32} className="text-gray-800" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                  <div className="w-4 h-4 gold-bg rounded-full animate-ping" />
                  <div className="w-3 h-3 gold-bg rounded-full absolute" />
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8">
              <button className="w-full py-6 gold-bg text-black font-bold uppercase tracking-[0.3em] text-xs hover:scale-[1.02] transition-transform">
                Inquire About Property
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PropertyDetailPanel;
