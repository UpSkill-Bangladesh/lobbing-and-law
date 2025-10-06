import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, Building2, Home, Briefcase, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const CaseStoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const caseStories = [
    {
      id: "al-madina-supreme-court",
      category: "Supreme Court Litigation",
      title: "Al Madina Group Supreme Court Victory",
      client: "Al Madina Group",
      court: "Supreme Court Appellate Division",
      year: "2023",
      highlight: "Successfully represented Al Madina Group before the Appellate Division led by the Chief Justice of Bangladesh",
      challenge:
        "Al Madina Group faced a high-value import dispute that threatened significant financial losses. The case had proceeded through lower courts with unfavorable rulings, and the client's business operations were at serious risk. The complexity of import regulations combined with procedural challenges made this a difficult appeal requiring expert handling at the Supreme Court level.",
      approach:
        "Our legal team developed a comprehensive appellate strategy focusing on technical import law provisions and constitutional principles. We conducted extensive research on precedent-setting cases and prepared detailed written submissions highlighting errors in lower court reasoning. Our advocates presented compelling oral arguments before the Appellate Division, emphasizing the economic impact and legal merits of our client's position.",
      outcome:
        "The Appellate Division, led by the Chief Justice of Bangladesh, ruled in favor of Al Madina Group, issuing a clearance order that resolved the dispute. This landmark victory saved the client from major financial loss and established important precedent for import dispute resolution. The case demonstrated the critical importance of Supreme Court representation in high-stakes commercial matters.",
      impact:
        "This case reinforced our firm's reputation for handling complex Supreme Court litigation. The successful outcome has been cited in subsequent import dispute cases and has helped shape the legal framework for commercial import matters in Bangladesh.",
      tags: ["Supreme Court", "Import Dispute", "Appellate Division", "Commercial Law"],
      icon: Scale,
    },
    {
      id: "public-procurement-disputes",
      category: "Public Procurement",
      title: "30+ Companies Procurement Victories",
      client: "Multiple Corporate Clients (30+ Companies)",
      court: "Various Courts & Administrative Bodies",
      year: "2020-2024",
      highlight: "Represented over 30 companies in disputes under BPPA with consistent success",
      challenge:
        "Our clients faced various procurement disputes under the Bangladesh Public Procurement Act (BPPA), including tender disqualifications, payment delays, contract terminations, and eligibility challenges. Each case involved complex regulatory compliance issues and required deep understanding of procurement law and procedures.",
      approach:
        "We developed a specialized procurement dispute resolution practice, combining legal representation with strategic lobbying and stakeholder engagement. Our approach included detailed tender document review, compliance audits, regulatory advocacy, and when necessary, litigation before administrative tribunals and courts. We maintained close coordination with relevant government agencies while protecting client interests.",
      outcome:
        "Achieved reinstatement of eligibility for disqualified bidders, secured delayed payments totaling hundreds of millions of taka, successfully challenged improper contract terminations, and won favorable rulings in procurement litigation. Our success rate in procurement disputes exceeds 90%, with most cases resolved through negotiation before reaching court.",
      impact:
        "Our firm has become a leading authority on public procurement law in Bangladesh. We have helped shape procurement policies through our advocacy work and have contributed to improving transparency and fairness in the public procurement process. Our success has attracted clients from diverse sectors including construction, IT, pharmaceuticals, and consulting services.",
      tags: ["BPPA", "Tender Disputes", "Payment Recovery", "Administrative Law"],
      icon: Briefcase,
    },
    {
      id: "gulshan-property-recovery",
      category: "Land & Property",
      title: "Gulshan Building Recovery",
      client: "Private Commercial Property Owner",
      court: "High Court Division & Subordinate Courts",
      year: "2022",
      highlight: "Successfully recovered commercial building from illegal occupants in prime Gulshan location",
      challenge:
        "Our client, the rightful owner of a valuable commercial building in Gulshan, faced illegal occupation by parties claiming fraudulent ownership. The occupants had forged documents and were collecting rent from tenants, causing significant financial loss and reputational damage. The complexity involved multiple parties, forged documentation, and the need for swift action to prevent further damage.",
      approach:
        "We immediately filed for emergency injunctions while simultaneously pursuing criminal complaints regarding document forgery. Our team conducted thorough title verification, engaged forensic document experts, and built a comprehensive evidentiary foundation. We coordinated with law enforcement while pursuing civil remedies through the courts.",
      outcome:
        "Successfully obtained court orders for eviction, recovered full possession of the property, and the illegal occupants were prosecuted for forgery. Our client regained control of the building and resumed normal commercial operations. The forged documents were officially nullified, securing the client's title permanently.",
      impact:
        "This case highlighted the importance of swift legal action in property disputes and demonstrated effective coordination between civil and criminal proceedings. The successful outcome has deterred similar fraudulent occupation attempts in the area.",
      tags: ["Property Recovery", "Gulshan", "Eviction", "Fraud Prevention"],
      icon: Building2,
    },
    {
      id: "mohammadpur-deed-dispute",
      category: "Land & Property",
      title: "Mohammadpur Forged Deed Resolution",
      client: "Residential Property Owner",
      court: "Metropolitan Sessions Court",
      year: "2021",
      highlight: "Resolved complex forged deed dispute protecting client's rightful property ownership",
      challenge:
        "A fraudulent property transaction involving forged deed and signatures threatened our client's ownership of their family home in Mohammadpur. The fraudsters had created sophisticated forgeries and registered them with authorities. The case required proving the forgery while protecting the client's ownership rights.",
      approach:
        "We engaged handwriting experts and forensic document analysts to prove the forgery. Our legal team filed both criminal complaints and civil suits, presenting compelling forensic evidence to the court. We also worked with registration authorities to flag the fraudulent documents.",
      outcome:
        "The court ruled in favor of our client after forensic evidence conclusively proved the forgery. The fraudulent deed was cancelled, criminal charges were filed against the perpetrators, and our client's ownership was permanently secured. Compensation was also awarded for legal costs and damages.",
      impact:
        "This case established important precedents for using forensic evidence in property disputes and highlighted the effectiveness of coordinated civil-criminal strategies in fraud cases.",
      tags: ["Forgery", "Property Rights", "Title Defense", "Forensic Evidence"],
      icon: Home,
    },
    {
      id: "savar-industrial-land",
      category: "Land & Property",
      title: "Savar Industrial Land Eviction",
      client: "Manufacturing Company",
      court: "District Court, Dhaka",
      year: "2023",
      highlight: "Evicted unlawful possession from valuable industrial land in Savar",
      challenge:
        "Our client's industrial land in Savar was illegally occupied, preventing the expansion of manufacturing operations and causing significant business losses. The occupants claimed prescriptive rights and had built structures on the land, complicating the eviction process.",
      approach:
        "We conducted comprehensive title verification, proving our client's uninterrupted ownership. Our litigation strategy focused on disproving any prescriptive rights claims and securing swift eviction orders. We coordinated with local administration and law enforcement for proper execution.",
      outcome:
        "Court ordered immediate eviction of illegal occupants, demolition of unauthorized structures, and restoration of full possession to our client. The manufacturing expansion project resumed, and the client recovered damages for business interruption.",
      impact:
        "The successful resolution enabled our client to proceed with planned expansion, creating additional employment and contributing to industrial development in the region.",
      tags: ["Industrial Property", "Savar", "Court Order", "Eviction"],
      icon: Building2,
    },
    {
      id: "keraniganj-inheritance",
      category: "Land & Property",
      title: "Keraniganj Inheritance Settlement",
      client: "Multiple Family Members",
      court: "Family Court, Dhaka",
      year: "2022",
      highlight: "Settled complex inheritance-related property litigation in Keraniganj",
      challenge:
        "A multi-generational property inheritance dispute involving numerous family members, unclear documentation, and conflicting claims threatened to tear the family apart and drain resources through prolonged litigation. The property's value had appreciated significantly, intensifying the conflict.",
      approach:
        "We employed a mediation-first strategy, bringing all parties together for structured negotiations while preparing for litigation if necessary. Our team researched inheritance law principles, verified documentation, and proposed fair distribution formulas based on legal entitlements.",
      outcome:
        "Successfully mediated a settlement acceptable to all parties, avoiding years of litigation. The property was divided according to Islamic inheritance principles with necessary adjustments for practical considerations. All parties signed a comprehensive settlement agreement.",
      impact:
        "The case preserved family relationships while ensuring fair distribution. Our mediation-based approach has become a model for handling similar inheritance disputes, saving clients time, money, and emotional distress.",
      tags: ["Inheritance", "Family Law", "Settlement", "Mediation"],
      icon: Home,
    },
    {
      id: "jatrabari-rent-recovery",
      category: "Land & Property",
      title: "Jatrabari & Moghbazar Property Recovery",
      client: "Multiple Property Owners",
      court: "Rent Control Courts, Dhaka",
      year: "2021-2023",
      highlight: "Recovered rent and property through court enforcement in Jatrabari and Moghbazar",
      challenge:
        "Multiple clients faced rent defaults and possession disputes in Jatrabari and Moghbazar areas. Tenants had stopped paying rent, refused to vacate despite expired leases, and in some cases claimed ownership rights. Traditional rent control proceedings were moving slowly.",
      approach:
        "We accelerated proceedings through strategic motion practice and evidence presentation. Our team documented rental agreements, payment defaults, and lease violations comprehensively. We coordinated with enforcement authorities for swift execution of court orders.",
      outcome:
        "Successfully recovered all properties, evicted defaulting tenants, and secured payment of outstanding rent arrears totaling several lakhs of taka. All cases were resolved within reasonable timeframes through effective court advocacy.",
      impact:
        "These victories established important precedents for landlord rights and demonstrated effective strategies for rent recovery in urban Dhaka, encouraging property owners to take appropriate legal action against defaults.",
      tags: ["Rent Recovery", "Court Enforcement", "Possession", "Landlord Rights"],
      icon: Building2,
    },
    {
      id: "hostile-board-takeover",
      category: "Corporate",
      title: "Corporate Board Takeover Defense",
      client: "Private Limited Company",
      court: "High Court Division",
      year: "2023",
      highlight: "Resolved hostile board takeover attempt via High Court injunctions",
      challenge:
        "Our client company faced a hostile takeover attempt through manipulation of shareholder meetings and board resolutions. The hostile party had obtained questionable proxies and was attempting to change management illegally. Swift action was needed to prevent irreparable damage to the company.",
      approach:
        "We immediately filed for emergency injunctions at the High Court, challenging the validity of shareholder meetings and board resolutions. Our corporate law team conducted thorough reviews of company records, identified procedural violations, and presented compelling arguments for interim relief.",
      outcome:
        "The High Court granted injunctions preventing the hostile takeover, nullified the questionable resolutions, and ordered proper shareholder meetings under court supervision. The legitimate management retained control, and corporate governance was restored. The hostile party was ordered to pay costs.",
      impact:
        "This case established important precedents for corporate governance and shareholders' rights protection. It demonstrated the effectiveness of swift judicial intervention in corporate disputes and has guided subsequent corporate litigation.",
      tags: ["Corporate Law", "High Court", "Injunction", "Shareholders Rights"],
      icon: Briefcase,
    },
    {
      id: "rjsc-license-defense",
      category: "Corporate",
      title: "RJSC License Protection",
      client: "Private Limited Company",
      court: "High Court Division",
      year: "2022",
      highlight: "Successfully defended company license from RJSC cancellation proceedings",
      challenge:
        "The Registrar of Joint Stock Companies and Firms (RJSC) initiated cancellation proceedings against our client's company license based on alleged non-compliance. The cancellation would have destroyed the business and affected hundreds of stakeholders. The proceedings appeared to be based on misunderstanding of regulatory requirements.",
      approach:
        "We filed a comprehensive writ petition at the High Court challenging the RJSC proceedings on procedural and substantive grounds. Our team presented detailed evidence of compliance, identified errors in RJSC's assessment, and argued that proper notice and hearing procedures had not been followed.",
      outcome:
        "The High Court stayed the cancellation proceedings, directed RJSC to reconsider the matter properly, and ultimately the cancellation was withdrawn. The company's license was secured, business operations continued uninterrupted, and proper compliance procedures were established going forward.",
      impact:
        "This case clarified RJSC compliance requirements and procedural safeguards, helping numerous companies understand their rights and obligations. It has become a reference case for RJSC-related litigation.",
      tags: ["RJSC", "Compliance", "License Defense", "Administrative Law"],
      icon: Scale,
    },
    {
      id: "debt-recovery-10-crore",
      category: "Corporate",
      title: "BDT 10 Crore Debt Recovery",
      client: "Financial Services Company",
      court: "High Court Division & Artha Rin Adalat",
      year: "2021-2023",
      highlight: "Recovered over BDT 10 crore from defaulting debtor through strategic enforcement",
      challenge:
        "Our client faced a massive debt default exceeding BDT 10 crore from a corporate debtor who had hidden assets and was attempting to frustrate recovery efforts. The debtor had complex corporate structures designed to shield assets from creditors. Traditional recovery methods were proving ineffective.",
      approach:
        "We deployed a multi-faceted recovery strategy including asset tracing, corporate veil piercing litigation, attachment orders, and criminal proceedings. Our team coordinated with financial institutions, investigated related-party transactions, and pursued both the company and personal guarantors.",
      outcome:
        "Successfully recovered the full amount of BDT 10 crore plus interest through a combination of attached assets, negotiated settlements, and court-ordered payments. Several properties were liquidated, and personal guarantors were held liable. The recovery was completed over 24 months.",
      impact:
        "This landmark recovery demonstrated the effectiveness of comprehensive enforcement strategies in large-scale debt recovery. The case has established important precedents for creditor rights and debtor accountability in Bangladesh.",
      tags: ["Debt Recovery", "Corporate Finance", "Enforcement", "Asset Tracing"],
      icon: Briefcase,
    },
    {
      id: "joint-venture-exit",
      category: "Corporate",
      title: "Foreign Joint Venture Exit Negotiation",
      client: "Local Corporate Partner",
      court: "Commercial Arbitration",
      year: "2022",
      highlight: "Negotiated favorable exit from loss-generating foreign joint venture",
      challenge:
        "Our client was trapped in a loss-generating joint venture with a foreign partner. The venture agreement contained complex exit provisions, and the foreign partner was demanding unreasonable compensation. The ongoing losses were affecting our client's overall business performance.",
      approach:
        "We conducted detailed analysis of the joint venture agreement, identified leverage points, and developed a negotiation strategy. Our team engaged in multi-round negotiations with the foreign partner, involving financial restructuring experts and exploring alternative exit mechanisms. When negotiations stalled, we initiated arbitration proceedings.",
      outcome:
        "Successfully negotiated a clean exit with minimal losses, significantly below the foreign partner's initial demands. The settlement included appropriate asset division, intellectual property transfers, and customer relationship transitions. Our client was freed from ongoing loss obligations.",
      impact:
        "The favorable exit enabled our client to reallocate resources to profitable ventures. The case provided valuable lessons for structuring joint venture agreements and demonstrated effective strategies for exit negotiations in international commercial relationships.",
      tags: ["Joint Venture", "International", "Negotiation", "Commercial Arbitration"],
      icon: Briefcase,
    },
  ];

  const caseStory = caseStories.find((story) => story.id === id);

  useEffect(() => {
    if (caseStory) {
      document.title = `${caseStory.title} | Case Stories | Lobbying and the Law`;
      window.scrollTo(0, 0);
    }
  }, [caseStory]);

  if (!caseStory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Case Story Not Found</h1>
          <Button onClick={() => navigate("/case-stories")}>View All Case Stories</Button>
        </div>
      </div>
    );
  }

  const Icon = caseStory.icon;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-20 mt-16">
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
                  <Link to="/case-stories" className="hover:text-primary-foreground">
                    Case Stories
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground">
                  {caseStory.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="animate-fade-in">
            <Badge className="bg-gold text-accent-foreground mb-4">
              {caseStory.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              {caseStory.title}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              {caseStory.highlight}
            </p>
          </div>
        </div>
      </section>

      {/* Case Details */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Button
            variant="outline"
            className="mb-8 group"
            onClick={() => navigate("/case-stories")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Case Stories
          </Button>

          {/* Case Meta Information */}
          <Card className="mb-8 border-2 border-gold/20 animate-fade-in">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Client</p>
                    <p className="font-semibold text-foreground">{caseStory.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Court/Forum</p>
                    <p className="font-semibold text-foreground">{caseStory.court}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Year</p>
                    <p className="font-semibold text-foreground">{caseStory.year}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Story Content */}
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-serif flex items-center gap-3">
                  <Icon className="w-8 h-8 text-gold" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStory.challenge}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStory.approach}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-3xl font-serif flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold" />
                  The Outcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStory.outcome}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Impact & Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {caseStory.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStory.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary/10 to-gold/10 border-gold/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Need Expert Legal Representation?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Contact us to discuss your case and discover how we can help achieve your legal objectives
                </p>
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-accent-foreground"
                  onClick={() => navigate("/#contact")}
                >
                  Schedule a Consultation
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

export default CaseStoryDetail;
