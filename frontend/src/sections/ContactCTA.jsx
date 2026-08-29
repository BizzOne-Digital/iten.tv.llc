import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-elevated">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <img
          src="/like-what-you-see.jpg"
          alt="iTEN.TV production collage"
          className="w-full rounded-lg border-2 border-brand-red object-cover"
        />
        <div>
          <SectionHeading eyebrow="Get In Touch" title="LIKE WHAT YOU" highlight="SEE?" />
          <p className="text-white font-heading uppercase tracking-wide mb-6">
            Do you have an event or project that needs to be filmed or produced right? Even a TV show idea!
          </p>
          <div className="space-y-5 text-gray text-sm md:text-base">
            <p>
              At iTEN.TV, we don't just capture great footage, we produce it, start to finish, entirely
              in-house. From live event coverage and broadcast-ready TV commercials to music videos and
              scroll-stopping social media content, our team handles the full production pipeline under one
              roof.
            </p>
            <p>
              iTEN.TV is built by industry specialists with a combined 70+ years of experience, having worked
              alongside some of the biggest names in the business. We're not a weekend hobby crew or a
              YouTube-certified operation chasing trends. We're the real deal, seasoned professionals
              delivering broadcast-quality work, every time.
            </p>
            <p>Let's bring your next project to life. A job by iTEN.TV is a job worth doing!</p>
          </div>
          <Button to="/services" icon={ArrowRight} className="mt-8">See Our Services</Button>
        </div>
      </div>
    </section>
  );
}
