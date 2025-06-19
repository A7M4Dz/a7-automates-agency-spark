
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero" className="pt-20">
        <Hero />
      </div>
      <Services />
      <Comparison />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
