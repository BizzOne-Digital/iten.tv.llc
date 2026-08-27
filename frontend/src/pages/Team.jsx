import { useEffect, useState } from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import api from '../services/api';
import { img } from '../utils/constants';

export default function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    api
      .get('/team')
      .then(({ data }) => setMembers(data))
      .catch(() => setMembers([]));
  }, []);

  return (
    <>
      <SEO title="Our Team" description="Meet the team behind iTEN.TV." />
      <section className="pt-40 pb-24 max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="The People" title="MEET THE" highlight="TEAM" align="center" />
        {members.length === 0 && <p className="text-gray text-center">Team profiles coming soon.</p>}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div key={m._id} className="bg-card border border-white/10 rounded-lg overflow-hidden text-center">
              <img
                src={m.photo?.url || img(80 + i, 400, 400)}
                alt={m.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-5">
                <h3 className="font-heading uppercase text-white">{m.name}</h3>
                <p className="text-brand-red text-sm mb-3">{m.role}</p>
                {m.bio && <p className="text-gray text-xs mb-3">{m.bio}</p>}
                <div className="flex justify-center gap-3">
                  {m.socials?.instagram && (
                    <a href={m.socials.instagram} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
                      <Instagram size={16} />
                    </a>
                  )}
                  {m.socials?.twitter && (
                    <a href={m.socials.twitter} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
                      <Twitter size={16} />
                    </a>
                  )}
                  {m.socials?.linkedin && (
                    <a href={m.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
                      <Linkedin size={16} />
                    </a>
                  )}
                  {m.socials?.facebook && (
                    <a href={m.socials.facebook} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
                      <Facebook size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
