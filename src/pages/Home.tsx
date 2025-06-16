import SectionWrapper from '../components/SectionWrapper';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary via-background to-background">
        <h1 className="text-5xl md:text-7xl font-heading mb-6">
          Delta Sigma Pi
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
          Where Ambition Meets Brotherhood
        </p>
      </section>

      {/* About Preview */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">About DSP</h2>
          <p className="text-lg text-foreground/80">
            Founded in 1930, the Beta Kappa Chapter of Delta Sigma Pi at the University of Texas at Austin
            prides itself on fostering a community among business and economics students.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
