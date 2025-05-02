import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    number: 1,
    emoji: "🔍",
    title: "Discover & Match",
    description: "Take our fun matching quiz to find activities, tutors and events that match your interests and location.",
    color: "#FF5522",
    bgColor: "#FFF2EC"
  },
  {
    number: 2,
    emoji: "📅",
    title: "Book & Join",
    description: "Schedule sessions, sign up for events, and connect with tutors - all in just a few clicks!",
    color: "#FFCB05",
    bgColor: "#FFFBEB"
  },
  {
    number: 3,
    emoji: "🏆",
    title: "Learn & Earn",
    description: "Attend activities, collect SkillPoints, earn badges, and build your awesome student portfolio.",
    color: "#1A1A1A",
    bgColor: "#E5F3FF"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How SkillLink Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to your learning adventure!
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
                    <div 
                      className={`text-white h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 z-10`}
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-3xl">{step.emoji}</span>
                    </div>
                    <div 
                      className="rounded-xl p-6 shadow-md text-center border-t-4"
                      style={{ 
                        backgroundColor: step.bgColor,
                        borderColor: step.color 
                      }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                      
                      <div className="mt-6 flex justify-center">
                        <div 
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.number}
                        </div>
                      </div>
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
                <div 
                  className="h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0 text-white"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div 
                  className="rounded-xl p-5 shadow-md flex-1 border-l-4"
                  style={{ 
                    backgroundColor: step.bgColor,
                    borderColor: step.color 
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                    <div 
                      className="h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>
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
