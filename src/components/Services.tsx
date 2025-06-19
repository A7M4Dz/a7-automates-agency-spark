import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, MessageSquare, Database, FileText, Calendar, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational agents that handle customer inquiries, book appointments, and provide 24/7 support.",
      features: ["Natural language processing", "Multi-channel integration", "Smart escalation"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline repetitive workflows and eliminate manual data entry across your business operations.",
      features: ["Task automation", "Data synchronization", "Error reduction"]
    },
    {
      icon: BarChart3,
      title: "Power BI Dashboards",
      description: "Automated reporting and data visualization with intelligent insights and real-time business intelligence.",
      features: ["Automated report generation", "Real-time data visualization", "Custom dashboard creation"]
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Automated data collection, cleaning, and analysis to provide actionable insights for your business.",
      features: ["Real-time processing", "Pattern recognition", "Predictive analytics"]
    },
    {
      icon: FileText,
      title: "Document Automation",
      description: "Generate, process, and manage documents automatically with AI-powered templates and workflows.",
      features: ["Template generation", "Content extraction", "Compliance checking"]
    },
    {
      icon: MessageSquare,
      title: "Communication Automation",
      description: "Automated email sequences, social media management, and customer communication workflows.",
      features: ["Personalized messaging", "Response automation", "Engagement tracking"]
    },
    {
      icon: Calendar,
      title: "Scheduling & Planning",
      description: "AI-powered scheduling systems that optimize calendars, resource allocation, and project timelines.",
      features: ["Smart scheduling", "Resource optimization", "Conflict resolution"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating custom AI agents and automation systems 
            that eliminate manual work and boost productivity across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-space font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
