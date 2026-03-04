import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 smooth-transition",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-gradient hover:opacity-80 smooth-transition"
        >
          Omar ALAOUI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="text-foreground hover:text-primary smooth-transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-foreground hover:text-primary smooth-transition"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="text-foreground hover:text-primary smooth-transition"
          >
            Services
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="text-foreground hover:text-primary smooth-transition"
          >
            Skills
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "work")}
            className="text-foreground hover:text-primary smooth-transition"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-foreground hover:text-primary smooth-transition"
          >
            Contact
          </a>
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 text-foreground hover:text-primary smooth-transition">
            EN
          </button>
          <button className="p-2 text-foreground hover:text-primary smooth-transition">
            FR
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary smooth-transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-foreground hover:text-primary smooth-transition py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-foreground hover:text-primary smooth-transition py-2"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="text-foreground hover:text-primary smooth-transition py-2"
            >
              Services
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="text-foreground hover:text-primary smooth-transition py-2"
            >
              Skills
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="text-foreground hover:text-primary smooth-transition py-2"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-foreground hover:text-primary smooth-transition py-2"
            >
              Contact
            </a>
            <div className="flex gap-3 pt-4 border-t border-border">
              <button className="text-foreground hover:text-primary smooth-transition">
                EN
              </button>
              <button className="text-foreground hover:text-primary smooth-transition">
                FR
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
