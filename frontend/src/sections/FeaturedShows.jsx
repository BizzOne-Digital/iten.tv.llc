import SectionHeading from '../components/SectionHeading';
import { FEATURED_SHOWS } from '../utils/constants';

export default function FeaturedShows() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="Now Streaming" title="FEATURED" highlight="SHOWS" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {FEATURED_SHOWS.map((show) => (
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
