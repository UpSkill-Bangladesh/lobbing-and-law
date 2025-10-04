import { Card } from "@/components/ui/card";
import bashundharaLogo from "@/assets/clients/bashundhara.png";
import beximcoLogo from "@/assets/clients/beximco.png";
import abdulMonemLogo from "@/assets/clients/abdul-monem.png";
import jmiLogo from "@/assets/clients/jmi.png";
import squareLogo from "@/assets/clients/square.png";
import aciLogo from "@/assets/clients/aci.png";
import rahimafroozLogo from "@/assets/clients/rahimafrooz.png";
import meghnaLogo from "@/assets/clients/meghna.png";

const Clients = () => {
  const clients = [
    { name: "Bashundhara Group", logo: bashundharaLogo },
    { name: "Beximco", logo: beximcoLogo },
    { name: "Abdul Monem Limited", logo: abdulMonemLogo },
    { name: "JMI Group", logo: jmiLogo },
    { name: "Square Group", logo: squareLogo },
    { name: "ACI Limited", logo: aciLogo },
    { name: "Rahimafrooz", logo: rahimafroozLogo },
    { name: "Meghna Group", logo: meghnaLogo },
  ];

  const whyChooseUs = [
    {
      title: "First Lobbying & Law Firm in Bangladesh",
      description: "Pioneering strategic advocacy and comprehensive legal solutions",
    },
    {
      title: "Multi-disciplinary Expertise",
      description: "Six specialized departments delivering integrated solutions",
    },
    {
      title: "Strong Judicial & Regulatory Network",
      description: "Deep connections across all levels of government and judiciary",
    },
    {
      title: "Legal-Tech Innovation",
      description: "Leveraging cutting-edge technology for efficient legal services",
    },
    {
      title: "Proven High-Profile Track Record",
      description: "500+ cases won with landmark victories in Supreme Court",
    },
    {
      title: "Client-Centric Approach",
      description: "Tailored strategies and dedicated service for each client",
    },
  ];

  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container-custom">
        {/* Prominent Clients */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
              Our Clients
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving Bangladesh's most prestigious corporations and institutions
            </p>
          </div>

          <Card className="p-12 bg-gradient-to-br from-card to-muted/20 border-2 border-gold/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-background/50 rounded-lg hover:bg-gold/5 transition-all duration-300 group hover:shadow-md"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-20 object-contain mb-3 transition-all duration-300 group-hover:scale-110"
                  />
                  <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-gold transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-l-4 border-l-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
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

export default Clients;
