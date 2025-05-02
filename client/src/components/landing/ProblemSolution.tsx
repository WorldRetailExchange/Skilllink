import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const ProblemSolution = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
            The Extracurricular Discovery Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding the right activities for skill development shouldn't be complicated
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="bg-red-50 rounded-xl p-8 shadow-md"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <div className="flex items-start mb-6">
              <div className="bg-red-100 p-3 rounded-full text-red-500 mr-4">
                <i className="fas fa-exclamation-circle text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">The Problem</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                <p>Students and parents struggle to find quality extracurricular activities</p>
              </li>
              <li className="flex">
                <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                <p>Discovering tutors and skill coaches requires excessive research and word-of-mouth</p>
              </li>
              <li className="flex">
                <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                <p>No centralized platform to compare options, reviews, and availability</p>
              </li>
              <li className="flex">
                <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                <p>Activity providers struggle to reach their target audience efficiently</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-green-50 rounded-xl p-8 shadow-md"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <div className="flex items-start mb-6">
              <div className="bg-[#10b981] p-3 rounded-full text-white mr-4">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Our Solution</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3"></i>
                <p>A comprehensive platform connecting students to verified activity providers</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3"></i>
                <p>Search by location, interest, age group, and availability</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3"></i>
                <p>Ratings and reviews from real students and parents</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#059669] mt-1 mr-3"></i>
                <p>Simple discovery and enrollment process with direct provider communication</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
