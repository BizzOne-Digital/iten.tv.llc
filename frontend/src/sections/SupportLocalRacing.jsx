import { Flag } from 'lucide-react';
import Button from '../components/Button';

export default function SupportLocalRacing() {
  return (
    <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/track.png')" }}>
      <div className="absolute inset-0 bg-bg/85" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Flag className="text-brand-red mx-auto mb-4" size={32} />
        <span className="text-brand-red font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
          Grassroots Racing
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white leading-tight mb-6">
          SUPPORT LOCAL <span className="text-brand-red">RACING</span>
        </h2>
        <p className="text-gray mb-10">
          From weekend bracket racing to local track nights, iTEN.TV backs the tracks, teams, and drivers
          building motorsports from the ground up — because the next generation of racing starts local.
        </p>
        <Button to="/contact">Partner With Us</Button>
      </div>
    </section>
  );
}
