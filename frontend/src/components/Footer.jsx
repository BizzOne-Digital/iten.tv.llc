import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-elevated border-t border-white/10 mt-24">
      <div className="max-w-[1440px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="text-gray text-sm mt-4">
            Powered by Passion. Powered by Stories. Automotive and racing entertainment, streaming everywhere.
          </p>
        </div>
        <div>
          <h4 className="font-heading uppercase text-white text-sm tracking-wide mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray">
            <li><a href="/about" className="hover:text-brand-red">About</a></li>
            <li><a href="/services" className="hover:text-brand-red">Services</a></li>
            <li><a href="/team" className="hover:text-brand-red">Team</a></li>
            <li><a href="/blog" className="hover:text-brand-red">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading uppercase text-white text-sm tracking-wide mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray">
            <li className="flex items-center gap-2"><Mail size={14} /> info@iten.tv</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +1 520-757-3019</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading uppercase text-white text-sm tracking-wide mb-4">Follow</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com/itentvnews" target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red"><Facebook size={20} /></a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red"><Instagram size={20} /></a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray">
        &copy; {new Date().getFullYear()} iTEN.TV, LLC. All rights reserved.
      </div>
    </footer>
  );
}
