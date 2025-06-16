import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Our Mission</h1>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Delta Sigma Pi is America's foremost co-business fraternity for students
              pursuing business and economics. We are a group of over 95 brothers all
              focused on bettering ourselves, our brotherhood, and our community. Our
              interests extend beyond business into service, social activities, and
              holistic professional development.
            </p>
            <p>
              Our chapter prides itself on giving back in all aspects. Professionally,
              upperclassmen and alumni help younger brothers land dream roles in
              finance, consulting, tech, real estate, marketing, music, law, and more.
              We extend this mindset to UT and Austin through fundraisers and
              university-wide events in partnership with local charities.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* EC Grid Placeholder */}
      <SectionWrapper className="py-20 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">Executive Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for EC Grid */}
            <div className="p-6 bg-background/60 rounded-lg border border-foreground/10">
              <div className="w-24 h-24 bg-foreground/10 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-heading text-center">Name</h3>
              <p className="text-accent text-center">Role</p>
              <p className="text-sm text-foreground/70 text-center mt-2">
                Brief bio about the EC member and their role in the chapter.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
