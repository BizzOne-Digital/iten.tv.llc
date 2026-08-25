import { Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { FEATURED_SHOWS } from '../utils/constants';

export default function FeaturedShows() {
  return (
    <section className="py-24 bg-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Now Streaming" title="FEATURED" highlight="SHOWS" />
        <div className="flex lg:grid lg:grid-cols-6 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-6 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
          {FEATURED_SHOWS.map((show) => (
            <div
              key={show.id}
              className="group relative w-[42vw] sm:w-[220px] lg:w-auto shrink-0 lg:shrink aspect-[2/3] rounded-lg overflow-hidden snap-start"
            >
              <img
                src={show.poster}
                alt={show.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <Play size={28} className="text-brand-red mb-2" />
                <h3 className="text-white font-heading text-sm uppercase">{show.title}</h3>
                <span className="text-gray text-xs">{show.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
