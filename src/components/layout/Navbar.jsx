import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];
  const isFunctionalPath = (path) => path === '/' || path === '/about';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#fbf8f3]/90 backdrop-blur-xl border-b border-black/10 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.06)]' : 'bg-transparent backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50 cursor-hover-target group">
          <img 
            src="/logo.png" 
            alt="Lead Events Logo" 
            className="h-12 md:h-[4.5rem] w-auto object-contain transition-transform duration-300 group-hover:scale-105 -mb-4 -mt-3" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(event) => {
                if (!isFunctionalPath(link.path)) event.preventDefault();
              }}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-hover-target relative group ${
                location.pathname === link.path
                  ? isScrolled ? 'text-brand-red' : 'text-white'
                  : isScrolled ? 'text-brand-dark/70 hover:text-brand-red' : 'text-brand-text/70 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-red transition-all duration-300 ${
                location.pathname === link.path ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100'
              }`} />
            </Link>
          ))}
          <Button to="/contact" onClick={(event) => event.preventDefault()} variant="primary" className="py-2.5 px-6 ml-2 text-xs uppercase tracking-[0.1em] rounded-none cursor-hover-target">
            Plan Event
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden z-50 relative cursor-hover-target transition-colors ${
            isScrolled ? 'text-brand-dark' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 w-full h-screen bg-brand-dark z-40 flex flex-col items-center justify-center gap-8"
            >
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                >
                  <Link 
                    to={link.path}
                    onClick={(event) => {
                      if (!isFunctionalPath(link.path)) event.preventDefault();
                    }}
                    className={`text-5xl font-black uppercase tracking-tighter hover:text-brand-red transition-colors ${
                      location.pathname === link.path ? 'text-brand-red text-outline' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
