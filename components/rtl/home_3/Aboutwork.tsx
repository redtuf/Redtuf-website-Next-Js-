import Link from 'next/link';
import React from 'react';

const Aboutwork = () => {
    return (
      <div className="section about-section-1">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11 col-xl-6">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> الطريقة التي نتبعها في عملنا </span>
              <h2 className="mt-5 mb-5 text-center"> كيف يساعد Itechex عملك </h2>
              <p className="text-center mx-auto max-text-60"> نحن نقدم خدمات فريدة مصممة خصيصًا لشركتك. طرق مبتكرة للمساعدة عزز أرباح شركتك </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="about-card-1">
              <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                <span className="h6 fw-bold d-inline-block m-0">01</span>
              </div>
              <h5 className="mt-8 mb-5"> 01. مناقشة </h5>
              <p className="mb-6"> قبل تقديم اقتراح ، نجتمع مع العملاء وجهًا لوجه للمضي قدمًا متطلباتهم الخاصة. </p>
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
              <p className="mb-6"> يأتي خبراؤنا بجميع أنواع الأفكار والخطط للتأكد من أن خدمات تكنولوجيا المعلومات المختارة لديها أفضل الحلول. </p>
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
              <p className="mb-6"> بعد أن نتفق جميعًا على الأفكار والخطط ، سننفذها كما هو مخطط لها وإبداء الملاحظات على النتائج والتغييرات. </p>
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
              <p className="mb-6"> بمجرد قبول المخطط النهائي ، سيتم تنفيذ كل شيء وفقا للعقد الموقع. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Aboutwork;