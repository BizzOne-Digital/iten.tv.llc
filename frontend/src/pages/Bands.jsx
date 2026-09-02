import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

export default function Bands() {
  return (
    <>
      <SEO title="Bands" description="Music videos and EPKs from iTEN.TV - bands we've worked with, and how we help you get booked." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/clinet10.jpg')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="EPK's - Music Videos" title="BANDS" />
        </div>
      </section>

      <section className="pt-24 pb-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <img
              src="/brandimg1.jpg"
              alt="Just a few of the bands we have worked with"
              className="w-full rounded-lg border-2 border-brand-red object-cover"
            />
            <div>
              <div className="bg-white rounded px-6 py-3 mb-6">
                <h2 className="font-heading italic text-xl md:text-2xl text-brand-red text-center">
                  Let's talk MUSIC VIDEOS
                </h2>
              </div>
              <div className="space-y-5 text-gray text-sm md:text-base">
                <p>
                  How much does a music video cost? While there's no one-size-fits-all answer, a good starting
                  point is around $2K-$3K. This budget will get you a polished, stylish video that you'll be
                  proud to share.
                </p>
                <p>
                  Think of creating a music video like building a house. What's the size and scope you have in
                  mind? What are the must-have features? For instance, a studio shoot is more affordable yet can
                  still offer a unique look, even if it shares elements with other videos.
                </p>
                <p>
                  But if you're envisioning green screens, special effects, or custom set designs, your budget
                  will need to expand. And don't forget the finer details - permits, a hair and makeup artist,
                  additional equipment, or even luxury items like a mansion, vintage car, or private jet (yes,
                  we've done that!).
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white rounded px-6 py-3 mb-6">
                <h2 className="font-heading italic text-xl md:text-2xl text-brand-red text-center">
                  EPK's - Your Secret Weapon
                </h2>
              </div>
              <div className="space-y-5 text-gray text-sm md:text-base">
                <p>
                  In addition to music videos, creating an EPK (Electronic Press Kit) is a smart move for
                  getting gigs. It's a simple, yet powerful tool - usually a couple of pages with your bio,
                  photos, and links to your best work. Many bands opt for a printed version and a short video
                  that captures not just your music, but your vibe and personality.
                </p>
                <p>
                  We're here to help you shine, whether it's through a killer music video or a show stopping
                  EPK!
                </p>
              </div>
            </div>
            <img
              src="/brandimg2.jpg"
              alt="Ride The Lightning EPK example"
              className="w-full rounded-lg border-2 border-brand-red object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
