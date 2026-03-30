import { Briefcase, GraduationCap, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const profiles = [
  { icon: TrendingUp, title: "Aspiring VCs", desc: "Students pursuing careers in venture capital and early-stage investing." },
  { icon: Users, title: "Founders", desc: "Entrepreneurs exploring fundraising, investor relations, and growth strategy." },
  { icon: Briefcase, title: "Operators", desc: "Professionals transitioning from operations and consulting into investing roles." },
  { icon: GraduationCap, title: "Finance Professionals", desc: "Expanding their expertise into private markets and alternative investments." },
];

const benefits = [
  "VC and PE recruiting preparation",
  "Investment framework workshops",
  "Guest speaker access and Q&A sessions",
  "Networking events with industry professionals",
  "Mock interview practice",
  "Exclusive investor dinners",
  "Career mentorship programs",
  "Fund visit opportunities",
];

const careerLogos = ["Sequoia Capital", "Bain Capital", "General Catalyst", "BCG", "McKinsey", "Goldman Sachs", "KKR", "Andreessen Horowitz"];

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Community</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Community</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl">
            A diverse network of students united by a shared passion for private markets and innovation.
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
              <p className="font-display text-5xl font-bold text-primary-foreground mb-2">400+</p>
              <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mb-6">Active Members</p>
              <Link to="/join">
                <Button variant="hero" size="lg">Join VCPE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Career Outcomes</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Where our members intern and work</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            VCPE alumni have gone on to roles at top investment firms and consulting practices.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {careerLogos.map((name) => (
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
