import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const FAST_FACTS = [
  { value: '30+', label: 'Years of Industry Experience' },
  { value: '12+', label: 'Countries Filmed In' },
  { value: '2008', label: 'Live Streaming Video Since' },
  { value: '7.5M', label: 'Viewers, Area 51 Live Event' },
];

const FILMING_HIGHLIGHTS = [
  'V8 Supercars',
  'Formula 1',
  'MotoGP',
  'NASCAR',
  'NHRA',
  'WRC',
  'The Matrix',
  'Fast and Furious',
  'Star Wars Episode 1',
  'Moulin Rouge',
  'Music videos',
  '100+ additional productions',
];

export default function About() {
  return (
    <>
      <SEO title="About Us" description="30+ years of broadcast experience. Meet the team behind iTEN.TV, an automotive and racing entertainment network." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Our Story" title="ABOUT" highlight="iTEN.TV" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading eyebrow="Why Choose Us?" title="NOT JUST" highlight="HOBBYISTS" align="center" />
          <p className="text-gray text-lg">
            We're not just hobbyists with cameras; we're seasoned experts who have traveled the globe crafting
            compelling stories and visual masterpieces.
          </p>
        </div>
      </section>

      {/* Who We Are / Fast Facts */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <img
            src="/about.png"
            alt="iTEN.TV production"
            className="rounded-lg w-full h-[420px] object-cover border-2 border-brand-red"
          />
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="FAST"
              highlight="FACTS"
              description="A small crew of seasoned professionals with a combined 30+ years in broadcast, film, and motorsports production."
            />
            <div className="grid grid-cols-2 gap-6">
              {FAST_FACTS.map((f) => (
                <div key={f.label} className="border-l-2 border-brand-red pl-4">
                  <div className="text-3xl font-heading font-bold text-white">{f.value}</div>
                  <div className="text-gray text-sm">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where It Begun */}
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading eyebrow="Our History" title="WHERE IT" highlight="BEGUN" align="center" />
          <p className="text-gray text-lg">
            In the mid-1990s, RealNetworks was among the pioneering companies that introduced video streaming
            over the internet — and iTEN.TV's team has been pushing that same frontier ever since, live
            streaming video since 2008 and delivering the first HD concert stream in 2011 (Rock n' Roll
            Invasion at Area 51), reaching 7.5 million viewers.
          </p>
        </div>
      </section>

      {/* Filming Highlights */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading eyebrow="On Location" title="FILMING" highlight="HIGHLIGHTS" align="center" />
          <div className="flex flex-wrap justify-center gap-3">
            {FILMING_HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="border-2 border-brand-red rounded-full px-5 py-2 text-white text-sm font-heading uppercase tracking-wide"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <SectionHeading
            eyebrow="The People Behind It"
            title="MEET THE"
            highlight="TEAM"
            align="center"
            description="Cinematographers, producers, racing consultants, and technical specialists — the crew putting iTEN.TV on screens everywhere."
          />
          <Button to="/team" icon={ArrowRight}>View Our Team</Button>
        </div>
      </section>

      {/* Video production CTA */}
      <section className="py-24 bg-elevated">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            eyebrow="Beyond The Network"
            title="PROFESSIONAL VIDEO"
            highlight="PRODUCTION"
            align="center"
            description="Beyond our own programming, iTEN.TV produces professional video content for brands, events, and businesses — event coverage, commercials, and promotional films shot with the same cinematic standard as our shows."
          />
          <Button to="/services" icon={ArrowRight}>See Our Services</Button>
        </div>
      </section>
    </>
  );
}
