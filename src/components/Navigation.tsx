import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Departments", id: "departments" },
    { name: "Success Stories", id: "success" },
    { name: "Clients", id: "clients" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hero-bg/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Lobbying and the Law Company Limited Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0" />
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-serif text-primary-foreground whitespace-nowrap">
                Lobbying and the Law Company Limited
              </h1>
              <span className="hidden lg:inline-block text-gold-light">|</span>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gold-light hidden lg:block whitespace-nowrap">
                Bangladesh's First Lobbying & Law Firm
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm xl:text-base text-primary-foreground hover:text-gold transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-primary-foreground hover:text-gold flex-shrink-0"
            >
              <Sun className="h-4 w-4 xl:h-5 xl:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 xl:h-5 xl:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
          <div className="lg:hidden flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-primary-foreground hover:text-gold h-8 w-8 sm:h-10 sm:w-10"
            >
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              className="text-primary-foreground p-1 sm:p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 sm:pb-6 animate-fade-in-up">
            <div className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm sm:text-base text-primary-foreground hover:text-gold transition-colors duration-300 font-medium text-left py-1"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="gold"
                className="w-full mt-2"
                size="lg"
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
