import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import FeaturesBar from '../sections/FeaturesBar';
import AboutSection from '../sections/AboutSection';
import FeaturedShows from '../sections/FeaturedShows';
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
      <FeaturesBar />
      <AboutSection />
      <FeaturedShows />
      <RacingContent />
      <VideoProductionServices />
      <WhyItenTV />
      <LatestNews />
      <Gallery />
      <ContactCTA />
    </>
  );
}
