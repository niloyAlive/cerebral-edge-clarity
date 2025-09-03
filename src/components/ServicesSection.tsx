import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Data Platform Strategy & Enablement",
      badges: ["High Demand", "Architecture", "Governance"],
      description: "We design sustainable, scalable Snowflake platforms with clear environments, guardrails, and cost controls.",
      features: [
        "Migration strategy from legacy SQL/EDW/Clarity/Caboodle etc.",
        "Environment design and setup (dev/test/UAT/prod) + cost optimization.",
        "Role‐based access controls, audit monitoring, and usage governance"
      ]
    },
    {
      title: "Data Product Development",
      badges: ["High Growth", "Reusability", "AI/ML Ready"],
      description: "Move beyond datasets to reusable, domain‐driven products with ownership, SLAs, and trust built‐in.",
      features: [
        "Blueprints: Claims, Encounters, Lab Results, Patient 360 insights",
        "Standard deliverables: metadata, SLA, ownership, trust score",
        "Clear semantic layer, query interfaces and self‐service enablement"
      ]
    },
    {
      title: "Data Interoperability & Exchange",
      badges: ["Massive Need", "Standards", "Partner Data"],
      description: "Build and operationalize standards‐based exchange to meet CMS/ONC requirements and partner integrations.",
      features: [
        "FHIR, HL7 interfaces and open data models (e.g. FHIR, OMOP)",
        "External API ingestion/publishing",
        "Vendor/partner data pipelines (e.g., AI/ML developers, Payers, HIEs)"
      ]
    },
    {
      title: "Data Quality Improvement",
      badges: ["Foundational", "Reliability", "Governance"],
      description: "Make trust measurable and continuous with DQ integrated into Snowflake pipelines and workflows.",
      features: [
        "Data Trust Scorecards",
        "DQ embedded into pipelines with logging and alerting",
        "DQ improvement and governance workflows"
      ]
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help healthcare organizations build trustworthy, reusable data products on Snowflake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.badges.map((badge, badgeIndex) => (
                  <Badge 
                    key={badgeIndex} 
                    variant="secondary" 
                    className="bg-gray-100 text-gray-700 text-xs font-medium"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 text-sm leading-relaxed flex items-start">
                    <span className="text-cerebral-blue mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;