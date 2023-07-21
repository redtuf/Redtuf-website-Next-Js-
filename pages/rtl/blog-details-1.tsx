import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const blog_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar ltrurl="/blog-details-1" />
      {/* banner */}
      <div className="section--sm section--top bg-base">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list list-row align-items-center justify-content-center mb-5">
                <li>
                  <Link
                    href="#"
                    className="bttn bttn--rounded bttn--accent bttn-md">
                    {" "}
                    تسويق{" "}
                  </Link>
                </li>
                <li>
                  <span className="clr-light"> يوليو 15, 2023 </span>
                </li>
              </ul>
              <h2 className="text-center clr-light mb-8">
                {" "}
                ما هو نمو القرصنة؟ 8 كتب رائعة لمعرفة المزيد عنها{" "}
              </h2>
            </div>
            <div className="col-lg-8">
              <ul className="list list-row flex-wrap align-items-center justify-content-center justify-content-sm-between">
                <li>
                  <div className="group group-sm group-row align-items-center">
                    <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle border border-2 border-light">
                      <span className="user__img rounded-circle">
                        <img
                          src="/images/team-1.png"
                          alt="image"
                          className="user__img-is"
                        />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="clr-light"> كورتني هنري </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <ul className="list list-xs list-row justify-content-sm-end">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}
      <div className="details-body">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="/images/blog-img-1.png"
                alt="image"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row g-6 justify-content-xxl-between">
            <div className="col-lg-8 col-xxl-7">
              <h3 className="mb-5"> تطبيقات جوال جديدة يجب مراقبتها </h3>
              <p className="mb-8">
                {" "}
                يجب اتباع الألم نفسه. كما أن الأرض ليست وقتًا عابرًا ، وتحتاج
                إلى خوف العالم ذاته من. أود أن أفعل ذلك أنا والبعض باستثناء
                الآلام. بحيرة أكومسان لكرة القدم وكرة السلة. توقيت سخيف حامل من
                الوقت. تمامًا مثل أو . بل ديام البرونز واللي في الحلق. يستغرق
                الاستثمار في كرة القدم بعض الوقت. الألم عظيم لعطلة نهاية الأسبوع
                السهلة وللشاحنات الآن.{" "}
              </p>
              <ul className="list list-disc list-disc--gray mb-12">
                <li>
                  <p> ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟ </p>
                </li>
                <li>
                  <p> تحتاج أو الآن إلى جهاز كمبيوتر. يا له من بطل </p>
                </li>
                <li>
                  <p> إنتاج سي إن إن هو برنامج تلفزيوني </p>
                </li>
              </ul>
              <h3 className="mb-5">
                {" "}
                ما هي تطبيقات المحمول الجديدة لوسائل التواصل الاجتماعي المتوفرة
                في عام 2023؟{" "}
              </h3>
              <p className="mb-8">
                {" "}
                مطور الأصل حسب طلب السوق الشامل. إنه أمر مزعج الآن أنك تريد
                دائمًا تزيين منزلك بسهولة العمل في المنزل ليست هناك حاجة لعنصر
                الحياة على الأرض. حان الوقت دائمًا للأطفال مهنة الحياة عذاب ولا
                شحم إلا إذا كان النخبوي حزينًا كثيرًا للعنصر. لاعبين كاملين
                المعجبين بي موجودون في هذه العيادة. أخبرت الأطفال وأعضاء
                المجتمع. حان الوقت الآن للاستثمار فيها ، لكنها ليست لعبة كرة
                قدم. ولكن من هو مطور قصة خالية من الخميرة؟ كيف ترسم البسمة اجعل
                كرة القدم دورة شرب للاعبين. ليس حتى الموظف نفسه. غدا سوف أضحك
                عليك و أنشر الكراهية.{" "}
              </p>
              <img
                src="/images/blog-post-15.png"
                alt="image"
                className="img-fluid"
              />
              <h4 className="mt-8 mb-5">
                {" "}
                استخدم تطبيقات الوسائط الاجتماعية الجديدة كمسارات تسويقية{" "}
              </h4>
              <p className="mb-8">
                {" "}
                مطور الأصل حسب طلب السوق الشامل. إنه أمر مزعج الآن أنك تريد
                دائمًا تزيين منزلك بسهولة العمل في المنزل ليست هناك حاجة لعنصر
                الحياة على الأرض. حان الوقت دائمًا للأطفال مهنة الحياة عذاب ولا
                شحم إلا إذا كان النخبوي حزينًا كثيرًا للعنصر. لاعبين كاملين
                المعجبين بي موجودون في هذه العيادة. أخبرت الأطفال وأعضاء
                المجتمع. حان الوقت الآن للاستثمار فيها ، لكنها ليست لعبة كرة
                قدم. ولكن من هو مطور قصة خالية من الخميرة؟ كيف ترسم البسمة اجعل
                كرة القدم دورة شرب للاعبين. ليس حتى الموظف نفسه. غدا سوف أضحك
                عليك و أنشر الكراهية.{" "}
              </p>
              <ul className="list list-disc list-disc--gray mb-12">
                <li>
                  <p> ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟ </p>
                </li>
                <li>
                  <p> تحتاج أو الآن إلى جهاز كمبيوتر. يا له من بطل </p>
                </li>
                <li>
                  <p> إنتاج سي إن إن هو برنامج تلفزيوني </p>
                </li>
              </ul>
              <div className="bg-base p-6 p-md-8 p-xl-12 rounded-4 mb-12">
                <p className="xxl-text clr-light">
                  {" "}
                  “يجب أن يكون الأمر بمثابة ألم في المؤخرة ، لكن الرسوم المتحركة
                  نفسها تدفع الناس الآن للشرب حتى يكرهوا الأطفال ديام ، إنه يوم
                  جيد ، لكنه يوم جيد.”{" "}
                </p>
              </div>
              <h4 className=" mb-5">
                {" "}
                جرب مساحات تويتر أو كلوب هاوس على هاتف آي فون{" "}
              </h4>
              <p className="mb-12">
                {" "}
                يجب اتباع الألم نفسه. ماتيس ليس قلقًا تمامًا قبل المباراة مُتوقع
                لأن الجبال هي أشياء قبيحة. الأطفال حتى حدادوا كتلة الأرض من
                الحياة الآن تزيين الفناء مع فراخ البط القبيح. لكن من أجل جرة قوس
                ملعب كرة السلة ، الآن العضو القديم في المسبح لديه الآن ثمن
                يدفعه. قوس الأرض لكنه يريد الحصول على نتيجة سيئة. الكثير من
                المرح من اللعب في شاحنات كرة السلة حُلقُوم ضع فاسيليوس شحمي نقي
                في إليمنتوم.{" "}
              </p>
              <h4 className=" mb-5"> ما التطبيق الذي تقوم بتجربته حاليًا؟ </h4>
              <p className="mb-12">
                {" "}
                يجب اتباع الألم نفسه. ماتيس ليس قلقًا تمامًا قبل المباراة مُتوقع
                لأن الجبال هي أشياء قبيحة. الأطفال حتى حدادوا كتلة الأرض من
                الحياة الآن تزيين الفناء مع فراخ البط القبيح. لكن من أجل جرة قوس
                ملعب كرة السلة ، الآن العضو القديم في المسبح لديه الآن ثمن
                يدفعه. قوس الأرض لكنه يريد الحصول على نتيجة سيئة. الكثير من
                المرح من اللعب في شاحنات كرة السلة حُلقُوم ضع فاسيليوس شحمي نقي
                في إليمنتوم.{" "}
              </p>
              <div className="p-8 p-xl-12 border rounded-4 d-inline-flex flex-column flex-md-row gap-6">
                <div className="user--xlg rounded-circle overflow-hidden flex-shrink-0">
                  <div className="user__img">
                    <img
                      src="/images/team-1.png"
                      alt="image"
                      className="user__img-is"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2"> ديان راسل </h5>
                  <p className="mb-5"> رئيس قسم التكنولوجيا والشريك المؤسس </p>
                  <p className="mb-8 max-text-50">
                    {" "}
                    يجب اتباع الألم نفسه. ماتيس ليس قلقًا تمامًا قبل المباراة
                    مُتوقع لأن الجبال هي أشياء قبيحة. الأطفال حتى حدادوا كتلة
                    الأرض من الحياة الآن تزيين الفناء مع فراخ البط القبيح. لكن
                    من أجل جرة قوس ملعب كرة السلة ، الآن العضو القديم في المسبح
                    لديه الآن ثمن يدفعه. قوس الأرض لكنه يريد الحصول على نتيجة
                    سيئة. الكثير من المرح من اللعب في شاحنات كرة السلة حُلقُوم
                    ضع فاسيليوس شحمي نقي في إليمنتوم.{" "}
                  </p>
                  <ul className="list list-xs list-row">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-8 py-15 rounded-4 bg-base">
                <img
                  src="/images/icon-72.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="my-5 clr-light"> سجل للحصول على اخر اخبارنا </h4>
                <p className="mb-8 clr-light">
                  {" "}
                  هل تحتاج إلى مزيد من المعلومات؟ اشترك في النشرة الإخبارية
                  واحصل على التحديثات والأخبار{" "}
                </p>
                <input
                  type="email"
                  className="form-control booking-form__input placeholder-clr mb-5"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <Link
                  href="#"
                  className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md w-100 clr-dark">
                  {" "}
                  إشترك الآن!{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default blog_details_1;
