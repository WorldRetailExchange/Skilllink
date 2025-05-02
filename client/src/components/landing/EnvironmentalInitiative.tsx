import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EnvironmentalInitiative = () => {
  return (
    <section id="environmental" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <img 
              src="https://images.unsplash.com/photo-1532667449560-72a95c8d381b?w=800&auto=format&fit=crop&q=80" 
              alt="Students participating in environmental workshop" 
              className="rounded-lg shadow-skilllink w-full" 
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mint/30 text-navy mb-4">
              <Leaf className="mr-2 h-4 w-4" /> Green Future Initiative
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Our Environmental Education Promise
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              SkillLink is partnering with environmental experts to bring sustainability workshops to schools across the region. For every school that joins our platform:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <CheckCircle2 className="text-mint mt-1 mr-3 h-5 w-5" />
                <p className="text-gray-700">We provide a free environmental awareness workshop for students</p>
              </li>
              <li className="flex">
                <CheckCircle2 className="text-mint mt-1 mr-3 h-5 w-5" />
                <p className="text-gray-700">Students receive hands-on sustainability training and certificates</p>
              </li>
              <li className="flex">
                <CheckCircle2 className="text-mint mt-1 mr-3 h-5 w-5" />
                <p className="text-gray-700">Schools can participate in our Green School Certification program</p>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-yellow hover:bg-yellow/90 text-navy font-medium shadow-md rounded-md"
                asChild
              >
                <a href="#contact">Partner with us</a>
              </Button>
              <a href="#contact" className="inline-flex items-center text-blue hover:text-blue/80 font-medium">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalInitiative;
