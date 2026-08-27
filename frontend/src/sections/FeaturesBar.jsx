const PLATFORMS = [
  {
    name: 'Roku TV',
    logo: '/tv_logo_001.png',
    desc: "Available on all ROKU devices and smart TV's with ROKU built-in.",
  },
  {
    name: 'Amazon Fire TV',
    logo: '/tv_logo_003.png',
    desc: 'Available on all Amazon Fire TV devices and smart TVs with ROKU built-in.',
  },
  {
    name: 'Apple TV',
    logo: '/tv_logo_004.png',
    desc: 'Coming soon to APPLE TV. Stay tuned for updates.',
  },
  {
    name: 'Android / iOS',
    logo: '/tv_logo_005.png',
    desc: 'The iTEN.TV app is getting ready to launch very soon.',
  },
];

export default function FeaturesBar() {
  return (
    <section
      className="relative py-16 bg-cover bg-center bg-elevated"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-bg/60" />
      <div className="relative max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="font-heading italic text-2xl md:text-3xl text-white mb-2">Watch us on</h2>
        <p className="text-gray text-sm mb-10">
          All platforms are either built into most smart TVs or are available as plug-in devices.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-3">
              <img src={p.logo} alt={p.name} className="h-16 md:h-24 w-auto object-contain" />
              <p className="text-gray text-xs max-w-[200px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
