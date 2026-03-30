import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Join = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Get Involved</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Join VCPE</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl">
            Open to MIT Sloan students interested in venture capital, private equity, and startups.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Membership */}
            <div className="p-8 rounded-lg border border-border bg-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Apply for Membership</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full membership gives you access to all events, speaker series, career prep programs, exclusive networking dinners, and mentorship opportunities.
              </p>
              <ul className="space-y-2 text-sm text-foreground mb-8">
                <li>✓ Priority event registration</li>
                <li>✓ Exclusive career workshops</li>
                <li>✓ Investor dinner invitations</li>
                <li>✓ Mentorship matching</li>
                <li>✓ Fund visit access</li>
              </ul>
              <Button variant="hero" size="lg" className="w-full">
                Apply Now <ArrowRight size={16} />
              </Button>
            </div>

            {/* Mailing List */}
            <div className="p-8 rounded-lg border border-border bg-surface">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Join Our Mailing List</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stay updated on upcoming events, speaker announcements, and career opportunities in VC and PE. No commitment required.
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
                  <Mail size={16} /> Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              Questions? Reach out to us at{" "}
              <a href="mailto:vcpe-club@mit.edu" className="text-sloan-red hover:underline font-medium">
                vcpe-club@mit.edu
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
