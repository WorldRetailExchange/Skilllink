import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    number: 1,
    title: "Search & Discover",
    description: "Browse activities by category, location, and availability or take our matching quiz."
  },
  {
    number: 2,
    title: "Connect & Inquire",
    description: "Message providers, check availability, and get answers to your questions."
  },
  {
    number: 3,
    title: "Book & Attend",
    description: "Schedule sessions, make payments, and start building new skills."
  }
];

const HowItWorks = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
            How SkillLink Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple process to connect students with their perfect activities
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Steps Desktop */}
          {!isMobile && (
            <div className="hidden md:block">
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-200"></div>
              <div className="grid grid-cols-3 gap-8 relative">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("up", "tween", 0.1 + index * 0.1, 1)}
                  >
                    <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 z-10">
                      {step.number}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Process Steps Mobile */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("right", "tween", 0.1 + index * 0.1, 1)}
              >
                <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
