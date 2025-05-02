import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const CoreFeatures = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Three pillars of the SkillLink experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated approach to skill discovery and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            id="portfolio"
            className="bg-[#FFF2EC] rounded-xl p-8 shadow-md"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <div className="flex items-start mb-6">
              <div className="bg-primary p-4 rounded-full text-white mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Student Portfolio</h3>
            </div>
            <p className="text-gray-600 mb-6">Like LinkedIn for students - build your digital learning identity</p>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <p>Personal profile with school, interests and accomplishments</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <p>Track your skill badges and SkillPoints</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <p>Showcase class history and events attended</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <p>Gamified progress path to reward achievements</p>
              </li>
            </ul>
            <div className="mt-8 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&auto=format&fit=crop&q=80" 
                alt="Student profile example" 
                className="rounded-xl w-full h-48 object-cover border-4 border-white shadow-md" 
              />
            </div>
          </motion.div>

          <motion.div 
            id="events"
            className="bg-[#E5F3FF] rounded-xl p-8 shadow-md"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <div className="flex items-start mb-6">
              <div className="bg-[#FFCB05] p-4 rounded-full text-white mr-4">
                <span className="text-2xl">🎟️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Events Marketplace</h3>
            </div>
            <p className="text-gray-600 mb-6">Like BookMyShow - discover and join exciting local events</p>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-check-circle text-[#FFCB05] mt-1 mr-3"></i>
                <p>Browse workshops, meetups, coding camps and more</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#FFCB05] mt-1 mr-3"></i>
                <p>Book and join events with one click</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#FFCB05] mt-1 mr-3"></i>
                <p>Host your own events as clubs or individuals</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#FFCB05] mt-1 mr-3"></i>
                <p>Calendar integration for easy scheduling</p>
              </li>
            </ul>
            <div className="mt-8 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&auto=format&fit=crop&q=80" 
                alt="Events marketplace example" 
                className="rounded-xl w-full h-48 object-cover border-4 border-white shadow-md" 
              />
            </div>
          </motion.div>

          <motion.div 
            id="tutors"
            className="bg-[#FFF2EC] rounded-xl p-8 shadow-md"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            <div className="flex items-start mb-6">
              <div className="bg-[#1A1A1A] p-4 rounded-full text-white mr-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Tutor Discovery</h3>
            </div>
            <p className="text-gray-600 mb-6">Find qualified, verified local tutors for any subject or skill</p>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-check-circle text-[#1A1A1A] mt-1 mr-3"></i>
                <p>Search by subject, location, and availability</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#1A1A1A] mt-1 mr-3"></i>
                <p>View tutor profiles with reviews and ratings</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#1A1A1A] mt-1 mr-3"></i>
                <p>Book sessions directly through the platform</p>
              </li>
              <li className="flex">
                <i className="fas fa-check-circle text-[#1A1A1A] mt-1 mr-3"></i>
                <p>Safe, in-app communication system</p>
              </li>
            </ul>
            <div className="mt-8 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&auto=format&fit=crop&q=80" 
                alt="Tutor discovery example" 
                className="rounded-xl w-full h-48 object-cover border-4 border-white shadow-md" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
