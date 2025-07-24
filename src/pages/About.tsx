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
      { name: 'Reeba Abraham', img: '/images/headhsots/Beta Iota/reebaAbraham.jpeg' },
      { name: 'Esteban Cantu', img: '/images/headhsots/Beta Iota/estebanCantu.jpeg' },
      { name: 'Parker Freeburg', img: '/images/headhsots/Beta Iota/parkerFreeburg.jpeg' },
      { name: 'Amadee Garza', img: '/images/headhsots/Beta Iota/amadeeGarza.jpeg' },
      { name: 'Freddy Guo', img: '/images/headhsots/Beta Iota/freddyGuo.jpeg' },
      { name: 'Tanya Kalidindi', img: '/images/headhsots/Beta Iota/tanyaKalidindi.jpeg' },
      { name: 'Aasritha Madisetty', img: '/images/headhsots/Beta Iota/aasrithaMadisetty.jpeg' },
      { name: 'Varsha Namboodiri', img: '/images/headhsots/Beta Iota/varshaNamboodiri.jpeg' },
      { name: 'Shamus Wu', img: '/images/headhsots/Beta Iota/shamusWu.jpeg' },
      { name: 'Rio Yokoyama', img: '/images/headhsots/Beta Iota/rioYokoyama.jpeg' },
    ],
  },
  {
    name: 'Beta Lambda',
    members: [
      { name: 'Aryaman Chhawcharia', img: '/images/headhsots/Beta Lambda/aryamanChhawcharia.jpeg' },
      { name: 'Melissa Jhaveri', img: '/images/headhsots/Beta Lambda/melissaJhaveri.jpeg' },
      { name: 'Abhinav Kolli', img: '/images/headhsots/Beta Lambda/abhinavKolli.jpeg' },
      { name: 'Prabhav Kumbum', img: '/images/headhsots/Beta Lambda/prabhavKumbum.jpeg' },
      { name: 'Tanisha Padhi', img: '/images/headhsots/Beta Lambda/tanishaPadhi.jpeg' },
      { name: 'Aditi Reddy', img: '/images/headhsots/Beta Lambda/aditiReddy.jpeg' },
      { name: 'Dorothy Xu', img: '/images/headhsots/Beta Lambda/dorothyXu.jpeg' },
    ],
  },
  {
    name: 'Beta Mu',
    members: [
      { name: 'Aadit Gandhi', img: '/images/headhsots/Beta Mu/aaditGandhi.jpeg' },
      { name: 'Ann Vadakan', img: '/images/headhsots/Beta Mu/annVadakan.jpeg' },
      { name: 'Alejandro Lopez', img: '/images/headhsots/Beta Mu/alejandroLopez.jpeg' },
      { name: 'Alok Shah', img: '/images/headhsots/Beta Mu/alokShah.jpeg' },
      { name: 'Emma Awoseyi', img: '/images/headhsots/Beta Mu/emmaAwoseyi.jpeg' },
      { name: 'Harry Deng', img: '/images/headhsots/Beta Mu/harryDeng.jpeg' },
      { name: 'Isaac Lu', img: '/images/headhsots/Beta Mu/isaacLu.jpeg' },
      { name: 'Jai Ramgopal', img: '/images/headhsots/Beta Mu/jaiRamgopal.jpeg' },
      { name: 'Maria Min', img: '/images/headhsots/Beta Mu/mariaMin.jpeg' },
      { name: 'Mihir Bhatia', img: '/images/headhsots/Beta Mu/mihirBhatia.jpeg' },
      { name: 'Mukunda Bodapati', img: '/images/headhsots/Beta Mu/mukundaBodapati.jpeg' },
      { name: 'Nitin Jaladanki', img: '/images/headhsots/Beta Mu/nitinJaladanki.jpeg' },
      { name: 'Riccardo Faramondi', img: '/images/headhsots/Beta Mu/riccardoFaramondi.jpeg' },
      { name: 'Sajan Parikh', img: '/images/headhsots/Beta Mu/sajanParikh.jpeg' },
      { name: 'Saketh Koduri', img: '/images/headhsots/Beta Mu/sakethKoduri.jpeg' },
      { name: 'Samantha Cruz', img: '/images/headhsots/Beta Mu/samanthaCruz.jpeg' },
      { name: 'Simran Bajwa', img: '/images/headhsots/Beta Mu/simranBajwa.jpeg' },
      { name: 'Soumil Voma', img: '/images/headhsots/Beta Mu/soumilVoma.jpeg' },
    ],
  },
  {
    name: 'Beta Nu',
    members: [
      { name: 'Saathvik Chepyala', img: '/images/headhsots/Beta Nu/saathvikChepyala.jpeg' },
      { name: 'Esha Gajula', img: '/images/headhsots/Beta Nu/eshaGajula.jpeg' },
      { name: 'Apoorva Gobburu', img: '/images/headhsots/Beta Nu/apoorvaGobburu.jpeg' },
      { name: 'Aditi Gupta', img: '/images/headhsots/Beta Nu/aditiGupta.jpeg' },
      { name: 'Evan Jin', img: '/images/headhsots/Beta Nu/evanJin.jpeg' },
      { name: 'Manasvi Katuri', img: '/images/headhsots/Beta Nu/manasviKaturi.jpeg' },
      { name: 'Colin Kirchhoff', img: '/images/headhsots/Beta Nu/colinKirchhoff.jpeg' },
      { name: 'Maggy Ma', img: '/images/headhsots/Beta Nu/maggyMa.jpeg' },
      { name: 'Ramona Mahmoudkhani', img: '/images/headhsots/Beta Nu/ramonaMahmoudkhani.jpeg' },
      { name: 'Aditya Mudgal', img: '/images/headhsots/Beta Nu/adityaMudgal.jpeg' },
      { name: 'Aarav Parekh', img: '/images/headhsots/Beta Nu/aaravParekh.jpeg' },
      { name: 'Arjun Ramesh', img: '/images/headhsots/Beta Nu/arjunRamesh.jpeg' },
      { name: 'Preston Rumney', img: '/images/headhsots/Beta Nu/prestonRumney.jpeg' },
      { name: 'Jacqueline Saenz', img: '/images/headhsots/Beta Nu/jacquelineSaenz.jpeg' },
      { name: 'Tanya Sayooj', img: '/images/headhsots/Beta Nu/tanyaSayooj.jpeg' },
      { name: 'Anastasia Sewell', img: '/images/headhsots/Beta Nu/anastasiaSewell.jpeg' },
      { name: 'Parth Thakkar', img: '/images/headhsots/Beta Nu/parthThakkar.jpeg' },
      { name: 'Tyler Vacca', img: '/images/headhsots/Beta Nu/tylerVacca.jpeg' },
    ],
  },
  {
    name: 'Beta Xi',
    members: [
      { name: 'Krisha Arun', img: '/images/headhsots/Beta Xi/krishaArun.jpeg' },
      { name: 'Esha Bandi', img: '/images/headhsots/Beta Xi/eshaBandi.jpeg' },
      { name: 'Rohan Bhardwaj', img: '/images/headhsots/Beta Xi/rohanBhardwaj.jpeg' },
      { name: 'Riddhi Chowdhury', img: '/images/headhsots/Beta Xi/riddhiChowdhury.jpeg' },
      { name: 'Aarav Goswami', img: '/images/headhsots/Beta Xi/aaravGoswami.jpeg' },
      { name: 'Natnaele Gulte', img: '/images/headhsots/Beta Xi/natnaeleGulte.jpeg' },
      { name: 'Beomjun Kim', img: '/images/headhsots/Beta Xi/beomjunKim.jpeg' },
      { name: 'Meghana Kothamasu', img: '/images/headhsots/Beta Xi/meghanaKothamasu.jpeg' },
      { name: 'Sarah Lagrange', img: '/images/headhsots/Beta Xi/sarahLagrange.jpeg' },
      { name: 'Rishi Menon', img: '/images/headhsots/Beta Xi/rishiMenon.jpeg' },
      { name: 'Netra Patel', img: '/images/headhsots/Beta Xi/netraPatel.jpeg' },
      { name: 'Tej Patel', img: '/images/headhsots/Beta Xi/tejPatel.jpeg' },
      { name: 'Christian Patterson', img: '/images/headhsots/Beta Xi/christianPatterson.jpeg' },
      { name: 'Disha Sharma', img: '/images/headhsots/Beta Xi/dishaSharma.jpeg' },
      { name: 'Rithika Singadi', img: '/images/headhsots/Beta Xi/rithikaSingadi.jpeg' },
      { name: 'Daniel Xu', img: '/images/headhsots/Beta Xi/danielXu.jpeg' },
    ],
  },
  {
    name: 'Beta Omicron',
    members: [
      { name: 'Mitha Ananth', img: '/images/headhsots/Beta Omicron/mithaAnanth.jpeg' },
      { name: 'Daisy Chen', img: '/images/headhsots/Beta Omicron/daisyChen.jpeg' },
      { name: 'Leo Chen', img: '/images/headhsots/Beta Omicron/leoChen.jpeg' },
      { name: 'Isaiah Duvvuri', img: '/images/headhsots/Beta Omicron/isaiahDuvvuri.jpeg' },
      { name: 'Sathvik Enturi', img: '/images/headhsots/Beta Omicron/sathvikEnturi.jpeg' },
      { name: 'Krish Gajera', img: '/images/headhsots/Beta Omicron/krishGajera.jpeg' },
      { name: 'Gabriella Grossman', img: '/images/headhsots/Beta Omicron/gabriellaGrossman.jpeg' },
      { name: 'Aadya Holla', img: '/images/headhsots/Beta Omicron/aadyaHolla.jpeg' },
      { name: 'Annika Kannookkadan', img: '/images/headhsots/Beta Omicron/annikaKannookkadan.jpeg' },
      { name: 'Allison Le', img: '/images/headhsots/Beta Omicron/allisonLe.jpeg' },
      { name: 'Nivy Manikandan', img: '/images/headhsots/Beta Omicron/nivyManikandan.jpeg' },
      { name: 'Ananshi Patel', img: '/images/headhsots/Beta Omicron/ananshiPatel.jpeg' },
      { name: 'Pedro Rocha', img: '/images/headhsots/Beta Omicron/pedroRocha.jpeg' },
      { name: 'Connor Stewart', img: '/images/headhsots/Beta Omicron/connorStewart.jpeg' },
    ],
  },
];

const About = () => {
  const [openPledgeClass, setOpenPledgeClass] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4D] via-[#3D2B5D] to-[#4B3B6D]">
      {/* Mission Section */}
      <div className="py-20 px-4">
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
      </div>

      {/* EC Grid */}
      <div className="py-20 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">Executive Committee</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* On mobile, use grid-cols-2 for 2 per row */}
            {ecMembers.map((member) => (
              <div key={member.name} className="p-4 sm:p-6 bg-background/60 rounded-lg border border-foreground/10 flex flex-col items-center text-center shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-accent shadow"
                />
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pledge Classes Section */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center text-white">Active Pledge Classes</h2>
          <div className="space-y-8">
            {pledgeClasses.map((pc) => (
              <div key={pc.name} className="rounded-lg border border-white/20 bg-background/70 overflow-hidden shadow-md">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 bg-background/90 hover:bg-background/80 transition-colors focus:outline-none"
                  onClick={() => setOpenPledgeClass((prev) => (prev === pc.name ? null : pc.name))}
                >
                  <span className="text-lg md:text-xl font-bold tracking-wide text-accent uppercase">{pc.name}</span>
                  <span className={`transition-transform duration-300 ${openPledgeClass === pc.name ? 'rotate-90' : ''}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M9 18l6-6-6-6"/></svg>
                  </span>
                </button>
                {openPledgeClass === pc.name && (
                  <div className="px-6 py-8 bg-background/80 border-t border-white/10 animate-fade-in">
                    {/* Headshots Grid Template */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {pc.members.map((member) => (
                        <div key={member.name} className="flex flex-col items-center">
                          <img
                            src={member.img}
                            alt={member.name}
                            className="w-20 h-20 object-cover rounded-full border-2 border-accent shadow mb-2 bg-white/10"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/placeholder-headshot.png'; }}
                          />
                          <span className="text-white text-sm text-center font-medium leading-tight max-w-[8rem] break-words whitespace-normal">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About ΔΣΠ Section */}
      <SectionWrapper className="py-20 px-4 bg-background/60">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-accent">About ΔΣΠ</h2>
          <img
            src="/images/founders.png"
            alt="Delta Sigma Pi Founders"
            className="w-full max-w-md rounded-lg border-2 border-accent shadow-lg mb-8 object-contain bg-white/10"
          />
          <div className="space-y-6 text-lg text-foreground/80 mb-8">
            <p>
              Founded in 1907 at the New York University School of Commerce, Accounts and Finance by Alexander Frank Makay, Alfred Moysello and Henry Albert Tienken, and Harold Valentine Jacobs, Delta Sigma Pi is America's Foremost Business Fraternity. Currently based nationally out of Oxford, Ohio, the International Fraternity of Delta Sigma Pi has involved over 250,000 members since inception. Today, Delta Sigma Pi has 284 established collegiate chapters, 211 active collegiate chapters, and 56 active alumni chapters spread out across the country. Our philosophy encompasses all religious and cultural affiliations, includes both men and women, and stretches from coast to coast.
            </p>
            <p>
              As America's Foremost Business Fraternity, the purpose of our organization is to foster the study of business in universities; to encourage scholarship, social activity and the association of students for their mutual advancement by research and practice; to promote closer affiliation between the commercial world and students of commerce, and to further a higher standard of commercial ethics and culture and the civic and commercial welfare of the community.
            </p>
            <p>
              If you would like to learn more about DSP as a whole, we invite you to visit our fraternity's official national website.{' '}
              <a
                href="https://www.deltasigmapi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold underline hover:text-accent/80 transition-colors"
              >
                www.deltasigmapi.org
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
