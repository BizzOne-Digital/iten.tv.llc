import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import WelcomeSection from '../sections/WelcomeSection';
import FeaturesBar from '../sections/FeaturesBar';
import FeaturedShows from '../sections/FeaturedShows';
import SampleVideo from '../sections/SampleVideo';
import SupportLocalRacing from '../sections/SupportLocalRacing';
import AboutSection from '../sections/AboutSection';
import RacingContent from '../sections/RacingContent';
import VideoProductionServices from '../sections/VideoProductionServices';
import WhyItenTV from '../sections/WhyItenTV';
import LatestNews from '../sections/LatestNews';
import Gallery from '../sections/Gallery';
import ContactCTA from '../sections/ContactCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="iTEN.TV — automotive and racing entertainment network streaming on Roku and Amazon Fire TV."
      />
      <Hero />
      <WelcomeSection />
      <FeaturesBar />
      <FeaturedShows />
      <SampleVideo />
      <SupportLocalRacing />
      <AboutSection />
      <RacingContent />
      <VideoProductionServices />
      <WhyItenTV />
      <LatestNews />
      <Gallery />
      <ContactCTA />
    </>
  );
}
