const WhyUsSection = () => {
  const differentiators = [
    {
      title: "Sell readiness, not hype",
      description: "We focus on AI Readiness—not buzzwords—so your investments compound."
    },
    {
      title: "Data engineering + Architecture focused", 
      description: "We specialize in platforms and data products—not dashboard churn."
    },
    {
      title: "Strategic advisory + Tactical execution",
      description: "Seasoned healthcare leaders paired with tactical, sleeves rolled up execution engineers."
    },
    {
      title: "Healthcare standards",
      description: "Deep Snowflake, FHIR, and OMOP expertise for interoperable data."
    }
  ];

  return (
    <section id="why-us" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-cerebral-blue font-medium mb-4">How We're Different</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built for dependable outcomes in healthcare data
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We prioritize durable foundations—governance, quality, and reusability—so analytics and AI can scale safely and responsibly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;