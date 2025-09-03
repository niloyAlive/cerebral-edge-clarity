import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Modernize data platforms using Snowflake and cloud‑native tools.",
    "Establish foundational data quality and governance.",
    "Enable AI/ML readiness by cleaning and standardizing data assets.",
    "Deliver foundational, shareable data products for deep analytics and AI.",
    "Prioritize fast wins, high‑value use cases, and recurring engagement."
  ];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About us
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
          CerebralEdge is a hyper‑focused, high‑trust consulting partner dedicated to Snowflake data engineering for healthcare. Our approach is pragmatic, outcomes‑driven, and designed to de‑risk analytics and AI.
        </p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-cerebral-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;