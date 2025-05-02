import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary text-white flex items-center justify-center rounded-full">
              <span className="text-xl">🎓</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">SkillLink</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-base font-medium text-gray-600 hover:text-primary transition">
              Features
            </a>
            <a href="#portfolio" className="text-base font-medium text-gray-600 hover:text-primary transition">
              Student Portfolio
            </a>
            <a href="#events" className="text-base font-medium text-gray-600 hover:text-primary transition">
              Events
            </a>
            <a href="#tutors" className="text-base font-medium text-gray-600 hover:text-primary transition">
              Find Tutors
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              Join the Beta
            </Button>
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a
              href="#portfolio"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              Student Portfolio
            </a>
            <a
              href="#events"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              Events
            </a>
            <a
              href="#tutors"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              Find Tutors
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
              Join the Beta
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
