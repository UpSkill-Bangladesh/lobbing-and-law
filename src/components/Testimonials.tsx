import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      position: "CEO, Leading Corporation",
      content:
        "Lobbying and the Law Company Limited's strategic advocacy and litigation expertise helped us navigate complex regulatory challenges. Their team's professionalism is unmatched.",
      initials: "AH",
    },
    {
      name: "Fatima Khan",
      position: "Director, Manufacturing Group",
      content:
        "The procurement advisory services were instrumental in resolving our tender dispute. Highly recommend their meticulous approach and deep expertise.",
      initials: "FK",
    },
    {
      name: "Imran Chowdhury",
      position: "Managing Partner, Trading Firm",
      content:
        "As Bangladesh's first lobbying & law firm, they bring innovative solutions. Their Supreme Court representation was exceptional and delivered results.",
      initials: "IC",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading organizations across Bangladesh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-l-4 border-l-gold hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-gold/30" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-gold">
                  <AvatarFallback className="bg-gold text-accent-foreground font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
