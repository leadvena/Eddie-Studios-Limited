import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Studio Hire', href: '#rental' },
    { name: 'Book', href: '#book' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-10 flex items-center justify-between',
        isScrolled ? 'bg-studio-dark/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rotate-45">
          <span className="-rotate-45 font-serif text-xl font-bold text-gold">E</span>
        </div>
        <div className="flex flex-col">
          <span className="font-serif font-light text-xl tracking-[0.2em] leading-none uppercase">
            Eddie Studios
          </span>
          <span className="text-[10px] tracking-[0.5em] text-gold opacity-80 uppercase font-medium">Limited</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[11px] uppercase tracking-[0.2em] font-medium opacity-70 hover:opacity-100 hover:text-gold transition-all"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/447412705560"
          target="_blank"
          rel="noreferrer"
          className="bg-white/5 border border-white/20 hover:border-gold px-6 py-2.5 text-[10px] tracking-widest uppercase flex items-center gap-2 group transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:shadow-[0_0_8px_#25D366]"></span>
          WhatsApp Chat
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-studio-dark z-[60] flex flex-col p-12"
          >
            <button
              className="self-end text-white mb-12"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-10 h-10" />
            </button>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-bold uppercase tracking-tighter hover:text-gold"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto flex gap-6">
              <Instagram className="w-6 h-6 text-white/50 hover:text-gold transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 text-white/50 hover:text-gold transition-colors cursor-pointer" />
              <Phone className="w-6 h-6 text-white/50 hover:text-gold transition-colors cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
