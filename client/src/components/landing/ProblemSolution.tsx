import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motion";
import { SectionDivider } from "@/components/ui/section-divider";

const CoreFeatures = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0">
        <SectionDivider type="curve" position="top" className="text-white" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-cyan/5 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-20 w-64 h-64 bg-pink/5 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Three pillars of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-cyan">SkillLink</span> experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated approach to skill discovery and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <motion.div 
            id="portfolio"
            className="bg-gradient-to-b from-white to-pink/10 rounded-xl p-8 shadow-xl relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink/80 to-pink/40 rounded-t-xl"></div>
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-r from-pink to-pink/70 p-5 rounded-xl text-white mr-4 shadow-lg">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">Student Portfolio</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">Like LinkedIn for students - build your digital learning identity</p>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-pink/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Personal profile with school, interests and accomplishments</p>
              </li>
              <li className="flex items-start">
                <div className="bg-pink/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Track your skill badges and SkillPoints</p>
              </li>
              <li className="flex items-start">
                <div className="bg-pink/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Showcase class history and events attended</p>
              </li>
              <li className="flex items-start">
                <div className="bg-pink/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Gamified progress path to reward achievements</p>
              </li>
            </ul>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=90" 
                alt="Student profile example" 
                className="rounded-xl w-full h-56 object-cover border-4 border-white shadow-lg" 
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            id="events"
            className="bg-gradient-to-b from-white to-gold/10 rounded-xl p-8 shadow-xl relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/80 to-gold/40 rounded-t-xl"></div>
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-r from-gold to-gold/70 p-5 rounded-xl text-white mr-4 shadow-lg">
                <span className="text-3xl">🎟️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">Events Marketplace</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">Like BookMyShow - discover and join exciting local events</p>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-gold/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Browse workshops, meetups, coding camps and more</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gold/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Book and join events with one click</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gold/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Host your own events as clubs or individuals</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gold/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Calendar integration for easy scheduling</p>
              </li>
            </ul>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&auto=format&fit=crop&q=90" 
                alt="Events marketplace example" 
                className="rounded-xl w-full h-56 object-cover border-4 border-white shadow-lg" 
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            id="tutors"
            className="bg-gradient-to-b from-white to-cyan/10 rounded-xl p-8 shadow-xl relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan/80 to-cyan/40 rounded-t-xl"></div>
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-r from-cyan to-cyan/70 p-5 rounded-xl text-white mr-4 shadow-lg">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">Tutor Discovery</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">Find qualified, verified local tutors for any subject or skill</p>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-cyan/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Search by subject, location, and availability</p>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">View tutor profiles with reviews and ratings</p>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Book sessions directly through the platform</p>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan/15 p-2 rounded-full mt-0.5 mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base">Safe, in-app communication system</p>
              </li>
            </ul>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=500&auto=format&fit=crop&q=90" 
                alt="Tutor discovery example" 
                className="rounded-xl w-full h-56 object-cover border-4 border-white shadow-lg" 
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <SectionDivider type="wave" position="bottom" className="text-white" />
      </div>
    </section>
  );
};

export default CoreFeatures;
