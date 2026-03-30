import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, TrendingUp, Calendar, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImg from "@/assets/hero-event.jpg";
import eventPanel from "@/assets/event-panel.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

const metrics = [
  { value: "400+", label: "Members" },
  { value: "25+", label: "Events Annually" },
  { value: "50+", label: "Guest Speakers" },
  { value: "2,000+", label: "Total Attendees" },
];

const aboutCards = [
  { icon: GraduationCap, title: "Education", desc: "Investment frameworks, case studies, and industry deep-dives." },
  { icon: Users, title: "Networking", desc: "Connections with leading investors, founders, and operators." },
  { icon: Briefcase, title: "Career Development", desc: "Recruiting prep, mock interviews, and mentorship programs." },
  { icon: TrendingUp, title: "Industry Exposure", desc: "Access to deal flow, fund visits, and market insights." },
];

const upcomingEvents = [
  {
    image: eventPanel,
    title: "VC Masterclass: Early-Stage Investing",
    speaker: "Sarah Chen, Partner at Benchmark",
    date: "April 15, 2026",
    time: "6:00 PM EST",
    desc: "Learn the fundamentals of early-stage venture investing from one of the industry's top partners.",
  },
  {
    image: eventNetworking,
    title: "PE Industry Night",
    speaker: "Multiple Speakers",
    date: "April 22, 2026",
    time: "7:00 PM EST",
    desc: "Network with private equity professionals from leading firms in an intimate setting.",
  },
  {
    image: eventWorkshop,
    title: "LBO Modeling Workshop",
    speaker: "James Rivera, VP at KKR",
    date: "May 3, 2026",
    time: "5:30 PM EST",
    desc: "Hands-on workshop building a leveraged buyout model from scratch.",
  },
];

const speakers = [
  { image: speaker1, name: "Michael Torres", firm: "Andreessen Horowitz", topic: "The Future of AI Investing" },
  { image: speaker2, name: "Elena Vasquez", firm: "General Catalyst", topic: "Scaling from Seed to Series B" },
  { image: speaker3, name: "David Chen", firm: "Bain Capital", topic: "Value Creation in PE" },
  { image: speaker4, name: "Priya Sharma", firm: "Sequoia Capital", topic: "Market Timing & Fund Strategy" },
];

const communityProfiles = [
  { icon: TrendingUp, title: "Aspiring VCs", desc: "Students pursuing careers in venture capital." },
  { icon: Users, title: "Founders", desc: "Entrepreneurs exploring fundraising strategies." },
  { icon: Briefcase, title: "Operators", desc: "Professionals transitioning into investing." },
  { icon: GraduationCap, title: "Finance Professionals", desc: "Expanding their private markets expertise." },
];

const partners = [
  "MIT Sloan", "Sequoia Capital", "Bain Capital", "General Catalyst",
  "Andreessen Horowitz", "Bessemer Venture Partners", "KKR", "TPG",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="VCPE Conference" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-narrow">
          <div className="max-w-2xl">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-4">MIT Sloan School of Management</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Venture Capital &<br />Private Equity Club
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              The hub for future investors, founders, and operators exploring venture capital and private equity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/join">
                <Button variant="hero" size="lg">Join VCPE</Button>
              </Link>
              <Link to="/events">
                <Button variant="hero-outline" size="lg">
                  Upcoming Events <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mb-16">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">About VCPE</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building the next generation of investors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The MIT Sloan VCPE Club is the premier student organization dedicated to venture capital and private equity education, networking, and career development. We bridge the gap between academic excellence and industry practice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutCards.map((card) => (
              <div key={card.title} className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-sloan-red/20 transition-all duration-300">
                <card.icon className="text-sloan-red mb-4" size={28} />
                <h3 className="font-display font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">{m.value}</p>
                <p className="text-primary-foreground/60 text-sm uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">What's Next</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Upcoming Events</h2>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-1 text-sm font-medium text-sloan-red hover:underline">
              View all events <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={720} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    <span>{event.date} · {event.time}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{event.title}</h3>
                  <p className="text-sloan-red text-sm font-medium mb-3">{event.speaker}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>
                  <Button variant="outline" size="sm" className="w-full">Register</Button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/events" className="md:hidden flex items-center justify-center gap-1 mt-8 text-sm font-medium text-sloan-red hover:underline">
            View all events <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Community */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mb-16">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Community</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Who joins VCPE</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our members come from diverse backgrounds, united by a shared passion for private markets and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityProfiles.map((p) => (
              <div key={p.title} className="p-6 rounded-lg bg-surface border border-border">
                <p.icon className="text-sloan-red mb-3" size={24} />
                <h3 className="font-display font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="max-w-2xl mb-12">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Speaker Series</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Industry leaders we bring to Sloan</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {speakers.map((s) => (
              <div key={s.name} className="text-center group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={512} height={512} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm">{s.name}</h3>
                <p className="text-sloan-red text-xs font-medium">{s.firm}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Our Ecosystem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Partners & Collaborators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {partners.map((p) => (
              <div key={p} className="flex items-center justify-center h-20 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <span className="font-display font-semibold text-muted-foreground text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Join the VCPE Community
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Open to MIT Sloan students interested in venture capital, private equity, and startups. Be part of the conversation shaping the future of investing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join">
              <Button variant="hero" size="lg">Apply for Membership</Button>
            </Link>
            <Button variant="hero-outline" size="lg">Join Mailing List</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
