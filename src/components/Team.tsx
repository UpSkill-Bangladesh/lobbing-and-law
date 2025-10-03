import { Card } from "@/components/ui/card";
import { Scale, Users, Briefcase } from "lucide-react";
import chairmanImage from "@/assets/chairman.png";

const Team = () => {
  const leadership = [
    {
      name: "Rabiul Islam Tarafder",
      alias: "Brit Robin",
      position: "Chairman & Founding Partner",
      description:
        "Visionary leader and pioneering legal strategist with decades of experience in litigation and advocacy.",
      initials: "RT",
    },
  ];

  const teamCategories = [
    {
      icon: Scale,
      title: "Senior Advocates",
      description: "Experienced legal practitioners with Supreme Court expertise",
      count: "15+",
    },
    {
      icon: Briefcase,
      title: "Legal Directors",
      description: "Strategic leaders managing specialized departments",
      count: "8",
    },
    {
      icon: Users,
      title: "Advisory Board",
      description: "Distinguished experts providing strategic guidance",
      count: "10+",
    },
  ];

  return (
    <section id="team" className="section-padding bg-hero-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
            Leadership & Expertise
          </h2>
          <p className="text-xl text-primary-foreground/70">
            Meet the exceptional minds driving legal excellence
          </p>
        </div>

        {/* Chairman Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card border-2 border-gold/20">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                <img 
                  src={chairmanImage} 
                  alt={leader.name}
                  className="w-32 h-32 border-4 border-gold rounded-full object-cover"
                />

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gold text-lg mb-2">({leader.alias})</p>
                  <p className="text-xl text-muted-foreground font-semibold mb-4">
                    {leader.position}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Team Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-card border-gold/20 hover:border-gold transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-10 h-10 text-gold" />
                </div>
              </div>

              <div className="text-4xl font-bold text-gold mb-2">
                {category.count}
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                {category.title}
              </h3>

              <p className="text-muted-foreground">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
