import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Features = () => {
  return (
    <section id="features" className="bg-[#FFF2EC] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Build your learning journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most exciting parts of the SkillLink experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Badges + Points Feature */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#FF5522] to-[#FFCB05] h-3"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FFCB05] p-4 rounded-full text-white mr-4">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Skill Badges + Points</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Celebrate every achievement with our gamified learning system
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xl">📚</span>
                    </div>
                    <p className="text-sm font-medium">Reading</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xl">🧪</span>
                    </div>
                    <p className="text-sm font-medium">Science</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-xl">🎨</span>
                    </div>
                    <p className="text-sm font-medium">Art</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-xl">⚽</span>
                    </div>
                    <p className="text-sm font-medium">Sports</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-3">⭐</span>
                    <p>Earn colorful badges for completing different activities and challenges</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-3">⭐</span>
                    <p>Collect SkillPoints to level up and unlock special rewards</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-3">⭐</span>
                    <p>Track progress with visual learning paths and milestone celebrations</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-3">⭐</span>
                    <p>Share achievements with friends and on your student portfolio</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Community & Collaboration Feature */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#E5F3FF] to-[#1A1A1A] h-3"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-full text-white mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Community & Collaboration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect offline with online discovery - find your tribe
                </p>
                
                <div className="relative mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80" 
                    alt="Students collaborating" 
                    className="w-full h-48 object-cover rounded-lg shadow-md" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                    <p className="font-medium text-sm">Local peer groups, clubs, and meetups in your area</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] text-xl mr-3">⭐</span>
                    <p>Join student-led clubs and interest groups in your neighborhood</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] text-xl mr-3">⭐</span>
                    <p>Discover book circles, coding clubs, and creative workshops</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] text-xl mr-3">⭐</span>
                    <p>Create your own group and invite others with similar interests</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] text-xl mr-3">⭐</span>
                    <p>Safe, moderated spaces for students to collaborate and grow together</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
