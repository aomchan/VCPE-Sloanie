import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, TrendingUp, Calendar, ArrowRight, ChevronRight, Globe, Handshake, BookOpen } from "lucide-react";
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
  { value: "270+", label: "Members" },
  { value: "10+", label: "Firm Visits Per Trek" },
  { value: "3", label: "Verticals" },
  { value: "1", label: "Of the Largest Clubs at MIT Sloan" },
];

const aboutCards = [
  { icon: Handshake, title: "External Relations", desc: "Expanding the club's network by developing and maintaining relationships with key industry players, deepening industry knowledge and forging personal connections." },
  { icon: Briefcase, title: "Career Advising", desc: "Supporting members' career aspirations with tailored career advice, resume workshops, and recruitment strategy sessions to navigate career paths." },
  { icon: Calendar, title: "Events & Operations", desc: "Orchestrating and managing club events and member engagement initiatives, ensuring each event enriches professional and academic experiences." },
  { icon: TrendingUp, title: "Industry Exposure", desc: "Connecting PE firms and MIT students, creating a more professionally prepared and passionate educational community." },
];

const upcomingEvents = [
  {
    image: eventPanel,
    title: "Speaker Series: Private Equity Insights",
    speaker: "Industry Professionals & Experts",
    date: "Upcoming",
    time: "TBA",
    desc: "Industry professionals share insights, experiences, and expertise in private equity through engaging talks and presentations.",
  },
  {
    image: eventNetworking,
    title: "New York City Trek",
    speaker: "Macquarie · Vista Equity Partners",
    date: "2025–2026 Academic Year",
    time: "TBA",
    desc: "Study tour to one of the primary private equity hubs worldwide, visiting top-tier PE firms.",
  },
  {
    image: eventWorkshop,
    title: "Boston Trek",
    speaker: "Apollo · EQT · Carlyle · Insight Partners",
    date: "2025–2026 Academic Year",
    time: "TBA",
    desc: "Visit 10+ firms including Apollo, EQT, Carlyle, and Insight Partners in the Boston area.",
  },
];

const speakers = [
  { image: speaker1, name: "Guest Speaker", firm: "Apollo Global Management", topic: "Private Equity Value Creation" },
  { image: speaker2, name: "Guest Speaker", firm: "EQT Partners", topic: "Growth Equity & Technology" },
  { image: speaker3, name: "Guest Speaker", firm: "The Carlyle Group", topic: "Global PE Strategy" },
  { image: speaker4, name: "Guest Speaker", firm: "Insight Partners", topic: "Software & Tech Investing" },
];

const communityProfiles = [
  { icon: TrendingUp, title: "Aspiring PE Professionals", desc: "Students pursuing careers in private equity and private markets." },
  { icon: Users, title: "Future VC Investors", desc: "Members exploring venture capital and early-stage investing." },
  { icon: Briefcase, title: "Operators & Consultants", desc: "Professionals transitioning into investing roles from operations and consulting." },
  { icon: GraduationCap, title: "Finance Professionals", desc: "Expanding expertise into private markets and alternative investments." },
];

const partners = [
  "Macquarie", "Vista Equity Partners", "Apollo Global Management", "EQT",
  "The Carlyle Group", "Insight Partners", "MIT Sloan", "MIT",
];

const recruiterServices = [
  { icon: BookOpen, title: "Resume Books", desc: "Access to resumes of all VCPE club members for recruiting purposes." },
  { icon: Globe, title: "Treks & Visits", desc: "Host a group of students at your firm in Boston, NYC, or London." },
  { icon: Briefcase, title: "Winternships", desc: "Facilitate January winternships or short-term projects during the semester." },
  { icon: Users, title: "Campus Sessions", desc: "On-campus presentations, fireside chats, and networking sessions." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="MIT VCPE Club Conference" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-narrow">
          <div className="max-w-2xl">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-4">MIT Sloan School of Management</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              MIT Sloan<br />VCPE Club
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-4 max-w-lg">
              Leading hub for MIT students passionate about delving into the dynamic industries of venture capital and private equity.
            </p>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-10 max-w-lg">
              As a cornerstone of finance at MIT, the club offers unparalleled resources and opportunities for members to engage with industry leaders, gain practical experience, and build a powerful professional network in the VCPE sector.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://sloangroups.mit.edu/venturecapitalandprivateequity/club_signup" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">Join Us!</Button>
              </a>
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
          <div className="max-w-3xl mb-16">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">About the Club</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Connect with future leaders from MIT committed to making their mark in private markets
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The MIT VCPE Club is a leading initiative focused on venture capital and private equity industries, comprising bright and passionate individuals. This space fosters connections between PE firms and MIT students, creating a more professionally prepared and passionate educational community.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Within this dynamic community, members gain unparalleled opportunities to immerse themselves in the intricacies of private market investing. Through workshops, networking events, and hands-on projects, students acquire invaluable skills and insights essential for success in this competitive field.
            </p>
          </div>

          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-6">Our Verticals</p>
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
          <p className="text-center text-primary-foreground/60 text-sm uppercase tracking-widest mb-12">
            One of the largest student clubs at MIT Sloan
          </p>
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

      {/* Upcoming Events — Treks & Speakers */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Treks & Speaker Series</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Industry Panels, On-Campus Events & Treks</h2>
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
                  <Link to="/events">
                    <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                  </Link>
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
              Our members come from diverse backgrounds — students not only expand their knowledge but also forge lasting relationships that propel them toward fulfilling careers in the VCPE sector.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Industry leaders we bring to MIT</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our Speakers series features industry professionals and experts who share insights, experiences, and expertise in private equity through engaging talks and presentations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {speakers.map((s) => (
              <div key={s.firm} className="text-center group">
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

      {/* For Recruiters */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mb-12">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">For Recruiters</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Connect with our members
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We look forward to connecting you with our members by sharing our official resume book, featuring career opportunities in our network, and organising on-campus events. Reach out at{" "}
              <a href="mailto:vcpe.officers@sloangroups.mit.edu" className="text-sloan-red hover:underline font-medium">
                vcpe.officers@sloangroups.mit.edu
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruiterServices.map((s) => (
              <div key={s.title} className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-sloan-red/20 transition-all duration-300">
                <s.icon className="text-sloan-red mb-4" size={28} />
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-surface">
        <div className="container-narrow text-center">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Our Ecosystem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Firms We've Visited</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Our Treks area focuses on organizing study tours to the primary private equity hubs worldwide, offering members exclusive opportunity to visit top-tier PE firms.
          </p>
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
            Open to MIT Sloan students interested in venture capital, private equity, and startups. Be part of the leading finance community at MIT.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://sloangroups.mit.edu/venturecapitalandprivateequity/club_signup" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">Join Us!</Button>
            </a>
            <a href="mailto:vcpe.officers@sloangroups.mit.edu">
              <Button variant="hero-outline" size="lg">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
