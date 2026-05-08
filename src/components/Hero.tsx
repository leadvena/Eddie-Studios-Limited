import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center border-b border-white/10">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0A]/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2070"
          alt="Studio Portrait"
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center border-x border-white/5 h-full">
        <div className="w-full md:w-7/12 flex flex-col justify-center py-20 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
            <span className="text-[9px] uppercase tracking-[1em] text-white/20 whitespace-nowrap">EST. 2018 — MANCHESTER UK</span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Premium Studio
            </span>
            <h1 className="text-[64px] md:text-[100px] leading-[0.85] font-serif mb-10 tracking-tight">
              Manchester's <br />
              <span className="italic font-light">Studio</span> for <br />
              <span className="text-gold">Every</span> Moment
            </h1>
            <p className="text-sm md:text-base font-light text-white/50 leading-relaxed max-w-md mb-12">
              A full-service sanctuary for high-end photography in the heart of Miles Platting. From corporate legacy to newborn wonder, we capture life’s vital narratives with editorial precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold text-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-0.5"
              >
                Book a Session
              </button>
              <button
                onClick={() => document.getElementById('rental')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/20 px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-gold transition-all transform hover:-translate-y-0.5"
              >
                Studio Rental
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex w-5/12 h-full border-l border-white/10 flex-col justify-center items-center p-12">
           <div className="w-full h-[60%] border border-white/10 p-2 group transition-all">
              <div className="w-full h-full bg-charcoal overflow-hidden brightness-75 group-hover:brightness-100 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                  alt="Featured Shot"
                />
              </div>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
      />
    </section>
  );
}
