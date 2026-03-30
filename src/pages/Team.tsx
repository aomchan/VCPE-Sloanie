import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

const team = [
  { image: speaker1, name: "Alex Rodriguez", role: "Co-President", bio: "MBA '26 · Previously at Goldman Sachs" },
  { image: speaker2, name: "Sarah Mitchell", role: "Co-President", bio: "MBA '26 · Previously at McKinsey" },
  { image: speaker3, name: "David Kim", role: "VP of Events", bio: "MBA '27 · Previously at Bain Capital" },
  { image: speaker4, name: "Maya Patel", role: "VP of Career Development", bio: "MBA '27 · Previously at General Catalyst" },
  { image: speaker1, name: "James Chen", role: "VP of Marketing", bio: "MBA '27 · Previously at BCG" },
  { image: speaker2, name: "Emily Thompson", role: "VP of Partnerships", bio: "MBA '26 · Previously at TPG" },
  { image: speaker3, name: "Ryan O'Brien", role: "VP of Education", bio: "MBA '27 · Previously at KKR" },
  { image: speaker4, name: "Aisha Johnson", role: "VP of Membership", bio: "MBA '27 · Previously at Sequoia" },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Team</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl">
            Meet the leadership team driving VCPE's mission forward.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                <p className="text-sloan-red text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-xs mt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
