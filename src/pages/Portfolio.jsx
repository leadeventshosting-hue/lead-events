import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { portfolioImages } from '../data/portfolioImages';

export default function Portfolio() {
  const location = useLocation();
  const [filter, setFilter] = useState(location.state?.category || 'All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    if (location.state?.category) {
      setFilter(location.state.category);
      // Scroll directly to gallery, skipping the hero
      const gallery = document.getElementById('portfolio-gallery');
      if (gallery) {
        gallery.scrollIntoView({ behavior: 'instant' });
      } else {
        // Fallback: try after a short delay for first paint
        setTimeout(() => {
          document.getElementById('portfolio-gallery')?.scrollIntoView({ behavior: 'instant' });
        }, 100);
      }
    }
  }, [location.state]);

  const { scrollYProgress } = useScroll();
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const categories = [
    'All',
    'Fabrication',
    'Furniture',
    'Entertainment',
    'Club Installations',
    'Kids Entertainment',
    'Podium',
    'Screen',
    'Ambience Lights',
    'Effects',
    'Events',
    'Truss',
  ];

  const projects = portfolioImages
    .map((asset, index) => ({
      id: `${asset.category}-${index}`,
      category: asset.category,
      image: asset.src,
    }))
    .filter((_, index) => index !== 7 && index !== 8);

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  // Reset selected image when changing category filter to avoid out of bounds
  useEffect(() => {
    setSelectedImageIndex(null);
  }, [filter]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredProjects]);

  return (
    <>
      <SEO title="Portfolio" />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            y: yHeroBg,
            backgroundImage: `url('${portfolioImages[0].src}')`,
          }}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
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
            Our Work <span className="text-outline">Your Inspiration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-brand-text/80 max-w-3xl mb-12 font-light leading-relaxed"
          >
            Explore memorable corporate events, exhibitions, celebrations, and custom-built experiences delivered across the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button href="#portfolio-gallery" variant="primary" className="text-lg px-10 py-5 rounded-none cursor-hover-target">
              Explore Our Work
            </Button>
            <Button to="/contact" variant="secondary" className="text-lg px-10 py-5 rounded-none cursor-hover-target border-white/30 text-white hover:border-brand-red">
              Plan Your Event
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio-gallery" className="py-10 md:py-14 bg-[#fbf8f3] min-h-screen relative scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Minimalist Filters */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 border-b border-black/10 pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-hover-target relative ${
                  filter === cat ? 'text-brand-red' : 'text-brand-dark/45 hover:text-brand-dark'
                }`}
              >
                {cat}
                <span className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-red transition-all duration-300 ${
                  filter === cat ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Uniform responsive image grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[4/3] overflow-hidden cursor-hover-target bg-black cursor-pointer"
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img 
                    src={project.image} 
                    alt={`${project.category} portfolio project by Lead Events`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredProjects[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 select-none"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 p-2 cursor-hover-target z-50 bg-white/10 hover:bg-white/20 rounded-full"
              aria-label="Close Lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-all duration-300 p-3 cursor-hover-target z-50 bg-white/10 hover:bg-white/20 rounded-full hover:scale-105"
              aria-label="Previous Image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image Container with Animation */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredProjects[selectedImageIndex].image}
                alt={`${filteredProjects[selectedImageIndex].category} portfolio project`}
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-md shadow-2xl"
              />
              
              {/* Category label / caption at the bottom */}
              <div className="mt-4 px-6 py-2 bg-white/10 text-white text-sm tracking-[0.2em] font-semibold uppercase rounded-full border border-white/20">
                {filteredProjects[selectedImageIndex].category}
              </div>
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-all duration-300 p-3 cursor-hover-target z-50 bg-white/10 hover:bg-white/20 rounded-full hover:scale-105"
              aria-label="Next Image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
