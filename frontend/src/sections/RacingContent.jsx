import Button from '../components/Button';

export default function RacingContent() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/track.png')" }}
    >
      <div className="absolute inset-0 bg-bg/80" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="text-brand-red font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
          Street to Track
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white leading-tight mb-6">
          FROM THE STREET TO THE <span className="text-brand-red">TRACK</span>
        </h2>
        <p className="text-gray mb-10">
          We follow the culture wherever it goes — from late-night meetups to championship podiums —
          capturing the machines, the drivers, and the moments that define racing today.
        </p>
        <Button to="/blog">Discover Our Content</Button>
      </div>
    </section>
  );
}
