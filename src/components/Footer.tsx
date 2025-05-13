
import { Shield, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "./LanguageSelector";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  console.log("Footer rendering, language:", language);

  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="text-green-emerald mr-2" size={24} />
              <h3 className="text-xl font-bold">SecureGov</h3>
            </div>
            <p className="text-sm text-gray-light mb-4">
              {getTranslation(language, "securitySolutions")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-light hover:text-green-emerald transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-green-emerald transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-green-emerald transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-green-emerald transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language, "services")}</h4>
            <ul className="space-y-2 text-gray-light">
              <li><a href="#services" className="hover:text-green-emerald transition-colors">{getTranslation(language, "securityAudit")}</a></li>
              <li><a href="#services" className="hover:text-green-emerald transition-colors">{getTranslation(language, "antivirusProtection")}</a></li>
              <li><a href="#services" className="hover:text-green-emerald transition-colors">{getTranslation(language, "secureBackup")}</a></li>
              <li><a href="#services" className="hover:text-green-emerald transition-colors">{getTranslation(language, "wifiSecurity")}</a></li>
              <li><a href="#services" className="hover:text-green-emerald transition-colors">{getTranslation(language, "trainingAwareness")}</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language, "resources")}</h4>
            <ul className="space-y-2 text-gray-light">
              <li><Link to="/resources" className="hover:text-green-emerald transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-green-emerald transition-colors">{getTranslation(language, "guidesAndDocs")}</Link></li>
              <li><Link to="/resources" className="hover:text-green-emerald transition-colors">{getTranslation(language, "caseStudies")}</Link></li>
              <li><Link to="/resources" className="hover:text-green-emerald transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language, "contact")}</h4>
            <ul className="space-y-2 text-gray-light">
              <li>contactsecuregov@gmail.com</li>
              <li>+212712695714</li>
              <li>{language === "fr" ? "Bureau 305, Technopark, Casablanca, Maroc" : "مكتب 305، تكنوبارك، الدار البيضاء، المغرب"}</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-light">
            &copy; {currentYear} SecureGov Maroc. {getTranslation(language, "copyright")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-light">
            <Link to="/legal-mentions" className="hover:text-green-emerald transition-colors">{getTranslation(language, "legalMentions")}</Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-green-emerald transition-colors">{getTranslation(language, "privacyPolicy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
