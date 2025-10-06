import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: "Home", id: "hero", isSection: true },
    { name: "About Us", id: "about", isSection: true },
    { name: "Services", id: "services", isSection: true },
    { name: "Departments", id: "departments", isSection: true },
    { name: "Case Stories", path: "/case-stories", isSection: false },
    { name: "Clients", id: "clients", isSection: true },
    { name: "Contact", id: "contact", isSection: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 md:gap-3 cursor-pointer" 
            onClick={() => location.pathname !== "/" ? navigate("/") : scrollToSection("hero")}
          >
            <img src={logo} alt="Lobbying and the Law Company Limited Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0" />
            <div className="flex flex-col">
              <h1 className="text-sm md:text-lg lg:text-xl font-serif text-primary-foreground leading-tight whitespace-nowrap">
                Lobbying and the Law Company Limited
              </h1>
              <p className="text-xs text-gold hidden md:block whitespace-nowrap">
                Bangladesh&apos;s First Lobbying & Law Firm
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.isSection ? link.id : link.path}
                onClick={() => link.isSection ? scrollToSection(link.id!) : handleNavigation(link.path!)}
                className="text-primary-foreground hover:text-gold transition-colors duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="gold"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="whitespace-nowrap"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              className="text-primary-foreground hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up bg-primary/95 -mx-6 px-6 mt-4 pt-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.isSection ? link.id : link.path}
                  onClick={() => link.isSection ? scrollToSection(link.id!) : handleNavigation(link.path!)}
                  className="text-primary-foreground hover:text-gold transition-colors duration-300 font-medium text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="gold"
                className="w-full mt-2"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
