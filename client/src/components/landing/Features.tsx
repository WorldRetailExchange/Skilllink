import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { CheckIcon } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
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
            <div className="bg-white rounded-xl overflow-hidden shadow-skilllink">
              <div className="h-2 bg-gold"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gold/10 p-4 rounded-full mr-4 shadow-md border-2 border-gold">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Skill Badges + Points</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Celebrate every achievement with our gamified learning system
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-cyan/10 flex items-center justify-center shadow-md border-2 border-cyan">
                      <span className="text-xl">📚</span>
                    </div>
                    <p className="text-sm font-medium text-navy">Reading</p>
                  </div>
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-gold/10 flex items-center justify-center shadow-md border-2 border-gold">
                      <span className="text-xl">🧪</span>
                    </div>
                    <p className="text-sm font-medium text-navy">Science</p>
                  </div>
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-pink/10 flex items-center justify-center shadow-md border-2 border-pink">
                      <span className="text-xl">🎨</span>
                    </div>
                    <p className="text-sm font-medium text-navy">Art</p>
                  </div>
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-cyan/10 flex items-center justify-center shadow-md border-2 border-cyan">
                      <span className="text-xl">⚽</span>
                    </div>
                    <p className="text-sm font-medium text-navy">Sports</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded-full mt-0.5 mr-3 text-gold">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Earn colorful badges for completing different activities and challenges</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded-full mt-0.5 mr-3 text-gold">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Collect SkillPoints to level up and unlock special rewards</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded-full mt-0.5 mr-3 text-gold">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Track progress with visual learning paths and milestone celebrations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded-full mt-0.5 mr-3 text-gold">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Share achievements with friends and on your student portfolio</p>
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
            <div className="bg-white rounded-xl overflow-hidden shadow-skilllink">
              <div className="h-2 bg-cyan"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan/10 p-4 rounded-full mr-4 shadow-md border-2 border-cyan">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Community & Collaboration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect offline with online discovery - find your tribe
                </p>
                
                <div className="relative mb-8 rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80" 
                    alt="Students collaborating" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                    <p className="font-medium text-sm text-navy">Local peer groups, clubs, and meetups in your area</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-cyan/10 p-2 rounded-full mt-0.5 mr-3 text-cyan">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Join student-led clubs and interest groups in your neighborhood</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan/10 p-2 rounded-full mt-0.5 mr-3 text-cyan">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Discover book circles, coding clubs, and creative workshops</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan/10 p-2 rounded-full mt-0.5 mr-3 text-cyan">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Create your own group and invite others with similar interests</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan/10 p-2 rounded-full mt-0.5 mr-3 text-cyan">
                      <CheckIcon size={16} />
                    </div>
                    <p className="text-gray-600">Safe, moderated spaces for students to collaborate and grow together</p>
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
