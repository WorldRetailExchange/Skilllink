const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-primary text-white flex items-center justify-center rounded-md">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span className="text-xl font-semibold text-white font-['Poppins']">SkillLink</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting students with extracurricular activities and tutoring opportunities for holistic development.
            </p>
            <div className="flex space-x-4">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Features</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">For Students</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">For Parents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">For Providers</a></li>
              <li><a href="#environmental" className="text-gray-400 hover:text-white transition">Environmental Initiative</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Provider Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Partner Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} SkillLink. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
