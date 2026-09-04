import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const applicationUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSde38zO30XKq93vd9VamBIaFmvU0vycnw8FCG5wjz9LqL_VNw/viewform?usp=dialog';

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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-heading mb-2 text-accent">Revisit Your Youth</h1>
          <p className="text-white/80 text-xl md:text-2xl mb-10">Fall '26 Recruitment</p>
          <img
            src="/images/f26Recruitment.jpg"
            alt="Fall 2026 Recruitment — Revisit Your Youth"
            className="w-full max-w-md rounded-lg shadow-2xl border border-white/10"
          />
          <a
            href={applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-11/12 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] px-6 sm:px-8 py-3 sm:py-4 bg-accent text-[#2D1B4D] text-lg sm:text-xl font-bold rounded-lg shadow-lg hover:bg-accent/90 transition-all text-center"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Application Section */}
      <SectionWrapper className="py-20 px-4 bg-background/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="/images/f26RecruitmentLogo.jpg"
            alt="Delta Sigma Pi Beta Kappa chalk logo"
            className="w-full max-w-sm rounded-lg shadow-lg border border-white/10"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-accent">Ready to Apply?</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Fill out our application to be considered for Fall '26 recruitment, and we'll
              be in touch with next steps — info sessions, events, and how to meet our
              brothers.
            </p>
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-[#2D1B4D] font-bold rounded-lg shadow hover:bg-accent/90 transition-colors text-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Requirements Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center text-white">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req) => (
              <div key={req.title} className="p-6 bg-background/60 rounded-lg border border-foreground/10">
                <h3 className="text-xl font-heading mb-4 text-accent">{req.title}</h3>
                <ul className="space-y-2 text-foreground/90">
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
      <SectionWrapper className="py-12 px-4 bg-background/60">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading mb-4 text-white">Questions?</h2>
          <a
            href="mailto:dsp-svp@texasdsp.org"
            className="inline-flex items-center gap-2 text-accent text-lg font-bold hover:underline"
          >
            <FaEnvelope /> dsp-svp@texasdsp.org
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Recruitment;
