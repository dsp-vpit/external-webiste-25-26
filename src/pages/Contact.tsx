import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="py-20 px-4">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-12 text-center">Contact Us</h1>
          <div className="w-full max-w-xl flex justify-center">
            <div className="p-10 md:p-14 bg-background/60 rounded-2xl border border-foreground/10 flex flex-col items-center text-center shadow-lg w-full">
              <h2 className="text-2xl font-heading mb-6">Get in Touch</h2>
              <p className="text-foreground/80 mb-6">
                Have questions about recruitment, events, or general inquiries? Send an email or DM on Instagram to learn more.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-accent" size={20} />
                  <a href="mailto:dsp-president@texasdsp.org" className="text-foreground/80 hover:text-accent">
                    dsp-president@texasdsp.org
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-accent" size={20} />
                  <p className="text-foreground/80">
                    McCombs School of Business<br />
                    The University of Texas at Austin
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FaInstagram className="text-accent" size={20} />
                  <a
                    href="https://www.instagram.com/texasdsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-accent"
                  >
                    @texasdsp
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-accent" size={20} />
                  <a
                    href="https://www.linkedin.com/company/texas-dsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-accent"
                  >
                    Delta Sigma Pi - Beta Kappa Chapter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
