import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function OwnTheShow() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <img
          src="/own-the-show.jpg"
          alt="Own the show - sponsorship on iTEN.TV"
          className="w-full rounded-lg border-2 border-brand-red object-cover"
        />
        <div>
          <span className="text-brand-red font-heading text-sm tracking-[0.2em] uppercase mb-2 block">
            Stop Renting Airtime
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-6">
            OWN THE <span className="text-brand-red">SHOW</span>
          </h2>
          <div className="space-y-5 text-gray text-sm md:text-base">
            <p>
              Traditional advertising is a rental agreement - you pay, you flash across the screen for 15 to 60
              seconds, and then you're gone. No memory. No connection. No return. Sponsorship is ownership.
            </p>
            <p>
              When you sponsor a show on iTEN.TV, your brand doesn't disappear after a commercial break - it
              lives for the entire life of the show. Every episode. Every season. Every time someone tunes in,
              your logo is right there, front and center, embedded in the experience rather than interrupting it.
            </p>
            <p>
              That's not just exposure. That's an association. It tells viewers your brand isn't just buying
              attention - it's invested in the automotive world, the same way they are. It signals loyalty,
              credibility, and staying power to exactly the audience that matters: real automotive enthusiasts
              who are already watching, already engaged, already primed to care about the brands that support
              the content they love.
            </p>
            <p>
              iTEN.TV isn't another network doing what everyone else does. We're fresh and we're building
              something built around long-term partnership instead of short-term impressions.
            </p>
            <p>
              If you're ready to stop disappearing after 30 seconds and start becoming part of the show, let's
              talk. Let us tailor a package for you, so you don't have to be in just one spot.
            </p>
          </div>
          <Button href="https://www.iten.tv/contact.html" icon={ArrowRight} className="mt-8">
            Contact iTEN.TV Today
          </Button>
        </div>
      </div>
    </section>
  );
}
