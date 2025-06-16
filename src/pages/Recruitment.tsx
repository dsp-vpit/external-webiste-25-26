import SectionWrapper from '../components/SectionWrapper';

const Recruitment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">Recruitment</h1>
          <p className="text-lg text-foreground/80">
            Join our brotherhood and become part of a legacy of excellence in business and leadership.
          </p>
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="py-20 px-4 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-12 text-center">Recruitment Timeline</h2>
          <div className="space-y-8">
            {/* Placeholder Timeline Items */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-heading mb-2">Information Session</h3>
              <p className="text-foreground/80">Learn about DSP and meet our brothers</p>
              <p className="text-sm text-accent mt-1">Date TBD</p>
            </div>
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-heading mb-2">Social Events</h3>
              <p className="text-foreground/80">Get to know our brothers in a casual setting</p>
              <p className="text-sm text-accent mt-1">Dates TBD</p>
            </div>
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-heading mb-2">Interviews</h3>
              <p className="text-foreground/80">One-on-one conversations with our brothers</p>
              <p className="text-sm text-accent mt-1">Dates TBD</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Requirements Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-8 text-center">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-background/60 rounded-lg border border-foreground/10">
              <h3 className="text-xl font-heading mb-4">Academic</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Minimum 3.0 GPA</li>
                <li>• Business or Economics major</li>
                <li>• Full-time student status</li>
              </ul>
            </div>
            <div className="p-6 bg-background/60 rounded-lg border border-foreground/10">
              <h3 className="text-xl font-heading mb-4">General</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Strong leadership potential</li>
                <li>• Commitment to service</li>
                <li>• Professional mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Recruitment;
