import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-cream py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-charcoal/5 -skew-x-12 transform translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6">
              Independent Project Development
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-charcoal leading-[0.9] mb-8 text-balance">
              Turning Raw Ideas Into <span className="italic text-brand-burgundy">Studio-Ready</span> Pitches.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 max-w-lg mb-10 leading-relaxed">
              I help writers, creators, and storytellers find clarity, structure, and the perfect industry positioning for their projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-brand-cream bg-brand-charcoal overflow-hidden transition-all hover:bg-brand-burgundy"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Work With Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-brand-charcoal border border-brand-charcoal/20 hover:border-brand-charcoal transition-all"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-cream bg-brand-charcoal/10 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/person${i}/100/100`} 
                      alt="Client" 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-serif italic text-brand-charcoal/80">
                  "Christian transformed my messy draft into a professional series bible."
                </p>
                <p className="text-brand-charcoal/40 uppercase tracking-widest text-[10px] mt-1">
                  — Independent Screenwriter
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-brand-charcoal/10 overflow-hidden rounded-sm relative group">
              <img
                src="https://picsum.photos/seed/film-set/800/1000"
                alt="Film Development"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-brand-cream">
                  <div className="w-12 h-12 rounded-full border border-brand-cream/30 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 fill-brand-cream" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">Featured Project</p>
                    <p className="font-serif text-lg">The Development Process</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center text-center p-4 shadow-xl rotate-12">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-brand-charcoal leading-tight">
                Studio Ready <br /> Materials
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
