import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:contact@lobbyingandlaw.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with the message.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+880 1763 116763",
      href: "tel:+8801763116763",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+880 1763 116763",
      href: "https://wa.me/8801763116763?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@lobbyingandlaw.com",
      href: "mailto:contact@lobbyingandlaw.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "🇧🇩 Nirala Nibash 39, West Tejturi Bazar, Farmgate, Dhaka--1215",
      href: "https://www.google.com/maps/search/?api=1&query=Nirala+Nibash+39+West+Tejturi+Bazar+Farmgate+Dhaka+1215",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-hero-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full inline-block mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-primary-foreground/70">
            Get in touch with us for a consultation or inquiry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-l-4 border-l-gold hover:shadow-lg transition-all duration-300"
              >
                <a
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-gold transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </a>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="p-4 bg-card">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gold" />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-border focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background border-border focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+880 1234 567890"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-background border-border focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell us about your legal needs..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-background border-border focus:border-gold resize-none"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Send Consultation
                <Send className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
