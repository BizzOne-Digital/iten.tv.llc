import { Flag, Camera, Radio, Award } from 'lucide-react';

const FEATURES = [
  { icon: Flag, label: 'Live Racing Coverage' },
  { icon: Camera, label: 'Cinematic Production' },
  { icon: Radio, label: 'Original Series' },
  { icon: Award, label: 'Award-Winning Storytelling' },
];

export default function FeaturesBar() {
  return (
    <section className="bg-elevated border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
            <Icon size={20} className="text-brand-red shrink-0" />
            <span className="text-sm text-gray font-heading uppercase tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
