import Link from 'next/link';
import React from 'react';

const Pricing = () => {
    return (
      <div className="pricing-section-1">
      <div className="section--sm section--top">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> اختر خطة التسعير الخاصة بك بدون تكاليف خفية. </span>
                <h2 className="mt-5 mb-5 text-center"> تغطي دفعة شهرية واحدة تكلفة جميع تكنولوجيا المعلومات خدمات. </h2>
                <p className="text-center mx-auto max-text-70"> هدف فريقنا هو مساعدة عملائنا الحفاظ على المناصب العليا أو تحقيقها: نحن نقدم مجموعة واسعة من تكنولوجيا المعلومات الخدمات ، وكلها مضمونة لتعزيز عملك. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4 order-md-2 order-lg-1">
              <div className="price-card-1">
                <div className="price-card-1__head">
                  <img src="/images/icon-32.png" alt="image" className="img-fluid" />
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-heading">خطة المبتدئين</span>
                    <span className="display-block h4 text-center clr-base m-0">$300</span>
                  </div>
                  <p className="text-center"> نصمم الحلول التي تقلل العقبات </p>
                </div>
                <div className="price-card-1__body">
                  <h6 className="mb-5">ما يحتويه</h6>
                  <ul className="list list-0 list--check check-base bordered-bottom">
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> الدعم بسعر 25 دولارًا في الساعة </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> هندسة انتاج </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> استشارات تكنولوجيا المعلومات </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> إصلاحات وتحديثات مجانية </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> الحلول الرقمية </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> 24/7 مراقبة النظام </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> مساعدة عن بعد </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link href="pricing-plan-1" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> البدء <span className="material-symbols-rounded mat-icon fw-100 bttn__icon"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-md-1 order-lg-2">
              <div className="price-card-1 popular">
                <span className="popular__label">
                  <span className="popular__label-text"> اختيار شعبي </span>
                </span>
                <div className="price-card-1__head">
                  <img src="/images/icon-33.png" alt="image" className="img-fluid" />
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-light">الخطة القياسية</span>
                    <span className="display-block h4 text-center clr-accent m-0">$300</span>
                  </div>
                  <p className="text-center clr-light"> نصمم الحلول التي تقلل العقبات </p>
                </div>
                <div className="price-card-1__body">
                  <h6 className="mb-5 clr-light">ما يحتويه</h6>
                  <ul className="list list-0 list--check check-accent bordered-bottom">
                    <li className="align-items-center">
                      <span className="d-block clr-light"> الدعم بسعر 25 دولارًا في الساعة </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> هندسة انتاج </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> استشارات تكنولوجيا المعلومات </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> إصلاحات وتحديثات مجانية </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> الحلول الرقمية </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> 24/7 مراقبة النظام </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> مساعدة عن بعد </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link href="pricing-plan-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md"> البدء <span className="material-symbols-rounded mat-icon fw-300 bttn__icon"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 order-md-3">
              <div className="price-card-1">
                <div className="price-card-1__head">
                  <img src="/images/icon-34.png" alt="image" className="img-fluid" />
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-heading">خطة المؤسسة</span>
                    <span className="display-block h4 text-center clr-base m-0">$300</span>
                  </div>
                  <p className="text-center"> نصمم الحلول التي تقلل العقبات </p>
                </div>
                <div className="price-card-1__body">
                  <h6 className="mb-5">ما يحتويه</h6>
                  <ul className="list list-0 list--check check-base bordered-bottom">
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> الدعم بسعر 25 دولارًا في الساعة </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> هندسة انتاج </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> استشارات تكنولوجيا المعلومات </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> إصلاحات وتحديثات مجانية </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> الحلول الرقمية </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> 24/7 مراقبة النظام </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading"> مساعدة عن بعد </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link href="pricing-plan-1" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> البدء <span className="material-symbols-rounded mat-icon fw-100 bttn__icon"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Pricing;