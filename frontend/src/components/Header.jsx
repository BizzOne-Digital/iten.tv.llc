import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/watch', label: 'Watch Shows' },
  { to: '/bands', label: 'Bands' },
  { to: '/racing', label: 'Racing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative font-heading text-sm uppercase tracking-wide py-1 transition-colors ${
                  isActive ? 'text-white' : 'text-gray hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-brand-red transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://facebook.com/itentvnews" target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
            <Facebook size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
            <Instagram size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red">
            <Youtube size={18} />
          </a>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-heading uppercase text-sm ${isActive ? 'text-brand-red' : 'text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" onClick={() => setOpen(false)}>
            Contact Us
          </Button>
        </div>
      )}
    </header>
  );
}
