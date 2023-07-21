import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";

import { useEffect } from "react";

const getting_started = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/getting-started" />
      {/* Banner Sectoin */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> ابدء </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> شركة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> مركز المساعدة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> ابدء </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Help Topics --> */}
      <section className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-6">
              <h2 className="text-center mb-5"> ابدء </h2>
              <p className="text-center mx-auto max-text-50"> ما لم تعمهم الشهوة ، لا يخرجون ؛ إنهم مخطئون الذين يتركون واجباتهم مانع هذا هو العمل. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-6 justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="help-card">
              <div className="d-flex align-items-center gap-2 clr-base">
                <span className="material-symbols-rounded mat-icon fw-200"> calendar_month </span>
                <span className="d-block"> 26 مايو 2022 </span>
              </div>
              <h4 className="mt-4 mb-5"> هل تقدمون تجارب مجانية على إيتشيكس </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. كجعبة لا توجد عطلة نهاية الأسبوع. فليكن لقد أنهيت واجبي المنزلي وليس لدي وقت للسفر إلى المطار. وجع الحياة هو وجع الله. من يحتاج إلى دورة سهلة. </p>
              <Link href="help-center-details" className="t-link t-link--base fw-md"> تصفح المقالات <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-xl-8">
            <div className="help-card">
              <div className="d-flex align-items-center gap-2 clr-base">
                <span className="material-symbols-rounded mat-icon fw-200"> calendar_month </span>
                <span className="d-block"> 26 مايو 2022 </span>
              </div>
              <h4 className="mt-4 mb-5"> كيف يمكنني دعوة أعضاء فريقي؟ </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. كجعبة لا توجد عطلة نهاية الأسبوع. فليكن لقد أنهيت واجبي المنزلي وليس لدي وقت للسفر إلى المطار. وجع الحياة هو وجع الله. من يحتاج إلى دورة سهلة. </p>
              <Link href="help-center-details" className="t-link t-link--base fw-md"> تصفح المقالات <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-xl-8">
            <div className="help-card">
              <div className="d-flex align-items-center gap-2 clr-base">
                <span className="material-symbols-rounded mat-icon fw-200"> calendar_month </span>
                <span className="d-block"> 26 مايو 2022 </span>
              </div>
              <h4 className="mt-4 mb-5"> كيفية إنشاء حساب إيتشيكس مجاني؟ </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. كجعبة لا توجد عطلة نهاية الأسبوع. فليكن لقد أنهيت واجبي المنزلي وليس لدي وقت للسفر إلى المطار. وجع الحياة هو وجع الله. من يحتاج إلى دورة سهلة. </p>
              <Link href="help-center-details" className="t-link t-link--base fw-md"> تصفح المقالات <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <!-- CTA --> */}
      <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bg-base rounded-5 p-4 p-sm-8 p-xl-12 p-xxl-15">
            <div className="d-flex align-items-center gap-8 justify-content-between flex-wrap">
              <div className="d-flex gap-5 flex-wrap">
                <div className="flex-shrink-0">
                  <img src="/images/icon-67.png" alt="image" className="img-fluid" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="clr-light mb-4"> لا يمكنك العثور على الجواب الصحيح؟ </h3>
                  <p className="clr-light max-text-50"> اذهب إلى صفحة الاتصال الخاصة بنا و <Link href="#" className="t-link d-inline-block clr-accent :clr-light">ابق على تواصل معنا</Link>. سيسعد فريق الدعم لدينا بمساعدتك. </p>
                </div>
              </div>
              <Link href="contact-us-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md gap-2">
                <span className="d-inline-block"> اتصل بنا </span>
                <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center"> arrow_forward </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- Category --> */}
      <section className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6">
              <h3> المزيد من الفئات </h3>
            </div>
            <div className="col-md-6">
              <div className="text-md-end">
                <Link href="help-center" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> جميع الفئات </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-6">
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-61.png" alt="image" className="img-fluid" />
              <h4 className="mt-8 mb-5"> ابدء </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. كجعبة لا توجد عطلة نهاية الأسبوع. فليكن لقد أنهيت واجبي المنزلي وليس لدي وقت للسفر إلى المطار. وجع الحياة هو وجع الله. من يحتاج إلى دورة سهلة. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-62.png" alt="image" className="img-fluid" />
              <h4 className="mt-8 mb-5"> تطبيقات الموبايل </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. كجعبة لا توجد عطلة نهاية الأسبوع. فليكن لقد أنهيت واجبي المنزلي وليس لدي وقت للسفر إلى المطار. وجع الحياة هو وجع الله. من يحتاج إلى دورة سهلة. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-63.png" alt="image" className="img-fluid" />
              <h4 className="mt-8 mb-5"> المدفوعات </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. كجعبة لا توجد عطلة نهاية الأسبوع. فليكن لقد أنهيت واجبي المنزلي وليس لدي وقت للسفر إلى المطار. وجع الحياة هو وجع الله. من يحتاج إلى دورة سهلة. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default getting_started;
