import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-cream py-24 min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 bg-brand-burgundy rounded-full flex items-center justify-center mx-auto mb-8">
            <Send className="w-8 h-8 text-brand-cream" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-brand-charcoal mb-4">Message Received.</h2>
          <p className="text-brand-charcoal/60 leading-relaxed">
            Thank you for reaching out. I'll review your project details and get back to you within 48 hours to schedule a consultation.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-10 text-brand-burgundy font-bold uppercase tracking-widest text-sm hover:text-brand-gold transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream">
      <section className="py-24 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              Let's Develop Your <span className="italic text-brand-burgundy">Vision</span>.
            </h1>
            <p className="text-xl text-brand-charcoal/60 leading-relaxed">
              Ready to take your project to the next level? Fill out the form below with as much detail as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 focus:border-brand-burgundy outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 focus:border-brand-burgundy outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Project Type</label>
                    <select className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 focus:border-brand-burgundy outline-none transition-colors appearance-none">
                      <option>TV Series</option>
                      <option>Feature Film</option>
                      <option>Short Film</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Development Stage</label>
                    <select className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 focus:border-brand-burgundy outline-none transition-colors appearance-none">
                      <option>Initial Idea</option>
                      <option>Early Draft</option>
                      <option>Partially Developed</option>
                      <option>Full Script Ready</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">Concept Description</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 focus:border-brand-burgundy outline-none transition-colors resize-none"
                    placeholder="Briefly describe your project..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40 block">What do you need help with?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Series Bible', 'Pitch Deck', 'Logline', 'Full Package'].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-brand-burgundy" />
                        <span className="text-sm text-brand-charcoal/60 group-hover:text-brand-charcoal transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full md:w-auto bg-brand-charcoal text-brand-cream px-12 py-5 font-bold uppercase tracking-widest hover:bg-brand-burgundy transition-all disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div className="bg-brand-charcoal text-brand-cream p-12 space-y-8">
                <h3 className="text-2xl font-serif font-bold text-brand-gold">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-gold mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand-cream/40 mb-1">Email</p>
                      <p className="text-sm">hello@christiancoordinates.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-gold mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand-cream/40 mb-1">Location</p>
                      <p className="text-sm">Los Angeles / Remote</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-brand-gold mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand-cream/40 mb-1">Phone</p>
                      <p className="text-sm">By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 border border-brand-charcoal/10">
                <h4 className="font-serif font-bold text-lg mb-4">Response Time</h4>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  I personally review every inquiry. You can expect a response within 2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
