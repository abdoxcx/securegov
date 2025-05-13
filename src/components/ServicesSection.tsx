
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Wifi, 
  RefreshCw, 
  Laptop
} from "lucide-react";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "./LanguageSelector";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-light hover:border-blue-royal transition-all hover:shadow-lg">
      <div className="w-12 h-12 rounded-lg bg-blue-royal bg-opacity-10 flex items-center justify-center mb-4">
        <Icon className="text-blue-royal" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-blue-royal mb-2">{title}</h3>
      <p className="text-gray-dark">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
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

  const services = [
    {
      icon: ShieldCheck,
      titleKey: "securityAudit",
      descriptionKey: "securityAuditDesc",
    },
    {
      icon: Lock,
      titleKey: "antivirusProtection",
      descriptionKey: "antivirusProtectionDesc",
    },
    {
      icon: Database,
      titleKey: "secureBackup",
      descriptionKey: "secureBackupDesc",
    },
    {
      icon: Wifi,
      titleKey: "wifiSecurity",
      descriptionKey: "wifiSecurityDesc",
    },
    {
      icon: RefreshCw,
      titleKey: "updatesManagement",
      descriptionKey: "updatesManagementDesc",
    },
    {
      icon: Laptop,
      titleKey: "trainingAwareness",
      descriptionKey: "trainingAwarenessDesc",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-royal mb-4">{getTranslation(language, "ourServices")}</h2>
          <p className="text-gray-dark max-w-2xl mx-auto">
            {getTranslation(language, "servicesDescription")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={getTranslation(language, service.titleKey as any)}
              description={getTranslation(language, service.descriptionKey as any)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            {getTranslation(language, "exploreAllServices")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
