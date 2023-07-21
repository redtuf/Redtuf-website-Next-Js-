import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";

import { useEffect } from "react";

const help_center_details = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/help-center-details" />
      {/* Banner */}
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
            <div className="col-md-8 col-lg-6">
              <div className="group group-xs group-row justify-content-center align-items-center clr-base mb-5">
                <span className="material-symbols-rounded mat-icon flex-shrink-0 d-none d-sm-block"> calendar_today </span>
                <span className="d-inline-block"> 22 مايو 2023 </span>
              </div>
              <h2 className="text-center mb-5"> هل تقدمون تجارب مجانية على إيتشيكس؟ </h2>
              <p className="text-center mx-auto max-text-50"> ما لم تعمهم الشهوة ، لا يخرجون ؛ إنهم مخطئون الذين يتركون واجباتهم مانع هذا هو العمل. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-6 justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h4 className="mb-5"> ما هو إيتشيكس? </h4>
            <p> يجب اتباع الألم نفسه. ما لم يشرب الأطفال بسعر زهيد غدًا. الحياة البنية للاثنين من تدريب كرة القدم وستكون الجرة كاملة جدًا. في الواقع ، إنها فترة إحماء لكرة القدم. طبي سأقوم بواجبي المنزلي. في بعض الأحيان يغري عنصر التوسيد. </p>
            <h4 className="mt-15 mb-5"> كيفية إنشاء حساب مجاني على إيتشيكس؟ </h4>
            <p> يجب اتباع الألم نفسه. ما لم يشرب الأطفال بسعر زهيد غدًا. الحياة البنية للاثنين من تدريب كرة القدم وستكون الجرة كاملة جدًا. في الواقع ، إنها فترة إحماء لكرة القدم. طبي سأقوم بواجبي المنزلي. في بعض الأحيان يغري عنصر التوسيد. </p>
            <h4 className="mt-15 mb-5"> كيفية تنزيل وإعداد تطبيق أو تقنية الويب؟ </h4>
            <p> يجب اتباع الألم نفسه. ما لم يشرب الأطفال بسعر زهيد غدًا. الحياة البنية للاثنين من تدريب كرة القدم وستكون الجرة كاملة جدًا. في الواقع ، إنها فترة إحماء لكرة القدم. طبي سأقوم بواجبي المنزلي. في بعض الأحيان يغري عنصر التوسيد. </p>
            <figure className="my-15">
              <img src="/images/help-details-img.png" alt="image" className="img-fluid" />
              <figcaption className="text-center mt-8">أكره أن الطريق السهل هو كتلة الحياة. </figcaption>
            </figure>
            <h5 className="mb-5"> كيفية إعداد حساب إيتشيكس الخاص بك </h5>
            <p> يجب اتباع الألم نفسه. ما لم يشرب الأطفال بسعر زهيد غدًا. الحياة البنية للاثنين من تدريب كرة القدم وستكون الجرة كاملة جدًا. في الواقع ، إنها فترة إحماء لكرة القدم. طبي سأقوم بواجبي المنزلي. في بعض الأحيان يغري عنصر التوسيد. </p>
            <ul className="list list-disc list-disc--base mt-6">
              <li>
                <p> ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟ </p>
              </li>
              <li>
                <p> الآن أنت بحاجة إلى شعلة أو شعلة. يا له من بطل </p>
              </li>
              <li>
                <p> إنتاج سي إن إن هو برنامج تلفزيوني </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      {/* <!-- Related Question  --> */}
      <div className="section bg-neutral-100">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <h3 className="text-center"> أسئلة ذات صلة </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-6">
          <div className="col-md-6">
            <div className="question-card">
              <h5 className="mb-2">
                <Link href="help-center-details" className="t-link d-block clr-heading question-card__title"> كيفية إنشاء حساب مجاني على إيتشيكس؟ </Link>
              </h5>
              <Link href="help-center-details" className="t-link t-link--base fw-md question-card__link"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="question-card">
              <h5 className="mb-2">
                <Link href="help-center-details" className="t-link d-block clr-heading question-card__title"> هل تقدمون تجارب مجانية على إيتشيكس؟ </Link>
              </h5>
              <Link href="help-center-details" className="t-link t-link--base fw-md question-card__link"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="question-card">
              <h5 className="mb-2">
                <Link href="help-center-details" className="t-link d-block clr-heading question-card__title"> كيف يمكنني دعوة أعضاء فريقي؟ </Link>
              </h5>
              <Link href="help-center-details" className="t-link t-link--base fw-md question-card__link"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="question-card">
              <h5 className="mb-2">
                <Link href="help-center-details" className="t-link d-block clr-heading question-card__title"> كيفية إنشاء حساب مجاني على إيتشيكس؟ </Link>
              </h5>
              <Link href="help-center-details" className="t-link t-link--base fw-md question-card__link"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default help_center_details;
