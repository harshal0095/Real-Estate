
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
    >
      <div className="relative">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] gold-bg mb-4"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-serif text-white tracking-[0.4em] mb-2">TRINETRA</h1>
          <p className="text-[10px] tracking-[0.5em] gold-text uppercase">Luxury Real Estate</p>
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="h-[1px] gold-bg mt-4 float-right"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
