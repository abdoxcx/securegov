
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
