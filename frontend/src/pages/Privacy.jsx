import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="iTEN.TV privacy policy — how we collect, use, and protect your information." />

      <section
        className="relative h-[45vh] min-h-[360px] flex items-end bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/track.png')" }}
      >
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 pb-14 w-full">
          <SectionHeading eyebrow="Legal" title="PRIVACY" highlight="POLICY" />
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-6 text-gray space-y-6 text-sm">
          <p className="text-white text-xs">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            iTEN.TV, LLC ("iTEN.TV," "we," "us," or "our") respects your privacy. This Privacy Policy explains
            how we collect, use, and protect information when you visit iten.tv, use our streaming channels on
            Roku, Amazon Fire TV, or other platforms, or otherwise interact with our services (collectively, the
            "Services").
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Information We Collect</h2>
          <p>
            We may collect information you provide directly, such as your name, email address, phone number,
            and message content when you submit a contact or production inquiry form, including any reference
            images you upload. We may also collect basic technical information automatically, such as browser
            type, device information, and pages visited, to help us understand how the Services are used.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">How We Use Information</h2>
          <p>
            We use the information we collect to respond to inquiries, provide and improve the Services, send
            confirmation and follow-up communications, and understand how visitors use our site. We do not sell
            your personal information to third parties.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Third-Party Services</h2>
          <p>
            We use third-party providers to operate parts of our Services, including hosting, media storage
            (Cloudinary), and email delivery. These providers process information on our behalf and are
            contractually obligated to protect it. Our streaming channels are also distributed through
            third-party platforms (such as Roku and Amazon Fire TV), which have their own privacy policies.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Data Retention & Security</h2>
          <p>
            We retain information for as long as necessary to fulfill the purposes described in this policy,
            respond to your requests, or comply with legal obligations. We take reasonable measures to protect
            information from unauthorized access, but no method of transmission or storage is completely secure.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Your Choices</h2>
          <p>
            You may contact us at any time to ask what information we hold about you, request a correction, or
            request deletion, subject to any legal or legitimate business reasons we may have for retaining it.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Changes To This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an
            updated "Last updated" date.
          </p>

          <h2 className="font-heading uppercase text-white text-lg pt-4">Contact Us</h2>
          <p>
            Questions about this Privacy Policy can be sent to{' '}
            <a href="mailto:info@iten.tv" className="text-brand-red hover:underline">info@iten.tv</a>.
          </p>
        </div>
      </section>
    </>
  );
}
