import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

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
              className="rounded-lg shadow-lg w-full" 
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#059669] bg-opacity-10 text-[#059669] mb-4">
              <i className="fas fa-leaf mr-2"></i> Green Future Initiative
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Poppins']">
              Our Environmental Education Promise
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              SkillLink is partnering with environmental experts to bring sustainability workshops to schools across the region. For every school that joins our platform:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3 text-xl"></i>
                <p className="text-gray-600">We provide a free environmental awareness workshop for students</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3 text-xl"></i>
                <p className="text-gray-600">Students receive hands-on sustainability training and certificates</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3 text-xl"></i>
                <p className="text-gray-600">Schools can participate in our Green School Certification program</p>
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-[#059669] hover:text-[#047857] font-medium">
              Learn more about our environmental partnership
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalInitiative;
