import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle, RefreshCw, Copy, Send } from 'lucide-react';
import { checkPitchReadiness, refineLogline } from '@/services/gemini';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

export default function AITools() {
  const [activeTool, setActiveTool] = React.useState<'pitch' | 'logline'>('pitch');
  const [input, setInput] = React.useState('');
  const [loglineDetails, setLoglineDetails] = React.useState({
    protagonist: '',
    world: '',
    conflict: '',
    stakes: ''
  });
  const [result, setResult] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCheckPitch = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setResult(null);
    try {
      const feedback = await checkPitchReadiness(input);
      setResult(feedback || "No feedback received.");
    } catch (error) {
      setResult("Error generating feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefineLogline = async () => {
    if (!loglineDetails.protagonist || !loglineDetails.world) return;
    setIsLoading(true);
    setResult(null);
    try {
      const refined = await refineLogline(loglineDetails);
      setResult(refined || "No variations generated.");
    } catch (error) {
      setResult("Error generating loglines. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="py-24 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-burgundy font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
              AI-Powered Development
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal leading-tight mb-8">
              Intelligence Meets <span className="italic text-brand-burgundy">Industry</span>.
            </h1>
            <p className="text-xl text-brand-charcoal/60 leading-relaxed">
              Prototype your ideas with our Gemini-powered tools. Get instant feedback on your concept or refine your logline to industry standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => { setActiveTool('pitch'); setResult(null); }}
              className={cn(
                "px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all",
                activeTool === 'pitch' ? "bg-brand-charcoal text-brand-cream" : "bg-white text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-burgundy"
              )}
            >
              Pitch Readiness Checker
            </button>
            <button
              onClick={() => { setActiveTool('logline'); setResult(null); }}
              className={cn(
                "px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all",
                activeTool === 'logline' ? "bg-brand-charcoal text-brand-cream" : "bg-white text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-burgundy"
              )}
            >
              Logline Refiner
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Input Side */}
            <div className="bg-white p-10 border border-brand-charcoal/5 shadow-sm">
              <AnimatePresence mode="wait">
                {activeTool === 'pitch' ? (
                  <motion.div
                    key="pitch"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 text-brand-burgundy mb-4">
                      <Sparkles className="w-6 h-6" />
                      <h3 className="text-2xl font-serif font-bold">Concept Analysis</h3>
                    </div>
                    <p className="text-sm text-brand-charcoal/60 mb-6">
                      Paste your logline or a one-paragraph concept below. Our AI will analyze it for premise clarity, genre fit, and world distinctiveness.
                    </p>
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="e.g. In a world where memories can be traded like currency, a disgraced detective must find his own stolen past before it's sold to the highest bidder..."
                      className="w-full h-48 bg-brand-cream/30 border border-brand-charcoal/10 p-4 outline-none focus:border-brand-burgundy transition-colors resize-none text-brand-charcoal"
                    />
                    <button
                      onClick={handleCheckPitch}
                      disabled={isLoading || !input.trim()}
                      className="w-full bg-brand-burgundy text-brand-cream py-4 font-bold uppercase tracking-widest hover:bg-brand-charcoal transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
                      {isLoading ? "Analyzing..." : "Analyze Concept"}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="logline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 text-brand-burgundy mb-4">
                      <RefreshCw className="w-6 h-6" />
                      <h3 className="text-2xl font-serif font-bold">Logline Refiner</h3>
                    </div>
                    <p className="text-sm text-brand-charcoal/60 mb-6">
                      Fill in the key elements of your story, and we'll generate 3 industry-standard logline variations.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 block mb-1">Protagonist</label>
                        <input 
                          value={loglineDetails.protagonist}
                          onChange={(e) => setLoglineDetails({...loglineDetails, protagonist: e.target.value})}
                          placeholder="e.g. A disgraced detective"
                          className="w-full bg-brand-cream/30 border border-brand-charcoal/10 p-3 outline-none focus:border-brand-burgundy transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 block mb-1">World / Setting</label>
                        <input 
                          value={loglineDetails.world}
                          onChange={(e) => setLoglineDetails({...loglineDetails, world: e.target.value})}
                          placeholder="e.g. A futuristic city where memories are currency"
                          className="w-full bg-brand-cream/30 border border-brand-charcoal/10 p-3 outline-none focus:border-brand-burgundy transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 block mb-1">Conflict / Inciting Incident</label>
                        <input 
                          value={loglineDetails.conflict}
                          onChange={(e) => setLoglineDetails({...loglineDetails, conflict: e.target.value})}
                          placeholder="e.g. His own past is stolen"
                          className="w-full bg-brand-cream/30 border border-brand-charcoal/10 p-3 outline-none focus:border-brand-burgundy transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 block mb-1">Stakes</label>
                        <input 
                          value={loglineDetails.stakes}
                          onChange={(e) => setLoglineDetails({...loglineDetails, stakes: e.target.value})}
                          placeholder="e.g. Before it's sold and his identity is erased"
                          className="w-full bg-brand-cream/30 border border-brand-charcoal/10 p-3 outline-none focus:border-brand-burgundy transition-colors"
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleRefineLogline}
                      disabled={isLoading || !loglineDetails.protagonist || !loglineDetails.world}
                      className="w-full bg-brand-burgundy text-brand-cream py-4 font-bold uppercase tracking-widest hover:bg-brand-charcoal transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                      {isLoading ? "Generating..." : "Refine Logline"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Output Side */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {!result && !isLoading ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-brand-charcoal/10 rounded-sm"
                  >
                    <div className="w-16 h-16 bg-brand-charcoal/5 rounded-full flex items-center justify-center mb-6">
                      <Send className="w-6 h-6 text-brand-charcoal/20" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-brand-charcoal/40 mb-2">Awaiting Input</h4>
                    <p className="text-sm text-brand-charcoal/30">Your AI-generated feedback will appear here.</p>
                  </motion.div>
                ) : isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-12"
                  >
                    <div className="w-12 h-12 border-4 border-brand-burgundy border-t-transparent rounded-full animate-spin mb-6" />
                    <p className="text-brand-charcoal/60 font-serif italic">Gemini is analyzing your project...</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-brand-charcoal text-brand-cream p-10 shadow-2xl relative"
                  >
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-cream/10">
                      <h4 className="text-brand-gold font-serif text-xl font-bold">Analysis Report</h4>
                      <button 
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-brand-cream/10 rounded-full transition-colors relative group"
                      >
                        {copied ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-charcoal text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {copied ? 'Copied!' : 'Copy'}
                        </span>
                      </button>
                    </div>
                    
                    <div className="prose prose-invert prose-sm max-w-none prose-headings:font-serif prose-headings:text-brand-gold prose-p:text-brand-cream/80 prose-strong:text-brand-cream">
                      <ReactMarkdown>{result!}</ReactMarkdown>
                    </div>

                    <div className="mt-12 pt-8 border-t border-brand-cream/10">
                      <p className="text-xs text-brand-cream/40 italic mb-4">
                        This feedback is AI-generated and intended as a starting point. For a deep-dive development session, consider booking a consultation.
                      </p>
                      <button className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                        Book Full Session →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
