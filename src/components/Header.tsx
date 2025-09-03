import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-7 w-7 text-cerebral-blue" />
            <div className="text-lg font-semibold text-gray-900">
              CerebralEdge
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm text-cerebral-text-gray hover:text-cerebral-blue transition-colors">
              About Us
            </a>
            <a href="#problems" className="text-sm text-cerebral-text-gray hover:text-cerebral-blue transition-colors">
              Problems We Solve
            </a>
            <a href="#why-us" className="text-sm text-cerebral-text-gray hover:text-cerebral-blue transition-colors">
              Why Us
            </a>
            <a href="#services" className="text-sm text-cerebral-text-gray hover:text-cerebral-blue transition-colors">
              Our Services
            </a>
            <Button 
              className="bg-cerebral-blue hover:bg-cerebral-blue/90 text-white px-5 py-2 text-sm font-medium rounded-md"
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