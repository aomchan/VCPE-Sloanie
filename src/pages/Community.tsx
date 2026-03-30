import { Briefcase, GraduationCap, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const profiles = [
  { icon: TrendingUp, title: "Aspiring PE Professionals", desc: "Students pursuing careers in private equity and private market investing." },
  { icon: Users, title: "Future VC Investors", desc: "Members exploring venture capital, early-stage investing, and fund strategy." },
  { icon: Briefcase, title: "Operators & Consultants", desc: "Professionals transitioning from operations and consulting into investing roles." },
  { icon: GraduationCap, title: "Finance Professionals", desc: "Expanding their expertise into private markets and alternative investments." },
];

const benefits = [
  "Tailored career advice and mentorship",
  "Resume workshops and recruitment strategy sessions",
  "Study treks to top PE firms in NYC, Boston, and London",
  "Speaker series with industry professionals and experts",
  "Networking events with PE firms and MIT alumni",
  "Hands-on projects and investment workshops",
  "Weekly newsletter with VCPE job and internship opportunities",
  "Connections with 270+ members across MIT Sloan",
];

const careerFirms = [
  "Apollo Global Management", "EQT Partners", "The Carlyle Group", "Insight Partners",
  "Macquarie", "Vista Equity Partners", "MIT Sloan", "Major PE & VC Firms",
];

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Community</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Community</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Connect with future leaders from MIT who are committed to making their mark in private markets. The club serves as a nexus for collaboration, connecting like-minded individuals with industry professionals and alumni.
          </p>
        </div>
      </section>

      {/* Who Joins */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">Who joins VCPE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((p) => (
              <div key={p.title} className="p-6 rounded-lg bg-surface border border-border">
                <p.icon className="text-sloan-red mb-3" size={24} />
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Member Benefits</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">What members gain</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Within this dynamic community, members gain unparalleled opportunities to immerse themselves in the intricacies of private market investing. Students acquire invaluable skills and insights essential for success in this competitive field.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="text-sloan-red shrink-0" size={18} />
                    <span className="text-foreground text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-lg p-10 text-center">
              <p className="font-display text-5xl font-bold text-primary-foreground mb-2">270+</p>
              <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mb-4">Active Members</p>
              <p className="text-primary-foreground/50 text-xs mb-6">One of the largest student clubs at MIT Sloan</p>
              <a href="https://sloangroups.mit.edu/venturecapitalandprivateequity/club_signup" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">Join VCPE</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Firms */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Our Network</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Firms in our ecosystem</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Students forge lasting relationships that propel them toward fulfilling careers in the VCPE sector through our treks, events, and alumni network.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {careerFirms.map((name) => (
              <div key={name} className="flex items-center justify-center h-16 rounded-lg border border-border bg-card">
                <span className="font-display font-semibold text-muted-foreground text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
