import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemsSection from "@/components/ProblemsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProblemsSection />
      <WhyUsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
