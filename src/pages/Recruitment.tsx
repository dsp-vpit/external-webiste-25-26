import SectionWrapper from '../components/SectionWrapper';
import { FaCoffee, FaEnvelope, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

const shortcutLinks = [
  {
    title: 'Application',
    description: "Apply to join our brotherhood. Due 1/25 11:59PM",
    icon: <FaFileAlt className="text-[#1B5E20] text-3xl mb-2" />,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgBAxeu9UqItqe66P52Ea-oGGr33yxKGPPkqJEEuz8L78tqA/viewform?usp=sharing&ouid=105750311739019146529',
    button: 'Application Link',
  },
  {
    title: 'Coffee Chat Form',
    description: "Sign up for a coffee chat with a brother to learn more about DSP.",
    icon: <FaCoffee className="text-[#1B5E20] text-3xl mb-2" />,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScmtGfqlOODjvwjgQPa6csxdozceeaCsyRkqYVsl1QKc-cqAg/viewform?usp=dialog',
    button: 'Sign Up for Coffee Chat',
  },
];

const requirements = [
  {
    title: 'Academic',
    items: [
      'Minimum 3.0 GPA',
      'Business or Economics major',
      'Full-time student status',
    ],
  },
  {
    title: 'General',
    items: [
      'Strong leadership potential',
      'Commitment to service',
      'Professional mindset',
    ],
  },
];

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5E7EB] via-[#D1D5DB] to-[#F3F4F6]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full overflow-hidden aspect-[5/4] sm:aspect-[4/3] md:aspect-[5/4] lg:aspect-[3/2]">
        <img
          src="images/s26Recruitment.png"
          alt="Spring 2026 Recruitment Banner"
          className="absolute inset-0 w-full h-full object-cover object-top"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-8 sm:pb-12 md:pb-16 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgBAxeu9UqItqe66P52Ea-oGGr33yxKGPPkqJEEuz8L78tqA/viewform?usp=sharing&ouid=105750311739019146529"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11/12 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] px-6 sm:px-8 py-3 sm:py-4 bg-[#1B5E20] text-white text-lg sm:text-xl font-bold rounded-lg shadow-lg hover:bg-[#1B5E20]/90 transition-all mx-auto"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Shortcut Links Section */}
      <SectionWrapper className="py-20 px-4 flex flex-col items-center justify-center bg-white/80">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {shortcutLinks.map((card) => (
            <div key={card.title} className="rounded-2xl border border-[#1B5E20] bg-white/10 backdrop-blur-md shadow-xl flex flex-col items-center p-8 text-center hover:scale-[1.03] transition-transform">
              {card.icon}
              <h3 className="text-2xl font-heading text-[#1B5E20] mb-2">{card.title}</h3>
              <p className="text-[#2D1B4D]/90 mb-6">{card.description}</p>
              {card.link ? (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#1B5E20] text-white font-bold rounded-lg shadow hover:bg-[#1B5E20]/90 transition-colors text-lg"
                >
                  {card.button}
                </a>
              ) : (
                <span className="inline-block px-6 py-3 bg-[#1B5E20] text-white font-bold rounded-lg shadow opacity-70 cursor-not-allowed select-none text-lg">
                  {card.button}
                </span>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Requirements Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-8 text-center text-[#2D1B4D]">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req) => (
              <div key={req.title} className="p-6 bg-white/60 rounded-lg border border-[#1B5E20]/20">
                <h3 className="text-xl font-heading mb-4 text-[#1B5E20]">{req.title}</h3>
                <ul className="space-y-2 text-[#2D1B4D]/90">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#1B5E20]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="py-12 px-4 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading mb-4 text-white">Questions?</h2>
          <a
            href="mailto:dsp-svp@texasdsp.org"
            className="inline-flex items-center gap-2 text-white text-lg font-bold hover:underline"
          >
            <FaEnvelope /> dsp-svp@texasdsp.org
          </a>
        </div>
      </SectionWrapper>

      {/* Footer/Code of Conduct */}
      <footer className="py-8 text-center bg-gradient-to-br from-[#1B5E20] to-[#2E7D32]">
        <a
          href="#"
          className="text-white underline hover:text-white/80 text-lg font-semibold"
        >
          Code of Conduct
        </a>
      </footer>
    </div>
  );
};

export default Recruitment;
