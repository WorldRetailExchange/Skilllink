import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue via-yellow to-pink opacity-90"></div>
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=1200&auto=format&fit=crop&q=80")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to unlock your potential?
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Join our beta program today and be among the first to experience the SkillLink platform
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-skilllink border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-white text-4xl mb-3 group-hover:animate-bounce">🎯</div>
                <h3 className="text-white font-semibold mb-1">Build Profile</h3>
                <p className="text-white/70 text-sm">Create your learning identity</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-white text-4xl mb-3 group-hover:animate-bounce">🚀</div>
                <h3 className="text-white font-semibold mb-1">Discover Events</h3>
                <p className="text-white/70 text-sm">Find activities near you</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-white text-4xl mb-3 group-hover:animate-bounce">🏆</div>
                <h3 className="text-white font-semibold mb-1">Earn Rewards</h3>
                <p className="text-white/70 text-sm">Collect badges & points</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#join-beta">
                <Button size="lg" className="bg-yellow hover:bg-yellow/90 px-8 rounded-full w-full md:w-auto font-bold text-navy shadow-md transition-all duration-300">
                  Join the Beta
                </Button>
              </a>
              <a href="#contact">
              <Button size="lg" className="bg-yellow hover:bg-yellow/90 px-8 rounded-full w-full md:w-auto font-bold text-navy shadow-md transition-all duration-300">
                  Partner With Us
                </Button>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/70 text-sm">Already have an invite? <a href="#" className="text-white underline hover:text-blue transition-colors duration-300">Sign in here</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
