
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours Weekly",
      description: "Reclaim your time by automating repetitive tasks and focusing on strategic growth.",
      stat: "80% Average Time Reduction"
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description: "Cut down on manual labor costs and eliminate human errors that lead to expensive mistakes.",
      stat: "60% Cost Reduction"
    },
    {
      icon: TrendingUp,
      title: "Scale Without Limits",
      description: "AI agents work 24/7 without breaks, allowing your business to scale infinitely.",
      stat: "300% Capacity Increase"
    },
    {
      icon: Users,
      title: "Improve Customer Experience",
      description: "Provide instant responses and consistent service quality across all touchpoints.",
      stat: "95% Customer Satisfaction"
    },
    {
      icon: Shield,
      title: "Increase Accuracy",
      description: "Eliminate human errors and ensure consistent, reliable results every time.",
      stat: "99.9% Accuracy Rate"
    },
    {
      icon: Zap,
      title: "Instant Implementation",
      description: "Deploy AI solutions quickly and see immediate results in your operations.",
      stat: "48 Hour Setup"
    }
  ];

  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Why Choose <span className="gradient-text">A7 Automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations 
            with our AI-powered automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-space font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold gradient-text">
                  {benefit.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
              "A7's AI automation saved us over 30 hours per week. Our team can now focus on 
              strategic initiatives instead of repetitive tasks. The ROI was immediate."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                SM
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                <div className="text-gray-600">CEO, TechFlow Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
