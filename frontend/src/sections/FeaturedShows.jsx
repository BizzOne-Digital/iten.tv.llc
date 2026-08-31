import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import api from '../services/api';
import { FEATURED_SHOWS } from '../utils/constants';

export default function FeaturedShows() {
  const [shows, setShows] = useState(FEATURED_SHOWS);

  useEffect(() => {
    api
      .get('/featured-shows')
      .then(({ data }) => {
        if (data?.length) {
          setShows(data.map((s) => ({ id: s._id, title: s.title, poster: s.image?.url })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="Now Streaming" title="FEATURED" highlight="SHOWS" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {shows.map((show) => (
            <div
              key={show.id}
              className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-brand-red"
            >
              <img
                src={show.poster}
                alt={show.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
