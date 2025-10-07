import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Departments from "@/components/Departments";
import SuccessStories from "@/components/SuccessStories";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UnderConstructionPopup from "@/components/UnderConstructionPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UnderConstructionPopup />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Departments />
      <SuccessStories />
      <Clients />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
