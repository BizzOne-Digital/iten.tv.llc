import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import VideoProductionServices from '../sections/VideoProductionServices';
import ContactCTA from '../sections/ContactCTA';
import api from '../services/api';
import { img } from '../utils/constants';

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
          <Button to="/blog" icon={ArrowRight}>Watch Our Show Reel</Button>
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

      <VideoProductionServices />
      <ContactCTA />
    </>
  );
}
