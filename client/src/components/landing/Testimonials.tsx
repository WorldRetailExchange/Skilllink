import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of 2",
    rating: 5,
    text: "SkillLink made it so easy to find swimming and music classes for my kids. The verified reviews gave me confidence in the quality of instruction."
  },
  {
    name: "Aditya Patel",
    role: "Dance Instructor",
    rating: 4.5,
    text: "As an instructor, I've been able to fill my classes faster and reach students I never would have connected with otherwise. The platform is incredibly user-friendly."
  },
  {
    name: "Ravi Kumar",
    role: "High School Student",
    rating: 5,
    text: "I found a coding bootcamp and a basketball coach through SkillLink. Being able to compare options side by side saved me so much time!"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Early feedback from our beta testing community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("up", "tween", 0.1 + index * 0.1, 1)}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <i className="fas fa-star-half-alt"></i>
                )}
              </div>
              <p className="text-gray-600">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
