import { Send, Phone } from 'lucide-react';
import Button from '../components/Button';

export default function ContactCTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center bg-gradient-to-br from-card to-elevated border border-white/10 rounded-2xl py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-white mb-4">
          LIKE WHAT YOU <span className="text-brand-red">SEE?</span>
        </h2>
        <p className="text-gray max-w-xl mx-auto mb-8">
          Whether it's a race weekend, a build reveal, or a brand campaign — let's create something worth watching.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button to="/contact" icon={Send}>Start a Project</Button>
          <Button to="/contact" variant="outline" icon={Phone}>Contact iTEN.TV</Button>
        </div>
      </div>
    </section>
  );
}
