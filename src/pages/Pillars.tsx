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
    briefText: 'We believe in giving back. Our service projects make a real difference.',
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
      { title: 'Events', text: 'Socials, retreats, and more bring us together.', images: [] },
      { title: 'Traditions', text: 'DSP traditions create a sense of belonging.', images: [] },
      { title: 'Support', text: 'Brothers support each other through thick and thin.', images: [] },
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

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8">
      <div className="md:w-1/2 w-full flex flex-col items-center">
        {info.images && info.images.length > 0 ? (
          <div className="relative w-full max-w-lg">
            <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
              <div className="flex">
                {info.images.map((src: string, idx: number) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 relative px-2">
                    <img src={src} alt={info.title + ' ' + (idx + 1)} className="w-full h-72 object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
            {info.images.length > 1 && (
              <>
                <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D1B4D] transition-colors" aria-label="Previous slide">
                  <FaChevronLeft size={24} />
                </button>
                <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D1B4D] transition-colors" aria-label="Next slide">
                  <FaChevronRight size={24} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {info.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => emblaApi?.scrollTo(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === selectedIndex ? 'bg-white' : 'bg-white/30'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-72 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 text-xl">No images yet</div>
        )}
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl font-heading mb-2 text-accent">{info.title}</h3>
        <p className="text-lg text-white/90">{info.text}</p>
      </div>
    </div>
  );
};

const Pillars = () => {
  const [expanded, setExpanded] = useState([false, false, false]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4D] via-[#3D2B5D] to-[#4B3B6D]">
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-16 text-center text-white">Our Pillars</h1>
        </div>
      </SectionWrapper>
      {pillars.map((pillar, index) => (
        <div key={pillar.title}>
          {/* Hero Section for Pillar - full viewport height */}
          <section
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
          {/* Two-column layout with carousel and brief text */}
          <SectionWrapper className="py-12 px-4 flex flex-col items-center justify-center bg-background/80 border-b border-foreground/10">
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center justify-center">
              {/* Carousel */}
              <div className="md:w-1/2 w-full flex flex-col items-center">
                {index === 0 ? (
                  <ExpandableSection info={{ title: pillar.title, text: pillar.briefText, images: pillar.learnMore.map(info => info.images).flat() }} />
                ) : (
                  <ExpandableSection info={{ title: pillar.title, text: pillar.briefText, images: [] }} />
                )}
              </div>
              {/* Brief Text */}
              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-heading mb-2 text-accent">{pillar.title}</h3>
                <p className="text-lg text-white/90">{pillar.briefText}</p>
              </div>
            </div>
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
                    {pillar.learnMore.map((info, idx) => (
                      <ExpandableSection key={idx} info={info} />
                    ))}
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

export default Pillars;
