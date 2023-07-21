import Link from 'next/link';
import React from 'react';

const Service = () => {
    return (
      <section className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-11 col-xxl-10">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> خدمات تقنية المعلومات الاحترافية لعملك </span>
              <h2 className="mt-5 mb-5 text-center"> نحن نقدم مجموعة واسعة من خدمات تكنولوجيا المعلومات التي تضمن نجاح شركتك. </h2>
              <p className="text-center mx-auto t-short-para"> نحن ملتزمون بتقديم خدمات تكنولوجيا المعلومات للشركات الصغيرة والمتوسطة مع قابلية التوسع والكفاءة على مستوى المؤسسة. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                <img src="/images/icon-1.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">حل تكنولوجيا المعلومات</h5>
                <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات </p>
                <Link href="service-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
                <div className="service-card__number mt-5">
                  <span className="service-card__number-is h5"> 01 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1 h-100">
              <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                <img src="/images/icon-2.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">تطوير الشبكة</h5>
                <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات </p>
                <Link href="service-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
                <div className="service-card__number mt-5">
                  <span className="service-card__number-is h5"> 02 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                <img src="/images/icon-3.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">خدمات الشبكات</h5>
                <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات </p>
                <Link href="service-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
                <div className="service-card__number mt-5">
                  <span className="service-card__number-is h5"> 03 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="group group-row flex-wrap justify-content-center align-items-center">
                <Link href="service-1" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> مزيد من الخدمة </Link>
                <Link href="contact-us-1" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> اتصل بنا الآن </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Service;