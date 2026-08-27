import { Flag, Car, Megaphone, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const CARDS = [
  { icon: Flag, title: 'Racing Shows', desc: 'Full-episode coverage of race weekends, teams, and drivers.' },
  { icon: Car, title: 'Automotive Shows', desc: 'Build features, shop tours, and custom car storytelling.' },
  { icon: Megaphone, title: 'Promotional Content', desc: 'Branded video content for sponsors and partners.' },
];

export default function VideoProductionServices() {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="What We Offer" title="VIDEO PRODUCTION" highlight="SERVICES" />

        <div className="bg-gradient-to-br from-card to-elevated border border-white/10 rounded-lg p-10 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold uppercase text-white mb-2">
              Full Video <span className="text-brand-red">Productions</span>
            </h3>
            <p className="text-gray max-w-xl">
              Video productions available from $500+ — contact us for a custom quote.
            </p>
          </div>
          <Button to="/contact" icon={ArrowRight}>Get a Quote</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-white/10 rounded-lg p-8 hover:border-brand-red/50 transition-colors">
              <Icon size={28} className="text-brand-red mb-4" />
              <h4 className="font-heading uppercase text-white text-lg mb-2">{title}</h4>
              <p className="text-gray text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
