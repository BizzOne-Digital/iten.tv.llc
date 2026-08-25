import { useEffect, useState } from 'react';
import { Play, Compass, Tv } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import api from '../services/api';
import { PLACEHOLDER_HERO_POSTER } from '../utils/constants';

const heroImage = '/hero.png';

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    api
      .get('/hero')
      .then(({ data }) => setHero(data))
      .catch(() => setHero(null));
  }, []);

  const eyebrow = hero?.eyebrowText || 'WELCOME TO iTEN.TV';
  const headingMain = hero?.headingMain || 'POWERED BY';
  const headingHighlight = hero?.headingHighlight || 'PASSION';
  const headingSub = hero?.headingSub || 'POWERED BY STORIES';
  const description =
    hero?.description ||
    'iTEN.TV is a next-generation automotive and racing entertainment network — bringing street culture, motorsports, and builder stories to screens everywhere.';
  const poster = hero?.posterImageUrl || heroImage || PLACEHOLDER_HERO_POSTER;
  const platforms = hero?.platforms?.length ? hero.platforms : ['Roku', 'Amazon Fire TV'];

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={poster}
        alt="iTEN.TV automotive entertainment"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 via-40% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_50%,rgba(225,6,0,0.18),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-red font-heading text-sm tracking-[0.3em] uppercase mb-4 block"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold uppercase text-white leading-[1.05] max-w-3xl"
        >
          {headingMain} <span className="text-brand-red">{headingHighlight}</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl font-display font-semibold text-white/90 mt-2"
        >
          {headingSub}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray max-w-xl mt-6"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <Button to="/blog" icon={Play}>Watch Now</Button>
          <Button to="/services" variant="outline" icon={Compass}>Explore Our Shows</Button>
        </motion.div>

        <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-gray text-sm">
            <Tv size={20} className="text-brand-red" />
            {platforms.join(' • ')}
          </div>
          <div className="flex gap-8 text-xs text-gray uppercase tracking-wide">
            <span>HD Streaming</span>
            <span>New Episodes Weekly</span>
            <span>Exclusive Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
