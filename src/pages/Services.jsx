import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Briefcase,
  Clapperboard,
  Headphones,
  MonitorPlay,
  Sparkles,
  Volume2,
  Megaphone,
  Hammer,
  ScreenShare,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/* ─── tiny helpers ─────────────────────────────────────────────── */
function RevealText({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── data ─────────────────────────────────────────────────────── */
const services = [
  {
    number: '01',
    title: 'Corporate Events',
    slug: 'corporate-events',
    portfolioCategory: 'Events',
    icon: Briefcase,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/Corportae_Events_kfue89.jpg',
    cta: 'Explore More',
    label: 'Strategy & Production',
    description: 'We deliver conferences, seminars, product launches, award ceremonies, and executive summits. Strategic event solutions that strengthen brands and deliver measurable outcomes through seamless planning and world-class production.',
    features: ['Corporate Conferences', 'Annual Meetings', 'Product Launches', 'Award Ceremonies', 'Executive Summits', 'Gala Dinners'],
  },
  {
    number: '02',
    title: 'Audio Visual Rental',
    slug: 'audio-visual-rental',
    portfolioCategory: 'Screen',
    icon: Volume2,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/ChatGPT_Image_Aug_13_2026_09_26_42_PM_iuoh9l.jpg',
    cta: 'Explore More',
    label: 'Technical Excellence',
    description: 'Professional AV rental services across the UAE — LED video walls, sound systems, live streaming rigs, projectors, lighting, staging, and expert technical crew for every scale of event.',
    features: ['LED Walls', 'Professional Sound', 'Lighting Systems', 'Live Streaming', 'Projection Systems', 'Technical Crew'],
  },
  {
    number: '03',
    title: 'LED Screen Rental',
    slug: 'led-screen-rental',
    portfolioCategory: 'Screen',
    icon: ScreenShare,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/Screen_Rental_z0nofi.jpg',
    cta: 'Explore More',
    label: 'High-Impact Visuals',
    description: 'High-resolution indoor and outdoor LED screen rental for conferences, exhibitions, concerts, weddings, and brand activations, complete with installation, content support, and expert technical operation.',
    features: ['Indoor LED Screens', 'Outdoor LED Screens', 'Video Walls', 'Custom Screen Sizes', 'Content Support', 'Technical Crew'],
  },
  {
    number: '04',
    title: 'Lighting System Rental',
    slug: 'lighting-system-rental',
    portfolioCategory: 'Ambience Lights',
    icon: Sparkles,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/Lighting_System_Rental_r5x4ey.jpg',
    cta: 'Explore More',
    label: 'Atmospheric Design',
    description: 'Dynamic event lighting solutions from ambient uplighting to stage spotlights, creating the perfect atmosphere.',
    features: ['Intelligent Lighting', 'Stage Lights', 'Ambient Uplighting', 'Laser Light Shows', 'DMX Controllers', 'Rigging Crew'],
  },
  {
    number: '05',
    title: 'Truss Rental',
    slug: 'truss-rental',
    portfolioCategory: 'Truss',
    icon: Hammer,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/103_ypgsdc.jpg',
    cta: 'Explore More',
    label: 'Structural Support',
    description: 'Safe, heavy-duty staging trusses and rigging support solutions to secure all lighting, sound, and screen equipment.',
    features: ['Aluminum Trusses', 'Ground Support', 'Rigging Hoists', 'Safety Chains', 'Stage Decks', 'Certified Riggers'],
  },
  {
    number: '06',
    title: 'Event Fabrication and Production',
    slug: 'event-fabrication-production',
    portfolioCategory: 'Fabrication',
    icon: Hammer,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/Fabrication_aoznnp.jpg',
    cta: 'Explore More',
    label: 'Custom Builds',
    description: 'Custom set designs, staging setups, and bespoke fabrication services turning creative concepts into physical reality.',
    features: ['Custom Stages', 'Scenic Fabrication', 'Branded Structures', 'Set Construction', 'Event Backdrops', 'On-site Installation'],
  },
  {
    number: '07',
    title: 'Weddings',
    slug: 'weddings',
    portfolioCategory: 'Events',
    icon: Sparkles,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/ChatGPT_Image_Aug_13_2026_09_33_43_PM_fmr2i9.jpg',
    cta: 'Explore More',
    label: 'Luxury Celebrations',
    description: 'Bespoke luxury wedding planning in Dubai — from intimate desert ceremonies to grand ballroom celebrations, we craft unforgettable wedding experiences across the UAE.',
    features: ['Wedding Planning', 'Luxury Decor', 'Floral Design', 'Entertainment', 'Lighting', 'Guest Experience'],
  },
  {
    number: '08',
    title: 'Entertainment',
    slug: 'entertainment',
    portfolioCategory: 'Kids Entertainment',
    icon: Clapperboard,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/Entertainment_vpvbot.jpg',
    cta: 'Explore More',
    label: 'Live Shows',
    description: 'Premium entertainment services including live performers, celebrity appearances, DJs, musicians, cultural shows, and customized stage productions for corporate events, weddings, and luxury celebrations.',
    features: ['Live Bands', 'DJs', 'Celebrity Talent', 'Cultural Shows', 'Interactive Entertainment', 'Stage Performances'],
  },
  {
    number: '09',
    title: 'Exhibitions',
    slug: 'exhibitions',
    portfolioCategory: 'Events',
    icon: MonitorPlay,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/Exibution_vxb2pm.jpg',
    cta: 'Explore More',
    label: 'Brand Spaces',
    description: 'Seamless exhibition management and custom stand designs that capture attention and maximize brand presence.',
    features: ['Booth Design', 'Stand Construction', 'Visitor Engagement', 'Product Displays', 'Logistics', 'On-site Management'],
  },
  {
    number: '10',
    title: 'Trade Show Displays',
    slug: 'trade-show-displays',
    portfolioCategory: 'Events',
    icon: MonitorPlay,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/107_ly8g3b.jpg',
    cta: 'Explore More',
    label: 'Exhibition Stands',
    description: 'Professional trade show booths and display materials designed to attract visitors and showcase products.',
    features: ['Display Booths', 'Roll-up Banners', 'Pop-up Displays', 'Modular Stands', 'Branded Furniture', 'Graphic Printing'],
  },
  {
    number: '11',
    title: 'AV Installation and Integration',
    slug: 'av-installation-integration',
    portfolioCategory: 'All',
    icon: Headphones,
    image: 'https://res.cloudinary.com/anbsskt4/image/upload/ChatGPT_Image_Aug_13_2026_09_34_19_PM_t4w9ba.jpg',
    cta: 'Explore More',
    label: 'Permanent Integrations',
    description: 'Permanent AV solutions for hotels, conference centers, auditoriums, retail environments, and offices. We design and install high-performance audiovisual systems tailored to your business requirements.',
    features: ['Meeting Rooms', 'Auditoriums', 'LED Installations', 'Digital Signage', 'Control Systems', 'Maintenance'],
  }
];

/* ─── SERVICE CARD ──────────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      id={service.slug}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] group border-b border-black/10 last:border-b-0"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content={service.title} />

      {/* Image panel */}
      <motion.div
        className={`relative overflow-hidden bg-black ${isEven ? 'lg:order-1' : 'lg:order-2'} h-[320px] lg:h-auto`}
        initial={{ clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0%)' } : {}}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      >
        <img
          src={service.image}
          alt={`${service.title} by Lead Events UAE`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110 opacity-80"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-[#050505]/80`} />
        {/* Big service number watermark */}
        <div className="absolute bottom-0 right-0 p-6 pointer-events-none select-none">
          <span
            className="text-[clamp(5rem,14vw,10rem)] font-black leading-none tracking-tighter"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)', color: 'transparent' }}
          >
            {service.number}
          </span>
        </div>
        {/* Label pill */}
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center gap-2 bg-[#c62828]/90 backdrop-blur-sm px-4 py-1.5 text-[10px] font-black tracking-[0.25em] uppercase text-white">
            <service.icon className="w-3 h-3" />
            {service.label}
          </span>
        </div>
      </motion.div>

      {/* Content panel */}
      <div
        className={`relative flex flex-col justify-center px-10 py-14 lg:py-20 lg:px-16 bg-[#fbf8f3] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        {/* Red accent line */}
        <motion.div
          className="absolute top-0 left-0 h-px bg-brand-red"
          initial={{ scaleX: 0, transformOrigin: isEven ? 'left' : 'right' }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ width: '100%' }}
        />

        <RevealText delay={0.15}>
          <h2
            itemProp="name"
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.88] mb-6 text-brand-dark"
          >
            {service.title}
          </h2>
        </RevealText>

        <FadeUp delay={0.25}>
          <p itemProp="description" className="text-brand-dark/60 font-light leading-relaxed mb-8 text-base lg:text-lg max-w-lg">
            {service.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="flex flex-wrap gap-2 mb-10">
            {service.features.map((f) => (
              <span
                key={f}
                className="border border-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-dark/60 hover:border-brand-red hover:text-brand-red transition-all duration-300"
              >
                {f}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.45}>
          <Link
            to="/portfolio"
            state={{ category: service.portfolioCategory }}
            className="group/btn inline-flex items-center gap-3 self-start"
          >
            <span className="relative overflow-hidden bg-brand-red text-white text-xs font-black uppercase tracking-[0.22em] px-7 py-4 flex items-center gap-3 transition-all duration-300 hover:bg-[#8e0000]">
              {service.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              {/* shimmer */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover/btn:translate-x-full transition-transform duration-700" />
            </span>
          </Link>
        </FadeUp>
      </div>
    </motion.article>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
export default function Services() {
  const { scrollYProgress: pageScrollYProgress } = useScroll();
  const yHeroBg = useTransform(pageScrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHeroText = useTransform(pageScrollYProgress, [0, 0.2], [1, 0]);

  const seoDescription =
    'Lead Events provides professional event management services in Dubai and the UAE including corporate events, audio visual rental, exhibitions, entertainment, weddings, brand activations, staging, fabrication, LED screen rental, and AV installations.';
  const seoKeywords =
    'Event Management Company Dubai, Corporate Events Dubai, Event Management UAE, Event Production Dubai, Audio Visual Rental Dubai, AV Installation Dubai, Exhibition Management UAE, Trade Show Booth Dubai, Wedding Planner Dubai, Conference Management Dubai, Live Entertainment Dubai, Luxury Event Management UAE, Brand Activation Dubai, Staging and Fabrication Dubai, LED Screen Rental Dubai, Audio Visual Services UAE';

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Lead Events Professional Event Management Services',
    description: seoDescription,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `https://leadevents.ae/services#${service.slug}`,
        provider: { '@type': 'Organization', name: 'Lead Events', url: 'https://leadevents.ae' },
        areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates'],
      },
    })),
  };

  return (
    <>
      <SEO title="Event Management Services UAE" description={seoDescription} keywords={seoKeywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceStructuredData)}</script>
      </Helmet>

      {/* ══════════ HERO (UNTOUCHED) ══════════ */}
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="Lead Events UAE Event Management Services" />
        <meta itemProp="description" content="A full spectrum of event management services combining creative vision with technical precision across Dubai and the UAE." />

        <motion.div
          style={{ y: yHeroBg }}
          className="absolute inset-0 w-full h-[120%] bg-[url('/services/hero.png')] bg-cover bg-center bg-no-repeat"
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
            itemProp="headline"
          >
            Flawless <span className="text-outline">Execution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-brand-text/80 max-w-3xl mb-12 font-light leading-relaxed"
            itemProp="description"
          >
            We offer a full spectrum of event management services, combining creative vision with technical precision for corporate events, exhibitions, conferences, and brand activations across the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/contact" className="relative inline-flex items-center justify-center px-10 py-5 bg-brand-red text-white font-bold text-lg tracking-wide overflow-hidden group/btn transition-all duration-300 hover:bg-[#8e0000] cursor-hover-target">
              Plan Your Event
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover/btn:translate-x-full transition-transform duration-700" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-10 py-5 border border-white/30 text-white font-bold text-lg tracking-wide hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300 cursor-hover-target">
              View Our Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <main className="bg-[#fbf8f3] text-brand-dark overflow-hidden">

        {/* ── Intro marquee-like divider ── */}
        <section className="border-y border-black/10 py-5 overflow-hidden bg-[#fbf8f3]">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            className="flex gap-10 whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-10 text-xs font-black uppercase tracking-[0.35em] text-brand-dark/25">
                <span>Corporate Events</span>
                <span className="text-brand-red">✦</span>
                <span>AV Rental</span>
                <span className="text-brand-red">✦</span>
                <span>Exhibitions</span>
                <span className="text-brand-red">✦</span>
                <span>Entertainment</span>
                <span className="text-brand-red">✦</span>
                <span>Luxury Weddings</span>
                <span className="text-brand-red">✦</span>
                <span>AV Installations</span>
                <span className="text-brand-red">✦</span>
                <span>Brand Activation</span>
                <span className="text-brand-red">✦</span>
                <span>Staging &amp; Fabrication</span>
                <span className="text-brand-red">✦</span>
                <span>LED Screen Rental</span>
                <span className="text-brand-red">✦</span>
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── Section Header ── */}
        <section className="relative py-12 md:py-16 px-6 lg:px-12 border-b border-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <RevealText>
                  <span className="text-brand-red text-[10px] font-black tracking-[0.4em] uppercase block mb-6">
                    Our Expertise
                  </span>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-sans font-black uppercase tracking-tighter leading-tight text-brand-dark py-2">
                    Professional Event Management{' '}
                    <span className="font-sans" style={{ WebkitTextStroke: '1px rgba(10,10,10,0.35)', color: 'transparent' }}>
                      Services
                    </span>{' '}
                    in Dubai & UAE
                  </h2>
                </RevealText>
              </div>
              <div className="lg:col-span-5">
                <FadeUp delay={0.2}>
                  <p className="text-xl text-brand-dark/60 font-light leading-relaxed mb-8">
                    Lead Events is a trusted event management company delivering innovative planning, premium production, audio visual solutions, exhibition management, luxury weddings, and live entertainment across the UAE.
                  </p>
                  <a
                    href="#services-grid"
                    className="group inline-flex items-center gap-3 text-brand-dark font-bold text-sm uppercase tracking-[0.22em]"
                  >
                    <span className="h-px w-12 bg-brand-red transition-all duration-500 group-hover:w-20" />
                    Explore Services
                    <ArrowRight className="w-4 h-4 text-brand-red transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services — Alternating Asymmetric Sections ── */}
        <section id="services-grid" className="divide-y divide-black/10">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-[#030303] py-28 md:py-36 border-t border-white/[0.06]">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/services/CTA.png')] bg-cover bg-center opacity-15" />
          {/* Deep gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-black/90 to-black" />
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-red/8 rounded-full blur-[80px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <FadeUp>
              <span className="text-brand-red text-[10px] font-black tracking-[0.4em] uppercase block mb-8">
                Start Your Project
              </span>
            </FadeUp>
            <RevealText>
              <h2 className="text-[clamp(3rem,9vw,8rem)] font-black uppercase tracking-tighter leading-[0.86] mb-8 text-white">
                Let&apos;s Create<br />
                <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)', color: 'transparent' }}>
                  Extraordinary
                </span>
              </h2>
            </RevealText>
            <FadeUp delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg text-white/45 font-light leading-relaxed mb-12">
                Partner with Lead Events for professional event management across Dubai and the UAE. Whether it&apos;s a corporate conference, exhibition, wedding, or luxury brand activation — we&apos;re ready to transform your vision.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <div className="flex flex-wrap justify-center gap-5">
                <Link
                  to="/contact"
                  className="relative group inline-flex items-center justify-center gap-3 bg-brand-red text-white font-black text-sm uppercase tracking-[0.22em] px-10 py-5 overflow-hidden hover:bg-[#8e0000] transition-colors duration-300 cursor-hover-target"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 text-white font-black text-sm uppercase tracking-[0.22em] px-10 py-5 hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300 cursor-hover-target"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
}
