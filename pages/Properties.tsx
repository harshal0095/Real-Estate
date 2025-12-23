
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Map as MapIcon, Grid, MapPin } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailPanel from '../components/PropertyDetailPanel';
import { PROPERTIES } from '../constants';
import { Property } from '../types';

const Properties: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const categories = ['All', 'Apartment', 'Villa', 'Penthouse', 'Mansion'];

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                         p.location.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] gold-text mb-4 block font-bold">Exclusive Listings</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-12">Discover Your Venue</h1>
          
          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search by city, development, or property type..." 
                className="w-full bg-[#111] border border-white/10 p-5 pl-14 text-white placeholder-gray-600 focus:outline-none focus:gold-border transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex bg-[#111] p-1 border border-white/10 rounded-sm">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-colors ${viewMode === 'grid' ? 'gold-text' : 'text-gray-500 hover:text-white'}`}
                title="Grid View"
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('map')}
                className={`p-3 transition-colors ${viewMode === 'map' ? 'gold-text' : 'text-gray-500 hover:text-white'}`}
                title="Map View"
              >
                <MapIcon size={20} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 bg-transparent overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  filter === cat ? 'gold-bg border-transparent text-black' : 'border-white/10 text-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-12 flex justify-between items-center text-gray-500 text-xs tracking-widest uppercase font-bold">
          <span>Showing {filteredProperties.length} elite properties</span>
          <div className="flex items-center cursor-pointer hover:text-white transition-colors">
            <Filter size={14} className="mr-2" />
            <span>Sort by: Premium</span>
          </div>
        </div>

        {/* Content View */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property, idx) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    index={idx} 
                    onClick={(p) => setSelectedProperty(p)}
                  />
                ))
              ) : (
                <div className="col-span-full py-32 text-center">
                  <h3 className="text-2xl font-serif text-gray-400 mb-4">No matching properties found.</h3>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="map"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="relative w-full h-[600px] bg-[#0a0a0a] border border-white/5 overflow-hidden group shadow-2xl"
            >
              {/* Simulated Map Background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')] bg-cover grayscale opacity-20 brightness-50" />
              
              {/* Animated Map Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
              
              {/* Interactive Markers */}
              {filteredProperties.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ 
                    left: `${((p.lng + 180) % 360) / 3.6}%`, 
                    top: `${((90 - p.lat) % 180) / 1.8}%` 
                  }}
                  className="absolute cursor-pointer"
                  onClick={() => setSelectedProperty(p)}
                >
                  <div className="relative flex flex-col items-center">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="bg-[#111] border border-gold-border p-2 rounded-sm shadow-xl flex items-center space-x-2 group-hover:border-white transition-all"
                    >
                      <MapPin size={14} className="gold-text" />
                      <span className="text-[10px] text-white font-bold tracking-tighter whitespace-nowrap">{p.price}</span>
                    </motion.div>
                    <div className="w-px h-4 gold-bg opacity-50" />
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-8 left-8 right-8 flex justify-center">
                <div className="bg-black/60 backdrop-blur-md p-4 border border-white/10 rounded-sm">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Interactive Map View Powered by Trinetra Intelligence</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Property View Panel */}
        <PropertyDetailPanel 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      </div>
    </motion.div>
  );
};

export default Properties;
