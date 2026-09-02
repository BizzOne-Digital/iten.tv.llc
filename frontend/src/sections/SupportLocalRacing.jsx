import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function SupportLocalRacing() {
  return (
    <section
      id="racing"
      className="relative py-24 bg-cover bg-center bg-bg"
      style={{ backgroundImage: "url('/track.png')" }}
    >
      <div className="absolute inset-0 bg-bg/60" />
      <div className="relative max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow="Grassroots Racing" title="SUPPORTING LOCAL" highlight="RACING" />
          <img
            src="/local.jpg"
            alt="Local grassroots racing"
            className="w-full rounded-lg border-2 border-brand-red object-cover"
          />
        </div>
        <div className="space-y-5 text-gray text-sm md:text-base">
          <p>
            While many networks focus their attention on the biggest names and highest-profile racing events,
            iTEN.TV is dedicated to the heart and soul of the sport - local racing. After all, every racing
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
          <p>From Modifieds and Sprint Cars to Flat Track Motorcycle Racing, ATVs, Go-Karts and more - this is where local racing lives.</p>
          <Button href="https://www.iten.tv/contact.html">Partner With Us</Button>
        </div>
      </div>
    </section>
  );
}
