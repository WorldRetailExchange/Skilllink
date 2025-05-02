import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const audienceGroups = [
  {
    icon: "user-graduate",
    title: "Students",
    benefits: [
      "Discover activities matching your interests",
      "Find qualified tutors for academic support",
      "Build a portfolio of skills and achievements"
    ]
  },
  {
    icon: "users",
    title: "Parents",
    benefits: [
      "Find verified, quality providers in one place",
      "Manage all activities and schedules centrally",
      "Track your child's progress and engagement"
    ]
  },
  {
    icon: "chalkboard-teacher",
    title: "Activity Providers",
    benefits: [
      "Reach more students without marketing costs",
      "Simplify scheduling and communication",
      "Build your reputation through verified reviews"
    ]
  }
];

const TargetAudience = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
            Who Benefits from SkillLink?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A platform designed to serve the entire educational ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceGroups.map((group, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("up", "tween", 0.1 + index * 0.1, 1)}
            >
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <i className={`fas fa-${group.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{group.title}</h3>
              <ul className="space-y-3">
                {group.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <p className="text-gray-600">{benefit}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
