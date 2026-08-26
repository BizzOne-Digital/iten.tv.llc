const PLATFORMS = [
  {
    name: 'Roku TV',
    color: '#662D91',
    desc: "Available on all ROKU devices and smart TV's with ROKU built-in.",
  },
  {
    name: 'amazon fireTV',
    color: '#FF9900',
    desc: 'Available on all Amazon Fire TV devices and smart TVs with ROKU built-in.',
  },
  {
    name: 'Apple TV',
    color: '#F5F5F5',
    desc: 'Coming soon to APPLE TV. Stay tuned for updates.',
  },
  {
    name: 'Android / iOS',
    color: '#3DDC84',
    desc: 'The iTEN.TV app is getting ready to launch very soon.',
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-elevated border-y border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-heading italic text-2xl md:text-3xl text-white mb-2">Watch us on</h2>
        <p className="text-gray text-sm mb-10">
          All platforms are either built into most smart TVs or are available as plug-in devices.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-3">
              <span
                className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight"
                style={{ color: p.color }}
              >
                {p.name}
              </span>
              <p className="text-gray text-xs max-w-[200px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
