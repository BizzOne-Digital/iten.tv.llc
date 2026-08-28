import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    api
      .get('/hero')
      .then(({ data }) => setHero(data))
      .catch(() => setHero(null));
  }, []);

  const videoUrl = hero?.videoUrl || '/hero.mp4';
  const poster = hero?.posterImageUrl || '/hero-poster.jpg';

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
    </section>
  );
}
