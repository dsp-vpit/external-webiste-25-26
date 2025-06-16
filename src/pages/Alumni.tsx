import SectionWrapper from '../components/SectionWrapper';

const Alumni = () => {
  return (
    <div className="min-h-screen">
      {/* Message Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Dear Alumni</h1>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Whether you've recently graduated or it's been a couple of years since you attended your last chapter meeting, 
              your impact and your legacy continues to shape who we are as a chapter today. Beta Kappa wouldn't be what it is 
              without the foundation you helped build.
            </p>
            <p>
              We're excited to continue strengthen the relationships between our current members and the alumni who came before us. 
              Your legacy continues inspires us, and we hope to keep you connected to our members, our traditions, and our values 
              that made this chapter your home at the University of Texas.
            </p>
            <p>
              We invite you to stay engaged, whether it's through our mentorship program, attending events, or simply staying in 
              touch with your brotherhood. You'll forever be a part of our story.
            </p>
            <p className="text-right">
              With gratitude,<br />
              Jacqueline Saenz<br />
              Vice President of Alumni Relations
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Alumni Spotlight Section */}
      <SectionWrapper className="py-20 px-4 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-12 text-center">Alumni Spotlight</h2>
          <div className="p-8 bg-background/60 rounded-lg border border-foreground/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-foreground/10 rounded-full"></div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-heading mb-2">Alumni Name</h3>
                <p className="text-accent mb-2">Class of 2020</p>
                <p className="text-foreground/80 mb-4">Current Role at Company</p>
                <p className="text-sm text-foreground/70">
                  Brief bio about the alumnus and their journey after DSP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading mb-12 text-center">Latest Newsletter</h2>
          <div className="p-8 bg-background/60 rounded-lg border border-foreground/10">
            <h3 className="text-xl font-heading mb-4">Spring 2024 Newsletter</h3>
            <p className="text-foreground/80 mb-6">
              Stay updated with our latest chapter news, events, and achievements.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-accent text-background rounded hover:opacity-80"
            >
              Read Newsletter
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Alumni;
