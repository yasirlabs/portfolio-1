import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-4">
            <Mail className="text-primary h-6 w-6 flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-sm">Email</p>
              <a
                href="mailto:omar@example.com"
                className="text-foreground hover:text-primary smooth-transition"
              >
                @Omaralsouddahbi
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary h-6 w-6 flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-sm">Location</p>
              <p className="text-foreground">Morocco - Meknes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary h-6 w-6 flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-sm">Phone</p>
              <a
                href="tel:+212651405939"
                className="text-foreground hover:text-primary smooth-transition"
              >
                +(212) 651-405-939
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 py-8 border-y border-border">
          <a
            href="#"
            className="text-foreground hover:text-primary smooth-transition"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary smooth-transition"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary smooth-transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary smooth-transition"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 All rights reserved. Design & developed by Omar ALAOUI
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 smooth-transition"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
