import Link from 'next/link';
import React from 'react';

const Projects = () => {
    return (
      <div className="section case-study-section">
      <div className="section__gap-bottom">
        <div className="container-md">
          <div className="row g-4 align-items-xl-end">
            <div className="col-xl-6">
              <span className="d-block h5 lh-1 fw-semibold clr-base overlay-text"> أحدث أعمالنا لعملك <span className="overlay-text__content">المشاريع</span>
              </span>
              <h2> أحدث دراسات الحالة </h2>
            </div>
            <div className="col-xl-6">
              <ul className="list list-row flex-wrap justify-content-xl-end list--divider list-group">
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
    );
};

export default Projects;