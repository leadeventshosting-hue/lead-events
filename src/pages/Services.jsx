import { motion } from 'framer-motion';
import { Briefcase, Star, Users, Calendar, MonitorPlay, Zap, Layout, Settings } from 'lucide-react';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    { title: "Corporate Events", desc: "Galas, award ceremonies, and high-level corporate gatherings designed to impress stakeholders.", icon: <Briefcase className="w-12 h-12 text-brand-red mb-8" />, colSpan: "md:col-span-2 md:row-span-2" },
    { title: "Brand Activations", desc: "Engaging and immersive brand experiences that leave a lasting impression on your target audience.", icon: <Star className="w-10 h-10 text-brand-red mb-6" />, colSpan: "md:col-span-1 md:row-span-1" },
    { title: "Exhibitions & Stands", desc: "Bespoke exhibition stand design and build that maximizes footfall and engagement.", icon: <Layout className="w-10 h-10 text-brand-red mb-6" />, colSpan: "md:col-span-1 md:row-span-1" },
    { title: "Conferences", desc: "End-to-end management of seminars, summits, and international conferences.", icon: <Calendar className="w-12 h-12 text-brand-red mb-8" />, colSpan: "md:col-span-2 md:row-span-2" },
    { title: "Product Launches", desc: "Cinematic reveals and high-energy launch events that generate buzz.", icon: <Zap className="w-10 h-10 text-brand-red mb-6" />, colSpan: "md:col-span-1 md:row-span-1" },
    { title: "Stage & AV", desc: "State-of-the-art audio, visual, and lighting solutions for dramatic effect.", icon: <MonitorPlay className="w-10 h-10 text-brand-red mb-6" />, colSpan: "md:col-span-1 md:row-span-1" },
    { title: "Event Coordination", desc: "Seamless logistics, guest management, and on-the-day execution.", icon: <Users className="w-10 h-10 text-brand-red mb-6" />, colSpan: "md:col-span-1 md:row-span-1" },
    { title: "Creative Concepts", desc: "Innovative event themes, 3D mapping, and immersive digital content.", icon: <Settings className="w-10 h-10 text-brand-red mb-6" />, colSpan: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <>
      <SEO title="Our Services" />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-brand-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 block">What We Do</span>
            <h1 className="text-[8vw] sm:text-[6vw] font-black uppercase tracking-tighter leading-none mb-8">
              Flawless <br/><span className="text-outline">Execution.</span>
            </h1>
            <p className="text-2xl text-brand-text/60 leading-relaxed font-light max-w-2xl">
              We offer a full spectrum of event management services, combining creative vision with technical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Services Grid */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative group overflow-hidden bg-brand-lightGray border border-white/5 p-10 flex flex-col justify-end cursor-hover-target rounded-sm ${service.colSpan}`}
              >
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/0 rounded-full blur-[60px] group-hover:bg-brand-red/20 transition-colors duration-700 pointer-events-none" />
                
                {service.icon}
                <h3 className={`${service.colSpan.includes('row-span-2') ? 'text-4xl' : 'text-2xl'} font-bold mb-4 tracking-tight relative z-10`}>{service.title}</h3>
                <p className="text-brand-text/50 text-lg font-light relative z-10 line-clamp-3">{service.desc}</p>
                
                {/* Subtle Hover Reveal */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-brand-red/50 flex items-center justify-center text-brand-red">
                    +
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
