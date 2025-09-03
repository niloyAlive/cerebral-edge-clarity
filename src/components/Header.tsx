import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-8 w-8 text-cerebral-blue" />
            <div className="text-xl font-semibold text-gray-900">
              CerebralEdge
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-cerebral-blue transition-colors">
              About Us
            </a>
            <a href="#problems" className="text-sm font-medium text-gray-700 hover:text-cerebral-blue transition-colors">
              Problems We Solve
            </a>
            <a href="#why-us" className="text-sm font-medium text-gray-700 hover:text-cerebral-blue transition-colors">
              Why Us
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-cerebral-blue transition-colors">
              Our Services
            </a>
            <Button 
              className="bg-cerebral-blue hover:bg-cerebral-blue/90 text-white px-6 py-2 text-sm font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request AI Readiness Assessment
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;