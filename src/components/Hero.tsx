
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-8">
            <Bot className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">AI-Powered Automation Agency</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 leading-tight">
            Save Time with{" "}
            <span className="gradient-text">AI Automation</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A7 eliminates manual tasks through intelligent automation and AI agents. 
            Transform your business operations and reclaim hours of your day.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-blue-600 mb-1">
                <Clock className="w-8 h-8" />
                80%
              </div>
              <p className="text-gray-600">Time Saved</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-blue-600 mb-1">
                <Zap className="w-8 h-8" />
                24/7
              </div>
              <p className="text-gray-600">AI Agents</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <p className="text-gray-600">Tasks Automated</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
              View Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
