import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventPanel from "@/assets/event-panel.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";

const allEvents = [
  { image: eventPanel, title: "VC Masterclass: Early-Stage Investing", speaker: "Sarah Chen, Partner at Benchmark", date: "April 15, 2026", time: "6:00 PM EST", desc: "Learn the fundamentals of early-stage venture investing.", category: "VC" },
  { image: eventNetworking, title: "PE Industry Night", speaker: "Multiple Speakers", date: "April 22, 2026", time: "7:00 PM EST", desc: "Network with PE professionals from leading firms.", category: "Networking" },
  { image: eventWorkshop, title: "LBO Modeling Workshop", speaker: "James Rivera, VP at KKR", date: "May 3, 2026", time: "5:30 PM EST", desc: "Hands-on LBO model building workshop.", category: "PE" },
  { image: eventPanel, title: "Fireside Chat: The Future of Growth Equity", speaker: "Lisa Park, General Atlantic", date: "May 10, 2026", time: "6:00 PM EST", desc: "Exploring the growth equity landscape with a seasoned investor.", category: "VC" },
  { image: eventNetworking, title: "VC Recruiting Prep Session", speaker: "VCPE Career Team", date: "May 15, 2026", time: "5:00 PM EST", desc: "Mock interviews and resume reviews for VC recruiting.", category: "Career" },
  { image: eventWorkshop, title: "Due Diligence Workshop", speaker: "Mark Thompson, Bain Capital", date: "May 22, 2026", time: "5:30 PM EST", desc: "Learn how leading PE firms conduct due diligence.", category: "Workshops" },
];

const categories = ["All", "VC", "PE", "Career", "Workshops", "Networking"];

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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Upcoming Events</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl">
            From speaker series to workshops and networking nights, discover what's happening at VCPE.
          </p>
        </div>
      </section>

      {/* Filters + Events */}
      <section className="section-padding">
        <div className="container-narrow">
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
                  <Button variant="outline" size="sm" className="w-full">Register <ChevronRight size={14} /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
