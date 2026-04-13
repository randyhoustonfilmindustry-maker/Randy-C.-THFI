import React from 'react';
import { motion } from 'motion/react';
import { Send, Cpu, FileText, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Send,
      title: "Submit Your Idea",
      desc: "Start by sharing your concept through our structured intake form. Whether it's a one-sentence logline or a rough draft, we begin with what you have."
    },
    {
      icon: Cpu,
      title: "Structuring & Development",
      desc: "A collaborative phase where we break down the story engine, refine characters, and build the world. We ensure every element serves the central vision."
    },
    {
      icon: FileText,
      title: "Final Pitch Materials",
      desc: "We deliver a polished, studio-ready package. This includes your series bible, pitch deck, and refined loglines ready for industry submission."
    },
    {
      icon: CheckCircle,
      title: "Industry Coordination",
      desc: "Strategic guidance on the next steps. We help you identify the right targets and coordinate how to present your materials for maximum impact."
    }
  ];

  return (
    <div className="bg-brand-cream">
      <section className="py-24 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
              The Process
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              From Concept to <span className="italic text-brand-burgundy">Submission</span>.
            </h1>
            <p className="text-xl text-brand-charcoal/60 leading-relaxed">
              A simple, structured step-by-step process designed to reduce friction and focus on what matters: your story.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-charcoal/10" />

            <div className="space-y-24">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-brand-gold font-serif text-4xl italic mb-4">0{i + 1}</span>
                      <h3 className="text-3xl font-serif font-bold text-brand-charcoal mb-4">{step.title}</h3>
                      <p className={`text-brand-charcoal/60 leading-relaxed max-w-md ${i % 2 === 0 ? '' : 'md:text-right'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-brand-charcoal flex items-center justify-center text-brand-gold shadow-xl">
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <FileText className="w-96 h-96" />
          </div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl font-serif font-bold mb-8">Ready to start Step 1?</h2>
            <p className="text-brand-cream/60 text-lg mb-10">
              The first step is always the hardest, but it's also the most important. Let's get your idea out of your head and onto the page.
            </p>
            <button className="bg-brand-burgundy text-brand-cream px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all">
              Submit Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
