import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="bg-light py-16 md:py-20 overflow-hidden relative">
      {/* Subtle background pattern for visual interest */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Q0IzRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6TTQyIDEyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6bS0xOCAwaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6TTMyIDEyaDF2NGgtMXYtNHptMTYgMTZoMXY0aC0xdi00em0tOCAwaDR2MWgtNHYtMXptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6bS0xOC0yaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6TTM0IDM2aDR2MWgtNHYtMXptMCAxOGgxdjRoLTF2LTR6bS0xOCAwaDF2NGgtMXYtNHptMCAyaDR2MWgtNHYtMXpt0/"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content with improved layout */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Content Column */}
          <motion.div 
            className="md:w-1/2 md:pr-8 lg:pr-12 mb-8 md:mb-0"
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block mb-1">Discover, learn, and</span>
              <span className="block">connect with <span className="text-blue font-extrabold">SkillLink</span></span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The all-in-one platform that helps students ages 10-18 find activities, tutors, and build their personal learning portfolios.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="#join-beta" id="join-beta">
                <Button size="lg" className="bg-yellow hover:bg-yellow/90 text-navy font-semibold px-8 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Join the Beta
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="bg-white border-2 border-blue hover:border-pink hover:bg-white/90 text-navy px-8 py-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                  Learn More
                </Button>
              </a>
            </motion.div>
            
            {/* Stats and USPs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray text-center">
                <div className="font-bold text-blue text-2xl">1,000+</div>
                <div className="text-sm text-gray-600">Activities</div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray text-center">
                <div className="font-bold text-yellow text-2xl">5,000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray text-center col-span-2 md:col-span-1">
                <div className="font-bold text-pink text-2xl">400+</div>
                <div className="text-sm text-gray-600">Expert Tutors</div>
              </div>
            </div>
          </motion.div>
          
          {/* Image Column */}
          <motion.div 
            className="md:w-1/2 relative"
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-blue/10 rounded-full blur-xl" 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-yellow/10 rounded-full blur-xl" 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Main image with enhanced styling */}
              <motion.div 
                className="relative z-10 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue/10 via-transparent to-pink/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format&fit=crop&q=90" 
                  alt="Students collaborating on a project" 
                  className="w-full h-auto object-cover shadow-md" 
                  loading="eager"
                />
              </motion.div>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all border-l-3 border-blue"
                  variants={fadeIn("up", "tween", 0.4, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue/10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-lg">🏆</span>
                    </div>
                    <h3 className="font-medium text-navy text-sm">Learning Portfolio</h3>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all border-l-3 border-yellow"
                  variants={fadeIn("up", "tween", 0.5, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow/10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-lg">🔍</span>
                    </div>
                    <h3 className="font-medium text-navy text-sm">Events Marketplace</h3>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all border-l-3 border-pink"
                  variants={fadeIn("up", "tween", 0.6, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-pink/10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-lg">🎯</span>
                    </div>
                    <h3 className="font-medium text-navy text-sm">Skill Badges</h3>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all border-l-3 border-blue"
                  variants={fadeIn("up", "tween", 0.7, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue/10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-lg">🤝</span>
                    </div>
                    <h3 className="font-medium text-navy text-sm">Tutor Discovery</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
