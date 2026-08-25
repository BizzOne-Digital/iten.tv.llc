import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const STATS = [
  { value: '50+', label: 'Original Episodes' },
  { value: '2M+', label: 'Monthly Viewers' },
  { value: '2', label: 'Streaming Platforms' },
  { value: '10+', label: 'Years Combined Experience' },
];

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="BUILT BY"
            highlight="ENTHUSIASTS"
            description="iTEN.TV was founded by racers, builders, and storytellers who wanted to give the automotive world the entertainment network it deserves. From street culture to the professional track, we capture it all with cinematic quality and authentic voices."
          />
          <Button to="/about" variant="outline">Learn More About Us</Button>

          <div className="grid grid-cols-2 gap-6 mt-12">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-brand-red pl-4">
                <div className="text-3xl font-heading font-bold text-white">{s.value}</div>
                <div className="text-gray text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="/about.png" alt="iTEN.TV production" className="rounded-lg w-full h-[480px] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-brand-red text-white px-6 py-4 rounded font-heading uppercase text-sm hidden md:block">
            Since 2019
          </div>
        </div>
      </div>
    </section>
  );
}
