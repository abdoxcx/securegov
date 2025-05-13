
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "./LanguageSelector";

const HeroSection = () => {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setLanguage(customEvent.detail.language);
    };
    
    // Check for saved language preference on load
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    }
    
    document.addEventListener("languageChange", handleLanguageChange);
    
    return () => {
      document.removeEventListener("languageChange", handleLanguageChange);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-light py-16 md:py-24">
      {/* Decorative zellige patterns */}
      <div className="absolute inset-0 zellige-pattern-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="font-bold text-blue-royal">
              {getTranslation(language, "simplifiedCybersec")}
            </h1>
            
            <p className="text-lg text-gray-dark">
              {getTranslation(language, "heroSubtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                <Shield size={20} />
                {getTranslation(language, "requestAudit")}
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center">
                {getTranslation(language, "discoverSolutions")}
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Shield illustration with zellige-inspired design */}
              <div className="w-64 h-64 mx-auto bg-white p-4 rounded-full shadow-lg">
                <div className="w-full h-full bg-blue-royal bg-opacity-10 rounded-full p-4 flex items-center justify-center">
                  <div className="relative w-48 h-48 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <Shield size={80} className="text-blue-royal" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-green-emerald border-opacity-20 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-emerald bg-opacity-10 rounded-lg transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-light bg-opacity-10 rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
        
        {/* Brief problem statement */}
        <div className="mt-16 md:mt-24 bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-light">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                {getTranslation(language, "problemTitle")}
              </h3>
              <p className="text-gray-dark">
                {getTranslation(language, "problemText")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-emerald mb-3">
                {getTranslation(language, "solutionTitle")}
              </h3>
              <p className="text-gray-dark">
                {getTranslation(language, "solutionText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
