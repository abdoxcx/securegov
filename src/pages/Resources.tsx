
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Book, FileText, Video, Download, ArrowRight } from "lucide-react";
import { Language, getTranslation } from "../components/LanguageSelector";

const Resources = () => {
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

  // Add console log to help debug translations
  console.log("Resources page rendering, language:", language);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="resources-hero" className="py-16 md:py-24 bg-blue-royal text-white relative overflow-hidden">
          {/* Decorative zellige patterns */}
          <div className="absolute inset-0 zellige-pattern-bg opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">{getTranslation(language, "cybersecResources")}</h1>
              <p className="text-xl mb-8">
                {getTranslation(language, "cybersecResourcesDescription")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-blue-royal">{getTranslation(language, "guidesAndDocs")}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Guide 1 */}
              <div className="bg-gray-light rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-royal flex items-center justify-center text-white">
                  <Book size={64} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">
                    {language === "fr" ? "Guide de sécurité pour les TPE" : "دليل الأمان للشركات الصغيرة جدا"}
                  </h3>
                  <p className="text-gray-dark mb-4">
                    {language === "fr" 
                      ? "Les fondamentaux de la sécurité informatique pour les très petites entreprises marocaines." 
                      : "أساسيات أمن المعلومات للشركات المغربية الصغيرة جدًا."}
                  </p>
                  <a href="#" className="flex items-center text-green-emerald hover:underline">
                    {language === "fr" ? "Télécharger le PDF" : "تنزيل ملف PDF"} <Download size={18} className={language === "ar" ? "mr-2" : "ml-2"} />
                  </a>
                </div>
              </div>
              
              {/* Guide 2 */}
              <div className="bg-gray-light rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-blue-light flex items-center justify-center text-white">
                  <FileText size={64} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">
                    {language === "fr" ? "Checklist de sécurité Wi-Fi" : "قائمة تدقيق أمان Wi-Fi"}
                  </h3>
                  <p className="text-gray-dark mb-4">
                    {language === "fr"
                      ? "10 étapes essentielles pour sécuriser votre réseau sans fil professionnel."
                      : "10 خطوات أساسية لتأمين شبكتك اللاسلكية المهنية."}
                  </p>
                  <a href="#" className="flex items-center text-green-emerald hover:underline">
                    {language === "fr" ? "Consulter la checklist" : "عرض قائمة التحقق"} <ArrowRight size={18} className={language === "ar" ? "mr-2" : "ml-2"} />
                  </a>
                </div>
              </div>
              
              {/* Guide 3 */}
              <div className="bg-gray-light rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-green-emerald flex items-center justify-center text-white">
                  <Video size={64} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">
                    {language === "fr" ? "Vidéos de formation" : "فيديوهات تدريبية"}
                  </h3>
                  <p className="text-gray-dark mb-4">
                    {language === "fr"
                      ? "Série de tutoriels vidéo pour former vos employés aux bonnes pratiques de sécurité."
                      : "سلسلة فيديوهات تعليمية لتدريب موظفيك على أفضل ممارسات الأمان."}
                  </p>
                  <a href="#" className="flex items-center text-green-emerald hover:underline">
                    {language === "fr" ? "Voir les vidéos" : "عرض الفيديوهات"} <ArrowRight size={18} className={language === "ar" ? "mr-2" : "ml-2"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-blue-royal">{getTranslation(language, "caseStudies")}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="font-bold mb-2">
                  {language === "fr" ? "Cabinet comptable à Casablanca" : "مكتب محاسبة في الدار البيضاء"}
                </h3>
                <p className="text-gray-dark mb-4">
                  {language === "fr"
                    ? "Comment nous avons sécurisé les données sensibles d'un cabinet comptable face aux ransomwares."
                    : "كيف قمنا بتأمين البيانات الحساسة لمكتب محاسبة ضد برامج الفدية."}
                </p>
                <a href="#" className="flex items-center text-green-emerald hover:underline">
                  {language === "fr" ? "Lire l'étude complète" : "قراءة الدراسة الكاملة"} <ArrowRight size={18} className={language === "ar" ? "mr-2" : "ml-2"} />
                </a>
              </div>
              
              {/* Case Study 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="font-bold mb-2">
                  {language === "fr" ? "Commerce de détail à Marrakech" : "متجر بيع بالتجزئة في مراكش"}
                </h3>
                <p className="text-gray-dark mb-4">
                  {language === "fr"
                    ? "Mise en place d'une solution de paiement sécurisée pour une chaîne de boutiques."
                    : "تركيب حل دفع آمن لسلسلة متاجر."}
                </p>
                <a href="#" className="flex items-center text-green-emerald hover:underline">
                  {language === "fr" ? "Lire l'étude complète" : "قراءة الدراسة الكاملة"} <ArrowRight size={18} className={language === "ar" ? "mr-2" : "ml-2"} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-blue-royal rounded-xl text-white p-8 text-center">
              <h2 className="mb-4">{getTranslation(language, "cantFind")}</h2>
              <p className="text-xl mb-6">
                {getTranslation(language, "cantFindDesc")}
              </p>
              <a href="#contact" className="btn-primary inline-block">
                {getTranslation(language, "contactUs")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
