import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Christian has an uncanny ability to see the 'engine' of a story. He took my sprawling fantasy concept and helped me distill it into a pitch that actually made sense to executives.",
      author: "Sarah J.",
      role: "Independent Screenwriter",
      project: "Fantasy Series Development"
    },
    {
      quote: "I was struggling with my logline for months. In one session, Christian helped me find the hook that was missing. The clarity he brings is invaluable.",
      author: "Michael R.",
      role: "Director/Producer",
      project: "Feature Film Pitch"
    },
    {
      quote: "The series bible we built together is the most professional document I've ever owned. It gives me so much confidence going into meetings.",
      author: "David L.",
      role: "Creator",
      project: "Sci-Fi Anthology"
    }
  ];

  return (
    <div className="bg-brand-cream">
      <section className="py-24 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
              Social Proof
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              What Creators <span className="italic text-brand-burgundy">Say</span>.
            </h1>
            <p className="text-xl text-brand-charcoal/60 leading-relaxed">
              Real feedback from writers and storytellers who have transformed their projects through our collaborative development process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 border border-brand-charcoal/5 relative group hover:shadow-2xl transition-all duration-500">
                <Quote className="w-10 h-10 text-brand-gold/20 absolute top-8 right-8 group-hover:text-brand-gold/40 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-brand-charcoal/80 italic leading-relaxed mb-8 text-lg">
                  "{t.quote}"
                </p>

                <div className="pt-8 border-t border-brand-charcoal/5">
                  <p className="font-serif font-bold text-brand-charcoal">{t.author}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/40 mt-1">{t.role}</p>
                  <p className="text-[10px] text-brand-burgundy font-bold mt-2 uppercase tracking-tighter">Project: {t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-brand-charcoal text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-video bg-brand-cream/5 rounded-sm overflow-hidden grayscale">
                <img 
                  src="https://picsum.photos/seed/case-study/800/450" 
                  alt="Case Study" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-brand-charcoal">
                  <Star className="w-8 h-8 fill-brand-charcoal" />
                </div>
              </div>
            </div>

            <div>
              <span className="text-brand-gold font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
                Featured Case Study
              </span>
              <h2 className="text-4xl font-serif font-bold mb-8">The "Neon Noir" Transformation</h2>
              <div className="space-y-6 text-brand-cream/70 leading-relaxed">
                <p>
                  <strong className="text-brand-cream">The Challenge:</strong> A creator had a 120-page script for a sci-fi noir but couldn't explain the "why now" or the series potential to producers.
                </p>
                <p>
                  <strong className="text-brand-cream">The Work:</strong> We spent 4 weeks breaking down the story engine, identifying the unique world-building elements, and creating a 25-page series bible.
                </p>
                <p>
                  <strong className="text-brand-cream">The Outcome:</strong> The project was optioned within two months of finishing the pitch package. The producer specifically cited the bible's clarity as the deciding factor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
