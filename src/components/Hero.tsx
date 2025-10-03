import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-overlay/95 to-hero-bg/98" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gold/20 border border-gold text-gold rounded-full text-sm font-medium">
              Experienced Lawyer Team
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-tight">
            Influence with{" "}
            <span className="text-gold gold-shimmer bg-clip-text">
              Integrity
            </span>
            .{" "}
            <br className="hidden md:block" />
            Reform with Purpose.
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Bangladesh's First Lobbying & Law Firm
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Applying the full compass in for laws that we do in achieving
            innovative decisions locations zealous strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="gold"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToContact}
            >
              Book a Consultation
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="gold-outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
