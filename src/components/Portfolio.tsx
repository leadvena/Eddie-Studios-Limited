import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../constants';
import { cn } from '../lib/utils';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'weddings', 'corporate', 'family', 'events', 'real-estate'];

  const filteredItems = filter === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-studio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12">
            The Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold py-2 border-b-2 transition-all",
                  filter === cat ? "text-gold border-gold" : "text-white/40 border-transparent hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={`Portfolio ${item.id}`}
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="border border-white/20 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-gold">{item.category}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
