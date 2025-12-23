
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.5em] gold-text mb-6 block font-bold">Inquire Now</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-12">Let's Discuss Your <br /><span className="italic font-light">Next Investment</span></h1>
            
            <div className="space-y-12 mb-16">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center gold-text">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">Global Headquarters</h4>
                  <p className="text-gray-400 font-light leading-relaxed">750 Fifth Avenue, Suite 2400 <br /> New York, NY 10019</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center gold-text">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">Electronic Mail</h4>
                  <p className="text-gray-400 font-light text-xl">concierge@trinetraestates.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center gold-text">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">Direct Line</h4>
                  <p className="text-gray-400 font-light text-xl">+1 (800) 555-8888</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, color: '#c5a059' }}
                  className="text-gray-500 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] p-12 border border-white/5 relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 gold-bg rounded-full flex items-center justify-center mb-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                    <span className="text-black text-4xl">✓</span>
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
                <p className="text-gray-400 font-light">One of our specialist agents will reach out to you within the next 12 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 gold-text text-xs uppercase tracking-widest underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block transition-colors group-focus-within:text-white">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:gold-border transition-colors"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block transition-colors group-focus-within:text-white">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:gold-border transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block transition-colors group-focus-within:text-white">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:gold-border transition-colors"
                  />
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block transition-colors group-focus-within:text-white">Message / Requirements</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about the property type or location you are looking for..."
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:gold-border transition-colors resize-none placeholder-gray-800"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full gold-bg text-black font-bold uppercase tracking-[0.3em] py-5 mt-8 disabled:opacity-70 transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin mr-2" size={18} />
                  ) : 'Submit Inquiry'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
