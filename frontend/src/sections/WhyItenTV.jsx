import { Sparkles, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const REASONS = [
  { icon: Sparkles, title: 'Authentic Storytelling', desc: 'Real drivers, real builders, real culture.' },
  { icon: Clock, title: 'Fresh Weekly Content', desc: 'New episodes and clips released every week.' },
  { icon: ShieldCheck, title: 'Trusted by Brands', desc: 'Partnered with sponsors across motorsports.' },
  { icon: TrendingUp, title: 'Growing Audience', desc: 'Millions of views across streaming platforms.' },
];

export default function WhyItenTV() {
  return (
    <section className="py-24 bg-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Why Choose Us" title="WHY" highlight="iTEN.TV" align="center" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center bg-card border border-white/10 rounded-lg p-8">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Icon size={22} className="text-brand-red" />
              </div>
              <h4 className="font-heading uppercase text-white mb-2">{title}</h4>
              <p className="text-gray text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
