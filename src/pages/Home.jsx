import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Calendar, Users, Briefcase, Award, ChevronLeft, ChevronRight, Volume2, ScreenShare, Sparkles, Hammer, Headphones, MonitorPlay } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

const StaggeredText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {}
      }}
      className={className}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [hoveredExpertise, setHoveredExpertise] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const handlePrevTestimonial = () => {
    setSlideDirection(-1);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setSlideDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    })
  };

  const expertiseData = [
    {
      title: "Corporate Events",
      seoTitle: "Corporate Event Management Dubai",
      slug: "corporate-events",
      desc: "Premier corporate event management in Dubai — from elite award galas and stakeholder dinners to large-scale corporate gatherings that leave a lasting impression across the UAE.",
      icon: Briefcase,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/1_zpbx8n.jpg"
    },
    {
      title: "Audio Visual Rental",
      seoTitle: "Audio Visual Rental Dubai & UAE",
      slug: "audio-visual-rental",
      desc: "Professional AV rental services across the UAE — LED video walls, sound systems, live streaming rigs, projectors, lighting, staging, and expert technical crew for every scale of event.",
      icon: Volume2,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/2_onsahj.jpg"
    },
    {
      title: "Sound System Rental",
      seoTitle: "Sound System Rental Dubai & UAE",
      slug: "sound-system-rental",
      desc: "Crystal-clear audio solutions with premium microphone, speaker, and mixer rentals tailored to your venue's acoustics.",
      icon: Volume2,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/100_ixjabt.jpg"
    },
    {
      title: "LED Screen Rental",
      seoTitle: "LED Screen Rental Dubai & UAE",
      slug: "led-screen-rental",
      desc: "High-resolution indoor and outdoor LED video walls creating stunning visual experiences and backdrop displays.",
      icon: ScreenShare,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/101_ulunsv.jpg"
    },
    {
      title: "Lighting System Rental",
      seoTitle: "Lighting System Rental Dubai & UAE",
      slug: "lighting-system-rental",
      desc: "Dynamic event lighting solutions from ambient uplighting to stage spotlights, creating the perfect atmosphere.",
      icon: Sparkles,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/102_flvldq.jpg"
    },
    {
      title: "Truss Rental",
      seoTitle: "Truss Rental Dubai & UAE",
      slug: "truss-rental",
      desc: "Safe, heavy-duty staging trusses and rigging support solutions to secure all lighting, sound, and screen equipment.",
      icon: Hammer,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/103_ypgsdc.jpg"
    },
    {
      title: "Event Fabrication and Production",
      seoTitle: "Event Fabrication and Production Dubai & UAE",
      slug: "event-fabrication-production",
      desc: "Custom set designs, staging setups, and bespoke fabrication services turning creative concepts into physical reality.",
      icon: Hammer,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/104_ejgxgc.jpg"
    },
    {
      title: "Weddings",
      seoTitle: "Luxury Wedding Planning Dubai & UAE",
      slug: "weddings",
      desc: "Bespoke luxury wedding planning in Dubai — from intimate desert ceremonies to grand ballroom celebrations, we craft unforgettable wedding experiences across the UAE.",
      icon: Sparkles,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/3_c9saqd.jpg"
    },
    {
      title: "Entertainment",
      seoTitle: "Entertainment Services Dubai & UAE",
      slug: "entertainment",
      desc: "Premium live entertainment, artist booking, and customized performance coordination to keep your guests engaged.",
      icon: Sparkles,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/105_qkvspw.jpg"
    },
    {
      title: "Exhibitions",
      seoTitle: "Exhibition Stand Builder Dubai & UAE",
      slug: "exhibitions",
      desc: "Seamless exhibition management and custom stand designs that capture attention and maximize brand presence.",
      icon: MonitorPlay,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/106_w1vnnj.jpg"
    },
    {
      title: "Trade Show Displays",
      seoTitle: "Trade Show Booth Designer Dubai & UAE",
      slug: "trade-show-displays",
      desc: "Professional trade show booths and display materials designed to attract visitors and showcase products.",
      icon: MonitorPlay,
      image: "https://res.cloudinary.com/anbsskt4/image/upload/107_ly8g3b.jpg"
    },
    {
      title: "AV Installation and Integration",
      seoTitle: "AV Installation and Integration Dubai & UAE",
      slug: "av-installation-integration",
      desc: "Permanent audiovisual system design, setup, and integration for venues, retail spaces, and offices.",
      icon: Headphones,
      image: "/services/6.png"
    }
  ];

  // State and ref for CTA mouse parallax
  const ctaRef = useRef(null);
  const [ctaMouse, setCtaMouse] = useState({ x: 0, y: 0 });

  const handleCtaMouseMove = (e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
    setCtaMouse({ x, y });
  };

  // Structured Data (JSON-LD) for Local Event Management Company SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Lead Events UAE",
    "description": "Lead Events is a premier corporate event management and brand activation company in Dubai & UAE.",
    "url": window.location.origin,
    "telephone": "+97140000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "sameAs": [
      "https://www.instagram.com/leadevents",
      "https://www.linkedin.com/company/leadevents"
    ],
    "service": [
      "Corporate Event Management",
      "Brand Activations & Immersive Experiences",
      "Conferences & Seminars",
      "Exhibitions & Trade Show Stands"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Jenkins"
        },
        "reviewBody": "Lead Events transformed our product launch into an immersive digital journey. The attention to detail and premium styling was absolutely world-class.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marcus Vance"
        },
        "reviewBody": "A truly professional partner in Dubai. They managed our regional B2B summit with flawless execution. Highly recommended for corporate events.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Fatma Al Suwaidi"
        },
        "reviewBody": "Exceptional creativity and flawless delivery. Lead Events understands the luxury landscape of the UAE like no other agency.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David Laurent"
        },
        "reviewBody": "From concept to clean-up, the team was remarkable. They engineered a gala dinner that our partners are still talking about.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Yasmin Al Maktoum"
        },
        "reviewBody": "The team executed our fashion launch with cinematic perfection. Bold, modern, and absolutely stunning aesthetics.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Robert Chen"
        },
        "reviewBody": "Incredibly professional and responsive. They provided high-end custom exhibition stands that stood out and drew huge crowds.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Elena Rostova"
        },
        "reviewBody": "Flawless execution of our annual blockchain summit. The glassmorphic stages and lighting setups were breathtaking.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tariq Al Mansoor"
        },
        "reviewBody": "A spectacular team that consistently delivers premium results. They are our go-to agency for all major events.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sophia Sterling"
        },
        "reviewBody": "We demanded absolute perfection for our VIP showcase, and Lead Events delivered exactly that. Unbelievable professionalism.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Khaled El Sayed"
        },
        "reviewBody": "An outstanding experience. Their support team was extremely cooperative, and the custom setup was phenomenal.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };

  const stats = [
    { value: "150+", label: "Corporate Events", icon: Briefcase },
    { value: "15+", label: "Years in UAE", icon: Award },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "500k+", label: "Live Attendees", icon: Users },
  ];

  const partners = [
    "Google", "PepsiCo", "Emaar", "Lenovo", "Binance", "Cartier", "Dubai Holding", "Nakheel", "Al Tayer", "Majid Al Futtaim"
  ];

  const marqueePartners = [...partners, ...partners];

  const testimonials = [
    {
      name: "Priya Sharma",
      quote: "Lead Events transformed our product launch into an immersive digital journey. The attention to detail and premium styling was absolutely world-class.",
      rating: 5,
    },
    {
      name: "James Whitfield",
      quote: "A truly professional partner in Dubai. They managed our regional B2B summit with flawless execution. Highly recommended for corporate events.",
      rating: 5,
    },
    {
      name: "Fatma Al Suwaidi",
      quote: "Exceptional creativity and flawless delivery. Lead Events understands the luxury landscape of the UAE like no other agency.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      quote: "From concept to clean-up, the team was remarkable. They engineered a gala dinner that our partners are still talking about.",
      rating: 5,
    },
    {
      name: "Yasmin Al Maktoum",
      quote: "The team executed our fashion launch with cinematic perfection. Bold, modern, and absolutely stunning aesthetics.",
      rating: 5,
    },
    {
      name: "Olivia Bennett",
      quote: "Incredibly professional and responsive. They provided high-end custom exhibition stands that stood out and drew huge crowds.",
      rating: 5,
    },
    {
      name: "Ravi Nair",
      quote: "Flawless execution of our annual summit. The stage setups and lighting were breathtaking. A team that truly delivers.",
      rating: 5,
    },
    {
      name: "Khalid Al Mansoor",
      quote: "A spectacular team that consistently delivers premium results. They are our go-to agency for all major events.",
      rating: 5,
    },
    {
      name: "Charlotte Moore",
      quote: "We demanded absolute perfection for our VIP showcase, and Lead Events delivered exactly that. Unbelievable professionalism.",
      rating: 5,
    },
    {
      name: "Aisha Al Rashid",
      quote: "An outstanding experience. Their team was extremely cooperative and the custom event setup was simply phenomenal.",
      rating: 5,
    }
  ];

  // Duplicate testimonials to ensure seamless looping marquee
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <>
      <SEO 
        title="Home"
        description="Lead Events is a premium event management company in the UAE powering events that impact the experience." 
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Visually Hidden H1 for SEO Crawler optimization */}
        <h1 className="sr-only">
          Corporate Event Management Company in Dubai & UAE
        </h1>

        {/* Parallax Background */}
        <motion.div 
          style={{ y: yHeroBg }}
          className="absolute inset-0 w-full h-[120%] bg-[url('/home/hero.png')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark z-0" />
        
        {/* Animated Glowing Orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-[150px] mix-blend-screen animate-blob z-0" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2000 z-0" />
        
        <motion.div 
          style={{ opacity: opacityHeroText }}
          className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center mt-20"
        >
          <div aria-hidden="true" className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-black leading-[0.85] tracking-tighter uppercase mb-6 w-full max-w-[1400px] flex flex-wrap justify-center items-center gap-x-4">
            <StaggeredText text="Events That" />
            <span className="text-outline">Impact</span>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-brand-text/80 max-w-3xl mb-12 font-light leading-relaxed"
          >
            Lead Events creates premium corporate events, exhibitions, conferences, brand activations, product launches, and live experiences across Dubai and the UAE.
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

      {/* Premium Interactive Expertise Section — SEO Optimized */}
      <section
        aria-label="Our Event Management Services in Dubai & UAE"
        itemScope
        itemType="https://schema.org/ItemList"
        className="pt-12 pb-12 bg-[#fbf8f3] relative z-10 border-t border-[#fbf8f3] overflow-hidden"
      >
        {/* Hidden SEO metadata for crawlers */}
        <meta itemProp="name" content="Lead Events UAE — Event Management Services" />
        <meta itemProp="description" content="Lead Events provides corporate event management, brand activations, and luxury wedding planning services in Dubai and across the UAE." />

        <div className="absolute inset-0 bg-noise opacity-0 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-brand-red font-bold text-xs tracking-[0.25em] uppercase block mb-2">Event Management Services Dubai &amp; UAE</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-dark">
                Our <br/><span className="text-brand-red">Expertise</span>
              </h2>
              {/* Hidden keyword-rich subtitle for SEO crawlers */}
              <p className="sr-only">
                Lead Events is a leading event management company in Dubai specializing in corporate events, brand activations, luxury weddings, and live experiences across the UAE.
              </p>
            </div>
            <Link
              to="/services"
              aria-label="View all event management services offered by Lead Events UAE"
              className="hidden md:inline-flex items-center text-lg font-bold text-brand-dark hover:text-brand-red transition-colors cursor-hover-target"
            >
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          {/* Services Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            {expertiseData.map((item, index) => (
              <motion.article
                key={index}
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                aria-label={item.seoTitle}
                className="relative overflow-hidden rounded-2xl cursor-hover-target transition-all duration-500 ease-[0.16,1,0.3,1] border border-black/10 flex flex-col justify-end min-h-[350px] group bg-white"
              >
                {/* Hidden SEO microdata */}
                <meta itemProp="name" content={item.seoTitle} />
                <meta itemProp="description" content={item.desc} />
                <meta itemProp="areaServed" content="Dubai, UAE" />
                <meta itemProp="provider" content="Lead Events UAE" />
                <link itemProp="url" href={`/services#${item.slug}`} />

                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={`${item.seoTitle} — Lead Events UAE`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                
                <div className="relative z-10 p-6 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full backdrop-blur-md border bg-white/5 border-white/10 text-white group-hover:bg-brand-red/20 group-hover:border-brand-red/50 group-hover:text-brand-red transition-colors duration-500">
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  
                  <h3
                    itemProp="name"
                    className="font-bold text-white uppercase tracking-tight text-xl sm:text-2xl mb-2"
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-brand-text/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-[120px] overflow-hidden">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* Elegant Editorial Testimonials Section */}
      <section className="py-16 bg-[#fbf8f3] overflow-hidden relative z-10 border-t border-black/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/45 to-transparent" />
        {/* Soft Red Radial Glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Decorative rotating transparent ring */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] opacity-10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-brand-dark">
            <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 5" />
          </svg>
        </motion.div>

        {/* Subtle floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-red/20 rounded-full"
              style={{
                top: `${(i * 23) % 100}%`,
                left: `${(i * 37) % 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="text-brand-red font-black text-xs tracking-[0.3em] uppercase block mb-3">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-brand-dark tracking-tight mb-10 font-light capitalize">
            What Our Clients Say
          </h2>

          {/* Testimonial Carousel Wrapper */}
          <div className="relative min-h-[400px] md:min-h-[300px] max-w-[1000px] mx-auto flex items-center justify-center px-4 md:px-16">
            
            {/* Left navigation arrow */}
            <button
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial"
              className="absolute left-0 md:-left-4 z-20 p-4 rounded-none border border-black/10 bg-white text-brand-dark hover:text-brand-red hover:border-brand-red hover:shadow-[0_0_25px_rgba(237,28,36,0.15)] transition-all duration-300 transform -translate-y-1/2 top-1/2 scale-90 md:scale-100 hover:scale-105 active:scale-95 cursor-hover-target"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Testimonial Content Box */}
            <div className="w-full overflow-hidden relative min-h-[350px] md:min-h-[250px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.blockquote
                  key={activeTestimonial}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 260, damping: 30 },
                    opacity: { duration: 0.45 },
                    scale: { duration: 0.4 }
                  }}
                  itemScope 
                  itemType="https://schema.org/Review"
                  className="absolute w-full px-4 md:px-8 flex flex-col items-center text-center"
                >
                  {/* Large Stylized Quotation Mark */}
                  <span className="text-brand-red/10 text-8xl md:text-9xl font-serif absolute -top-12 md:-top-16 select-none pointer-events-none">“</span>
                  
                  <p itemProp="reviewBody" className="text-lg md:text-2xl font-serif italic text-brand-dark/85 leading-relaxed mb-10 max-w-[800px] relative z-10">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div itemProp="author" itemScope itemType="https://schema.org/Person" className="flex flex-col items-center">
                    <h4 itemProp="name" className="text-brand-dark font-bold text-base md:text-lg tracking-wider">— {testimonials[activeTestimonial].name}</h4>
                  </div>
                  
                  {/* Rating microdata for SEO */}
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                    <meta itemProp="ratingValue" content={testimonials[activeTestimonial].rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial"
              className="absolute right-0 md:-right-4 z-20 p-4 rounded-none border border-black/10 bg-white text-brand-dark hover:text-brand-red hover:border-brand-red hover:shadow-[0_0_25px_rgba(237,28,36,0.15)] transition-all duration-300 transform -translate-y-1/2 top-1/2 scale-90 md:scale-100 hover:scale-105 active:scale-95 cursor-hover-target"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </div>
      </section>

      {/* Premium Cinematic Cardless Stats Section */}
      <section className="py-16 bg-[#fbf8f3] relative z-10 border-y border-black/10 overflow-hidden flex items-center justify-center min-h-[320px]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/45 to-transparent" />
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 bg-[url('/home/stats_background_premium.png')] bg-cover bg-center opacity-0 pointer-events-none" />
        
        {/* Deep Gradient Overlays for Seamless Integration */}
        <div className="absolute inset-0 bg-[#fbf8f3] z-0" />
        <div className="absolute inset-0 bg-noise opacity-0 z-0" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4 relative w-full">
            
            {stats.map((stat, index) => (
              <div key={index} className="flex-1 flex flex-col items-center text-center relative group w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full"
                >
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-red/80 mb-6 group-hover:text-brand-red transition-colors duration-500 drop-shadow-[0_0_15px_rgba(237,28,36,0.5)] group-hover:scale-110" />
                  
                  {/* Massive Glowing Number */}
                  <div className="text-6xl sm:text-7xl md:text-6xl lg:text-8xl font-black text-brand-dark tracking-tighter mb-4">
                    {stat.value}
                  </div>
                  
                  {/* Elegant Label */}
                  <div className="text-brand-dark/70 font-medium text-sm md:text-base tracking-[0.2em] uppercase max-w-[200px]">
                    {stat.label}
                  </div>
                </motion.div>

                {/* Elegant Vertical Divider (Only for Desktop, skip last) */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute -right-2 lg:right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
                )}
                
                {/* Elegant Horizontal Divider (Only for Mobile, skip last) */}
                {index !== stats.length - 1 && (
                  <div className="block md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                )}
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Partners/Clients Logo Section */}
      <section className="py-12 bg-[#fbf8f3] relative z-10 border-t border-black/10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/45 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 mb-8 text-center">
          <span className="text-brand-red font-black text-xs tracking-[0.3em] uppercase block">
            POWERING EVENTS FOR GLOBAL BRANDS
          </span>
        </div>
        
        {/* Infinite Partners Marquee */}
        <div className="w-full overflow-hidden relative py-4">
          <div className="animate-marquee flex gap-16 items-center px-4">
            {marqueePartners.map((partner, idx) => (
              <span 
                key={idx} 
                className="text-2xl md:text-3xl font-black tracking-[0.25em] uppercase text-black hover:text-brand-red transition-colors duration-300 shrink-0 select-none cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Premium, Highly SEO-Structured Call to Action */}
      <section 
        ref={ctaRef}
        onMouseMove={handleCtaMouseMove}
        className="py-32 relative overflow-hidden bg-gradient-to-br from-[#050202] via-[#1a0505] to-[#050202] border-t border-white/5" 
        itemScope 
        itemType="https://schema.org/ContactPage"
      >
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 bg-[url('/home/CTA.png')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" />

        {/* Background Noise Overlay */}
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none mix-blend-overlay" />
        
        {/* Animated Glowing Spotlight (Mouse Parallax) */}
        <motion.div 
          style={{ x: ctaMouse.x, y: ctaMouse.y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
        />
        
        {/* Floating Red Particles */}
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
            {/* Premium Small Label */}
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.3em] uppercase text-white mb-8 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              LEAD EVENTS UAE
            </span>

            {/* H2 SEO Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] uppercase text-white mb-8 max-w-3xl">
              Ready to Elevate Your <br />
              <span className="text-outline">Upcoming Events</span> <br className="hidden sm:inline" />
              in Dubai & UAE?
            </h2>

            {/* SEO-Rich Description */}
            <p className="text-base md:text-lg text-brand-text/70 font-light max-w-3xl mb-12 leading-relaxed">
              Partner with Lead Events, a trusted event management company in Dubai specializing in corporate events, exhibitions, conferences, brand activations, and live experiences across the UAE. Let's create memorable events that inspire audiences and deliver measurable impact.
            </p>

            {/* CTA Buttons */}
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
