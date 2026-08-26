import { useEffect, useState } from 'react';
import { Play, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import api from '../services/api';

const STORY_PARAGRAPHS = [
  'Since 2018, iTEN.TV broke away from the pack.',
  "We were done with the same tired storylines everyone else was recycling — the ones you'd seen a hundred times before you even hit play. So we did something the big networks never bother to do: we asked the \"right\" questions. We sat down with the racers, the fans, the people who actually live for this sport, and said, \"What do you want to see?\"",
  'Then we built it.',
  "Today, iTEN.TV is a living, breathing network of grassroots racing and original shows — the stuff the major networks won't touch. Raw racing. Real documentaries. The unfiltered, adrenaline-soaked content you've been craving, straight from the tracks that built this culture.",
  "But raw doesn't mean rough around the edges. We come from real television and film backgrounds, and it shows. Every frame is built on craft, not cut corners. It's the real thing, shot the way it deserves to be shot.",
  "We don't chase trends. We chase the extraordinary — and we make sure it's worth every second you give it.",
];

export default function WelcomeSection() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    api
      .get('/hero')
      .then(({ data }) => setHero(data))
      .catch(() => setHero(null));
  }, []);

  const eyebrow = hero?.eyebrowText || 'WELCOME TO iTEN.TV';
  const headingMain = hero?.headingMain || 'DRIVEN BY';
  const headingHighlight = hero?.headingHighlight || 'PASSION...';
  const headingSub = hero?.headingSub || 'POWERED BY STORIES';
  const description =
    hero?.description ||
    'iTEN.TV is a next-generation automotive and racing entertainment network — bringing street culture, motorsports, and builder stories to screens everywhere.';

  return (
    <section className="py-20 bg-bg text-center">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-brand-red font-heading text-sm tracking-[0.3em] uppercase mb-4 block"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-bold uppercase text-white leading-[1.05]"
        >
          {headingMain} <span className="text-brand-red">{headingHighlight}</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl font-display font-semibold text-white/90 mt-2"
        >
          {headingSub}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray max-w-xl mx-auto mt-6"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8 justify-center"
        >
          <Button to="/blog" icon={Play}>Watch Now</Button>
          <Button to="/services" variant="outline" icon={Compass}>Explore Our Shows</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-3xl mx-auto px-6 mt-14 pt-14 border-t border-white/10 text-left space-y-5"
      >
        {STORY_PARAGRAPHS.map((p, i) => (
          <p key={i} className={`text-gray ${i === 0 || i === 2 ? 'text-white font-heading uppercase tracking-wide text-lg' : ''}`}>
            {p}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
