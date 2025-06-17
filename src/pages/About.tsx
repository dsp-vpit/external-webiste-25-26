import SectionWrapper from '../components/SectionWrapper';
import { useState } from 'react';

const ecMembers = [
  { name: "Parker Freeburg", role: "President", img: "/images/ec/President.jpeg" },
  { name: "Saketh Koduri", role: "Chancellor", img: "/images/ec/Chancellor.jpeg" },
  { name: "Ramona Mahmoudkhani", role: "VP Chapter Operations", img: "/images/ec/VPCO.jpeg" },
  { name: "Riccardo Faramondi", role: "Senior VP", img: "/images/ec/SVPricky.jpeg" },
  { name: "Simran Bajwa", role: "Senior VP", img: "/images/ec/SVPsimran.jpeg" },
  { name: "Saathvik Chepyala", role: "VP Information Technology", img: "/images/ec/VPIT.jpg" },
  { name: "Aarav Parekh", role: "VP Community Service", img: "/images/ec/VPCSparekh.png" },
  { name: "Aarav Goswami", role: "VP Community Service", img: "/images/ec/VPCSgoswami.png" },
  { name: "Rohan Bhardwaj", role: "Brotherhood Chair", img: "/images/ec/Brotherhood.jpeg" },
  { name: "Ann Vaddakkan", role: "VP Activities", img: "/images/ec/VPA.jpeg" },
  { name: "Sajan Parikh", role: "VP Professional Activities", img: "/images/ec/VPPAsajan.jpeg" },
  { name: "Nitin Jaladanki", role: "VP Professional Activities", img: "/images/ec/VPPAnitin.jpeg" },
  { name: "Tyler Vacca", role: "VP Finance", img: "/images/ec/VPF.jpeg" },
  { name: "Jacqueline Saenz", role: "VP Alumni Relations", img: "/images/ec/VPAR.jpeg" },
  { name: "Christian Patterson", role: "VP Regulatory Affairs", img: "/images/ec/VPRA.jpeg" },
  { name: "Preston Rumney", role: "VP External Relations", img: "/images/ec/VPER1.jpeg" },
  { name: "Esha Gajula", role: "VP External Relations", img: "/images/ec/VPEResha.jpeg" },
  { name: "Manasvi Katuri", role: "VP Scholarship & Awards", img: "/images/ec/VPSA.JPG.jpeg" },
];

const pledgeClasses = [
  {
    name: 'Beta Iota',
    members: [
      'Reeba Abraham', 'Adriel Bustillos', 'Esteban Cantu', 'James Chong', 'Parker Freeburg',
      'Amadee Garza', 'Freddy Guo', 'Ethan Harris', 'Tanya Kalidindi', 'Shashank Kashyap',
      'Rachel Lehane', 'Aasritha Madisetty', 'Anusha Mittal', 'Varsha Namboodiri', 'Pranav Nair',
      'Natalie Nguyen', 'Samhitha Thalluru', 'Shamus Wu', 'Rio Yokoyama',
    ],
  },
  {
    name: 'Beta Lambda',
    members: [
      'Jide Adesanya', 'Daniella Bower', 'Joseramon Cardenas', 'Aryaman Chhawcharia', 'Melissa Jhaveri',
      'Abhinav Kolli', 'Prabhav Kumbum', 'Angela Liu', 'Tanisha Padhi', 'Sohana Parikh',
      'Aditi Reddy', 'Tej Reddy', 'Angel Salinas', 'Garima Talwar', 'Akhil Vinjamaram',
      'Charles Wang', 'Dorothy Xu',
    ],
  },
  {
    name: 'Beta Mu',
    members: [
      'Aadit Gandhi', 'Ann Vadakan', 'Alejandro Lopez', 'Alok Shah', 'Emma Awoseyi',
      'Harry Deng', 'Isaac Lu', 'Jai Ramgopal', 'Maria Min', 'Mihir Bhatia',
      'Mukunda Bodapati', 'Nitin Jaladanki', 'Riccardo Faramondi', 'Sajan Parikh', 'Saketh Koduri',
      'Samantha Cruz', 'Simran Bajwa', 'Soumil Voma',
    ],
  },
  {
    name: 'Beta Nu',
    members: [
      'Saathvik Chepyala', 'Esha Gajula', 'Apoorva Gobburu', 'Aditi Gupta', 'Evan Jin',
      'Manasvi Katuri', 'Colin Kirchhoff', 'Maggy Ma', 'Ramona Mahmoudkhani', 'Aditya Mudgal',
      'Aarav Parekh', 'Arjun Ramesh', 'Preston Rumney', 'Jacqueline Saenz', 'Sean Sanchez',
      'Tanya Sayooj', 'Anastasia Sewell', 'Parth Thakkar', 'Tyler Vacca',
    ],
  },
  {
    name: 'Beta Xi',
    members: [
      'Krisha Arun', 'Esha Bandi', 'Rohan Bhardwaj', 'Sabine Choi', 'Riddhi Chowdhury',
      'Aarav Goswami', 'Natnaele Gulte', 'Beomjun Kim', 'Meghana Kothamasu', 'Sarah Lagrange',
      'Rishi Menon', 'Netra Patel', 'Tej Patel', 'Christian Patterson', 'Disha Sharma',
      'Rithika Singadi', 'Brandon Spacco', 'Daniel Xu',
    ],
  },
  {
    name: 'Beta Omicron',
    members: [
      'Mitha Ananth', 'Daisy Chen', 'Leo Chen', 'Isaiah Duvvuri', 'Sathvik Enturi',
      'Krish Gajera', 'Gabriella Grossman', 'Aadya Holla', 'Annika Kannookkadan', 'Allison Le',
      'Nivy Manikandan', 'Ananshi Patel', 'Pedro Rocha', 'Connor Stewart',
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4D] via-[#3D2B5D] to-[#4B3B6D]">
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

      {/* EC Grid */}
      <SectionWrapper className="py-20 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">Executive Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ecMembers.map((member) => (
              <div key={member.name} className="p-6 bg-background/60 rounded-lg border border-foreground/10 flex flex-col items-center text-center shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-accent shadow"
                />
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-foreground/70">Short description or fun fact goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pledge Classes Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center text-white">Active Pledge Classes</h2>
          <div className="space-y-4">
            {pledgeClasses.map((pc) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={pc.name} className="rounded-lg border border-white/20 bg-background/70 overflow-hidden shadow-md">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 bg-background/90 hover:bg-background/80 transition-colors focus:outline-none"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <span className="text-lg md:text-xl font-bold tracking-wide text-accent uppercase">{pc.name}</span>
                    <span className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M9 18l6-6-6-6"/></svg>
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 py-4 bg-background/80 border-t border-white/10 animate-fade-in">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-white/90 text-base">
                        {pc.members.map((member) => (
                          <li key={member} className="py-1">{member}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
