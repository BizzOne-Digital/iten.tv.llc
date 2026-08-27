import Button from '../components/Button';

export default function SupportLocalRacing() {
  return (
    <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/track.png')" }}>
      <div className="absolute inset-0 bg-bg/85" />
      <div className="relative max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-white mb-4">Supporting Local Racing</h2>
          <img
            src="/support-local-racing.jpg"
            alt="Local grassroots racing"
            className="w-full rounded-lg border border-white/10 object-cover"
          />
        </div>
        <div className="space-y-5 text-gray text-sm md:text-base">
          <p>
            While many networks focus their attention on the biggest names and highest-profile racing events,
            iTEN.TV is dedicated to the heart and soul of the sport — local racing. After all, every racing
            legend starts somewhere, and local tracks are where champions are born. iTEN.TV shines a spotlight
            on the racers, teams, and communities that keep the sport alive.
          </p>
          <p>
            By showcasing local racing, we not only support grassroots motorsports but also highlight the
            excitement, passion, and pride that racing brings to hometowns across the country. In many cases,
            the action on a local track can be every bit as thrilling as the spectacle of the major leagues.
            There's something special about local racing.
          </p>
          <p>
            Fans can connect with the drivers, follow their journeys, and cheer for people they know. It creates
            a sense of community, pride, and belonging that larger events simply can't replicate. Because at the
            end of the day, everyone loves rooting for a local hero.
          </p>
          <p>Modifieds, Sprint Cars, Flat Track Motorcycle racing, ATV's, Go Karts and more.</p>
          <Button to="/contact">Partner With Us</Button>
        </div>
      </div>
    </section>
  );
}
