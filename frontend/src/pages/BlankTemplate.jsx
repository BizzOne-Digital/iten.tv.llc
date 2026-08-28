import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

/**
 * Starting point for a new page. Duplicate this file, rename it, update the
 * SEO title/description, banner heading, and body content, then register the
 * route in App.jsx (and add a nav/footer link if it should be publicly linked).
 */
export default function BlankTemplate() {
  return (
    <>
      <SEO title="Page Title" description="One or two sentence description of this page for search engines." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Eyebrow Text" title="PAGE" highlight="TITLE" />
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-gray space-y-5">
          <p>Body copy goes here.</p>
        </div>
      </section>
    </>
  );
}
