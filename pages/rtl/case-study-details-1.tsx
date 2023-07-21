import Feedback_3 from "@/components/rtl/Feedback_3";
import Letstalk from "@/components/rtl/Letstalk";
import Navbar from "@/components/rtl/Navbar";
import Videosection from "@/components/rtl/Videosection";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useEffect } from "react";
import Footer from "@/components/rtl/home_4/Footer";

const case_study_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/case-study-details-1" />
      <div className="section bg-base-900">
        <div className="container">
          <div className="row g-6 justify-content-lg-between align-items-center">
            <div className="col-md-6">
              <div className="section__gap-bottom pb-md-0 position-sticky top-0">
                <ul className="list list-row align-items-center">
                  <li>
                    <span className="d-block clr-light"> بلوكشين </span>
                  </li>
                  <li className="dash-line-container">
                    <span className="dash-line"></span>
                  </li>
                  <li>
                    <span className="d-block clr-light"> مايو 2022 </span>
                  </li>
                </ul>
                <h2 className="mt-4 mb-8 clr-light">
                  {" "}
                  كيف قمنا ببناء وتأمين تجمع تعدين تشفير{" "}
                </h2>
                <p className="t-short-para clr-light">
                  {" "}
                  العميل مهم جدا ، العميل سيتبعه. لا ألم جرة ، ليس عنصرا وماكرو.
                  كرمت حلقي و واجبي المنزلي.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="p-4 p-sm-6 rounded-4 bg-neutral-100">
                <ul className="list list-row justify-content-center list--divider">
                  <li className="flex-1">
                    <div className="d-flex flex-column">
                      <h5 className="mb-3">خدمات</h5>
                      <ul className="list gap-2">
                        <li> تطوير الواجهة الأمامية </li>
                        <li> تحسين السرعة </li>
                      </ul>
                      <h5 className="mt-5 mb-3">المنصات</h5>
                      <ul className="list gap-2">
                        <li> الويب </li>
                        <li> متحرك </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex-1">
                    <h5 className="mb-3">نتائج</h5>
                    <h2 className="clr-base"> 88% </h2>
                    <ul className="list gap-2">
                      <li> تحسين </li>
                      <li> سرعة الموقع </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Category --> */}
      <div className="project-category-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="section__gap-bottom">
                <img
                  src="/images/project-category-img.png"
                  alt="image"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <ul className="list list-row flex-wrap project-category-list">
              <li>
                <div className="d-flex flex-column">
                  <span className="d-block mb-1 mb-md-2"> عميل </span>
                  <h5 className="clr-base"> عميل </h5>
                </div>
              </li>
              <li>
                <div className="d-flex flex-column">
                  <span className="d-block mb-1 mb-md-2"> مشروع </span>
                  <h5 className="clr-base"> انها الحل </h5>
                </div>
              </li>
              <li>
                <div className="d-flex flex-column">
                  <span className="d-block mb-1 mb-md-2"> فئة </span>
                  <h5 className="clr-base"> الواجهة الأمامية ديف </h5>
                </div>
              </li>
              <li>
                <div className="d-flex flex-column">
                  <span className="d-block mb-1 mb-md-2"> تاريخ </span>
                  <h5 className="clr-base"> 10 مايو 2023 </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Project Category End --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-5">
                  <div className="section__gap-bottom pb-mb-0 position-sticky top-60">
                    <h3> ملخص المشروع </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="mb-5">
                    {" "}
                    يجب اتباع الألم نفسه. قد يكون الحادث مليئا بالمرح لدي بعض
                    الألم. دائما وضع القوس الكرتون الحداد. وضع المطورون البروتين
                    في الخزان كتلة الحياة والزينة. الجلوس في بريتيوم و لا يوجد
                    علاج طبي للحوامل كبيرة الحجم. يستغرق الأمر وقتًا طويلاً لوضع
                    مشغل على جهاز الكمبيوتر فم الحمال جائع مدى الحياة.{" "}
                  </p>
                  <ul className="list list-disc list-disc--dark mb-8">
                    <li>
                      <p>
                        {" "}
                        ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                      </p>
                    </li>
                    <li>
                      <p> تحتاج أو الآن إلى جهاز كمبيوتر. يا له من بطل </p>
                    </li>
                    <li>
                      <p> إنتاج سي إن إن هو برنامج تلفزيوني </p>
                    </li>
                  </ul>
                  <img
                    src="/images/case-study-img-1.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-base-900">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-5">
                  <div className="section__gap-bottom pb-mb-0 position-sticky top-60">
                    <h3 className="clr-light"> ملخص المشروع </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="mb-5 clr-light">
                    {" "}
                    يجب اتباع الألم نفسه. قد يكون الحادث مليئا بالمرح لدي بعض
                    الألم. دائما وضع القوس الكرتون الحداد. وضع المطورون البروتين
                    في الخزان كتلة الحياة والزينة. الجلوس في بريتيوم و لا يوجد
                    علاج طبي للحوامل كبيرة الحجم. يستغرق الأمر وقتًا طويلاً لوضع
                    مشغل على جهاز الكمبيوتر فم الحمال جائع مدى الحياة.{" "}
                  </p>
                  <ul className="list list-disc list-disc--light mb-8">
                    <li>
                      <p className="clr-light">
                        {" "}
                        ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                      </p>
                    </li>
                    <li>
                      <p className="clr-light">
                        {" "}
                        ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                      </p>
                    </li>
                    <li>
                      <p className="clr-light">
                        {" "}
                        ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                      </p>
                    </li>
                  </ul>
                  <img
                    src="/images/case-study-img-2.png"
                    alt="images"
                    className="img-fluid"
                  />
                  <p className="mt-5 clr-light">
                    {" "}
                    يجب اتباع الألم نفسه. قد يكون الحادث مليئا بالمرح لدي بعض
                    الألم. دائما وضع القوس الكرتون الحداد. وضع المطورون البروتين
                    في الخزان كتلة الحياة والزينة. الجلوس في بريتيوم و لا يوجد
                    علاج طبي للحوامل كبيرة الحجم. يستغرق الأمر وقتًا طويلاً لوضع
                    مشغل على جهاز الكمبيوتر فم الحمال جائع مدى الحياة.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="section__gap-bottom pb-mb-0 position-sticky top-60">
                        <h3> ملخص المشروع </h3>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <p className="mb-5">
                        {" "}
                        يجب اتباع الألم نفسه. قد يكون الحادث مليئا بالمرح لدي
                        بعض الألم. دائما وضع القوس الكرتون الحداد. وضع المطورون
                        البروتين في الخزان كتلة الحياة والزينة. الجلوس في
                        بريتيوم و لا يوجد علاج طبي للحوامل كبيرة الحجم. يستغرق
                        الأمر وقتًا طويلاً لوضع مشغل على جهاز الكمبيوتر فم
                        الحمال جائع مدى الحياة.{" "}
                      </p>
                      <ul className="list list-disc list-disc--dark mb-8">
                        <li>
                          <p>
                            {" "}
                            ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟{" "}
                          </p>
                        </li>
                      </ul>
                      <img
                        src="/images/case-study-img-1.png"
                        alt="images"
                        className="img-fluid"
                      />
                      <ul className="list list-xs list-row mt-10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Section  --> */}
      <Videosection />
      {/* <!-- Project --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  مشاريع نفخر بها تجعلنا متميزين{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center"> مشاريع ذات صلة </h2>
                <p className="text-center mx-auto max-text-60">
                  {" "}
                  ساعد أفضل متخصصي تكنولوجيا المعلومات لدينا عشرات المؤسسات في
                  العديد من القطاعات في الآونة الأخيرة سنين. لفهم كيف ساعدنا في
                  بناء منتجات رقمية مختلفة ونرى ما في وسعنا تحقق لشركتك ، اقرأ
                  دراسات الحالة الخاصة بنا.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-4 g-xl-6">
            <div className="col-sm-6 col-md-4">
              <div className="case-studies-1">
                <Link
                  href="case-study-details-1"
                  className="case-studies-1__link">
                  <img
                    src="/images/case-img-1.png"
                    alt="image"
                    className="case-studies-1__img"
                  />
                </Link>
                <div className="case-studies-1__content">
                  <div className="group group-xxs flex-grow-1">
                    <h5>
                      <Link
                        href="case-study-details-1"
                        className="t-link clr-heading :clr-base">
                        {" "}
                        إستراتيجية واجهة المستخدم{" "}
                      </Link>
                    </h5>
                    <span className="d-block">
                      {" "}
                      استشارات تكنولوجيا المعلومات{" "}
                    </span>
                  </div>
                  <Link
                    href="case-study-details-1"
                    className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                    <span className="material-symbols-rounded mat-icon fw-100">
                      {" "}
                      east{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="case-studies-1">
                <Link
                  href="case-study-details-1"
                  className="case-studies-1__link">
                  <img
                    src="/images/case-img-2.png"
                    alt="image"
                    className="case-studies-1__img"
                  />
                </Link>
                <div className="case-studies-1__content">
                  <div className="group group-xxs flex-grow-1">
                    <h5>
                      <Link
                        href="case-study-details-1"
                        className="t-link clr-heading :clr-base">
                        {" "}
                        إستراتيجية واجهة المستخدم{" "}
                      </Link>
                    </h5>
                    <span className="d-block">
                      {" "}
                      استشارات تكنولوجيا المعلومات{" "}
                    </span>
                  </div>
                  <Link
                    href="case-study-details-1"
                    className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                    <span className="material-symbols-rounded mat-icon fw-100">
                      {" "}
                      east{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="case-studies-1">
                <Link
                  href="case-study-details-1"
                  className="case-studies-1__link">
                  <img
                    src="/images/case-img-3.png"
                    alt="image"
                    className="case-studies-1__img"
                  />
                </Link>
                <div className="case-studies-1__content">
                  <div className="group group-xxs flex-grow-1">
                    <h5>
                      <Link
                        href="case-study-details-1"
                        className="t-link clr-heading :clr-base">
                        {" "}
                        إستراتيجية واجهة المستخدم{" "}
                      </Link>
                    </h5>
                    <span className="d-block">
                      {" "}
                      استشارات تكنولوجيا المعلومات{" "}
                    </span>
                  </div>
                  <Link
                    href="case-study-details-1"
                    className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                    <span className="material-symbols-rounded mat-icon fw-100">
                      {" "}
                      east{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Let's Talk --> */}
      <Letstalk />
      {/* <!-- Testimonial --> */}
      <Feedback_3 />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default case_study_details_1;
