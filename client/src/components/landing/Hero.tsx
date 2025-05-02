import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 font-['Poppins']">
              Discover & Connect with <span className="text-primary">Extracurricular Activities</span> 
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              SkillLink helps students find and connect with the perfect extracurricular activities, tutors, and skill-building opportunities in their community.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6">
                Find Activities
              </Button>
              <Button size="lg" variant="outline" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6">
                Register as a Provider
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80" 
              alt="Students collaborating on extracurricular project" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
