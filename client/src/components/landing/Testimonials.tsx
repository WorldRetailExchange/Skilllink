import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

// Updated testimonials with avatar information
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of 2",
    rating: 5,
    avatar: {
      bgColor: "bg-gradient-to-r from-pink/70 to-gold/70",
      initials: "PS",
      emoji: "👩‍👧‍👦"
    },
    text: "SkillLink made it so easy to find swimming and music classes for my kids. The verified reviews gave me confidence in the quality of instruction."
  },
  {
    name: "Aditya Patel",
    role: "Dance Instructor",
    rating: 4.5,
    avatar: {
      bgColor: "bg-gradient-to-r from-cyan/70 to-pink/70",
      initials: "AP",
      emoji: "💃"
    },
    text: "As an instructor, I've been able to fill my classes faster and reach students I never would have connected with otherwise. The platform is incredibly user-friendly."
  },
  {
    name: "Ravi Kumar",
    role: "High School Student",
    rating: 5,
    avatar: {
      bgColor: "bg-gradient-to-r from-gold/70 to-chili/70",
      initials: "RK",
      emoji: "🎒"
    },
    text: "I found a coding bootcamp and a basketball coach through SkillLink. Being able to compare options side by side saved me so much time!"
  },
  {
    name: "Meera Joshi",
    role: "Art Teacher",
    rating: 5,
    avatar: {
      bgColor: "bg-gradient-to-r from-chili/70 to-cyan/70",
      initials: "MJ",
      emoji: "🎨"
    },
    text: "The platform has helped me connect with students passionate about art. I love how SkillLink makes scheduling and payments so seamless!"
  },
  {
    name: "Samir Khan",
    role: "Middle School Student",
    rating: 4.5,
    avatar: {
      bgColor: "bg-gradient-to-r from-cyan/70 to-gold/70",
      initials: "SK",
      emoji: "🏀"
    },
    text: "Thanks to SkillLink, I found an awesome basketball coach near my neighborhood. The SkillPoints system keeps me motivated to attend every session!"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("up", "tween", 0.1 + index * 0.1, 1)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative top border gradient */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${testimonial.avatar.bgColor}`}></div>

      {/* Quote mark decorative element */}
      <div className="absolute -right-4 -top-4 text-6xl text-gray-100 font-serif z-0 opacity-70">
        "
      </div>

      <div className="flex items-center mb-6 relative z-10">
        <div className={`h-14 w-14 rounded-full ${testimonial.avatar.bgColor} mr-4 flex items-center justify-center text-white font-semibold text-lg shadow-md`}>
          <span className="text-2xl">{testimonial.avatar.emoji}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="text-amber-400 mb-4 flex">
        {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
          <i key={i} className="fas fa-star mr-1"></i>
        ))}
        {testimonial.rating % 1 !== 0 && (
          <i className="fas fa-star-half-alt mr-1"></i>
        )}
      </div>
      
      <p className="text-gray-600 relative z-10 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      {/* Decorative accent */}
      <div className={`absolute -bottom-12 -left-12 w-24 h-24 rounded-full ${testimonial.avatar.bgColor} opacity-10`}></div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            What People Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-cyan">Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Early feedback from our beta testing community
          </p>
        </motion.div>

        {/* Desktop view: grid for larger screens */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Additional testimonials in a 2-column layout for larger screens */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <TestimonialCard key={index + 3} testimonial={testimonial} index={index + 3} />
          ))}
        </div>

        {/* Mobile view: carousel-like scrollable layout for smaller screens */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4">
          <div className="flex px-4 space-x-4 w-max">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[85vw] flex-shrink-0">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
