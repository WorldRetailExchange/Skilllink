import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#E5F3FF] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              A playful world where students <span className="text-chili">build skills</span>, <span className="text-gold">explore passions</span> & <span className="text-pink">connect with mentors</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              SkillLink helps students (ages 10-18) discover tutors, join events, earn rewards, and build personal learning portfolios.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#join-beta" id="join-beta">
                <Button size="lg" className="bg-gradient-to-r from-chili to-pink text-white font-medium px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                  Join the Beta
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm border border-gray-300 hover:bg-white text-gray-700 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                  Learn More
                </Button>
              </a>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-2 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  <h3 className="font-medium text-gray-800">Build your learning identity</h3>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-2 flex items-center">
                  <span className="text-2xl mr-2">🔍</span>
                  <h3 className="font-medium text-gray-800">Discover activities around you</h3>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-2 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  <h3 className="font-medium text-gray-800">Celebrate effort with SkillPoints</h3>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-2 flex items-center">
                  <span className="text-2xl mr-2">🤝</span>
                  <h3 className="font-medium text-gray-800">Trusted by tutors, parents & schools</h3>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-gold rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-cyan rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80" 
                alt="Students collaborating on a project" 
                className="rounded-3xl shadow-xl w-full h-auto border-8 border-white relative z-10" 
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-gold h-3 rounded-full animate-pulse"></div>
              <div className="bg-pink h-3 rounded-full animate-pulse delay-100"></div>
              <div className="bg-cyan h-3 rounded-full animate-pulse delay-200"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
