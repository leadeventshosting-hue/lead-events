import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CalendarCheck,
  Clapperboard,
  Headphones,
  Lightbulb,
  MonitorPlay,
  Sparkles,
  Users,
  Volume2,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

export default function Services() {
  const { scrollYProgress: pageScrollYProgress } = useScroll();
  const yHeroBg = useTransform(pageScrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHeroText = useTransform(pageScrollYProgress, [0, 0.2], [1, 0]);

  const services = [
    {
      number: '01',
      title: 'Corporate Events',
      slug: 'corporate-events',
      icon: Briefcase,
      image: '/home/conferences_premium.png',
      cta: 'Plan Your Corporate Event',
      description:
        'Lead Events specializes in corporate event management in Dubai, delivering conferences, seminars, annual meetings, product launches, networking events, awards ceremonies, and executive experiences. We create strategic event solutions that strengthen brands, engage audiences, and deliver measurable business outcomes through seamless planning and world-class production.',
      features: ['Corporate Conferences', 'Annual Meetings', 'Product Launches', 'Award Ceremonies', 'Executive Summits', 'Gala Dinners'],
    },
    {
      number: '02',
      title: 'Audio Visual Rental',
      slug: 'audio-visual-rental',
      icon: Volume2,
      image: '/home/stats_background_premium.png',
      cta: 'Request AV Equipment',
      description:
        'Deliver exceptional event experiences with professional audio visual rental services in Dubai. We provide LED video walls, sound systems, projectors, lighting, staging, live streaming equipment, microphones, and technical support for corporate events, exhibitions, weddings, and conferences across the UAE.',
      features: ['LED Walls', 'Professional Sound', 'Lighting Systems', 'Live Streaming', 'Projection Systems', 'Technical Crew'],
    },
    {
      number: '03',
      title: 'Exhibition & Trade Shows',
      slug: 'exhibition-trade-shows',
      icon: MonitorPlay,
      image: '/assets/exhibition.png',
      cta: 'Build Your Exhibition',
      description:
        'Maximize your brand presence with exhibition management and trade show solutions designed to attract visitors and generate meaningful engagement. Lead Events designs, builds, and manages premium exhibition stands, trade show booths, product showcases, and experiential brand spaces across Dubai and the UAE.',
      features: ['Exhibition Booth Design', 'Stand Construction', 'Visitor Engagement', 'Product Displays', 'Logistics', 'On-site Management'],
    },
    {
      number: '04',
      title: 'Entertainment',
      slug: 'entertainment',
      icon: Clapperboard,
      image: '/home/brand_activations_premium.png',
      cta: 'Book Entertainment',
      description:
        'Create unforgettable experiences with premium event entertainment services including live performers, celebrity appearances, DJs, musicians, dancers, cultural shows, interactive acts, and customized performances for corporate events, weddings, exhibitions, and luxury celebrations.',
      features: ['Live Bands', 'DJs', 'Celebrity Talent', 'Cultural Shows', 'Interactive Entertainment', 'Stage Performances'],
    },
    {
      number: '05',
      title: 'Luxury Weddings',
      slug: 'luxury-weddings',
      icon: Sparkles,
      image: '/expertise/3.png',
      cta: 'Plan Your Wedding',
      description:
        'Lead Events creates elegant wedding experiences through luxury wedding planning, bespoke decor, entertainment, venue styling, floral concepts, lighting design, and complete wedding management. Every celebration is thoughtfully designed to reflect your vision and create lifelong memories.',
      features: ['Wedding Planning', 'Luxury Decor', 'Floral Design', 'Entertainment', 'Lighting', 'Guest Experience'],
    },
    {
      number: '06',
      title: 'Audio Visual Installations',
      slug: 'audio-visual-installations',
      icon: Headphones,
      image: '/about/mission.png',
      cta: 'Talk To Our Experts',
      description:
        'Our professional audio visual installation services provide permanent AV solutions for hotels, conference centers, auditoriums, retail environments, offices, and commercial spaces. We design and install high-performance audiovisual systems tailored to your business requirements.',
      features: ['Meeting Rooms', 'Auditoriums', 'LED Installations', 'Digital Signage', 'Control Systems', 'Maintenance'],
    },
  ];

  const stats = [
    ['15+', 'Years Experience'],
    ['300+', 'Events Produced'],
    ['UAE', 'Wide Coverage'],
    ['24/7', 'Event Support'],
  ];

  const reasons = [
    '15+ Years Experience',
    'Corporate Event Specialists',
    'Premium AV Technology',
    'UAE Wide Coverage',
    'Dedicated Event Managers',
    'End-to-End Event Production',
  ];

  const process = ['Discovery', 'Strategy', 'Creative Design', 'Production', 'Execution', 'Event Success'];

  const projects = [
    ['Corporate Summit', 'Conference Management Dubai', '/home/conferences_premium.png'],
    ['Luxury Wedding', 'Wedding Planner Dubai', '/expertise/3.png'],
    ['Trade Show Pavilion', 'Trade Show Booth Dubai', '/assets/exhibition.png'],
    ['Brand Activation', 'Brand Activation Dubai', '/home/brand_activations_premium.png'],
  ];

  const seoDescription =
    'Lead Events provides professional event management services in Dubai and the UAE including corporate events, audio visual rental, exhibitions, entertainment, weddings, and AV installations.';
  const seoKeywords =
    'Event Management Company Dubai, Corporate Events Dubai, Event Management UAE, Event Production Dubai, Audio Visual Rental Dubai, AV Installation Dubai, Exhibition Management UAE, Trade Show Booth Dubai, Wedding Planner Dubai, Conference Management Dubai, Live Entertainment Dubai, Luxury Event Management UAE, Brand Activation Dubai, Audio Visual Services UAE';
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
        provider: {
          '@type': 'Organization',
          name: 'Lead Events',
          url: 'https://leadevents.ae',
        },
        areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates'],
      },
    })),
  };

  return (
    <>
      <SEO
        title="Event Management Services UAE"
        description={seoDescription}
        keywords={seoKeywords}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceStructuredData)}
        </script>
      </Helmet>

      {/* Cinematic Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="Lead Events UAE Event Management Services" />
        <meta itemProp="description" content="A full spectrum of event management services combining creative vision with technical precision across Dubai and the UAE." />

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              WHAT WE DO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-black leading-[0.85] tracking-tighter uppercase mb-6 w-full max-w-[1400px]"
            itemProp="headline"
          >
            Flawless <span className="text-outline">Execution</span>.
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
            <Button to="/contact" variant="primary" className="text-lg px-10 py-5 rounded-none cursor-hover-target">
              Plan Your Event
            </Button>
            <Button to="/portfolio" variant="secondary" className="text-lg px-10 py-5 rounded-none cursor-hover-target border-white/30 text-white hover:border-brand-red">
              View Our Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <main className="bg-[#fbf8f3] text-brand-dark overflow-hidden">
        <section className="relative border-t border-black/10 py-14 md:py-20">
          <div className="absolute inset-0 bg-noise opacity-[0.025]" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-red/5 to-transparent" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-5">
                  Our Expertise
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.86]">
                  Professional Event Management Services in Dubai & UAE
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-5"
              >
                <p className="text-xl md:text-2xl text-brand-dark/70 font-light leading-relaxed mb-8">
                  Lead Events is a trusted event management company in Dubai delivering innovative event planning, premium event production, audio visual solutions, exhibition management, luxury weddings, corporate events, and live entertainment across the UAE.
                </p>
                <a href="#services-grid" className="inline-flex items-center gap-3 bg-brand-red px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-darkRed transition-colors cursor-hover-target">
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services-grid" className="py-8 md:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {services.map((service, index) => (
                <motion.article
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.04 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-black/10 shadow-[0_22px_70px_rgba(0,0,0,0.07)] overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="serviceType" content={service.title} />
                  <div className="relative h-[300px] overflow-hidden bg-brand-dark">
                    <img
                      src={service.image}
                      alt={`${service.title} by Lead Events UAE`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-brand-red text-white">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <span className="text-6xl font-black tracking-tighter text-white leading-none">
                        {service.number}
                      </span>
                      <span className="text-white/70 text-xs uppercase tracking-[0.25em]">
                        Service
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <h2 itemProp="name" className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-5">
                      {service.title}
                    </h2>
                    <p itemProp="description" className="text-brand-dark/68 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 border border-black/10 bg-[#fbf8f3] px-3 py-2">
                          <span className="h-1.5 w-1.5 bg-brand-red shrink-0" />
                          <span className="text-xs font-bold uppercase tracking-[0.08em] text-brand-dark/70">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button to="/contact" variant="outline" className="w-full px-6 py-4 text-xs uppercase tracking-[0.16em] rounded-none cursor-hover-target">
                      {service.cta}
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 border-t border-black/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-5">
                  Why Choose Lead Events
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.86]">
                  Reliable. Creative. Built for UAE Events.
                </h2>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="bg-white border border-black/10 p-5 flex items-center gap-4"
                  >
                    <BadgeCheck className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="font-bold text-brand-dark/75">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-5">
              Process Timeline
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.86] mb-12">
              From Discovery to Event Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {process.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-white/10 bg-white/[0.04] p-5 min-h-[180px] flex flex-col justify-between"
                >
                  <span className="text-brand-red text-sm font-black tracking-[0.25em]">0{index + 1}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-5">
                  Featured Work
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.86]">
                  Selected Event Worlds
                </h2>
              </div>
              <Button to="/portfolio" variant="outline" className="px-7 py-4 text-xs uppercase tracking-[0.18em] rounded-none cursor-hover-target">
                View Portfolio
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map(([title, type, image]) => (
                <motion.article
                  key={title}
                  whileHover={{ y: -6 }}
                  className="relative h-[420px] overflow-hidden bg-brand-dark text-white"
                >
                  <img src={image} alt={`${title} by Lead Events`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-brand-red text-xs font-bold uppercase tracking-[0.25em]">{type}</span>
                    <h3 className="mt-4 text-3xl font-black uppercase tracking-tighter leading-none">{title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 text-white">
          <div className="absolute inset-0 bg-[url('/home/CTA.png')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase block mb-6">
              Start Your Project
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.86] mb-8">
              Let's Create Extraordinary Events Together
            </h2>
            <p className="mx-auto max-w-4xl text-lg md:text-xl text-brand-text/75 font-light leading-relaxed mb-10">
              Partner with Lead Events for professional event management services in Dubai and the UAE. Whether you're planning a corporate conference, exhibition, wedding, or luxury brand activation, our team is ready to transform your vision into an unforgettable experience.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Button to="/contact" variant="primary" className="px-10 py-5 rounded-none cursor-hover-target uppercase tracking-[0.18em] text-sm">
                Start Your Project
              </Button>
              <Button to="/contact" variant="secondary" className="px-10 py-5 rounded-none cursor-hover-target uppercase tracking-[0.18em] text-sm border-white/20 text-white hover:border-brand-red">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
