import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const SERIES = [
  {
    logo: '/watch-page/logo_001.jpg',
    desc: 'An assortment of short videos from local car shows and events. Featuring interviews with builders and assorted racers. These videos are NOT drama based driven like the main types of "Car Shows" on conventional TV.',
  },
  {
    logo: '/watch-page/logo_002.jpg',
    desc: 'An assortment of short videos from local car shows and events. Featuring interviews with builders and assorted racers. These videos are NOT drama based driven like the main types of "Car Shows" on conventional TV.',
  },
  {
    logo: '/watch-page/intermountain.png',
    desc: 'Formerly know as the "Royal Purple Modified Series", we feature a full season of racing from Meridian Speedway, ID & Hermiston Raceway, OR. Plus a few other bits and pieces.',
  },
  {
    logo: '/watch-page/kotw_small.png',
    desc: 'Now no longer a series. King of the Wing is a collection of the last few season of the racing era. While "wing sprint cars" are still around, theses were the biggest events held in the US. Featuring the races and interviews the drivers across the US.',
  },
  {
    logo: '/watch-page/logo_003.jpg',
    desc: "Stuff that was too good to throw away... These are an assortment of racing clips from over the years, not used in any \"feature\" video. A mixture of everything.",
  },
  {
    logo: '/watch-page/logo_005.jpg',
    desc: 'Non wing sprint cars (pavement). The entire season from 2020. These are smaller versions of the wing sprint cars, running on pavement short tracks.',
  },
  {
    logo: '/watch-page/mhs_old_logo.png',
    desc: 'All the racing from Mountain Home Speedway, ID 2024 Season and other events.',
  },
];

const DISC_SETS = [
  {
    image: '/watch-page/films.png',
    desc: "We have a new collection of documentary films and event videos. A must watch for auto lovers and the tales from the underground racers. New films added on a regular basis.",
  },
  {
    image: '/watch-page/rar_logo_use.png',
    desc: 'Not every racing show has to be focused on the "famous" race car driver. This series is about the everyday American family that races at their local short track, be it dirt or pavement. We go deep inside on how everybody else does it.',
  },
  {
    image: '/watch-page/events.png',
    desc: "One off - Flat Track Racing Events. Watch some of the local flat track motorcycle events that were just one time shows from Las Vegas, NV & Kuna, ID. Featuring full races and interviews.",
  },
];

const RACING_ACTION = [
  'Wing Sprint Cars',
  'Non-Wing Sprint Cars',
  'Mini Mods',
  'IMCA (class) Dirt Modifieds',
  'Jr. Hornets',
  'Hobby Stock',
  'Dwarf Car',
  'Hooligan FlatTrack',
  'Ford Focus Midgets',
  'Street Stock',
  'Kart Racing',
  'Vintage',
  'Trucks',
  'Jr Dirt Kart',
  'Micro 600',
  'Super Modified',
  'Motorcross',
  'Tractor Pulling',
  'Demolition Derby',
  'Car Shows',
  'Rat Rods',
  'Drifting',
  'Custom Bikes',
  'More FlatTrack Racing',
  'Modifieds (pavement)',
  'Monster Trucks',
  'Late Models',
];

const HOW_TO = [
  {
    image: '/watch-page/roku2.png',
    text: 'Go to the "Search" panel on you ROKU menu screen. Once you see the iTEN.TV icon, click to install the channel.',
  },
  {
    image: '/watch-page/roku2b.jpg',
    text: 'Once you see the "iTEN.TV" icon, the channel is installed. Shows will automatically added to this channel.',
  },
  {
    image: '/watch-page/roku2.jpg',
    text: "Once the channel is installed, you'll see all of our shows. From documentaries, racing, auto shows to everything cool.",
  },
];

export default function WatchShows() {
  return (
    <>
      <SEO title="Watch Shows" description="Watch iTEN.TV grassroots racing shows, documentaries, and original series on Roku and Amazon Fire TV." />

      {/* Hero + Sign Up */}
      <section className="pt-40 pb-24 bg-bg text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="Now Streaming" title="WATCH" highlight="SHOWS" align="center" />
          <p className="text-gray mb-6">
            We're constantly uploading new shows, but in the meantime these are some of the shows we feature.
          </p>
          <p className="text-yellow-400 font-heading text-xl uppercase mb-2">NOW $19.95 Normally $35.90</p>
          <p className="text-green-400 font-heading uppercase mb-6">Hurry... offer expires Aug 31st, 2026</p>
          <p className="text-gray text-sm mb-8">
            You can currently watch us on ROKU & AMAZON Firestick... You will also be able to watch on your phone
            once the "App" is released. You will not be charged again.
          </p>
          <Button href="https://www.tvappbuilder.com/store/itentv">Sign Up Now</Button>
        </div>
      </section>

      {/* Real Racing. Real Grassroots. */}
      <section className="py-24 bg-elevated">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6 text-gray">
          <h2 className="font-heading italic text-2xl md:text-3xl text-white mb-4">
            iTEN.TV — Real Racing. Real Grassroots.
          </h2>
          <p>
            iTEN.TV isn't your typical motorsports channel. You won't find NASCAR, NHRA, or World of Outlaws
            here — you'll find something better: the racing happening right now at the track in the back of your
            town, the one most people forget about.
          </p>
          <p>
            We go where the big networks don't. If a race doesn't make the evening broadcast, there's a good
            chance we're already there filming it.
          </p>
          <p className="text-white font-heading uppercase tracking-wide">Every Racer Gets a Shot.</p>
          <p>
            We don't care if you're a household name or a wildcard from a small local track, great racing is
            great racing, no matter the size of the crowd watching it. Everyone gets a fair shot at the
            spotlight.
          </p>
          <p className="text-white font-heading uppercase tracking-wide">Car Shows, The Way You Actually Want Them.</p>
          <p>
            We've heard you loud and clear: sometimes you just want to watch the cars. No over-the-top
            presenters, no manufactured drama — just genuine coverage of the machines and the people behind
            them. We still bring interviews and put on a real show, but we never lose sight of what you came for.
          </p>
          <p className="text-white font-heading uppercase tracking-wide">"But YouTube Is Free..."</p>
          <p>
            Sure, it is. But we're not shaky handheld footage from the stands with someone's kid screaming in
            the background. Our crew has worked for major networks, and we bring that same level of production
            value to every race we cover — without the network price tag.
          </p>
          <p>
            For $2.99/month, you get professional, reliable coverage of the racing you'd otherwise miss
            entirely, plus a growing library of shows you can catch up on anytime.
          </p>
          <p className="text-white font-heading uppercase tracking-wide">Miss the Chaos?</p>
          <p>
            If you're craving the wild, unpredictable, edge-of-your-seat stuff — tell us. We're always looking
            for the next show to build for you.
          </p>
          <p className="text-white font-heading uppercase tracking-wide">Eight Years In, and laying it down the way you like it.</p>
          <p>
            We've been doing this for eight years, and we're not slowing down — more content, more coverage,
            more tracks. iTEN.TV is expanding, and we want you along for the ride.
          </p>
          <p className="text-white font-heading uppercase tracking-wide">Support the people who support the racers.</p>
          <p className="text-brand-red font-heading uppercase text-lg">iTEN.TV — The Racers' Film Crew</p>
        </div>
      </section>

      {/* Series */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeading eyebrow="Our Shows" title="ORIGINAL" highlight="SERIES" align="center" />
          <div className="grid md:grid-cols-4 gap-8">
            {SERIES.map((s, i) => (
              <div key={i}>
                <div className="bg-black border-2 border-brand-red rounded-lg p-4 mb-3 flex items-center justify-center h-28">
                  <img src={s.logo} alt="Show series logo" className="max-h-20 max-w-full object-contain" />
                </div>
                <p className="text-gray text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disc sets */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-3 gap-8">
          {DISC_SETS.map((d, i) => (
            <div key={i}>
              <img src={d.image} alt="iTEN.TV production" className="w-full rounded-lg border-2 border-brand-red mb-3" />
              <p className="text-gray text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Racing action grid */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-heading italic text-2xl md:text-3xl text-white text-center mb-4">Some of the racing action</h2>
          <p className="text-gray text-center mb-12">
            Here are some of the racing shows we have. We will also be expanding into local music and alternative
            cooking shows in 2026.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {RACING_ACTION.map((label, i) => (
              <div key={label}>
                <img
                  src={`/watch-page/show_${String(i + 1).padStart(3, '0')}.jpg`}
                  alt={label}
                  className="w-full aspect-video object-cover rounded-t-lg border-2 border-white/30 border-b-0"
                />
                <p className="bg-black text-white text-center font-heading uppercase text-sm py-2 rounded-b-lg border-2 border-t-0 border-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-yellow-400 text-center font-heading italic uppercase">Plus new shows always being added</p>
        </div>
      </section>

      {/* How to Watch Us */}
      <section className="py-24 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-heading italic text-2xl md:text-3xl text-white text-center mb-4">How to Watch Us</h2>
          <p className="text-gray text-center mb-12 max-w-2xl mx-auto">
            Connecting to our shows is easy. You just need a "Smart" TV with either ROKU or "Fire TV" already
            installed. If you don't have either of these, you can purchase devices that can connect your TV.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_TO.map((step, i) => (
              <div key={i}>
                <img src={step.image} alt={`How to watch step ${i + 1}`} className="w-full rounded-lg bg-white p-4 mb-4" />
                <p className="text-gray text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
