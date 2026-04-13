import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'AI Tools', path: '/ai-tools' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <Film className="w-8 h-8 text-brand-burgundy group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-serif font-bold tracking-tight text-brand-charcoal">
                Christian <span className="text-brand-burgundy">Coordinates</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium uppercase letter-spacing-wide transition-colors hover:text-brand-burgundy",
                    location.pathname === item.path ? "text-brand-burgundy" : "text-brand-charcoal/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-brand-charcoal hover:text-brand-burgundy transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-cream border-t border-brand-charcoal/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-3 py-4 text-base font-medium uppercase tracking-wider",
                      location.pathname === item.path ? "text-brand-burgundy" : "text-brand-charcoal/60"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-charcoal text-brand-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Film className="w-6 h-6 text-brand-gold" />
                <span className="text-lg font-serif font-bold tracking-tight">
                  Christian <span className="text-brand-gold">Coordinates</span>
                </span>
              </div>
              <p className="text-brand-cream/60 text-sm max-w-xs leading-relaxed">
                Independent project development coordinator. Helping creators turn raw ideas into studio-ready pitches.
              </p>
            </div>
            
            <div>
              <h4 className="text-brand-gold font-serif text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-brand-cream/60">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-brand-gold transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-brand-gold font-serif text-lg mb-6">Contact</h4>
              <p className="text-brand-cream/60 text-sm mb-4">
                Ready to develop your next project?
              </p>
              <Link
                to="/contact"
                className="inline-block border border-brand-gold text-brand-gold px-6 py-2 text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-brand-cream/10 text-center text-xs text-brand-cream/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Christian Coordinates. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
