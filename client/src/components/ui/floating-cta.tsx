import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const scrollY = window.scrollY;
      
      // Determine scroll direction
      if (scrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      
      // Show button when 300px scrolled
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Remember last scroll position
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed z-50 bottom-5 left-0 right-0 flex justify-center md:hidden px-4">
          <motion.div 
            className="flex space-x-3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#join-beta">
              <Button 
                size="lg" 
                className="bg-cyan text-navy font-semibold px-6 rounded-full shadow-lg hover:bg-cyan/90 transition-all"
              >
                Join the Beta
              </Button>
            </a>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full bg-white border-2 border-gold h-12 w-12 shadow-lg hover:border-pink transition-all" 
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5 text-navy" />
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}