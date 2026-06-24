import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-brand-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/10 blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Connect</span>
            <h1 className="text-[8vw] sm:text-[6vw] font-black uppercase tracking-tighter leading-none mb-8">
              Start a <br/><span className="text-outline">Project.</span>
            </h1>
            <p className="text-2xl text-brand-text/60 leading-relaxed font-light max-w-2xl">
              Let's collaborate to engineer an unforgettable event experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer cursor-hover-target" placeholder="First Name" />
                    <label className="absolute left-0 -top-6 text-sm font-bold tracking-widest uppercase text-brand-text/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:font-light peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-red">First Name</label>
                  </div>
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer cursor-hover-target" placeholder="Last Name" />
                    <label className="absolute left-0 -top-6 text-sm font-bold tracking-widest uppercase text-brand-text/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:font-light peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-red">Last Name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer cursor-hover-target" placeholder="Email" />
                    <label className="absolute left-0 -top-6 text-sm font-bold tracking-widest uppercase text-brand-text/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:font-light peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-red">Email Address</label>
                  </div>
                  <div className="relative group">
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer cursor-hover-target" placeholder="Phone" />
                    <label className="absolute left-0 -top-6 text-sm font-bold tracking-widest uppercase text-brand-text/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:font-light peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-red">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer cursor-hover-target resize-none" placeholder="Message"></textarea>
                  <label className="absolute left-0 -top-6 text-sm font-bold tracking-widest uppercase text-brand-text/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:font-light peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-red">Project Details</label>
                </div>

                <Button type="submit" variant="primary" className="py-5 px-12 text-sm uppercase tracking-[0.2em] rounded-none cursor-hover-target w-full md:w-auto">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-text/40 mb-6">Headquarters</h3>
                <p className="text-2xl font-light leading-relaxed mb-6">
                  Boulevard Plaza, Tower 1<br/>Business Bay<br/>Dubai, United Arab Emirates
                </p>
                <div className="flex gap-4">
                  <a href="mailto:info@leadevents.ae" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors cursor-hover-target">
                    <Mail size={20} />
                  </a>
                  <a href="tel:+971501234567" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors cursor-hover-target">
                    <Phone size={20} />
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="bg-brand-lightGray border border-white/5 p-8 rounded-none relative group cursor-hover-target">
                <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-brand-red/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <h3 className="text-2xl font-bold tracking-tighter uppercase">Available Now</h3>
                  </div>
                  <p className="text-brand-text/50 font-light mb-8">
                    Skip the form and chat directly with an event specialist on WhatsApp.
                  </p>
                  <Button href="https://wa.me/971501234567" target="_blank" rel="noreferrer" variant="outline" className="w-full py-4 text-xs tracking-[0.2em]">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
