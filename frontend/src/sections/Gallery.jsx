import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import api from '../services/api';

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api
      .get('/gallery')
      .then(({ data }) => setItems(data || []))
      .catch(() => setItems([]));
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="Latest Events" title="LATEST" highlight="EVENTS" align="center" />
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="relative group break-inside-avoid rounded-lg overflow-hidden border-2 border-brand-red"
            >
              <img
                src={item.image?.url}
                alt={item.title}
                loading="lazy"
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
              {(item.title || item.category) && (
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/0 to-bg/0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  {item.category && (
                    <span className="text-brand-red text-xs uppercase tracking-wide font-heading">{item.category}</span>
                  )}
                  {item.title && <span className="text-white text-sm font-medium">{item.title}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
