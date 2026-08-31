import { useEffect, useState } from 'react';
import { Play, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import api from '../services/api';

const STORY_PARAGRAPHS = [
  "Since 2018, we've been doing the opposite of everything the big guys do. No recycled storylines. No \"watch this guy's million-dollar shop build a car you'll never afford.\" We got tired of that before we even started, so we skipped it entirely.",
  'Instead, we went straight to the source. We sat down with racers, wrenchers, weekend warriors, and the everyday gearheads who actually live for this, asked one simple question: "What do you actually want to see?"',
  'Then we built it.',
  "Today, iTEN.TV is a growing lineup of grassroots racing and original shows built for the real car and bike community — the people turning wrenches in their own garage, not a million-dollar shop. Raw racing. Real builds. Real stories from real enthusiasts, told the way they deserve to be told.",
  "And here's the difference: we're run by people who've actually done this. Racers, builders, and industry pros who've turned their own wrenches and taken their own cars and bikes to the line — not TV execs guessing what \"car culture\" looks like.",
  "Raw doesn't mean rough, though. We come from real film and TV backgrounds, so every episode is shot with the same craft you'd expect from the big leagues, just pointed at the people the big leagues ignore.",
  'Catch us now on Roku and Amazon Firestick — with smartphones coming soon.',
  "We don't chase trends. We chase the builds, the racers, and the stories that actually matter to you. Come see what everyday car culture looks like when it's done right.",
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

  return (
    <section className="py-20 bg-bg">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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
      </div>

      <div className="max-w-[1440px] mx-auto px-6 mt-14 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-left space-y-5"
        >
          {STORY_PARAGRAPHS.map((p, i) => (
            <p key={i} className={`text-gray ${i === 2 || i === 6 ? 'text-white font-heading uppercase tracking-wide text-lg' : ''}`}>
              {p}
            </p>
          ))}
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          src="/huh.jpg"
          alt="iTEN.TV racing"
          className="w-full rounded-lg border-2 border-brand-red object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap gap-4 mt-14 justify-center"
      >
        <Button to="/blog" icon={Play}>Watch Now</Button>
        <Button to="/watch" variant="outline" icon={Compass}>Explore Our Shows</Button>
      </motion.div>
    </section>
  );
}
