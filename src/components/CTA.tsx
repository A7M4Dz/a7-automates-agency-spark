
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Calendar } from "lucide-react";

const CTA = () => {
  const features = [
    "Free consultation and workflow analysis",
    "Custom AI solution design",
    "Implementation and training included",
    "Ongoing support and optimization",
    "ROI guarantee within 90 days"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card rounded-3xl overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-12 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Stop wasting time on manual tasks. Let A7's AI agents handle the work 
                  while you focus on growing your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    See Case Studies
                  </Button>
                </div>
              </div>

              <div className="p-12 bg-white">
                <h3 className="text-2xl font-space font-semibold text-center mb-8 text-gray-900">
                  What You Get:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-2xl text-center">
                  <p className="text-lg font-medium text-blue-800">
                    <span className="font-bold">Limited Time Offer:</span> First 10 clients get 50% off implementation costs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;
