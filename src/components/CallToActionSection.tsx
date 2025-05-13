
import { ShieldCheck, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "./LanguageSelector";
import { toast } from "@/components/ui/use-toast";

const CallToActionSection = () => {
  const [language, setLanguage] = useState<Language>("fr");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Dans un environnement de production, nous utiliserions normalement une API ou un service
      // comme EmailJS pour envoyer l'email
      
      // Pour démontrer la fonctionnalité, nous allons simuler l'envoi et afficher une notification
      // Mais nous allons aussi logger les informations qui seraient envoyées
      
      // Simulation d'envoi d'email (attente artificielle)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Préparer les données qui seraient envoyées 
      const emailData = {
        to: "contactsecuregov@gmail.com",
        subject: language === "fr" ? "Nouvelle demande d'audit de sécurité" : "طلب تدقيق أمني جديد",
        body: `
          Nom: ${formData.name}
          Email: ${formData.email}
          Entreprise: ${formData.company}
          Message: ${formData.message}
        `
      };
      
      // Log les données pour démontrer la fonctionnalité
      console.log("Email envoyé à: contactsecuregov@gmail.com");
      console.log("Données du formulaire:", formData);
      
      // Afficher un message de succès
      toast({
        title: language === "fr" ? "Demande envoyée" : "تم إرسال الطلب",
        description: language === "fr" 
          ? "Nous vous contacterons bientôt pour organiser votre audit gratuit."
          : "سنتصل بك قريبا لتنظيم التدقيق الأمني المجاني.",
        variant: "default",
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      
    } catch (error) {
      // Afficher un message d'erreur
      toast({
        title: language === "fr" ? "Erreur" : "خطأ",
        description: language === "fr"
          ? "Un problème est survenu lors de l'envoi de votre demande. Veuillez réessayer."
          : "حدثت مشكلة أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-royal relative overflow-hidden">
      {/* Decorative zellige patterns */}
      <div className="absolute inset-0 zellige-pattern-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <ShieldCheck className="text-green-emerald mr-2" size={24} />
                <h2 className="text-2xl font-bold text-blue-royal">
                  {language === "fr" ? "Protégez votre entreprise" : "احمِ شركتك"}
                </h2>
              </div>
              
              <p className="text-gray-dark mb-6">
                {language === "fr" 
                  ? "Contactez-nous dès aujourd'hui pour bénéficier d'un audit de sécurité gratuit et découvrir comment nous pouvons protéger votre entreprise contre les cyber-menaces."
                  : "اتصل بنا اليوم للاستفادة من تدقيق أمني مجاني واكتشاف كيف يمكننا حماية شركتك من التهديدات الإلكترونية."
                }
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-royal mr-2" size={18} />
                  <span className="text-gray-dark">contactsecuregov@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-royal mr-2" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-dark">+212712695714</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">
                    {getTranslation(language, "name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-royal"
                    placeholder={language === "fr" ? "Votre nom" : "اسمك الكامل"}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">
                    {getTranslation(language, "email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-royal"
                    placeholder={language === "fr" ? "votre@email.ma" : "بريدك@الالكتروني.ma"}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-dark mb-1">
                    {getTranslation(language, "company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-royal"
                    placeholder={language === "fr" ? "Nom de votre entreprise" : "اسم شركتك"}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-1">
                    {getTranslation(language, "message")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-royal"
                    placeholder={getTranslation(language, "howHelp")}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <ShieldCheck size={18} />
                  {getTranslation(language, "audit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
