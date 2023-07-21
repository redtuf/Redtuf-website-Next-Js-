import Link from 'next/link';
import React from 'react';

const Workprocess = () => {
    return (
      <section className="work-process-1">
      <div className="work-process-1__top section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11 col-xl-6">
              <span className="d-block h5 lh-1 fw-semibold clr-accent text-center"> الطريقة التي نتبعها في عملنا </span>
              <h2 className="mt-5 mb-5 text-center clr-light"> كيف يساعد إيتشيكس-+ عملك </h2>
              <p className="max-text-60 text-center mx-auto clr-light"> نحن نقدم خدمات فريدة مصممة خصيصًا لشركتك. طرق مبتكرة للمساعدة عزز أرباح شركتك </p>
            </div>
          </div>
        </div>
      </div>
      <div className="work-process-1__bottom section pb-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">01</span>
                </div>
                <h5 className="mt-8 mb-5"> 01. مناقشة </h5>
                <p className="mb-6"> قبل تقديم اقتراح ، نلتقي مع العملاء وجهًا لوجه لاستعراض تفاصيلهم المحددة متطلبات. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">02</span>
                </div>
                <h5 className="mt-8 mb-5"> 02. الأفكار والمفاهيم </h5>
                <p className="mb-6"> يأتي خبراؤنا بجميع أنواع الأفكار والخطط للتأكد من أن خدمات تكنولوجيا المعلومات المختار لديهم أفضل الحلول. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">03</span>
                </div>
                <h5 className="mt-8 mb-5"> 03. اختبار ومحاولة </h5>
                <p className="mb-6"> بعد أن نتفق جميعًا على الأفكار والخطط ، سننفذها كما هو مخطط لها ونعطيها ردود الفعل على النتائج والتغييرات. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">04</span>
                </div>
                <h5 className="mt-8 mb-5"> 04. التنفيذ والتثبيت </h5>
                <p className="mb-6"> بمجرد قبول المخطط النهائي ، سيتم تنفيذ كل شيء وفقًا بالعقد الموقع. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Workprocess;