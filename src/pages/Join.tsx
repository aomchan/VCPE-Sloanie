import { Link } from "react-router-dom";
import { Mail, ArrowRight, Briefcase, FileText, MapPin, Users, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recruiterServices = [
  { icon: FileText, title: "Job Opportunities", desc: "We disseminate VCPE-related job and internship opportunities to hundreds of students through our weekly newsletter." },
  { icon: Briefcase, title: "Resume Books", desc: "We offer access to the resumes of all our VCPE club members for recruiting purposes." },
  { icon: MapPin, title: "Treks", desc: "Our club organizes diverse treks for students to visit VC and PE firms. Popular destinations include Boston, New York City, and London." },
  { icon: Users, title: "Winternships / Short Projects", desc: "We facilitate 'winternships' in January or short-term projects during the semester." },
  { icon: Mic, title: "Host a Session on Campus", desc: "We assist with on-campus or nearby events, including formal presentations, small group fireside chats, and informal networking sessions." },
];

const Join = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Get Involved</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Join VCPE</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl">
            Open to MIT Sloan students interested in venture capital, private equity, and startups. Be part of the leading finance community at MIT.
          </p>
        </div>
      </section>

      {/* Join + Mailing List */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Membership */}
            <div className="p-8 rounded-lg border border-border bg-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Join the Club</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a cornerstone of finance at MIT, the club offers unparalleled resources and opportunities for members to engage with industry leaders, gain practical experience, and build a powerful professional network in the VCPE sector.
              </p>
              <ul className="space-y-2 text-sm text-foreground mb-8">
                <li>✓ Access to treks visiting top PE firms</li>
                <li>✓ Speaker series with industry experts</li>
                <li>✓ Career advising and resume workshops</li>
                <li>✓ Networking events and investor dinners</li>
                <li>✓ Weekly newsletter with job opportunities</li>
              </ul>
              <a href="https://sloangroups.mit.edu/venturecapitalandprivateequity/club_signup" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="w-full">
                  Join Us! <ArrowRight size={16} />
                </Button>
              </a>
            </div>

            {/* Contact / Mailing List */}
            <div className="p-8 rounded-lg border border-border bg-surface">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Stay Connected</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stay updated on upcoming events, speaker announcements, and career opportunities in VC and PE. We disseminate VCPE-related job and internship opportunities to hundreds of students through our weekly newsletter.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <input type="email" placeholder="your@mit.edu" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Program</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm">
                    <option>MBA</option>
                    <option>MFin</option>
                    <option>EMBA</option>
                    <option>PhD</option>
                    <option>Other</option>
                  </select>
                </div>
                <Button variant="default" size="lg" className="w-full">
                  <Mail size={16} /> Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* For Recruiters */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="max-w-3xl mb-12">
            <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">For Recruiters</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Multiple ways to engage with our club</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To explore opportunities for professional collaboration and campus recruiting, please reach out to us at{" "}
              <a href="mailto:vcpe.officers@sloangroups.mit.edu" className="text-sloan-red hover:underline font-medium">
                vcpe.officers@sloangroups.mit.edu
              </a>{" "}
              — we are eager to facilitate connections between you, our members, and the broader MIT community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Contact */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Questions? Get in touch
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Reach out to us at{" "}
            <a href="mailto:vcpe.officers@sloangroups.mit.edu" className="text-sloan-red hover:underline font-medium">
              vcpe.officers@sloangroups.mit.edu
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
