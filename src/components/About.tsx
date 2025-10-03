import { Card } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To deliver exceptional legal services with integrity, innovation, and impact across Bangladesh.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be recognized as the nation's leading lobbying & law firm, shaping legal and policy reforms.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to the highest standards of professional excellence and client satisfaction.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              We are the leading firm in{" "}
              <span className="text-gold">Bangladesh</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Zero Plus Legal</strong> is
                Bangladesh's first and foremost lobbying and law firm,
                pioneering a new era of strategic advocacy and comprehensive
                legal solutions.
              </p>

              <p>
                Led by our esteemed Chairman,{" "}
                <strong className="text-gold">
                  Rabiul Islam Tarafder (Brit Robin)
                </strong>
                , we combine deep legal expertise with innovative approaches to
                deliver exceptional results for our clients.
              </p>

              <p>
                Our multidisciplinary team brings together the finest legal
                minds, policy experts, and strategic advisors to tackle the most
                complex challenges in litigation, procurement, legal-tech, and
                beyond.
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-gold hover:shadow-lg transition-all duration-300 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
