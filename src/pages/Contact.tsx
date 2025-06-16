import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-12 text-center">Contact Us</h1>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-background/60 rounded-lg border border-foreground/10">
              <h2 className="text-2xl font-heading mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-accent" size={20} />
                  <a href="mailto:texasdsp@gmail.com" className="text-foreground/80 hover:text-accent">
                    texasdsp@gmail.com
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

            {/* Contact Form Placeholder */}
            <div className="p-6 bg-background/60 rounded-lg border border-foreground/10">
              <h2 className="text-2xl font-heading mb-6">Send us a Message</h2>
              <p className="text-foreground/80 mb-6">
                Have questions about recruitment, events, or general inquiries? 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="h-10 bg-foreground/10 rounded"></div>
                <div className="h-10 bg-foreground/10 rounded"></div>
                <div className="h-32 bg-foreground/10 rounded"></div>
                <div className="h-10 bg-accent rounded w-1/3"></div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <SectionWrapper className="mt-16">
            <h2 className="text-2xl font-heading mb-6 text-center">Office Hours</h2>
            <div className="p-6 bg-background/60 rounded-lg border border-foreground/10">
              <p className="text-foreground/80 text-center">
                Our office is located in the McCombs School of Business.<br />
                Office hours are available by appointment.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
