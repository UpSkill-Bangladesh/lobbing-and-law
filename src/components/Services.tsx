import { Card } from "@/components/ui/card";
import { Scale, Briefcase, Cpu } from "lucide-react";
import logo from "@/assets/logo.png";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Strategic Advocacy",
      description:
        "Comprehensive lobbying and policy influence services to shape legislative and regulatory outcomes in your favor.",
      features: [
        "Legislative lobbying",
        "Regulatory advocacy",
        "Policy research & analysis",
        "Government relations",
      ],
    },
    {
      icon: Briefcase,
      title: "Litigation & Legal Services",
      description:
        "Expert representation across all levels of judiciary, from district courts to the Supreme Court of Bangladesh.",
      features: [
        "Civil & criminal litigation",
        "Supreme Court appeals",
        "Corporate disputes",
        "Land recovery cases",
      ],
    },
    {
      icon: Cpu,
      title: "Legal-Tech & Judicial Innovation",
      description:
        "Pioneering the intersection of law and technology with cutting-edge solutions for modern legal challenges.",
      features: [
        "Legal technology consulting",
        "Digital compliance",
        "Contract automation",
        "Legal research platforms",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-hero-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
            Core Expertise & Services
          </h2>
          <div className="flex justify-center my-8">
            <img src={logo} alt="Lobbying and the Law Company Limited" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>
          <p className="text-xl text-primary-foreground/70">
            Three pillars of excellence driving our comprehensive legal solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-gold transition-all duration-300 group hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
