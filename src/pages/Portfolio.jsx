import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['All', 'Corporate Events', 'Exhibitions', 'Activations', 'Conferences', 'Launch Events'];

  const projects = [
    { id: 1, title: 'Tech Summit 2025', category: 'Conferences', client: 'Global Tech', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', size: 'large' },
    { id: 2, title: 'Luxury Auto Launch', category: 'Launch Events', client: 'Auto Brand', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 3, title: 'Annual Gala Dinner', category: 'Corporate Events', client: 'Finance Corp', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
    { id: 4, title: 'Innovation Pavilion', category: 'Exhibitions', client: 'Future Solutions', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', size: 'large' },
    { id: 5, title: 'Summer Brand Tour', category: 'Activations', client: 'Beverage Co', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 6, title: 'Leadership Retreat', category: 'Corporate Events', client: 'Consulting Group', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <SEO title="Portfolio" />
      
      {/* Page Header */}
      <section className="pt-40 pb-16 bg-brand-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-radial from-brand-red/10 to-transparent mix-blend-screen pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Showcase</span>
            <h1 className="text-[10vw] sm:text-[8vw] font-black tracking-tighter leading-none mb-6">
              Our <span className="text-outline">Work.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-brand-dark min-h-screen relative">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Minimalist Filters */}
          <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-white/5 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-hover-target relative ${
                  filter === cat ? 'text-white' : 'text-brand-text/40 hover:text-white'
                }`}
              >
                {cat}
                <span className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-red transition-all duration-300 ${
                  filter === cat ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Masonry/Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative overflow-hidden cursor-hover-target rounded-sm ${
                    project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                    project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                    'md:col-span-1 md:row-span-1'
                  }`}
                  style={{
                    opacity: hoveredId !== null && hoveredId !== project.id ? 0.3 : 1,
                    transition: 'opacity 0.4s ease'
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Heavy dark overlay for premium feel */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">{project.title}</h3>
                    <p className="text-white/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Client: {project.client}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>
    </>
  );
}
