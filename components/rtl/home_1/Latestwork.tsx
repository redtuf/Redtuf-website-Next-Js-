import Link from 'next/link';
import React from 'react';

const Latestwork = () => {
    return (
      <div className="section--sm bg--white">
      {/* <!-- Latest Work Section --> */}
      <div className="section--sm">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row g-4 align-items-lg-end">
              <div className="col-lg-4 col-xl-5">
                <span className="d-block h5 lh-1 fw-semibold clr-base"> أحدث أعمالنا لعملك </span>
                <h2> أحدث دراسات الحالة </h2>
              </div>
              <div className="col-lg-8 col-xl-7">
                <ul className="list list-row flex-wrap justify-content-lg-end list--divider list-group">
                  <li>
                    <Link className="tab-button active" id="list-home-list" data-bs-toggle="list" href="#web-design"> تصميم المواقع </Link>
                  </li>
                  <li>
                    <Link className="tab-button" id="list-profile-list" data-bs-toggle="list" href="#technology"> تكنولوجيا </Link>
                  </li>
                  <li>
                    <Link className="tab-button" id="list-messages-list" data-bs-toggle="list" href="#cyber"> سيبر </Link>
                  </li>
                  <li>
                    <Link className="tab-button" id="list-settings-list" data-bs-toggle="list" href="#software"> برمجة </Link>
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
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-1.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-2.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-3.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-4.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
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
                          <img src="/images/case-img-4.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-3.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-2.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-1.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
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
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-1.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-2.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-3.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-4.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
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
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-4.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-3.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-2.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="case-study-details-1" className="case-studies-1__link">
                          <img src="/images/case-img-1.png" alt="image" className="case-studies-1__img" />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية المستخدم </Link>
                            </h5>
                            <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                          </div>
                          <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100"> east </span>
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
      {/* <!-- Latest Work Section End --> */}
      {/* <!-- Pricing Section  --> */}
      <div className="section--sm">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> خطة تسعير رائعة </span>
                <h2 className="mt-5 mb-5 text-center"> نحن نقدم حزمة تسعير ذكية لحلول تكنولوجيا المعلومات </h2>
                <p className="mx-auto text-center t-short-para"> يسعى فريقنا لمساعدة عملائنا في الاحتفاظ أو الحصول على أفضل المناصب في فئتها قطاعاتهم. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12">
              <div className="group group-xs group-row align-items-center justify-content-center">
                <span className="clr-heading d-inline-block"> شهريا </span>
                <label className="checkbox">
                  <input id="input" type="checkbox" className="checkbox__input" />
                </label>
                <span className="clr-heading d-inline-block"> سنوي <span className="xsm-text clr-base">وفر 20٪</span>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="price-card-1">
                <div className="price-card-1__head">
                  <div className="price-card-1__head-icon base">
                    <img src="/images/icon-12.png" alt="image" className="price-card-1__head-icon-is" />
                  </div>
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-heading">خطة المبتدئين</span>
                    <span className="display-block h4 text-center clr-base m-0">300 دولار</span>
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
            <div className="order-md-3 order-lg-2 col-lg-4">
              <div className="price-card-1 popular">
                <span className="popular__label">
                  <span className="popular__label-text"> اختيار شعبي </span>
                </span>
                <div className="price-card-1__head">
                  <div className="price-card-1__head-icon light">
                    <img src="/images/icon-13.png" alt="image" className="price-card-1__head-icon-is" />
                  </div>
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-light">خطة المبتدئين</span>
                    <span className="display-block h4 text-center clr-accent m-0">300 دولار</span>
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
                  <Link href="pricing-plan-1" className="bttn bttn--light bttn-md bttn-pill fw-md flex-shrink-0"> البدء <span className="material-symbols-rounded mat-icon fw-100 bttn__icon"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 col-lg-4">
              <div className="price-card-1">
                <div className="price-card-1__head">
                  <div className="price-card-1__head-icon base">
                    <img src="/images/icon-14.png" alt="image" className="price-card-1__head-icon-is" />
                  </div>
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-heading">خطة المبتدئين</span>
                    <span className="display-block h4 text-center clr-base m-0">300 دولار</span>
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
      {/* <!-- Pricing Section End --> */}
    </div>
    );
};

export default Latestwork;