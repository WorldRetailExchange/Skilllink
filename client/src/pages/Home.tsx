import { Helmet } from "react-helmet";
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

export default function Home() {
  return (
    <div className="antialiased text-gray-700 bg-white min-h-screen">
      <Helmet>
        <title>SkillLink - Build Skills, Explore Passions & Connect with Mentors</title>
        <meta name="description" content="SkillLink is a playful world where students (ages 10-18) build skills, explore passions & connect with mentors through events, tutoring, and skill badges." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Comic+Neue:wght@400;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <CoreFeatures />
        <Features />
        <HowItWorks />
        <Testimonials />
        <EnvironmentalInitiative />
        <TargetAudience />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
