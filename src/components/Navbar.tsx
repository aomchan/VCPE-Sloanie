import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "Team", href: "/team" },
  { label: "For Recruiters", href: "/join" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "font-display font-bold text-lg md:text-xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-primary-foreground"
          )}>
            MIT Sloan <span className="text-sloan-red">VCPE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-sloan-red",
                location.pathname === link.href
                  ? "text-sloan-red"
                  : scrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/join">
            <Button variant="nav" size="sm">Join VCPE</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container-narrow py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm font-medium py-2 transition-colors hover:text-sloan-red",
                  location.pathname === link.href ? "text-sloan-red" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/join" onClick={() => setMobileOpen(false)}>
              <Button variant="nav" size="sm" className="w-full">Join VCPE</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
