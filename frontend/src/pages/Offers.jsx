import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Offers() {
  return (
    <>
      <SEO title="Offers" description="Current offers and promotions from iTEN.TV." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Limited Time" title="CURRENT" highlight="OFFERS" />
        </div>
      </section>

      <section className="py-24 bg-bg text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-yellow-400 font-heading text-xl uppercase mb-2">NOW $19.95 Normally $35.90</p>
          <p className="text-green-400 font-heading uppercase mb-6">Hurry... offer expires Aug 31st, 2026</p>
          <p className="text-gray text-sm mb-8">
            You can currently watch us on ROKU & AMAZON Firestick... You will also be able to watch on your phone
            once the "App" is released. You will not be charged again.
          </p>
          <Button href="https://www.tvappbuilder.com/store/itentv">Sign Up Now</Button>
        </div>
      </section>
    </>
  );
}
