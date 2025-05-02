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
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Leaf } from "lucide-react";

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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Contact Us</h2>
            <p className="text-xl text-gray-700">
              Have questions or want to partner with us? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              className="bg-gray border border-gray shadow-skilllink rounded-xl p-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              <h3 className="text-2xl font-semibold text-navy mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-navy text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-navy text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-navy text-sm font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <Select defaultValue={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger id="subject" className="w-full border-gray/50">
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
                  <label className="block text-navy text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent h-32"
                    required
                  />
                </div>

                <Button type="submit" className="bg-yellow hover:bg-yellow/90 text-navy font-medium py-2 px-6 rounded-md transition shadow-md w-full">
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
              <div className="bg-gray border border-gray shadow-skilllink rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-navy mb-6">Connect with us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue/10 p-3 rounded-full text-blue mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Email</h4>
                      <p className="text-gray-700">hello@skilllink.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow/10 p-3 rounded-full text-yellow mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Phone</h4>
                      <p className="text-gray-700">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink/10 p-3 rounded-full text-pink mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Office</h4>
                      <p className="text-gray-700">Innovation Hub, Mumbai, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-navy mb-4">Follow us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue/10 h-10 w-10 rounded-full flex items-center justify-center text-blue hover:bg-blue hover:text-white transition shadow-sm">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="bg-blue/10 h-10 w-10 rounded-full flex items-center justify-center text-blue hover:bg-blue hover:text-white transition shadow-sm">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="bg-yellow/10 h-10 w-10 rounded-full flex items-center justify-center text-yellow hover:bg-yellow hover:text-white transition shadow-sm">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="bg-pink/10 h-10 w-10 rounded-full flex items-center justify-center text-pink hover:bg-pink hover:text-white transition shadow-sm">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-mint/30 border border-mint rounded-xl p-8 shadow-skilllink">
                <div className="flex items-center mb-4">
                  <div className="bg-mint h-10 w-10 rounded-full flex items-center justify-center text-navy mr-4 shadow-sm">
                    <Leaf size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">Environmental Partnership</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Interested in our environmental education initiative? Contact our Green Future team for school workshops and sustainability programs.
                </p>
                <a href="mailto:environment@skilllink.io" className="inline-flex items-center text-blue hover:text-blue/80 font-medium">
                  environment@skilllink.io
                  <ArrowRight size={16} className="ml-2" />
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
