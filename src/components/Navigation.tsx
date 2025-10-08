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

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Left Section: Logo + Company Name */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0 max-w-[55%] md:max-w-[45%] lg:max-w-[35%] xl:max-w-[40%] overflow-hidden" onClick={() => scrollToSection("hero")}>
            <div className="bg-white rounded-full p-1.5 sm:p-2 shadow-md flex-shrink-0">
              <img src={logo} alt="Lobbying and the Law Company Limited Logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 object-contain" />
            </div>
            <div className="min-w-0 text-left flex flex-col justify-center">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-lg font-serif text-primary-foreground leading-tight whitespace-nowrap truncate">
                Lobbying and the Law Company Limited
              </h1>
              <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-gold-light hidden sm:block text-left whitespace-nowrap truncate leading-tight">
                Bangladesh's First Lobbying & Law Firm
              </p>
            </div>
          </div>

          {/* Center Section: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-5 flex-1 mx-2 xl:mx-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-xs xl:text-base transition-colors duration-300 font-medium whitespace-nowrap after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-left after:transition-transform after:duration-300 ${
                  activeSection === link.id
                    ? "text-gold after:scale-x-100"
                    : "text-primary-foreground hover:text-gold after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Section: Theme Toggle + Get Started Button */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-primary-foreground hover:text-gold lg:h-9 lg:w-9 xl:h-10 xl:w-10"
            >
              <Sun className="h-4 w-4 xl:h-5 xl:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 xl:h-5 xl:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="gold"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="whitespace-nowrap lg:h-9 lg:text-sm lg:px-4 xl:h-11 xl:text-base xl:px-8"
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
          <div className="lg:hidden absolute left-0 right-0 top-full bg-hero-bg/98 backdrop-blur-md shadow-2xl animate-fade-in-up z-[100]">
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-base transition-colors duration-300 font-medium text-center py-3 px-6 rounded-lg w-full ${
                      activeSection === link.id
                        ? "text-gold bg-gold/10"
                        : "text-primary-foreground hover:text-gold hover:bg-gold/5"
                    }`}
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
