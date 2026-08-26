import { useEffect, useState } from 'react';
import api from '../services/api';

export default function FeaturesBar() {
  const [platforms, setPlatforms] = useState(['Roku', 'Amazon Fire TV']);

  useEffect(() => {
    api
      .get('/hero')
      .then(({ data }) => {
        if (data?.platforms?.length) setPlatforms(data.platforms);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-elevated border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <span className="text-gray text-xs font-heading uppercase tracking-[0.2em]">Watch On</span>
        {platforms.map((p) => (
          <span key={p} className="text-white font-heading text-lg md:text-xl uppercase tracking-wide">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
