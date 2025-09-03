import { Target, Database, Users, Shield } from "lucide-react";

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Sell readiness, not hype",
      description: "We focus on AI Readiness—not buzzwords—so your investments compound."
    },
    {
      icon: Database,
      title: "Data engineering + Architecture focused", 
      description: "We specialize in platforms and data products—not dashboard churn."
    },
    {
      icon: Users,
      title: "Strategic advisory + Tactical execution",
      description: "Seasoned healthcare leaders paired with tactical, sleeves rolled up execution engineers."
    },
    {
      icon: Shield,
      title: "Healthcare standards",
      description: "Deep Snowflake, FHIR, and OMOP expertise for interoperable data."
    }
  ];

  return (
    <section id="why-us" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-cerebral-blue font-medium mb-3 uppercase tracking-wide">How We're Different</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built for dependable outcomes in healthcare data
          </h2>
          <p className="text-base text-cerebral-text-gray max-w-3xl mx-auto">
            We prioritize durable foundations—governance, quality, and reusability—so analytics and AI can scale safely and responsibly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <item.icon className="h-6 w-6 text-cerebral-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cerebral-text-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;