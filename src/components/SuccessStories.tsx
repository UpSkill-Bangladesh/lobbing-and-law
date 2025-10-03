import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Gavel, Trophy, Building2, FileCheck } from "lucide-react";

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("success");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-gold">
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    {
      icon: Gavel,
      value: 500,
      suffix: "+",
      label: "Cases Won",
    },
    {
      icon: FileCheck,
      value: 30,
      suffix: "+",
      label: "Procurement Disputes Resolved",
    },
    {
      icon: Building2,
      value: 50,
      suffix: "+",
      label: "Corporate Clients",
    },
    {
      icon: Trophy,
      value: 15,
      suffix: "+",
      label: "Supreme Court Victories",
    },
  ];

  const notableCases = [
    {
      title: "Supreme Court Victory",
      description: "Successfully represented major corporate client in landmark Supreme Court appeal",
      icon: Gavel,
    },
    {
      title: "Land Recovery",
      description: "Recovered significant land assets worth millions for institutional client",
      icon: Building2,
    },
    {
      title: "Procurement Dispute",
      description: "Resolved complex government procurement dispute favoring our client",
      icon: FileCheck,
    },
  ];

  return (
    <section id="success" className="section-padding bg-hero-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
            Proven Track Record of Excellence
          </h2>
          <p className="text-xl text-primary-foreground/70">
            Numbers that speak to our commitment and capability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-card border-gold/20 hover:border-gold transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              <div className="mb-2 animate-counter">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Notable Cases */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-primary-foreground text-center mb-8">
            Notable Case Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notableCases.map((case_, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-l-4 border-l-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg flex-shrink-0">
                    <case_.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-foreground mb-2">
                      {case_.title}
                    </h4>
                    <p className="text-muted-foreground">{case_.description}</p>
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

export default SuccessStories;
