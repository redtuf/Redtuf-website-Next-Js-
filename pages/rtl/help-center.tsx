import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";

import { useEffect } from "react";

const help_center = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/help-center" />
      {/* Banner */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section--sm help-banner">
              <div className="row">
              <div className="col-md-10 col-lg-8">
                <span className="d-block h5 lh-1 fw-semibold clr-accent"> مركز المساعدة </span>
                <h2 className="mt-5 mb-5 clr-light"> نحن هنا لمساعدتك </h2>
                <p className="mb-11 clr-light xxl-text"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
                <div className="newsletter-2 bg-light max-text-50">
                  <input type="text" className="newsletter-2__input placeholder-clr clr-dark" placeholder="ابحث عن المقالات..." />
                  <button className="bttn bttn--base bttn-sm fw-md flex-shrink-0 rounded-1 newsletter-2__btn"> يبحث </button>
                </div>
              </div>
              </div>
              <div className="help-banner__img">
                <img 
                  src="/images/support-banner-img.png"
                  alt="image"
                  className="help-banner__img-is"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Help Category --> */}
      <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3> تصفح الأسئلة حسب الفئة </h3>
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
              <p className="mb-8"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-62.png" alt="image" className="img-fluid" /> 
              <h4 className="mt-8 mb-5"> المحمول والجهاز اللوحي </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-63.png" alt="image" className="img-fluid" /> 
              <h4 className="mt-8 mb-5"> المدفوعات </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-64.png" alt="image" className="img-fluid" /> 
              <h4 className="mt-8 mb-5"> استكشاف الأخطاء وإصلاحها </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-65.png" alt="image" className="img-fluid" /> 
              <h4 className="mt-8 mb-5"> إعدادات الفريق </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-66.png" alt="image" className="img-fluid" /> 
              <h4 className="mt-8 mb-5"> إعدادات الفواتير </h4>
              <p className="mb-8"> يجب اتباع الألم نفسه. الدهليز القوس يجادل أعضاء ليو ضرر فاريترا ليس وقت الشرب. </p>
              <Link href="getting-started" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- Popular Question  --> */}
      <div className="section bg-neutral-100">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <h3 className="text-center"> أسئلة شائعة </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-6">
          <div className="col-md-6">
            <div className="question-card">
              <h5 className="mb-2">
                <Link href="help-center-details" className="t-link d-block clr-heading question-card__title"> كيفية إنشاء حساب إيتشيكس مجاني؟ </Link>
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
                <Link href="help-center-details" className="t-link d-block clr-heading question-card__title"> كيفية إنشاء حساب إيتشيكس مجاني؟ </Link>
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

export default help_center;
