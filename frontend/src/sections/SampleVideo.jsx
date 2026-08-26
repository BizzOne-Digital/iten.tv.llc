import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import api from '../services/api';

export default function SampleVideo() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    api
      .get('/hero')
      .then(({ data }) => setHero(data))
      .catch(() => setHero(null));
  }, []);

  const videoUrl = hero?.sampleVideoUrl || hero?.videoUrl || '/hero.mp4';

  return (
    <section className="py-24 bg-elevated">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="See It In Action" title="SAMPLE" highlight="VIDEO" align="center" />
        <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-video bg-bg">
          <video
            className="w-full h-full object-cover"
            src={videoUrl}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
