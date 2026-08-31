import SectionHeading from '../components/SectionHeading';

const YOUTUBE_ID = '1m1Jv7nnrAU';

export default function SampleVideo() {
  return (
    <section className="py-24 bg-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="See It In Action" title="SAMPLE" highlight="VIDEO" align="center" />
        <div className="relative rounded-lg overflow-hidden border-2 border-brand-red aspect-video bg-bg">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="iTEN.TV Sample Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
