import { useState, useEffect } from "react";
import { Language, getTranslation } from "../components/LanguageSelector";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlanCard from "../components/PlanCard";
import ServiceCard from "../components/ServiceCard";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
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
  
  console.log("Pricing page rendering, language:", language);

  // Plans data
  const plans = [
    {
      name: getTranslation(language, "essentialPlan"),
      targetAudience: getTranslation(language, "essentialAudience"),
      monthlyPrice: 750,
      yearlyPrice: 7650,
      features: [
        getTranslation(language, "essentialFeature1"),
        getTranslation(language, "essentialFeature2"),
        getTranslation(language, "essentialFeature3"),
        getTranslation(language, "essentialFeature4"),
        getTranslation(language, "essentialFeature5"),
      ],
      ctaKey: "chooseEssential",
    },
    {
      name: getTranslation(language, "standardPlan"),
      targetAudience: getTranslation(language, "standardAudience"),
      monthlyPrice: 1500,
      yearlyPrice: 15300,
      features: [
        getTranslation(language, "standardFeature1"),
        getTranslation(language, "standardFeature2"),
        getTranslation(language, "standardFeature3"),
        getTranslation(language, "standardFeature4"),
        getTranslation(language, "standardFeature5"),
        getTranslation(language, "standardFeature6"),
      ],
      recommended: true,
      ctaKey: "chooseStandard",
    },
    {
      name: getTranslation(language, "premiumPlan"),
      targetAudience: getTranslation(language, "premiumAudience"),
      monthlyPrice: 3000,
      yearlyPrice: 30600,
      features: [
        getTranslation(language, "premiumFeature1"),
        getTranslation(language, "premiumFeature2"),
        getTranslation(language, "premiumFeature3"),
        getTranslation(language, "premiumFeature4"),
        getTranslation(language, "premiumFeature5"),
        getTranslation(language, "premiumFeature6"),
      ],
      ctaKey: "choosePremium",
    },
  ];

  // Services data
  const services = [
    {
      title: getTranslation(language, "basicAuditTitle"),
      description: getTranslation(language, "basicAuditDesc"),
      price: "3 000 MAD",
    },
    {
      title: getTranslation(language, "advancedAuditTitle"),
      description: getTranslation(language, "advancedAuditDesc"),
      price: "8 000 MAD",
    },
    {
      title: getTranslation(language, "complianceAuditTitle"),
      description: getTranslation(language, "complianceAuditDesc"),
      price: "12 000 MAD",
    },
    {
      title: getTranslation(language, "onsiteInterventionTitle"),
      description: getTranslation(language, "onsiteInterventionDesc"),
      price: "1 500 MAD / " + getTranslation(language, "halfDay"),
    },
    {
      title: getTranslation(language, "emergencyInterventionTitle"),
      description: getTranslation(language, "emergencyInterventionDesc"),
      price: "3 000 MAD / " + getTranslation(language, "intervention"),
    },
    {
      title: getTranslation(language, "trainingTitle"),
      description: getTranslation(language, "trainingDesc"),
      price: getTranslation(language, "fromPrice") + " 1 000 MAD / " + getTranslation(language, "person"),
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: getTranslation(language, "faqQuestion1"),
      answer: getTranslation(language, "faqAnswer1"),
    },
    {
      question: getTranslation(language, "faqQuestion2"),
      answer: getTranslation(language, "faqAnswer2"),
    },
    {
      question: getTranslation(language, "faqQuestion3"),
      answer: getTranslation(language, "faqAnswer3"),
    },
    {
      question: getTranslation(language, "faqQuestion4"),
      answer: getTranslation(language, "faqAnswer4"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue-royal mb-4">{getTranslation(language, "pricingTitle")}</h1>
            <p className="text-gray-dark max-w-3xl mx-auto mb-8">
              {getTranslation(language, "pricingDescription")}
            </p>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-16 bg-blue-light bg-opacity-5">
          <div className="container mx-auto px-4">
            <h2 className="text-blue-royal text-center mb-12">
              {getTranslation(language, "subscriptionPlansTitle")}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <PlanCard
                  key={index}
                  name={plan.name}
                  targetAudience={plan.targetAudience}
                  monthlyPrice={plan.monthlyPrice}
                  yearlyPrice={plan.yearlyPrice}
                  features={plan.features}
                  recommended={plan.recommended}
                  language={language}
                  ctaKey={plan.ctaKey}
                />
              ))}
            </div>
          </div>
        </section>

        {/* One-time Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-blue-royal text-center mb-4">
              {getTranslation(language, "servicesTitle")}
            </h2>
            <p className="text-gray-dark max-w-3xl mx-auto text-center mb-12">
              {getTranslation(language, "servicesDescription")}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  language={language}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16 bg-blue-light bg-opacity-5">
          <div className="container mx-auto px-4">
            <h2 className="text-blue-royal text-center mb-8">
              {getTranslation(language, "paymentOptionsTitle")}
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-light">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-blue-royal bg-opacity-5 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-blue-royal">{getTranslation(language, "monthlyPayment")}</h3>
                    <p className="text-sm text-gray-dark">{getTranslation(language, "monthlyPaymentDesc")}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="font-medium">{getTranslation(language, "standardRate")}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-green-emerald bg-opacity-5 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-green-emerald">{getTranslation(language, "yearlyPayment")}</h3>
                    <p className="text-sm text-gray-dark">{getTranslation(language, "yearlyPaymentDesc")}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="font-medium text-green-emerald">{getTranslation(language, "save")} 15%</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg border border-gray-light">
                  <div>
                    <h3 className="font-semibold text-blue-royal">{getTranslation(language, "installmentPayment")}</h3>
                    <p className="text-sm text-gray-dark">{getTranslation(language, "installmentPaymentDesc")}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-sm font-medium">{getTranslation(language, "contactForDetails")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-blue-royal text-center mb-12">
              {getTranslation(language, "faqTitle")}
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-blue-royal font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-dark">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-royal">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white mb-4">{getTranslation(language, "readyToSecure")}</h2>
            <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
              {getTranslation(language, "notSureWhichPlan")}
            </p>
            <a href="#contact" className="bg-green-emerald text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium inline-block">
              {getTranslation(language, "contactExperts")}
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
