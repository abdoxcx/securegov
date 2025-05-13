import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Language, getTranslation } from "../components/LanguageSelector";
import { Separator } from "@/components/ui/separator";

const LegalMentions = () => {
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

  console.log("LegalMentions page rendering, language:", language);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {getTranslation(language, "legalMentions")}
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          {language === "fr" ? (
            <>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
                <p className="mb-4">Le site SecureGov est édité par:</p>
                <p className="mb-4">
                  <strong>SecureGov SARL</strong><br />
                  Bureau 305, Technopark<br />
                  Casablanca, Maroc<br />
                  RC: 123456789<br />
                  IF: 12345678<br />
                  ICE: 000111222333444
                </p>
                <p className="mb-4">
                  <strong>Directeur de la publication:</strong> Mohammed Alami<br />
                  <strong>Contact:</strong> contactsecuregov@gmail.com<br />
                  <strong>Téléphone:</strong> +212712695714
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
                <p className="mb-4">
                  Le site SecureGov est hébergé par:<br />
                  <strong>Amazon Web Services EMEA SARL</strong><br />
                  38 Avenue John F. Kennedy<br />
                  L-1855 Luxembourg
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
                <p className="mb-4">
                  L'ensemble du site SecureGov, y compris sa structure, son design, ses textes, ses images, ses logos et tous autres éléments le composant, est la propriété exclusive de SecureGov SARL ou fait l'objet d'une autorisation d'utilisation. Toute représentation, reproduction ou exploitation totale ou partielle du site par quelque procédé que ce soit, sans l'autorisation expresse de SecureGov SARL est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Limitation de responsabilité</h2>
                <p className="mb-4">
                  SecureGov SARL s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, SecureGov SARL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site. En conséquence, SecureGov SARL décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.
                </p>
                <p className="mb-4">
                  SecureGov SARL se réserve le droit de modifier, à tout moment et sans préavis, le contenu de ce site.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Liens hypertextes</h2>
                <p className="mb-4">
                  Le site SecureGov peut contenir des liens hypertextes vers d'autres sites. SecureGov SARL n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu ou de leurs pratiques en matière de respect de la vie privée.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">6. Droit applicable et juridiction compétente</h2>
                <p className="mb-4">
                  Les présentes mentions légales sont régies par le droit marocain. En cas de litige, les tribunaux marocains seront seuls compétents.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. المعلومات القانونية</h2>
                <p className="mb-4">يتم نشر موقع SecureGov بواسطة:</p>
                <p className="mb-4" dir="rtl">
                  <strong>SecureGov SARL</strong><br />
                  مكتب 305، تكنوبارك<br />
                  الدار البيضاء، المغرب<br />
                  السجل التجاري: 123456789<br />
                  التعريف الضريبي: 12345678<br />
                  ICE: 000111222333444
                </p>
                <p className="mb-4" dir="rtl">
                  <strong>مدير النشر:</strong> محمد علمي<br />
                  <strong>الاتصال:</strong> contactsecuregov@gmail.com<br />
                  <strong>الهاتف:</strong> +212712695714
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. الاستضافة</h2>
                <p className="mb-4" dir="rtl">
                  تتم استضافة موقع SecureGov بواسطة:<br />
                  <strong>Amazon Web Services EMEA SARL</strong><br />
                  38 شارع جون ف. كينيدي<br />
                  L-1855 لوكسمبورغ
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. الملكية الفكرية</h2>
                <p className="mb-4" dir="rtl">
                  موقع SecureGov بأكمله، بما في ذلك هيكله وتصميمه ونصوصه وصوره وشعاراته وجميع العناصر الأخرى التي تشكله، هو ملكية حصرية لشركة SecureGov SARL أو يخضع لإذن استخدام. يُحظر أي تمثيل أو نسخ أو استغلال كلي أو جزئي للموقع بأي وسيلة كانت، دون إذن صريح من SecureGov SARL، ويشكل انتهاكًا للمادة L.335-2 والمواد التالية من قانون الملكية الفكرية.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. حدود المسؤولية</h2>
                <p className="mb-4" dir="rtl">
                  تسعى SecureGov SARL جاهدة لضمان دقة وتحديث المعلومات المنشورة على هذا الموقع قدر الإمكان. ومع ذلك، لا يمكن لشركة SecureGov SARL ضمان دقة أو صحة أو اكتمال المعلومات المتاحة على هذا الموقع. وبالتالي، تخلي SecureGov SARL مسؤوليتها عن أي عدم دقة أو أخطاء أو إغفالات محتملة تتعلق بالمعلومات المتاحة على هذا الموقع.
                </p>
                <p className="mb-4" dir="rtl">
                  تحتفظ SecureGov SARL بالحق في تعديل محتوى هذا الموقع في أي وقت ودون إشعار مسبق.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. الروابط التشعبية</h2>
                <p className="mb-4" dir="rtl">
                  قد يحتوي موقع SecureGov على روابط تشعبية إلى مواقع أخرى. لا تمارس SecureGov SARL أي سيطرة على هذه المواقع ولا يمكن اعتبارها مسؤولة عن محتواها أو ممارساتها فيما يتعلق باحترام الخصوصية.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">6. القانون المعمول به والاختصاص القضائي</h2>
                <p className="mb-4" dir="rtl">
                  تخضع هذه الإشعارات القانونية للقانون المغربي. في حالة نشوء نزاع، تكون المحاكم المغربية وحدها صاحبة الاختصاص.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalMentions;
