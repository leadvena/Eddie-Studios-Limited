import { motion } from 'motion/react';
import { Star, Quote, Mail, Phone as PhoneIcon, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal relative overflow-hidden">
      {/* Decorative Quote Mark */}
      <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-white/[0.03] rotate-12" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 uppercase">
          Client <span className="text-white/30 italic">Voices</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-studio-dark border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/60 mb-8 italic leading-relaxed font-light">
                "{t.text}"
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-sm font-bold uppercase tracking-widest">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-gold mt-1">Google Review</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudioRental() {
  return (
    <section id="rental" className="py-24 px-6 md:px-12 bg-studio-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1493127317276-17775167e412?auto=format&fit=crop&q=80"
            alt="Studio Space"
            className="w-full grayscale brightness-75 border-l-8 border-gold"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Studio Hire
          </span>
          <h2 className="text-4xl md:text-7xl font-serif uppercase mb-8 leading-[0.9]">
            The <br />
            <span className="text-white/30 italic font-light">Blank Canvas</span>
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed max-w-lg font-light text-sm">
            Our Miles Platting studio is available for hire by independent photographers, videographers, and content creators. High ceilings, industrial character, and professional equipment included.
          </p>
          
          <div className="space-y-6 mb-12">
            {[
              { label: 'Half Day (4 hrs)', price: '£150' },
              { label: 'Full Day (8 hrs)', price: '£250' },
              { label: 'Weekly Rate', price: 'Contact Us' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4 border-b border-white/10">
                <span className="text-xs uppercase font-bold tracking-widest">{item.label}</span>
                <span className="text-sm font-bold text-gold uppercase">{item.price}</span>
              </div>
            ))}
          </div>
          
          <a
            href="#book"
            className="inline-block border border-gold text-gold px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-studio-dark transition-all"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            The Story
          </span>
          <h2 className="text-4xl md:text-7xl font-serif uppercase mb-8 leading-[0.9]">
            About <br />
            <span className="text-white/30 italic font-light">Eddie Studios</span>
          </h2>
          <div className="space-y-6 text-white/50 text-[13px] leading-relaxed max-w-lg font-light">
            <p>
              Hi, I'm Eddie. Welcome to my space. I started this studio with a simple belief: every person, every brand, and every moment deserves to be seen through a lens of excellence.
            </p>
            <p>
              Based in the industrial heart of Miles Platting, Manchester, we've transformed a piece of history into a Sanctuary for creativity. We don't just take pictures; we craft visual legacies.
            </p>
            <p>
              Whether we're shooting a high-profile corporate campaign or a quiet family moment, our approach remains the same: meticulous technical skill paired with a genuine human connection.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-2xl font-bold text-gold">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Years exp</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">500+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">5.0</p>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Rating</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
            alt="Eddie at work"
            className="w-full grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border-[20px] border-studio-dark flex items-center justify-center pointer-events-none">
             <div className="w-full h-full border border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookingForm() {
  return (
    <section id="book" className="py-24 px-6 md:px-12 bg-studio-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Inquiry
          </span>
          <h2 className="text-4xl md:text-7xl font-serif uppercase mb-4">
            Book the <span className="text-white/30 italic font-light">Studio</span>
          </h2>
          <p className="text-white/40 text-[11px] uppercase tracking-widest max-w-md mx-auto">
            Contact us to secure your session.
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Phone Number</label>
              <input type="tel" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors" placeholder="+44 7000 000000" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Service Type</label>
              <select className="w-full bg-studio-dark border-b border-white/20 py-3 focus:border-gold outline-none transition-colors text-white/60 appearance-none">
                <option>Weddings</option>
                <option>Corporate & Headshots</option>
                <option>Family & Newborn</option>
                <option>Events</option>
                <option>Real Estate</option>
                <option>Studio Hire</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Preferred Date</label>
            <input type="date" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors text-white/40" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Message / Details</label>
            <textarea className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors min-h-[100px]" placeholder="Tell us about your project..."></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-studio-dark py-6 text-sm font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors mt-8"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gold grid place-items-center text-studio-dark font-display font-bold text-lg">
                E
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase">
                Eddie Studios <span className="text-gold">LTD</span>
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed uppercase tracking-widest mb-8">
              Excellence in visual storytelling. <br />
              Based in Manchester, serving the UK.
            </p>
            <div className="flex gap-4">
               {/* Click to chat WhatsApp */}
               <a href="https://wa.me/447412705560" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
                 <PhoneIcon className="w-4 h-4" />
               </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-gold">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Gallery', 'About', 'Studio Hire'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-gold">Location</h4>
            <div className="space-y-4 text-white/30 text-xs uppercase tracking-widest leading-loose">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                Miles Platting<br />Manchester<br />M40 8BB
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                hello@eddiestudios.co.uk
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 h-48 md:h-full min-h-[200px]">
            {/* Google Maps Embed Placeholder - User requested embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.9163236717544!2d-2.215574!3d53.487679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb173ea6142c1%3A0x6e84d3b6f9a0c7c0!2sMiles%20Platting%2C%20Manchester%20M40%208BB!5e0!3m2!1sen!2suk!4v1715151515151!5m2!1sen!2suk"
              className="w-full h-full grayscale opacity-50 contrast-125 border border-white/10"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            © 2026 Eddie Studios Limited. Registered in England & Wales.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
