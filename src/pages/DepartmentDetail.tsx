import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, ShoppingCart, Laptop, BookOpen, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const departments = [
    {
      id: "legal",
      icon: Scale,
      title: "Legal & Litigation Department",
      shortTitle: "Legal & Litigation",
      description:
        "Our Legal & Litigation Department stands as the cornerstone of our firm, delivering comprehensive litigation services across all judicial forums in Bangladesh. With extensive experience in the Supreme Court, High Court Division, and subordinate courts, our team handles complex corporate disputes, procurement challenges, land and property matters, and high-stakes legal battles.",
      overview:
        "We specialize in representing clients before the highest courts of Bangladesh, providing strategic counsel and vigorous advocacy. Our litigation practice encompasses civil, commercial, constitutional, and administrative law matters, ensuring clients receive expert representation at every level of the judicial system.",
      responsibilities: [
        "Supreme Court Appellate Division representation and strategic appeals",
        "High Court Division matters including writ petitions and constitutional cases",
        "Corporate and commercial litigation across all sectors",
        "Land acquisition and property dispute resolution",
        "Procurement dispute litigation and arbitration",
        "Contract enforcement and business disputes",
        "Administrative law and judicial review matters",
        "Alternative dispute resolution and mediation services",
      ],
      team: [
        { name: "Senior Advocates", role: "Supreme Court Practice" },
        { name: "Litigation Specialists", role: "High Court Division" },
        { name: "Corporate Counsel", role: "Commercial Disputes" },
        { name: "Legal Researchers", role: "Case Strategy" },
      ],
    },
    {
      id: "procurement",
      icon: ShoppingCart,
      title: "Procurement Advisory Department",
      shortTitle: "Procurement Advisory",
      description:
        "The Procurement Advisory Department provides expert guidance on all aspects of public and private procurement processes in Bangladesh. We support clients through the complexities of the Public Procurement Act 2006 and Public Procurement Rules 2008, ensuring compliance while maximizing competitive advantage.",
      overview:
        "Our procurement specialists have extensive experience in tender preparation, bid evaluation, contract negotiation, and dispute resolution. We work closely with government entities, development partners, and private sector organizations to deliver strategic procurement solutions that minimize risk and optimize outcomes.",
      responsibilities: [
        "Tender document preparation and comprehensive review",
        "Procurement compliance and regulatory advisory services",
        "Bid evaluation and qualification assessment support",
        "Contract negotiation and risk mitigation strategies",
        "Procurement dispute resolution and litigation support",
        "Policy development for public sector procurement",
        "Vendor qualification and due diligence services",
        "Post-award contract management advisory",
      ],
      team: [
        { name: "Procurement Experts", role: "Tender Advisory" },
        { name: "Compliance Specialists", role: "Regulatory Matters" },
        { name: "Contract Negotiators", role: "Deal Structuring" },
        { name: "Dispute Resolution Team", role: "Procurement Litigation" },
      ],
    },
    {
      id: "tech",
      icon: Laptop,
      title: "IT & Legal-Tech Department",
      shortTitle: "IT & Legal-Tech",
      description:
        "Our IT & Legal-Tech Department represents the future of legal services in Bangladesh, combining cutting-edge technology with traditional legal expertise. We develop innovative legal technology solutions while providing comprehensive IT law advisory services to help clients navigate the digital landscape.",
      overview:
        "From court automation systems to AI-powered legal research tools, we're pioneering the digital transformation of legal practice in Bangladesh. Our team bridges the gap between law and technology, offering services that range from cybersecurity compliance to software development for legal applications.",
      responsibilities: [
        "Legal technology platform development and implementation",
        "IT law advisory and regulatory compliance services",
        "Cybersecurity legal framework development",
        "Digital transformation strategy for legal operations",
        "E-governance and court automation solutions",
        "Data protection and privacy law compliance",
        "Technology contract drafting and negotiation",
        "Intellectual property protection for software and tech innovations",
      ],
      team: [
        { name: "Legal Tech Developers", role: "Platform Development" },
        { name: "IT Law Advisors", role: "Technology Compliance" },
        { name: "Cybersecurity Experts", role: "Security Advisory" },
        { name: "Digital Transformation Specialists", role: "Innovation Strategy" },
      ],
    },
    {
      id: "research",
      icon: BookOpen,
      title: "Research & Development Department",
      shortTitle: "Research & Development",
      description:
        "The Research & Development Department serves as the intellectual foundation of our firm, conducting in-depth legal research, policy analysis, and strategic development initiatives. Our team produces comprehensive legal memoranda, white papers, and reform proposals that shape legal discourse in Bangladesh.",
      overview:
        "We support complex litigation with thorough case law research, develop legislative proposals for policy reform, and provide strategic insights that inform decision-making at the highest levels. Our research capabilities extend across all areas of law, combining academic rigor with practical application.",
      responsibilities: [
        "Comprehensive legal research and case law analysis",
        "Policy development and legislative reform proposals",
        "White paper production on critical legal issues",
        "Strategic case strategy development and planning",
        "Legal opinion drafting and advisory memoranda",
        "Comparative law research and international best practices",
        "Law reform advocacy and stakeholder engagement",
        "Training material development for capacity building",
      ],
      team: [
        { name: "Legal Researchers", role: "Case Law Analysis" },
        { name: "Policy Analysts", role: "Legislative Development" },
        { name: "Academic Consultants", role: "Research Quality" },
        { name: "Strategic Advisors", role: "Case Strategy" },
      ],
    },
    {
      id: "trade",
      icon: TrendingUp,
      title: "Trade & Commerce Department",
      shortTitle: "Trade & Commerce",
      description:
        "The Trade & Commerce Department delivers comprehensive support for businesses navigating Bangladesh's trade regulations, commercial transactions, and business development landscape. We facilitate trade expansion, ensure compliance with import-export regulations, and structure complex commercial arrangements.",
      overview:
        "Our trade law specialists work with domestic and international clients on cross-border transactions, trade policy matters, and commercial contract structuring. From small enterprises to large corporations, we provide strategic guidance that enables business growth while maintaining regulatory compliance.",
      responsibilities: [
        "Trade law advisory and policy analysis",
        "Import and export compliance services",
        "Commercial contract drafting and negotiation",
        "Business structuring and entity formation",
        "Trade agreement negotiation and implementation",
        "Customs and tariff advisory services",
        "International trade dispute resolution",
        "Foreign investment facilitation and compliance",
      ],
      team: [
        { name: "Trade Law Specialists", role: "Trade Policy & Compliance" },
        { name: "Commercial Counsel", role: "Contract Management" },
        { name: "Business Advisors", role: "Structuring & Strategy" },
        { name: "International Trade Experts", role: "Cross-border Transactions" },
      ],
    },
    {
      id: "hr",
      icon: Users,
      title: "HR & Administration Department",
      shortTitle: "HR & Administration",
      description:
        "The HR & Administration Department ensures operational excellence across all aspects of our firm's internal management. From talent acquisition and professional development to administrative coordination and resource optimization, we create the foundation for organizational success.",
      overview:
        "Our HR team manages the firm's most valuable asset—our people. We foster a culture of professional excellence, continuous learning, and collaborative teamwork. Through strategic human resource management and efficient administrative systems, we enable all departments to focus on delivering exceptional client service.",
      responsibilities: [
        "Talent acquisition and recruitment strategy",
        "Professional development and training programs",
        "Performance management and career progression",
        "Administrative coordination and office management",
        "Resource allocation and optimization",
        "Internal policy development and implementation",
        "Employee relations and workplace culture",
        "Facility management and operational efficiency",
      ],
      team: [
        { name: "HR Managers", role: "Talent Management" },
        { name: "Training Coordinators", role: "Professional Development" },
        { name: "Administrative Officers", role: "Operations Management" },
        { name: "Resource Planners", role: "Strategic Planning" },
      ],
    },
  ];

  const department = departments.find((dept) => dept.id === id);

  useEffect(() => {
    if (department) {
      document.title = `${department.title} | Lobbying and the Law (Bangladesh) Company Limited`;
    }
  }, [department]);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Department Not Found</h1>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  const Icon = department.icon;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-24 mt-16">
        <div className="container-custom">
          <Breadcrumb className="mb-8">
            <BreadcrumbList className="text-primary-foreground/80">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-primary-foreground">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/60" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#departments" className="hover:text-primary-foreground">
                    Departments
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground">
                  {department.shortTitle}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-6 animate-fade-in">
            <div className="w-24 h-24 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground">
              {department.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <Button
            variant="outline"
            className="mb-8 group"
            onClick={() => navigate("/#departments")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Departments
          </Button>

          <div className="space-y-12 animate-fade-in">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {department.description}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {department.overview}
                </p>
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Key Responsibilities & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {department.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Team Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Team Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {department.team.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-muted rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
                    >
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-r from-primary/10 to-gold/10 border-gold/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Interested in Our {department.shortTitle} Services?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Contact us to learn more about how our department can assist you
                </p>
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-accent-foreground"
                  onClick={() => navigate("/#contact")}
                >
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepartmentDetail;
