const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-[#FF5522] text-white flex items-center justify-center rounded-full">
                <span className="text-xl">🎓</span>
              </div>
              <span className="text-2xl font-bold text-white">SkillLink</span>
            </div>
            <p className="text-gray-400 mb-6">
              A playful world where students build skills, explore passions & connect with mentors.
            </p>
            <div className="flex space-x-4">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, index) => (
                <a key={index} href="#" className="bg-gray-800 hover:bg-[#FF5522] h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">For Students</h3>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-gray-400 hover:text-[#FF5522] transition">Student Portfolio</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-[#FF5522] transition">Skill Badges & Points</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-[#FF5522] transition">Find Events</a></li>
              <li><a href="#tutors" className="text-gray-400 hover:text-[#FF5522] transition">Connect with Tutors</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-[#FF5522] transition">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">For Parents & Schools</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">Safety & Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">Provider Verification</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">School Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">Parent Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Join Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">Become a Tutor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">Host Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">School Partnership</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#FF5522] transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF5522] transition">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-[#FF5522] via-[#FFCB05] to-[#E5F3FF]"></div>
          <div className="pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {currentYear} SkillLink. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#FF5522] text-sm transition">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#FF5522] text-sm transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#FF5522] text-sm transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
