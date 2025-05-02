import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const featureItems = [
  {
    icon: "search",
    title: "Smart Discovery",
    description: "Personalized activity recommendations based on student interests, age, and location."
  },
  {
    icon: "star",
    title: "Verified Providers",
    description: "Only qualified, vetted tutors and activity providers with transparent reviews."
  },
  {
    icon: "calendar-alt",
    title: "Easy Scheduling",
    description: "Book sessions, manage multiple activities, and track availability in one place."
  },
  {
    icon: "users",
    title: "Community Insights",
    description: "Learn from peer reviews and see which activities are trending in your area."
  },
  {
    icon: "shield-alt",
    title: "Secure Messaging",
    description: "Direct, safe communication between parents, students, and activity providers."
  },
  {
    icon: "chart-line",
    title: "Progress Tracking",
    description: "Monitor skill development and achievement milestones for each activity."
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to discover and engage with extracurricular opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("up", "tween", 0.1 + index * 0.1, 1)}
            >
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <i className={`fas fa-${feature.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
