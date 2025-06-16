import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import type { NavLink as NavLinkType } from '../types';

const links: NavLinkType[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/pillars', label: 'Pillars' },
  { to: '/recruitment', label: 'Recruitment' },
  { to: '/alumni', label: 'Alumni' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b border-foreground/10 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/dsp-logo.png"
            alt="DSP Logo"
            className="h-16 w-auto"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
          />
          <span className="sr-only">Delta Sigma Pi Home</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-white/90 hover:text-accent font-medium transition-colors px-2 py-1 rounded ${
                location.pathname === link.to ? 'text-accent underline underline-offset-4' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/90 hover:text-accent p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 px-4 pb-6 pt-2 flex flex-col gap-4 items-center border-b border-foreground/10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-white/90 hover:text-accent font-medium transition-colors px-2 py-1 rounded ${
                location.pathname === link.to ? 'text-accent underline underline-offset-4' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
