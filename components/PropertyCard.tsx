
import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Move, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  index: number;
  onClick?: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(197, 160, 89, 0.2)"
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: "easeOut",
        boxShadow: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      onClick={() => onClick && onClick(property)}
      className="group relative overflow-hidden bg-[#111] cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img 
          src={property.image} 
          alt={property.title}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] uppercase tracking-widest gold-bg text-black font-bold shadow-lg">
            {property.category}
          </span>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="mb-2">
              <h3 className="text-2xl font-serif mb-1 group-hover:gold-text transition-colors duration-300">{property.title}</h3>
              <div className="flex items-center text-gray-400 text-xs tracking-wider">
                <MapPin size={12} className="mr-1 gold-text" />
                {property.location}
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <div className="flex items-center space-x-2">
                <Bed size={16} className="text-gray-400" />
                <span className="text-xs">{property.beds} Beds</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath size={16} className="text-gray-400" />
                <span className="text-xs">{property.baths} Baths</span>
              </div>
              <div className="flex items-center space-x-2">
                <Move size={16} className="text-gray-400" />
                <span className="text-xs">{property.area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer / Price / Reveal Button */}
      <div className="p-6 flex items-center justify-between border-t border-white/5 bg-[#0d0d0d]">
        <div className="text-xl gold-text font-serif">{property.price}</div>
        <div className="overflow-hidden h-8 relative w-32 flex items-center justify-end">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="flex items-center group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold mr-2">View Details</span>
            <ArrowRight size={14} className="gold-text" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
