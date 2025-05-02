import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to the server
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: ""
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Have questions or want to partner with us? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              className="bg-gray-50 rounded-xl p-8 shadow-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <Select defaultValue={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger id="subject" className="w-full">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                      <SelectItem value="Environmental Initiative">Environmental Initiative</SelectItem>
                      <SelectItem value="Become a Provider">Become a Provider</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                    required
                  />
                </div>

                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition shadow-sm w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("left", "tween", 0.2, 1)}
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect with us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">hello@skilllink.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Office</h4>
                      <p className="text-gray-600">Innovation Hub, Mumbai, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-4">Follow us</h4>
                  <div className="flex space-x-4">
                    {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                      >
                        <i className={`fab fa-${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-[#059669]/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#059669] h-10 w-10 rounded-full flex items-center justify-center text-white mr-4">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Environmental Partnership</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Interested in our environmental education initiative? Contact our Green Future team for school workshops and sustainability programs.
                </p>
                <a href="mailto:environment@skilllink.io" className="inline-flex items-center text-[#059669] hover:text-[#047857] font-medium">
                  environment@skilllink.io
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
