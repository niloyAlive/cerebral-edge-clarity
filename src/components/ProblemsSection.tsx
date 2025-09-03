const ProblemsSection = () => {
  const problems = [
    {
      title: "Tactical vs. Strategic Focus",
      description: "Data teams struggle to balance day-to-day tasks with the development of high-impact, strategic solutions."
    },
    {
      title: "Data Quality Issues", 
      description: "Ungoverned, inconsistent dashboards and reports and poor data quality, lead to flawed decision-making."
    },
    {
      title: "Lack of Interoperability",
      description: "Inconsistent data feed types and formats lead to manual, brittle, burdensome processes that are impossible to automate and scale."
    },
    {
      title: "No Single Source of Truth",
      description: "Data scattered across disparate systems prevent comprehensive understanding of operations, financials and patient outcomes."
    },
    {
      title: "Not ready for AI",
      description: "Inability to support multi-modal & multi-frequency data from an Enterprise Data Platform inhibits development of AI/ML solutions."
    }
  ];

  return (
    <section id="problems" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Problems we solve for Healthcare Data Leaders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;