import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO title="Terms" />
      <section className="pt-40 pb-24 bg-brand-dark min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Terms</h1>
          <p className="text-brand-text/70 text-xl leading-relaxed">
            Use of this website and our services is subject to project-specific agreements, availability, and written confirmation from Lead Events.
          </p>
        </div>
      </section>
    </>
  );
}
