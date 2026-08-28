import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

const PARTNERS = [
  { image: '/racing/project1.jpg', name: 'Royal Purple Modified Series', type: 'Racing Series (TV Production) - Idaho' },
  { image: '/racing/project2.jpg', name: 'King of the Wing Series', type: 'Racing Series (TV Production) - US' },
  { image: '/racing/project3.jpg', name: 'Idaho Sprint Car Racing League', type: 'Racing Series (TV Production) - Idaho' },
  { image: '/racing/project4.jpg', name: 'Mountain Home Speedway', type: 'Racing Series (TV Production) - Idaho' },
  { image: '/racing/project8.jpg', name: 'Black Canyon Raceway', type: 'Photography, Video, Social Media' },
  { image: '/racing/project9.jpg', name: 'Speedbowl', type: 'Photography, Video, Social Media' },
  { image: null, name: 'Matt Egley Racing', type: 'Photography, Video, Social Media' },
  { image: '/racing/project6.jpg', name: 'Anderson 68 Racing', type: 'All media services' },
  { image: '/racing/project11.jpg', name: 'Gym Ratz Racing', type: 'All media services' },
  { image: '/racing/project10.jpg', name: 'Flashburn Racing', type: 'All media services' },
  { image: '/racing/project13.jpg', name: 'Shane Homme (Dirt Modified)', type: 'Photography - Hero Cards' },
  { image: '/racing/project19.jpg', name: 'Shane Homme (Quad Bike Racing)', type: 'Racing Series (TV Production) - Idaho' },
  { image: '/racing/project16.jpg', name: 'White Powder Racing', type: 'All media services' },
  { image: '/racing/project15.jpg', name: 'Eric Barsness', type: 'Photography - Hero Cards' },
  { image: '/racing/project12.jpg', name: 'Doc Caldwell', type: 'Photography - Hero Cards' },
  { image: '/racing/project14.jpg', name: 'Doug McGarva', type: 'Photography - Hero Cards' },
  { image: '/racing/project17.jpg', name: 'Rich Silva', type: 'Hero Cards' },
  { image: '/racing/project20.jpg', name: 'Summers Racing', type: "All media - iTEN.TV supported team." },
  { image: '/racing/project18.jpg', name: "100's of more teams", type: 'From sponsor decks, videos, Photos, Media +' },
];

export default function Racing() {
  return (
    <>
      <SEO title="Racing" description="From full TV productions to hero cards — iTEN.TV partners with race tracks, teams, and drivers across the country." />

      <section className="pt-40 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading eyebrow="From Full TV Productions To Hero Cards" title="RACING WITH" highlight="iTEN.TV" align="center" />
          <p className="text-gray mb-4">
            Over the years, we've been lucky enough to team up with some of the most iconic race tracks and
            event series across the country! From crafting high-energy promotional videos to designing
            eye-catching posters, and even serving as exclusive photographers for some of the coolest venues,
            we've been in. But that's not all, our passion for racing extends to working with incredible race
            teams and up-and-coming drivers. We've helped racers put together killer sponsorship proposals,
            design custom, out-of-the-box hero cards, and capture every moment with personal, on-the-go
            photography. Plus, we love creating dynamic videos that light up their social media feeds.
          </p>
          <p className="text-gray mb-10">
            Bottom line? Whether it's dirt or pavement, posters to full video productions, we're all about
            racing and we're always ready to roll!
          </p>
          <img src="/racing/az_flat2.jpg" alt="AZ Flattrack Racing - Proud sponsor for 2026, iTEN.TV" className="w-full rounded-lg" />
        </div>
      </section>

      <section className="py-16 bg-elevated">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PARTNERS.map((p) => (
              <div key={p.name}>
                {p.image ? (
                  <img src={p.image} alt={p.name} className="w-full aspect-video object-cover rounded-lg border-2 border-brand-red mb-3" />
                ) : (
                  <div className="w-full aspect-video rounded-lg border-2 border-brand-red mb-3 bg-card flex items-center justify-center text-gray text-xs text-center p-4">
                    Image coming soon
                  </div>
                )}
                <p className="text-brand-red font-heading uppercase text-center">{p.name}</p>
                <p className="text-gray text-xs text-center">{p.type}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-xl mx-auto text-center">
            <p className="text-brand-red font-heading uppercase text-lg mb-2">2026 - Sponsor</p>
            <p className="text-gray text-sm">
              iTEN.TV, proudly supports a number of race teams and tracks. Summers Racing Team in 2025. The team
              consists of Rick Summers & Heleena Criffield.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray mb-8">
            Did you know? With any of the pictures we post from events, you are free to use them on your social
            media pages. We just ask you NOT to remove the water marks. If you like them so much and you'd like
            to buy us a coffee click the link below or even shoot us an email and buy some pics.
          </p>
          <img src="/racing/racing_mon.jpg" alt="iTEN.TV film crew at the racetrack" className="w-full rounded-lg border border-white/10 mb-4" />
          <p className="text-gray text-sm mb-10">
            iTEN.TV - The friendliest and most sociable film crew at any racetrack in the US. Loved by racers and
            the Fans.
          </p>
          <a href="https://buymeacoffee.com/itentv" target="_blank" rel="noreferrer" className="block">
            <img src="/racing/coffee.jpg" alt="Did you like your picture? You can buy me a coffee!" className="w-full rounded-lg hover:opacity-90 transition-opacity" />
          </a>
        </div>
      </section>
    </>
  );
}
