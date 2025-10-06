import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-icon.png";

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
      icon: Mail,
      title: "Email",
      content: "contact@lobbyingandlaw.com",
      href: "mailto:contact@lobbyingandlaw.com",
    },
    {
      icon: MapPin,
      title: "Address - Bangladesh",
      content: "🇧🇩 Nirala Nibash 39, West Tejturi Bazar, Farmgate, Dhaka--1215",
      href: "https://www.google.com/maps/search/?api=1&query=Nirala+Nibash+39+West+Tejturi+Bazar+Farmgate+Dhaka+1215",
    },
    {
      icon: MapPin,
      title: "Address - UK",
      content: "🇬🇧 27 South Rise Way, London SE 18 7PG",
      href: "https://www.google.com/maps/search/?api=1&query=27+South+Rise+Way+London+SE+18+7PG",
    },
    {
      icon: MapPin,
      title: "Address - USA",
      content: "🇺🇸 82-11, 37th Ave, Heritage Tower Jackson Heights, NYC, USA",
      href: "https://www.google.com/maps/search/?api=1&query=82-11+37th+Ave+Heritage+Tower+Jackson+Heights+NYC+USA",
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
                  target="_blank"
                  rel="noopener noreferrer"
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
              
              <div className="text-center">
                <span className="text-sm text-muted-foreground">or</span>
              </div>
              
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] hover:border-[#20BA5A]"
                onClick={() => window.open("https://wa.me/8801763116763?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services", "_blank")}
              >
                <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8 mr-2 mix-blend-lighten" />
                Contact via WhatsApp
              </Button>
            </form>
          </Card>
        </div>
        
        {/* Google Maps Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-serif text-primary-foreground mb-8 text-center">Our Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bangladesh Map */}
            <Card className="p-4 bg-card">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                🇧🇩 Bangladesh
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4948583576985!2d90.38431!3d23.752486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b3f1e8a8e7%3A0x5e8e1c9d5e4c8b1a!2sFarmgate%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </Card>
            
            {/* UK Map */}
            <Card className="p-4 bg-card">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                🇬🇧 United Kingdom
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5234567890123!2d0.0934567!3d51.4876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a8d8d8d8d8d8%3A0x5e8e1c9d5e4c8b1a!2sLondon%20SE18%207PG!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </Card>
            
            {/* USA Map */}
            <Card className="p-4 bg-card">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                🇺🇸 United States
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890123!2d-73.8834567!3d40.7486543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f1234567890%3A0x5e8e1c9d5e4c8b1a!2sJackson%20Heights%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
