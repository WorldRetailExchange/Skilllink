import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-r from-blue to-yellow text-white flex items-center justify-center rounded-full shadow-md">
                <span className="text-xl">🎓</span>
              </div>
              <span className="text-2xl font-bold text-white">SkillLink</span>
            </div>
            <p className="text-white/80 mb-6">
              A playful world where students build skills, explore passions & connect with mentors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-blue/20 hover:bg-blue text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue/20 hover:bg-blue text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-yellow/20 hover:bg-yellow text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-pink/20 hover:bg-pink text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">For Students</h3>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-white/80 hover:text-blue transition">Student Portfolio</a></li>
              <li><a href="#features" className="text-white/80 hover:text-yellow transition">Skill Badges & Points</a></li>
              <li><a href="#events" className="text-white/80 hover:text-blue transition">Find Events</a></li>
              <li><a href="#tutors" className="text-white/80 hover:text-pink transition">Connect with Tutors</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-yellow transition">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">For Parents & Schools</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-blue transition">Safety & Privacy</a></li>
              <li><a href="#" className="text-white/80 hover:text-yellow transition">Provider Verification</a></li>
              <li><a href="#" className="text-white/80 hover:text-pink transition">School Programs</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue transition">Parent Dashboard</a></li>
              <li><a href="#" className="text-white/80 hover:text-yellow transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Join Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-yellow transition">Become a Tutor</a></li>
              <li><a href="#" className="text-white/80 hover:text-pink transition">Host Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue transition">School Partnership</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-pink transition">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-yellow transition">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-blue via-yellow to-pink"></div>
          <div className="pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80 mb-4 md:mb-0">
                &copy; {currentYear} SkillLink. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/80 hover:text-blue text-sm transition">Terms of Service</a>
                <a href="#" className="text-white/80 hover:text-yellow text-sm transition">Privacy Policy</a>
                <a href="#" className="text-white/80 hover:text-pink text-sm transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
