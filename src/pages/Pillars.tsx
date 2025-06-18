import { useState, useCallback, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    title: "Professionalism",
    tagline: "Building Business Leaders",
    description: "Our Professionalism pillar focuses on developing business acumen and professional skills through workshops, networking events, and mentorship programs.",
    image: "/images/pillars/profcover.jpg",
    briefText: 'Professionalism is at the core of DSP. We offer workshops, networking, and mentorship to help you grow.',
    learnMore: [
      {
        title: 'Workshops',
        text: 'We host resume workshops, interview prep, and more to help you succeed.',
        images: [
          '/images/pillars/prof/prof1.jpeg',
          '/images/pillars/prof/prof2.jpeg',
          '/images/pillars/prof/prof3.jpeg',
        ],
      },
      {
        title: 'Networking',
        text: 'Connect with alumni and business leaders at our exclusive events.',
        images: [
          '/images/pillars/prof/prof4.jpeg',
          '/images/pillars/prof/prof5.jpg',
        ],
      },
      {
        title: 'Mentorship',
        text: 'Our mentorship program pairs you with experienced brothers for guidance.',
        images: [
          '/images/pillars/prof/prof6.png',
          '/images/pillars/prof/prof7.png',
        ],
      },
    ],
  },
  {
    title: "Community Service",
    tagline: "Impacting Our Community",
    description: "Our Community Service pillar empowers and encourages brothers to give back through impactful fundraisers and hands-on volunteering, creating meaningful change on the Forty Acres and beyond!",
    image: "/images/pillars/cscover.jpeg",
    briefText: 'Community service has long been an important part of how the Beta Kappa chapter defines itself. We provide a variety of opportunities for brothers to give back to their community through organizations including the Ronald McDonald House, Urban Roots,  Period, Book Drive for Kids, and Autism Speaks to name a few. Beta Kappa has shown its commitment to developing meaningful relationships within the community and to bettering the lives of the people its brothers encounter',
    learnMore: [
      { title: 'Fundraisers', text: 'We organize fundraisers for local and national causes.', images: [] },
      { title: 'Volunteering', text: 'Brothers volunteer together to support the Austin community.', images: [] },
      { title: 'Impact', text: 'See the impact of our service on campus and beyond.', images: [] },
    ],
  },
  {
    title: "Brotherhood",
    tagline: "A Home Away From Home",
    description: "Our Brotherhood pillar creates lasting bonds through social events, traditions, and shared experiences that make DSP a home away from home.",
    image: "/images/pillars/brocover.jpeg",
    briefText: 'Brotherhood means lifelong friendships and unforgettable memories.',
    learnMore: [
      { 
        title: 'Formals', 
        text: 'We clean up nice', 
        images: [
          '/images/pillars/bro/formal/formal1.jpeg',
          '/images/pillars/bro/formal/formal2.jpeg',
          '/images/pillars/bro/formal/formal3.jpeg',
          '/images/pillars/bro/formal/formal4.jpeg',
          '/images/pillars/bro/formal/formal5.jpg',
          '/images/pillars/bro/formal/formal6.png',
          '/images/pillars/bro/formal/formal7.png',
          '/images/pillars/bro/formal/formal8.png',
          '/images/pillars/bro/formal/formal9.png',
        ]
      },
      { 
        title: 'Fams', 
        text: 'DSP fam line traditions create a sense of belonging.', 
        images: [
          '/images/pillars/bro/fam/fam1.jpeg',
          '/images/pillars/bro/fam/fam2.jpeg',
          '/images/pillars/bro/fam/fam3.jpeg',
          '/images/pillars/bro/fam/fam4.png',
          '/images/pillars/bro/fam/fam5.jpeg',
          '/images/pillars/bro/fam/fam6.png',
        ]
      },
      { 
        title: 'Barge', 
        text: 'On a boat in the middle of Lake Travis…', 
        images: [
          '/images/pillars/bro/boat/barge1.jpg',
          '/images/pillars/bro/boat/barge2.png',
          '/images/pillars/bro/boat/barge3.png',
          '/images/pillars/bro/boat/barge4.png',
          '/images/pillars/bro/boat/barge5.png',
        ]
      },
    ],
  }
];

// Add type for ExpandableSection props
interface ExpandableSectionProps {
  info: {
    title: string;
    text: string;
    images: string[];
  };
}

const ExpandableSection = ({ info }: ExpandableSectionProps) => {
  // Each info: { title, text, images }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll logic
  useEffect(() => {
    if (!emblaApi) return;
    if (!info.images || info.images.length <= 1) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [emblaApi, info.images]);

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-8 h-[60vh] md:h-[70vh] items-center justify-between">
      <div className="md:w-3/5 w-full flex flex-col items-center justify-center h-full">
        {info.images && info.images.length > 0 ? (
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            <div className="overflow-hidden rounded-lg shadow-lg w-full h-full" ref={emblaRef}>
              <div className="flex h-full">
                {info.images.map((src: string, idx: number) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 relative px-2 h-full flex items-center justify-center">
                    <img src={src} alt={info.title + ' ' + (idx + 1)} className="w-full h-[50vh] md:h-[60vh] object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
            {info.images.length > 1 && (
              <>
                <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D1B4D] transition-colors" aria-label="Previous slide">
                  <FaChevronLeft size={32} />
                </button>
                <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D1B4D] transition-colors" aria-label="Next slide">
                  <FaChevronRight size={32} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {info.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => emblaApi?.scrollTo(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${idx === selectedIndex ? 'bg-white' : 'bg-white/30'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-[50vh] md:h-[60vh] bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 text-2xl">No images yet</div>
        )}
      </div>
      <div className="md:w-2/5 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
        <h3 className="text-3xl md:text-4xl font-heading mb-4 text-accent">{info.title}</h3>
        <p className="text-lg md:text-xl text-white/90 max-w-xl">{info.text}</p>
      </div>
    </div>
  );
};

const fundraisingProjects = [
  {
    name: "Alzheimer's Association",
    description: `Our Alpha Tau Pledge Class fundraised for the Alzheimer's Association, which leads the way to end Alzheimer's and all other dementia by accelerating global research, driving risk reduction and early detection, and maximizing quality care and support. It leads the charge in Alzheimer's care, support, research and advocacy.`
  },
  {
    name: "Michael and Tami Lang Stuttering Institute",
    description: `Our Alpha Upsilon Pledge Class raised a total of $14,650 for the Michael and Tami Lang Stuttering Institute (LSI), a non-profit organization within the Moody College of Communication at The University of Texas at Austin and serves as a leader in stuttering research and practice. It provides evaluations and therapy free of charge, through philanthropic support, to children, teens, and adults who stutter.`
  },
  {
    name: "Breast Cancer Resource Center",
    description: `Our Alpha Phi class fundraised for the Breast Cancer Resource Center (BCRC), which is a non-profit organization under section 501(c)(3) of the United States Internal Revenue Code. Their mission is to empower those affected by breast cancer with personalized support and compassion.`
  },
  {
    name: "Pujols Family Foundation",
    description: `Our Alpha Chi pledge class fundraised for the Pujols Family foundation, which is a national not-for-profit agency that exists to honor God and strengthen families through our works, deeds and examples. They have sought to help those living with Down syndrome at home and to improve the lives of the impoverished in the Dominican Republic.`
  },
  {
    name: "Austin Humane Society",
    description: `Our Alpha Psi pledge class fundraised for the Austin Humane Society, the city's oldest No-Kill, non-profit animal adoption shelter dedicated to saving Austin. It transforms the lives of animals and the people who love them through life-saving programs that find animals homes, serve animals and people in times of crisis, prevent future homelessness through spay and neuter, and engage the community to be a part of the solution.`
  },
  {
    name: "The Miracle Foundation",
    description: `Our Beta Gamma pledge class fundraised for the miracle foundation, which believes that all children have the right to grow up in a stable, loving and nurturing environment. For the past 21 years, Miracle Foundation has improved the lives of more than 15,000 orphaned and vulnerable children at more than 300 orphanages in India.`
  },
  {
    name: "National Alliance on Mental Illness",
    description: `Our Beta Epsilon Pledge Class fundraised $4146 for NAMI, which is a non-profit organization dedicated to improving the lives of millions of Americans affected by mental illness.`
  },
  {
    name: "Stop Abuse for Everyone",
    description: `Our Beta Zeta pledge class fundraised for Stop abuse for everyone (SAFE), which has a mission to have a just and safe community free from violence and abuse. They focus on survivors, mutual accountability, diversity, inclusiveness, etc.`
  },
  {
    name: "The Herren Project",
    description: `Our Beta Eta pledge class fundraised for The Herren Project, a national nonprofit organization providing free resources and support for the treatment, recovery and prevention of substance use disorder. Herren Project's prevention and wellness initiatives provide schools and communities resources to prevent the misuse of drugs and alcohol.`
  },
  {
    name: "PERIOD.",
    description: `Our Beta Theta Pledge Class raised $5000 for Period., a nonprofit that aims to eradicate period poverty and stigma through service, education, and advocacy. Through the distribution of menstrual products, promotion of youth leadership, and championing of menstrual equity in policy, PERIOD. aims to center those disproportionately affected by period poverty and support local efforts for menstrual equity.`
  },
  {
    name: "Urban Roots",
    description: `Our Beta Iota Pledge Class raised $5000 for Urban Roots, a nonprofit organization dedicated to cultivating a sustainable, equitable, and just food system. By working with youth leaders to grow fresh food and build a community focused on food equity, Urban Roots envisions a future where everyone has access to healthy, nutritious food.`
  },
  {
    name: "Book Drive for Kids",
    description: `Our Beta Lambda Pledge Class raised $4500 for the Book Drive for Kids in Austin, a nonprofit dedicated to fostering a culture of literacy by providing books to disadvantaged children for independent reading. This initiative aims to inspire a love for reading and support children's education by ensuring they have access to essential books.`
  },
  {
    name: "Caritas of Austin",
    description: `Our Beta Mu pledge class raised over 7300 dollars for Caritas of Austin, an Austin nonprofit aimed at supporting the homeless and combating financial illiteracy. Raising awareness for these causes and hosting community based events, the Beta Mu pledge class were able to raise these funds to increase financial literacy. By supporting the homeless, and those at risk, we are able to build a stronger local community and create an overall more equitable society.`
  },
  {
    name: "Austin Angels",
    description: `Our Beta Nu Pledge Class raised over $7,500 for Austin Angels, a nonprofit working to support children, youth, and families in the local foster care community through intentional giving, relationship building, and mentorship. With programs like Love Boxes and Dare to Dream, Austin Angels enables vulnerable foster children to succeed academically, socially, and professionally.`
  },
  {
    name: "Casa Marianella",
    description: `Our Beta Xi Pledge Class raised over $9,000 for Casa Marianella, a nonprofit dedicated to providing support and resources for immigrants and refugees in the Austin area. Through their work, Casa Marianella offers shelter, legal assistance, and a range of services aimed at helping individuals transition into stable, self-sufficient lives.`
  },
];

const Pillars = () => {
  const [expanded, setExpanded] = useState([false, false, false]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4D] via-[#3D2B5D] to-[#4B3B6D]">
      <SectionWrapper className="h-[18vh] px-4 flex items-center justify-center">
        <div className="max-w-4xl w-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-heading text-center text-white">Our Pillars</h1>
        </div>
      </SectionWrapper>
      {pillars.map((pillar, index) => (
        <div key={pillar.title}>
          {/* Hero Section for Pillar - full viewport height */}
          <section
            id={
              pillar.title === 'Professionalism' ? 'professionalism'
              : pillar.title === 'Community Service' ? 'community-service'
              : pillar.title === 'Brotherhood' ? 'brotherhood'
              : undefined
            }
            className="relative flex items-center justify-center h-screen w-full overflow-hidden"
            style={{ backgroundColor: '#2D1B4D' }}
          >
            <img
              src={pillar.image}
              alt={pillar.title + ' cover'}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              aria-hidden="true"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2D1B4D]/80 via-[#3D2B5D]/60 to-[#4B3B6D]/80" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <h2 className="text-5xl md:text-6xl font-heading text-white mb-4 drop-shadow-lg text-center">{pillar.title}</h2>
              <p className="text-2xl md:text-3xl text-accent font-semibold drop-shadow-lg text-center">{pillar.tagline}</p>
            </div>
          </section>
          {/* Two-column layout with image and brief text for Brotherhood, carousel for others */}
          <SectionWrapper className="py-12 px-4 flex flex-col items-center justify-center bg-background/80 border-b border-foreground/10">
            {pillar.title === 'Brotherhood' ? (
              <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-8 h-[60vh] md:h-[70vh] items-center justify-between">
                <div className="md:w-3/5 w-full flex flex-col items-center justify-center h-full">
                  <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                    <img src={'/images/pillars/bro/bro.jpeg'} alt="Brotherhood" className="w-full h-[50vh] md:h-[60vh] object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
                <div className="md:w-2/5 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
                  <h3 className="text-3xl md:text-4xl font-heading mb-4 text-accent">Brotherhood</h3>
                  <p className="text-lg md:text-xl text-white/90 max-w-xl">
                    Beta Kappa helps you build a network of close, life-long relationships. These relationships are both within the Beta Kappa chapter and within the organization of Delta Sigma Pi as a whole through regional and national events. The Beta Kappa chapter also hosts brotherhood activities each semester designed to help grow the relationships with the outstanding members of Beta Kappa. The relationships developed within the chapter last a lifetime beyond active collegiate membership.
                  </p>
                </div>
              </div>
            ) : pillar.title === 'Community Service' ? (
              <ExpandableSection info={{
                title: pillar.title,
                text: pillar.briefText,
                images: [
                  '/images/pillars/cs/cs1.jpg',
                  '/images/pillars/cs/cs2.jpg',
                  '/images/pillars/cs/cs3.jpeg',
                  '/images/pillars/cs/cs4.jpeg',
                ]
              }} />
            ) : index === 0 ? (
              <ExpandableSection info={{ title: pillar.title, text: pillar.briefText, images: pillar.learnMore.map(info => info.images).flat() }} />
            ) : (
              <ExpandableSection info={{ title: pillar.title, text: pillar.briefText, images: [] }} />
            )}
            {/* Learn more button */}
            <button
              className="mt-8 text-accent flex flex-col items-center hover:underline focus:outline-none"
              onClick={() => setExpanded((prev) => prev.map((v, i) => (i === index ? !v : v)))}
            >
              <span>Learn more</span>
              <span className={`transition-transform duration-300 ${expanded[index] ? 'rotate-180' : ''}`}> 
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </span>
            </button>
            {/* Expandable content */}
            <AnimatePresence initial={false}>
              {expanded[index] && (
                <motion.div
                  key="expand"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full mt-8 overflow-hidden"
                >
                  <div className="flex flex-col gap-8">
                    {/* Only show the first learnMore section for Community Service, then the fundraising dropdown */}
                    {pillar.title === 'Community Service' ? (
                      <>
                        <ExpandableSection info={{
                          title: 'CASA MARIANELLA',
                          text: `Fall 2024, our Beta Xi Pledge Class raised over $9,000 for Casa Marianella, a nonprofit dedicated to providing support and resources for immigrants and refugees in the Austin area. Through their work, Casa Marianella offers shelter, legal assistance, and a range of services aimed at helping individuals transition into stable, self-sufficient lives.`,
                          images: ['/images/pillars/cscover.jpeg']
                        }} />
                        <FundraisingDropdown />
                      </>
                    ) : (
                      pillar.learnMore.map((info, idx) => (
                        <ExpandableSection key={idx} info={info} />
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SectionWrapper>
        </div>
      ))}
    </div>
  );
};

function FundraisingDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-heading text-accent mb-2">Past Fundraising Projects</h3>
      {fundraisingProjects.map((project, idx) => (
        <div key={project.name} className="rounded-lg border border-white/20 bg-background/70 overflow-hidden shadow-md">
          <button
            className="w-full flex items-center justify-between px-6 py-4 bg-background/90 hover:bg-background/80 transition-colors focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="text-lg md:text-xl font-bold tracking-wide text-accent uppercase text-left">{project.name}</span>
            <span className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-90' : ''}`}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M9 18l6-6-6-6"/></svg>
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 py-4 bg-background/80 border-t border-white/10 animate-fade-in text-white/90 text-base">
              {project.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pillars;
