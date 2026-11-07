import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

export default function About() {
  const containerRef = useRef(null);
  const ctaRef = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(0);
  const [ctaMouse, setCtaMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress: pageScrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yHeroBg = useTransform(pageScrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHeroText = useTransform(pageScrollYProgress, [0, 0.2], [1, 0]);

  const handleCtaMouseMove = (e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
    setCtaMouse({ x, y });
  };

  const storyChapters = [
    {
      year: '2008',
      title: 'The Genesis',
      subtitle: 'A New Standard',
      text: 'Lead Events emerged from a singular vision: to break the mold of conventional events in the UAE. We set out to turn space, light, and sound into unforgettable brand stories.',
      stat: '50+ Mega Events'
    },
    {
      year: '2011',
      title: 'The Evolution',
      subtitle: 'Architects of Space',
      text: 'As the landscape transformed, so did we. We integrated state-of-the-art interactive tech, 3D design mapping, and ultra-premium architectural structures, solidifying our footprint among luxury brands.',
      stat: '250+ Projects'
    },
    {
      year: '2016',
      title: 'The Present & Beyond',
      subtitle: 'Limitless Innovation',
      text: 'Today, we stand as creative engineers. From high-profile government summits to immersive brand activations, we continue to push the boundaries of what is possible, creating legacy experiences.',
      stat: '500+ Productions'
    }
  ];

  const timeline = [
    { year: '01', title: 'Conceptualization', desc: 'Understanding your brand, objectives, and audience to craft a unique event concept.' },
    { year: '02', title: 'Design & Planning', desc: 'Meticulous planning, 3D designs, and technical schematics to bring the concept to life.' },
    { year: '03', title: 'Execution', desc: 'Flawless on-ground management, production, and technical support.' },
    { year: '04', title: 'Post-Event', desc: 'Analysis, reporting, and amplifying the event\'s success.' }
  ];

  const seoDescription = 'About Lead Events, a premium event management company in Dubai and the UAE delivering corporate events, exhibitions, conferences, brand activations, and luxury live experiences.';
  const seoKeywords = 'about Lead Events UAE, event management company Dubai, event management company UAE, corporate event planners Dubai, brand activation agency UAE, conference event management Dubai, exhibition stand event company UAE, luxury event planning UAE';
  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.leadevents.com/about#webpage',
    name: 'About Lead Events',
    description: seoDescription,
    url: 'https://www.leadevents.com/about',
    isPartOf: { '@id': 'https://www.leadevents.com/#website' },
    about: { '@id': 'https://www.leadevents.com/#organization' }
  };
  const missionVisionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Lead Events Mission and Vision',
    description: 'The mission and vision of Lead Events, a Dubai and UAE event management company for corporate events, exhibitions, conferences, brand activations, and luxury live experiences.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'CreativeWork',
          name: 'Lead Events Mission',
          headline: 'Mission of Lead Events UAE Event Management Company',
          description: 'Lead Events delivers innovative, seamless, and high-impact event solutions for corporate events, exhibitions, conferences, brand activations, and luxury live experiences across Dubai and the UAE.'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'CreativeWork',
          name: 'Lead Events Vision',
          headline: 'Vision of Lead Events Dubai Event Management Agency',
          description: 'Lead Events aims to be one of the region’s most trusted and creatively fearless event management agencies, setting new benchmarks for live event production across the UAE.'
        }
      }
    ]
  };
  const journeyStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Lead Events Event Management Process',
    description: 'A proven event management methodology for corporate events, exhibitions, conferences, brand activations, and premium live event production in Dubai and the UAE.',
    totalTime: 'P4D',
    step: timeline.map((item, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: item.title,
      text: item.desc,
      url: `https://www.leadevents.com/about#journey-step-${idx + 1}`
    }))
  };

  return (
    <>
      <SEO
        title="About Lead Events | Event Management Company UAE"
        description={seoDescription}
        keywords={seoKeywords}
        breadcrumbs={[{ name: 'About', url: 'https://www.leadevents.com/about' }]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aboutStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(missionVisionStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(journeyStructuredData)}
        </script>
      </Helmet>
      
      {/* Cinematic Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >

        <motion.div
          style={{ y: yHeroBg }}
          className="absolute inset-0 w-full h-[120%] bg-[url('/about/hero.png')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark z-0" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-[150px] mix-blend-screen animate-blob z-0" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2000 z-0" />

        <motion.div
          style={{ opacity: opacityHeroText }}
          className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center mt-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-black leading-[0.85] tracking-tighter uppercase mb-6 w-full max-w-[1400px]"
          >
            Event Management Company in <span className="text-outline">Dubai & UAE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-brand-text/80 max-w-3xl mb-12 font-light leading-relaxed"
          >
            Lead Events creates premium corporate events, exhibitions, conferences, brand activations, and luxury live experiences across Dubai, Abu Dhabi, and the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button to="/contact" variant="primary" className="text-lg px-10 py-5 rounded-none cursor-hover-target">
              Plan Your Event
            </Button>
            <Button to="/portfolio" variant="secondary" className="text-lg px-10 py-5 rounded-none cursor-hover-target border-white/30 text-white hover:border-brand-red">
              View Our Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="relative overflow-hidden bg-[#fbf8f3] py-8 md:py-12 text-brand-dark">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="absolute right-0 top-10 text-[18vw] font-black uppercase leading-none tracking-tighter text-black/[0.025] select-none pointer-events-none">
          Story
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-5 ml-2">
                Our Story
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.86] text-brand-dark">
                Built From Bold Ideas.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="lg:col-span-7"
            >
              <p className="text-2xl md:text-4xl font-light leading-tight text-brand-dark/75">
                Lead Events was founded with one purpose: to transform ideas into extraordinary live experiences. As a trusted event management company in Dubai and the UAE, we combine creative strategy, technical excellence, and flawless execution to deliver corporate events, exhibitions, conferences, brand activations, and premium event production that leave lasting impressions.
              </p>
            </motion.div>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 min-h-[280px] relative overflow-hidden rounded-[2px]"
            >
              <img
                src="/home/conferences_premium.png"
                alt="Lead Events production atmosphere"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-[#fbf8f3] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className="h-px w-20 bg-brand-red mb-3" />
                <p className="text-brand-dark text-xl font-semibold leading-tight">
                  We shape spaces where brands are not just seen, but felt.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              {[
                ['01', 'Creative Intent', 'Every successful event begins with a powerful idea. We design memorable event concepts tailored to your brand, audience, and objectives, ensuring every experience creates genuine engagement and measurable impact.'],
                ['02', 'Technical Excellence', 'From stage production and audiovisual technology to lighting, exhibition builds, and venue coordination, every detail is carefully planned to deliver seamless event management with exceptional quality.'],
                ['03', 'Flawless Execution', 'Our experienced event professionals oversee every stage of the project with precision, ensuring corporate events, conferences, exhibitions, and brand activations are delivered on time, on budget, and beyond expectations.'],
              ].map(([number, title, text], idx) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="grid grid-cols-[60px_1fr] gap-5 border-t border-black/10 pt-3"
                >
                  <span className="text-brand-red text-3xl md:text-4xl font-black tracking-tighter">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 text-brand-dark">
                      {title}
                    </h3>
                    <p className="text-lg md:text-xl text-brand-dark/60 font-light leading-relaxed max-w-2xl">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Split-Screen Mission & Vision */}
      <section
        id="mission-vision"
        className="w-full h-[80vh] min-h-[600px] flex flex-col md:flex-row bg-brand-dark overflow-hidden relative border-y border-white/10"
        aria-labelledby="mission-vision-heading"
      >
        <h2 id="mission-vision-heading" className="sr-only">
          Lead Events Mission and Vision for Event Management in Dubai and the UAE
        </h2>
        
        {/* Mission Panel */}
        <article
          onMouseEnter={() => setHoveredSection(0)}
          className={`relative min-w-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 overflow-hidden isolate transition-[flex] duration-1000 ease-[0.16,1,0.3,1] cursor-hover-target group ${
            hoveredSection === 0 ? 'flex-[1.5] lg:flex-[2]' : 'flex-[1]'
          }`}
        >
          <div className="absolute inset-0 bg-[url('/about/mission.png')] bg-cover bg-center bg-no-repeat transition-transform duration-[1600ms] group-hover:scale-105" />
          <div className={`absolute inset-0 transition-colors duration-1000 ${hoveredSection === 0 ? 'bg-black/55' : 'bg-black/70'}`} />
          {/* Ambient Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br from-brand-red/25 via-transparent to-black/30 transition-opacity duration-1000 ${hoveredSection === 0 ? 'opacity-100' : 'opacity-60'}`} />
          
          <div className="relative z-10 w-full max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-[2px] transition-all duration-1000 bg-brand-red ${hoveredSection === 0 ? 'w-16' : 'w-0'}`} />
              <span className={`font-bold tracking-[0.2em] uppercase text-sm transition-colors duration-1000 ${hoveredSection === 0 ? 'text-brand-red' : 'text-transparent'}`}>
                The Purpose
              </span>
            </div>
            
            <h3
              className={`font-black uppercase tracking-tighter transition-all duration-1000 ${
                hoveredSection === 0
                  ? 'text-5xl md:text-7xl lg:text-8xl text-white mb-8'
                  : 'text-4xl md:text-5xl lg:text-6xl text-white/45 mb-0'
              }`}
            >
              Mission<span className="text-brand-red">.</span>
            </h3>
            
            <div className={`overflow-hidden transition-all duration-1000 ease-[0.16,1,0.3,1] ${
              hoveredSection === 0 ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-8'
            }`}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-relaxed">
                To deliver <span className="font-bold text-white">innovative</span>, seamless, and <span className="font-bold text-white">high-impact</span> event management solutions for corporate events, exhibitions, conferences, brand activations, and luxury live experiences across Dubai and the UAE.
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-white/10" />
        </article>

        {/* Vision Panel */}
        <article
          onMouseEnter={() => setHoveredSection(1)}
          className={`relative min-w-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 overflow-hidden isolate transition-[flex] duration-1000 ease-[0.16,1,0.3,1] cursor-hover-target group ${
            hoveredSection === 1 ? 'flex-[1.5] lg:flex-[2]' : 'flex-[1]'
          }`}
        >
          <div className="absolute inset-0 bg-[url('/about/vision.png')] bg-cover bg-center bg-no-repeat transition-transform duration-[1600ms] group-hover:scale-105" />
          <div className={`absolute inset-0 transition-colors duration-1000 ${hoveredSection === 1 ? 'bg-black/55' : 'bg-black/70'}`} />
          {/* Ambient Glow */}
          <div className={`absolute inset-0 bg-gradient-to-bl from-brand-red/25 via-transparent to-black/30 transition-opacity duration-1000 ${hoveredSection === 1 ? 'opacity-100' : 'opacity-60'}`} />
          
          <div className="relative z-10 w-full max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-[2px] transition-all duration-1000 bg-brand-red ${hoveredSection === 1 ? 'w-16' : 'w-0'}`} />
              <span className={`font-bold tracking-[0.2em] uppercase text-sm transition-colors duration-1000 ${hoveredSection === 1 ? 'text-brand-red' : 'text-transparent'}`}>
                The Future
              </span>
            </div>
            
            <h3
              className={`font-black uppercase tracking-tighter transition-all duration-1000 ${
                hoveredSection === 1
                  ? 'text-5xl md:text-7xl lg:text-8xl text-white mb-8'
                  : 'text-4xl md:text-5xl lg:text-6xl text-white/45 mb-0'
              }`}
            >
              Vision<span className="text-brand-red">.</span>
            </h3>
            
            <div className={`overflow-hidden transition-all duration-1000 ease-[0.16,1,0.3,1] ${
              hoveredSection === 1 ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-8'
            }`}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-relaxed">
                To be the region's <span className="font-bold text-white">most trusted</span> and <span className="font-bold text-white">creatively fearless</span> event management agency, setting new benchmarks for live event production, corporate experiences, and brand activations in the UAE.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Company Timeline */}
      <section className="relative overflow-hidden bg-[#fbf8f3] py-12 md:py-20 text-brand-dark">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
        <div className="absolute -left-8 top-12 text-[18vw] font-black uppercase leading-none tracking-tighter text-black/[0.025] select-none pointer-events-none">
          Timeline
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-red/35 to-transparent lg:block" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-4xl"
          >
            <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-5 ml-2">
              Timeline
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.86] text-brand-dark">
              Defining Moments.
            </h2>
            <p className="mt-7 text-xl md:text-2xl text-brand-dark/75 font-light leading-relaxed max-w-2xl">
              The milestones that shaped how Lead Events thinks, builds, and delivers premium live experiences.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {storyChapters.map((chapter, idx) => (
              <motion.div
                key={chapter.year}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative"
              >
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-8 lg:text-right' : ''}`}>
                  <div className="flex items-end gap-5 lg:block">
                    <span className="block text-6xl md:text-8xl font-black tracking-tighter text-brand-red leading-none">
                      {chapter.year}
                    </span>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.28em] text-brand-dark/65">
                      Chapter 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className={`hidden lg:flex lg:col-span-2 justify-center ${idx % 2 === 1 ? 'lg:col-start-6 lg:row-start-1' : ''}`}>
                  <div className="relative mt-3 h-16 w-16">
                    <div className="absolute inset-0 rounded-full border border-brand-red/40" />
                    <div className="absolute inset-3 rounded-full bg-brand-red/10" />
                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red shadow-[0_0_28px_rgba(198,40,40,0.55)]" />
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : ''}`}>
                  <span className="text-brand-red text-xs font-bold uppercase tracking-[0.28em] block mb-4">
                    {chapter.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-5 text-brand-dark">
                    {chapter.title}
                  </h3>
                  <p className="text-lg md:text-xl text-brand-dark/75 font-light leading-relaxed">
                    {chapter.text}
                  </p>
                  <div className={`mt-7 flex items-center gap-5 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <div className="h-px w-14 bg-brand-red" />
                    <span className="text-brand-red font-black uppercase tracking-tighter text-lg">
                      {chapter.stat}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Timeline */}
      <section
        id="event-management-process"
        className="py-12 md:py-20 bg-[#fbf8f3] text-brand-dark relative border-t border-black/10"
        ref={containerRef}
        aria-labelledby="event-management-process-heading"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/45 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 md:mb-14">
            <h2 id="event-management-process-heading" className="text-[6vw] sm:text-[4vw] font-black uppercase tracking-tighter leading-none mb-6 text-brand-dark">The Journey</h2>
            <p className="text-xl text-brand-dark/75 max-w-2xl mx-auto font-light">Our proven methodology for corporate event management, exhibition production, conference planning, brand activations, and live event excellence across Dubai and the UAE.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Background Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-black/10" />
            
            {/* Animated Draw Line */}
            <motion.div 
              className="absolute left-[27px] top-4 w-[2px] bg-brand-red origin-top shadow-[0_0_20px_rgba(230,57,70,0.8)]"
              style={{ height: lineHeight }}
            />
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                id={`journey-step-${idx + 1}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-8 md:gap-12 mb-12 md:mb-16 last:mb-0 relative cursor-hover-target group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#fbf8f3] border-2 border-brand-red flex items-center justify-center font-bold text-xl relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                  {item.year}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase text-brand-dark">{item.title}</h3>
                  <p className="text-brand-dark/75 text-xl font-light leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section
        id="event-consultation"
        ref={ctaRef}
        onMouseMove={handleCtaMouseMove}
        className="py-32 relative overflow-hidden bg-gradient-to-br from-[#050202] via-[#1a0505] to-[#050202] border-t border-white/5"
        aria-labelledby="event-consultation-heading"
      >
        <div className="absolute inset-0 bg-[url('/about/CTA.png')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none mix-blend-overlay" />

        <motion.div
          style={{ x: ctaMouse.x, y: ctaMouse.y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
        />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-brand-red/30 rounded-full blur-[0.5px]"
              style={{
                top: `${(i * 17) % 100}%`,
                left: `${(i * 23) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 5 + (i % 4) * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.3em] uppercase text-white mb-8 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              LEAD EVENTS UAE
            </span>

            <h2
              id="event-consultation-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] uppercase text-white mb-8 max-w-3xl"
            >
              Ready to Elevate Your <br />
              <span className="text-outline">Upcoming Events</span> <br className="hidden sm:inline" />
              in Dubai & UAE?
            </h2>

            <p className="text-base md:text-lg text-brand-text/70 font-light max-w-3xl mb-12 leading-relaxed">
              Partner with Lead Events, a trusted event management company in Dubai specializing in corporate event planning, exhibition production, conference management, brand activations, and premium live experiences across the UAE. Request a consultation to create memorable events that inspire audiences and deliver measurable impact.
            </p>

            <div className="flex flex-wrap justify-center gap-6 w-full">
              <Button
                to="/contact"
                variant="primary"
                aria-label="Start Your Event Journey with Lead Events"
                className="text-base px-10 py-5 rounded-none cursor-hover-target transition-all duration-300 shadow-[0_0_30px_rgba(198,40,40,0.2)] hover:shadow-[0_0_40px_rgba(198,40,40,0.4)]"
              >
                Start Your Event Journey
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                aria-label="Request a Free Event Consultation"
                className="text-base px-10 py-5 rounded-none cursor-hover-target border-white/10 bg-white/5 backdrop-blur-md text-white hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300"
              >
                Request a Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
