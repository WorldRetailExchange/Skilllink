import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Poppins']">
            Ready to Transform Extracurricular Discovery?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join our early access program and be the first to experience SkillLink's platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="border border-white hover:bg-white/10 text-white px-8">
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
