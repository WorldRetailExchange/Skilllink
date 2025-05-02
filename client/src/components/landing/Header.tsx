import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-r from-cyan to-gold text-white flex items-center justify-center rounded-full shadow-md">
              <span className="text-xl">🎓</span>
            </div>
            <span className="text-2xl font-bold text-navy">SkillLink</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <a href="#features" className="text-base font-medium text-navy hover:text-cyan transition-all duration-300 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#portfolio" className="text-base font-medium text-navy hover:text-gold transition-all duration-300 relative group">
              Student Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#events" className="text-base font-medium text-navy hover:text-pink transition-all duration-300 relative group">
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#tutors" className="text-base font-medium text-navy hover:text-cyan transition-all duration-300 relative group">
              Find Tutors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="#join-beta">
              <Button className="bg-cyan hover:bg-cyan/90 text-navy font-semibold rounded-full px-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Join the Beta
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-pink" />
            ) : (
              <Menu size={24} className="text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <a
                href="#features"
                className="flex items-center text-navy hover:text-cyan py-3 transform hover:translate-x-2 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <div className="w-8 h-8 bg-cyan/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">✨</span>
                </div>
                <span className="font-medium">Features</span>
              </a>
              <a
                href="#portfolio"
                className="flex items-center text-navy hover:text-gold py-3 transform hover:translate-x-2 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">🎓</span>
                </div>
                <span className="font-medium">Student Portfolio</span>
              </a>
              <a
                href="#events"
                className="flex items-center text-navy hover:text-pink py-3 transform hover:translate-x-2 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <div className="w-8 h-8 bg-pink/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">🎟️</span>
                </div>
                <span className="font-medium">Events</span>
              </a>
              <a
                href="#tutors"
                className="flex items-center text-navy hover:text-cyan py-3 transform hover:translate-x-2 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <div className="w-8 h-8 bg-cyan/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">👨‍🏫</span>
                </div>
                <span className="font-medium">Find Tutors</span>
              </a>
              <div className="pt-4 mt-2">
                <a href="#join-beta" onClick={toggleMobileMenu}>
                  <Button className="w-full bg-cyan text-navy font-semibold rounded-full py-5 shadow-md">
                    Join the Beta
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
