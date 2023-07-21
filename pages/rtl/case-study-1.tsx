import Companies from "@/components/rtl/Companies";
import Feedback_2 from "@/components/rtl/Feedback_2";
import Navbar from "@/components/rtl/Navbar";
import Features from "@/components/rtl/home_2/Features";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "@/components/rtl/home_4/Footer";

const case_study_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/case-study-1" />
      {/* Banner */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> دراسات الحالة - 01 </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/ltr" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> دراسات الحالة - 01 </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End -->
    <!-- Service Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> المشاريع الفخورة التي تبرز </span>
              <h2 className="mt-5 mb-5 text-center"> تسليم المشاريع التي تثبت جودتنا </h2>
              <p className="text-center mx-auto max-text-60"> ساعد أفضل متخصصي تكنولوجيا المعلومات لدينا عشرات المؤسسات في العديد من القطاعات في الآونة الأخيرة سنين. لفهم كيف ساعدنا في بناء منتجات رقمية مختلفة ونرى ما في وسعنا تحقق لشركتك ، اقرأ دراسات الحالة الخاصة بنا. </p>
            </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-md-10 col-xl-6 text-center">
            <div className="service-filter mb-4">
              <ul className="nav nav-pills justify-content-center gap-3 flex-wrap" role="tablist">
                <li className="nav-item">
                  <button className="service-filter__btn nav-link rounded-pill active" data-bs-toggle="pill" data-bs-target="#all-service" type="button" role="tab" aria-controls="all-service" aria-selected="true"> الجميع </button>
                </li>
                <li className="nav-item">
                  <button className="service-filter__btn nav-link rounded-pill" data-bs-toggle="pill" data-bs-target="#web-dev" type="button" role="tab" aria-controls="web-dev" aria-selected="false"> الويب </button>
                </li>
                <li className="nav-item">
                  <button className="service-filter__btn nav-link rounded-pill" data-bs-toggle="pill" data-bs-target="#service-design" type="button" role="tab" aria-controls="service-design" aria-selected="false"> تصميم </button>
                </li>
                <li className="nav-item">
                  <button className="service-filter__btn nav-link rounded-pill" data-bs-toggle="pill" data-bs-target="#service-research" type="button" role="tab" aria-controls="service-research" aria-selected="false"> بحث </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="all-service" role="tabpanel" aria-labelledby="all-service" tabIndex={0}>
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-1.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-2.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-3.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-4.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-5.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-6.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
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
              <div className="tab-pane fade" id="web-dev" role="tabpanel" aria-labelledby="web-dev" tabIndex={0}>
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-1.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-2.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-3.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-4.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-5.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-6.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
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
              <div className="tab-pane fade" id="service-design" role="tabpanel" aria-labelledby="service-design" tabIndex={0}>
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-1.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-2.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-3.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-4.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-5.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-6.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
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
              <div className="tab-pane fade" id="service-research" role="tabpanel" aria-labelledby="service-research" tabIndex={0}>
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-1.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-2.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-3.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-4.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-5.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
                          </h5>
                          <span className="d-block"> استشارات تكنولوجيا المعلومات </span>
                        </div>
                        <Link href="case-study-details-1" className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                          <span className="material-symbols-rounded mat-icon fw-100"> east </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="case-studies-1">
                      <Link href="case-study-details-1" className="case-studies-1__link">
                        <img src="/images/case-6.png" alt="image" className="case-studies-1__img" />
                      </Link>
                      <div className="case-studies-1__content">
                        <div className="group group-xxs flex-grow-1">
                          <h5>
                            <Link href="case-study-details-1" className="t-link clr-heading :clr-base"> إستراتيجية واجهة المستخدم </Link>
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
      {/* Contact Section */}
      <div className="section--top question-section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
              <div className="text-center">
                <span className="d-inline-block h5 mb-0 lh-1 fw-semibold clr-base"> حصلت على السؤال؟ </span>
                <h2 className="mt-2 mb-5 clr-dark"> نحن هنا للرد عليه! </h2>
                <p className="text-center clr-dark"> من فضلك أرسل لنا معلومات عن مشروعك. يجب على أحد مديري المشاريع لدينا تقييم متطلبات مشروعك وتقديم اقتراح رسمي لك. معلومات مفصلة سيساعدنا في تقييم مشروعك بدقة. </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <form action="#" className="contact-form-1 bg-base p-5 p-md-10 rounded-4">
              <div className="row g-4">
                <div className="col-md-6">
                  <input type="text" className="form-control rounded-pill contact-form-1__input" placeholder="اسم*" />
                </div>
                <div className="col-md-6">
                  <input type="number" className="form-control contact-form-1__input rounded-pill" placeholder="هاتف*" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control contact-form-1__input rounded-pill" placeholder="بريد إلكتروني*" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control contact-form-1__input rounded-pill" placeholder="اسم الشركة" />
                </div>
                <div className="col-12">
                  <div className="contact-form-1__select yellow-input rounded-pill">
                    <select className="form-select rounded-pill">
                      <option>حدد الخدمات</option>
                      <option value="1">واحد</option>
                      <option value="2">اثنين</option>
                      <option value="3">ثلاثة</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control rounded-pill contact-form-1__input" placeholder="اسم المرجعية*" />
                </div>
                <div className="col-md-6">
                  <input type="number" className="form-control contact-form-1__input rounded-pill" placeholder="هاتف الإحالة*" />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control contact-form-1__input rounded-pill" placeholder="البريد الإلكتروني للإحالة*" />
                </div>
                <div className="col-12">
                  <textarea className="form-control contact-form-1__input rounded-8" rows={3} placeholder="دعنا نعرف"></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="accept-news" />
                    <label className="form-check-label clr-light" htmlFor="accept-news"> أرغب في الحصول على أحدث المنتجات وإعلانات الأحداث و قيادة الفكر. </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="accept-terms" />
                    <label className="form-check-label clr-light" htmlFor="accept-terms"> لقد قرأت وقبلت شروط وأحكام سياسة الخصوصية </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center mt-6">
                    <button className="bttn bttn--warning bttn-md bttn-pill fw-md"> أرسل رسالة </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      {/* Features */}
      <Features />
      {/* Feedback Slider */}
      <Feedback_2 />
      {/* Companies */}
      <Companies />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default case_study_1;
