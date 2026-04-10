import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import eventPanel from "@/assets/event-panel.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

// ── DATA ──────────────────────────────────────────────────────────────────────

const metrics = [
  { value: "270+", label: "Members" },
  { value: "10+",  label: "Firm Visits / Trek" },
  { value: "3",    label: "Verticals" },
  { value: "#1",   label: "Largest Club at MIT Sloan" },
];

const pillars = [
  {
    num: "01",
    label: "External Events",
    heading: "Industry at your door",
    desc: "We bring the VC and PE world directly to MIT — firm treks to NYC and Boston, speaker series with top partners, and industry panels with leading professionals. Members get rare access before graduation.",
    detail: [
      "Firm Treks to NYC & Boston",
      "Speaker Series with Partners",
      "Industry Panels & Fireside Chats",
      "Alumni Network Access",
    ],
    image: eventPanel,
  },
  {
    num: "02",
    label: "Career Development",
    heading: "Navigate the path in",
    desc: "Targeted career advising, resume workshops, and direct recruiting pipelines. Whether you're lateral-hiring or entering private markets for the first time, VCPE gives you the preparation and the relationships.",
    detail: [
      "Resume Book & Recruiting Pipeline",
      "1:1 Career Advising Sessions",
      "Winternships & Short-Term Projects",
      "Recruitment Strategy Workshops",
    ],
    image: eventWorkshop,
  },
  {
    num: "03",
    label: "Internal Community",
    heading: "The MIT ecosystem, connected",
    desc: "Cross-community events spanning MBA, undergrad, and PhD programs. We operate as a bridge — connecting aspiring investors, operators, and founders across the entire MIT ecosystem and beyond.",
    detail: [
      "MBA + Undergrad + PhD Cross-Events",
      "Founder–Investor Meetups",
      "Mentorship Circles",
      "Member Socials & Alumni Events",
    ],
    image: eventNetworking,
  },
];

const events = [
  {
    num: "01",
    image: eventPanel,
    title: "Speaker Series: Private Equity Insights",
    firms: "Industry Professionals & Experts",
    date: "Ongoing",
    desc: "Industry professionals share insights, experiences, and expertise in private equity through engaging talks.",
    speakers: [speaker1, speaker2],
  },
  {
    num: "02",
    image: eventNetworking,
    title: "New York City Trek",
    firms: "Macquarie · Vista Equity Partners",
    date: "2025–2026 Academic Year",
    desc: "Study tour to one of the primary private equity hubs worldwide, visiting top-tier PE firms.",
    speakers: [speaker3],
  },
  {
    num: "03",
    image: eventWorkshop,
    title: "Boston Trek",
    firms: "Apollo · EQT · Carlyle · Insight Partners",
    date: "2025–2026 Academic Year",
    desc: "Visit 10+ firms including Apollo, EQT, Carlyle, and Insight Partners in the Boston area.",
    speakers: [speaker4],
  },
];

const firmNames = [
  "Macquarie",
  "Vista Equity Partners",
  "Apollo Global Management",
  "EQT Partners",
  "The Carlyle Group",
  "Insight Partners",
  "Bain Capital",
  "KKR",
  "Blackstone",
  "Warburg Pincus",
];

const recruiterItems = [
  {
    num: "01",
    title: "Resume Books",
    desc: "Curated PDF and digital resume books featuring all active VCPE members, updated each semester. Profiles include background, target role, and availability.",
  },
  {
    num: "02",
    title: "Treks & Firm Visits",
    desc: "Host a selective group of MIT students at your offices during our NYC or Boston treks. We coordinate logistics, select participants, and prep the cohort.",
  },
  {
    num: "03",
    title: "Winternships",
    desc: "Facilitate January-term or semester short-term project engagements — ideal for firms looking to test talent or get focused analytical work done with top candidates.",
  },
  {
    num: "04",
    title: "Campus Sessions",
    desc: "On-campus fireside chats, recruiting presentations, and networking dinners. We handle promotion, student selection, and all event logistics.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

const Index = () => {
  const [heroReady, setHeroReady] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const [pillarAnim, setPillarAnim] = useState(true);
  const [openRecruiter, setOpenRecruiter] = useState<number | null>(0);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handlePillarChange = (idx: number) => {
    if (idx === activePillar) return;
    setPillarAnim(false);
    setTimeout(() => {
      setActivePillar(idx);
      setPillarAnim(true);
    }, 80);
  };

  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-gradient-bg hero-noise relative min-h-screen flex flex-col">
        <Navbar />

        {/* Main headline content */}
        <div className="flex-1 flex items-center container-narrow pt-24 pb-40 md:pb-52 relative z-10">
          <div className="w-full">

            {/* Eyebrow */}
            <div className="hero-line-clip mb-6">
              <span
                className={`block text-primary-foreground/40 text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-light opacity-0
                  ${heroReady ? "animate-hero-line-in anim-delay-100" : ""}`}
              >
                MIT Sloan School of Management
              </span>
            </div>

            {/* Line 1 */}
            <div className="hero-line-clip">
              <h1
                className={`font-display font-light text-primary-foreground leading-[0.92] tracking-tight lowercase opacity-0
                  ${heroReady ? "animate-hero-line-in anim-delay-200" : ""}`}
                style={{ fontSize: "clamp(3rem, 8.5vw, 8rem)" }}
              >
                venture capital
              </h1>
            </div>

            {/* Decorative dash row */}
            <div className="flex items-center gap-3 my-3 md:my-4 origin-left">
              <div
                className={`h-px bg-sloan-red origin-left opacity-0
                  ${heroReady ? "animate-dash-grow anim-delay-400" : ""}`}
                style={{ width: "3rem" }}
              />
              <div
                className={`h-px bg-primary-foreground/15 origin-left opacity-0
                  ${heroReady ? "animate-dash-grow anim-delay-500" : ""}`}
                style={{ width: "1rem" }}
              />
            </div>

            {/* Line 2 — indented */}
            <div className="hero-line-clip">
              <h1
                className={`font-display font-light text-primary-foreground leading-[0.92] tracking-tight lowercase opacity-0
                  ${heroReady ? "animate-hero-line-in anim-delay-500" : ""}`}
                style={{ fontSize: "clamp(3rem, 8.5vw, 8rem)", paddingLeft: "clamp(2rem, 8vw, 10rem)" }}
              >
                & private equity
              </h1>
            </div>

            {/* Line 3 — smaller, red */}
            <div className="hero-line-clip mt-3 md:mt-4">
              <h2
                className={`font-display font-light text-sloan-red leading-tight tracking-tight lowercase opacity-0
                  ${heroReady ? "animate-hero-line-in anim-delay-700" : ""}`}
                style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
              >
                at mit sloan.
              </h2>
            </div>

          </div>
        </div>

        {/* Bottom-right: description + CTA */}
        <div className="absolute bottom-10 right-6 md:right-10 max-w-[280px] text-right z-10">
          <p
            className={`text-primary-foreground/50 text-sm leading-relaxed mb-5 font-sans font-light opacity-0
              ${heroReady ? "animate-hero-fade-up anim-delay-900" : ""}`}
          >
            The central hub for VC, PE, and entrepreneurship across the MIT ecosystem — MBA, undergrad, and PhD.
          </p>
          <a
            href="https://sloangroups.mit.edu/venturecapitalandprivateequity/club_signup"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-primary-foreground text-sm font-medium group opacity-0
              ${heroReady ? "animate-hero-fade-up anim-delay-1000" : ""}`}
          >
            <span className="border-b border-primary-foreground/30 group-hover:border-sloan-red group-hover:text-sloan-red transition-colors pb-px">
              Join the club
            </span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Left edge: vertical scroll indicator */}
        <div
          className={`hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10 opacity-0
            ${heroReady ? "animate-hero-fade-up anim-delay-1100" : ""}`}
        >
          <div className="h-14 w-px bg-primary-foreground/15" />
          <span
            className="text-primary-foreground/25 text-[10px] uppercase tracking-[0.25em] font-sans"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            scroll
          </span>
          <div className="h-4 w-px bg-primary-foreground/10" />
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ── 2. METRICS STRIP ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display font-light text-5xl md:text-6xl text-foreground tabular-nums leading-none mb-3">
                  {m.value}
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-px w-4 bg-sloan-red flex-shrink-0" />
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-sans">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THREE PILLARS ────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 md:py-32">
        <div className="container-narrow">

          {/* Section header */}
          <div className="flex items-baseline justify-between mb-16 md:mb-20">
            <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.3em] font-sans">
              What we do
            </p>
            <span className="text-primary-foreground/20 text-xs tabular-nums font-sans">(03)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">

            {/* Left: numbered nav */}
            <nav className="flex flex-row lg:flex-col gap-0 border-t border-primary-foreground/10">
              {pillars.map((p, i) => (
                <button
                  key={p.num}
                  onClick={() => handlePillarChange(i)}
                  className={`group flex items-center gap-4 py-5 border-b border-primary-foreground/10 w-full text-left transition-all duration-200
                    ${activePillar === i
                      ? "text-primary-foreground"
                      : "text-primary-foreground/30 hover:text-primary-foreground/60"
                    }`}
                >
                  <span className={`font-sans text-xs tabular-nums transition-colors flex-shrink-0
                    ${activePillar === i ? "text-sloan-red" : "text-primary-foreground/20"}`}>
                    {p.num}
                  </span>
                  <span className="font-display font-light text-base leading-none">
                    {p.label}
                  </span>
                  {activePillar === i && (
                    <div className="ml-auto hidden lg:block h-px w-5 bg-sloan-red flex-shrink-0" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right: pillar content — key forces remount to restart animation */}
            <div
              key={activePillar}
              className={`${pillarAnim ? "animate-pillar-fade" : "opacity-0"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10 items-start">

                {/* Text */}
                <div>
                  <h2
                    className="font-display font-light text-primary-foreground leading-[1.1] mb-8"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {pillars[activePillar].heading}
                  </h2>
                  <p className="text-primary-foreground/55 text-base md:text-lg leading-relaxed font-sans font-light mb-10 max-w-lg">
                    {pillars[activePillar].desc}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {pillars[activePillar].detail.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-primary-foreground/40 text-sm font-sans">
                        <div className="w-1 h-1 rounded-full bg-sloan-red flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 text-primary-foreground/40 text-sm hover:text-primary-foreground transition-colors group"
                  >
                    <span className="border-b border-transparent group-hover:border-primary-foreground/30 pb-px">
                      Explore events
                    </span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Image panel */}
                <div className="hidden md:block relative rounded-sm overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={pillars[activePillar].image}
                    alt={pillars[activePillar].label}
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. EVENTS — HORIZONTAL SCROLL ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-foreground overflow-hidden">

        {/* Section header */}
        <div className="container-narrow mb-10">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-background/40 text-xs uppercase tracking-[0.3em] font-sans mb-3">
                Treks & Speaker Series
              </p>
              <h2
                className="font-display font-light text-background"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                Industry Panels, Treks & Events
              </h2>
            </div>
            <span className="text-background/20 text-xs tabular-nums font-sans hidden md:block">
              (0{events.length})
            </span>
          </div>
        </div>

        {/* Scrollable card track */}
        <div
          className="overflow-x-auto events-scroll"
          style={{ paddingLeft: "max(1.5rem, calc(50vw - 36rem))" }}
        >
          <div className="flex gap-4 pb-4 pr-6">

            {events.map((event) => (
              <div
                key={event.num}
                className="min-w-[300px] md:min-w-[360px] border border-background/10 rounded-sm overflow-hidden flex-shrink-0 group"
              >
                {/* Photo */}
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-background/25 text-xs tabular-nums font-sans">{event.num}</span>
                    <span className="text-background/25 text-xs font-sans">{event.date}</span>
                  </div>
                  <h3 className="font-display font-light text-background text-lg leading-snug mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sloan-red text-xs font-sans mb-4">{event.firms}</p>
                  <p className="text-background/40 text-sm leading-relaxed font-sans mb-6">{event.desc}</p>

                  {/* Speaker thumbnails */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {event.speakers.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt="Speaker"
                          className="w-7 h-7 rounded-full object-cover border-2 border-foreground"
                          loading="lazy"
                        />
                      ))}
                    </div>
                    <span className="text-background/25 text-xs font-sans">Featured speakers</span>
                  </div>
                </div>
              </div>
            ))}

            {/* View all ghost card */}
            <Link
              to="/events"
              className="min-w-[160px] border border-background/10 border-dashed rounded-sm flex items-center justify-center flex-shrink-0 group"
            >
              <div className="text-center p-8">
                <ArrowRight
                  size={18}
                  className="text-background/20 mx-auto mb-3 group-hover:text-sloan-red group-hover:translate-x-1 transition-all"
                />
                <span className="text-background/25 text-xs font-sans uppercase tracking-wider group-hover:text-background/50 transition-colors">
                  View all
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── 5. FIRMS MARQUEE ────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-y border-border overflow-hidden">
        <div className="container-narrow mb-8 flex items-baseline justify-between">
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-sans">
            Firms We've Visited
          </p>
          <Link to="/events" className="text-xs text-sloan-red hover:underline font-sans">
            View treks →
          </Link>
        </div>

        {/* Row 1 — left */}
        <div className="overflow-hidden mb-3">
          <div className="animate-marquee-left marquee-track">
            {[...firmNames, ...firmNames].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-6 text-foreground/30 font-display font-light text-sm uppercase tracking-widest whitespace-nowrap"
              >
                {name}
                <span className="w-1 h-1 rounded-full bg-sloan-red/40 inline-block flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — right, offset */}
        <div className="overflow-hidden">
          <div
            className="animate-marquee-right marquee-track"
            style={{ transform: "translateX(-30%)" }}
          >
            {[...firmNames, ...firmNames].reverse().map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-6 text-foreground/15 font-display font-light text-sm uppercase tracking-widest whitespace-nowrap"
              >
                {name}
                <span className="w-1 h-1 rounded-full bg-border inline-block flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FOR RECRUITERS ───────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">

            {/* Left: expandable numbered list */}
            <div>
              <div className="mb-12">
                <p className="text-sloan-red text-xs uppercase tracking-[0.3em] font-sans mb-3">For Recruiters</p>
                <h2
                  className="font-display font-light text-foreground leading-tight"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                >
                  Engage with MIT's<br />VCPE talent
                </h2>
              </div>

              <div>
                {recruiterItems.map((item, i) => (
                  <div key={item.num} className="border-t border-border last:border-b">
                    <button
                      className="w-full flex items-center gap-6 py-6 text-left group"
                      onClick={() => setOpenRecruiter(openRecruiter === i ? null : i)}
                    >
                      <span className={`font-sans text-xs tabular-nums flex-shrink-0 transition-colors
                        ${openRecruiter === i ? "text-sloan-red" : "text-muted-foreground/30"}`}>
                        {item.num}
                      </span>
                      <span className={`font-display font-light text-xl flex-1 transition-colors
                        ${openRecruiter === i ? "text-foreground" : "text-foreground/60"}`}>
                        {item.title}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`text-muted-foreground flex-shrink-0 transition-transform duration-200
                          ${openRecruiter === i ? "rotate-180 text-sloan-red" : ""}`}
                      />
                    </button>

                    {openRecruiter === i && (
                      <div className="pb-6 pl-10 animate-hero-fade-up">
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sticky contact panel */}
            <div className="lg:sticky lg:top-28">
              <div className="p-8 border border-border rounded-sm bg-surface">
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-sans mb-4">Get in touch</p>
                <p className="font-display font-light text-foreground text-lg leading-snug mb-6">
                  Reach our recruiting team directly to arrange any engagement.
                </p>
                <a
                  href="mailto:vcpe.officers@sloangroups.mit.edu"
                  className="block text-sloan-red text-sm font-sans hover:underline mb-6 break-all"
                >
                  vcpe.officers@sloangroups.mit.edu
                </a>
                <a href="mailto:vcpe.officers@sloangroups.mit.edu">
                  <Button variant="default" size="sm" className="w-full">
                    Send email
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. JOIN CTA ─────────────────────────────────────────────────────── */}
      <section
        className="py-28 md:py-36 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 15% 50%, hsl(220 55% 12% / 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 85% 30%, hsl(0 65% 55% / 0.05) 0%, transparent 55%),
            hsl(var(--surface))
          `,
        }}
      >
        <div className="container-narrow text-center relative z-10">
          <p className="text-sloan-red text-xs uppercase tracking-[0.3em] font-sans mb-6">
            Open Membership
          </p>
          <h2
            className="font-display font-light text-foreground leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            Join the VCPE community at MIT
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-10 font-sans font-light leading-relaxed">
            Open to the entire MIT ecosystem — MBA, undergrad, and PhD — who are passionate about venture capital, private equity, and startups.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://sloangroups.mit.edu/venturecapitalandprivateequity/club_signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Join the club
                <ArrowRight size={14} />
              </Button>
            </a>
            <a href="mailto:vcpe.officers@sloangroups.mit.edu">
              <Button variant="outline" size="lg">
                Contact us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
