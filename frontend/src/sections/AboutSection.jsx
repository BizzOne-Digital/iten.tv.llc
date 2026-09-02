import SectionHeading from '../components/SectionHeading';

export default function AboutSection() {
  return (
    <section className="py-24 bg-elevated">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading eyebrow="Who We Are" title="BUILT BY" highlight="ENTHUSIASTS" />
          <div className="space-y-4 text-gray max-w-2xl">
            <p>
              iTEN.TV was founded by racers, builders, and storytellers who looked at the automotive
              entertainment world and thought: <em>this isn't it.</em> So we built the network we always wished
              existed — one made by people who've actually lived this life.
            </p>
            <p>
              We're racers who've stood on the line with our hearts pounding. Builders who've skinned our
              knuckles at 2am chasing a deadline for race day. Storytellers who know that the best stories
              aren't found in a boardroom — they're found in the garage, the pit lane, and the local track
              where it all happens.
            </p>
            <p>
              From street culture to the professional circuit, we've got it all — and we capture it right.
              Cinematic quality. Authentic voices. No fluff, no filters, no fake drama. Just the real people,
              real machines, and real passion that make this world impossible to look away from.
            </p>
            <p>
              This isn't a network that pretends it knows car culture. It's a network built from inside it. And
              once you see the difference, you won't want to watch anything else.
            </p>
            <p className="text-white font-heading uppercase tracking-wide">iTEN.TV. This is how it's really done.</p>
          </div>
        </div>
        <div className="relative">
          <img src="/finalhuh.jpg" alt="iTEN.TV production" className="rounded-lg w-full h-[480px] object-cover border-2 border-brand-red" />
        </div>
      </div>
    </section>
  );
}
