import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-foreground/10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/images/dsp-logo.png"
            alt="DSP Logo"
            className="h-16 w-auto mb-2"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
          />
          <span className="text-white/80 text-sm">
            Beta Kappa Chapter of Delta Sigma Pi at The University of Texas at Austin
          </span>
        </div>

        {/* Quick Links and Socials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 font-semibold mb-2">QUICK LINKS</span>
            <Link to="/about" className="text-white/80 hover:text-accent">About</Link>
            <Link to="/recruitment" className="text-white/80 hover:text-accent">Recruitment</Link>
            <Link to="/contact" className="text-white/80 hover:text-accent">Contact</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 font-semibold mb-2">CONNECT WITH US</span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/texas-dsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/texasdsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-foreground/10 pt-6 mt-6">
          <span className="block text-white/60 text-xs">
            © {new Date().getFullYear()} Delta Sigma Pi - Beta Kappa Chapter. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
