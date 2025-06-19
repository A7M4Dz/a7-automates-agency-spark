import { Compare } from "@/components/ui/compare";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, User, Bot } from "lucide-react";

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            See the <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform hours of manual work into seconds of automated efficiency. 
            Experience the power of AI automation with A7.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Comparison Visual */}
            <div className="flex justify-center">
              <div className="glass-card p-8 rounded-3xl">
                <Compare
                  firstImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                  secondImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
                  firstImageClassName="object-cover object-center"
                  secondImageClassname="object-cover object-center"
                  className="h-[400px] w-[400px] rounded-2xl"
                  slideMode="hover"
                  autoplay={true}
                  autoplayDuration={3000}
                />
                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Manual Process
                  </span>
                  <span className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    AI Automation
                  </span>
                </div>
              </div>
            </div>

            {/* Comparison Stats */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Time Required</h3>
                          <p className="text-sm text-gray-600">Manual vs Automated</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Manual Task</span>
                        <span className="font-bold text-red-600">8 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">AI Automation</span>
                        <span className="font-bold text-green-600">2 minutes</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold gradient-text">240x faster</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Accuracy Rate</h3>
                          <p className="text-sm text-gray-600">Error reduction</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Manual Process</span>
                        <span className="font-bold text-orange-600">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">AI Automation</span>
                        <span className="font-bold text-green-600">99.9%</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold gradient-text">15% improvement</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 font-bold">$</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Cost Savings</h3>
                          <p className="text-sm text-gray-600">Monthly operational cost</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Manual Labor</span>
                        <span className="font-bold text-red-600">$5,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">AI Solution</span>
                        <span className="font-bold text-green-600">$500</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold gradient-text">90% savings</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
