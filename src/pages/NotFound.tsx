
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Language, getTranslation } from "../components/LanguageSelector";

const NotFound = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    }
    
    // Listen for language changes
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setLanguage(customEvent.detail.language);
    };
    
    document.addEventListener("languageChange", handleLanguageChange);
    
    return () => {
      document.removeEventListener("languageChange", handleLanguageChange);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {getTranslation(language, "pageNotFound")}
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {getTranslation(language, "returnToHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
