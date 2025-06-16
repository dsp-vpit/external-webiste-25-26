import SectionWrapper from '../components/SectionWrapper';

const pillars = [
  {
    title: "Professionalism",
    description: "Our Professionalism pillar focuses on developing business acumen and professional skills through workshops, networking events, and mentorship programs.",
    icon: "💼"
  },
  {
    title: "Community Service",
    description: "Our Community Service pillar empowers and encourages brothers to give back through impactful fundraisers and hands-on volunteering, creating meaningful change on the Forty Acres and beyond!",
    icon: "🤝"
  },
  {
    title: "Brotherhood",
    description: "Our Brotherhood pillar creates lasting bonds through social events, traditions, and shared experiences that make DSP a home away from home.",
    icon: "👥"
  }
];

const Pillars = () => {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-16 text-center">Our Pillars</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <SectionWrapper key={pillar.title} className="p-6 bg-background/60 rounded-lg border border-foreground/10" index={index + 1}>
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h2 className="text-2xl font-heading mb-4">{pillar.title}</h2>
                <p className="text-foreground/80">{pillar.description}</p>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Pillars;
