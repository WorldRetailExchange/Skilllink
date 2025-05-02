import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const audienceGroups = [
  {
    emoji: "👩‍🎓",
    title: "Students",
    color: "pink",
    benefits: [
      "Discover activities matching your interests",
      "Find qualified tutors for academic support",
      "Build a portfolio of skills and achievements"
    ]
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Parents",
    color: "gold",
    benefits: [
      "Find verified, quality providers in one place",
      "Manage all activities and schedules centrally",
      "Track your child's progress and engagement"
    ]
  },
  {
    emoji: "👨‍🏫",
    title: "Activity Providers",
    color: "cyan",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
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
              className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("up", "tween", 0.1 + index * 0.1, 1)}
            >
              <div className={group.color === "pink" 
                ? "absolute top-0 left-0 right-0 h-2 bg-pink" 
                : group.color === "gold" 
                  ? "absolute top-0 left-0 right-0 h-2 bg-gold" 
                  : "absolute top-0 left-0 right-0 h-2 bg-cyan"}>
              </div>
              <div className="flex items-center mb-8">
                <div className={group.color === "pink" 
                  ? "h-16 w-16 rounded-full flex items-center justify-center shadow-md text-4xl mr-4 bg-gradient-to-br from-pink to-white/50" 
                  : group.color === "gold" 
                    ? "h-16 w-16 rounded-full flex items-center justify-center shadow-md text-4xl mr-4 bg-gradient-to-br from-gold to-white/50" 
                    : "h-16 w-16 rounded-full flex items-center justify-center shadow-md text-4xl mr-4 bg-gradient-to-br from-cyan to-white/50"}>
                  <span>{group.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className={group.color === "pink" 
                      ? "bg-pink/10 p-2 rounded-full mt-0.5 mr-3" 
                      : group.color === "gold" 
                        ? "bg-gold/10 p-2 rounded-full mt-0.5 mr-3" 
                        : "bg-cyan/10 p-2 rounded-full mt-0.5 mr-3"}>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        className={group.color === "pink" 
                          ? "h-4 w-4 text-pink" 
                          : group.color === "gold" 
                            ? "h-4 w-4 text-gold" 
                            : "h-4 w-4 text-cyan"} 
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600">{benefit}</p>
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-transparent to-gray-100 rounded-full opacity-50"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
