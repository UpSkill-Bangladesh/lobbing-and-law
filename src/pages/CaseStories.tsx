import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Building2, Home, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const CaseStories = () => {
  useEffect(() => {
    document.title = "Case Stories | Lobbying and the Law (Bangladesh) Company Limited";
    window.scrollTo(0, 0);
  }, []);

  const caseStories = [
    {
      id: "al-madina-supreme-court",
      category: "Supreme Court Litigation",
      featured: true,
      title: "Al Madina Group Supreme Court Victory",
      highlight: "Successfully represented Al Madina Group before the Appellate Division led by the Chief Justice of Bangladesh",
      description: "A landmark case involving high-value import dispute resolution at the highest judicial level, saving the client from major financial loss.",
      tags: ["Supreme Court", "Import Dispute", "Appellate Division"],
      icon: Scale,
    },
    {
      id: "public-procurement-disputes",
      category: "Public Procurement",
      featured: true,
      title: "30+ Companies Procurement Victories",
      highlight: "Represented over 30 companies in disputes under BPPA with consistent success",
      description: "Achieved reinstatement of eligibility and secured payments through strategic lobbying and expert legal representation.",
      tags: ["BPPA", "Tender Disputes", "Payment Recovery"],
      icon: Briefcase,
    },
    {
      id: "gulshan-property-recovery",
      category: "Land & Property",
      featured: false,
      title: "Gulshan Building Recovery",
      highlight: "Successfully recovered commercial building from illegal occupants in prime Gulshan location",
      description: "Complex property dispute involving multiple parties and forged documentation. Client regained full possession through strategic litigation.",
      tags: ["Property Recovery", "Gulshan", "Eviction"],
      icon: Building2,
    },
    {
      id: "mohammadpur-deed-dispute",
      category: "Land & Property",
      featured: false,
      title: "Mohammadpur Forged Deed Resolution",
      highlight: "Resolved complex forged deed dispute protecting client's rightful property ownership",
      description: "Uncovered fraudulent property transaction and successfully defended client's ownership rights through forensic evidence and legal expertise.",
      tags: ["Forgery", "Property Rights", "Title Defense"],
      icon: Home,
    },
    {
      id: "savar-industrial-land",
      category: "Land & Property",
      featured: false,
      title: "Savar Industrial Land Eviction",
      highlight: "Evicted unlawful possession from valuable industrial land in Savar",
      description: "Strategic litigation resulted in court-ordered eviction of illegal occupants, restoring client's industrial operations.",
      tags: ["Industrial Property", "Savar", "Court Order"],
      icon: Building2,
    },
    {
      id: "keraniganj-inheritance",
      category: "Land & Property",
      featured: false,
      title: "Keraniganj Inheritance Settlement",
      highlight: "Settled complex inheritance-related property litigation in Keraniganj",
      description: "Multi-party inheritance dispute resolved through negotiation and court intervention, ensuring fair distribution.",
      tags: ["Inheritance", "Family Law", "Settlement"],
      icon: Home,
    },
    {
      id: "jatrabari-rent-recovery",
      category: "Land & Property",
      featured: false,
      title: "Jatrabari & Moghbazar Property Recovery",
      highlight: "Recovered rent and property through court enforcement in Jatrabari and Moghbazar",
      description: "Multiple property recovery cases involving rent defaults and possession disputes, all successfully resolved.",
      tags: ["Rent Recovery", "Court Enforcement", "Possession"],
      icon: Building2,
    },
    {
      id: "hostile-board-takeover",
      category: "Corporate",
      featured: false,
      title: "Corporate Board Takeover Defense",
      highlight: "Resolved hostile board takeover attempt via High Court injunctions",
      description: "Protected client company from hostile takeover through emergency injunctions and strategic corporate litigation.",
      tags: ["Corporate Law", "High Court", "Injunction"],
      icon: Briefcase,
    },
    {
      id: "rjsc-license-defense",
      category: "Corporate",
      featured: false,
      title: "RJSC License Protection",
      highlight: "Successfully defended company license from RJSC cancellation proceedings",
      description: "Challenged improper cancellation proceedings and restored company's operational license through legal advocacy.",
      tags: ["RJSC", "Compliance", "License Defense"],
      icon: Scale,
    },
    {
      id: "debt-recovery-10-crore",
      category: "Corporate",
      featured: true,
      title: "BDT 10 Crore Debt Recovery",
      highlight: "Recovered over BDT 10 crore from defaulting debtor through strategic enforcement",
      description: "Large-scale debt recovery involving complex corporate structures and asset tracing. Full recovery achieved.",
      tags: ["Debt Recovery", "Corporate Finance", "Enforcement"],
      icon: Briefcase,
    },
    {
      id: "joint-venture-exit",
      category: "Corporate",
      featured: false,
      title: "Foreign Joint Venture Exit Negotiation",
      highlight: "Negotiated favorable exit from loss-generating foreign joint venture",
      description: "Complex international commercial negotiation resulting in minimal losses and clean exit from underperforming venture.",
      tags: ["Joint Venture", "International", "Negotiation"],
      icon: Briefcase,
    },
  ];

  const featuredStories = caseStories.filter((story) => story.featured);
  const regularStories = caseStories.filter((story) => !story.featured);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-24 mt-16">
        <div className="container-custom">
          <div className="max-w-4xl animate-fade-in">
            <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
              Case Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Success Stories & Legal Victories
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Explore our portfolio of successful cases across Supreme Court litigation, public procurement,
              property disputes, and corporate matters. Each story represents our commitment to excellence
              and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      {featuredStories.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Featured Cases
              </h2>
              <p className="text-lg text-muted-foreground">
                Our most significant legal victories and landmark cases
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStories.map((story) => {
                const Icon = story.icon;
                return (
                  <Card
                    key={story.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 border-gold/30 hover:border-gold animate-fade-in"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <Badge className="bg-gold text-accent-foreground">Featured</Badge>
                      </div>
                      <Badge variant="outline" className="w-fit mb-3 border-primary/30">
                        {story.category}
                      </Badge>
                      <CardTitle className="text-2xl font-serif group-hover:text-gold transition-colors">
                        {story.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {story.highlight}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{story.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gold hover:bg-gold/90 text-accent-foreground group/button"
                      >
                        <Link to={`/case-stories/${story.id}`}>
                          Read Full Story
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Case Stories */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              All Case Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of successful legal cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStories.map((story) => {
              const Icon = story.icon;
              return (
                <Card
                  key={story.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:border-gold/50 animate-fade-in"
                >
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-gold/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors" />
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-xs">
                        {story.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-gold transition-colors">
                      {story.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {story.highlight}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group/button border-primary/30 hover:border-gold hover:bg-gold/10"
                    >
                      <Link to={`/case-stories/${story.id}`}>
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStories;
