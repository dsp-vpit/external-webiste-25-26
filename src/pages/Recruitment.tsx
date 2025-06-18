import SectionWrapper from '../components/SectionWrapper';
import { FaCalendarAlt, FaCoffee, FaInfoCircle, FaHandshake, FaUserTie, FaUsers, FaEnvelope, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

const timeline = [
  { date: 'Sep 2', title: 'Info Session #1', icon: <FaInfoCircle className="text-accent" /> },
  { date: 'Sep 4', title: 'Info Session #2 & Apps Open', icon: <FaInfoCircle className="text-accent" /> },
  { date: 'Sep 8 - 12', title: 'Coffee Chats', icon: <FaCoffee className="text-accent" /> },
  { date: 'Sep 9', title: 'CS Event', icon: <FaUsers className="text-accent" /> },
  { date: 'Sep 11', title: 'Professional Event', icon: <FaUserTie className="text-accent" /> },
  { date: 'Sep 12', title: 'Brotherhood Event', icon: <FaHandshake className="text-accent" /> },
  { date: 'Sep 13', title: 'Apps Close', icon: <FaCalendarAlt className="text-accent" /> },
];

const shortcutLinks = [
  {
    title: 'Interest Form',
    description: "Let us know you're interested in DSP! We'll keep you updated.",
    icon: <FaFileAlt className="text-accent text-3xl mb-2" />,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdz0PZpjnpPJnp0ZBAmDSgi8cJF33JqGg2QnnsgX29u1Rd_mQ/viewform?usp=sharing&ouid=105750311739019146529',
    button: 'Fill Out Interest Form',
  },
  {
    title: 'Coffee Chat Form',
    description: "Sign up for a coffee chat with a brother to learn more about DSP.",
    icon: <FaCoffee className="text-accent text-3xl mb-2" />,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdz0PZpjnpPJnp0ZBAmDSgi8cJF33JqGg2QnnsgX29u1Rd_mQ/viewform?usp=sharing&ouid=105750311739019146529',
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
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4D] via-[#3D2B5D] to-[#4B3B6D]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
        <img
          src="/images/recruitment.png"
          alt="Recruitment Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center w-full h-full text-center" style={{ justifyContent: 'flex-start', minHeight: '100vh', paddingTop: '48vh' }}>
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-10 drop-shadow-lg tracking-wide">DRIVE TO SUCCESS</h1>
          <button
            className="px-8 py-4 bg-accent text-[#2D1B4D] text-xl font-bold rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-all cursor-not-allowed"
            disabled
          >
            Application Coming Soon
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <SectionWrapper className="py-20 px-4 bg-background/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-12 text-center text-white">Recruitment Timeline</h2>
          <div className="space-y-12">
            {/* Info Session #1 */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaInfoCircle className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">Info Session #1</h3>
              </div>
              <p className="text-white/90 text-lg">Learn about DSP and meet our brothers</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 2</p>
            </div>
            {/* Info Session #2 & Apps Open */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaInfoCircle className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">Info Session #2 & Apps Open</h3>
              </div>
              <p className="text-white/90 text-lg">Learn about DSP and meet our brothers</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 4</p>
            </div>
            {/* Coffee Chats */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaCoffee className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">Coffee Chats</h3>
              </div>
              <p className="text-white/90 text-lg">Get to know our brothers one on one</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 8 - 12</p>
            </div>
            {/* CS Event */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaUsers className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">CS Event</h3>
              </div>
              <p className="text-white/90 text-lg">Give back with our brotherhood</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 9</p>
            </div>
            {/* Professional Event */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaUserTie className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">Professional Event</h3>
              </div>
              <p className="text-white/90 text-lg">Show off your professional skills in a fun setting</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 11</p>
            </div>
            {/* Brotherhood Event */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaHandshake className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">Brotherhood Event</h3>
              </div>
              <p className="text-white/90 text-lg">Get to know the brotherhood</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 12</p>
            </div>
            {/* Apps Close */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-1">
                <FaCalendarAlt className="text-accent text-lg" />
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-0">Apps Close</h3>
              </div>
              <p className="text-white/90 text-lg">Application deadline</p>
              <p className="text-accent text-lg font-mono font-semibold mt-1">Sep 13</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Shortcut Links Section */}
      <SectionWrapper className="py-20 px-4 flex flex-col items-center justify-center bg-background/80">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {shortcutLinks.map((card, idx) => (
            <div key={card.title} className="rounded-2xl border border-accent bg-white/10 backdrop-blur-md shadow-xl flex flex-col items-center p-8 text-center hover:scale-[1.03] transition-transform">
              {card.icon}
              <h3 className="text-2xl font-heading text-accent mb-2">{card.title}</h3>
              <p className="text-white/90 mb-6">{card.description}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-[#2D1B4D] font-bold rounded-lg shadow hover:bg-accent/90 transition-colors text-lg"
              >
                {card.button}
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Requirements Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-8 text-center text-white">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req) => (
              <div key={req.title} className="p-6 bg-background/60 rounded-lg border border-foreground/10">
                <h3 className="text-xl font-heading mb-4 text-accent">{req.title}</h3>
                <ul className="space-y-2 text-white/90">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FaCheckCircle className="text-accent" />
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
      <SectionWrapper className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading mb-4 text-white">Questions?</h2>
          <a
            href="mailto:recruitment-noreply@texasdsp.org"
            className="inline-flex items-center gap-2 text-accent text-lg font-bold hover:underline"
          >
            <FaEnvelope /> recruitment-noreply@texasdsp.org
          </a>
        </div>
      </SectionWrapper>

      {/* Footer/Code of Conduct */}
      <footer className="py-8 text-center">
        <a
          href="#"
          className="text-accent underline hover:text-accent/80 text-lg font-semibold"
        >
          Code of Conduct
        </a>
      </footer>
    </div>
  );
};

export default Recruitment;
