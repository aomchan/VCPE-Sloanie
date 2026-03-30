import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

const currentTeam = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/1742bd45-387e-4b2a-94ae-09aeca429570/sofia+2.jpg",
    name: "Sofia Cuadros Caceres",
    role: "Co-President",
    linkedin: "https://www.linkedin.com/in/sofiacuadros/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/882f3f85-761d-424a-abef-2ba52dfbd1c6/syliva+2.jpg",
    name: "Sylvia Feng",
    role: "Co-President",
    linkedin: "https://www.linkedin.com/in/sylvia-feng/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/681e7723-e07c-497d-b19e-852792fae0b1/valentina.jpg",
    name: "Valentina Osorio",
    role: "SVP Career Development",
    linkedin: "https://www.linkedin.com/in/valentina-osorio-655694111/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/e220862f-a694-4350-9d96-b84665af4565/jane.jpg",
    name: "Jane Booth",
    role: "SVP Career Development",
    linkedin: "https://www.linkedin.com/in/janelouisebooth/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/62f655e1-64d7-4469-a4c0-661f71b09213/marco.jpg",
    name: "Marco Troina",
    role: "SVP Treks",
    linkedin: "https://www.linkedin.com/in/marco-troina/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/b8159a12-24eb-4224-92d1-890751f09756/isabel.jpg",
    name: "Isabel Ortega Laya",
    role: "SVP Treks",
    linkedin: "https://www.linkedin.com/in/isabel-ortega-laya/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/d60b8d6c-6ab5-427d-9b6c-27bc75aded7a/chris.jpg",
    name: "Chris Shao",
    role: "SVP Speakers",
    linkedin: "https://www.linkedin.com/in/chris-ye-shao-062b57bb/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/87bd1a14-f4a2-4989-aceb-7908ebc21dbf/federico.jpg",
    name: "Federico Eguiguren",
    role: "SVP Speakers",
    linkedin: "https://www.linkedin.com/in/federico-eguiguren-claro-05a117180/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/51dbf8d5-d003-4ffa-8106-d0a97e10e8ec/denton.jpg",
    name: "Denton Philtjens",
    role: "SVP Operations",
    linkedin: "https://www.linkedin.com/in/denton-philtjens/",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/65f75c10cfc62c1d4a888600/8f1a98fd-d405-43a1-9d64-f3bbf22b959c/viarj.jpg",
    name: "Viraj Mehta",
    role: "SVP Operations",
    linkedin: "https://www.linkedin.com/in/virajm1/",
  },
];

const formerTeams = [
  {
    year: "2024–2025",
    members: [
      { section: "Co-Presidents", names: ["Juan Ignacio Martinez", "Camila Schuch"] },
      { section: "Career Advising", names: ["Jose Ramon Garza (Co-Head)", "Margherita Ricotti (Co-Head)", "Diego Montes de Oca (Co-Head)", "Claire Jeong (Co-Head)", "Valentina Osorio (VP)", "Jane Booth (VP)", "Sylvia Feng (VP)"] },
      { section: "Events", names: ["Luisa Queiros (Co-Head)", "Irene Ferrari (Co-Head)", "Pat O'Reilly (Co-Head)", "Federico Eguiguren (VP)", "Sofia Cuadros (VP)", "Jean Bourseau (VP)", "Freya Chun (VP)"] },
      { section: "Operations", names: ["Raphael Bensoussan Fullenbach (Co-Head)", "Yair Trachtenberg (Co-Head)", "Denton Philtjens (VP)", "Viraj Mehta (VP)"] },
    ],
  },
  {
    year: "2023–2024",
    members: [
      { section: "Co-Presidents", names: ["Brendan Barron", "Daniel Dart"] },
      { section: "Curriculum", names: ["Illia Lotov (SVP)", "Jose Ramon Garza (VP)", "Pat O'Reilly (VP)"] },
      { section: "External Relations", names: ["Marko Bejatovic (SVP)", "Diego Montes de Oca (VP)", "Gad Zuaretz (VP)"] },
      { section: "Treks", names: ["Ross Phillips (SVP)", "Juan Ignacio Martinez (VP)", "Camila Schuch (VP)"] },
      { section: "Speakers", names: ["Andrew Holden (SVP)", "Yiling Zhou (VP)", "Victoria Yuan (VP)"] },
      { section: "Operations", names: ["Raphael Bensoussan Fullenbach (SVP)", "George Masterson (SVP)", "Yair Trachtenberg (VP)"] },
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow">
          <p className="text-sloan-red font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Team</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl">
            Meet the leadership team driving VCPE's mission forward.
          </p>
        </div>
      </section>

      {/* Current Leadership */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Current Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {currentTeam.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                <p className="text-sloan-red text-sm font-medium">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-sloan-red text-xs mt-2 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Former Leadership */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Former Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {formerTeams.map((team) => (
              <div key={team.year} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-5">
                  Academic Year {team.year}
                </h3>
                <div className="space-y-4">
                  {team.members.map((group) => (
                    <div key={group.section}>
                      <p className="text-sloan-red text-sm font-semibold mb-1">{group.section}</p>
                      <ul className="text-muted-foreground text-sm space-y-0.5">
                        {group.names.map((name) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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

export default Team;
