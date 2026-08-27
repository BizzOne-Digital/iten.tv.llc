import { Link } from 'react-router-dom';
import { Flag, Radio, Users2, Video, Tv, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import AboutSection from '../sections/AboutSection';
import WhyItenTV from '../sections/WhyItenTV';
import ContactCTA from '../sections/ContactCTA';

const VALUES = [
  {
    icon: Flag,
    title: 'Authenticity',
    text: 'Real racers, real builders, real stories — never scripted, never staged for clicks.',
  },
  {
    icon: Radio,
    title: 'Craft',
    text: 'Cinematic production values on every shoot, from a backyard build to a national event.',
  },
  {
    icon: Users2,
    title: 'Community',
    text: 'Built alongside the people who live automotive culture, not just film it from the sidelines.',
  },
  {
    icon: Video,
    title: 'Consistency',
    text: 'New episodes, reliable delivery, and production partners who show up when it matters.',
  },
];

const PLATFORMS = [
  { name: 'Roku', desc: 'Stream every series and special free with the iTEN.TV channel.' },
  { name: 'Amazon Fire TV', desc: 'Full catalog available on-demand for Fire TV households.' },
];

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about iTEN.TV, the automotive and racing entertainment network built by racers, builders, and storytellers." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Our Story" title="ABOUT" highlight="iTEN.TV" />
        </div>
      </section>

      <AboutSection />

      {/* Automotive Entertainment */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <img
            src="/about1.png"
            alt="Automotive entertainment production"
            className="rounded-lg w-full h-[420px] object-cover order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <SectionHeading
              eyebrow="Automotive Entertainment"
              title="STORIES FUELED"
              highlight="BY SPEED"
              description="iTEN.TV is a dedicated automotive entertainment network — alternative racing shows, muscle car and exotic car programming, motorcycle culture, and behind-the-scenes production content, all in one place. We give overlooked corners of automotive culture the broadcast-quality treatment they deserve."
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-red font-heading text-sm tracking-[0.2em] uppercase mb-2 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white leading-tight">
            Give automotive culture the network <span className="text-brand-red">it has always deserved</span>
          </h2>
          <p className="text-gray mt-6 max-w-2xl mx-auto">
            We exist to capture the racers, builders, and communities that traditional media overlooks — and to give
            brands and events a production partner who understands automotive culture from the inside.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading eyebrow="What We Stand For" title="OUR" highlight="VALUES" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card border border-white/10 rounded-lg p-6 hover:border-brand-red/50 transition-colors">
                <Icon className="text-brand-red mb-4" size={28} />
                <h3 className="font-heading uppercase text-white text-lg mb-2">{title}</h3>
                <p className="text-gray text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution platforms */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading
            eyebrow="Where To Watch"
            title="STREAMING &"
            highlight="DISTRIBUTION"
            description="iTEN.TV programming is available across leading streaming platforms, with more distribution partners on the way."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="bg-card border border-white/10 rounded-lg p-8 flex items-start gap-4">
                <Tv className="text-brand-red shrink-0" size={32} />
                <div>
                  <h3 className="font-heading uppercase text-white text-xl mb-1">{p.name}</h3>
                  <p className="text-gray text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video production */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Beyond The Network"
              title="PROFESSIONAL VIDEO"
              highlight="PRODUCTION"
              description="Beyond our own programming, iTEN.TV produces professional video content for automotive brands, events, and businesses — event coverage, commercials, and promotional films shot with the same cinematic standard as our shows. Video productions available from $500+ — contact us for a custom quote."
            />
            <Button to="/services" icon={ArrowRight}>See Our Services</Button>
          </div>
          <img
            src="/about2.png"
            alt="iTEN.TV video production crew"
            className="rounded-lg w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* Team preview */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <SectionHeading
            eyebrow="The People Behind It"
            title="MEET THE"
            highlight="TEAM"
            align="center"
            description="Racers, editors, producers, and storytellers — the crew putting iTEN.TV on screens everywhere."
          />
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-white font-heading uppercase tracking-wide border border-white/20 px-6 py-3 rounded hover:border-brand-red hover:text-brand-red transition-colors"
          >
            View Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <WhyItenTV />
      <ContactCTA />
    </>
  );
}
