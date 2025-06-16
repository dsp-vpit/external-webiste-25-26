import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    </div>
  );
};

export default Home;
