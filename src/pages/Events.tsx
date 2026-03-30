import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventPanel from "@/assets/event-panel.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";

const allEvents = [
  { image: eventNetworking, title: "New York City Trek", speaker: "Macquarie · Vista Equity Partners", date: "2025–2026 Academic Year", time: "TBA", desc: "Study tour to top-tier PE firms in NYC, one of the primary private equity hubs worldwide.", category: "Treks" },
  { image: eventWorkshop, title: "Boston Trek", speaker: "Apollo · EQT · Carlyle · Insight Partners", date: "2025–2026 Academic Year", time: "TBA", desc: "We were privileged to visit 10+ firms including Apollo, EQT, Carlyle, and Insight Partners.", category: "Treks" },
  { image: eventPanel, title: "Speaker Series: PE Industry Insights", speaker: "Industry Professionals & Experts", date: "Ongoing", time: "Various", desc: "Industry professionals share insights, experiences, and expertise in private equity through engaging talks and presentations.", category: "Speakers" },
  { image: eventWorkshop, title: "Resume Workshop", speaker: "VCPE Career Advising Team", date: "Upcoming", time: "TBA", desc: "Tailored career advice and resume workshops to help members navigate their career paths and meet industry standards.", category: "Career" },
  { image: eventNetworking, title: "Networking Night", speaker: "PE Firms & MIT Alumni", date: "Upcoming", time: "TBA", desc: "Connect with PE professionals and MIT alumni in an intimate networking setting.", category: "Networking" },
  { image: eventPanel, title: "Recruitment Strategy Session", speaker: "VCPE Career Advising Team", date: "Upcoming", time: "TBA", desc: "Recruitment strategy sessions to help peers navigate their career paths into PE and VC roles.", category: "Career" },
];

const categories = ["All", "Treks", "Speakers", "Career", "Networking"];

const trekFirms = {
  nyc: ["Macquarie", "Vista Equity Partners"],
  boston: ["Apollo", "EQT", "The Carlyle Group", "Insight Partners"],
};

const Events = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allEvents : allEvents.filter(e => e.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Events</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Treks, Speakers & Events</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Through a diverse range of events, we connect students with industry leaders and expose them to invaluable insights and opportunities within the field. From organizing study treks to hosting speaker events featuring top professionals.
          </p>
        </div>
      </section>

      {/* Treks Highlight */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Treks for 2025–2026</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Study Tours to PE Hubs Worldwide</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Our Treks area focuses on organizing study tours to the primary private equity hubs worldwide, offering members the exclusive opportunity to visit top-tier PE firms.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 text-sloan-red mb-4">
                <MapPin size={18} />
                <span className="font-display font-semibold">New York City</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {trekFirms.nyc.map((firm) => (
                  <span key={firm} className="px-3 py-1.5 bg-surface text-muted-foreground text-sm rounded-full border border-border">{firm}</span>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 text-sloan-red mb-4">
                <MapPin size={18} />
                <span className="font-display font-semibold">Boston</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">We were privileged to visit 10+ firms including:</p>
              <div className="flex flex-wrap gap-3">
                {trekFirms.boston.map((firm) => (
                  <span key={firm} className="px-3 py-1.5 bg-surface text-muted-foreground text-sm rounded-full border border-border">{firm}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Events */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">All Events</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event, i) => (
              <div key={i} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={720} />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-surface text-muted-foreground text-xs rounded-full mb-3">{event.category}</span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar size={12} />
                    <span>{event.date} · {event.time}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{event.title}</h3>
                  <p className="text-sloan-red text-sm font-medium mb-2">{event.speaker}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>
                  <Button variant="outline" size="sm" className="w-full">Learn More <ChevronRight size={14} /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Series */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Speaker Series</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Industry professionals sharing their expertise
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Our Speakers series features industry professionals and experts who share insights, experiences, and expertise in private equity through engaging talks and presentations.
          </p>
          <a href="mailto:vcpe.officers@sloangroups.mit.edu">
            <Button variant="hero" size="lg">Contact Us to Propose a Speaker</Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
