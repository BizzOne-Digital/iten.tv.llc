import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

const TEAM = [
  {
    name: 'John (Aussie) D.',
    role: 'D.P / Editor / Designer / Exec. Prod',
    photo: '/aboutpage1.jpg',
    bio: 'iTEN.TV, was founded by John D. & Val D. John is a multi-award winning cinematographer, editor and designer. For over 30 years, his work has taken him to over 12 countries and can be seen in everything from feature films, TV shows, TV commercials, music videos, short films, sporting events, magazines, buses, and just about everything else in between.',
  },
  {
    name: 'Valerie (Vegas) D.',
    role: 'Cameras / Producer',
    photo: '/aboutpage2.jpg',
    bio: 'Val D. is a former Las Vegas entertainment manager. Her work has spanned over 15 years from bands, shows, events, and to putting on the first "LIVE STREAM" from the gates of Area 51 (that\'s another story). She is also a producer and photographer for iTEN.TV. Past projects have included Bagged & Tagged, ISRL, King of the Wing, Rockin\' Rods, Modified Mayhem, just to name a few.',
  },
  {
    name: 'Craig (Silverfox) R.',
    role: 'Racing Consultant / Promoter',
    photo: '/aboutpage3.jpg',
    bio: 'Long time motorsports racer, BMX racer, road cyclist, and Flat Track racing promoter. Craig is an asset to the iTEN.TV team. Not only does he consult with some of the motorcycle community, he also helps promote racing events. Past events have included "Flattrack & ATV Rampage" & "Idaho Hot Shoe Nationals ft GNHC".',
  },
  {
    name: 'Chris (Ninja) V.',
    role: 'Tech Guru / Designer',
    photo: '/aboutpage4.jpg',
    bio: 'Chris is a veteran graphic designer. He is also a technical wizard when it comes to everything and anything digital. He has been a designer for the racing industry for over 20 years and a programmer for some of the biggest tech companies in the world. When not working he can be found riding his motorcycle... somewhere.',
  },
];

const FILMING_HIGHLIGHTS = [
  'V8 Supercars',
  'F1',
  'MotoGP',
  'NASCAR',
  'NHRA',
  'WRC',
  'Off Shore Power Boat Racing',
  'The Matrix (fx crew)',
  'Fast and the Furious (animatics)',
  'Star Wars Episode 1 (cam tech)',
  'Moulin Rouge (cam tech)',
  'Hallmark (TV Commercial)',
  '2000 Sydney Olympics (swimming)',
  'Kid Rock — Forever (Music Video)',
  'Missy Elliot — Get Yer Freak On (Music Video)',
  'Delta Goodrem — In This Life (Music Video)',
  "+100's more",
];

export default function About() {
  return (
    <>
      <SEO title="About Us" description="30+ years of broadcast experience. Meet the team behind iTEN.TV, an automotive and racing entertainment network." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Our Story" title="ABOUT" highlight="iTEN.TV" />
        </div>
      </section>

      {/* Intro + Why Choose Us */}
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div>
            <SectionHeading eyebrow="Why Choose Us?" title="QUALITY," highlight="NOT QUANTITY" align="center" />
            <p className="text-gray">
              We're not just hobbyists with cameras; we're seasoned experts who have traveled the globe crafting
              compelling stories and visual masterpieces. We're passionate about what we do and are always
              focused on quality not quantity — providing high-quality services without the hefty price tag. We
              believe that no one should feel ripped off for outstanding work.
            </p>
            <p className="text-gray mt-4">
              Equipped with state-of-the-art gear tailored to your specific project needs, we're ready to tackle
              all your video, photography, and design requirements. Plus, we offer innovative graphic design
              solutions to give you the competitive edge in your industry.
            </p>
            <p className="text-gray mt-4">
              While others are distracted by their smartphones, we're focused on delivering results. Ready to
              elevate your project?
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading eyebrow="The Crew" title="WHO WE" highlight="ARE" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-card border-2 border-brand-red rounded-lg overflow-hidden text-center">
                <img src={m.photo} alt={m.name} className="w-full aspect-square object-cover" />
                <div className="p-5">
                  <h3 className="font-heading uppercase text-white">{m.name}</h3>
                  <p className="text-brand-red text-sm mb-3">{m.role}</p>
                  <p className="text-gray">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Facts */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading eyebrow="Fast Facts" title="30+ YEARS OF" highlight="EXPERIENCE" align="center" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fun Fact */}
            <div>
              <img src="/aboutpage5.jpg" alt="Fun Fact" className="w-full aspect-video object-cover rounded-t-lg border-2 border-brand-red border-b-0" />
              <div className="bg-brand-red text-white text-center font-heading uppercase text-lg py-2">Fun Fact</div>
              <div className="bg-card border-2 border-t-0 border-brand-red rounded-b-lg p-5 space-y-3 text-gray">
                <p>
                  Growing up in a family of racers (which is another story), John originally wanted to be a fighter
                  pilot in the Air Force, but also wanted to be a Rock Star and a MotoGP racer.
                </p>
                <p>
                  John soon decided he would follow his dream of being a "Rock Star," which was short-lived, and
                  became a sound engineer. He then eventually turned to film. The story is longer than the film
                  "Titanic."
                </p>
                <p>
                  John decided he needed to learn his craft. After spending many years at AFTRS (Australian Film
                  Television Radio School), he became a "Cinematographer." A very long story cut short. After
                  working for a few film companies, John soon decided to eventually start his own film production
                  business.
                </p>
                <div>
                  <p className="text-white font-heading uppercase text-xs tracking-wide mb-2">Filming Highlights Inc.</p>
                  <div className="flex flex-wrap gap-2">
                    {FILMING_HIGHLIGHTS.map((h) => (
                      <span key={h} className="border border-brand-red/50 rounded-full px-3 py-1 text-xs text-white">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Where It Begun */}
            <div>
              <img src="/aboutpage6.jpg" alt="Where it begun" className="w-full aspect-video object-cover rounded-t-lg border-2 border-brand-red border-b-0" />
              <div className="bg-brand-red text-white text-center font-heading uppercase text-lg py-2">Where It Begun</div>
              <div className="bg-card border-2 border-t-0 border-brand-red rounded-b-lg p-5 space-y-3 text-gray">
                <p>
                  In the mid-1990s, RealNetworks was among the pioneering companies that introduced video
                  streaming over the internet. Although early streaming technology offered video quality that
                  was modest by today's standards, it demonstrated the viability of delivering video content
                  online.
                </p>
                <p>
                  During this period, streaming capabilities were constrained by the limitations of dial-up
                  internet connections, resulting in low-resolution video and frequent buffering. As broadband
                  adoption expanded and network infrastructure improved, both video quality and streaming
                  reliability advanced significantly. In the early 2000s, John began exploring innovative
                  approaches to deliver higher-quality video over the internet. Working alongside Chris V., he
                  contributed to the development of software solutions designed to enhance streaming
                  performance, efficiency, and video quality.
                </p>
                <p>
                  John also collaborated with several radio stations to integrate video content into their
                  streaming platforms. Building on this experience, he later founded his own web-streaming
                  service focused on delivering high-definition (HD) video. At a time when HD streaming was
                  still emerging, this represented a forward-thinking effort to push the boundaries of online
                  video delivery.
                </p>
                <img src="/aboutpage8.jpg" alt="Video LIVE Streaming since 2008" className="w-full rounded-lg border border-white/10 mt-3" />
                <p className="text-white text-center text-xs uppercase tracking-wide">Video "LIVE" Streaming since 2008</p>
              </div>
            </div>

            {/* 1st HD Concert */}
            <div>
              <img src="/aboutpage7.jpg" alt="1st HD Concert" className="w-full aspect-video object-cover rounded-t-lg border-2 border-brand-red border-b-0" />
              <div className="bg-brand-red text-white text-center font-heading uppercase text-lg py-2">1st HD Concert</div>
              <div className="bg-card border-2 border-t-0 border-brand-red rounded-b-lg p-5 space-y-3 text-gray">
                <p>
                  Back in 2010, John met Valerie at a music video shoot. John was to film and
                  Valerie was to play the lead role (no, not shaking her butt on the hood of Whitesnake's car).
                </p>
                <p>
                  The first meeting turned out to be an amazing interaction, and they discovered they both shared the
                  same passion for music. Together they ran an internet company that was "LIVE STREAMING" shows
                  in Las Vegas. They were doing things way before YouTube and Facebook were streaming live video.
                </p>
                <p>
                  Then in 2011 John had a bright idea to be the first to stream a live concert in full HD (Rock
                  n' Roll Invasion — Area 51) from the "official" front gates of Area 51. The event featured two
                  live bands from Las Vegas on a stage and then one band on the back of a trailer in front of the
                  gates of Area 51. They did this in HD and over dial-up internet and wifi (again, that's
                  another story on its own). They pulled off the impossible and reached 7.5 million viewers
                  around the world, not without attracting some unnecessary attention.
                </p>
                <p>
                  With the help of some good friends and, of course, Chris's knowledgeable advice, together they
                  made history. There's a video of this floating around... somewhere.
                </p>
                <img src="/aboutpage9.jpg" alt="Area 51 Rock n' Roll Invasion event poster" className="w-full rounded-lg border border-white/10 mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
