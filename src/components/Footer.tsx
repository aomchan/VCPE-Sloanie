import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-xl mb-3">
              MIT Sloan <span className="text-sloan-red">VCPE</span> Club
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              The premier community for MIT Sloan students exploring venture capital, private equity, and the innovation economy.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Events</Link></li>
              <li><Link to="/community" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Community</Link></li>
              <li><Link to="/team" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Team</Link></li>
              <li><Link to="/join" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Join</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:vcpe-club@mit.edu" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
                  <Mail size={14} /> vcpe-club@mit.edu
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} MIT Sloan Venture Capital & Private Equity Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
