import { useEffect, useState } from 'react';
import { ArrowRight, Palette, Video, Scissors, Sparkles, Music, Volume2, CheckCircle, Radio } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import api from '../services/api';
import { img } from '../utils/constants';

const SAMPLE_VIDEOS = [
  {
    title: 'Motorsport Productions',
    youtubeId: 'qshIUYNwyIc',
    desc: 'At iTEN.TV, we love motorsports, from wing sprint cars, flat track motorcycles to go karts. We like to think we are exceptional photographers compared to others and we know how to produce videos, TV shows and films about racing.',
  },
  {
    title: 'Auto Collection Series',
    youtubeId: 'Ex9xmfVudbw',
    desc: 'The "Auto Collection Series" is a regular show created by iTEN.TV. It focuses on the local car scenes, without the over top stories on collector cars, bikes and everything else.',
  },
  {
    title: 'Mountain Home Speedway',
    youtubeId: 'N56iv6ojPrQ',
    desc: "Season Opener race, May 18th, 2024. Check out our small production for this local racetrack. Whatever your budget is, we'll make you look BIG!",
  },
  {
    title: 'Music Video Sampler',
    youtubeId: '0aFGuArUQ7M',
    desc: 'There is no "real" flat fee for making a music video. But a decent music video starts around $2K-$3K. Sure you can get one of your friends to do it... but we know how that ends up 95% of the time!',
  },
  {
    title: 'Real Estate Videos',
    youtubeId: 'niLorSGV1B4',
    desc: 'We also get to film really impressive real estate videos. Sure you can do it on your "smartphone" but you don\'t always get the results you want.',
  },
  {
    title: 'Hannah Strumner - Video',
    youtubeId: 'Fa_u4f13aSk',
    desc: 'Recently we had the opportunity to work with a very talented artist from Idaho, Hannah Strumner. This video was shot in Boise, ID and surrounding areas. It also got us an award for "Best Music Video".',
  },
  {
    title: 'X-Static, EPK',
    youtubeId: 'iXxSbNV3s-Q',
    desc: "In this day and age, you need more than a flyer to get gigs. Checkout X-Static's digital EPK. Our EPK packs include videos as well as PDF files for emailing or handing them directly to booking agents.",
  },
];

const REEL_IMAGES = [
  { src: '/wwd_001.jpg', label: 'Promotional Videos' },
  { src: '/wwd_002.jpg', label: 'Full Productions' },
  { src: '/wwd_003.jpg', label: 'LIVE Shows' },
  { src: '/wwd_004.jpg', label: 'Post Production' },
];

const CAPABILITIES = [
  { icon: Palette, label: 'Design' },
  { icon: Video, label: 'Filming' },
  { icon: Scissors, label: 'Editing' },
  { icon: Sparkles, label: 'Motion Graphics' },
  { icon: Music, label: 'Music' },
  { icon: Volume2, label: 'Sound' },
  { icon: CheckCircle, label: 'Finishing' },
  { icon: Radio, label: 'LIVE Streaming' },
];

const PROOF_IMAGES = [
  { src: '/film_001.jpg', label: 'Passionate' },
  { src: '/film_002.jpg', label: 'Motivating' },
  { src: '/film_003.jpg', label: 'Informative' },
  { src: '/film_004.jpg', label: 'Creative' },
  { src: '/ded_001.jpg', label: 'Feature Films' },
  { src: '/ded_002.jpg', label: 'Music Videos' },
  { src: '/ded_003.jpg', label: 'TV Shows' },
  { src: '/ded_004.jpg', label: 'Commercials / Corporate' },
];

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/services')
      .then(({ data }) => setServices(data))
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SEO title="Services" description="Meet iTEN.TV — where vision becomes unforgettable visual storytelling. Production, creative, shows, racing media, and music videos." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading
            eyebrow="What We Do"
            title="OUR"
            highlight="SERVICES"
            description="Meet iTEN.TV — where vision becomes unforgettable visual storytelling. We're selective about the projects we take on, so every one gets the full attention of a team with 30+ years of combined experience."
          />
          <Button to="#show-reel" icon={ArrowRight}>Watch Our Show Reel</Button>
        </div>
      </section>

      {!loading && services.length === 0 && (
        <section className="pb-16 max-w-[1440px] mx-auto px-6">
          <p className="text-gray text-sm">Services are being updated — check back soon, or contact us directly.</p>
        </section>
      )}

      {services.map((s, i) => (
        <section key={s._id} className={`py-16 ${i % 2 === 0 ? 'bg-elevated' : 'bg-bg'}`}>
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <span className="text-brand-red font-heading text-sm tracking-[0.2em] uppercase mb-2 block">
                Service {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-white mb-4">{s.title}</h2>
              <p className="text-gray mb-6">{s.description}</p>
              <Button to="/contact" icon={ArrowRight}>Inquire About This</Button>
            </div>
            <img
              src={s.image?.url || img(70 + i, 700, 500)}
              alt={s.title}
              className={`rounded-lg w-full h-[340px] object-cover border-2 border-brand-red ${i % 2 === 1 ? 'md:order-1' : ''}`}
            />
          </div>
        </section>
      ))}

      {/* Sample Videos */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading
            eyebrow="See The Work"
            title="SAMPLE"
            highlight="VIDEOS"
            align="center"
            description="We can't list all the videos we have worked on or produced, but here's some of our favorites."
          />
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {SAMPLE_VIDEOS.map((v) => (
              <div key={v.youtubeId}>
                <h3 className="text-brand-red font-heading uppercase text-lg mb-3">{v.title}</h3>
                <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-brand-red mb-3">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="text-gray text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Our Show Reel */}
      <section id="show-reel" className="py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="font-heading italic text-2xl md:text-3xl text-white mb-6">Watch Our Show Reel</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-brand-red">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/CDkjYcXAuHY"
                  title="iTEN.TV Show Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="space-y-5 text-gray text-sm md:text-base pt-2 md:pt-16">
              <p>Meet iTEN.TV — where vision becomes unforgettable visual storytelling.</p>
              <p>
                There are many production companies in this big, beautiful world, each specializing in
                different areas. At iTEN.TV, we have a dedicated crew that knows exactly what it does best. We
                don't take on every project that comes our way; we take on projects where we know we can
                deliver a high-end result.
              </p>
              <p>
                From motorsports and music videos to bold, high-impact visual content, we focus on productions
                that inspire us and allow us to showcase our expertise.
              </p>
              <p>
                We may not be the cheapest production company, nor are we the most expensive. What we are is
                confident in our craft. We're not fly-by-nighters, and we didn't learn our trade by watching
                videos on YouTube. We are seasoned professionals with years of experience and specialized
                training in our field.
              </p>
              <p className="text-white font-heading uppercase tracking-wide">
                The only rule we have is — if we don't feel it, we don't do it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {REEL_IMAGES.map((img_) => (
              <div key={img_.label}>
                <img src={img_.src} alt={img_.label} className="w-full aspect-video object-cover rounded-lg border-2 border-brand-red mb-2" />
                <p className="text-white text-center text-sm">{img_.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team of Dedicated Professionals */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-heading italic text-2xl md:text-3xl text-white mb-10 text-center">
            A Team of Dedicated Professionals
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/montage.jpg" alt="iTEN.TV production montage" className="w-full rounded-lg border-2 border-brand-red object-cover" />
            <div>
              <p className="text-gray mb-8">
                At iTEN.TV, we specialize in delivering outstanding video production services. Our team is
                skilled in creating captivating content that spans across various platforms from film, TV to
                social media & LIVE events.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {CAPABILITIES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-card border border-white/10 rounded-lg px-4 py-3">
                    <Icon size={18} className="text-brand-red shrink-0" />
                    <span className="text-white text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof grid */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {PROOF_IMAGES.map((p) => (
              <div key={p.label}>
                <img src={p.src} alt={p.label} className="w-full aspect-video object-cover rounded-lg border-2 border-brand-red mb-2" />
                <p className="text-white text-center text-sm">{p.label}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading italic text-2xl md:text-3xl text-white text-center mb-8">
            Proud to have provided services for the following:
          </h2>
          <img src="/logos2.jpg" alt="Brands and networks iTEN.TV has worked with" className="w-full rounded-lg bg-white p-4 border-2 border-brand-red" />
        </div>
      </section>
    </>
  );
}
