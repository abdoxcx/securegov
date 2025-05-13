
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSelector, { Language, getTranslation } from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("fr");

  // Écouter les changements de langue
  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setLanguage(customEvent.detail.language);
    };
    
    // Vérifier s'il y a une langue sauvegardée au chargement
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <div className="h-10 w-10 bg-blue-royal rounded-md flex items-center justify-center">
                <div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
                  <div className="h-6 w-6 bg-blue-royal rounded-md flex items-center justify-center">
                    {/* This creates a shield-like logo with zellige-inspired layers */}
                  </div>
                </div>
              </div>
            </Link>
            <div className="ml-2 flex flex-col">
              <Link to="/">
                <h1 className="text-xl font-bold text-blue-royal">SecureGov</h1>
                <p className="text-xs text-gray-dark">
                  {language === "fr" ? "La cybersécurité simplifiée" : "الأمن السيبراني المبسّط"}
                </p>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-gray-dark hover:text-blue-royal transition-colors font-medium"
            >
              {getTranslation(language, "services")}
            </a>
            <a 
              href="#why-choose" 
              className="text-gray-dark hover:text-blue-royal transition-colors font-medium"
            >
              {getTranslation(language, "whyChoose")}
            </a>
            <Link 
              to="/pricing" 
              className="text-gray-dark hover:text-blue-royal transition-colors font-medium"
            >
              {getTranslation(language, "pricing")}
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-dark hover:text-blue-royal transition-colors font-medium"
            >
              {getTranslation(language, "resources")}
            </Link>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              {getTranslation(language, "contact")}
            </a>
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-dark hover:text-blue-royal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a 
              href="#services" 
              className="block text-gray-dark hover:text-blue-royal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "services")}
            </a>
            <a 
              href="#why-choose" 
              className="block text-gray-dark hover:text-blue-royal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "whyChoose")}
            </a>
            <Link 
              to="/pricing"
              className="block text-gray-dark hover:text-blue-royal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "pricing")}
            </Link>
            <Link 
              to="/resources"
              className="block text-gray-dark hover:text-blue-royal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "resources")}
            </Link>
            <a 
              href="#contact" 
              className="block btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "contact")}
            </a>
            <div className="pt-2">
              <LanguageSelector />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
