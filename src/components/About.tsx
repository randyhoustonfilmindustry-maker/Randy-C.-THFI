import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-brand-cream">
      {/* Hero Section */}
      <section className="py-24 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
              The Philosophy
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              I don't change your vision — I help the industry <span className="italic">see it</span>.
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="prose prose-lg text-brand-charcoal/80 leading-relaxed">
                <p className="text-xl font-medium text-brand-charcoal mb-6">
                  I am an independent project development coordinator, not a traditional agent or manager. 
                </p>
                <p>
                  In an industry where thousands of ideas are pitched every day, the difference between a "pass" and a "buy" often comes down to clarity, structure, and positioning. I bridge the gap between raw creative energy and the specific needs of studio executives and development teams.
                </p>
                <p>
                  My background in the film and TV industry has taught me how projects are actually evaluated. I've seen brilliant ideas fail because they weren't "packaged" correctly, and mediocre ideas succeed because they were perfectly positioned.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-brand-charcoal mb-2">10+</h3>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-brand-charcoal mb-2">50+</h3>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">Projects Developed</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-brand-charcoal/5 rounded-sm overflow-hidden grayscale">
                <img 
                  src="https://picsum.photos/seed/office/800/1000" 
                  alt="Creative Space" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 p-12 bg-brand-charcoal text-brand-cream max-w-sm hidden md:block">
                <p className="font-serif italic text-xl leading-relaxed">
                  "The goal isn't just to get a meeting. The goal is to be the easiest 'yes' they've had all week."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 bg-brand-charcoal text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">What Sets Me Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Clarity Over Hype",
                desc: "I don't use buzzwords. I focus on the core story engine and why it matters now."
              },
              {
                title: "Executive Perspective",
                desc: "I structure materials based on how development teams actually read and evaluate them."
              },
              {
                title: "Collaborative Spirit",
                desc: "I work with you, not for you. Your vision remains yours; I just help sharpen the tools."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4 p-8 border border-brand-cream/10 hover:border-brand-gold transition-colors">
                <span className="text-brand-gold font-serif text-2xl italic">0{i + 1}</span>
                <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                <p className="text-brand-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
