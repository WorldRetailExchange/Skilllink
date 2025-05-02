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
        isScrolled ? "bg-white border-b border-gray-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary text-white flex items-center justify-center rounded-md">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <span className="text-xl font-semibold text-gray-800 font-['Poppins']">SkillLink</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition">
              How It Works
            </a>
            <a href="#environmental" className="text-sm font-medium text-gray-600 hover:text-primary transition">
              Environmental Initiative
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary transition">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Early Access
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
          className="md:hidden bg-white border-b border-gray-200"
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
              href="#how-it-works"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              How It Works
            </a>
            <a
              href="#environmental"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              Environmental Initiative
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-primary py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Early Access
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
