import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SEO from '../components/SEO';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timeline = [
    { year: '01', title: 'Conceptualization', desc: 'Understanding your brand, objectives, and audience to craft a unique event concept.' },
    { year: '02', title: 'Design & Planning', desc: 'Meticulous planning, 3D designs, and technical schematics to bring the concept to life.' },
    { year: '03', title: 'Execution', desc: 'Flawless on-ground management, production, and technical support.' },
    { year: '04', title: 'Post-Event', desc: 'Analysis, reporting, and amplifying the event\'s success.' }
  ];

  return (
    <>
      <SEO title="About Us" />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-red/10 blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Agency</span>
            <h1 className="text-[8vw] sm:text-[6vw] font-black uppercase tracking-tighter leading-none mb-8">
              We <span className="text-outline">Engineer</span> <br/>Experiences.
            </h1>
            <p className="text-2xl text-brand-text/60 leading-relaxed font-light max-w-2xl">
              Lead Events is driven by a passion for perfection and a commitment to elevating brand presence through impactful live events in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-brand-gray relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-12 rounded-none border border-white/5 bg-brand-dark relative group overflow-hidden cursor-hover-target"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-[40px] group-hover:bg-brand-red/20 transition-colors duration-700" />
              <h2 className="text-3xl font-bold mb-6 tracking-tight uppercase">Our Mission</h2>
              <p className="text-brand-text/50 text-xl leading-relaxed font-light">
                To deliver innovative, seamless, and high-impact event solutions that empower brands to connect with their audiences authentically and powerfully.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="p-12 rounded-none border border-white/5 bg-brand-dark relative group overflow-hidden cursor-hover-target"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-[40px] group-hover:bg-brand-red/20 transition-colors duration-700" />
              <h2 className="text-3xl font-bold mb-6 tracking-tight uppercase">Our Vision</h2>
              <p className="text-brand-text/50 text-xl leading-relaxed font-light">
                To be the region's most trusted and creatively fearless event management agency, setting new benchmarks for live experiences in the Middle East.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Timeline */}
      <section className="py-40 bg-brand-dark relative" ref={containerRef}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-[6vw] sm:text-[4vw] font-black uppercase tracking-tighter leading-none mb-6">The Journey</h2>
            <p className="text-xl text-brand-text/50 max-w-2xl mx-auto font-light">Our proven methodology for delivering excellence.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Background Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/5" />
            
            {/* Animated Draw Line */}
            <motion.div 
              className="absolute left-[27px] top-4 w-[2px] bg-brand-red origin-top shadow-[0_0_20px_rgba(230,57,70,0.8)]"
              style={{ height: lineHeight }}
            />
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-12 mb-24 last:mb-0 relative cursor-hover-target group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-dark border-2 border-brand-red flex items-center justify-center font-bold text-xl relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-red shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                  {item.year}
                </div>
                <div className="pt-2">
                  <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase">{item.title}</h3>
                  <p className="text-brand-text/50 text-xl font-light leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
