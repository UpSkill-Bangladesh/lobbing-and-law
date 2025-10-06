import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, ShoppingCart, Laptop, BookOpen, TrendingUp, Users } from "lucide-react";

const Departments = () => {
  const departments = [
    {
      id: "legal",
      icon: Scale,
      title: "Legal & Litigation",
      description:
        "Comprehensive litigation services across all courts, specializing in Supreme Court appeals, corporate disputes, and high-stakes legal battles.",
      highlights: [
        "Supreme Court representation",
        "High Court Division matters",
        "Corporate & commercial litigation",
        "Land & property disputes",
      ],
    },
    {
      id: "procurement",
      icon: ShoppingCart,
      title: "Procurement Advisory",
      description:
        "Expert guidance on public procurement processes, tender disputes, and contract negotiations for government and private sector clients.",
      highlights: [
        "Tender preparation & review",
        "Procurement dispute resolution",
        "Contract negotiation",
        "Compliance advisory",
      ],
    },
    {
      id: "tech",
      icon: Laptop,
      title: "IT & Legal-Tech",
      description:
        "Pioneering legal technology solutions and IT law services, bridging the gap between traditional legal practice and digital innovation.",
      highlights: [
        "Legal tech development",
        "IT law & compliance",
        "Digital transformation",
        "Cybersecurity legal advisory",
      ],
    },
    {
      id: "research",
      icon: BookOpen,
      title: "Research & Development",
      description:
        "In-depth legal research, policy analysis, and strategic development to support complex cases and legislative initiatives.",
      highlights: [
        "Legal research & analysis",
        "Policy development",
        "Legislative drafting",
        "Case strategy development",
      ],
    },
    {
      id: "trade",
      icon: TrendingUp,
      title: "Trade & Commerce",
      description:
        "Comprehensive support for trade agreements, commercial transactions, and business regulatory compliance across Bangladesh.",
      highlights: [
        "Trade law advisory",
        "Commercial contracts",
        "Import/export compliance",
        "Business structuring",
      ],
    },
    {
      id: "hr",
      icon: Users,
      title: "HR & Administration",
      description:
        "Strategic human resources management and administrative excellence ensuring operational efficiency across all departments.",
      highlights: [
        "Team management",
        "Professional development",
        "Administrative coordination",
        "Resource optimization",
      ],
    },
  ];

  return (
    <section id="departments" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
            Departments
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Our Departments Overview
          </h2>
          <p className="text-xl text-muted-foreground">
            Six specialized departments working in harmony to deliver comprehensive legal solutions
          </p>
        </div>

        <Tabs defaultValue="legal" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full mb-8 h-auto bg-muted p-2 rounded-lg">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept.id}
                value={dept.id}
                className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-gold data-[state=active]:text-accent-foreground"
              >
                <dept.icon className="w-5 h-5" />
                <span className="text-xs font-medium hidden md:inline">{dept.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id} className="animate-fade-in-up">
              <Card className="p-8 md:p-12 border-2 border-gold/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gold/10 rounded-lg flex items-center justify-center">
                      <dept.icon className="w-10 h-10 text-gold" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                        {dept.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {dept.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Key Capabilities:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {dept.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gold rounded-full" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Departments;
