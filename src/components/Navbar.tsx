import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const [pillarsDropdown, setPillarsDropdown] = useState(false);
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;
  const location = useLocation();
  const navigate = useNavigate();

  // Helper functions for dropdown delay
  const handlePillarsEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setPillarsDropdown(true);
  };
  const handlePillarsLeave = () => {
    closeTimeout = setTimeout(() => setPillarsDropdown(false), 150);
  };

  // Robust scroll handler for in-page navigation
  const handlePillarNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPillarsDropdown(false);
    if (location.pathname === '/pillars') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/pillars#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

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
          {links.map((link) =>
            link.label === 'Pillars' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={handlePillarsEnter}
                onMouseLeave={handlePillarsLeave}
              >
                <div>
                  <Link
                    to={link.to}
                    className={`text-white/90 hover:text-accent font-medium transition-colors px-2 py-1 rounded ${
                      location.pathname === link.to ? 'text-accent underline underline-offset-4' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
                {/* Dropdown */}
                {pillarsDropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-background/95 border border-foreground/10 rounded-lg shadow-lg z-50 flex flex-col">
                    <a
                      href="/pillars#professionalism"
                      className="px-6 py-3 hover:bg-accent/10 text-white/90 hover:text-accent text-left transition-colors cursor-pointer"
                      onClick={handlePillarNav('professionalism')}
                    >
                      Professionalism
                    </a>
                    <a
                      href="/pillars#community-service"
                      className="px-6 py-3 hover:bg-accent/10 text-white/90 hover:text-accent text-left transition-colors cursor-pointer"
                      onClick={handlePillarNav('community-service')}
                    >
                      Community Service
                    </a>
                    <a
                      href="/pillars#brotherhood"
                      className="px-6 py-3 hover:bg-accent/10 text-white/90 hover:text-accent text-left transition-colors cursor-pointer"
                      onClick={handlePillarNav('brotherhood')}
                    >
                      Brotherhood
                    </a>
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
