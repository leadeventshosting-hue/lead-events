import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

/* ── Page-level SEO constants ── */
const SITE_URL = 'https://www.leadevents.ae';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#webpage`,
  name: 'Contact Lead Events — Event Management Company Dubai UAE',
  description:
    'Contact Lead Events, Dubai\'s premier event management company. Reach our team for corporate events, weddings, gala dinners, product launches, conferences & exhibitions across the UAE.',
  url: `${SITE_URL}/contact`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-AE',
  breadcrumb: { '@id': `${SITE_URL}/contact#breadcrumb` },
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Lead Events',
    telephone: '+971501234567',
    email: 'info@leadevents.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boulevard Plaza, Tower 1',
      addressLocality: 'Business Bay',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    openingHours: ['Mo-Fr 09:00-19:00', 'Sa 10:00-16:00'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971501234567',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@leadevents.ae',
        contactType: 'sales',
        areaServed: 'AE',
      },
    ],
  },
};

const breadcrumbs = [
  { name: 'Contact Us', url: `${SITE_URL}/contact` },
];

const contactKeywords =
  'contact Lead Events Dubai, event management contact UAE, hire event planner Dubai, book corporate event company UAE, event inquiry Dubai, event management quote UAE, gala dinner planner Dubai, corporate event booking UAE';

const contactDescription =
  'Contact Lead Events — Dubai\'s #1 event management company. Get a free quote for corporate events, weddings, gala dinners, product launches & conferences. Our team responds within 2 hours.';

/* ─── Floating particle dots ─── */
const Particle = ({ style }) => (
  <motion.span
    className="absolute rounded-full bg-brand-red/30 pointer-events-none"
    style={style}
    animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  style: {
    width: `${4 + Math.random() * 8}px`,
    height: `${4 + Math.random() * 8}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  },
}));

/* ─── Stats ─── */
const stats = [
  { label: 'Events Delivered', value: '500+' },
  { label: 'Happy Clients', value: '350+' },
  { label: 'Response Time', value: '24h' },
];

/* ─── Contact info cards ─── */
const contactCards = [
  {
    icon: MapPin,
    title: 'Headquarters',
    lines: ['Street 12 - Warehouse 4', 'Umm Ramool - Dubai'],
    accent: 'from-rose-500 to-brand-red',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+971 50 9689671', '+971 4 2841220'],
    href: 'tel:+971509689671',
    accent: 'from-brand-red to-orange-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@leadevents.com'],
    href: 'mailto:info@leadevents.com',
    accent: 'from-orange-500 to-amber-400',
  },
];

/* ─── Card inner ─── */
function ContactCardInner({ card, Icon }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm p-7 h-full group-hover:border-brand-dark/20 group-hover:shadow-md transition-all duration-300">
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center mb-6 shadow-md`}>
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-dark/40 mb-3">{card.title}</h3>
      {card.lines.map((line) => (
        <p key={line} className="text-sm text-brand-dark/70 font-light leading-relaxed">{line}</p>
      ))}
    </div>
  );
}

/* ─── Animated form field ─── */
function Field({ label, name, type = 'text', textarea = false, required }) {
  const [active, setActive] = useState(false);
  const [filled, setFilled] = useState(false);
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div className="relative group">
      <div
        className="absolute -inset-0.5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, rgba(237,28,36,0.35), rgba(237,28,36,0.08))' }}
      />
      <div className="relative bg-white border border-brand-dark/15 rounded-xl overflow-hidden shadow-sm group-focus-within:border-brand-red/50 transition-colors duration-300">
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium tracking-wide text-brand-dark/40
            ${active || filled ? 'top-2 text-[11px] text-brand-red' : 'top-4 text-sm'}`}
        >
          {label}
        </label>
        <Tag
          name={name}
          type={type}
          required={required}
          rows={textarea ? 5 : undefined}
          onFocus={() => setActive(true)}
          onBlur={(e) => { setActive(false); setFilled(!!e.target.value); }}
          onChange={(e) => setFilled(!!e.target.value)}
          className="w-full bg-transparent pt-8 pb-3 px-4 text-brand-dark text-sm focus:outline-none resize-none"
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════ */
export default function Contact() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get('firstName') || ''} ${data.get('lastName') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Event Type: ${data.get('eventType') || ''}`,
      '',
      data.get('message') || '',
    ].join('\n');
    window.location.href = `mailto:info@leadevents.ae?subject=${encodeURIComponent('New Event Inquiry')}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO
        title="Contact Lead Events — Event Management Company Dubai UAE"
        description={contactDescription}
        keywords={contactKeywords}
        canonical={`${SITE_URL}/contact`}
        schema={contactPageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label="Contact Lead Events — Event Management Company Dubai UAE"
        itemScope
        itemType="https://schema.org/ContactPage"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Hidden SEO text block — crawlable but visually hidden */}
        <div className="sr-only">
          <h2>Contact Lead Events — Dubai&apos;s Premier Event Management Company</h2>
          <p>
            Lead Events is the UAE&apos;s top-rated event management company based in Business Bay, Dubai.
            We specialise in corporate events, weddings, gala dinners, product launches, conferences,
            exhibitions, and brand activations. Contact our expert team today for a free consultation
            and event quote. We serve clients across Dubai, Abu Dhabi, Sharjah, and the wider UAE.
          </p>
          <address itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">Boulevard Plaza, Tower 1</span>,{' '}
            <span itemProp="addressLocality">Business Bay</span>,{' '}
            <span itemProp="addressRegion">Dubai</span>,{' '}
            <span itemProp="addressCountry">UAE</span>
          </address>
          <a href="tel:+971501234567" itemProp="telephone">+971 50 123 4567</a>
          <a href="mailto:info@leadevents.ae" itemProp="email">info@leadevents.ae</a>
          <ul>
            <li>Corporate Event Management Dubai</li>
            <li>Wedding Planner UAE</li>
            <li>Gala Dinner Organiser Dubai</li>
            <li>Conference Management UAE</li>
            <li>Exhibition Company Dubai</li>
            <li>Product Launch Events UAE</li>
            <li>Brand Activation Agency Dubai</li>
          </ul>
        </div>

        {/* ── Hero background image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact/hero.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay so text remains readable */}
          <div className="absolute inset-0 bg-brand-dark/70" />
          {/* Red accent glow on top of overlay */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-red/20 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-red/10 blur-[100px] mix-blend-screen" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {particles.map((p) => <Particle key={p.id} style={p.style} />)}
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
          {/* Semantic header landmark */}
          <header className="max-w-5xl">

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-[2px] bg-brand-red" aria-hidden="true" />
              <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">
                Dubai&apos;s Premier Event Management Company
              </span>
            </motion.div>

            {/* H1 — primary keyword target */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-[12vw] sm:text-[8vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] mb-8"
              itemProp="headline"
            >
              Contact
              <br />
              <span className="text-outline">Lead Events</span>
              <br />
              <span className="text-gradient-red">Dubai, UAE.</span>
            </motion.h1>

            {/* Keyword-rich description — visible to users & crawlers */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-text/50 leading-relaxed font-light max-w-2xl mb-6"
              itemProp="description"
            >
              Get in touch with Dubai&apos;s #1 event management company. Whether you need a{' '}
              <strong className="text-white/70 font-medium">corporate event planner</strong>,{' '}
              <strong className="text-white/70 font-medium">wedding organiser</strong>, or{' '}
              <strong className="text-white/70 font-medium">gala dinner specialist</strong> in the UAE —
              our team responds within 2 hours.
            </motion.p>

            {/* Service tags — keyword signals */}
            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
              aria-label="Our event services"
            >
              {[
                'Corporate Events',
                'Weddings',
                'Gala Dinners',
                'Conferences',
                'Product Launches',
                'Exhibitions',
                'Brand Activations',
              ].map((tag) => (
                <li
                  key={tag}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 border border-white/10 text-brand-text/40 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </motion.ul>

            {/* Stats with semantic markup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-x-12 gap-y-4"
              role="list"
              aria-label="Lead Events key statistics"
            >
              {stats.map((s) => (
                <div key={s.label} role="listitem">
                  <p className="text-3xl font-black text-white" aria-label={`${s.value} ${s.label}`}>{s.value}</p>
                  <p className="text-xs text-brand-text/40 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </header>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-text/30"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-brand-red to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-24 bg-[#fbf8f3] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="relative group"
                >
                  {card.href ? (
                    <a href={card.href} className="block h-full">
                      <ContactCardInner card={card} Icon={Icon} />
                    </a>
                  ) : (
                    <ContactCardInner card={card} Icon={Icon} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-12 bg-[#fbf8f3] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-red/5 blur-[150px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[2px] bg-brand-red" />
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Send a Message</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-brand-dark mb-2">
                Start Your <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Event</span>
              </h2>
              <p className="text-brand-dark/50 font-light mb-12 max-w-lg">
                Fill out the form and one of our specialists will reach out within 2 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter text-brand-dark">Inquiry Sent!</h3>
                  <p className="text-brand-dark/50">We'll be in touch very soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="First Name" name="firstName" required />
                    <Field label="Last Name" name="lastName" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Email Address" name="email" type="email" required />
                    <Field label="Phone Number" name="phone" type="tel" />
                  </div>

                  {/* Event type */}
                  <div className="relative group">
                    <div
                      className="absolute -inset-0.5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(135deg, rgba(237,28,36,0.35), rgba(237,28,36,0.08))' }}
                    />
                    <div className="relative bg-white border border-brand-dark/15 rounded-xl shadow-sm group-focus-within:border-brand-red/50 transition-colors duration-300">
                      <label className="block px-4 pt-3 text-[11px] text-brand-red font-medium tracking-wide">Event Type</label>
                      <select
                        name="eventType"
                        className="w-full bg-transparent px-4 pb-3 pt-1 text-brand-dark text-sm focus:outline-none appearance-none"
                        style={{ cursor: 'none' }}
                      >
                        <option value="" className="bg-white">Select an event type…</option>
                        <option value="Corporate" className="bg-white">Corporate Event</option>
                        <option value="Wedding" className="bg-white">Wedding &amp; Celebrations</option>
                        <option value="Conference" className="bg-white">Conference &amp; Summit</option>
                        <option value="Product Launch" className="bg-white">Product Launch</option>
                        <option value="Exhibition" className="bg-white">Exhibition &amp; Expo</option>
                        <option value="Gala Dinner" className="bg-white">Gala Dinner</option>
                        <option value="Other" className="bg-white">Other</option>
                      </select>
                    </div>
                  </div>

                  <Field label="Tell us about your event…" name="message" textarea required />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-brand-red text-white font-bold tracking-[0.15em] uppercase text-sm overflow-hidden group"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Send size={16} className="relative z-10" />
                    <span className="relative z-10">Submit Inquiry</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* WhatsApp card */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm p-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-xs text-green-600 font-bold tracking-widest uppercase">Online Now</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-brand-dark mb-2">Chat Instantly</h3>
                  <p className="text-brand-dark/50 font-light text-sm mb-6 leading-relaxed">
                    Skip the form. Connect directly with an event specialist on WhatsApp — get answers in minutes.
                  </p>
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 w-full justify-center py-4 px-6 border-2 border-green-500/60 text-green-700 font-bold text-sm tracking-[0.15em] uppercase rounded-xl hover:bg-green-500/10 transition-colors duration-300 group/wa"
                  >
                    <MessageCircle size={18} className="group-hover/wa:rotate-12 transition-transform" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Direct contact */}
              <div className="rounded-2xl border border-brand-dark/10 bg-white shadow-sm p-8 space-y-5">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-dark/30 mb-5">Direct Lines</h3>
                {[
                  { icon: Phone, label: 'Call Us', value: '+971 50 9689671', href: 'tel:+971509689671' },
                  { icon: Phone, label: 'Landline', value: '+971 4 2841220', href: 'tel:+97142841220' },
                  { icon: Mail, label: 'Email Us', value: 'info@leadevents.com', href: 'mailto:info@leadevents.com' },
                  { icon: MapPin, label: 'Visit Us', value: 'Street 12 - Warehouse 4 - Umm Ramool - Dubai', href: '#map' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group/link hover:text-brand-red transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover/link:bg-brand-red/20 transition-colors">
                      <Icon size={16} className="text-brand-red" />
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-dark/30 tracking-widest uppercase">{label}</p>
                      <p className="text-sm font-medium text-brand-dark/70 group-hover/link:text-brand-red transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <section id="map" className="relative bg-[#fbf8f3] pb-10">
        <div className="container mx-auto px-6 lg:px-12 pt-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[2px] bg-brand-red" />
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Find Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-brand-dark">
                Our <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Location</span>
              </h2>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-6 lg:mx-12 rounded-3xl overflow-hidden border border-white/8"
          style={{ height: '520px' }}
        >
          <div className="absolute inset-0 bg-brand-red/5 pointer-events-none z-10 rounded-3xl" />
          <iframe
            title="Lead Events Location – Umm Ramool Dubai"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.813098380327!2d55.3601716!3d25.2216667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db3e8436cd9%3A0xc3b8602b9e69dfbf!2sUmm%20Ramool%20-%20Dubai!5e0!3m2!1sen!2sae!4v1716388410292!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(60%) contrast(1.1) brightness(0.8)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          {/* Info overlay card */}
          <div className="absolute bottom-6 left-6 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-brand-dark/90 backdrop-blur-sm border border-white/10 rounded-2xl p-5 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center">
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="font-black text-sm uppercase tracking-tighter">Lead Events</span>
              </div>
              <p className="text-xs text-brand-text/40 leading-relaxed">
                Street 12 - Warehouse 4<br />
                Umm Ramool - Dubai
              </p>
              <a
                href="https://maps.google.com/?q=Street+12+Warehouse+4+Umm+Ramool+Dubai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-brand-red text-xs font-bold tracking-widest uppercase hover:gap-3 transition-all"
              >
                Get Directions <ArrowRight size={12} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </>
  );
}
