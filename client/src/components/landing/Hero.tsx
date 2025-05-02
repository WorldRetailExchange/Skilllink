import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="bg-light py-20 overflow-hidden relative">
      {/* Subtle background pattern for visual interest */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRkYzRTAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6TTQyIDEyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6bS0xOCAwaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6TTMyIDEyaDF2NGgtMXYtNHptMTYgMTZoMXY0aC0xdi00em0tOCAwaDR2MWgtNHYtMXptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6bS0xOC0yaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTggMGgxdjRoLTF2LTR6TTM0IDM2aDR2MWgtNHYtMXptMCAxOGgxdjRoLTF2LTR6bS0xOCAwaDF2NGgtMXYtNHptMCAyaDR2MWgtNHYtMXpt0/"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Image Column */}
          <motion.div 
            className="md:w-1/2 relative mb-10 md:mb-0 z-10"
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/10 rounded-full blur-xl" 
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
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/10 rounded-full blur-xl" 
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
                className="relative z-10 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 to-pink/30 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format&fit=crop&q=90" 
                  alt="Students collaborating on a project" 
                  className="w-full h-auto object-cover shadow-md" 
                  loading="eager"
                />
              </motion.div>
              
              {/* Decorative dots */}
              <div className="mt-4 flex justify-center space-x-2">
                <motion.div 
                  className="h-2 w-2 bg-cyan rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="h-2 w-2 bg-gold rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                />
                <motion.div 
                  className="h-2 w-2 bg-pink rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                />
                <motion.div 
                  className="h-2 w-2 bg-cyan rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="md:w-1/2 md:pr-12"
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A playful world where students <span className="text-pink font-extrabold">build skills</span>, <span className="text-gold font-extrabold">explore passions</span> & <span className="text-cyan font-extrabold">connect with mentors</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              SkillLink helps students (ages 10-18) discover tutors, join events, earn rewards, and build personal learning portfolios.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="#join-beta" id="join-beta">
                <Button size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Join the Beta
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="bg-white border-2 border-gold hover:border-pink hover:bg-white/90 text-navy px-8 py-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                  Learn More
                </Button>
              </a>
            </motion.div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-cyan group"
                variants={fadeIn("up", "tween", 0.4, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🏆</span>
                  </div>
                  <h3 className="font-medium text-navy">Build your learning identity</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-gold group"
                variants={fadeIn("up", "tween", 0.5, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🔍</span>
                  </div>
                  <h3 className="font-medium text-navy">Discover nearby activities</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-pink group"
                variants={fadeIn("up", "tween", 0.6, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🎯</span>
                  </div>
                  <h3 className="font-medium text-navy">Earn SkillPoints & badges</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-cyan group"
                variants={fadeIn("up", "tween", 0.7, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🤝</span>
                  </div>
                  <h3 className="font-medium text-navy">Connect with mentors</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
