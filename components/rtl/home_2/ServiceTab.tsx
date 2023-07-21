import Link from "next/link";


const ServiceTab = () => {
  return (
    <div className="section">
    <div className="section__gap-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> نحن نقدم خدمات تكنولوجيا المعلومات على مستوى عالمي. </span>
            <h2 className="mt-5 mb-5 text-center"> أكملت بنجاح آلاف المشاريع في 20 دولة </h2>
            <p className="text-center mx-auto max-text-70"> من خلال عروضنا العديدة لتكنولوجيا المعلومات ، نضمن لك رضاك ​​ونجاحك. مساعدة في التكنولوجيا يتطلب القليل من الجهد ولا متاعب. نحن نقدم أحدث خدمات تكنولوجيا المعلومات. </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row g-4 justify-content-center">
        <div className="col-xl-8 text-center">
          <div className="service-filter mb-4">
            <ul className="p-0 nav nav-pills justify-content-center gap-3 flex-wrap" role="tablist">
              <li className="nav-item">
                <button className="service-filter__btn nav-link rounded-pill active" data-bs-toggle="pill" data-bs-target="#all-service" type="button" role="tab" aria-controls="all-service" aria-selected="true"> الجميع </button>
              </li>
              <li className="nav-item">
                <button className="service-filter__btn nav-link rounded-pill" data-bs-toggle="pill" data-bs-target="#web-dev" type="button" role="tab" aria-controls="web-dev" aria-selected="false"> تطوير الشبكة </button>
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
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-1.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> التكامل الظاهري </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-2.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تكنولوجيا المعلومات المدارة </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-3.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> الأمن الإلكتروني </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-4.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تصميم المنتج </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="web-dev" role="tabpanel" aria-labelledby="web-dev" tabIndex={0}>
              <div className="row g-4">
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-1.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> التكامل الظاهري </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-2.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تكنولوجيا المعلومات المدارة </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-3.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> الأمن الإلكتروني </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-4.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تصميم المنتج </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="service-design" role="tabpanel" aria-labelledby="service-design" tabIndex={0}>
              <div className="row g-4">
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-1.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> التكامل الظاهري </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-2.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تكنولوجيا المعلومات المدارة </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-3.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> الأمن الإلكتروني </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/service-img-4.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تصميم المنتج </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="service-research" role="tabpanel" aria-labelledby="service-research" tabIndex={0}>
              <div className="row g-4">
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-1.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> التكامل الظاهري </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-2.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تكنولوجيا المعلومات المدارة </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-8.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> الأمن الإلكتروني </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="service-card-2">
                    <Link href="service-details-1" className="service-card-2__img">
                      <img src="/images/case-img-3.png" alt="image" className="service-card-2__img-is" />
                    </Link>
                    <div className="service-card-2__content">
                      <h6>
                        <Link href="service-details-1" className="t-link service-card-2__title"> تصميم المنتج </Link>
                      </h6>
                      <Link href="service-details-1" className="service-card-2__icon-btn">
                        <span className="material-symbols-outlined mat-icon fw-100"> trending_flat </span>
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

export default ServiceTab;
