import { useEffect, useState } from 'react';
import { Play, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import api from '../services/api';

export default function WelcomeSection() {
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
    </section>
  );
}
