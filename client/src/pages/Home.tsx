import { Helmet } from "react-helmet";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
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
        <title>SkillLink - Connecting Students to Extracurricular Activities</title>
        <meta name="description" content="SkillLink helps students find and connect with the perfect extracurricular activities, tutors, and skill-building opportunities in their community." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
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
