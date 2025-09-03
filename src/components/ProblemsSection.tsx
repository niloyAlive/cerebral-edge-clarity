import { FileText, BarChart, Shuffle, Database, Brain } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: FileText,
      title: "Tactical vs. Strategic Focus",
      description: "Data teams struggle to balance day-to-day tasks with the development of high-impact, strategic solutions."
    },
    {
      icon: BarChart,
      title: "Data Quality Issues", 
      description: "Ungoverned, inconsistent dashboards and reports and poor data quality, lead to flawed decision-making."
    },
    {
      icon: Shuffle,
      title: "Lack of Interoperability",
      description: "Inconsistent data feed types and formats lead to manual, brittle, burdensome processes that are impossible to automate and scale."
    },
    {
      icon: Database,
      title: "No Single Source of Truth",
      description: "Data scattered across disparate systems prevent comprehensive understanding of operations, financials and patient outcomes."
    },
    {
      icon: Brain,
      title: "Not ready for AI",
      description: "Inability to support multi-modal & multi-frequency data from an Enterprise Data Platform inhibits development of AI/ML solutions."
    }
  ];

  return (
    <section id="problems" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          🔧 Problems we solve for Healthcare Data Leaders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <problem.icon className="h-6 w-6 text-cerebral-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-cerebral-text-gray leading-relaxed">
                    {problem.description}
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

export default ProblemsSection;