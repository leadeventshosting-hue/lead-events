import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" />
      <section className="pt-40 pb-24 bg-brand-dark min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Privacy Policy</h1>
          <p className="text-brand-text/70 text-xl leading-relaxed">
            We collect only the information needed to respond to inquiries and deliver event services. Contact us at info@leadevents.com for privacy requests.
          </p>
        </div>
      </section>
    </>
  );
}
