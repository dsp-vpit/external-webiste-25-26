import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/carousel/image1.jpeg', alt: 'DSP Event 1' },
  { src: '/images/carousel/image2.jpeg', alt: 'DSP Event 2' },
  { src: '/images/carousel/image3.jpg', alt: 'DSP Event 3' },
  { src: '/images/carousel/image4.jpg', alt: 'DSP Event 4' },
  { src: '/images/carousel/image5.jpg', alt: 'DSP Event 5' },
  { src: '/images/carousel/image6.jpeg', alt: 'DSP Event 6' },
  { src: '/images/carousel/image7.jpeg', alt: 'DSP Event 7' },
  { src: '/images/carousel/image8.jpeg', alt: 'DSP Event 8' },
  { src: '/images/carousel/image9.png', alt: 'DSP Event 9' },
  { src: '/images/carousel/image10.jpg', alt: 'DSP Event 10' },
];

const heroTitle = 'Delta Sigma Pi';
const heroTagline = 'Where Ambition Meets Brotherhood';

const letterAnim = {
  initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
};

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Auto-scroll functionality
  useEffect(() => {
    const autoplay = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Helper for robust pillar section navigation (copied from Navbar)
  const handlePillarNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.assign(`/pillars#${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4D] via-[#3D2B5D] to-[#4B3B6D]">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-screen w-full relative z-10 overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-multiply pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
        {/* Stronger Purple Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2D1B4D]/90 via-[#3D2B5D]/80 to-[#4B3B6D]/90" style={{ zIndex: 1 }} />
        {/* Foreground Content */}
        <img
          src="/images/dsp-logo.png"
          alt="DSP Logo"
          className="h-28 w-auto mb-6 drop-shadow-lg relative z-10"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
        />
        <motion.h1
          className="text-6xl md:text-8xl font-heading mb-6 text-[#FFD700] flex flex-wrap justify-center relative z-10"
          initial="initial"
          animate="animate"
        >
          {heroTitle.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterAnim}
              transition={{ delay: i * 0.06 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#FFD700]/90 mb-8 flex flex-wrap justify-center relative z-10"
          initial="initial"
          animate="animate"
        >
          {heroTagline.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterAnim}
              transition={{ delay: (heroTitle.length + i) * 0.06 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.p>
        <Link
          to="/recruitment"
          className="inline-block px-8 py-4 bg-white text-[#2D1B4D] rounded-lg text-lg font-medium hover:bg-white/90 transition-colors relative z-10"
        >
          Join Our Brotherhood
        </Link>
      </section>

      {/* About Preview */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-white">About DSP</h2>
          <div className="space-y-6 text-lg text-white/90">
            <p>
              Founded in 1927, the Beta Kappa Chapter of Delta Sigma Pi at the University of Texas at Austin
              has been a cornerstone of business education and professional development for nearly a century.
              Our chapter prides itself on fostering a community of ambitious, driven individuals who are
              committed to excellence in both their academic and professional pursuits.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Image Carousel Section */}
      <SectionWrapper className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_50%] min-w-0 relative px-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D1B4D] transition-colors"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D1B4D] transition-colors"
              aria-label="Next slide"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Pillars Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center text-white">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professionalism Card */}
            <a href="/pillars#professionalism" onClick={handlePillarNav('professionalism')} className="relative block rounded-xl shadow-lg overflow-hidden border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent">
              <img
                src="/images/pillars/profcover.jpg"
                alt="Professionalism Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                aria-hidden="true"
              />
              <div className="absolute inset-0 w-full h-full bg-black/5" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center text-center p-8 h-full">
                <h3 className="text-2xl font-heading mb-4 text-accent drop-shadow-lg min-h-[32px] flex items-center justify-center">Professionalism</h3>
                <p className="text-white/90 drop-shadow-md">
                  As the most professional fraternity on campus, brothers are afforded valuable opportunities to develop themselves. Each semester, the chapter hosts events to benefit its brothers as well as the community as a whole. These events include resume workshops, mock interviews, networking events, hosting guest speakers, and more. The fraternity includes a network of accomplished alumni who live around the world.
                </p>
              </div>
            </a>
            {/* Brotherhood Card */}
            <a href="/pillars#brotherhood" onClick={handlePillarNav('brotherhood')} className="relative block rounded-xl shadow-lg overflow-hidden border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent">
              <img
                src="/images/pillars/brocover.jpeg"
                alt="Brotherhood Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                aria-hidden="true"
              />
              <div className="absolute inset-0 w-full h-full bg-black/5" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center text-center p-8 h-full">
                <h3 className="text-2xl font-heading mb-4 text-accent drop-shadow-lg min-h-[32px] flex items-center justify-center">Brotherhood</h3>
                <p className="text-white/90 drop-shadow-md">
                  Delta Sigma Pi is committed to helping its brothers build relationships that last a lifetime. The chapter hosts many events throughout the year that allow brothers to further connect with one another. Each member of a new pledge class is given a "big" and thus introduced into a family line. Families become a support group for each other. The Beta Kappa chapter is proud of the strong bonds it's helped nourish over the last 90 years.
                </p>
              </div>
            </a>
            {/* Community Service Card */}
            <a href="/pillars#community-service" onClick={handlePillarNav('community-service')} className="relative block rounded-xl shadow-lg overflow-hidden border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent">
              <img
                src="/images/pillars/cscover.jpeg"
                alt="Community Service Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                aria-hidden="true"
              />
              <div className="absolute inset-0 w-full h-full bg-black/5" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center text-center p-8 h-full">
                <h3 className="text-2xl font-heading mb-4 text-accent drop-shadow-lg min-h-[32px] flex items-center justify-center">Community Service</h3>
                <p className="text-white/90 drop-shadow-md">
                Every year, the Beta Kappa chapter contributes thousands of dollars to support charities, providing brothers with an opportunity to improve the lives of others. In addition, each pledge class collectively raises money for a charity of their choice. These include the Pujols Family Foundation, Breast Cancer Resource Center, Lang Stuttering Institute, National Alliance on Mental Illness, among others.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* President's Letter Section */}
      <section className="py-20 px-4 bg-background/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image and Overlay */}
          <div className="relative w-full md:w-1/2 max-w-xl flex flex-col items-center">
            <img
              src="/images/ec/President.jpeg"
              alt="Parker Freeburg, President"
              className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 bg-black/90 rounded px-6 py-4 w-full max-w-xs mx-auto">
              <div className="text-white text-2xl font-bold leading-tight">Parker Freeburg</div>
              <div className="text-white/80 text-sm mt-1">Beta Iota, President</div>
            </div>
          </div>
          {/* Letter Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">President's Letter</h2>
            <div className="text-lg text-foreground/90 space-y-6">
              <p className="font-semibold">Hey!</p>
              <p>My name's Parker, and I serve as the President of the Beta Kappa Chapter of Delta Sigma Pi here at UT. I'd love to tell you about BK and why we see ourselves as a premier co-ed business fraternity.</p>
              <p>Since its founding, Beta Kappa has strived to be an inclusive and successful professional organization. We pride ourselves on three pillars: Brotherhood, Professionalism, and Community Service. Our members take ownership in showing all three, looking to not only better ourselves but our school, Austin, and the world post-grad.</p>
              <p>I've gained nearly everything from this organization: a sense of professional guidance my freshman year, a group of my closest friends that's only grown with each passing pledge class, and a definitive way to use what I've learned to give back, uplift others, and create a space where our members feel that achieving the impossible is within their hands. If my word isn't enough, I can promise you that any brother would say the same.</p>
              <p>Looking back, I came to UT with a lot of fear: fear that I was alone, behind the curve, and that I would be drowned out by such a large campus. Then, I found DSP. Since my pledging semester, campus has felt smaller, and with that, my fears too. I've become more outgoing, entrepreneurial, and driven to help others navigate their time in college. I mean it when I say both my fondest memories and most meaningful contributions have stemmed from this brotherhood.</p>
              <p>The momentum doesn't stop after graduation, either. Our alumni network is extensive, filled with brothers who have risen to the top of their fields and preserved their sense of self by helping others, too. It's never intimidating to reach out. As we like to say,</p>
              <p className="italic text-accent font-semibold text-lg">"Once a brother, always a brother."</p>
              <p>I highly encourage you to attend an info session to learn more. We're always looking for new energy and perspective. If anything you just read hits home, take a chance and act on it!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
