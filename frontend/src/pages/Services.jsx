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
      <SEO title="Services" description="Video production services from iTEN.TV — event coverage, promotional video, automotive content, and post production." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading
            eyebrow="What We Do"
            title="OUR"
            highlight="SERVICES"
            description="From full-episode automotive programming to on-site event coverage and branded promotional content, iTEN.TV brings cinematic production quality to every project. Every service below is backed by a team that lives and breathes automotive culture."
          />
        </div>
      </section>

      {!loading && services.length === 0 && (
        <section className="pb-16 max-w-[1440px] mx-auto px-6">
          <p className="text-gray text-sm">Services are being updated — check back soon, or contact us directly.</p>
        </section>
      )}

      {services.map((s, i) => (
        <section key={s._id} className={`py-16 ${i % 2 === 1 ? 'bg-elevated' : ''}`}>
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
              className={`rounded-lg w-full h-[340px] object-cover ${i % 2 === 1 ? 'md:order-1' : ''}`}
            />
          </div>
        </section>
      ))}

      <VideoProductionServices />
      <ContactCTA />
    </>
  );
}
