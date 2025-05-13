import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Language, getTranslation } from "../components/LanguageSelector";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
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

  console.log("PrivacyPolicy page rendering, language:", language);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {getTranslation(language, "privacyPolicy")}
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          {language === "fr" ? (
            <>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                  SecureGov SARL accorde une grande importance à la protection de vos données personnelles et s'engage à les traiter avec le plus grand soin et en toute transparence, conformément à la loi marocaine 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.
                </p>
                <p className="mb-4">
                  La présente politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web ou nos services.
                </p>
                <p className="mb-4">
                  En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans la présente politique de confidentialité.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Collecte des données personnelles</h2>
                <p className="mb-4">
                  Nous pouvons collecter les données personnelles suivantes:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de votre entreprise et fonction</li>
                  <li>Adresse IP et données de navigation sur notre site</li>
                  <li>Informations relatives à votre système informatique (type d'appareil, navigateur, etc.)</li>
                </ul>
                <p className="mb-4">
                  Ces données sont collectées lorsque:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Vous remplissez un formulaire de contact sur notre site</li>
                  <li>Vous souscrivez à nos services</li>
                  <li>Vous vous inscrivez à notre newsletter</li>
                  <li>Vous naviguez sur notre site (via les cookies et technologies similaires)</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Utilisation des données personnelles</h2>
                <p className="mb-4">
                  Nous utilisons vos données personnelles pour:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Vous fournir les services que vous avez demandés</li>
                  <li>Répondre à vos demandes d'information</li>
                  <li>Vous envoyer des communications marketing (si vous y avez consenti)</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Assurer la sécurité de notre site et services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Base légale du traitement</h2>
                <p className="mb-4">
                  Nous traitons vos données personnelles sur les bases légales suivantes:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Exécution d'un contrat lorsque nous vous fournissons nos services</li>
                  <li>Votre consentement pour l'envoi de communications marketing</li>
                  <li>Notre intérêt légitime pour améliorer nos services et assurer la sécurité de notre site</li>
                  <li>Respect de nos obligations légales</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Conservation des données</h2>
                <p className="mb-4">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, notamment pour satisfaire à nos obligations légales et réglementaires.
                </p>
                <p className="mb-4">
                  Les données utilisées à des fins de marketing sont conservées tant que vous ne vous opposez pas à leur utilisation à cette fin.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Partage des données personnelles</h2>
                <p className="mb-4">
                  Nous pouvons partager vos données personnelles avec:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Nos prestataires de services qui nous aident à exploiter notre site et à fournir nos services</li>
                  <li>Des autorités publiques si la loi l'exige</li>
                </ul>
                <p className="mb-4">
                  Nous ne vendons pas vos données personnelles à des tiers. Lorsque nous partageons vos données avec des prestataires de services, nous nous assurons qu'ils offrent des garanties suffisantes pour assurer la protection de vos données.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Cookies et technologies similaires</h2>
                <p className="mb-4">
                  Notre site utilise des cookies et technologies similaires pour améliorer votre expérience de navigation et nous aider à comprendre comment notre site est utilisé.
                </p>
                <p className="mb-4">
                  Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être alerté lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement si vous désactivez les cookies.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Vos droits</h2>
                <p className="mb-4">
                  Conformément à la loi marocaine 09-08, vous disposez des droits suivants concernant vos données personnelles:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Droit d'accès: vous pouvez demander une copie des données personnelles que nous détenons à votre sujet</li>
                  <li>Droit de rectification: vous pouvez demander la correction de données inexactes ou incomplètes</li>
                  <li>Droit à l'effacement: vous pouvez demander la suppression de vos données dans certaines circonstances</li>
                  <li>Droit d'opposition: vous pouvez vous opposer au traitement de vos données, notamment à des fins de marketing direct</li>
                  <li>Droit à la limitation du traitement: vous pouvez demander la limitation du traitement de vos données dans certaines circonstances</li>
                </ul>
                <p className="mb-4">
                  Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante: contactsecuregov@gmail.com
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Sécurité des données</h2>
                <p className="mb-4">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
                <p className="mb-4">
                  Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sûre. Nous ne pouvons donc pas garantir une sécurité absolue.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">9. Modifications de la politique de confidentialité</h2>
                <p className="mb-4">
                  Nous pouvons modifier cette politique de confidentialité à tout moment. La version la plus récente sera publiée sur notre site web avec la date de dernière mise à jour.
                </p>
                <p className="mb-4">
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière dont nous protégeons vos données personnelles.
                </p>
                <p className="mb-4">
                  <strong>Dernière mise à jour:</strong> 11 mai 2025
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">مقدمة</h2>
                <p className="mb-4" dir="rtl">
                  تولي شركة SecureGov SARL أهمية كبيرة لحماية بياناتك الشخصية وتلتزم بمعالجتها بأقصى قدر من العناية وبكل شفافية، وفقًا للقانون المغربي 09-08 المتعلق بحماية الأشخاص الطبيعيين فيما يتعلق بمعالجة البيانات ذات الطابع الشخصي.
                </p>
                <p className="mb-4" dir="rtl">
                  تعلمك سياسة الخصوصية هذه بالطريقة التي نجمع بها بياناتك الشخصية ونستخدمها ونحميها عند استخدامك لموقعنا الإلكتروني أو خدماتنا.
                </p>
                <p className="mb-4" dir="rtl">
                  باستخدامك لموقعنا الإلكتروني أو خدماتنا، فإنك تقبل الممارسات الموضحة في سياسة الخصوصية هذه.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. جمع البيانات الشخصية</h2>
                <p className="mb-4" dir="rtl">
                  قد نقوم بجمع البيانات الشخصية التالية:
                </p>
                <ul className="list-disc mr-6 mb-4 space-y-2 text-right" dir="rtl">
                  <li>الاسم واللقب</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                  <li>اسم شركتك ووظيفتك</li>
                  <li>عنوان IP وبيانات التصفح على موقعنا</li>
                  <li>معلومات متعلقة بنظام الكمبيوتر الخاص بك (نوع الجهاز، المتصفح، إلخ)</li>
                </ul>
                <p className="mb-4" dir="rtl">
                  يتم جمع هذه البيانات عندما:
                </p>
                <ul className="list-disc mr-6 mb-4 space-y-2 text-right" dir="rtl">
                  <li>تملأ نموذج اتصال على موقعنا</li>
                  <li>تشترك في خدماتنا</li>
                  <li>تسجل في نشرتنا الإخبارية</li>
                  <li>تتصفح موقعنا (عبر ملفات تعريف الارتباط والتقنيات المماثلة)</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. استخدام البيانات الشخصية</h2>
                <p className="mb-4" dir="rtl">
                  نستخدم بياناتك الشخصية من أجل:
                </p>
                <ul className="list-disc mr-6 mb-4 space-y-2 text-right" dir="rtl">
                  <li>تزويدك بالخدمات التي طلبتها</li>
                  <li>الرد على طلبات المعلومات الخاصة بك</li>
                  <li>إرسال اتصالات تسويقية إليك (إذا وافقت على ذلك)</li>
                  <li>تحسين خدماتنا وموقعنا على الإنترنت</li>
                  <li>ضمان أمان موقعنا وخدماتنا</li>
                  <li>الامتثال لالتزاماتنا القانونية</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. الأساس القانوني للمعالجة</h2>
                <p className="mb-4" dir="rtl">
                  نعالج بياناتك الشخصية على الأسس القانونية التالية:
                </p>
                <ul className="list-disc mr-6 mb-4 space-y-2 text-right" dir="rtl">
                  <li>تنفيذ عقد عندما نقدم لك خدماتنا</li>
                  <li>موافقتك على إرسال اتصالات تسويقية</li>
                  <li>مصلحتنا المشروعة في تحسين خدماتنا وضمان أمان موقعنا</li>
                  <li>احترام التزاماتنا القانونية</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. الاحتفاظ بالبيانات</h2>
                <p className="mb-4" dir="rtl">
                  نحتفظ ببياناتك الشخصية طالما كان ذلك ضروريًا لتحقيق الأغراض التي تم جمعها من أجلها، خاصة للوفاء بالتزاماتنا القانونية والتنظيمية.
                </p>
                <p className="mb-4" dir="rtl">
                  يتم الاحتفاظ بالبيانات المستخدمة لأغراض التسويق طالما أنك لا تعترض على استخدامها لهذا الغرض.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. مشاركة البيانات الشخصية</h2>
                <p className="mb-4" dir="rtl">
                  قد نشارك بياناتك الشخصية مع:
                </p>
                <ul className="list-disc mr-6 mb-4 space-y-2 text-right" dir="rtl">
                  <li>مزودي الخدمات لدينا الذين يساعدوننا في تشغيل موقعنا وتقديم خدماتنا</li>
                  <li>السلطات العامة إذا كان القانون يتطلب ذلك</li>
                </ul>
                <p className="mb-4" dir="rtl">
                  نحن لا نبيع بياناتك الشخصية لأطراف ثالثة. عندما نشارك بياناتك مع مزودي الخدمات، نتأكد من أنهم يقدمون ضمانات كافية لضمان حماية بياناتك.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. ملفات تعريف الارتباط والتقنيات المماثلة</h2>
                <p className="mb-4" dir="rtl">
                  يستخدم موقعنا ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح الخاصة بك ومساعدتنا في فهم كيفية استخدام موقعنا.
                </p>
                <p className="mb-4" dir="rtl">
                  يمكنك تكوين متصفحك لرفض جميع ملفات تعريف الارتباط أو ليتم تنبيهك عند إرسال ملف تعريف الارتباط. ومع ذلك، قد لا تعمل بعض ميزات موقعنا بشكل صحيح إذا قمت بتعطيل ملفات تعريف الارتباط.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. حقوقك</h2>
                <p className="mb-4" dir="rtl">
                  وفقًا للقانون المغربي 09-08، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:
                </p>
                <ul className="list-disc mr-6 mb-4 space-y-2 text-right" dir="rtl">
                  <li>حق الوصول: يمكنك طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك</li>
                  <li>حق التصحيح: يمكنك طلب تصحيح البيانات غير الدقيقة أو غير المكتملة</li>
                  <li>حق المحو: يمكنك طلب حذف بياناتك في ظروف معينة</li>
                  <li>حق الاعتراض: يمكنك الاعتراض على معالجة بياناتك، خاصة لأغراض التسويق المباشر</li>
                  <li>الحق في تقييد المعالجة: يمكنك طلب تقييد معالجة بياناتك في ظروف معينة</li>
                </ul>
                <p className="mb-4" dir="rtl">
                  لممارسة هذه الحقوق، يرجى الاتصال بنا على عنوان البريد الإلكتروني التالي: contactsecuregov@gmail.com
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. أمان البيانات</h2>
                <p className="mb-4" dir="rtl">
                  نقوم بتنفيذ تدابير أمنية تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الفقدان أو الوصول غير المصرح به أو الإفصاح أو التغيير أو التدمير.
                </p>
                <p className="mb-4" dir="rtl">
                  ومع ذلك، فإن أي طريقة للإرسال عبر الإنترنت أو التخزين الإلكتروني ليست آمنة تمامًا. لذلك، لا يمكننا ضمان الأمان المطلق.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">9. تعديلات سياسة الخصوصية</h2>
                <p className="mb-4" dir="rtl">
                  يمكننا تعديل سياسة الخصوصية هذه في أي وقت. سيتم نشر أحدث إصدار على موقعنا الإلكتروني مع تاريخ آخر تحديث.
                </p>
                <p className="mb-4" dir="rtl">
                  نشجعك على مراجعة هذه السياسة بانتظام للبقاء على اطلاع بالطريقة التي نحمي بها بياناتك الشخصية.
                </p>
                <p className="mb-4" dir="rtl">
                  <strong>آخر تحديث:</strong> 11 مايو 2025
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

export default PrivacyPolicy;
