
import { User, MessageSquareQuote } from "lucide-react";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "./LanguageSelector";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  position, 
  company 
}: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-light relative">
      <MessageSquareQuote className="absolute top-4 right-4 text-blue-royal opacity-20" size={32} />
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-blue-royal flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <div className="ml-3">
            <div className="font-semibold text-blue-royal">{name}</div>
            <div className="text-sm text-gray-dark">
              {position}, {company}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-dark italic">{quote}</p>
    </div>
  );
};

const TestimonialsSection = () => {
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
  
  const testimonialsFr = [
    {
      quote: "SecureGov a transformé notre approche de la sécurité informatique. Leurs solutions sont simples à comprendre et vraiment efficaces pour une petite structure comme la nôtre.",
      name: "Karim Benali",
      position: "Directeur",
      company: "Artisanat Moderne SARL, Casablanca"
    },
    {
      quote: "Après une cyberattaque qui nous a coûté cher, SecureGov nous a aidés à reconstruire notre infrastructure avec une sécurité renforcée. Leur accompagnement en arabe a été très apprécié par notre équipe.",
      name: "Fatima Zahra El Mansouri",
      position: "Gérante",
      company: "Épices du Souss, Agadir"
    },
    {
      quote: "Le rapport qualité-prix est excellent. Nous bénéficions d'un niveau de protection que nous pensions réservé aux grandes entreprises, mais à un tarif adapté à notre PME.",
      name: "Youssef Tazi",
      position: "Responsable Administratif",
      company: "Solutions Médicales, Rabat"
    },
  ];
  
  const testimonialsAr = [
    {
      quote: "لقد غيرت SecureGov نهجنا في أمن المعلومات. حلولهم بسيطة الفهم وفعالة حقًا لهيكل صغير مثل شركتنا.",
      name: "كريم بنعلي",
      position: "مدير",
      company: "الحرف الحديثة ش.م.م، الدار البيضاء"
    },
    {
      quote: "بعد هجوم إلكتروني كلفنا الكثير، ساعدتنا SecureGov في إعادة بناء بنيتنا التحتية مع أمان معزز. كان دعمهم باللغة العربية محل تقدير كبير من فريقنا.",
      name: "فاطمة الزهراء المنصوري",
      position: "مديرة",
      company: "توابل سوس، أكادير"
    },
    {
      quote: "نسبة الجودة إلى السعر ممتازة. نحن نستفيد من مستوى حماية كنا نعتقد أنه مخصص للشركات الكبيرة، ولكن بسعر مناسب لشركتنا الصغيرة والمتوسطة.",
      name: "يوسف التازي",
      position: "مسؤول إداري",
      company: "حلول طبية، الرباط"
    },
  ];

  const testimonials = language === "fr" ? testimonialsFr : testimonialsAr;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-royal mb-4">{getTranslation(language, "testimonialsSectionTitle")}</h2>
          <p className="text-gray-dark max-w-2xl mx-auto">
            {getTranslation(language, "testimonialsDescription")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
