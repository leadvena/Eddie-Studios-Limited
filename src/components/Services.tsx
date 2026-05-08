import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-none uppercase">
              The <br />
              <span className="text-white/30 italic uppercase font-light">Collective</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm uppercase tracking-wide leading-relaxed">
            From private portraits to large scale commercial shoots, our studio is equipped for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-default"
            >
              <div className="mb-6 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">Pricing</span>
                <span className="text-[11px] font-bold uppercase text-gold">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
