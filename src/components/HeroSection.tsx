import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Snowflake, Shield, TrendingUp, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-cerebral-blue text-white px-4 py-2 text-sm font-medium rounded-full">
              Pure-play Snowflake
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-900 px-4 py-2 text-sm font-medium rounded-full">
              Healthcare Focus
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-900 px-4 py-2 text-sm font-medium rounded-full">
              AI Readiness
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Snowflake Data Engineering for Healthcare
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            We modernize data platforms, build trusted, reusable data products, and make your organization ready for AI—without the buzzwords. Senior advisory plus tactical delivery, tailored for healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="bg-cerebral-blue hover:bg-cerebral-blue/90 text-white px-8 py-3 text-base font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request AI Readiness Assessment
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Snowflake className="h-12 w-12 text-cerebral-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud-native architecture</h3>
            <p className="text-gray-600">Design, guardrails, and governance on Snowflake.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-cerebral-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data trust built-in</h3>
            <p className="text-gray-600">Quality, lineage, and roles from day one.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-cerebral-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast, high-value wins</h3>
            <p className="text-gray-600">Targeted use cases that compound.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-cerebral-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI readiness</h3>
            <p className="text-gray-600">Clean, standardized assets for AI/ML.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;