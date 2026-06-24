import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-xl pt-8 pb-6 border-t border-white/10 relative overflow-hidden mt-auto">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-brand-red/5 blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 mb-6">
          
          {/* Brand Logo */}
          <div className="md:col-span-5 space-y-2">
            <Link to="/" onClick={(e) => e.preventDefault()} className="inline-block cursor-hover-target group -mt-10 -mb-4">
              <img
                src="/logo.png"
                alt="Lead Events Logo"
                className="h-28 md:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-brand-text/60 leading-relaxed max-w-sm text-lg font-light">
              Engineering premium live experiences and world-class brand activations across the UAE.
            </p>
            <div className="flex items-center gap-6 text-brand-text/40 pt-2">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-hover-target"><FacebookIcon /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-hover-target"><InstagramIcon /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-hover-target"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} onClick={(e) => e.preventDefault()} className="text-brand-text/60 hover:text-white transition-colors flex items-center group cursor-hover-target text-sm tracking-wide">
                    {link} <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-brand-text/60">
                <MapPin size={18} className="text-brand-red shrink-0 mt-1 opacity-50" />
                <span className="text-sm tracking-wide leading-relaxed">Warehouse 6, Street 29<br/>Industrial Area 5, Sharjah, UAE</span>
              </li>
              <li className="flex items-center gap-4 text-brand-text/60">
                <Phone size={18} className="text-brand-red shrink-0 opacity-50" />
                <a href="tel:+971509689671" onClick={(e) => e.preventDefault()} className="text-sm tracking-wide hover:text-white transition-colors cursor-hover-target">+971-50-9689671</a>
              </li>
              <li className="flex items-center gap-4 text-brand-text/60">
                <Mail size={18} className="text-brand-red shrink-0 opacity-50" />
                <a href="mailto:info@leadevents.com" onClick={(e) => e.preventDefault()} className="text-sm tracking-wide hover:text-white transition-colors cursor-hover-target">info@leadevents.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-text/40 text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Lead Events. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-wider uppercase text-brand-text/40">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-hover-target">Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-hover-target">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
