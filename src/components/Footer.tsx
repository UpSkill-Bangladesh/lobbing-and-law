import { Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Departments", id: "departments" },
    { name: "Clients", id: "clients" },
    { name: "Contact", id: "contact" },
    { name: "Privacy Policy", id: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "#") return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-hero-overlay border-t border-gold/20">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-gold" />
              <div>
                <h3 className="text-xl font-serif text-primary-foreground font-bold leading-tight">
                  Lobbying and the Law Company Limited
                </h3>
                <p className="text-sm text-gold">
                  Bangladesh's First Lobbying & Law Firm
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Pioneering strategic advocacy and comprehensive legal solutions with
              integrity, innovation, and excellence across Bangladesh.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gold hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              More
            </h4>
            <ul className="space-y-2">
              {quickLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Lobbying and the Law Company Limited. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Designed with excellence for legal innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
