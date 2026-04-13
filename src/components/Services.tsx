import React from 'react';
import { BookOpen, Presentation, Layout, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Series Bible Development",
      desc: "Shaping the world, characters, and story engine. I help you build a comprehensive document that proves your series has 'legs'.",
      details: ["World Building", "Character Arcs", "Season Outlines", "Tone & Style"]
    },
    {
      icon: Presentation,
      title: "Pitch Package Assembly",
      desc: "Creating the essential tools for the room. Loglines, synopses, format documents, and tone decks that capture attention.",
      details: ["Logline Refinement", "One-Pagers", "Pitch Decks", "Verbal Pitch Prep"]
    },
    {
      icon: Layout,
      title: "Concept Structuring",
      desc: "Taking early-stage ideas and translating them into a professional format that the industry recognizes and respects.",
      details: ["Premise Evaluation", "Structural Analysis", "Genre Alignment", "Market Positioning"]
    },
    {
      icon: Target,
      title: "Industry Alignment",
      desc: "Strategic advice on how to position your project for specific platforms, networks, or production companies.",
      details: ["Market Research", "Platform Targeting", "Executive Summary", "Strategic Roadmap"]
    }
  ];

  return (
    <div className="bg-brand-cream">
      <section className="py-24 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
              The Offering
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              Professional Development <span className="italic text-brand-burgundy">Services</span>.
            </h1>
            <p className="text-xl text-brand-charcoal/60 leading-relaxed">
              We work on every critical step before production, ensuring your project is ready for the industry's highest level of scrutiny.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white p-12 border border-brand-charcoal/5 hover:border-brand-burgundy transition-all duration-500">
                <service.icon className="w-10 h-10 text-brand-burgundy mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{service.title}</h3>
                <p className="text-brand-charcoal/60 mb-8 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mb-10">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-brand-charcoal/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-burgundy group-hover:gap-4 transition-all"
                >
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal text-brand-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Not sure where to start?</h2>
          <p className="text-brand-cream/60 mb-10 leading-relaxed">
            Every project is unique. I offer custom development packages tailored to your specific needs and stage of development.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-gold text-brand-charcoal px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
