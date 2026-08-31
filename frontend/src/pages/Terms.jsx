import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="iTEN.TV terms of service governing use of our website and streaming channels." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Legal" title="TERMS OF" highlight="SERVICE" />
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-6 text-gray space-y-6 text-sm">
          <p className="text-white text-xs">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            These Terms of Service ("Terms") govern your use of iten.tv and the iTEN.TV streaming channels on
            Roku, Amazon Fire TV, and other platforms (collectively, the "Services"), operated by iTEN.TV, LLC
            ("iTEN.TV," "we," "us," or "our"). By accessing or using the Services, you agree to these Terms.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Use of the Services</h2>
          <p>
            You may use the Services for lawful, personal, non-commercial purposes only, unless otherwise
            agreed with us in writing. You agree not to copy, redistribute, or exploit our content, footage, or
            photography without permission, except as expressly permitted (for example, watermarked event photos
            we've indicated are free to share on social media).
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Subscriptions & Offers</h2>
          <p>
            Any pricing, promotional offers, or subscription terms displayed on our site or streaming channels
            are subject to change and to the terms of the platform (e.g., Roku, Amazon) through which you
            subscribe. Please review the specific offer details at the time of purchase.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">User Submissions</h2>
          <p>
            If you submit content to us through a contact or production inquiry form (including reference
            images), you confirm you have the right to share it and grant us permission to use it solely to
            evaluate and respond to your inquiry.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Intellectual Property</h2>
          <p>
            All video, photography, graphics, and branding on the Services are owned by iTEN.TV, LLC or used
            with permission, and are protected by applicable intellectual property laws.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Disclaimer & Limitation of Liability</h2>
          <p>
            The Services are provided "as is" without warranties of any kind. To the fullest extent permitted by
            law, iTEN.TV, LLC is not liable for any indirect, incidental, or consequential damages arising from
            your use of the Services.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Changes To These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the Services after changes are posted
            constitutes acceptance of the updated Terms.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Contact Us</h2>
          <p>
            Questions about these Terms can be sent to{' '}
            <a href="https://www.iten.tv/contact.html" className="text-brand-red hover:underline">info@iten.tv</a>.
          </p>
        </div>
      </section>
    </>
  );
}
