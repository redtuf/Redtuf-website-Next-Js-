import Link from "next/link";
import Feedback_3 from "@/components/rtl/Feedback_3";
import Letstalk from "@/components/rtl/Letstalk";
import CoreValue from "@/components/rtl/CoreValue";
import Navbar from "@/components/rtl/Navbar";
import { useEffect } from "react";
import Footer from "@/components/rtl/home_4/Footer";

const service_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar ltrurl="/service-details-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> تفاصيل الخدمات - 01 </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/rtl"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    بيت{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    خدمات{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    تفاصيل الخدمات - 01{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
              <h2> خدمات تطوير الويب </h2>
            </div>
            <span className="w-100"></span>
            <div className="col-md-6">
              <p>
                {" "}
                نحن شركة تطوير الويب. نحن نقدم تطوير جافا سكريبت و بي أتش بي.
                دعنا نساعدك قم ببناء منتج رائع باستخدام أطر عمل مثل سمفونية و
                ارافيل و تتفاعل و نعم. شبيبة و العقدة.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-8">
                {" "}
                لقد جمعنا خبرة قوية في إنشاء تطبيقات الويب المتطورة. باستخدام
                الأفضل تقنيات تطوير الويب والأدوات المناسبة ، يمكن لفريقنا تطوير
                منتج مثالي تناسب السوق. يعد بناء منتج عملية معقدة ، وسنساعدك في
                كل خطوة من خطواتها هذه الرحلة ، من تصور فكرتك إلى إنشاء
                التطبيقات وصيانة التطبيقات.{" "}
              </p>
              <Link
                href="contact-us-1"
                className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                {" "}
                ابدأ المشروع{" "}
                <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                  {" "}
                  arrow_forward{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="service-section__content bg-base-800">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5 z-1">
                <ul className="list list-row flex-wrap gap-6 mb-8">
                  <li className="d-flex align-items-center gap-3">
                    <img
                      src="/images/icon-73.png"
                      alt="image"
                      className="img-fluid flex-shrink-0"
                    />
                    <h6 className="clr-accent"> هنا منذ عام 2010 </h6>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <img
                      src="/images/icon-74.png"
                      alt="image"
                      className="img-fluid flex-shrink-0"
                    />
                    <h6 className="clr-accent"> الشريك المعتمد </h6>
                  </li>
                </ul>
                <p className="clr-light mb-8 xxl-text">
                  {" "}
                  هل أنت علامة تجارية ناشئة ، شركة راسخة ، في المملكة المتحدة أو
                  في جميع أنحاء العالم؟ لا موضوع. نحن نعمل مع مجموعة من العملاء.{" "}
                </p>
                <p className="clr-light mb-5">
                  {" "}
                  نحن نعلم أنه من الصعب على العلامات التجارية إعداد تجربة عبر
                  الإنترنت ، وقد تكون الميزانيات محدودة. نحن ترغب في مساعدة
                  العلامات التجارية الجديدة على النمو والعمل في علاقة طويلة
                  الأمد.{" "}
                </p>
                <p className="clr-light mb-5">
                  {" "}
                  ولدينا أيضًا خبرة في تصميم وبناء واختبار وإطلاق مواقع الويب لـ
                  المنظمات العالمية الكبيرة. يمكننا أن نكون امتدادًا لفريق
                  التسويق الداخلي الخاص بك أو نأخذ الاستفادة من فريق الخبراء
                  لدينا ليكون رقميًا كاملاً{" "}
                </p>
                <p className="clr-light mb-12">
                  {" "}
                  ولدينا أيضًا خبرة في تصميم وبناء واختبار وإطلاق مواقع الويب لـ
                  المنظمات العالمية الكبيرة. يمكننا أن نكون امتدادًا لفريق
                  التسويق الداخلي الخاص بك أو نأخذ الاستفادة من فريق الخبراء
                  لدينا ليكون رقميًا كاملاً{" "}
                </p>
                <Link
                  href="contact-us-1"
                  className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  حدد موعدًا لمكالمة{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-base-800">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-5">
                <h4 className="text-center clr-light">
                  {" "}
                  نستخدم أحدث التقنيات المتاحة لإنشاء تصميمات خالدة.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-1.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> ذكري المظهر </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-2.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> كودانيتر </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-3.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> رفرفة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-4.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> عقدة شبيبة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-5.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> بايثون </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-6.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> رد الفعل الأصلي </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-7.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> سويفت </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-8.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> الزاوي </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-9.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> ج شارب </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-10.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> جافا </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-11.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> شبابيك </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-12.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> ارافيل </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <h2 className="text-center">
                  {" "}
                  نتعامل مع كل مشروع برؤية واضحة.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="section__gap-bottom pb-lg-0">
                  <img
                    src="/images/service-img-9.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <h4 className="mb-5">
                  {" "}
                  نحب إزالة "الوافل" وتصميم مواقع ويب جميلة وسهلة الاستخدام
                  وظيفي.{" "}
                </h4>
                <p>
                  {" "}
                  نحن لا نبني مواقع ويب جميلة فحسب. هنا في شكل نحن نفهم جميع
                  جوانب موقع ناجح من التصميم إلى تطوير الويب والاختبار ، إلى
                  تحسين محركات البحث والاستضافة. نحن تفصيل خدمتنا للعميل
                  ومتطلبات المشروع.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="section__gap-bottom pb-lg-0">
                <h4 className="mb-5">
                  {" "}
                  نتعامل مع كل مشروع داخل الشركة ، ولا نقوم بالاستعانة بمصادر
                  خارجية.{" "}
                </h4>
                <p>
                  {" "}
                  نحن لا نبني مواقع ويب جميلة فحسب. هنا في شكل نحن نفهم جميع
                  جوانب موقع ناجح من التصميم إلى تطوير الويب والاختبار ، إلى
                  تحسين محركات البحث والاستضافة. نحن تفصيل خدمتنا للعميل
                  ومتطلبات المشروع.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/service-img-10.png"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section pb-0 service-section-2">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-9">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  خدمات تطوير الويب الاحترافية{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  فريق من خبراء تصميم الويب يمكنه مساعدتك في تصميم وإنشاء موقع
                  ويب تفخر به{" "}
                </h2>
                <p className="text-center mx-auto max-text-70">
                  {" "}
                  لقد جمعنا خبرة قوية في إنشاء تطبيقات الويب المتطورة. باستخدام
                  ملف أفضل تقنيات تطوير الويب والأدوات المناسبة ، يمكن لفريقنا
                  تطوير منتج بامتداد تناسب السوق بشكل مثالي. يعد بناء منتج عملية
                  معقدة ، وسنساعدك خلالها كل خطوة في هذه الرحلة ، من تصور فكرتك
                  إلى إنشاء التطبيقات وصيانة التطبيق.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6">
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-78.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  ب 2 ب ، ب 2 ج ، خدمات تطوير المنصات الداخلية{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  خدمات تطوير المواقع الإلكترونية - نبني معنا أي منصة ب 2 ب / ب
                  2 ج / منصة داخلية واسمحوا نطاق عملك.{" "}
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  اكتشف الآن{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-79.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  تطوير الخلفية - جافا سكريبت ، بي إتش بي{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  قم ببناء الواجهة الخلفية الخاصة بك كباقي api باستخدام جافا
                  سكريبت (عقدة ، صريحة) أو بي أتش بي (سيمفوني ، لارافيل).{" "}
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  اكتشف الآن{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-80.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  تطوير الواجهة الأمامية - رد فعل ، نعم. شبيبة{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  تجربة مستخدم مذهلة. بناء الواجهة الأمامية للتطبيق الخاص بك مع
                  موثوق و محبوب من قبل ملايين التقنيات - تتفاعل و نعم. شبيبة ..{" "}
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  اكتشف الآن{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Latest Projects --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container-md">
            <div className="row g-4 align-items-xl-end">
              <div className="col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold">
                  {" "}
                  أحدث أعمالنا لعملك{" "}
                </span>
                <h2> أحدث دراسات الحالة </h2>
              </div>
              <div className="col-xl-6">
                <ul className="list list-row flex-wrap justify-content-xl-end list--divider list-group">
                  <li>
                    <Link
                      className="tab-button active"
                      id="list-home-list"
                      data-bs-toggle="list"
                      href="#web-design">
                      {" "}
                      تصميم المواقع{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-profile-list"
                      data-bs-toggle="list"
                      href="#technology">
                      {" "}
                      تكنولوجيا{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-messages-list"
                      data-bs-toggle="list"
                      href="#cyber">
                      {" "}
                      سيبر{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-settings-list"
                      data-bs-toggle="list"
                      href="#software">
                      {" "}
                      برمجة{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-restricted">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="web-design">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
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
                                إستراتيجية المستخدم{" "}
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
                <div className="tab-pane fade" id="technology">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="#" className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                <div className="tab-pane fade" id="cyber">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
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
                                إستراتيجية المستخدم{" "}
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
                <div className="tab-pane fade" id="software">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
                    <div className="col-sm-6 col-lg-3">
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
                                إستراتيجية المستخدم{" "}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial --> */}
      <Feedback_3 />
      {/* <!-- Team Core Value --> */}
      <CoreValue />
      {/* <!-- Let's Talk --> */}
      <Letstalk />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default service_details_1;
