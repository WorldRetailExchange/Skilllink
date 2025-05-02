import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import CoreFeatures from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import EnvironmentalInitiative from "@/components/landing/EnvironmentalInitiative";
import TargetAudience from "@/components/landing/TargetAudience";
import CallToAction from "@/components/landing/CallToAction";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { SectionDivider } from "@/components/ui/section-divider";

// Import AOS library for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);
  
  return (
    <div className="antialiased text-gray-700 bg-white min-h-screen overflow-hidden">
      <Helmet>
        <title>SkillLink - Build Skills, Explore Passions & Connect with Mentors</title>
        <meta name="description" content="SkillLink is a playful world where students (ages 10-18) build skills, explore passions & connect with mentors through events, tutoring, and skill badges." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        
        {/* Core Features with section divider handled internally */}
        <CoreFeatures />
        
        {/* Section transitions between other components */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="wave" position="top" className="text-gray-50" />
          </div>
          <Features />
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="angle" position="top" className="text-white" />
          </div>
          <HowItWorks />
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="curve" position="top" className="text-gray-50" />
          </div>
          <div data-aos="fade-up">
            <Testimonials />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="wave" position="top" className="text-white" />
          </div>
          <div data-aos="fade-up">
            <EnvironmentalInitiative />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="angle" position="top" className="text-gray-50" />
          </div>
          <div data-aos="fade-up">
            <TargetAudience />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="curve" position="top" className="text-white" />
          </div>
          <div data-aos="zoom-in">
            <CallToAction />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0">
            <SectionDivider type="wave" position="top" className="text-gray-50" />
          </div>
          <Contact />
        </div>
      </main>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}
