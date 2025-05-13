
import { 
  Check, 
  UserCheck, 
  GraduationCap,
  Languages,
  Calculator,
  FileCheck 
} from "lucide-react";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "./LanguageSelector";

interface FeatureItemProps {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  language: Language;
}

const FeatureItem = ({ 
  icon: Icon, 
  titleKey,
  descriptionKey,
  language
}: FeatureItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <div className="w-10 h-10 rounded-full bg-green-emerald bg-opacity-10 flex items-center justify-center">
          <Icon className="text-green-emerald" size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-royal mb-1">{getTranslation(language, titleKey as any)}</h3>
        <p className="text-gray-dark">{getTranslation(language, descriptionKey as any)}</p>
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
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

  const features = [
    {
      icon: Check,
      titleKey: "simplicity",
      descriptionKey: "simplicityDesc",
    },
    {
      icon: UserCheck,
      titleKey: "localExpertise",
      descriptionKey: "localExpertiseDesc",
    },
    {
      icon: GraduationCap,
      titleKey: "educationalApproach",
      descriptionKey: "educationalApproachDesc",
    },
    {
      icon: Languages,
      titleKey: "bilingualSupport",
      descriptionKey: "bilingualSupportDesc",
    },
    {
      icon: Calculator,
      titleKey: "adaptedPricing",
      descriptionKey: "adaptedPricingDesc",
    },
    {
      icon: FileCheck,
      titleKey: "complianceReg",
      descriptionKey: "complianceRegDesc",
    },
  ];

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-gray-light relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 zellige-pattern-bg"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 zellige-pattern-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-blue-royal mb-4">{getTranslation(language, "whyChooseUs")}</h2>
          <p className="text-gray-dark max-w-2xl mx-auto">
            {getTranslation(language, "whyChooseUsDescription")}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-light">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index} 
                icon={feature.icon} 
                titleKey={feature.titleKey}
                descriptionKey={feature.descriptionKey}
                language={language}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-light max-w-xs">
            <div className="text-4xl font-bold text-blue-royal mb-2">94%</div>
            <p className="text-gray-dark">{getTranslation(language, "satisfactionRate")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-light max-w-xs">
            <div className="text-4xl font-bold text-blue-royal mb-2">+200</div>
            <p className="text-gray-dark">{getTranslation(language, "protectedCompanies")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-light max-w-xs">
            <div className="text-4xl font-bold text-blue-royal mb-2">0</div>
            <p className="text-gray-dark">{getTranslation(language, "majorIncident")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
