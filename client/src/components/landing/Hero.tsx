import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#e9f8ff] to-[#fff9e6] py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:flex-wrap-reverse">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 relative z-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -left-20 w-40 h-40 bg-pink/10 rounded-full blur-3xl" 
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.3, 0.2, 0.3] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity 
              }}
            />

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A playful world where students <span className="text-chili font-extrabold">build skills</span>, <span className="text-gold font-extrabold">explore passions</span> & <span className="text-pink font-extrabold">connect with mentors</span>
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
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="#join-beta" id="join-beta">
                <Button size="lg" className="bg-gradient-to-r from-chili to-pink text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Join the Beta
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="bg-white/90 backdrop-blur-sm border-2 border-gray-300 hover:border-cyan hover:bg-white text-gray-700 px-8 py-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                  Learn More
                </Button>
              </a>
            </motion.div>
            
            <div className="mt-12 grid grid-cols-2 gap-5">
              <motion.div 
                className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-pink/5 group"
                variants={fadeIn("up", "tween", 0.4, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-3xl group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="font-medium text-gray-800">Build your learning identity</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-gold/5 group"
                variants={fadeIn("up", "tween", 0.5, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-3xl group-hover:scale-110 transition-transform">🔍</div>
                  <h3 className="font-medium text-gray-800">Discover activities around you</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-cyan/5 group"
                variants={fadeIn("up", "tween", 0.6, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-3xl group-hover:scale-110 transition-transform">🎯</div>
                  <h3 className="font-medium text-gray-800">Celebrate effort with SkillPoints</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-chili/5 group"
                variants={fadeIn("up", "tween", 0.7, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-3xl group-hover:scale-110 transition-transform">🤝</div>
                  <h3 className="font-medium text-gray-800">Trusted by tutors, parents & schools</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-8 relative z-0"
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Decorative circles */}
            <motion.div 
              className="absolute top-1/4 -right-16 w-32 h-32 bg-gold/40 rounded-full blur-3xl" 
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.3, 0.2, 0.3] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div 
              className="absolute -bottom-20 left-1/3 w-40 h-40 bg-cyan/30 rounded-full blur-3xl" 
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-gold rounded-full opacity-30 animate-pulse z-0"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-cyan rounded-full opacity-30 animate-pulse z-0"></div>
              
              <motion.div 
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                animate={{ 
                  boxShadow: [
                    "0 10px 50px rgba(250, 38, 160, 0.1)", 
                    "0 10px 50px rgba(248, 210, 16, 0.2)", 
                    "0 10px 50px rgba(47, 243, 224, 0.1)"
                  ]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1000&auto=format&fit=crop&q=90" 
                  alt="Students collaborating on a project" 
                  className="w-full h-auto object-cover" 
                  loading="eager"
                />
              </motion.div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <motion.div 
                className="bg-gold h-3 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="bg-pink h-3 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
              />
              <motion.div 
                className="bg-cyan h-3 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
