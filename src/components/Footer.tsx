import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              className="h-8 w-auto"
              src="/dsp-logo.svg"
              alt="DSP Logo"
            />
            <p className="text-sm text-foreground/80">
              Beta Kappa Chapter of Delta Sigma Pi at The University of Texas at Austin
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-foreground/80 hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-sm text-foreground/80 hover:text-accent">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground/80 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/texas-dsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-accent"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/texasdsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-accent"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-foreground/10">
          <p className="text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} Delta Sigma Pi - Beta Kappa Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
