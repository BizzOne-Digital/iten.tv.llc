import SectionHeading from '../components/SectionHeading';

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
        </div>
        <div className="relative">
          <img src="/about.png" alt="iTEN.TV production" className="rounded-lg w-full h-[480px] object-cover" />
        </div>
      </div>
    </section>
  );
}
