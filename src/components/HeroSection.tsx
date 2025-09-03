import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, TrendingUp, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge className="bg-cerebral-blue text-white px-3 py-1 text-xs font-medium rounded-full">
              Pure-play Snowflake
            </Badge>
            <Badge variant="secondary" className="bg-cerebral-gray text-gray-700 px-3 py-1 text-xs font-medium rounded-full">
              Healthcare Focus
            </Badge>
            <Badge variant="secondary" className="bg-cerebral-gray text-gray-700 px-3 py-1 text-xs font-medium rounded-full">
              AI Readiness
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Snowflake Data Engineering for Healthcare
          </h1>

          {/* Description */}
          <p className="text-lg text-cerebral-text-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            We modernize data platforms, build trusted, reusable data products, and make your organization ready for AI—without the buzzwords. Senior advisory plus tactical delivery, tailored for healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Button 
              className="bg-cerebral-blue hover:bg-cerebral-blue/90 text-white px-6 py-2.5 text-sm font-medium rounded-md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request AI Readiness Assessment
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 text-sm font-medium rounded-md"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ⭐ Explore Services
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left">
            <div className="flex items-start mb-3">
              <Star className="h-6 w-6 text-cerebral-blue mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Cloud-native architecture</h3>
                <p className="text-sm text-cerebral-text-gray">Design, guardrails, and governance on Snowflake.</p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-start mb-3">
              <CheckCircle className="h-6 w-6 text-cerebral-blue mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Data trust built-in</h3>
                <p className="text-sm text-cerebral-text-gray">Quality, lineage, and roles from day one.</p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-start mb-3">
              <TrendingUp className="h-6 w-6 text-cerebral-blue mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Fast, high-value wins</h3>
                <p className="text-sm text-cerebral-text-gray">Targeted use cases that compound.</p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-start mb-3">
              <Target className="h-6 w-6 text-cerebral-blue mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">AI readiness</h3>
                <p className="text-sm text-cerebral-text-gray">Clean, standardized assets for AI/ML.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;